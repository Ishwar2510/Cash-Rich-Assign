import React,{useContext,useEffect, useState} from 'react'
import { Logincontext } from "../context/Contextprovider";
import { useNavigate } from "react-router-dom";
import Tiles from '../tiles.js/Tiles';
import './main.css'
function Maincomp() {
    const { account } = useContext(Logincontext);
    const navigate = useNavigate();
    const [datas, setData] = useState(
      {
        "status": {
            "timestamp": "2023-02-09T19:40:39.485Z",
            "error_code": 0,
            "error_message": null,
            "elapsed": 40,
            "credit_count": 1,
            "notice": null
        },
        "data": {
            "BTC": {
                "id": 1,
                "name": "Bitcoin",
                "symbol": "BTC",
                "slug": "bitcoin",
                "num_market_pairs": 9974,
                "date_added": "2013-04-28T00:00:00.000Z",
                "tags": [
                    "mineable",
                    "pow",
                    "sha-256",
                    "store-of-value",
                    "state-channel",
                    "coinbase-ventures-portfolio",
                    "three-arrows-capital-portfolio",
                    "polychain-capital-portfolio",
                    "binance-labs-portfolio",
                    "blockchain-capital-portfolio",
                    "boostvc-portfolio",
                    "cms-holdings-portfolio",
                    "dcg-portfolio",
                    "dragonfly-capital-portfolio",
                    "electric-capital-portfolio",
                    "fabric-ventures-portfolio",
                    "framework-ventures-portfolio",
                    "galaxy-digital-portfolio",
                    "huobi-capital-portfolio",
                    "alameda-research-portfolio",
                    "a16z-portfolio",
                    "1confirmation-portfolio",
                    "winklevoss-capital-portfolio",
                    "usv-portfolio",
                    "placeholder-ventures-portfolio",
                    "pantera-capital-portfolio",
                    "multicoin-capital-portfolio",
                    "paradigm-portfolio"
                ],
                "max_supply": 21000000,
                "circulating_supply": 19286050,
                "total_supply": 19286050,
                "is_active": 1,
                "platform": null,
                "cmc_rank": 1,
                "is_fiat": 0,
                "self_reported_circulating_supply": null,
                "self_reported_market_cap": null,
                "tvl_ratio": null,
                "last_updated": "2023-02-09T19:39:00.000Z",
                "quote": {
                    "USD": {
                        "price": 22080.05672805089,
                        "volume_24h": 29456688487.70542,
                        "volume_change_24h": 13.5086,
                        "percent_change_1h": -2.19660967,
                        "percent_change_24h": -3.43213546,
                        "percent_change_7d": -7.22102437,
                        "percent_change_30d": 26.72108906,
                        "percent_change_60d": 28.60849191,
                        "percent_change_90d": 31.53217735,
                        "market_cap": 425837078060.0259,
                        "market_cap_dominance": 41.3559,
                        "fully_diluted_market_cap": 463681191289.07,
                        "tvl": null,
                        "last_updated": "2023-02-09T19:39:00.000Z"
                    }
                }
            }
        }
    }

    )
    
    console.log(Object.keys(datas.data).map((elem)=>{
      console.log(datas.data[elem])
    }))

  // useEffect(() => {
  //   if (!account.email) {
  //     navigate("/login");
  //   }
  // }, []);
     
  return (
    <div className="Main">
    <div className='AppTitle'>
    <h1>CoinRich</h1>
    </div>
     
      <div className='cardContainer'>
      {
       Object.keys(datas.data).map((elem,index)=>{
        return <Tiles key = "index" info={datas.data[elem]}/>
       })
      }
      </div>
    </div>
  );
}

export default Maincomp