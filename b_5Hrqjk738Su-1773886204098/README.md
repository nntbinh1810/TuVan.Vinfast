# Website Tư Vấn Xe Điện VinFast

Đây là một website hiện đại, chuyên nghiệp dành cho tư vấn và bán hàng xe điện VinFast. Website hỗ trợ đầy đủ Tiếng Việt và tích hợp chatbot trực tiếp để hỗ trợ khách hàng 24/7.

## 🚗 Các Tính Năng Chính

### ✨ Giao Diện Hiện Đại
- **Design tối giúp tôi thể hiện xe điện một cách ấn tượng** với chủ đề màu cam (primary color)
- **Responsive design** hoạt động hoàn hảo trên mọi thiết bị (desktop, tablet, mobile)
- **Hiệu ứng hover** mượt mà và chuyên nghiệp
- **Typography tiếng Việt** được tối ưu hóa

### 🚙 Showcase Xe Điện
- **3 mẫu xe chính**: VF8, VF9, VF5
- **Thông tin chi tiết**: Giá, phạm vi, công suất, thời gian sạc
- **Hình ảnh chất lượng cao** cho mỗi mẫu xe
- **Màu sắc có sẵn** với hình ảnh màu sắc thực tế
- **Card sản phẩm** với thiết kế hiện đại và tương tác

### 💬 Chatbot Tư Vấn Trực Tiếp
- **Chatbot Botpress tích hợp** sẵn sàng hỗ trợ 24/7
- **Giao diện chatbot tùy chỉnh** với:
  - Nút **X** để đóng cửa sổ chatbot
  - Nút **_** (minimize) để thu nhỏ cửa sổ
  - Header với branding VinFast
- **Nút chatbot floating** ở góc dưới bên phải
- **Responsive** trên tất cả các kích thước màn hình

### 📊 Bảng So Sánh
- So sánh chi tiết các đặc tính giữa các mẫu xe
- Hiển thị giá, phạm vi, công suất, thời gian sạc

### 🎨 Thiết Kế & Thương Hiệu
- **Màu sắc hài hòa**: Nền tối (oklch 0.08), text sáng, accent cam (oklch 0.55 @ 30°)
- **Không lỗi font chữ**: Sử dụng Geist font từ Google Fonts
- **Tương phản cao** cho dễ đọc
- **Animation mượt** và hiệu ứng chuyển tiếp

## 📁 Cấu Trúc Thư Mục

```
├── app/
│   ├── page.tsx              # Trang chính
│   ├── layout.tsx            # Layout gốc (hỗ trợ tiếng Việt)
│   └── globals.css           # Định nghĩa theme màu
├── components/
│   ├── Header.tsx            # Header navigation
│   ├── VehicleCard.tsx       # Component card xe
│   └── ChatbotWidget.tsx     # Component chatbot
├── public/
│   ├── vf8-side.jpg          # Hình ảnh VinFast VF8
│   ├── vf9-side.jpg          # Hình ảnh VinFast VF9
│   ├── vf5-side.jpg          # Hình ảnh VinFast VF5
│   └── hero-banner.jpg       # Hình hero banner
└── README.md                 # Tệp này
```

## 🚀 Cách Sử Dụng

### 1. Cài Đặt Dự Án

Clone dự án và cài đặt dependencies:

```bash
# Sử dụng pnpm (khuyến nghị)
pnpm install

# Hoặc npm
npm install

# Hoặc yarn
yarn install
```

### 2. Chạy Máy Chủ Phát Triển

```bash
pnpm dev
# hoặc
npm run dev
# hoặc
yarn dev
```

Mở trình duyệt và truy cập: `http://localhost:3000`

### 3. Build Cho Production

```bash
pnpm build
pnpm start
# hoặc
npm run build
npm run start
```

## 🛠️ Công Nghệ Sử Dụng

- **Next.js 16.1** - React framework hiện đại
- **React 19.2** - UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - Component library
- **Radix UI** - Accessible components
- **Lucide React** - Icon library
- **Botpress** - Chatbot integration
- **Next.js Image** - Optimized image handling

## ⚙️ Cấu Hình Chatbot

Website tích hợp Botpress chatbot. URL cấu hình:

```
https://cdn.botpress.cloud/webchat/v3.5/shareable.html?configUrl=https://files.bpcontent.cloud/2026/01/28/11/20260128112950-66R4VNA3.json
```

Chatbot được tích hợp qua component `ChatbotWidget.tsx` và tự động load khi người dùng mở cửa sổ chat.

## 🎯 Tùy Chỉnh

### Thay Đổi Thông Tin Xe

Chỉnh sửa mảng `vehicles` trong `/app/page.tsx`:

```typescript
const vehicles: Vehicle[] = [
  {
    id: 'vf8',
    name: 'VinFast VF8',
    // ... các trường khác
  },
  // Thêm xe khác tại đây
];
```

### Thay Đổi Màu Sắc

Chỉnh sửa các biến CSS trong `/app/globals.css`:

```css
:root {
  --primary: oklch(0.55 0.2 30);  /* Màu cam chính */
  --background: oklch(0.08 0 0);   /* Nền tối */
  --foreground: oklch(0.95 0 0);   /* Text sáng */
  /* ... các màu khác */
}
```

### Thay Đổi Nội Dung

Tất cả nội dung Tiếng Việt có thể được chỉnh sửa trực tiếp trong các file:
- Tiêu đề, mô tả xe: `/app/page.tsx`
- Menu header: `/components/Header.tsx`
- Text chatbot: `/components/ChatbotWidget.tsx`

## 📱 Tính Năng Responsive

Website được thiết kế mobile-first và hỗ trợ:
- **Mobile** (< 640px)
- **Tablet** (640px - 1024px)
- **Desktop** (> 1024px)

Tất cả các component đều responsive và hiệu suất tối ưu.

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels cho tất cả interactive elements
- High contrast colors (WCAG AA compliant)
- Keyboard navigation support
- Screen reader friendly

## 📝 Nội Dung Tiếng Việt

Toàn bộ website được tối ưu hóa cho Tiếng Việt:
- Meta charset: UTF-8
- HTML lang attribute: `vi`
- Font Geist hỗ trợ Tiếng Việt
- Không có lỗi font chữ hoặc ký tự đặc biệt

## 🔒 Bảo Mật

- Sử dụng HTTPS cho chatbot iframe
- Không lưu dữ liệu nhạy cảm client-side
- CSP headers có thể được cấu hình trong next.config.mjs

## 📈 SEO

- Metadata tối ưu hóa cho SEO
- Structured data support
- Meta descriptions và keywords
- Open Graph tags (có thể thêm)

## 🤝 Hỗ Trợ

Để thêm các tính năng hoặc thay đổi, hãy:

1. Kiểm tra cấu trúc component hiện tại
2. Tạo component hoặc trang mới theo pattern hiện tại
3. Cập nhật styling sử dụng Tailwind CSS classes
4. Test responsive design trên các thiết bị khác nhau

## 📄 License

Dự án này được tạo cho VinFast. Tất cả quyền được bảo lưu.

---

**Tạo ngày**: 2026  
**Version**: 1.0.0  
**Ngôn ngữ**: Tiếng Việt + English (Framework)
