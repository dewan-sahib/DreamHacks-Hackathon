export default function About() {
  return (
    <div className="mt-[10%] m-3 w-[95%] flex flex-col justify-center align-center p-5 shadow-2xl">
      <p
        id="about"
        className="self-center w-[90%] h-fit p-5 bg-blue-500 rounded-lg text-white text-center text-2xl font-semibold"
      >
        About
      </p>
      <div className="flex flex-col lg:flex-row">
        <img
          src="public/mental.png"
          className="w-full h-full"
          alt="person working on laptop"
          style={{ maxWidth: "400px", maxHeight: "400px" }}
        />
        <div className="flex flex-col self-center mt-3 justify-center align-center">
          <p className="self-center text-xl font-semibold text-black pb-2">
            About
          </p>
          <p className="self-center w-[80%] pb-5">
            We are a team of dedicated volunteers who are passionate about
            helping individuals in need. Our mission is to provide support and
            resources to those who may be struggling with mental health issues.
            We believe that everyone deserves access to the help they need, and
            we are committed to making a difference in our community.
          </p>
          <button
            className="bg-blue-500 w-[30%] h-fit p-3 rounded-xl text-white self-center cursor-pointer hover:shadow-lg"
            onClick={() => {
              document
                .querySelector("#call")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Call Now
          </button>
        </div>
      </div>
    </div>
  );
}
