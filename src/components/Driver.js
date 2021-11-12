import { Link } from "react-router-dom";
import { Switch } from 'antd';
import { useState } from "react";

export default function Driver(){
    var orderclassName;
    const [online,setOnline] = useState(false);
    const setSwitch = (check) =>{
        setOnline(check);
    }
    if(online){
        orderclassName="Driver-online-order"
    }
    else{
        orderclassName="Driver-online-order-dis"
    }
    return(
      <div className="Driver">  
        <div className="Driver-row">
          <div className="Driver-online-box">
              <p className="Driver-online-text">上線</p>
              <Switch onChange={setSwitch} className="Driver-online-switch"/>
          </div>
          <div className="Driver-online-box">
              <Link to='DriverOrder' className={orderclassName}>
                  接單頁面
              </Link>
          </div>
        </div>
        <div className="Driver-row">
          <div className="Driver-online-box">
                <Link to='DriverMoney' className="Driver-online-order">
                  累積獎金
                </Link>
          </div>
          <div className="Driver-online-box">
                <Link to='QuestionbyDriver' className="Driver-online-order">
                  問題回報
                </Link>
          </div>
        </div>
      </div>
    )
}