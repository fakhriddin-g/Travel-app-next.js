'use client'

import { Button } from "@heroui/button";
import { Input } from "@heroui/react";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin, 
  Mountain,
  Send,
  SeparatorHorizontal,
  SeparatorVertical
} from "lucide-react";

export default function Footer() {
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    console.log('Подписка на рассылку:', email);
    // В реальном приложении здесь была бы отправка на сервер
  };

  const services = [
    "Горные туры",
    "Культурные экскурсии", 
    "Приключенческие туры",
    "Индивидуальные маршруты",
    "Групповые поездки",
    "Экологический туризм"
  ];

  const quickLinks = [
    "О компании",
    "Наши гиды",
    "Отзывы",
    "Блог",
    "FAQ",
    "Контакты"
  ];

  const destinations = [
    "Памирский тракт",
    "Фанские горы", 
    "Душанбе",
    "Худжанд",
    "Искандеркуль",
    "Сафед-Дара"
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 md:px-10 xl:px-15 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Компания и логотип */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Mountain className="w-8 h-8 text-primary" />
              <div>
                <h3 className="font-bold text-lg">Таджик Туры</h3>
                <p className="text-sm text-muted-foreground">Discover Tajikistan</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ведущий туроператор Таджикистана с более чем 10-летним опытом. 
              Мы создаем незабываемые путешествия по самым красивым местам Центральной Азии.
            </p>
            <div className="flex gap-3">
              <Button size="sm" className="w-10 h-10">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button size="sm" className="w-10 h-10">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button size="sm" className="w-10 h-10">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="sm" className="w-10 h-10">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Наши услуги */}
          <div className="space-y-4">
            <h4 className="font-semibold">Наши услуги</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Популярные направления */}
          <div className="space-y-4">
            <h4 className="font-semibold">Популярные направления</h4>
            <ul className="space-y-2">
              {destinations.map((destination, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {destination}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Подписка и контакты */}
          <div className="space-y-4">
            <h4 className="font-semibold">Подписка на новости</h4>
            <p className="text-sm text-muted-foreground">
              Получайте новости о специальных предложениях и новых турах
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="flex gap-2">
                <Input
                  type="email"
                  name="email"
                  placeholder="Ваш email"
                  className="flex-1"
                  required
                />
                <Button type="submit" size="sm">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </form>
            
            <div className="space-y-2 pt-4">
              <h5 className="text-sm font-medium">Контакты</h5>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>+992 37 221 0123</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>info@tajiktours.tj</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Душанбе, Таджикистан</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <span className="flex w-full h-0.5 bg-gray-400 my-8" />

        {/* Быстрые ссылки */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap justify-center sm:justify-start gap-4">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <span className="flex w-full h-0.5 bg-gray-400 my-8" />

        {/* Копирайт */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2025 Таджик Туры. Все права защищены.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}