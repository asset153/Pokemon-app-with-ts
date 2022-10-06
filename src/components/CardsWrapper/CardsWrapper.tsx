import React from 'react';
import Card from "../Card/Card";

interface ICardsWrapperProps {
    data: object[]
}

 const CardsWrapper: React.FC<ICardsWrapperProps> = function CardsWrapper({data}) {
    console.log("CardsWrapper", data);
    
  return (
    <section>
        {data.map(item => <Card coupleOfThings={item}/>)}
    </section>
  )
}

export default CardsWrapper;
