import React from "react";
import { Carousel } from "antd";
import "../styles/Category.scss";

const Category = () => {
  return (
    <section>
      <div className="container category px-10 mx-auto">
        <h3>Категории</h3>
        <Carousel autoplay slidesToShow={4}>
          <div className="card category_card">
            <img src="/red.png" alt="" />
            <h4>9933</h4>
          </div>

          <div className="card category_card">
            <img src="/gray.png" alt="" />
            <h4>9958</h4>
          </div>
          <div className="card category_card">
            <img src="/blue.png" alt="" />
            <h4>9965</h4>
          </div>

          <div className="card category_card">
            <img src="/orange.png" alt="" />
            <h4>9961</h4>
          </div>
          <div className="card category_card">
            <img src="creamy.png" alt="" />
            <h4>9969</h4>
          </div>
          <div className="card category_card">
            <img src="/darkblue.png" alt="" />
            <h4>9955</h4>
          </div>
          <div className="card category_card">
            <img src="/white.png" alt="" />
            <h4>9922</h4>
          </div>
          <div className="card category_card">
            <img src="/gold.png" alt="" />
            <h4>9917</h4>
          </div>

          <div className="card category_card">
            <img src="/black.png" alt="" />
            <h4>9951</h4>
          </div>

          <div className="card category_card">
            <img src="/img2.png" alt="" />
            <h4>9971</h4>
          </div>
          <div className="card category_card">
            <img src="/img3.png" alt="" />
            <h4>9972</h4>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Category;
