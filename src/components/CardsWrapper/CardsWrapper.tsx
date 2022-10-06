import React from "react";
import Card from "../Card/Card";

interface ICardsWrapperProps {
  data: object[];
}

const CardsWrapper: React.FC<ICardsWrapperProps> = function CardsWrapper(
  props: ICardsWrapperProps
) {
  type IItem = { id?: number };

  return (
    <section>
      {props.data.map((item: IItem) => (
        <Card key={item.id} coupleOfThings={item} />
      ))}
    </section>
  );
};

export default CardsWrapper;
