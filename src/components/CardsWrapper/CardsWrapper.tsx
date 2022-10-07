import React from "react";
import Card from "../Card/Card";

interface ICardsWrapperProps {
  data: object[];
}

interface ExampleObject {
  id: number;
  name: string;
  types: any;
  sprites: any;
}

const CardsWrapper: React.FC<ICardsWrapperProps> = function CardsWrapper(
  props: ICardsWrapperProps
) {

  console.log(props.data);
  
  return (
    <section>
      {props.data?.map((item: object, index: number) => {
        return (
          <Card key={index} item={item}/>
        )
      })}
    </section>
  );
};

export default CardsWrapper;
