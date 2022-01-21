import React from "react";
import { useState } from "react";
// import style from "./ProjetItem.module.css";

const ProjetItem = () => {
  const [projects, setProject] = useState([
    {
      id: 1,
      text: "SPAV 05",
      active: true,
    },
    {
      id: 2,
      text: "PHARMA MOBILE",
      active: false,
    },
    {
      id: 3,
      text: "BRACELET",
      active: false,
    },
    {
      id: 4,
      text: "ZIGNATUR",
      active: false,
    },
  ]);

  const onClickSkill = (id) => {
    // Get projet from id
    // Toggle projet active
    setProject(
      projects.map((project) =>
        project.id === id
          ? { ...project, active: true }
          : { ...project, active: false }
      )
    );
  };

  return (
    <>
      <ul>
        {projects.map((item) => (
          <li
            className={`${item.active === true ? "active" : ""}`}
            key={item.id}
            onClick={() => onClickSkill(item.id)}
          >
            {item.active ? <div className="ds-chevron"></div> : ""}
            {item.text}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProjetItem;
