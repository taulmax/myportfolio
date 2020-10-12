import React, { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const header = document.querySelector(".header");
    const handleHeader = () => {
      if (window.scrollY > 200) {
        header.style.backgroundColor = "white";
        header.style.color = "black";
        header.style.boxShadow = "0px 4px 20px 0px rgba(168,168,168,1)";
      } else {
        header.style.backgroundColor = "transparent";
        header.style.color = "white";
        header.style.boxShadow = "";
      }
    }
    document.addEventListener("scroll", handleHeader);
  });

  const goMenu = e => {
    var menu = e.target.innerText;
    var menuBox = document.getElementById(menu);
    var menuBoxTop = menuBox.offsetTop;
    window.scrollTo({
      top: menuBoxTop,
      behavior: 'smooth'
    });
  }

  return (
    <>
      <header className="header">
        <span className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>JUNHYEOK</span>
        <div className="menuContainer">
          <span className="menu" onClick={goMenu}>Home</span>
          <span className="menu" onClick={goMenu}>About</span>
          <span className="menu" onClick={goMenu}>Skills</span>
          <span className="menu" onClick={goMenu}>Project</span>
          <span className="menu" onClick={goMenu}>Contact</span>
        </div>
        <span className="burgerMenu">
          <i className="fas fa-bars"></i>
        </span>
      </header>
    </>
  );
};

export default Header;
