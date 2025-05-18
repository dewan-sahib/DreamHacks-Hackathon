const Box = ({ ikon, dimW, dimH, name }) => {
  return (
    <div className="self-center relative -top-5 md:top-0 hover:shadow-lg hover:-top-7 flex flex-col justify-center align-center text-center p-10 w-[70%] h-[70%] md:w-[20%] md:h-[30] bg-sky-100 rounded-xl">
      <img width={dimW} className={`self-center`} src={ikon} alt="icon" />
      <p className="justify-self-center text-blue-600 font-bold text-lg">
        {name}
      </p>
    </div>
  );
};

export default Box;
