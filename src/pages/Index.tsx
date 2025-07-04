import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [isServerCopied, setIsServerCopied] = useState(false);

  const copyServerIP = () => {
    navigator.clipboard.writeText("45.93.200.20:25596");
    setIsServerCopied(true);
    setTimeout(() => setIsServerCopied(false), 5000);
  };

  return (
    <div className="min-h-screen bg-zone-dark text-white font-roboto">
      {/* Hero Section */}
      <div
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url('/img/b8b3bb57-ab26-438b-a487-92351c240340.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-vignette"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-oswald font-bold mb-6 text-zone-radioactive text-glow">
            ДОБРО ПОЖАЛОВАТЬ В ЧЗО
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            ZoneCraft - игровой сервер MINECRAFT в жанре MMORPG на тематику
            S.T.A.L.K.E.R.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://t.me/s/Zone_Craft"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              <Icon name="Send" size={20} />
              <span>Telegram</span>
            </a>
            <a
              href="https://vk.com/zonecraftstalker"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
            >
              <Icon name="Users" size={20} />
              <span>VK</span>
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button
              onClick={copyServerIP}
              className={`px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 ${
                isServerCopied
                  ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                  : "bg-zone-danger hover:bg-red-600 text-white pulse-radioactive"
              }`}
              disabled={isServerCopied}
            >
              {isServerCopied ? "Скопировано" : "Играть"}
            </Button>
            <Button
              onClick={() =>
                window.open("https://zonecraft.easydonate.ru/", "_blank")
              }
              className="px-8 py-3 text-lg font-semibold bg-zone-radioactive hover:bg-green-600 text-zone-dark rounded-lg transition-all duration-300 pulse-radioactive"
            >
              ДОНАТ
            </Button>
          </div>
        </div>
      </div>

      {/* Spacer Section */}
      <div className="bg-black py-12"></div>
      <div className="bg-black py-12"></div>
      <div className="bg-black py-12"></div>
      <div className="bg-black py-12"></div>

      {/* News Section */}
      <div
        className="relative py-20"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/files/97f99c96-aebd-47b3-9e80-5fdae6bff25e.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <Card className="bg-black/80 border-zone-radioactive border-2">
            <CardContent className="p-8">
              <h2 className="text-4xl font-oswald font-bold text-zone-radioactive mb-6 text-center">
                ZoneCraft - Глобальное обновление 2024
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                В честь Нового года, наша команда приготовили крупнейшее
                обновление за всю историю игры. 5 января игроки получили доступ
                к полностью переработанному открытому миру ЧЗО.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                В обновлении представлены более десяти новых локаций, сюжетные
                линии, а также улучшенная система квестов. Появились новый
                мутант - Контролер и множество нововведений в геймплее, включая
                новую систему собирательства, захват Флагов в открытом мире и
                многое другое.
              </p>
              <div className="text-center">
                <a
                  href="https://vk.com/@zonecraftstalker-dekabrskoe-globalnoe-obnovlenie-ot-301224"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-zone-radioactive hover:text-green-400 transition-colors text-lg font-semibold"
                >
                  <Icon name="ExternalLink" size={20} />
                  Читать полную статью
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Sponsors Section */}
      <div className="bg-zone-dark py-12">
        <div className="max-w-4xl mx-auto px-4 text-right">
          <div className="flex justify-end items-center gap-4">
            <span className="text-zone-muted text-sm uppercase tracking-wide">
              СПОНСОРЫ
            </span>
            <a
              href="https://t.me/zone_craft_DarkN3tsik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zone-radioactive hover:text-green-400 transition-colors"
            >
              <Icon name="Send" size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
