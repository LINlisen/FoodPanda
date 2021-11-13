import { Link } from "react-router-dom";
import { Switch,notification  } from 'antd';
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
    const openNotification = () => {
        notification.open({
          message: '尚未上線',
          description:
            '請先上線後再點擊',
          onClick: () => {
            console.log('Notification Clicked!');
          },
        });
      };
    return(
      <div className="Driver">  
        <div className="Driver-row">
          <div className="Driver-online-box">
              <p className="Driver-online-text">上線</p>
              <Switch onChange={setSwitch} className="Driver-online-switch"/>
          </div>
          <div className="Driver-online-box">
              {online?(
                <Link to='DriverOrder' className={orderclassName}>
                  接單頁面
                </Link>
              ):(
                <Link to='/' className={orderclassName} onClick={openNotification}>
                接單頁面
              </Link>
              )}
              
          </div>
        </div>
        <div className="Driver-row">
          <div className="Driver-online-box">
                <Link to='/' className="Driver-online-order">
                  累積獎金
                </Link>
          </div>
          <div className="Driver-online-box">
                <Link to='/' className="Driver-online-order">
                  問題回報
                </Link>
          </div>
        </div>
      </div>
    )
}