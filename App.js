
import { useState } from "react";
import"./App.css";
import BestCoin from "./bestCoin";


const App = ()=> {
const [coinstList,setConsetList]=useState([])








useEffect(() =>{
const fetchCoinData = async ()=>{
    const request = await fetch ('https://api.coincap.io/v2/assets')
    const data = awaitrequest.json();
    console.log(data)
    // const data = await request.json();
    // setCoinImg(data.image);
    // set
};
fetchCoinData();
},[]);

    return (
            
        <div>
            <h1> Coines </h1>
            <BestCoin/>
            
        </div>
    )
};


export default App;



