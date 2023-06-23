import { useState } from "react";
import { useEffect } from "react";
import Companies from "./Companies";
import JobInfo from "./JobInfo";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentJob, setCurrentJob] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const resp = await fetch(url);
        const data = await resp.json();
        setJobs(data);
        console.log(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    setIsLoading(false);
    fetchData();
  }, []);

  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <main className="main-container">
      <Companies
        jobs={jobs}
        currentJob={currentJob}
        setCurrentJob={setCurrentJob}
      />
      {/* <JobInfo jobs={jobs} currentJob={currentJob} /> */}
    </main>
  );
}

export default App;
