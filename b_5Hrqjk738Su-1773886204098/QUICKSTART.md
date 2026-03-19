# 🚀 Quick Start Guide - VinFast Website

## ⚡ 5 Phút để Chạy Website

### 1️⃣ Cài Đặt (2 phút)

```bash
# Mở terminal/command prompt ở thư mục dự án
pnpm install
```

### 2️⃣ Chạy (1 phút)

```bash
pnpm dev
```

### 3️⃣ Xem Website (1 phút)

Mở trình duyệt: **http://localhost:3000**

### 4️⃣ Thoát

Nhấn `Ctrl + C` trong terminal

---

## 📝 Chỉnh Sửa Nhanh

### Thêm/Sửa Xe

**File**: `app/page.tsx` (dòng ~20-45)

```typescript
const vehicles: Vehicle[] = [
  {
    id: 'vf8',
    name: 'VinFast VF8',                    // ← Tên xe
    price: '1.099.000.000',                  // ← Giá
    description: 'Mô tả xe...',              // ← Mô tả
    specs: {
      range: '430 km',                       // ← Phạm vi
      power: '260 kW',                       // ← Công suất
      charging: '30-80% / 42 phút',         // ← Sạc
    },
    colors: ['#c0c0c0', '#1a1a1a', ...],   // ← Màu sắc
    features: ['Tính năng 1', ...],         // ← Tính năng
  }
];
```

### Thay Đổi Màu Sắc

**File**: `app/globals.css` (dòng ~1-40)

```css
:root {
  --primary: oklch(0.55 0.2 30);    /* Màu chính (cam) */
  --background: oklch(0.08 0 0);     /* Nền (tối) */
  --foreground: oklch(0.95 0 0);     /* Text (sáng) */
}
```

### Thay Đổi Hình Ảnh

1. Thêm hình vào `/public/` folder
2. Cập nhật đường dẫn trong `app/page.tsx`:
   ```typescript
   image: '/your-new-image.jpg'
   ```

### Thay Đổi Chatbot URL

**File**: `components/ChatbotWidget.tsx` (dòng ~34, 56)

```typescript
src="https://YOUR_NEW_CHATBOT_URL"
```

### Thay Đổi Menu Header

**File**: `components/Header.tsx` (dòng ~14-19)

```typescript
const navigationLinks = [
  { label: 'Mẫu xe', href: '#models' },
  { label: 'Giá bán', href: '#pricing' },
  // Thêm/sửa tại đây
];
```

---

## 🎨 Chỉnh Sửa CSS

### Thêm Custom CSS

**File**: `app/globals.css`

```css
/* Thêm custom styles ở đây */
.my-custom-class {
  @apply bg-primary text-white rounded-lg p-4;
}
```

### Tailwind Classes

Xem danh sách đầy đủ: https://tailwindcss.com/docs

Ví dụ phổ biến:
```
p-4          /* padding 16px */
mb-8         /* margin-bottom 32px */
bg-primary   /* background color */
text-white   /* text color */
rounded-lg   /* border radius */
hover:bg-orange-600  /* hover state */
md:grid-cols-2  /* responsive */
```

---

## 📁 Cấu Trúc Tệp Quan Trọng

```
website_demo/
├── app/
│   ├── page.tsx          ← Chỉnh sửa nội dung chính ⭐
│   ├── layout.tsx        ← Meta tags, fonts
│   └── globals.css       ← Màu sắc, theme ⭐
│
├── components/
│   ├── Header.tsx        ← Menu top ⭐
│   ├── VehicleCard.tsx   ← Card xe
│   └── ChatbotWidget.tsx ← Chatbot ⭐
│
├── public/
│   ├── vf8-side.jpg      ← Hình ảnh ⭐
│   ├── vf9-side.jpg
│   └── ...
│
└── README.md             ← Tài liệu chi tiết
```

⭐ = Files thường xuyên chỉnh sửa

---

## 🔍 Debug Tips

### Xem lỗi
- Mở **F12** (DevTools)
- Tab **Console** để xem errors
- Tab **Network** để xem requests

