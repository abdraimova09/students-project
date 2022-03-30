import { Card } from "antd";
import React from "react";
import "./HomePage5Uluk.css";
const { Meta } = Card;

const HomePage5Uluk = () => {
  return (
    <div className="main-pics">
      <div className="inner-pics">
        <div className="card">
          <div className="affirm-logo-text">
            <img
              className="affirm-logo"
              src="https://content.thewosgroup.com/wosus/icons/affirm-logo-normal.png"
            />
            <h3 className="main-text">Flexible Financing</h3>
          </div>
          <p className="secondary-text">Make monthly payments with Affirm</p>
          <Card
            className="pic"
            style={{ width: 300, boxShadow: "none" }}
            cover={
              <img
                alt="example"
                src="https://www.watchesofswitzerland.com/medias/omega-hp-3-wide-moonwatch-mar22.jpg?context=bWFzdGVyfHJvb3R8ODY2OTh8aW1hZ2UvanBlZ3xoNGIvaDA4LzkxNTExMzIxNzIzMTguanBnfDE4YjUyNjExYjgwOTU5MmZkMWE4NTY1OWMyNzY2ZWU3ZDA2MTEyN2QwY2UwNGU0YzBjMWFiN2Y2ZGY0OWZkMzA&imwidth=640"
              />
            }
          ></Card>
          <p className="brand">Omega speedmaster moonwatch</p>
          <p className="model">Master Chronometer Certified</p>
          <p className="shop">Shop the Collection</p>
        </div>
        <div className="card">
          <h3 className="main-text">Authorized Luxury Retailer</h3>
          <p className="secondary-text">Now Available To Buy Online</p>
          <Card
            className="pic"
            style={{ width: 300, boxShadow: "none" }}
            cover={
              <img
                alt="example"
                src="https://www.watchesofswitzerland.com/medias/longines-hp-3wide-spirit-zulu.jpg?context=bWFzdGVyfHJvb3R8NDUzMjYwfGltYWdlL2pwZWd8aDIwL2hjNi85MTUzODc0Mjk2ODYyLmpwZ3xiN2ZjODczOGQ5NmJiODkzN2M5MmFhMjQ0MmUyMWJlMWQ5YzZhMmRmNzlkNmZmODVlMjE3MWM3ZTQ2OTA0MTY3&imwidth=640"
              />
            }
          ></Card>
          <p className="brand">Longines spirit zulu time</p>
          <p className="model">Pioneering Time Zones</p>
          <p className="shop">Shop the Collection</p>
        </div>
        <div className="card">
          <h3 className="main-text">Free Home Delivery Available</h3>
          <p className="secondary-text">Estimated Delivery 1-3 Days</p>
          <Card
            className="pic"
            style={{ width: 300, boxShadow: "none" }}
            cover={
              <img
                alt="example"
                src="https://www.watchesofswitzerland.com/medias/mayors-hero-breitling-endurance-mobile-dec21.jpg?context=bWFzdGVyfHJvb3R8MTU5OTE5fGltYWdlL2pwZWd8aGE2L2g2Ni85MTMyNzAxMTU1MzU4LmpwZ3xiOWFhMjVkYTFiMzRhMGNkYTQwYzFhNWU1YjkyZWZmNDNmZTIyZDE1YTQ5NzQ1MGQxZDRiNjFkODRjYTBjOTYz&imwidth=640"
              />
            }
          ></Card>
          <p className="brand">Breitling</p>
          <p className="model">Endurance Pro Exclusive</p>
          <p className="shop">Shop the Collection</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage5Uluk;
