import { Link } from "react-router-dom";
export default function Header(){
    return(
        <div className="header">
            <img className = "header-logo" src="./img/foodpanda-logo.png"/>
            <div className="header-nav">
                <Link to ='/shop' className="header-nav-item">
                    店家端
                </Link>
                <Link to ='/service' className="header-nav-item">
                    平台端
                </Link>
                <Link to ='/driver' className="header-nav-item">
                    司機端
                </Link>
            </div>
        </div>
        
        
    )
}