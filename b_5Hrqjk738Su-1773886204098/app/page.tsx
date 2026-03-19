'use client';

import { useState, useRef } from 'react';
import Header from '@/components/Header';
import VehicleCard from '@/components/VehicleCard';
import ChatbotWidget from '@/components/ChatbotWidget';
import Image from 'next/image';

interface Vehicle {
  id: string;
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
  features: string[];
}

const vehicles: Vehicle[] = [
  {
    id: 'vf8',
    name: 'VinFast VF8',
    image: '/vf8-side.jpg',
    price: '1.099.000.000',
    description: 'SUV điện cao cấp với công nghệ tự lái tiên tiến, thiết kế sang trọng và hiệu suất vượt trội. Lựa chọn hoàn hảo cho gia đình hiện đại.',
    specs: {
      range: '430 km',
      power: '260 kW',
      charging: '30-80% / 42 phút',
    },
    colors: ['#c0c0c0', '#1a1a1a', '#1e40af', '#dc2626'],
    features: [
      'Hệ thống an toàn 5 sao',
      'Nội thất cao cấp da thực',
      'Trợ lái tự động toàn diện',
      'Màn hình cảm ứng 12.9 inch',
      'Hệ thống âm thanh Harman Kardon',
    ],
  },
  {
    id: 'vf9',
    name: 'VinFast VF9',
    image: '/vf9-side.jpg',
    price: '1.699.000.000',
    description: 'Flagship SUV điện có 3 hàng ghế, mang đến không gian sống động và tiện nghi cho cả gia đình. Công suất tối đa 350 kW, hiệu suất không thể phủ nhận.',
    specs: {
      range: '550 km',
      power: '350 kW',
      charging: '30-80% / 38 phút',
    },
    colors: ['#1a1a1a', '#c0c0c0', '#1b5e20', '#6a1b9a'],
    features: [
      'Ghế da Nappa cao cấp',
      'Hệ thống giải trí 360 độ',
      'Điều hòa vùng 4 khu',
      'Tấm nóc panorama',
      'Cửa mở cánh chim',
    ],
  },
  {
    id: 'vf5',
    name: 'VinFast VF5',
    image: '/vf5-side.jpg',
    price: '599.000.000',
    description: 'Xe điện compact thông minh dành cho đô thị. Tiết kiệm điện, dễ lái, và phù hợp với ngân sách tối ưu. Giải pháp giao thông xanh cho thành phố.',
    specs: {
      range: '300 km',
      power: '110 kW',
      charging: '30-80% / 45 phút',
    },
    colors: ['#dc2626', '#f59e0b', '#10b981', '#3b82f6'],
    features: [
      'Kích thước nhỏ gọn',
      'Tiêu thụ điện tiết kiệm',
      'Hệ thống an toàn đầy đủ',
      'Kết nối smartphone',
      'Bảo hành 8 năm PIN',
    ],
  },
];

export default function Home() {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const chatbotRef = useRef<HTMLDivElement>(null);

  const handleConsult = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    // Scroll to chatbot
    setTimeout(() => {
      window.scrollTo({ bottom: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 sm:h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/hero-banner.jpg"
          alt="VinFast Electric Vehicles"
          fill
          className="object-cover absolute inset-0"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4 text-balance">
            Tương Lai Của Giao Thông Điện
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 text-balance">
            Khám phá bộ sưu tập xe điện VinFast cao cấp với công nghệ tiên tiến và thiết kế đẳng cấp
          </p>
          <button className="bg-primary hover:bg-orange-600 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors duration-200 text-lg">
            Khám phá ngay
          </button>
        </div>
      </section>

      {/* Vehicles Section */}
      <section id="models" className="py-16 sm:py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Các Mẫu Xe Nổi Bật
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Lựa chọn từ ba mẫu xe điện tuyệt vời, mỗi chiếc được thiết kế để phục vụ các nhu cầu khác nhau
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              name={vehicle.name}
              image={vehicle.image}
              price={vehicle.price}
              description={vehicle.description}
              specs={vehicle.specs}
              colors={vehicles.find(v => v.id === vehicle.id)?.colors || []}
              onConsult={() => handleConsult(vehicle)}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            Tại Sao Chọn VinFast?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg border border-border hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Công Nghệ An Toàn</h3>
              <p className="text-muted-foreground">
                Hệ thống an toàn được chứng nhận 5 sao với các tính năng hỗ trợ người lái tự động
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Hỗ Trợ 24/7</h3>
              <p className="text-muted-foreground">
                Đội tư vấn chuyên nghiệp sẵn sàng hỗ trợ bạn mọi lúc, mọi nơi qua chatbot trực tiếp
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Bảo Hành Dài Hạn</h3>
              <p className="text-muted-foreground">
                Bảo hành PIN 8 năm, bảo hành khung gầm 10 năm, được hưởng chính sách hỗ trợ tốt nhất
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specs Comparison */}
      <section id="specs" className="py-16 sm:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            So Sánh Chỉ Số Kỹ Thuật
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 text-foreground font-semibold">Đặc Tính</th>
                  {vehicles.map((v) => (
                    <th key={v.id} className="text-center py-4 px-4 text-foreground font-semibold">
                      {v.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border bg-secondary/50">
                  <td className="py-4 px-4 text-foreground font-medium">Giá</td>
                  {vehicles.map((v) => (
                    <td key={v.id} className="text-center py-4 px-4 text-primary font-semibold">
                      {v.price}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 text-foreground font-medium">Phạm Vi (km)</td>
                  {vehicles.map((v) => (
                    <td key={v.id} className="text-center py-4 px-4 text-muted-foreground">
                      {v.specs.range}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-border bg-secondary/50">
                  <td className="py-4 px-4 text-foreground font-medium">Công Suất</td>
                  {vehicles.map((v) => (
                    <td key={v.id} className="text-center py-4 px-4 text-muted-foreground">
                      {v.specs.power}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 text-foreground font-medium">Thời Gian Sạc</td>
                  {vehicles.map((v) => (
                    <td key={v.id} className="text-center py-4 px-4 text-muted-foreground">
                      {v.specs.charging}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-16 sm:py-24 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Sẵn Sàng Lái Một Chiếc Xe Điện?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Hãy liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí về các mẫu xe phù hợp với bạn
          </p>
          <button className="bg-primary hover:bg-orange-600 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors duration-200 text-lg">
            Liên Hệ Chúng Tôi
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary border-t border-border py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground text-sm">
          <p>&copy; 2026 VinFast. Tất cả các quyền được bảo lưu. | Tư vấn bán hàng: <span className="text-primary font-semibold">1900.123.456</span></p>
        </div>
      </footer>

      {/* Chatbot Widget */}
      <div ref={chatbotRef}>
        <ChatbotWidget />
      </div>
    </main>
  );
}
