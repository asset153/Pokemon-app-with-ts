import React from "react";

interface ICardProps {
  coupleOfThings: {
    name: string;
    id: number;
    types: any;
    sprites: any;
  };
}

const Card: React.FC<ICardProps> = function (props: ICardProps) {
  const { id, name, types, sprites } = props.coupleOfThings;

  console.log("coupleOfThings", props.coupleOfThings);

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={sprites.front_default}
        className="card-img-top"
        alt="pokemon picture"
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Type: {types[0].type.name}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Card;
