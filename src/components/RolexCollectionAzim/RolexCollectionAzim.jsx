import React from "react";
import { rolexCollection } from "./RolexCollectionCardAzim";
import { Card } from "antd";

const { Meta } = Card;

const RolexCollectionAzim = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        width: "65%",
        margin: "20px auto",
      }}
    >
      {rolexCollection.map((item) => (
        <Card
          hoverable
          style={{ width: "300px", margin: "5px ", border: "none" }}
          cover={<img alt="example" src={item.image} />}
        >
          <Meta
            style={{ textAlign: "center", color: "rgb(221, 212, 212);" }}
            title={
              <>
                <h4>{item.brand}</h4>
              </>
            }
            description={
              <>
                <h3>{item.model}</h3>
              </>
            }
          />
        </Card>
      ))}
    </div>
  );
};

export default RolexCollectionAzim;
