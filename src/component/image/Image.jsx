import React from "react";

function Image(props) {
  return (
    <div className="center">
      <img src={props.srcc} alt={props.alt} className={props.classnameimg} />
    </div>
  );
}

export default Image;
