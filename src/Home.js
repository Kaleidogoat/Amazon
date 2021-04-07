import React from "react";
import "./Home.css";
import Product from "./Product";

function home() {
  return (
    <div className="Home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://fortheloveblog.com/wp-content/uploads/2016/07/Amazon-Prime-Banner.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="41414125567"
            title="The lean startup"
            price={29.99}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLDGCIreAxtmYES-b0drzc9kxKX5KwHC37Y7tNeuJIxQXCl6TOkQMiDPzxgwnq2IpBrpKtQ8ED&usqp=CAc"
            rating={5}
          />
          <Product
            id="1231234141"
            title="The Art of War"
            price={14.69}
            image={
              "https://cdn11.bigcommerce.com/s-q39b4/images/stencil/2000x2000/products/7431/223400/9780804830805.website__94202.1567110692.jpg?c=2"
            }
            rating={5}
          />
          <Product
            id="156489646"
            title="White Sands Liquid Texture Medium Hold Hairspray"
            price={19.6}
            image="https://m.media-amazon.com/images/I/51QALIKTNhL._AC_UL320_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="6788913548"
            title="iRobot Roomba 675 Robot Vacuum-Wi-Fi Connectivity, Works with Alexa, Good for Pet Hair, Carpets, Hard Floors, Self-Charging"
            price={249.99}
            image="https://m.media-amazon.com/images/I/41jPof94ynL._AC_SY100_.jpg"
            rating={5}
          />
          <Product
            id="7894441263"
            title="Women's Puremotion Adapt Running Shoe"
            price={48.42 - 150.0}
            image="https://m.media-amazon.com/images/I/71Xj3eDJ0UL._AC_UL320_.jpg"
            rating={4}
          />
          <Product
            id="484646163"
            title="Turmeric Lip Scrub | Lip Exfoliation | Lip Care Treatment"
            price={20.99}
            image="https://m.media-amazon.com/images/I/81EQmBwAmaL._AC_UL320_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="4616135164"
            title="Jelly Comb USB Wired Mouse,RGB Optical Silent Computer Mouse,1600 DPI Office and Home Mice,for Windows PC, Laptop, Desktop, Notebook-MS059 (Black)"
            price={9.99}
            image="https://m.media-amazon.com/images/I/61i9Azkzh3L._AC_UY218_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default home;
