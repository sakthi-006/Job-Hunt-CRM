import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

function AnalyticsChart({ jobs }) {

  const data = [
    {
      name: "Applied",
      value: jobs.filter(job => job.status === "Applied").length,
    },
    {
      name: "Assessment",
      value: jobs.filter(job => job.status === "Assessment").length,
    },
    {
      name: "Interview",
      value: jobs.filter(job => job.status === "Interview").length,
    },
    {
      name: "Offer",
      value: jobs.filter(job => job.status === "Offer").length,
    },
    {
      name: "Rejected",
      value: jobs.filter(job => job.status === "Rejected").length,
    },
  ];

  const COLORS = [
    "#3b82f6",
    "#f59e0b",
    "#8b5cf6",
    "#22c55e",
    "#ef4444",
  ];

  return (
    <div className="chart-card">

      <h2>📊 Application Analytics</h2>

      <ResponsiveContainer width="100%" height={350}>

        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            outerRadius={120}
            label
          >

            {data.map((entry, index) => (

              <Cell
                key={index}
                fill={COLORS[index]}
              />

            ))}

          </Pie>

          <Tooltip />

          <Legend />

        </PieChart>

      </ResponsiveContainer>

    </div>
  );
}

export default AnalyticsChart;