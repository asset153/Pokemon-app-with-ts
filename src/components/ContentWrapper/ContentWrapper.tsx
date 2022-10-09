import { useEffect, useState } from "react";
import Header from "../Header/Header";
import CardsWrapper from "../CardsWrapper/CardsWrapper";

const ContentWrapper: React.FC = function () {
  const [data, setData] = useState<object[]>([]);
  const [error, setError] = useState<any>(null);

  interface IDataTypes {
    results: object[];
  }

  useEffect(() => {
    const getData = async function (src: string): Promise<void> {
      try {
        const response: Response = await fetch(src);
        const data: IDataTypes = await response.json();

        console.log(data);

        const fn = async function (arg: any): Promise<void> {
          let arr: object[] = [];
          arg.forEach(async (item: any) => {
            const x = await fetch(item.url);
            const y = await x.json();

            arr.push(y);
            setData(arr);
          });
        };

        fn(data.results);
      } catch (err) {
        setError(err);
      }
    };
    getData("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0");
  }, []);

  return (
    <div className="container">
      <Header />
      <CardsWrapper data={data} />
    </div>
  );
};

export default ContentWrapper;
