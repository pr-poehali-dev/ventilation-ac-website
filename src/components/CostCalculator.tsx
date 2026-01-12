import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

type ServiceType = 'ventilation' | 'conditioning' | 'both';
type ObjectType = 'apartment' | 'house' | 'office' | 'commercial';

const CostCalculator = () => {
  const [serviceType, setServiceType] = useState<ServiceType>('conditioning');
  const [objectType, setObjectType] = useState<ObjectType>('apartment');
  const [area, setArea] = useState([50]);
  const [showResult, setShowResult] = useState(false);

  const calculateCost = () => {
    let basePrice = 0;
    
    if (serviceType === 'ventilation') basePrice = 3000;
    if (serviceType === 'conditioning') basePrice = 2500;
    if (serviceType === 'both') basePrice = 5000;

    const objectMultiplier = {
      apartment: 1,
      house: 1.2,
      office: 1.5,
      commercial: 1.8
    }[objectType];

    const totalCost = Math.round(basePrice * area[0] * objectMultiplier);
    
    return {
      min: Math.round(totalCost * 0.85),
      max: Math.round(totalCost * 1.15)
    };
  };

  const handleCalculate = () => {
    setShowResult(true);
  };

  const cost = showResult ? calculateCost() : null;

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl flex items-center justify-center gap-2">
          <Icon name="Calculator" size={32} className="text-primary" />
          Калькулятор стоимости
        </CardTitle>
        <CardDescription className="text-base">
          Рассчитайте примерную стоимость установки систем климат-контроля
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <Label className="text-base font-semibold">Тип системы</Label>
          <RadioGroup value={serviceType} onValueChange={(value) => setServiceType(value as ServiceType)}>
            <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
              <RadioGroupItem value="ventilation" id="ventilation" />
              <Label htmlFor="ventilation" className="flex-1 cursor-pointer">
                <div className="flex items-center gap-2">
                  <Icon name="Wind" size={20} className="text-primary" />
                  <span>Вентиляция</span>
                </div>
              </Label>
            </div>
            <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
              <RadioGroupItem value="conditioning" id="conditioning" />
              <Label htmlFor="conditioning" className="flex-1 cursor-pointer">
                <div className="flex items-center gap-2">
                  <Icon name="Snowflake" size={20} className="text-primary" />
                  <span>Кондиционирование</span>
                </div>
              </Label>
            </div>
            <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
              <RadioGroupItem value="both" id="both" />
              <Label htmlFor="both" className="flex-1 cursor-pointer">
                <div className="flex items-center gap-2">
                  <Icon name="Zap" size={20} className="text-primary" />
                  <span>Комплексная система (вентиляция + кондиционирование)</span>
                </div>
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-3">
          <Label className="text-base font-semibold">Тип объекта</Label>
          <RadioGroup value={objectType} onValueChange={(value) => setObjectType(value as ObjectType)}>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                <RadioGroupItem value="apartment" id="apartment" />
                <Label htmlFor="apartment" className="flex-1 cursor-pointer">Квартира</Label>
              </div>
              <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                <RadioGroupItem value="house" id="house" />
                <Label htmlFor="house" className="flex-1 cursor-pointer">Дом</Label>
              </div>
              <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                <RadioGroupItem value="office" id="office" />
                <Label htmlFor="office" className="flex-1 cursor-pointer">Офис</Label>
              </div>
              <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                <RadioGroupItem value="commercial" id="commercial" />
                <Label htmlFor="commercial" className="flex-1 cursor-pointer">Коммерция</Label>
              </div>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <Label className="text-base font-semibold">Площадь помещения</Label>
            <span className="text-2xl font-bold text-primary">{area[0]} м²</span>
          </div>
          <Slider
            value={area}
            onValueChange={setArea}
            min={20}
            max={500}
            step={5}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>20 м²</span>
            <span>500 м²</span>
          </div>
        </div>

        <Button onClick={handleCalculate} size="lg" className="w-full">
          <Icon name="Calculator" size={20} className="mr-2" />
          Рассчитать стоимость
        </Button>

        {showResult && cost && (
          <div className="mt-6 p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg border-2 border-primary/20 animate-fade-in">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">Примерная стоимость установки</p>
              <p className="text-4xl font-bold text-primary mb-4">
                {cost.min.toLocaleString('ru-RU')} - {cost.max.toLocaleString('ru-RU')} ₽
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center justify-center gap-2">
                  <Icon name="Info" size={16} />
                  Расчёт включает оборудование и монтажные работы
                </p>
                <p>Точная стоимость зависит от выбранного оборудования и сложности объекта</p>
              </div>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  const element = document.getElementById('contacts');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Получить точный расчёт
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CostCalculator;
