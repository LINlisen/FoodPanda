import DriverOrderCard from "../components/DriverOrderCard";

function DriverOrder() {
  return (
      <>
          <div className="ShopOrder-header">
              <p className="ShopOrder-title">接單頁面</p>
          </div>
          <div className="ShopOrder-content">
              <DriverOrderCard/>
          </div>
      </>
  );
}
export default DriverOrder;