### Reload
```
Ctrl + Shift + R  (Windows/Linux)
Cmd + Shift + R   (Mac)
```

### Check responsive
- F12 → Ctrl+Shift+M (Device Toolbar)
- Chọn các kích thước khác nhau

### Xem source code
- F12 → Elements/Inspector
- Click icon pick element
- Click element trên trang

---

## 📱 Kiểm Tra Mobile

### Chrome DevTools
1. F12 → Ctrl+Shift+M
2. Chọn "iPhone" hoặc "iPad"
3. Check layout & functionality

### Responsive Sizes
- **Mobile**: 375px (iPhone SE)
- **Tablet**: 768px (iPad)
- **Desktop**: 1920px (Desktop)

---

## 🚀 Deploy

### Vercel (Recommended)

1. Push code lên GitHub
2. Tải trang https://vercel.com
3. Click "New Project"
4. Select repository
5. Click "Deploy"

Done! Website sẽ live tự động.

### Alternative: Self-hosted

```bash
# Build
pnpm build

# Start server
pnpm start

# Chạy trên port 3000
# Dùng nginx/Apache để serve
```

---

## 🆘 Troubleshooting

### Port đã sử dụng
```bash
pnpm dev -- -p 3001  # Chạy trên port 3001
```

### Module not found
```bash
rm -rf node_modules
pnpm install
```

### Hình ảnh không load
- Check `/public/` folder
- Verify đường dẫn chính xác
- Hard refresh browser (Ctrl+Shift+R)

### Chatbot lỗi
- Check internet connection
- Verify Botpress URL chính xác
- Check browser console (F12)

---

## ✅ Checklist Trước Deploy

- [ ] Test trên mobile/tablet/desktop
- [ ] Kiểm tra tất cả links
- [ ] Test chatbot widget
- [ ] Chỉnh sửa thông tin xe
- [ ] Cập nhật hình ảnh
- [ ] Thay đổi chatbot URL
- [ ] Check spelling Tiếng Việt
- [ ] Test trên 2-3 browsers

---

## 📚 Tài Liệu Chi Tiết

- **README.md** - Tài liệu đầy đủ
- **SETUP.md** - Hướng dẫn cài đặt
- **FEATURES.md** - Danh sách tính năng
- **SUMMARY.md** - Tóm tắt toàn bộ

---

## 💡 Useful Links

- **Tailwind CSS**: https://tailwindcss.com
- **shadcn/ui**: https://ui.shadcn.com
- **Next.js**: https://nextjs.org
- **Botpress**: https://botpress.com

---

## 🎯 Common Tasks

### Thêm trang mới
```bash
# Tạo file
touch app/about/page.tsx

# Write content
export default function About() {
  return <div>About page</div>
}
```

### Thêm API route
```bash
# Tạo file
touch app/api/products/route.ts

# Export POST handler
export async function POST(req) {
  // Handle request
}
```

### Thêm component mới
```bash
# Tạo file
touch components/MyComponent.tsx

# Write component
export default function MyComponent() {
  return <div>My component</div>
}
```

---

## ⏱️ Workflow Hàng Ngày

```bash
# 1. Mở terminal, go to project folder
cd /path/to/website_demo

# 2. Chạy dev server
pnpm dev

# 3. Chỉnh sửa files
# Code save → auto reload

# 4. Check browser F12 Console
# Fix errors if any

# 5. Commit changes (if using git)
git add .
git commit -m "Update vehicles"
git push

# 6. Deploy (if using Vercel)
# Auto-deployed on push
```

---

## 🎉 Done!

You're all set! 

**Next Steps:**
1. ✅ Run website locally
2. ✅ Customize content
3. ✅ Test on mobile
4. ✅ Deploy to Vercel

**Need Help?**
- Read README.md
- Check SETUP.md
- See FEATURES.md

**Happy coding! 🚀**

---

**Quick Tip**: Save this file for quick reference!  
**Version**: 1.0.0  
**Updated**: 2026-03-19
