import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/brain-mri-hero.jpg";
export const Hero = () => {
  return <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-hero">
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
              
              <Button variant="outline" size="lg" className="text-lg px-8 py-4" asChild>
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
              <img src={heroImage} alt="МРТ снимок головного мозга с выделенными сосудами" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent mx-0 my-0 px-[40px] py-[40px]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};