import React from "react";

interface ICardProps {
  item: {
    id?: number;
    name?: string;
    types?: any;
    sprites?: {
      front_default: string;
    };
  };
}

const Card: React.FC<ICardProps> = function ({ item }) {
  const { id, name, sprites } = item;
  return (
    <div className="card m-auto" style={{ width: "18rem" }}>
      <img
        src={sprites?.front_default}
        className="card-img-top"
        alt="pokemon picture"
      />
      <div className="card-body">
        <h5 className="card-title">Name: {name}</h5>
        <h6 className="card-title">ID: {id}</h6>
        <p className="card-text">Type: {item?.types[0].type.name}</p>

        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Card;
