import useSendRandom from "../hooks/useSendRandom/useSendRandom";

function Button() {
  return (
    <button className="border-2 border-lime-600" onClick={useSendRandom}>
      Send to server
    </button>
  );
}

export default Button;
