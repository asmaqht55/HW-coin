
import { useEffect ,useState } from 'react';
import"./App.css";
import BestCoin from "./BestCoin";
import Search from './Search';


const App = () => {

    const [BestCoinList , setBestCoinList] = useState([]);
    
    
    
    useEffect(() => {
      const fetchCoinsData = async () => {
        const request = await fetch('https://api.coincap.io/v2/assets');
        const data = await request.json();
        
        const coinsMap = data.data.map((coins) => {
          return {
            id: coins.id,
            rank: coins.rank,
            nameCoin: coins.name,
            price: coins.priceUsd,
            symbol: "https://cryptoflash-icons-api.herokuapp.com/svg/color/" + (coins.symbol).toLowerCase(),
          };
        });
        const coin = coinsMap.slice(0,10)
        setBestCoinList(coin);
      };
      fetchCoinsData();
    }, []);
    
    
    
      return (
        <>
        <div className="row">
          <div className="col-6">
             <BestCoin BestCoinList = {BestCoinList}/>
          </div>
          <div className="col-6">
               <Search/>
               </div>
    </div>
        </>
      );
    }
    
    export default App;