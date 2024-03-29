import "./menus.css";
import { NavLink } from "react-router-dom";
import { useRef, useEffect } from "react";

const Menus = () => {
  const remove = useRef();

  useEffect(() => {
    if (location.pathname === `/dashboard`) {
      remove.current.style.display = `none`;
    }
    return () => {};
  }, []);

  return (
    <div className="menus">
      <a title="Home">HOME</a>
      <a
        className={
          location.pathname === `/dashboard`
            ? ``
            : `animate__animated animate__heartBeat animate__infinite`
        }
      >
        {location.pathname === `/dashboard` ? `LOGOUT` : `LOGIN`}
      </a>
      <a
        className={
          location.pathname === `/dashboard`
            ? ``
            : `animate__animated animate__heartBeat animate__infinite`
        }
        ref={remove}
      >
        {location.pathname === `/dashboard` ? `` : `SIGNUP`}
      </a>
      <a title="Categories">CATEGORIES</a>
      <a title="Mens's">MEN'S</a>
      <a title="Women's">WOMEN'S</a>
      <a title="Jewelry">JEWELRY</a>
      <a title="Blog">BLOG</a>
      <a title="Hot offers">HOT OFFERS</a>
    </div>
  );
};

export default Menus;
