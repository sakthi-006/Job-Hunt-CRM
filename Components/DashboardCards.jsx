import {
  FaBriefcase,
  FaUserClock,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

function DashboardCards({ jobs }) {

  const total = jobs.length;

  const interview = jobs.filter(
    (job) => job.status === "Interview"
  ).length;

  const offer = jobs.filter(
    (job) => job.status === "Offer"
  ).length;

  const rejected = jobs.filter(
    (job) => job.status === "Rejected"
  ).length;

  const cards = [
    {
      title: "Applications",
      value: total,
      icon: <FaBriefcase />,
      color: "#38bdf8",
    },
    {
      title: "Interviews",
      value: interview,
      icon: <FaUserClock />,
      color: "#f59e0b",
    },
    {
      title: "Offers",
      value: offer,
      icon: <FaCheckCircle />,
      color: "#22c55e",
    },
    {
      title: "Rejected",
      value: rejected,
      icon: <FaTimesCircle />,
      color: "#ef4444",
    },
  ];

  return (
    <div className="cards-grid">

      {cards.map((card, index) => (

        <div className="dashboard-card" key={index}>

          <div
            className="card-icon"
            style={{ color: card.color }}
          >
            {card.icon}
          </div>

          <h3>{card.title}</h3>

          <h1>{card.value}</h1>

        </div>

      ))}

    </div>
  );
}

export default DashboardCards;