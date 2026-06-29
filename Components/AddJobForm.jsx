function AddJobForm({
  company,
  setCompany,
  role,
  setRole,
  status,
  setStatus,
  interviewDate,
  setInterviewDate,
  notes,
  setNotes,
  addJob,
}) {
  return (
    <div className="job-form">

      <h2>➕ Add New Application</h2>

      <input
        type="text"
        placeholder="Company Name"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
<br /><br />
      <input
        type="text"
        placeholder="Job Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
<br /><br />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="">Select Status</option>
        <option>Applied</option>
        <option>Assessment</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
      <br /><br />

      <input
        type="date"
        value={interviewDate}
        onChange={(e) => setInterviewDate(e.target.value)}
      />

<br /><br />
      <textarea
        placeholder="Notes..."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
<br /> <br />
      <button onClick={addJob}>
        Add Application
      </button>

    </div>
  );
}
<br />
export default AddJobForm;