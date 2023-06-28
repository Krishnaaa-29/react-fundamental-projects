import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
            consequatur, ipsa nemo ex hic unde. Iste, itaque, perferendis
            corrupti ab alias ea modi, error consequuntur ipsam fugit
            exercitationem distinctio nam?
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="hero-image" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
