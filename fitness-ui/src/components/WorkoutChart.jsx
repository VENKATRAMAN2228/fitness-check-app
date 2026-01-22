import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function WorkoutChart({ data }) {
  if (!data.length) return null;

  const chartData = data.map((w, i) => ({
    name: w.date,
    value: i + 1
  }));

  return (
    <div className="mt-10 h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#16a34a" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default WorkoutChart;
