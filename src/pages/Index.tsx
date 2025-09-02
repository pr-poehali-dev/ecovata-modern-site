import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const advantages = [
    {
      icon: "Leaf",
      title: "Экологически чистый",
      description: "Изготовлен из натуральных материалов без вредных примесей"
    },
    {
      icon: "Shield",
      title: "Огнестойкость",
      description: "Обработан антипиренами для защиты от возгорания"
    },
    {
      icon: "Snowflake",
      title: "Теплоизоляция",
      description: "Отличные теплоизоляционные свойства круглый год"
    },
    {
      icon: "Volume2",
      title: "Звукоизоляция",
      description: "Эффективно поглощает звуки и создает тишину"
    },
    {
      icon: "Zap",
      title: "Энергоэффективность",
      description: "Снижает затраты на отопление до 40%"
    },
    {
      icon: "CheckCircle",
      title: "Долговечность",
      description: "Служит более 50 лет без потери свойств"
    }
  ];

  const products = [
    {
      title: "Эковата навалом",
      description: "Для самостоятельного монтажа",
      price: "от 850 ₽/м³",
      features: ["Плотность 35-42 кг/м³", "Влажность до 15%", "Антисептическая обработка"]
    },
    {
      title: "Монтаж эковаты",
      description: "Профессиональная установка",
      price: "от 350 ₽/м²",
      features: ["Механизированная укладка", "Гарантия на работы", "Контроль плотности"]
    },
    {
      title: "Комплексное утепление",
      description: "Материал + работа под ключ",
      price: "от 1200 ₽/м²",
      features: ["Полный цикл работ", "Материалы в стоимости", "Гарантия 5 лет"]
    }
  ];

  const applications = [
    "Утепление крыш и чердаков",
    "Изоляция стен каркасных домов",
    "Звукоизоляция перегородок",
    "Утепление полов по лагам",
    "Теплоизоляция мансард",
    "Звукоизоляция студий"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Leaf" size={32} className="text-primary" />
              <span className="text-xl font-heading font-bold text-primary">ЭкоВата Крым</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#products" className="text-foreground hover:text-primary transition-colors">Продукция</a>
              <a href="#advantages" className="text-foreground hover:text-primary transition-colors">Преимущества</a>
              <a href="#applications" className="text-foreground hover:text-primary transition-colors">Применение</a>
              <a href="#prices" className="text-foreground hover:text-primary transition-colors">Цены</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать звонок
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="text-sm font-medium">
                <Icon name="Award" size={16} className="mr-2" />
                Сертифицированный материал
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-heading font-bold leading-tight">
                Экологичное утепление дома с <span className="text-primary">эковатой</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Натуральный утеплитель из целлюлозного волокна. Безопасно для здоровья, 
                эффективно для экономии. Профессиональный монтаж в Крыму и Севастополе.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base font-medium">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
                <Button variant="outline" size="lg" className="text-base font-medium">
                  <Icon name="Play" size={20} className="mr-2" />
                  Посмотреть процесс
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2000+</div>
                  <div className="text-sm text-muted-foreground">домов утеплено</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">экологично</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-primary/5 rounded-3xl overflow-hidden">
                <img 
                  src="/img/ad3c6b0f-9c42-4e83-91f6-fbd7e6acf2f5.jpg" 
                  alt="Эковата - натуральный утеплитель"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg p-6 border">
                <div className="flex items-center gap-3">
                  <Icon name="Thermometer" size={24} className="text-primary" />
                  <div>
                    <div className="font-semibold">До -40°C экономии</div>
                    <div className="text-sm text-muted-foreground">на отоплении</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <Icon name="Star" size={16} className="mr-2" />
              Преимущества
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
              Почему выбирают эковату
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Современный экологичный материал, который превосходит традиционные утеплители 
              по всем ключевым характеристикам
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={advantage.icon} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl font-heading">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {advantage.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <Icon name="Package" size={16} className="mr-2" />
              Продукция
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
              Варианты поставки эковаты
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите оптимальный вариант: материал для самостоятельного монтажа 
              или полный цикл работ под ключ
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-heading">{product.title}</CardTitle>
                  <CardDescription className="text-base">{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-3xl font-bold text-primary">{product.price}</div>
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section id="applications" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                <Icon name="Home" size={16} className="mr-2" />
                Применение
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
                Где применяется эковата
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Универсальный материал для утепления и звукоизоляции любых конструкций. 
                Подходит для всех типов зданий.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {applications.map((application, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Icon name="CheckCircle" size={20} className="text-primary flex-shrink-0" />
                    <span>{application}</span>
                  </div>
                ))}
              </div>
              <Button className="mt-8" size="lg">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Получить консультацию
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-primary/5 rounded-2xl overflow-hidden">
                <img 
                  src="/img/782f40a7-e353-4197-9292-7af6fc4cf765.jpg" 
                  alt="Монтаж эковаты в доме"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-6 left-6 bg-white rounded-xl shadow-md p-4 border">
                <div className="flex items-center gap-2">
                  <Icon name="Timer" size={20} className="text-primary" />
                  <span className="font-medium">1 день монтажа</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <Icon name="DollarSign" size={16} className="mr-2" />
              Цены
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
              Стоимость утепления эковатой
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Прозрачное ценообразование. Стоимость зависит от объема работ и сложности монтажа
            </p>
          </div>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-heading font-bold">Услуги монтажа</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b border-muted">
                      <span>Утепление стен</span>
                      <span className="font-semibold text-primary">от 350 ₽/м²</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-muted">
                      <span>Утепление кровли</span>
                      <span className="font-semibold text-primary">от 400 ₽/м²</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-muted">
                      <span>Утепление полов</span>
                      <span className="font-semibold text-primary">от 300 ₽/м²</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-muted">
                      <span>Звукоизоляция</span>
                      <span className="font-semibold text-primary">от 450 ₽/м²</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-heading font-bold">Материалы</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b border-muted">
                      <span>Эковата навалом</span>
                      <span className="font-semibold text-primary">от 850 ₽/м³</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-muted">
                      <span>Доставка по Крыму</span>
                      <span className="font-semibold text-primary">от 30 ₽/км</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-muted">
                      <span>Выезд замерщика</span>
                      <span className="font-semibold text-primary">Бесплатно</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-muted">
                      <span>Гарантия на работы</span>
                      <span className="font-semibold text-primary">5 лет</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-primary/5 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-heading font-bold text-lg">Рассчитать точную стоимость</h4>
                    <p className="text-muted-foreground">Бесплатный выезд замерщика и составление сметы</p>
                  </div>
                  <Button size="lg">
                    <Icon name="Calculator" size={20} className="mr-2" />
                    Вызвать замерщика
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <Icon name="MapPin" size={16} className="mr-2" />
              Контакты
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
              Свяжитесь с нами
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Работаем по всему Крыму. Бесплатная консультация и выезд специалиста на объект
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <h3 className="font-heading font-bold mb-2">Телефон</h3>
                <div className="space-y-1">
                  <div className="text-lg font-semibold text-primary">+7 (978) 031-13-44</div>
                  <div className="text-sm text-muted-foreground">Ежедневно с 8:00 до 20:00</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <h3 className="font-heading font-bold mb-2">Email</h3>
                <div className="space-y-1">
                  <div className="text-lg font-semibold text-primary">info@ekovata-krym.ru</div>
                  <div className="text-sm text-muted-foreground">Ответим в течение часа</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <h3 className="font-heading font-bold mb-2">География работ</h3>
                <div className="space-y-1">
                  <div className="text-lg font-semibold">Крым и Севастополь</div>
                  <div className="text-sm text-muted-foreground">Бесплатный выезд в радиусе 50 км</div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base">
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать звонок
              </Button>
              <Button variant="outline" size="lg" className="text-base">
                <Icon name="MessageSquare" size={20} className="mr-2" />
                Написать в WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Leaf" size={28} className="text-primary" />
                <span className="text-xl font-heading font-bold">ЭкоВата Крым</span>
              </div>
              <p className="text-secondary-foreground/80 mb-4">
                Профессиональное утепление домов экологически чистой эковатой. 
                Более 15 лет опыта работы в Крыму.
              </p>
              <div className="flex gap-3">
                <Icon name="Award" size={20} />
                <Icon name="Shield" size={20} />
                <Icon name="CheckCircle" size={20} />
              </div>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li>Утепление стен</li>
                <li>Утепление кровли</li>
                <li>Утепление полов</li>
                <li>Звукоизоляция</li>
                <li>Продажа эковаты</li>
                <li>Консультации</li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Контакты</h4>
              <div className="space-y-3 text-secondary-foreground/80">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (978) 031-13-44</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@ekovata-krym.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Крым, Севастополь</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-secondary-foreground/60">
            <p>&copy; 2024 ЭкоВата Крым. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;