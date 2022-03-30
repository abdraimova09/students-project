import React from "react";
import "./RolexPageImagesBlock1AIZADA.css";

const RolexPageImagesBlock1AIZADA = () => {
  return (
    <div className="block1">
      <div className="wrapper">
        <h2 className="featured">FEATURED SELECTIONS</h2>
      </div>
      <div className="img-watches">
        <div>
          <img
            className="menswatches"
            src="https://content.thewosgroup.com/rolex/v6-2020-update/mens-watches_gmt_master_2.jpg"
            alt=""
          />
          <p className="p">MEN'S WATCHES</p>
        </div>
        <div>
          <img
            className="womenswatches"
            src="https://content.thewosgroup.com/rolex/v6-2020-update/womens-watches_lady_datejust.jpg"
            alt=""
          />
          <p className="p">WOMEN'S WATCHES</p>
        </div>
      </div>
      <div className="goldwatches">
        <img
          className="gold"
          src="https://a0a73a99cbfedf7e3b28-a6fed8c1b4fb343f790cc1a783af6690.ssl.cf3.rackcdn.com/rolex/v6-2020-update/gold-watches.jpg"
          alt=""
        />
        <p className="p">GOLD WATCHES</p>
      </div>
    </div>
  );
};

export default RolexPageImagesBlock1AIZADA;
