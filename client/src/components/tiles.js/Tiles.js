import React from 'react'
import './tiles.css'

function Tiles({info}) {
 const {name,quote,symbol,cmc_rank,} = info
 let price = quote.USD.price.toFixed(2)
  let pricechange = quote.USD.percent_change_24h.toFixed(2)
  let flag = pricechange > 0
  pricechange = flag?pricechange:-1*pricechange
  console.log(flag)
   
  return (
    <div className='TilesContainer'>
        <div className='inner'>
        <div className='innermost'>
                <h3>{name}</h3>
                <p style={flag?{color:'green'}:{color:'red'}}>{pricechange}</p>
                <h5>{symbol}</h5>
        </div>
        <div  className='innermost'>
            
               <h6>Price <span style = {{marginLeft:"20px"}}>${price}</span></h6>
               <h6>Rank <span style = {{marginLeft:"15px"}}>{cmc_rank}</span></h6>
               <button>  butoon</button>
              
                
           
                    
            
        </div>

            
       </div>
    </div>
  )
}

export default Tiles