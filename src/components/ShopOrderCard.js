import { Card, Carousel ,Checkbox,Button } from 'antd';
export default function ShopOrderCard(){
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
        <div className="ShopOrderCard">
            <div className="ShopOrderCard-row">
                <p>訂單編號：123dr</p>
                <p>訂單日期：11/12</p>
                <p>訂單金額：511</p>
            </div>
            <div>
                <div className="ShopOrderCard-itemtitle">
                    訂單內容
                    <Carousel afterChange={onChange} >
                        <div>
                            <Card title="招牌鍋貼*10" bordered={false} style={{ width: 300 }} className="ShopOrderCard-Products">
                                <p>備註：不用醬油</p>
                                <Checkbox>製作完畢</Checkbox>
                            </Card>
                        </div>
                        <div>
                            <Card title="酸辣湯*1" bordered={false} style={{ width: 300 }} className="ShopOrderCard-Products">
                                <p>備註：</p>
                                <Checkbox>製作完畢</Checkbox>
                            </Card>
                        </div>
                        <div>
                            <Card title="紅茶*1" bordered={false} style={{ width: 300 }} className="ShopOrderCard-Products">
                                <p>備註：去冰</p>
                                <Checkbox>製作完畢</Checkbox>
                            </Card>
                        </div>
                        <div>
                            <Card title="牛汁拌麵*1" bordered={false} style={{ width: 300 }} className="ShopOrderCard-Products">
                                <p>備註：不要加蔥</p>
                                <Checkbox>製作完畢</Checkbox>
                            </Card>
                        </div>
                    </Carousel>
                    <div className="ShopOrder-Button">
                        <Button  block className="ShopOrder-Button-item">
                            完成訂單
                        </Button>
                        <Button block className="ShopOrder-Button-item">
                            刪除訂單
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