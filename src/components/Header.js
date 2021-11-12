import { Tabs } from 'antd';
import Shopcontent from './Shopcontent';
import Service from './Service';
import Driver from './Driver';
const { TabPane } = Tabs;
function callback(key) {
    console.log(key);
  }
export default function Header(){
    return(
        <div className="header">
            <img className = "header-logo" src="./img/foodpanda-logo.png"/>
            {/* <div className="header-nav">
                <Link to ='/shop' className="header-nav-item1">
                    店家端
                </Link>
                <Link to ='/service' className="header-nav-item2">
                    平台端
                </Link>
                <Link to ='/driver' className="header-nav-item3">
                    司機端
                </Link>
            </div> */}
            <Tabs defaultActiveKey="1" onChange={callback} className="header-nav">
                <TabPane tab="店家端" key="1" className="header-nav-item"> 
                    <Shopcontent/>
                </TabPane>
                <TabPane tab="平台端" key="2" className="header-nav-item">
                    <Service/>
                </TabPane>
                <TabPane tab="司機端" key="3" className="header-nav-item">
                    <Driver/>
                </TabPane>
            </Tabs>
        </div>
        
        
    )
}