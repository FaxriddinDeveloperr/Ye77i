import React from "react";
import Strelka from "../../assets/productViewImage/Vector 1.svg";
import Qandil from "../../assets/productViewImage/Qandil.png";
import Korzinka from "../../assets/productViewImage/korzina.svg";

const products = Array(8).fill({
  title: "Встраиваемый светильник Novotech",
  oldPrice: "7 000₽",
  newPrice: "6 399₽",
  image: Qandil,
});


const ProductView = () => {
  return (
    <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold mb-4 sm:mb-0">
          Популярные товары
        </h2>
        <div className="flex items-center gap-4 border border-[#454545] px-5 py-2 rounded-full cursor-pointer hover:bg-[#f5f5f5] transition">
          <span className="text-sm sm:text-base">Все товары</span>
          <img src={Strelka} alt="arrow" className="w-4 h-4" />
        </div>
      </div>


      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="p-4 flex flex-col justify-between h-full"
          >
            <div className="flex justify-center mb-6">
              <img
                src={product.image}
                alt="product"
                className="w-full max-w-[220px] object-contain"
              />
            </div>
            <h2 className="text-base font-medium mb-4">{product.title}</h2>
            <div className="flex items-end justify-between mt-auto">
              <div>
                <p className="text-sm text-[#9F9F9F] line-through">{product.oldPrice}</p>
                <p className="text-lg font-semibold">{product.newPrice}</p>
              </div>
              <div className="bg-[#454545] rounded-2xl w-[45px] h-[33px] flex items-center justify-center">
                <img src={Korzinka} alt="cart" className="w-5 h-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(ProductView);
