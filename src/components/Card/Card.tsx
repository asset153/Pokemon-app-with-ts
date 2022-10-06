import React from 'react'

type TTypes = {
  type: {
    name: string
  }
};

type TCoupleOfThings = {
  id: number,
  name: string,
  sprites: {
    front_default: string
  },
  types: TTypes
};

interface ICardProps {
    coupleOfThings: TCoupleOfThings | any;
};

const Card: React.FC<ICardProps> = function({coupleOfThings}) {

    console.log("coupleOfThings", coupleOfThings);
    const {id, name, types, sprites} = coupleOfThings; 

  return (
    <div className="card" style={{width: "18rem"}}>
  <img src={sprites.front_default} className="card-img-top" alt="pokemon picture" />
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">Type: {types[0].type.name}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
  )
};

export default Card;
