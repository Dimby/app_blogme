import Link from "next/link";
import Button from "../../components/button/Button";

import {
  IoLogoLinkedin,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoGithub,
} from "react-icons/io5";

export default function Contact() {
  const onClickSend = () => {
    console.log("Send");
  };

  return (
    <>
      <div className="sm-spiderweb"></div>
      <div className="sm-face"></div>
      <div className="flex h-v-center h-70vh box">
        <div className="w-30 box mr-3">
          <div className="head2 sm-text">Me contacter</div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <form>
            <div className="form-item">
              <label>
                Nom <span className="text-small">(et prénom)</span>
              </label>
              <input type="text" />
            </div>
            <div className="form-item">
              <label>Email</label>
              <input type="email" />
            </div>
            <div className="form-item">
              <label>
                Téléphone <span className="text-small">(facultatif)</span>
              </label>
              <input type="text" />
            </div>
            <div className="form-item">
              <label>Déscription</label>
              <textarea rows="3"></textarea>
            </div>
            <Button
              href="/game"
              classes="btn sm"
              text="Envoyer"
              onClick={onClickSend}
            />
          </form>
        </div>
        <div className="l-border w-30 box pl-3">
          <div className="head2 sm-text">Me retrouver</div>
          <p>Sur les réseaux sociaux</p>
          <div className="box social">
            <span className="item">
              <a href="https://www.linkedin.com" target="blank">
                <IoLogoLinkedin />
              </a>
            </span>
            <span className="item">
              <a href="https://www.facebook.com" target="blank">
                <IoLogoFacebook />
              </a>
            </span>
            <span className="item">
              <a href="https://www.instagram.com" target="blank">
                <IoLogoInstagram />
              </a>
            </span>
            <span className="text">ou sur</span>
            <span className="item">
              <a href="https://github.com/Dimby" target="blank">
                <IoLogoGithub />
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
