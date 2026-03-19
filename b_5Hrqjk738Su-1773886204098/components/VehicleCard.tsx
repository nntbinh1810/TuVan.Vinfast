import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

interface VehicleCardProps {
  name: string;
  image: string;
  price: string;
  description: string;
  specs: {
    range: string;
    power: string;
    charging: string;
  };
  colors: string[];
  onConsult: () => void;
}

export default function VehicleCard({
  name,
  image,
  price,
  description,
  specs,
  colors,
  onConsult,
}: VehicleCardProps) {
  return (
    <Card className="overflow-hidden bg-card hover:shadow-xl transition-shadow duration-300 border border-border">
      {/* Vehicle Image */}
      <div className="relative h-64 bg-gradient-to-b from-secondary to-black overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title and Price */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-2">{name}</h3>
          <p className="text-3xl font-bold text-primary">
            {price}
            <span className="text-sm text-muted-foreground ml-2">VNĐ</span>
          </p>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>

        {/* Specs */}
        <div className="grid grid-cols-3 gap-3 py-3 border-y border-border">
          <div className="text-center">
            <p className="text-primary font-semibold">{specs.range}</p>
            <p className="text-xs text-muted-foreground">Phạm vi</p>
          </div>
          <div className="text-center">
            <p className="text-primary font-semibold">{specs.power}</p>
            <p className="text-xs text-muted-foreground">Công suất</p>
          </div>
          <div className="text-center">
            <p className="text-primary font-semibold">{specs.charging}</p>
            <p className="text-xs text-muted-foreground">Sạc</p>
          </div>
        </div>

        {/* Colors */}
        <div>
          <p className="text-sm font-semibold text-foreground mb-3">Màu sắc có sẵn:</p>
          <div className="flex gap-3 flex-wrap">
            {colors.map((color, idx) => (
              <div
                key={idx}
                className="relative group"
                title={color}
              >
                <div
                  className="w-8 h-8 rounded-lg border-2 border-border cursor-pointer hover:border-primary transition-colors duration-200"
                  style={{ backgroundColor: color }}
                />
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-secondary text-foreground text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-border">
                  {color}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <Button
          onClick={onConsult}
          className="w-full bg-primary hover:bg-orange-600 text-primary-foreground font-semibold py-2 rounded-lg transition-colors duration-200"
        >
          Tư vấn ngay
        </Button>
      </div>
    </Card>
  );
}
