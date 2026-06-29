import "../Styles/JobTable.css";
import "../src/App.css"

function JobTable({ jobs, deleteJob }) {
  return (
    <div className="job-table">

      <h2>📋 Job Applications</h2>

      <table>

        <thead>

          <tr>
            <th>Company</th>
            <th>Role</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>

        </thead>

        <tbody>

          {jobs.length === 0 ? (

            <tr>
              <td colSpan="5" className="empty">
                No Applications Yet 🚀
              </td>
            </tr>

          ) : (

            jobs.map((job) => (

              <tr key={job.id}>

                <td>{job.company}</td>

                <td>{job.role}</td>

                <td>
                  <span
                    className={`status ${job.status.toLowerCase()}`}
                  >
                    {job.status}
                  </span>
                </td>

                <td>{job.interviewDate}</td>

                <td>

                 <div className="action-buttons">

       <button
         className="edit-btn"
          onClick={()=>editJob(job)}
        >

        ✏ Edit

           </button>

             <button
               className="delete-btn"
                   onClick={()=>deleteJob(job.id)}
               >

                🗑 Delete

              </button>

</div>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
}

export default JobTable;