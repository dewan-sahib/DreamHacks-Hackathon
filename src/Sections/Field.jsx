const Field = ({ name, placeHolder, updateField }) => {
  return (
    <input
      name="name"
      value={name}
      placeholder={placeHolder}
      onChange={(e) => updateField(e, name)}
      className="w-full h-fit p-2 bg-sky-200 border-1 border-gray-200 rounded-md"
    />
  );
};

export default Field;
