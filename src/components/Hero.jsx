import React from "react";
import "../styles/Hero.scss";
const Hero = () => {
  return (
    <div className="hero">
      <div className=" container px-10 hero_content mx-auto ">
        <div className="hero_content  flex justify-between items-end">
          <div className="hero_title py-20 ">
            <h2 className="text-6xl font-bold text-white">
              Алюминиевые композитные панели
            </h2>
            <p className="text-base py-8 text-orange-50 opacity-50">
              Современный облицовочный материал, изготавливаемый из двух слоёв
              алюминиевой ленты и внутреннего полимерного наполнителя методом
              горячепрокатного экструдирования.
            </p>
          </div>
          <div className="hero_img  flex text-end items-start pl-40">
            <img className=" h-auto" src="/hero0.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
