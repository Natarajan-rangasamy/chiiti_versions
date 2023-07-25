import React from "react";

const Card = (props) => {
  const { name, id, email } = props;

  return (
    <>
      <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img
          src={`https://robohash.org/${id}?200x200`}
          alt="robo"
          width={100}
          height={100}
        />
        <div>
          <div className="tc ">{id}</div>
          {/* <div className="tc ">version {version}</div> */}
          <h3 className="tc">{name}</h3>
          <p className="tc">{email}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
