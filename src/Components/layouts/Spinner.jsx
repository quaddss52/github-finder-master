import spinner from "./assets/spinner.gif";
function Spinner() {
  return (
    <div className="w-100 mt-20">
      <img
        width="200"
        className="text-centre mx-auto"
        src={spinner}
        alt="Loading...."
      />
    </div>
  );
}

export default Spinner;
