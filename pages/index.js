import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="ds-color head1">Mes réalisations</h1>
      <h2 className="im-color head2">Mes réalisations</h2>
      <Link href="/game">
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
      </p>
    </>
  );
}
