import ShopOrderCard from "../components/ShopOrderCard"
function ShopOrder() {
  return (
      <>
          <div className="ShopOrder-header">
              <p className="ShopOrder-title">商家訂單</p>
          </div>
          <div className="ShopOrder-content">
              <ShopOrderCard/>
          </div>
      </>
  );
}
export default ShopOrder;
