import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import CostCalculator from '@/components/CostCalculator';

const ContentSections = () => {
  return (
    <>
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр решений для создания идеального микроклимата
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: 'FileText',
                title: 'Проектирование',
                description: 'Разработка технических решений с учётом всех особенностей вашего объекта'
              },
              {
                icon: 'Wrench',
                title: 'Монтаж систем',
                description: 'Профессиональная установка вентиляции и кондиционирования любой сложности'
              },
              {
                icon: 'Settings',
                title: 'Обслуживание',
                description: 'Регулярное техническое обслуживание для бесперебойной работы оборудования'
              },
              {
                icon: 'Thermometer',
                title: 'Кондиционирование',
                description: 'Установка и настройка климатических систем для комфортной температуры'
              },
              {
                icon: 'Wind',
                title: 'Вентиляция',
                description: 'Системы приточно-вытяжной вентиляции для чистого воздуха'
              },
              {
                icon: 'ShieldCheck',
                title: 'Гарантия',
                description: 'Гарантийное и постгарантийное обслуживание всех систем'
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 hover:border-primary">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <Icon name={service.icon} size={28} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <CostCalculator />
        </div>
      </section>

      <section id="equipment" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Оборудование</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Работаем только с проверенными мировыми брендами
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Daikin', type: 'Кондиционеры', icon: 'Snowflake' },
              { name: 'Mitsubishi', type: 'VRF системы', icon: 'Building2' },
              { name: 'Systemair', type: 'Вентиляция', icon: 'Fan' },
              { name: 'Carrier', type: 'Чиллеры', icon: 'Factory' }
            ].map((brand, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name={brand.icon} size={32} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">{brand.name}</h3>
                  <p className="text-muted-foreground text-center text-sm">{brand.type}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши проекты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Галерея выполненных работ и установленных систем
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: 'https://cdn.poehali.dev/projects/143fc0db-8c8a-4086-a7c4-e343407e8614/files/1e75de1c-05b1-490d-8c8f-9961477272aa.jpg',
                title: 'Торговый центр "Галерея"',
                description: 'Приточно-вытяжная вентиляция, 5000 м²'
              },
              {
                image: 'https://cdn.poehali.dev/projects/143fc0db-8c8a-4086-a7c4-e343407e8614/files/e6ece327-f0d4-4f6b-ba17-ec0237e885ae.jpg',
                title: 'Офисный центр "Технопарк"',
                description: 'VRF система кондиционирования'
              },
              {
                image: 'https://cdn.poehali.dev/projects/143fc0db-8c8a-4086-a7c4-e343407e8614/files/5fec18b1-c659-4ddb-af59-ef3536b7dedb.jpg',
                title: 'Производственный комплекс',
                description: 'Промышленная вентиляция и климат-контроль'
              }
            ].map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">О компании</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Компания "ВентКлимат" — ведущий специалист в области проектирования, монтажа и обслуживания систем вентиляции и кондиционирования.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Более 15 лет опыта работы, сотни успешно реализованных проектов и тысячи довольных клиентов — наша главная гордость.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-primary text-white">
                <CardHeader>
                  <Icon name="Award" size={40} className="mb-4" />
                  <CardTitle>Сертификаты</CardTitle>
                  <CardDescription className="text-white/80">Официальный партнёр ведущих производителей</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-secondary text-white">
                <CardHeader>
                  <Icon name="Users" size={40} className="mb-4" />
                  <CardTitle>Команда</CardTitle>
                  <CardDescription className="text-white/80">Квалифицированные инженеры и монтажники</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-secondary text-white">
                <CardHeader>
                  <Icon name="Clock" size={40} className="mb-4" />
                  <CardTitle>24/7</CardTitle>
                  <CardDescription className="text-white/80">Круглосуточная техническая поддержка</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-primary text-white">
                <CardHeader>
                  <Icon name="CheckCircle" size={40} className="mb-4" />
                  <CardTitle>Гарантия</CardTitle>
                  <CardDescription className="text-white/80">До 5 лет на оборудование и работы</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Что говорят о нас наши клиенты
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: 'Александр Петров',
                company: 'ТЦ "Галерея"',
                rating: 5,
                text: 'Профессиональная команда! Установили вентиляцию в торговом центре точно в срок. Качество работы на высшем уровне, всё работает безупречно уже год.',
                avatar: 'AP'
              },
              {
                name: 'Марина Соколова',
                company: 'Офис "Технопарк"',
                rating: 5,
                text: 'Очень довольны VRF-системой кондиционирования. Сотрудники компании грамотно подобрали оборудование, монтаж выполнили аккуратно. Рекомендуем!',
                avatar: 'МС'
              },
              {
                name: 'Дмитрий Волков',
                company: 'Частный дом',
                rating: 5,
                text: 'Установили приточно-вытяжную вентиляцию в загородном доме. Работа выполнена качественно, инженеры дали подробные консультации по эксплуатации.',
                avatar: 'ДВ'
              },
              {
                name: 'Елена Морозова',
                company: 'Ресторан "Panorama"',
                rating: 5,
                text: 'Спасибо за оперативность! Установили промышленную вытяжку для кухни за 2 дня. Отличное соотношение цены и качества.',
                avatar: 'ЕМ'
              },
              {
                name: 'Игорь Кузнецов',
                company: 'Производство',
                rating: 5,
                text: 'Реализовали сложный проект климат-контроля на производстве. Всё продумано до мелочей, система работает стабильно даже при высоких нагрузках.',
                avatar: 'ИК'
              },
              {
                name: 'Ольга Белова',
                company: 'Квартира',
                rating: 5,
                text: 'Установили кондиционер в квартире. Порадовала цена и скорость работы. Монтажники очень аккуратные, всё убрали за собой. Спасибо!',
                avatar: 'ОБ'
              }
            ].map((review, index) => (
              <Card key={index} className="hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                      {review.avatar}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{review.name}</h3>
                      <p className="text-sm text-muted-foreground">{review.company}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    "{review.text}"
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentSections;
