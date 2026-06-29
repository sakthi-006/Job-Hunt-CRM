import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Navbar from "../Components/Navbar";
import DashboardCards from "../Components/DashboardCards";
import SearchBar from "../Components/SearchBar";
import AddJobForm from "../Components/AddJobForm";
import JobTable from "../Components/JobTable";
import AnalyticsChart from "../Components/AnalyticsChart";
import "../Styles/Dashboard.css";
import "../src/App.css"

function Dashboard() {

  const [jobs, setJobs] = useState(() => {
    const saved = localStorage.getItem("jobs");
    return saved ? JSON.parse(saved) : [];
  });

  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");
  const [interviewDate, setInterviewDate] = useState("");
  const [notes, setNotes] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  const addJob = () => {

    if (!company || !role || !status) {
      alert("Please fill all required fields");
      return;
    }

    const newJob = {
      id: Date.now(),
      company,
      role,
      status,
      interviewDate,
      notes,
    };

    setJobs([...jobs, newJob]);

    setCompany("");
    setRole("");
    setStatus("");
    setInterviewDate("");
    setNotes("");
  };

  const deleteJob = (id) => {
    setJobs(jobs.filter(job => job.id !== id));
  };

  const filteredJobs = jobs.filter(job =>
    job.company.toLowerCase().includes(search.toLowerCase()) ||
    job.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    
      <Navbar />

      <motion.div
        className="Dashboard-container"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}  
        transition={{ duration: 0.8 }}>
        
        <div className="Dashboard-header">

          <h1>🚀 Job Hunt CRM</h1>

          <p>Track every application like a professional.</p>

        </div>

        <DashboardCards jobs={jobs} />

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <JobTable
          jobs={filteredJobs}
          deleteJob={deleteJob}
        />

        <AddJobForm
          company={company}
          setCompany={setCompany}
          role={role}
          setRole={setRole}
          status={status}
          setStatus={setStatus}
          interviewDate={interviewDate}
          setInterviewDate={setInterviewDate}
          notes={notes}
          setNotes={setNotes}
          addJob={addJob}
        />
        <AnalyticsChart jobs={jobs} />
      </motion.div>
    </>
  );
}

export default Dashboard;