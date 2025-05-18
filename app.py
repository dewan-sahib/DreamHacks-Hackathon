from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai

genai.configure(api_key="")
app = Flask(__name__)
CORS(app)


class Data:
    traceback = []  # Stores text

    def add_text(text):
        Data.traceback.append(text)

    def storage():
        return Data.traceback



@app.route('/api/message', methods=['POST'])
def message():

    user_input = request.json.get("text")
    Data.add_text(user_input)
    model = genai.GenerativeModel("gemini-1.5-flash")
    response= model.generate_content(f'you are a helpful assistant named freind to help depressed people please talk them nicely like a humble friend, their previous messages are {Data.storage()} and the new message is {user_input}')
    response = response.text
    print(response)
    return jsonify({"reply": response})


if __name__ == "__main__":

    app.run(debug=True)