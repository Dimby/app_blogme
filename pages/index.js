import Link from "next/link";
import Salut from "../public/images/salut-image.jpg";
import Poster from "../public/images/poster-im.jpg";
import Dimby from "../public/images/dimby-07.svg";
import Image from "next/image";
import { IoLogoLinkedin, IoLogoFacebook } from "react-icons/io5";
import Button from "../components/button/Button";

export default function Home() {
  const onClickContact = () => {
    console.log("Clicked");
  };

  return (
    <>
      <div className="flex h-v-center h-70vh box">
        <div className="w-40 box">
          <div className="flex justify-start align-center">
            <div className="left-box">
              <Image src={Salut} alt="Salut image" width={60} height={60} />
            </div>
            <div className="head im-text">Salut,</div>
          </div>
          <br />
          <br />
          <div className="flex justify-start">
            <div className="left-box"></div>
            <div>
              <div className="head-lower">Je suis</div>
              <div className="head">
                <Image src={Dimby} alt="My name" />
              </div>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="left-box"></div>
            <div className="w-80">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>
          <br />
          <br />
          <div className="flex justify-start">
            <div className="left-box"></div>
            <div>
              <div className="flex justify-start align-center">
                <div>
                  <Button
                    href="/game"
                    classes="btn im"
                    text="Contacter moi"
                    onClick={onClickContact}
                  />
                </div>
                <div className="social-section">
                  <span>ou</span>
                  <span>
                    <IoLogoLinkedin />
                  </span>
                  <span>
                    <IoLogoFacebook />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-40 box">
          <Image src={Poster} alt="Poster Iron Man image" />
        </div>
      </div>
      {/* <h1 className="ds-text head1">Mes réalisations</h1>
      <h2 className="im-text head2">Mes réalisations</h2>
      <Link href="/game" passHref>
        <button className="btn im">Contacter moi</button>
      </Link>
      <button className="btn bp">Envoyer un message</button>
      <button className="btn sm">Envoyer un message</button>
      <button className="btn ds">Envoyer un message</button>
      <p className="box">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry s standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p> */}
    </>
  );
}
