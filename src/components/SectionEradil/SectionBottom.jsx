import React from "react";
import "./SectionBottom.css";

const SectionBottom = () => {
  const payCard = [
    {
      title: "Make Easy Monthly Payments",
      subtitle: "Flexible financing, no hidden fees",
      image2:
        "https://content.thewosgroup.com/wosus/icons/black_logo-transparent_bg1.png",
      id: 1,
    },
    {
      title: "Watches of Switzerland Credit Card",
      subtitle:
        "Convenient financing with competitive & flexible payment options",
      image2:
        "https://content.thewosgroup.com/wosus/homepage/wellsfargo-card-image-hp.png",
      id: 2,
    },
  ];
  return (
    <div className="section">
      {payCard.map((item) => (
        <div className="section_bottom">
          <div className="bottom_card">
            <img className="bottom_img" src={item.image2} alt="" />
            <h4 className="bottom_descr_1">{item.title}</h4>
            <h5 className="bottom_descr_2">{item.subtitle}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionBottom;
