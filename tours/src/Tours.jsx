import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="header">
        <h2 className="title">Our Tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="container">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};
export default Tours;
