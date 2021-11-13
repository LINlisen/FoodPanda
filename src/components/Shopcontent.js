import { Link } from "react-router-dom";
import { Switch,notification } from 'antd';
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
      <div className="Shopcontent">  
        <div className="Shopcontent-row">
          <div className="Shopcontent-online-box">
              <p className="Shopcontent-online-text">上線</p>
              <Switch onChange={setSwitch} className="Shopcontent-online-switch"/>
          </div>
          <div className="Shopcontent-online-box">
              {online?(
                <Link to='ShopOrder' className={orderclassName}>
                  訂單頁面
                </Link>
              ):(
                <Link to='/' className={orderclassName} onClick={openNotification}>
                訂單頁面
              </Link>
              )}
              
          </div>
        </div>
        <div className="Shopcontent-row">
          <div className="Shopcontent-online-box">
                <Link to='/' className="Shopcontent-online-order">
                  歷史訂單
                </Link>
          </div>
          <div className="Shopcontent-online-box">
                <Link to='/' className="Shopcontent-online-order">
                  問題回報
                </Link>
          </div>
        </div>
      </div>
    )
}