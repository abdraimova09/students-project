import React from "react";
import { brands } from "../../helpers/brands";
import "./HomePageBekbolsun.css";

const HomePageBekbolsun = () => {
  const newBrands = brands.slice(1, 8);
  return (
    <div className="home">
      <div className="home_inner">
        <div className="block1">
          <img
            width="100%"
            src="https://www.watchesofswitzerland.com/medias/wosus-desktop-rolex-mar22.jpg?context=bWFzdGVyfHJvb3R8MTQwNzQ1fGltYWdlL2pwZWd8aDA3L2g1MC85MTUwNTg3ODYzMDcwLmpwZ3wzNWJkMTFkZmE0ODkyNDAzZDliMmRkNmMzZmQ0MDBjYThhMTg4MmQ4NjM2MTUwYzY3YTg3OTdkZDljODQ3NmZh&imwidth=1920"
            alt=""
          />
          {/* <button className="btn">EXPLORE THE COLLECTION</button> */}
        </div>
        <div className="block2">
          {newBrands.map((item, index) => (
            <div className="block3" key={item.id}>
              <img width="140px" src={item.logo} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePageBekbolsun;
