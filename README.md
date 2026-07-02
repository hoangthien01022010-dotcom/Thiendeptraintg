# 🤖 AI All-in-One Platform

Một nền tảng AI hiện đại toàn diện với giao diện đẹp, tốc độ nhanh, hỗ trợ cả điện thoại và máy tính.

## ✨ Tính Năng Chính

### 🤖 AI Chat
- Trò chuyện thông minh như ChatGPT
- Ghi nhớ ngữ cảnh
- Hỗ trợ nhiều mô hình AI
- Trả lời bằng văn bản, bảng, danh sách và code

### 💻 AI Lập Trình
- Tạo code từ mô tả
- Sửa lỗi code
- Giải thích code
- Tối ưu hiệu năng
- Chuyển đổi ngôn ngữ lập trình
- Tạo dự án hoàn chỉnh
- Preview website trực tiếp
- Chạy thử code
- Xuất file ZIP hoặc GitHub

### 🌐 AI Tạo Website
- Chỉ cần nhập mô tả là tạo website hoàn chỉnh
- Landing Page, Portfolio, Blog, Website doanh nghiệp, Shop bán hàng, Dashboard
- Chỉnh sửa bằng AI hoặc kéo thả
- Responsive trên mọi thiết bị

### 🎨 AI Thiết Kế
- Tạo logo, banner, avatar, poster, thumbnail, icon, background, mockup
- Chỉnh sửa ảnh bằng AI
- Xóa nền
- Nâng chất lượng ảnh

### ✍️ AI Viết Nội Dung
- Viết bài, email, caption, quảng cáo, SEO, kịch bản video
- Dịch nhiều ngôn ngữ
- Tóm tắt tài liệu

### 📄 AI Tài Liệu
- Đọc PDF, Word, Excel, PowerPoint
- OCR nhận diện chữ từ ảnh
- Tóm tắt tài liệu
- Hỏi đáp theo tài liệu

### 🎥 AI Đa Phương Tiện
- Tạo hình ảnh
- Tạo video
- Chuyển văn bản thành giọng nói
- Chuyển giọng nói thành văn bản
- Tạo phụ đề
- Chỉnh sửa video cơ bản

### 📊 AI Phân Tích
- Phân tích dữ liệu
- Tạo biểu đồ
- Dashboard
- Phân tích doanh thu
- Báo cáo tự động

### ☁️ Lưu Trữ
- Lưu lịch sử chat
- Lưu dự án
- Đồng bộ đám mây
- Chia sẻ dự án
- Sao lưu và khôi phục

### 👥 Tài Khoản
- Đăng ký/Đăng nhập
- OAuth: Google, GitHub, Facebook
- Quản lý hồ sơ
- Phân quyền người dùng

### 💳 Thanh Toán
- Gói Free, Pro, Premium
- Thanh toán qua nhiều cổng
- Quản lý hóa đơn

### 🔔 Thông Báo
- Thông báo thời gian thực
- Theo dõi tiến trình AI
- Lịch sử hoạt động

## 🛠️ Công Nghệ

| Layer | Technology |
|-------|----------|
| **Frontend** | React, Next.js, TypeScript, Tailwind CSS |
| **Backend** | Node.js, Express, TypeScript |
| **Database** | Supabase/PostgreSQL |
| **Authentication** | Supabase Auth, OAuth |
| **Storage** | Supabase Storage, AWS S3 |
| **AI APIs** | OpenAI, Gemini, Claude, DeepSeek |
| **Deployment** | Vercel (Frontend), Docker (Backend) |
| **Real-time** | Socket.io, Supabase Realtime |

## 📁 Cấu Trúc Dự Án

```
Thiendeptraintg/
├── frontend/              # React + Next.js
│   ├── app/
│   ├── components/
│   ├── lib/
│   ├── public/
│   ├── styles/
│   └── ...
├── backend/               # Node.js + Express
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── middleware/
│   │   └── ...
│   └── ...
├── database/              # Database schemas
│   ├── migrations/
│   └── schemas/
├── docker-compose.yml
├── .env.example
└── README.md
```

## 🚀 Cài Đặt & Chạy

### Yêu Cầu
- Node.js >= 18
- npm hoặc yarn
- Docker & Docker Compose (tuỳ chọn)
- Supabase Account

### Quick Start

1. **Clone Repository**
```bash
git clone https://github.com/hoangthien01022010-dotcom/Thiendeptraintg.git
cd Thiendeptraintg
```

2. **Cài Đặt Dependencies**
```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```

3. **Thiết Lập Environment**
```bash
# Copy .env.example thành .env.local
cp .env.example .env.local
# Cập nhật các giá trị cần thiết
```

4. **Chạy Development**
```bash
# Terminal 1 - Frontend
cd frontend
npm run dev

# Terminal 2 - Backend
cd backend
npm run dev
```

5. **Truy Cập**
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001

## 📚 API Documentation

API documentation sẽ được cập nhật tại `/docs/api.md`

## 🤝 Đóng Góp

Nếu bạn muốn đóng góp, vui lòng:
1. Fork repository
2. Tạo branch feature (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📄 License

MIT License - xem file LICENSE để biết chi tiết

## 👨‍💻 Tác Giả

**Thien** - [GitHub](https://github.com/hoangthien01022010-dotcom)

---

**Status**: 🚀 In Development

**Last Updated**: 2026-07-02