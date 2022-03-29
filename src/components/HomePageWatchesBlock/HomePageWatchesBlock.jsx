import React from "react";
import { Card } from "antd";
import { Navigation, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css/navigation";

const { Meta } = Card;

const HomePageWatchesBlock = () => {
  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "wrap",
          margin: "0 20px 0 20px",
        }}
      >
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={50}
          slidesPerView={4}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          style={{ marginTop: "20px" }}
        >
          <SwiperSlide>
            <Card
              style={{ width: 350 }}
              cover={
                <img
                  alt="watches image 1"
                  src="https://content.thewosgroup.com/productimage/17381091/17381091_1.jpg?impolicy=zoom"
                />
              }
            >
              <Meta
                title="ACCUTRON"
                description={
                  <>
                    <span style={{ color: "gray" }}>
                      New 2021 Speedmaster Moonwatch Professional Co-Axial
                      Master
                    </span>
                    <h3 style={{ marginTop: "30px" }}>{"$ " + "7, 200.00"}</h3>
                  </>
                }
              />
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card
              style={{ width: 350 }}
              cover={
                <img
                  alt="watches image 1"
                  src="https://content.thewosgroup.com/productimage/17381091/17381091_1.jpg?impolicy=zoom"
                />
              }
            >
              <Meta
                title="ACCUTRON"
                description={
                  <>
                    <span style={{ color: "gray" }}>
                      New 2021 Speedmaster Moonwatch Professional Co-Axial
                      Master
                    </span>
                    <h3 style={{ marginTop: "30px" }}>{"$ " + "7, 200.00"}</h3>
                  </>
                }
              />
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card
              style={{ width: 350 }}
              cover={
                <img
                  alt="watches image 1"
                  src="https://content.thewosgroup.com/productimage/17381091/17381091_1.jpg?impolicy=zoom"
                />
              }
            >
              <Meta
                title="ACCUTRON"
                description={
                  <>
                    <span style={{ color: "gray" }}>
                      New 2021 Speedmaster Moonwatch Professional Co-Axial
                      Master
                    </span>
                    <h3 style={{ marginTop: "30px" }}>{"$ " + "7, 200.00"}</h3>
                  </>
                }
              />
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card
              style={{ width: 350 }}
              cover={
                <img
                  alt="watches image 1"
                  src="https://content.thewosgroup.com/productimage/17381091/17381091_1.jpg?impolicy=zoom"
                />
              }
            >
              <Meta
                title="ACCUTRON"
                description={
                  <>
                    <span style={{ color: "gray" }}>
                      New 2021 Speedmaster Moonwatch Professional Co-Axial
                      Master
                    </span>
                    <h3 style={{ marginTop: "30px" }}>{"$ " + "7, 200.00"}</h3>
                  </>
                }
              />
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card
              style={{ width: 350 }}
              cover={
                <img
                  alt="watches image 1"
                  src="https://content.thewosgroup.com/productimage/17381091/17381091_1.jpg?impolicy=zoom"
                />
              }
            >
              <Meta
                title="ACCUTRON"
                description={
                  <>
                    <span style={{ color: "gray" }}>
                      New 2021 Speedmaster Moonwatch Professional Co-Axial
                      Master
                    </span>
                    <h3 style={{ marginTop: "30px" }}>{"$ " + "7, 200.00"}</h3>
                  </>
                }
              />
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card
              style={{ width: 350 }}
              cover={
                <img
                  alt="watches image 1"
                  src="https://content.thewosgroup.com/productimage/17381091/17381091_1.jpg?impolicy=zoom"
                />
              }
            >
              <Meta
                title="ACCUTRON"
                description={
                  <>
                    <span style={{ color: "gray" }}>
                      New 2021 Speedmaster Moonwatch Professional Co-Axial
                      Master
                    </span>
                    <h3 style={{ marginTop: "30px" }}>{"$ " + "7, 200.00"}</h3>
                  </>
                }
              />
            </Card>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomePageWatchesBlock;
