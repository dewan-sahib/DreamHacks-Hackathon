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
          src="man-laptop.jpg.avif"
          className="w-full h-full"
          alt="person working on laptop"
        />
        <div className="flex flex-col self-center mt-3 justify-center align-center">
          <p className="self-center text-xl font-semibold text-black pb-2">
            About
          </p>
          <p className="self-center w-[80%] pb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
            tellus vitae odio hendrerit ultricies ut venenatis tellus. Aenean a
            consequat lectus, ut pretium est. Fusce at nibh nec libero bibendum
            bibendum vitae at augue. Pellentesque quis urna ac est bibendum
            vestibulum. Sed a accumsan felis. Phasellus in velit sit amet orci
            consequat faucibus in et diam. Duis nec dictum diam. Nullam sed
            eleifend ipsum. Maecenas venenatis luctus urna eu feugiat. Morbi
            volutpat lacus eu iaculis finibus.
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
