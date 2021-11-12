import { Link } from "react-router-dom";
import { Switch } from 'antd';
import { useState } from "react";

export default function Shopcontent(){
    var orderclassName;
    const [online,setOnline] = useState(false);
    const setSwitch = (check) =>{
        setOnline(check);
    }
    if(online){
        orderclassName="Shopcontent-online-order"
    }
    else{
        orderclassName="Shopcontent-online-order-dis"
    }
    return(
      <div className="Shopcontent">  
        <div className="Shopcontent-row">
          <div className="Shopcontent-online-box">
              <p className="Shopcontent-online-text">上線</p>
              <Switch onChange={setSwitch} className="Shopcontent-online-switch"/>
          </div>
          <div className="Shopcontent-online-box">
              <Link to='ShopOrder' className={orderclassName}>
                  訂單頁面
              </Link>
          </div>
        </div>
        <div className="Shopcontent-row">
          <div className="Shopcontent-online-box">
                <Link to='HistoryOrder' className="Shopcontent-online-order">
                  歷史訂單
                </Link>
          </div>
          <div className="Shopcontent-online-box">
                <Link to='QuestionbyShop' className="Shopcontent-online-order">
                  問題回報
                </Link>
          </div>
        </div>
      </div>
    )
}