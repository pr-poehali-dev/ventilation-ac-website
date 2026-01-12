import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
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
  );
};

export default Footer;
