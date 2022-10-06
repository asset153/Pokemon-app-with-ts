import {useEffect, useState} from 'react'
import Header from '../Header/Header';
import CardsWrapper from '../CardsWrapper/CardsWrapper';

 const ContentWrapper: React.FC = function() {
    const [data, setData] = useState<object[]>([]);

    interface DataTypes {
        id: number,
        name: string,
        types: object[],
        sprites: object
    };

    useEffect(() => {
        const getData = async function(src: string): Promise<void> {
            try {
                const response = await fetch(src);
                const data: DataTypes = await response.json();

                const {name, id, types, sprites} = data;
                return setData([{name, id, types, sprites}]);
            } catch(err) {
                console.log(err);
            }
        }

        getData("https://pokeapi.co/api/v2/pokemon/8/");
    }, []);

    console.log(data);
    
  return (
    <div className='container'>
        <Header />
        <CardsWrapper data={data}/>
    </div>
  )
}

export default ContentWrapper;