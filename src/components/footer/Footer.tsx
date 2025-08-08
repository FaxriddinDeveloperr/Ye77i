import React from "react";
import logo from "../../assets/muhammaddiyor/logo.svg";
import visa from "../../assets/muhammaddiyor/visa.png";
// import { VK, YouTube, Telegram } from "lucide-react"; // Assuming you have these icons or similar

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="NORNLIGHT" className="h-6" />
            </div>
            <p className="text-[#454545] text-lg font-medium mb-2">
              8 (800) 890-46-56
            </p>
            <div className="flex items-center gap-2 mb-4">
              <img src={visa} alt="Carts" className="h-4" />
              
            </div>
            <p className="text-gray-500 text-sm mb-2">
              Политика конфиденциальности
            </p>
            <p className="text-gray-500 text-sm">Пользовательское соглашение</p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-black mb-4">Покупателям</h4>
            <ul className="text-gray-500 text-sm space-y-2">
              <li>
                <a href="#" className="hover:text-black">
                  О компании
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Доставка и оплата
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Возврат
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Гарантии
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Контакты
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Блог
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-black mb-4">Товары</h4>
            <ul className="text-gray-500 text-sm space-y-2">
              <li>
                <a href="#" className="hover:text-black">
                  Люстры
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Светильники
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Бра
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Торшеры
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Комплектующие
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Настольные лампы
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-black mb-4"></h4>
            <ul className="text-gray-500 text-sm space-y-2">
              <li>
                <a href="#" className="hover:text-black">
                  Споты
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Трековые светильники
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Уличные светильники
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Технические светильники
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Светодиодные ленты
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          <a href="#" className="text-gray-400 hover:text-black">
            VK
          </a>
          <a href="#" className="text-gray-400 hover:text-black">
            VK
          </a>
          <a href="#" className="text-gray-400 hover:text-black">
            VK
          </a>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
