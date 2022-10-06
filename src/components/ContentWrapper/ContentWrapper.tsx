import { useEffect, useState } from "react";
import Header from "../Header/Header";
import CardsWrapper from "../CardsWrapper/CardsWrapper";

const ContentWrapper: React.FC = function () {
  const [data, setData] = useState<object[]>([]);

  interface IDataTypes {
    id: number;
    name: string;
    sprites: {
      front_default: string;
    };
    types: object[];
  }

  useEffect(() => {
    const getData = async function (src: string): Promise<void> {
      try {
        const response = await fetch(src);
        const data: IDataTypes = await response.json();

        const { name, id, types, sprites } = data;
        return setData([{ name, id, types, sprites }]);
      } catch (err) {
        console.log(err);
      }
    };

    getData("https://pokeapi.co/api/v2/pokemon/8/");
  }, []);

  return (
    <div className="container">
      <Header />
      <CardsWrapper data={data} />
    </div>
  );
};

export default ContentWrapper;
