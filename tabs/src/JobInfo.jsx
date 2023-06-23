import Duties from "./Duties";

const JobInfo = ({ jobs, currentJob }) => {
  const { dates, company, duties, title } = jobs[currentJob];

  return (
    <div>
      <h2 className="title">{title}</h2>
      <span className="company">{company}</span>
      <p className="dates">{dates}</p>
      <Duties duties={duties} />
    </div>
  );
};
export default JobInfo;
