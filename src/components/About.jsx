import React from "react";
import "../styles/About.scss";
const About = () => {
  return (
    <section id="about" className="about relative py-32">
      <div className="container px-10 about_content  mx-auto flex ">
        <div className="about_imgs pl-1">
          <div className="about_grid card">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="img_card">
            <img className="img1 " src="about3.png" alt="img" />
            <img className="img2" src="about4.png" alt="img" />
            <img className="img3" src="about1.png" alt="img" />
          </div>
        </div>
        <div className="about_title pl-20">
          <h3>О компании</h3>
          <p>
            Производство композитных панелей из алюминия в Узбекистане позволило
            нашей компании наладить жесткий контроль над качеством продукции на
            всех этапах производственного цикла. На каждом этапе производства
            продукции, начиная с контроля качества закупаемого сырья и
            материалов, контроль за качеством – неусыпная забота собственной
            Службы качества, в состав которой входят: отдел технического
            контроля (ОТК), лаборатория качества и отдел по работе с
            рекламациями. Созданное нами предприятие позволило предоставить для
            наших покупателей ряд существенных преимуществ:
          </p>
          <ul className="about_cards">
            <li>
              <img src="/arrow.png" alt="" />
              <p>
                соблюдение технологии производства и гарантированное качество
                продукции;
              </p>
            </li>
            <li>
              <img src="/arrow.png" alt="" />
              <p>
                индивидуальный подход к ценообразованию для каждого клиента;
              </p>
            </li>
            <li>
              <img src="/arrow.png" alt="" />
              <p>
                изготовление композитных панелей по точным индивидуальным
                размерам;
              </p>
            </li>
            <li>
              <img src="/arrow.png" alt="" />
              <p>
                {" "}
                оптимальные сроки изготовления композитных панелей из алюминия.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
