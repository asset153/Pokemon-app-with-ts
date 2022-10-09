import React from "react";
import Card from "../Card/Card";

interface ICardsWrapperProps {
  data: object[];
}

const CardsWrapper: React.FC<ICardsWrapperProps> = function CardsWrapper(
  props: ICardsWrapperProps
) {
  return (
    <section className="row gap-5 m-auto">
      {props.data?.map((item: object, index: number): JSX.Element => {
        return <Card key={index} item={item} />;
      })}
    </section>
  );
};

export default CardsWrapper;
