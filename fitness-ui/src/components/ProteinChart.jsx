import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function ProteinChart({ data }) {
  if (!data.length) return null;

  const chartData = data.map((p, i) => ({
    name: p.date,
    value: i + 1
  }));

  return (
    <div className="mt-10 h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line dataKey="value" stroke="#ea580c" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ProteinChart;
