import Link from "next/link";
import style from "./Layout.module.css";
import { IoToggleSharp, IoHeart, IoArrowBack } from "react-icons/io5";
import Image from "next/image";
import logo from "../../public/logo-06.svg";

export default function Layout(props) {
  return (
    <>
      <header className="flex align-center l-box">
        <div className="logo box">
          <Image src={logo} alt="logo-blog" />
        </div>
        <nav className="box">
          <ul className={style.navbar}>
            <li>#explorer :</li>
            <li className="head2 im-text">
              <Link href="/">A propos</Link>
            </li>
            <li className="head2 ds-text">
              <Link href="/project">Réalisations</Link>
            </li>
            <li className="head2 sm-text">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="language box">
          <span className="item head2 im-text">FR </span>
          <span>
            <IoArrowBack />
          </span>
          <span className="item"> MG</span>
        </div>
      </header>
      <main>{props.children}</main>
      <footer className="flex justify-end w-100">
        <div>2022 - dimbyrasolonirina@gmail.com - +261 34 85 634 92</div>
        <div className="w-40 text-right loving">
          Made with{" "}
          <span>
            <IoHeart />
          </span>
        </div>
      </footer>
    </>
  );
}
