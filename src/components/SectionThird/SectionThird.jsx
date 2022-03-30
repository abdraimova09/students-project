import React from "react";
import "./SectionThird.css";
const SectionThird = () => {
  return (
    <div>
      <div style={{ margin: "55px auto" }}>
        <img
          src="https://content.thewosgroup.com/wosus/homepage/wosus-gwp-desktop-mar22.jpg"
          alt="###"
          style={{ width: "100%" }}
        />
      </div>
      <div style={{ margin: "auto 40px" }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          style={{ width: "100%" }}
          src="https://content.thewosgroup.com/wosus/campaign/anytime-anywhere/aa-homepage-desktop-comp.mp4"
        />
      </div>
      <div className="title-wrapper">
        <h3 className="content">ANYTIME ANYWHERE BY WATCHES OF SWITZERLAND</h3>
        <p className="content">
          A cinematic love letter to the modern collector
        </p>
        <a
          style={{ textDecoration: "underline" }}
          className="content"
          href="/anytime-anywhere"
        >
          Discover Featured Watches
        </a>
      </div>
    </div>
  );
};

export default SectionThird;
