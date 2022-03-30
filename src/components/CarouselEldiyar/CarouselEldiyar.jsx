import React from "react";
import { Carousel } from "antd";

const arrayPhotos = [
  {
    image:
      "https://www.watchesofswitzerland.com/medias/wosus-preowned-desktop-jan22.jpg?context=bWFzdGVyfHJvb3R8MzEzMzIwfGltYWdlL2pwZWd8aGIyL2hmZi85MTQwNjc3ODM2ODMwLmpwZ3xiMDgzN2RkMDAxMTUyNjI1ZTcxNjUyZDE3OWNhMWVkMzQ5M2UxNmNiMjY5ZTBhODUxZjQxMzY2ODZkMzU2N2Yy&imwidth=1920",
  },
  {
    image:
      "https://www.watchesofswitzerland.com/medias/wosus-hp-desk-banner-tagheuer-connected-mar22.jpg?context=bWFzdGVyfHJvb3R8NDE2NzkxfGltYWdlL2pwZWd8aDM0L2hjYS85MTUxNDY0NTM4MTQyLmpwZ3w5OTNkOTY4NDIyMTNjNTlhYjU0ZDgyNWRlOWMxY2VlMzE3NzM0Nzk3MDViOWJiMGIwNjk3ODk5YWRlMWM2OGYx&imwidth=1920",
  },
  {
    image:
      "https://www.watchesofswitzerland.com/medias/wosus-tudor-desktop-mar22.jpg?context=bWFzdGVyfHJvb3R8NTQwMzIzfGltYWdlL2pwZWd8aGI5L2gwZC85MTQ5NDU3NDY1Mzc0LmpwZ3xmZDVlNTNkZmMyMDFjZWUyZTk3ZTlmNzBlMGYwNjUwZjg0NWYzMjNlZjMyYTcxNzRlYjYyODFhZGFjYjg4OWM2&imwidth=1920",
  },
  {
    image:
      "https://www.watchesofswitzerland.com/medias/wosus-desktop-seamaster-oct21.jpg?context=bWFzdGVyfHJvb3R8MjA3NTkxfGltYWdlL2pwZWd8aGY4L2g5My85MTE5NzIzOTQ2MDE0LmpwZ3xmNjA5YWYxY2I2MWVjMGFkZDA3MzUyMGUzYmM1N2E5Y2FiZjI5ZjJlMzgyOWFkMjU0NDViNjhkOTVkZmI2YzZk&imwidth=1920",
  },
  {
    image:
      "https://www.watchesofswitzerland.com/medias/wos-grand-seiko-hero-desktop-cond-dec20.jpg?context=bWFzdGVyfHJvb3R8MjU4MTUzfGltYWdlL2pwZWd8aGJlL2hkNy85MDg2NjMwMTY2NTU4LmpwZ3wxYTI4ZGRjYTMxZDU5ZmZkM2MxNjU5YjU3OTUwMGYwMmExMjFmMGNiMjAxYWRiZDlmODM5ODc2NzUzMTkwYjlm&imwidth=1920",
  },
];

const CarouselEldiyar = () => {
  return (
    <div className="container">
      <Carousel autoplay>
        {arrayPhotos.map((item) => (
          <img src={item.image} />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselEldiyar;
