import React from "react";
import img from "../../assets/ProductsDetail/20230528180416535300 2.svg";
import bigImg from "../../assets/ProductsDetail/20230528180416535300 1.png";
import strelkaUp from "../../assets/ProductsDetail/Vector 8 (2).svg"
import strelkaDown from "../../assets/ProductsDetail/Vector 8 (3).svg"
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { HiOutlineChartBar } from "react-icons/hi";
import { ProductContent } from "../../static/ProductDetail";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  return (
    <div className="container">
      <div className="flex">
        <div className="flex gap-8">
          <div className="pt-[80px]">
            <div>
              <img src={strelkaUp} className="mb-5 ml-2" />
              <img src={img} alt="" />
            </div>
            <div>
              <img src={img} alt="" />
            </div>
            <div>
              <img src={img} alt="" />
            </div>
            <div>
              <img src={img} alt="" />
            </div>
            <div>
              <img src={img} alt="" />
              <img src={strelkaDown} className="mt-5 ml-2" />
            </div>
          </div>
          <div>
            <img src={bigImg} alt="" />
          </div>
        </div>

        <div className="pl-[59px]">
          <h1 className="font-bold text-[48px] text-[#454545]">
            Встраиваемый светильник Novotech
          </h1>

          <div className="flex justify-between">
            <div className="flex gap-8">
              <div>
                <del>7 000P</del>
                <p>6 399P</p>
              </div>
              <div className="w-[220px] h-[50px] flex items-center gap-3 justify-center bg-[#454545] rounded-[100px]">
                <FaShoppingCart />
                <span>В корзину</span>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="w-[50px] h-[50px] rounded-[50%] border flex items-center justify-center">
                <FaHeart className="text-red-500" />
              </div>
              <div className="w-[50px] h-[50px] rounded-[50%] border flex items-center justify-center">
                <HiOutlineChartBar />
              </div>
            </div>
          </div>
          <div className="w-full border mt-10 text-gray-300"></div>
          <div className="mt-10 grid grid-cols-2 gap-x-[50px] gap-y-[40px] max-sm:grid-cols-1">
            {ProductContent?.map((item) => (
              <div key={item.id} className="flex">
                <div className="w-[271px] flex items-center justify-between border-b-2 border-b-[#F2F2F2] pb-[17px]">
                  <span className="font-medium text-[14px] text-[#999]">
                    {item.title}
                  </span>
                  <span className="font-medium text-[16px] text-[#454545]">
                    {item.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10">
        <ul className="flex gap-[60px]">
          <li>
            <Link to={"#"}>Описание</Link>
          </li>
          <li>
            <Link to={"#"}>Характеристики</Link>
          </li>
          <li>
            <Link to={"#"}>Видео</Link>
          </li>
          <li>
            <Link to={"#"}>Галерея</Link>
          </li>
        </ul>
      </div>

      <div className="w-full border mt-10 text-gray-300"></div>

      <div className="flex gap-48 mt-20">
        <p>
          Архитектурный светильник декоративного назначения Clivo для контурной
          подсветки проемов окон, витражей, входных групп зданий. Формирует
          четкий узкий луч в виде рамки без паразитной засветки.
        </p>
        <p className="text-[16px]- text-gray-600">
          Производитель оставляет за собой право вносить изменения, не
          ухудшающие качество изделия, в конструкцию отдельных деталей, узлов и
          параметров светильника без предварительного уведомления.
        </p>
      </div>
    </div>
  );
};

export default React.memo(ProductDetail);
