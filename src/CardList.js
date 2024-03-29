import React from "react";
import Card from "./Card";

const CardList = ({ robo }) => {
  return (
    
    <div>
      {robo.map((user, i) => {
        return (
          <Card
            key={i}
            version={robo[i].version}
            id={robo[i].id}
            name={robo[i].name}
            email={robo[i].email}
          />
          
        );
      })}
    </div>
  );
};
export default CardList;
