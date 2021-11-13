import { Card, Carousel ,Checkbox,Button } from 'antd';
import LeafletMap from "../components/LeafletMap";
export default function DriverOrderCard(){
    function onChange(a, b, c) {
        console.log(a, b, c);
      }
      
      const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
    return(
        <div className="DriverOrderCard">
            <div className="ShopOrderCard-row">
                <p>訂單編號：123dr</p>
                <p>訂單日期：11/12</p>
                <p>訂單金額：511</p>
            </div>
            <div>
                <div className="ShopOrderCard-itemtitle">
                    <p>預計賺取金額：100</p>
                        <div>
                            <Card title="訂單品項" bordered={false} style={{ width: 300 }} className="DriverOrderCard-Products">
                                <p>招牌鍋貼*10</p>
                                <p>酸辣湯*1</p>
                                <p>紅茶*1</p>
                                <p>牛汁拌麵*1</p>
                            </Card>
                        </div>
                        <div>
                            <Card title="客人備註" bordered={false} style={{ width: 300 }} className="DriverOrderCard-Notes"> 
                                <p>請放在門口，謝謝</p>
                            </Card>
                        </div>
                        <div>
                            <Card title="店家地址" bosrdered={false} style={{ width: 300 }} className="DriverOrderCard-ShopAdress">
                                <p>106台北市大安區羅斯福路四段1號</p>
                                <Button>導航</Button>
                            </Card>
                        </div>
                        <div>
                            <Card title="客人地址" bordered={false} style={{ width: 300 }} className="DriverOrderCard-ClientAdress">
                                <p>106台北市大安區和平東路二段134號</p>
                                <Button>導航</Button>
                            </Card>
                            <div className="LeafletMap">
                                <LeafletMap/>
                            </div>
                            
                        </div>

                    <div className="ShopOrder-Button">
                        <Button  block className="ShopOrder-Button-item">
                            接受訂單
                        </Button>
                        <Button block className="ShopOrder-Button-item">
                            拒絕訂單
                        </Button>
                        <Button block className="ShopOrder-Button-item">
                            聯絡訂購者
                        </Button>
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}