import { AiOutlineMail } from "react-icons/ai";
import { links } from "./data";
import { nanoid } from "nanoid";
import { FaHandLizard } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  const handleClick = () => {
    window.location.href = "mailto:kkulshreshtha29@gmail.com";
  };

  return (
    <section className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="left">
            <h4>Reach out to me.</h4>
            <p>
              Click on the links if you want to follow me or give me some
              suggestions.
            </p>
          </div>
          <div className="right">
            {links.map((link) => {
              const { title, icon, url } = link;
              return (
                <a key={nanoid()} href={url} target="_blank" rel="noreferrer">
                  {icon}
                </a>
              );
            })}
            <button className="gmail" onClick={handleClick}>
              <AiOutlineMail />
            </button>
          </div>
        </div>
        <div className="footer-underline"></div>
        <div className="footer-bottom">
          <p>&copy; {year} Made by Krishna Kulshreshtha. All rights reserved</p>
        </div>
      </div>
    </section>
  );
};
export default Footer;
