# Hướng Dẫn Cài Đặt - Website VinFast

## 📋 Yêu Cầu Hệ Thống

- **Node.js**: Phiên bản 18.17 hoặc cao hơn
- **npm/pnpm/yarn**: Công cụ quản lý package
- **Git**: Để clone dự án (tùy chọn)

## 🔧 Cài Đặt

### Bước 1: Tải Dự Án

**Tùy chọn A: Sử dụng GitHub CLI**
```bash
git clone <repository-url>
cd website_demo
```

**Tùy chọn B: Sử dụng ZIP**
- Download ZIP file từ v0
- Giải nén thư mục
- Mở terminal tại thư mục dự án

### Bước 2: Cài Đặt Dependencies

```bash
# Sử dụng pnpm (khuyến nghị)
pnpm install

# Hoặc npm
npm install

# Hoặc yarn
yarn install
```

### Bước 3: Chạy Máy Chủ Phát Triển

```bash
# Sử dụng pnpm
pnpm dev

# Hoặc npm
npm run dev

# Hoặc yarn
yarn dev
```

### Bước 4: Truy Cập Website

Mở trình duyệt và đi đến:
```
http://localhost:3000
```

Website sẽ tự động load. Bất kỳ thay đổi nào trong code sẽ được tự động cập nhật (Hot Reload).

## 🎨 Tùy Chỉnh Website

### 1. Thay Đổi Thông Tin Xe

File: `/app/page.tsx`

Tìm phần:
```typescript
const vehicles: Vehicle[] = [
  {
    id: 'vf8',
    name: 'VinFast VF8',
    // ... cập nhật thông tin xe
  }
]
```

Các trường có thể chỉnh sửa:
- `name`: Tên mẫu xe
- `price`: Giá xe (format: "1.099.000.000")
- `description`: Mô tả chi tiết
- `specs`: Các chỉ số kỹ thuật
- `colors`: Danh sách màu sắc (format: hex color code)
- `features`: Tính năng nổi bật

### 2. Thay Đổi Hình Ảnh

Thêm hình ảnh vào thư mục `/public/`:

```bash
/public/
├── vf8-side.jpg      # Cập nhật hình ảnh VF8
├── vf9-side.jpg      # Cập nhật hình ảnh VF9
├── vf5-side.jpg      # Cập nhật hình ảnh VF5
└── hero-banner.jpg   # Cập nhật hero banner
```

Sau đó cập nhật đường dẫn trong `/app/page.tsx`:
```typescript
const vehicles: Vehicle[] = [
  {
    // ...
    image: '/vf8-side.jpg',  // Cập nhật đường dẫn tại đây
  }
]
```

### 3. Thay Đổi Màu Sắc

File: `/app/globals.css`

Tìm phần `:root` hoặc `.dark` và thay đổi các biến:

```css
:root {
  --primary: oklch(0.55 0.2 30);      /* Màu cam chính */
  --background: oklch(0.08 0 0);       /* Nền tối */
  --foreground: oklch(0.95 0 0);       /* Text sáng */
  --card: oklch(0.12 0 0);             /* Màu card */
  --secondary: oklch(0.20 0 0);        /* Màu phụ */
  --border: oklch(0.22 0 0);           /* Màu viền */
  /* ... các màu khác */
}
```

### 4. Thay Đổi Chatbot

File: `/components/ChatbotWidget.tsx`

**Thay đổi URL chatbot:**
```typescript
iframe src="https://cdn.botpress.cloud/webchat/v3.5/shareable.html?configUrl=YOUR_CONFIG_URL"
```

**Thay đổi tiêu đề:**
```typescript
<h3 className="font-semibold text-sm">Tư vấn VinFast</h3>  // Thay đổi tại đây
```

## 🌐 Triển Khai (Deployment)

### Triển Khai trên Vercel (Khuyến Nghị)

1. Push code lên GitHub
2. Truy cập [vercel.com](https://vercel.com)
3. Click "New Project"
4. Chọn repository GitHub
5. Click "Deploy"

Vercel sẽ tự động build và triển khai website.

### Triển Khai trên Server Khác

**Build Production:**
```bash
pnpm build
pnpm start
```

**Hoặc sử dụng Docker:**
```bash
docker build -t vinfast-website .
docker run -p 3000:3000 vinfast-website
```

## 🔍 Troubleshooting

### Lỗi: "Module not found"
```bash
# Xóa node_modules và cài lại
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Lỗi: "Port 3000 is already in use"
```bash
# Chạy trên port khác
pnpm dev -- -p 3001
```

### Website không load hình ảnh
- Kiểm tra đường dẫn trong `/public/` folder
- Đảm bảo tên file chính xác
- Clear cache trình duyệt (Ctrl+Shift+Delete)

### Chatbot không hiển thị
- Kiểm tra URL chatbot có chính xác không
- Mở console (F12) xem có error không
- Đảm bảo internet kết nối ổn định

## 📱 Test Responsive Design

```bash
# Chrome DevTools
1. Mở F12
2. Click Ctrl+Shift+M (hoặc Cmd+Shift+M trên Mac)
3. Chọn các kích thước khác nhau để test
```

## 🚀 Tối Ưu Hóa Performance

```bash
# Build tối ưu
pnpm build

# Analyze bundle size
npm install -D @next/bundle-analyzer
# Thêm vào next.config.mjs: 
# const withBundleAnalyzer = require('@next/bundle-analyzer')
```

## 📝 Ghi Chú Quan Trọng

1. **Tiếng Việt**: Website hỗ trợ UTF-8, không có lỗi font
2. **Responsive**: Hoạt động tốt trên tất cả thiết bị
3. **Accessibility**: Tuân thủ WCAG 2.1 level AA
4. **SEO**: Metadata được tối ưu hóa
5. **Performance**: Sử dụng Next.js Image optimization

## 💡 Mẹo Hữu Ích

- Sử dụng VS Code với extension "Tailwind CSS IntelliSense"
- Xem [Tailwind CSS docs](https://tailwindcss.com) để tìm classes
- Xem [shadcn/ui docs](https://ui.shadcn.com) cho component APIs
- Test chatbot trước khi deploy

## 🤝 Cần Giúp Đỡ?

- Kiểm tra README.md để thông tin chi tiết
- Xem [Next.js docs](https://nextjs.org/docs)
- Kiểm tra [Botpress docs](https://botpress.com) cho chatbot

---

**Happy coding! 🎉**
