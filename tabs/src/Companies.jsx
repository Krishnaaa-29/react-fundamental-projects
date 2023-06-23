const Companies = ({ jobs, currentJob, setCurrentJob }) => {
  return (
    <div>
      {jobs.map((job, index) => {
        return (
          <button
            key={job.id}
            onClick={() => setCurrentJob(index)}
            className={
              index === currentJob ? "company-btn active-btn" : "company-btn"
            }
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
};
export default Companies;
