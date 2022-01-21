import Link from "next/link";
import { useState } from "react";
import ProjetItem from "../../components/projetItem/ProjetItem";

const Project = () => {
  const projets = [
    {
      id: 1,
      text: "Rakoto est malade",
    },
  ];

  return (
    <>
      <div className="ds-aerogliph"></div>
      <div className="ds-artifact"></div>
      <div className="ds-list">
        <div className="head2 ds-text">Mes réalisations</div>
        <div>
          <ProjetItem />
        </div>
      </div>
      <div className="box flex justify-center align-center pt-3">
        <div className="ds-border flex flex-row justify-space-between w-50 box-skill">
          <div className="content">A</div>
          <div className="text">
            <div className="head2 ds-text">
              <a href="https://ul-time.com" target="blank">
                Titre réalisation
              </a>
            </div>
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
