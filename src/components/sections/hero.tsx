import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/brain-mri-hero.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-hero">
      <div className="container px-4 py-16 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Разметка сосудов 
                <span className="text-accent"> головного мозга</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Автоматическая сегментация кровеносных сосудов на МРТ снимках 
                с использованием современных нейронных сетей
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-4 shadow-medical">
                Узнать больше
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4"
                asChild
              >
                <Link to="/gallery">Посмотреть результаты</Link>
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Высокая точность</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Быстрая обработка</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>AI технологии</span>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="relative overflow-hidden rounded-2xl shadow-card">
              <img 
                src={heroImage} 
                alt="МРТ снимок головного мозга с выделенными сосудами"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute inset-0">
                <svg className="w-full h-full opacity-70" viewBox="0 0 400 300" fill="none">
                  <path d="M50 150 Q100 120 150 140 T250 130 Q300 135 350 160" stroke="hsl(var(--medical-blue-dark))" strokeWidth="3" fill="none" />
                  <path d="M80 180 Q130 160 180 170 T280 165 Q320 170 360 190" stroke="hsl(var(--medical-blue-dark))" strokeWidth="2.5" fill="none" />
                  <path d="M40 120 Q90 100 140 110 T240 105 Q290 110 340 130" stroke="hsl(var(--medical-blue-dark))" strokeWidth="2" fill="none" />
                  <path d="M100 200 Q150 185 200 195 T300 190 Q340 195 380 210" stroke="hsl(var(--medical-blue-dark))" strokeWidth="2" fill="none" />
                  <path d="M60 90 Q110 70 160 80 T260 75 Q310 80 360 100" stroke="hsl(var(--medical-blue-dark))" strokeWidth="1.5" fill="none" />
                  <path d="M120 220 Q170 205 220 215 T320 210 Q360 215 400 230" stroke="hsl(var(--medical-blue-dark))" strokeWidth="1.5" fill="none" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};