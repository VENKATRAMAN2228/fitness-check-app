import FitnessCard from "../components/FitnessCard";

function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Your Fitness Dashboard 💪
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FitnessCard
          title="Running & Abs"
          description="Track running distance and core workouts"
          color="bg-gradient-to-br from-blue-500 to-indigo-600"
          path="/running"
        />

        <FitnessCard
          title="Workouts"
          description="Mark daily workouts as done or not done"
          color="bg-gradient-to-br from-green-500 to-emerald-600"
          path="/workouts"
        />

        <FitnessCard
          title="Protein Intake"
          description="Log daily protein consumption"
          color="bg-gradient-to-br from-orange-500 to-red-500"
          path="/protein"
        />
      </div>
    </div>
  );
}

export default Dashboard;
