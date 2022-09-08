import React from "react"


const BestCoin = ({BestCoinList}) => {

  console.log(BestCoinList)

  return (
      <>
      
<h4 className='text-center mt-5 shadow p-1 mb1 bg-body rounded' >Top 10 of Coins</h4>


<ul className="list-group width='50%'
        height='50%' text-center">
<div  className="text-center row row-cols-5 row-cols-md-7 g-7 mt-7 p-7 ">

  {   BestCoinList.map((coins,index) => {
  return(
      <div key={index} className="col text-center">
      <div key={index} className="card h-100 text-center">
      <img  src={coins.symbol} className="card-img-left"  />
      <div  className="card-body text-center">
      <h5  className="card-title text-center">{coins.rank}</h5>
      <h6  className="card-title text-center">{coins.nameCoin}</h6>
      <p  className="card-text text-center">
       Price : {coins.price}
      </p>
      </div>
      </div>
      </div>
  )
 }
)}
</div>
</ul>
      
      
    
      
      
      
      </>
  )

}

  















   
// return (
//   <><div class="card-group">

//   <div className="card">
//     <img src="" class="card-img-top" alt="..." />
//     <div className="card-body">
//     <p className="card-text">prics</p>
//     </div>
//   </div>

//   <div className="card">
//     <img src="" class="card-img-top" alt="..."/>
//     <div className="card-body">
//     <p className="card-text">prics</p>
//     </div>
//   </div>

//   <div className="card">
//     <img src="" class="card-img-top" alt="..."/>
//     <div className="card-body">
//     <p className="card-text">prics</p>
//     </div>
//   </div>

//   <div className="card">
//     <img src="" class="card-img-top" alt="..."/>
//     <div className="card-body">
//     <p className="card-text">prics</p>
//     </div>
//   </div>

//   <div className="card ">
//     <img src="" class="card-img-top" alt="..."/>
//     <div className="card-body">
//     <p className="card-text">prics</p>
//     </div>
//   </div>
// </div>

// <div className="card-group">
//   <div className="card">
//     <img src="" class="card-img-top" alt="..." />
//     <div className="card-body">
//       <p className="card-text">prics</p>
//     </div>
//   </div>

//   <div className="card">
//     <img src="" class="card-img-top" alt="..."/>
//     <div className="card-body">
//       <p className="card-text">prics</p>
//     </div>
//   </div>

//   <div className="card">
//     <img src="" class="card-img-top" alt="..."/>
//     <div className="card-body">
//       <p className="card-text"> prics</p>
//     </div>
//   </div>

//   <div className="card">
//     <img src="" class="card-img-top" alt="..."/>
//     <div className="card-body">
//       <p className="card-text">prics</p>

//     </div>
//   </div>

//   <div className="card">
//     <img src="" class="card-img-top" alt="..."/>
//     <div className="card-body">
//     <p className="card-text">prics</p>
//     </div>
//   </div>
// </div>


//  </>   );

// };
  
  
    


export default BestCoin;