import { useState } from "react";
import Field from "./Field";

export default function Call() {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: null,
    availablity: null,
  });

  const updateField = ({ e, field }) => {
    setFields((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <div
      id="call"
      className="mt-[10%] m-3 w-[95%] flex flex-col justify-center align-center p-5 shadow-2xl"
    >
      <p className="self-center w-[90%] h-fit p-5 bg-blue-500 rounded-lg text-white text-center text-2xl font-semibold mb-3">
        Volunteer Support
      </p>
      <img
        src="volunteer-icon.png"
        className="self-center w-fit h-fit"
        alt="Volunteer Support Icon"
      />
      <div className="flex gap-2 flex-col justify-center items-center">
        <Field
          name={fields["name"]}
          placeHolder="Full Name"
          updateField={updateField}
        />
        <Field
          name={fields["email"]}
          placeHolder="Email"
          updateField={updateField}
        />
        <Field
          name={fields["phone"]}
          placeHolder="Phone"
          updateField={updateField}
        />
        <Field
          name={fields["availablity"]}
          placeHolder="Availablity"
          updateField={updateField}
        />
        <button
          onSubmit={() =>
            alert("Thanks for filling the form! You will be contacted soon.")
          }
          className="p-3 bg-blue-500 rounded-xl text-white w-[30%]"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
