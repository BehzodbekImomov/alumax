import React from "react";
import "../styles/Products.scss";
const Products = () => {
  return (
    <section id="product" className="products">
      <div className="container px-5 products_content mx-auto py-32 flex gap-7">
        <div className="products_title ">
          <h3 className="text-4xl font-medium opacity-80">
            Продукция компании
          </h3>
          <p className="opacity-60 text-base pt-6 pr-16">
        

Производство алюминиевых композитных панелей в Узбекистаи позволило AS ALFA STROY оперативно реагировать на потребности покупателей, позволило поставлять материалы для облицовки вентфасада на объекты в кратчайшие сроки и стабильно высокого потребительского качества.

          </p>
        </div>
        <div className="products_imgs flex gap-10 ">
          <div className="img_cards">
            {" "}
            <img src="/product.png" alt="" />
            <div className="img_card"></div>
          </div>
          <div className="img_cards">
            {" "}
            <img src="/product.png" alt="" />
            <div className="img_card"></div>
          </div>
          <div className="img_cards">
            {" "}
            <img src="/product.png" alt="" />
            <div className="img_card"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
