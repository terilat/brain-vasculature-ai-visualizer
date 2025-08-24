import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Technology = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Технология и подход
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Наша система использует передовые методы компьютерного зрения и глубокого обучения 
                для автоматической сегментации кровеносных сосудов на МРТ снимках головного мозга.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Предобработка данных</h3>
                  <p className="text-muted-foreground">
                    Нормализация и улучшение качества МРТ изображений для оптимальной работы алгоритма
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Сегментация нейросетью</h3>
                  <p className="text-muted-foreground">
                    Применение обученной CNN для точного выделения сосудистых структур
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Постобработка</h3>
                  <p className="text-muted-foreground">
                    Морфологическая обработка и фильтрация для получения финальной разметки
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-accent">Архитектура модели</CardTitle>
                <CardDescription>
                  Hessian-based метод медицинской сегментации
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Точность</span>
                    <span className="font-semibold">95.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Время обработки</span>
                    <span className="font-semibold">3-5 сек</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Разрешение</span>
                    <span className="font-semibold">512×512</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-accent">Обучающие данные</CardTitle>
                <CardDescription>
                  Большой датасет аннотированных МРТ изображений
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Количество снимков</span>
                    <span className="font-semibold">10,000+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Экспертная разметка</span>
                    <span className="font-semibold">Врачи-радиологи</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};