import React from "react";

const Footer = ({ length }) => {
  return (
    <div className="text-bluish bg-sand border-t border-grayish w-full h-[10vh]">
      <h1 className="p-5 text-center font-semibold">Total Notes: {length}</h1>
    </div>
  );
};

export default Footer;
