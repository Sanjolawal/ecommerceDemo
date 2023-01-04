import "./warning.css";
import { useState } from "react";

const Warning = () => {
  const [display, setdisplay] = useState(true);

  return (
    <div>
      <div
        className="con"
        style={display ? { display: `flex` } : { display: `none` }}
      >
        <p className="p">
          Contact actual developer
          <a target="_blank" href="https://wa.link/hn7dp7" className="a">
            whatsapp
          </a>
          or
          <a target="_blank" href="https://bit.ly/3cFsQFo" className="a">
            fiverr
          </a>
          for full product request/review
        </p>
        <p
          className="p"
          onClick={() => {
            setdisplay(!display);
          }}
        >
          ❌
        </p>
      </div>
    </div>
  );
};

export default Warning;
