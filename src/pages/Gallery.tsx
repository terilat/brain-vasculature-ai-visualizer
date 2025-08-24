import { Header } from "@/components/ui/header";
import { Card, CardContent } from "@/components/ui/card";
import { Contacts } from "@/components/sections/contacts";
import vesselImage1 from "@/assets/vessel-segmentation-1.png";
import vesselImage2 from "@/assets/vessel-segmentation-2.png";
import vesselImage3 from "@/assets/vessel-segmentation-3.png";

const galleryItems = [
  {
    id: 1,
    image: vesselImage1,
    title: "Сегментация сосудов - случай 1",
    description: "Автоматическая разметка артериальных сосудов на аксиальном срезе МРТ"
  },
  {
    id: 2,
    image: vesselImage2,
    title: "3D визуализация сосудистой сети", 
    description: "Трехмерная реконструкция сосудистого дерева на основе МРТ данных"
  },
  {
    id: 3,
    image: vesselImage3,
    title: "Сегментация сосудов - случай 2",
    description: "Автоматическая разметка артериальных сосудов на сагиттальном срезе МРТ"
  }
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-4 py-16 mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Галерея результатов
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Примеры автоматической разметки кровеносных сосудов головного мозга, 
            выполненной нашей нейронной сетью
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <Card 
              key={item.id}
              className="border-0 shadow-card hover:shadow-medical transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-muted/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Технические характеристики
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">&gt;90%</div>
                <div className="text-sm text-muted-foreground">Точность сегментации</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">&lt;2с</div>
                <div className="text-sm text-muted-foreground">Время обработки</div>
              </div>
              <div className="text-center">
                <div className="text-l font-bold text-accent mb-2">Неконтрастная 3D TOF-MRA (intracranial), 1.5-3T, NIfTI</div>
                <div className="text-sm text-muted-foreground">Протокол сканирования</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Contacts />
    </div>
  );
};

export default Gallery;