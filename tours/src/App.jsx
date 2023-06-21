import { useEffect, useState } from "react";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
      setTours(data);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <div className="loading" style={{ marginTop: "5rem" }}></div>;
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
