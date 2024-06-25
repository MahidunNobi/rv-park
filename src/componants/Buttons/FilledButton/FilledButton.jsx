const FilledButton = ({ text }) => {
  return (
    <button className="btn btn-active bg-hunterGreen text-white border-2 border-transparent outline-none hover:bg-white hover:text-hunterGreen hover:border-hunterGreen">
      {text ? text : "Book your stay"}
    </button>
  );
};

export default FilledButton;
