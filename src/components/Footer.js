import React from "react";

const Footer = ({ length }) => {
  return (
    <div className="text-bluish bg-sand border-t border-grayish w-full h-[10vh]">
      <h1 className="p-2 text-center font-semibold">Total Notes: {length}</h1>
      <p className="text-center">&copy; Crafted By Hari Anand</p>
    </div>
  );
};

export default Footer;
