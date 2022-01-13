import Link from "next/link";
import style from "./Layout.module.css";

export default function Layout(props) {
  return (
    <>
      <header className="flex l-box b-border">
        <div className="logo box">ICON</div>
        <nav className="box">
          <ul className={style.navbar}>
            <li>#explorer :</li>
            <li className="head2 im-color">
              <Link href="/">A propos</Link>
            </li>
            <li className="head2 ds-color">
              <Link href="/project">Réalisations</Link>
            </li>
            <li className="head2 sm-color">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="language box">
          <span className="head2 im-color">FR </span>
          <span>|</span>
          <span> MG</span>
        </div>
      </header>
      <main>{props.children}</main>
    </>
  );
}
