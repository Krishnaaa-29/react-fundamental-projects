import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Hi, welcome to my site</h1>
          <p>
            I am Krishna Kulshreshtha and I am a FrontEnd Developer in making.
            In the website, I have listed some of the projects I made while I
            was learning development. Each Project showcases different React
            Features such as State management, Context API, Hooks such as
            useState, useEffect, useReducer, some libraries like React Router,
            React Query, etc. This is a simple layout and definitely just the
            start. If you have any advices, do give it to me at the email id
            given below. Meanwhile, Enjoy...
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
