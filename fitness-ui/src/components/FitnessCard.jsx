import { useNavigate } from "react-router-dom";

function FitnessCard({ title, description, color, path }) {
  const navigate = useNavigate();

  return (
    <div
      className={`rounded-xl p-6 text-white shadow-lg transform hover:scale-105 transition ${color}`}
    >
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-sm opacity-90">{description}</p>

      <button
        onClick={() => navigate(path)}
        className="mt-4 bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
      >
        Open
      </button>
    </div>
  );
}

export default FitnessCard;
