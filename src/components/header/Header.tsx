import React from "react";
import navbarIconLoading from "../../assets/muhammaddiyor/navbarIconLoading.svg";
import logo from "../../assets/muhammaddiyor/logo.svg";
import buttonIcon from "../../assets/muhammaddiyor/navbarButtonIcon.svg";
import { Heart, ShoppingCart, Signal, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-gray-200">
      <nav className="container mx-auto px-4 py-2">
        <div className="flex justify-between text-sm text-[#454545] mb-3">
          <ul className="flex gap-7">
            <li className="cursor-pointer hover:text-black">О компании</li>
            <li className="cursor-pointer hover:text-black">
              Доставка и оплата
            </li>
            <li className="cursor-pointer hover:text-black">Возврат</li>
            <li className="cursor-pointer hover:text-black">Гарантии</li>
            <li className="cursor-pointer hover:text-black">Контакты</li>
            <li className="cursor-pointer hover:text-black">Блог</li>
          </ul>
          <div className="flex gap-6 items-center">
            <span className="font-medium">8 (800) 890-46-56</span>
            <span className="text-gray-400 cursor-pointer hover:text-black">
              Заказать звонок
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={navbarIconLoading} alt="logo" width={27} />
            <img src={logo} alt="NORNLIGHT" className="h-6" />
          </div>

          <button className="bg-[#454545] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-black transition">
            <img src={buttonIcon} width={25} alt="catalog icon" />
            Каталог
          </button>

          <div className="flex items-center flex-1 border border-gray-300 rounded-full px-4 py-2 max-w-xl">
            <input
              type="text"
              placeholder="Поиск по товарам"
              className="flex-1 outline-none text-sm"
            />
            <Search size={18} className="text-gray-500" />
          </div>

          <ul className="flex items-center gap-8 text-sm text-[#454545]">
            <li className="flex flex-col items-center cursor-pointer hover:text-black">
              <Heart />
              <span>Избранное</span>
            </li>
            <li className="flex flex-col items-center cursor-pointer hover:text-black">
              <Signal />
              <span>Сравнение</span>
            </li>
            <li className="flex flex-col items-center cursor-pointer hover:text-black relative">
              <ShoppingCart />
              <span className="absolute -top-1.5 right-5 bg-red-600 text-white text-xs rounded-full px-1.5 py-0.5">
                1
              </span>
              <span>Корзина</span>
            </li>
          </ul>
        </div>

        <div className="flex gap-6 mt-4 text-sm font-medium text-[#454545]">
          <a
            href="#"
            className="bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition"
          >
            Светильники
          </a>
          <a href="#" className="hover:text-black">
            Люстры
          </a>
          <a href="#" className="hover:text-black">
            Лампы
          </a>
          <a href="#" className="hover:text-black">
            Настольные лампы
          </a>
          <a href="#" className="hover:text-black">
            Ночники
          </a>
          <a href="#" className="hover:text-black">
            Подсветка
          </a>
          <a href="#" className="hover:text-black">
            Уличное освещение
          </a>
          <a href="#" className="hover:text-black">
            Мебельные установки
          </a>
        </div>
      </nav>
    </header>
  );
};

export default React.memo(Header);
