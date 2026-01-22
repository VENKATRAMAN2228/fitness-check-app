import { useState, useEffect } from "react";
import RunningChart from "../components/RunningChart";

function Running() {
  const [date, setDate] = useState("");
  const [distance, setDistance] = useState("");
  const [entries, setEntries] = useState([]);

  // ✅ LOAD DATA ON PAGE LOAD
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("runningData")) || [];
    setEntries(saved);
  }, []);

  // ✅ SAVE FUNCTION
  const handleSave = () => {
    if (!date || !distance) return;

    const updated = [...entries, { date, distance }];
    setEntries(updated);
    localStorage.setItem("runningData", JSON.stringify(updated));

    setDistance("");
  };

  // ✅ DELETE FUNCTION
  const handleDelete = (index) => {
    const updated = entries.filter((_, i) => i !== index);
    setEntries(updated);
    localStorage.setItem("runningData", JSON.stringify(updated));
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Running & Abs 🏃‍♂️</h2>

      <div className="flex flex-col gap-3">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border rounded p-2"
        />

        <input
          type="number"
          placeholder="Distance (km)"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          className="border rounded p-2"
        />

        <button
          onClick={handleSave}
          className="bg-blue-600 text-white py-2 rounded"
        >
          Save
        </button>
      </div>

      {/* LIST */}
      <ul className="mt-4 space-y-3">
        {entries.map((e, i) => (
          <li
            key={i}
            className="flex justify-between items-center bg-gray-100 p-3 rounded"
          >
            <div>
              <p className="font-semibold">{e.date}</p>
              <p>{e.distance} km</p>
            </div>
            <button
              onClick={() => handleDelete(i)}
              className="text-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* CHART */}
      <div className="mt-6">
        <RunningChart data={entries} />
      </div>
    </div>
  );
}

export default Running;
