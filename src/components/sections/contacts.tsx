import { Mail, Phone, MapPin, Building } from "lucide-react";
import headLogoFasie from "@/assets/head_logo_fasie.png";

export const Contacts = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Контактная информация */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Контакты</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Building className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">ООО «Альтдата»</h3>
                    {/* <p className="text-gray-300">Компания специализирующаяся на AI технологиях для медицинской диагностики</p> */}
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Юридический адрес:</h4>
                    <p className="text-gray-300">
                      119234, Россия, г. Москва,<br />
                      тер Ленинские горы, дом 1, корпус стр. 77
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Email:</h4>
                    <a 
                      href="mailto:altdata.tech@yandex.ru" 
                      className="text-accent hover:text-accent/80 transition-colors"
                    >
                      altdata.tech@yandex.ru
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Телефон:</h4>
                    <a 
                      href="tel:+79103463492" 
                      className="text-accent hover:text-accent/80 transition-colors"
                    >
                      +7 (910) 346-34-92
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Логотип Фонда содействия инновациям */}
          <div className="space-y-6">
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="flex items-start space-x-4 mb-4">
                <img 
                  src={headLogoFasie} 
                  alt="Фонд содействия инновациям" 
                  className="w-48 h-48 object-contain flex-shrink-0"
                />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Проект создан при поддержке
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Федерального государственного бюджетного учреждения "Фонд содействия развитию малых форм предприятий в научно-технической сфере" в рамках программы "Студенческий стартап" федерального проекта "Платформа университетского технологического предпринимательства"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
