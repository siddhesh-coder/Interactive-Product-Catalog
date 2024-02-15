import React from "react";
import "./DeliveryService.css";
import { PackageCheck, Replace, ShieldCheck, Truck } from "lucide-react";

const DeliveryService = () => {
  return (
    <div className="product-service">
      <div className="product-service-data">
        <Truck className="service-logo" />
        <p>Free Delivery</p>
      </div>

      <div className="product-service-data">
        <Replace className="service-logo" />
        <p>15 days Replacement</p>
      </div>

      <div className="product-service-data">
        <PackageCheck className="service-logo" />
        <p>QuickMart Delivery</p>
      </div>

      <div className="product-service-data">
        <ShieldCheck className="service-logo" />
        <p>Genuine Product</p>
      </div>
    </div>
  );
};

export default DeliveryService;
