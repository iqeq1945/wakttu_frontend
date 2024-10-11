const Test = () => {
  return (
    <input
      type="text"
      onPaste={(e) => {
        e.preventDefault();
      }}
    />
  );
};

export default Test;
