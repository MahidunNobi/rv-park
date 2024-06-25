const Title = ({ title, colored }) => {
  return (
    <h1 className="text-3xl md:text-4xl font-semibold text-center">
      {title} <span className="text-hunterGreen underline"> {colored} </span>
    </h1>
  );
};

export default Title;
