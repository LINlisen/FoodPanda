import { Link } from "react-router-dom";
import { Switch } from 'antd';
import { useState } from "react";

export default function Service(){
    return(
      <div className="Service">  
        <div className="Service-row">
          <div className="Service-box">
                <Link to='Service-client' className="Service-Text">
                  客人回報
                </Link>
          </div>
          <div className="Service-box">
              <Link to='Service-driver' className="Service-Text">
                  司機回報
              </Link>
          </div>
        </div>
        <div className="Service-row">
          <div className="Service-box">
                <Link to='Service-shop' className="Service-Text">
                  商家回報
                </Link>
          </div>
          <div className="Service-box">
                <Link to='Service-histroy' className="Service-Text">
                  歷史回報
                </Link>
          </div>
        </div>
      </div>
    )
}