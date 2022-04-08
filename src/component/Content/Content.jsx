import React from "react";
import anhdaidien from "../../assets/images/anhdaidien.jpg";
import skill from "../../data/skill";
import products from "../../data/products";
import ReactTooltip from "react-tooltip";

import "./Content.css";

const Content = () => {
  return (
    <section id="content">
      <div className="grid-wrapper">
        <div>
          <h2 className="text-[4.4rem] text-center mt-[2rem] sm:mt-[8.4rem] text-[#171717] md:text-[3.6rem] sm:text-[2.8rem]">
            “Xin chào! Tôi là Lê Hồng Lĩnh.”
          </h2>
          <h3 className="heading">– Front End Developer</h3>
        </div>
        <div className="grid grid-cols-[3fr,1fr] sm:grid-cols-none sm:flex sm:flex-col-reverse sm:gap-y-[3rem] gap-x-[3.2rem] mt-[4.2rem] pb-[4rem]">
          <div>
            <p className="text-[2.5rem] md:text-[2.1rem] sm:text-[1.8rem] tracking-[.02em] leading-[1.7em] md:leading-[1.6] text-[#171717cc]">
              “ Là một sinh viên Trường Cao Đẳng Kỹ Thuật Công Nghệ Nha Trang.
              Tôi muốn trở thành một Front-End Developer chuyên nghiệp trong
              tương lai, và tôi đang không ngừng cố gắng để nâng cao giá trị bản
              thân. Với những kỹ năng đang có, tôi muốn tạo ra những trang
              website đẹp, chất lượng tốt, đáp ứng nhu cầu và mang lại trãi
              nghiệm tốt cho khách hàng. Đó là kết quả mà tôi mong muốn. ”{" "}
              <br /> <br className="sm:hidden" />“ Được may mắn có trách nhiệm,
              kiên trì và tinh thần học hỏi cái mới. Tôi muốn cố gắng làm việc
              hết mình, để mang lại nhiều giá trị cho nơi mà tôi làm việc. ”
            </p>
            <h5 className="mt-[2rem] sm:mt-[1.6rem] text-[1.5rem] sm:text-[1.3rem] text-[#4b4b4b] font-[Roboto,serif] tracking-widest uppercase font-[600]">
              — Lê Hồng Lĩnh, 02 - 04 -2022.
            </h5>
          </div>
          <div className="w-[39rem] sm:w-full h-[58.4rem] overflow-hidden rounded-[0.8rem]">
            <img
              src={anhdaidien}
              alt="Ảnh cv"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div
          id="my-skill"
          className="w-full min-h-[100vh] bg-[#ecebe7] py-[4rem] sm:pt-[0.1rem] rounded-[0.8rem]"
        >
          <h2 className="heading mb-[6rem] sm:mb-[3rem]">– Kỹ năng của tôi</h2>
          <ul className="grid grid-cols-3 gap-y-[6rem] sm:gap-y-[4rem]">
            {skill.map((skill, index) => (
              <li key={index} className="flex flex-col items-center">
                <div className="w-[15rem] sm:w-[10rem] h-[15rem] sm:h-[10rem]">
                  <img
                    src={skill.logo}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-[2rem] sm:text-[1.6rem] text-[#171717cc] mt-[1rem] leading-[1.6] text-center">
                  {skill.name}
                </h2>
              </li>
            ))}
          </ul>
        </div>
        <div
          id="my-products"
          className="w-full min-h-[100vh] sm:h-[unset] pt-[4rem] sm:pt-[0.1rem]"
        >
          <h2 className="heading mb-[6rem] sm:mb-[3rem]">– Sản phẩm của tôi</h2>
          <ul className="grid gap-y-[3.4rem] mb-[8rem]">
            {products.map((product, index) => {
              if (index % 2 === 0) {
                return (
                  <li
                    key={index}
                    className="grid sm:block grid-cols-[4fr,6fr] h-[35rem] md:h-[32rem] sm:h-[unset] gap-x-[3.4rem]"
                  >
                    <div className="h-full sm:h-[30rem]">
                      <img src={product.img} alt="" />
                    </div>
                    <div className="wrapper-content">
                      <h2
                        className="ss:text-truncate ss:line1 text-[2.5rem] md:text-[2rem] text-[#171717cc] font-[Roboto,serif] font-[500]"
                        data-tip
                        data-for={product.name + index}
                      >
                        {product.name}
                        <ReactTooltip id={product.name + index}>
                          <span>{product.name}</span>
                        </ReactTooltip>
                      </h2>
                      <p className="text-[1.6rem] leading-[1.6] md:leading-[1.5] text-[#171717cc] font-sans">{product.desc}</p>
                      <a href={product.link} target="_blank">
                        <button className="btn-effect-slide-right">
                          Xem sản phẩm
                        </button>
                      </a>
                    </div>
                  </li>
                );
              } else {
                return (
                  <li
                    key={index}
                    className="grid sm:flex sm:flex-col-reverse grid-cols-[6fr,4fr] sm:grid-cols-1 h-[35rem] sm:h-[unset] gap-x-[3.4rem]"
                  >
                    <div className="wrapper-content">
                      <h2
                        className="ss:text-truncate ss:line1 text-[2.5rem] md:text-[2rem] text-[#171717cc] font-[Roboto,serif] font-[500]"
                        data-tip
                        data-for={product.name + index}
                      >
                        {product.name}
                        <ReactTooltip id={product.name + index}>
                          <span>{product.name}</span>
                        </ReactTooltip>
                      </h2>
                      <p className="text-[1.6rem] leading-[1.6] md:leading-[1.5] text-[#171717cc] font-sans">{product.desc}</p>
                      <a href={product.link} target="_blank">
                        <button className="btn-effect-slide-right">
                          Xem sản phẩm
                        </button>
                      </a>
                    </div>
                    <div className="h-full sm:h-[30rem]">
                      <img
                        src={product.img}
                        alt=""
                        className="w-full h-full object-cover rounded-[0.8rem] border-[0.1rem] border-solid border-[#ccc]"
                      />
                    </div>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
      <div className="w-full h-[20rem] bg-primary flex justify-center items-center">
        <a
          href="https://drive.google.com/file/d/1dQGljI0Sg_120NywOSkKjj0w8CPKtB91/view?usp=sharing"
          target="_blank"
        >
          <button className="contact-btn bg-white text-primary text-[2rem] tracking-[0.2rem] py-[1.4rem] px-[4.6rem] font-[Roboto,serif] rounded-[0.4rem] font-[500] relative isolate overflow-hidden hover:before:top-0 sm:active:before:top-0 group">
            <span className="inline-block w-full h-full transition-all duration-[0.2s] ease-linear group-hover:translate-y-[300%] sm:group-active:translate-y-[300%]">
              Hồ sơ
            </span>
          </button>
        </a>
      </div>
    </section>
  );
};

export default Content;
