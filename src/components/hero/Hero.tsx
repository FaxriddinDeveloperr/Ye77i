import React from "react";
import hero from '../../assets/hero/hero.png';

const Hero = () => {
  return (
    <div>
      <div className="hero__container flex justify-evenly">
        <div className="hero__text w-[588px] mt-[52px] ml-[50px]">
          <h1 className="font-bold text-[64px] text-[#454545]">
            Скидка 15% <br /> на все подвесные светильники
          </h1>
          <button className="flex items-center justify-center bg-[#454545] text-white w-[495px] h-[86px] font-bold text-[64px] rounded-[100px]">
            до 5 февраля
          </button>
        </div>

        <div className="hero__image">
          <img src={hero} alt="" className="w-[453px] h-[453px]" />
        </div>

        <div className="hero__dots w-[108px] h-[10px] flex items-center justify-between mt-[430px]">
          <div className="dot active w-[10px] h-[10px] bg-[#9c9c9c] rounded-[50%]"></div>
          <div className="dot w-[8px] h-[8px] bg-[#e1e1e1] rounded-[50%]"></div>
          <div className="dot w-[8px] h-[8px] bg-[#e1e1e1] rounded-[50%]"></div>
          <div className="dot w-[8px] h-[8px] bg-[#e1e1e1] rounded-[50%]"></div>
          <div className="dot w-[8px] h-[8px] bg-[#e1e1e1] rounded-[50%]"></div>
          <div className="dot w-[8px] h-[8px] bg-[#e1e1e1] rounded-[50%]"></div>
          <div className="dot w-[8px] h-[8px] bg-[#e1e1e1] rounded-[50%]"></div>
          <div className="dot w-[8px] h-[8px] bg-[#e1e1e1] rounded-[50%]"></div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Hero);
