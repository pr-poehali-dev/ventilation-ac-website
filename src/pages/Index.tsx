import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';
import CostCalculator from '@/components/CostCalculator';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://functions.poehali.dev/57c1239c-55a1-4e05-a12e-851a9f2bd05b', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: data.message || 'Заявка отправлена!' });
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Ошибка отправки заявки' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Не удалось отправить заявку. Проверьте подключение к интернету.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Wind" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-foreground">ВентКлимат</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('hero')} className="text-sm font-medium hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('equipment')} className="text-sm font-medium hover:text-primary transition-colors">Оборудование</button>
              <button onClick={() => scrollToSection('projects')} className="text-sm font-medium hover:text-primary transition-colors">Проекты</button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">О компании</button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">Контакты</button>
            </div>
            <div className="flex items-center gap-2">
              <Button onClick={() => scrollToSection('contacts')} className="hidden md:inline-flex">
                Связаться
              </Button>
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Icon name="Menu" size={24} />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px]">
                  <div className="flex flex-col gap-6 mt-8">
                    <button 
                      onClick={() => { scrollToSection('hero'); setIsMenuOpen(false); }} 
                      className="text-lg font-medium hover:text-primary transition-colors text-left"
                    >
                      Главная
                    </button>
                    <button 
                      onClick={() => { scrollToSection('services'); setIsMenuOpen(false); }} 
                      className="text-lg font-medium hover:text-primary transition-colors text-left"
                    >
                      Услуги
                    </button>
                    <button 
                      onClick={() => { scrollToSection('equipment'); setIsMenuOpen(false); }} 
                      className="text-lg font-medium hover:text-primary transition-colors text-left"
                    >
                      Оборудование
                    </button>
                    <button 
                      onClick={() => { scrollToSection('projects'); setIsMenuOpen(false); }} 
                      className="text-lg font-medium hover:text-primary transition-colors text-left"
                    >
                      Проекты
                    </button>
                    <button 
                      onClick={() => { scrollToSection('about'); setIsMenuOpen(false); }} 
                      className="text-lg font-medium hover:text-primary transition-colors text-left"
                    >
                      О компании
                    </button>
                    <button 
                      onClick={() => { scrollToSection('contacts'); setIsMenuOpen(false); }} 
                      className="text-lg font-medium hover:text-primary transition-colors text-left"
                    >
                      Контакты
                    </button>
                    <Button 
                      onClick={() => { scrollToSection('contacts'); setIsMenuOpen(false); }} 
                      className="w-full mt-4"
                    >
                      Связаться
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-16">
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                <Icon name="Zap" size={20} className="text-primary" />
                <span className="text-sm font-medium text-primary">Инновационные решения</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Вентиляция и кондиционирование
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Проектируем, устанавливаем и обслуживаем современные системы климат-контроля для вашего комфорта
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" onClick={() => scrollToSection('services')} className="group">
                  Наши услуги
                  <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('projects')}>
                  Смотреть проекты
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <Icon name="ChevronDown" size={32} className="text-primary" />
          </div>
        </section>

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

        <section id="contacts" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
                <p className="text-xl text-muted-foreground">
                  Свяжитесь с нами для консультации и расчёта стоимости
                </p>
              </div>
              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Форма обратной связи</CardTitle>
                    <CardDescription>Оставьте заявку, и мы свяжемся с вами в течение 30 минут</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Input
                          placeholder="Ваше имя"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <Input
                          type="tel"
                          placeholder="Телефон"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                      <div>
                        <Input
                          type="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <div>
                        <Textarea
                          placeholder="Сообщение"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          rows={4}
                        />
                      </div>
                      {submitStatus && (
                        <div className={`p-4 rounded-lg ${submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                          {submitStatus.message}
                        </div>
                      )}
                      <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                        {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon name="Phone" size={24} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Телефон</h3>
                          <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                          <p className="text-muted-foreground">+7 (800) 555-35-35</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon name="Mail" size={24} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Email</h3>
                          <p className="text-muted-foreground">info@ventklimat.ru</p>
                          <p className="text-muted-foreground">sales@ventklimat.ru</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon name="MapPin" size={24} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Адрес</h3>
                          <p className="text-muted-foreground">г. Москва, ул. Промышленная, д. 12</p>
                          <p className="text-muted-foreground">Офис 301</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Wind" size={28} className="text-primary" />
                <span className="text-xl font-bold">ВентКлимат</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Профессиональные решения для вентиляции и кондиционирования
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Проектирование</li>
                <li>Монтаж</li>
                <li>Обслуживание</li>
                <li>Гарантия</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>О нас</li>
                <li>Проекты</li>
                <li>Сертификаты</li>
                <li>Вакансии</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 (495) 123-45-67</li>
                <li>info@ventklimat.ru</li>
                <li>Москва, ул. Промышленная, 12</li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 ВентКлимат. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;