import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Нейронная сеть",
    description: "Современные архитектуры глубокого обучения для точной сегментации сосудистой системы",
    icon: "🧠"
  },
  {
    title: "Высокая точность",
    description: "Алгоритм обеспечивает точность разметки 90% на тестовых данных",
    icon: "🎯"
  },
  {
    title: "Быстрая обработка",
    description: "Автоматическая обработка МРТ снимков за считанные секунды",
    icon: "⚡"
  },
  {
    title: "Медицинские стандарты",
    description: "Соответствие международным стандартам медицинской визуализации",
    icon: "🏥"
  }
];

export const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Возможности системы
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Передовые технологии искусственного интеллекта для медицинской диагностики
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-card hover:shadow-medical transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};