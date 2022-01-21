import React from "react";
import Link from "next/link";

const Button = ({ href, classes, text, onClick }) => {
  return (
    <Link href={href} passHref>
      <button className={classes} onClick={onClick}>
        {text}
      </button>
    </Link>
  );
};

export default Button;
