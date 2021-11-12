import ServiceClientList from "../components/ServiceClientList";
function ServiceClient() {
  return (
      <>
         <div className="ShopOrder-header">
              <p className="ShopOrder-title">客人回報</p>
         </div>
         <div>
             <ServiceClientList/>
         </div>
      </>
  );
}
export default ServiceClient;
