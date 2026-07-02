'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-purple-600 to-secondary">
      {/* Navigation */}
      <nav className="bg-dark/50 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">AI</span>
              </div>
              <span className="text-white font-bold text-xl">ThienDepTraintg</span>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#features" className="text-white/70 hover:text-white transition">Features</a>
              <a href="#pricing" className="text-white/70 hover:text-white transition">Pricing</a>
              <a href="#" className="text-white/70 hover:text-white transition">Docs</a>
            </div>
            <div className="flex gap-4">
              <Link href="/auth/login">
                <button className="px-4 py-2 text-white hover:bg-white/10 rounded-lg transition">
                  Đăng Nhập
                </button>
              </Link>
              <Link href="/auth/register">
                <button className="px-4 py-2 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition">
                  Đăng Ký
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Nền Tảng AI <span className="text-secondary">All-in-One</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
            Chat thông minh, Lập trình AI, Tạo Website, Thiết kế, Viết nội dung - Tất cả trong một platform
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/dashboard">
              <button className="px-8 py-3 bg-white text-primary font-bold rounded-lg hover:bg-white/90 transition transform hover:scale-105">
                Bắt Đầu Ngay
              </button>
            </Link>
            <button className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition">
              Xem Demo
            </button>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Tính Năng Chính</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: '🤖', title: 'AI Chat', desc: 'Trò chuyện thông minh như ChatGPT' },
            { icon: '💻', title: 'Lập Trình AI', desc: 'Tạo code từ mô tả tự nhiên' },
            { icon: '🌐', title: 'Tạo Website', desc: 'Website từ text, responsive' },
            { icon: '🎨', title: 'Thiết Kế', desc: 'Logo, Banner, Ảnh, Mockup' },
            { icon: '✍️', title: 'Viết Nội Dung', desc: 'Bài, Email, Caption, SEO' },
            { icon: '📄', title: 'Tài Liệu', desc: 'Đọc PDF, OCR, Tóm tắt' },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/20 transition group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
