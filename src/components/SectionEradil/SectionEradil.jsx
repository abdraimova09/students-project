import React, { useContext } from "react";
import { productsContext } from "../../contexts/productsContext";
import SectionBottom from "./SectionBottom";
import "./SectionEradil.css";

const SectionEradil = () => {
  const { getProducts } = useContext(productsContext);
  console.log(getProducts);
  let products = [
    {
      brand: "Mens Watches",
      model: "Shop The Collection",
      image1:
        "https://www.watchesofswitzerland.com/medias/homepage-mens-watches-cta-jul20.jpg?context=bWFzdGVyfHJvb3R8OTU5NDZ8aW1hZ2UvanBlZ3xoNzkvaGQ1Lzg4NTE0OTE5NzkyOTQuanBnfGNiZjkzZjg5ZTdkZjkxMjBkZDVlZmIxNTU3ZjUyZjEyMWM3NmQ0NTYyMDgzMDExZWIxNDAxMzA3MjZjZmVjODc&imwidth=480",
      id: 1,
    },
    {
      brand: "Ladies Watches",
      model: "Shop The Collection",
      image1:
        "https://www.watchesofswitzerland.com/medias/homepage-ladies-watches-cta-jul20.jpg?context=bWFzdGVyfHJvb3R8ODY1NjF8aW1hZ2UvanBlZ3xoOWYvaDA0Lzg4NTE0OTIwNDQ4MzAuanBnfDUyZDhjMDFhYzE3ZDA1NDgzNDg2YzBkNmEzMzdjNTQwNWNmMTFjN2JkNTQ0MTllZTRhMWY1OTM5M2FhM2I5OGI&imwidth=480",
      id: 2,
    },
    {
      brand: "Latest postupleniya",
      model: "Shop The Collection",
      image1:
        "https://www.watchesofswitzerland.com/medias/homepage-latest-editions-cta-jul20.jpg?context=bWFzdGVyfHJvb3R8MTAwODA2fGltYWdlL2pwZWd8aDg5L2hkMS84ODUxNDkyMTEwMzY2LmpwZ3xmMGU2NzFlMWIwOTgyZmVhNzZkYTI5NzQ3ZmNlZWEwZWEzOWM1ZTM3NTI0NmQwMTg5YjZhMzNhNWIwNGNjNzA1&imwidth=480",
      id: 3,
    },
    {
      brand: "View All Watches",
      model: "Shop The Collection",
      image1:
        "https://www.watchesofswitzerland.com/medias/homepage-view-all-cta-jul20.jpg?context=bWFzdGVyfHJvb3R8OTY5MTF8aW1hZ2UvanBlZ3xoNTYvaDk2Lzg4NTE0OTIxNzU5MDIuanBnfDNlYmExODY5YzViYTNjOGJmZmZiMDQwZGY4NGRlZDEwYmE3ODcyMTI5Yjk4ZjAyMGFkZmZmNTdkM2FlMjczZGY&imwidth=480",
      id: 4,
    },
  ];

  return (
    <>
      <div className="section_top">
        {products.map((item) => (
          <section className="section">
            <div className="section_top">
              <div className="top_card">
                <img className="top_img" src={item.image1} alt="" />
                <h3 className="top_title">{item.brand}</h3>
                <p className="top_subtitle">{item.model}</p>
              </div>
            </div>
          </section>
        ))}
      </div>
      <SectionBottom />
    </>
  );
};

export default SectionEradil;
