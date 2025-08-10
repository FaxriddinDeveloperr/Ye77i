import React from "react";
import next from "../../assets/category/category_icon.svg";
import { Category as datas } from "../../static/category";
import { Category2 as data } from "../../static/category";
import icon from "../../assets/category/category_icon.svg";

const Category = () => {
  return (
    <div>
      <div className="container mt-[80px] sm:mt-[60px] max-sm:mt-[40px]">
        <div className="flex justify-between items-center flex-wrap gap-[10px] max-sm:flex-col max-sm:items-start">
          <h2 className="font-bold text-[40px] sm:text-[32px] max-sm:text-[28px] text-[#454545]">
            Каталог
          </h2>
          <div className="w-[220px] h-[50px] max-sm:w-[180px] max-sm:h-[45px] border border-[#565656] text-[#454545] flex items-center justify-center rounded-[100px] gap-[10px]">
            <button className="font-medium text-[16px] max-sm:text-[14px]">
              Весь каталог
            </button>
            <img src={next} alt="" className="w-[14px] h-[10px]" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-[40px]">
          {datas?.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center h-[250px] max-sm:h-auto max-sm:flex-col max-sm:p-[16px] rounded-[20px] bg-[#F2F2F2] px-[16px] sm:px-[32px] gap-[20px]"
            >
              <div className="flex flex-col gap-[130px] max-sm:gap-[20px]">
                <h3 className="font-medium text-[20px] max-sm:text-[18px] text-[#454545]">
                  {item.title}
                </h3>
                <div className="flex items-center gap-[11px]">
                  <strong className="font-medium text-[14px] text-[#454545]">
                    От {item.price}₽
                  </strong>
                  <img src={icon} alt="" />
                </div>
              </div>

              <div>
                <img
                  src={item.img}
                  alt=""
                  className="w-[180px] h-[206px] max-sm:w-[150px] max-sm:h-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-[20px] mt-[20px]">
          {data?.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center h-[250px] max-sm:h-auto max-sm:flex-col max-sm:p-[16px] rounded-[20px] bg-[#F2F2F2] px-[16px] sm:px-[32px] gap-[20px]"
            >
              <div className="flex items-center h-[250px] max-sm:h-auto rounded-[20px] bg-[#F2F2F2]">
                <div className="flex flex-col gap-[130px] max-sm:gap-[20px]">
                  <h3 className="w-[209px] max-sm:w-full font-medium text-[20px] max-sm:text-[18px] text-[#454545]">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-[11px]">
                    <strong className="font-medium text-[14px] text-[#454545]">
                      От {item.price}₽
                    </strong>
                    <img src={icon} alt="" />
                  </div>
                </div>

                <div>
                  <img
                    src={item.img}
                    alt=""
                    className="w-[342px] h-[169px] max-sm:w-[150px] max-sm:h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Category);
