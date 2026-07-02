'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const modules = [
  { id: 'chat', icon: '🤖', label: 'Chat', path: '/dashboard' },
  { id: 'code', icon: '💻', label: 'Lập Trình', path: '/dashboard/code' },
  { id: 'website', icon: '🌐', label: 'Website', path: '/dashboard/website' },
  { id: 'design', icon: '🎨', label: 'Thiết Kế', path: '/dashboard/design' },
  { id: 'content', icon: '✍️', label: 'Nội Dung', path: '/dashboard/content' },
  { id: 'documents', icon: '📄', label: 'Tài Liệu', path: '/dashboard/documents' },
  { id: 'multimedia', icon: '🎥', label: 'Đa Phương Tiện', path: '/dashboard/multimedia' },
  { id: 'analytics', icon: '📊', label: 'Phân Tích', path: '/dashboard/analytics' },
];

interface SidebarProps {
  activeModule: string;
  setActiveModule: (module: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeModule, setActiveModule }) => {
  return (
    <motion.aside
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      className="w-64 bg-white dark:bg-dark/50 border-r border-gray-200 dark:border-gray-700 p-4 flex flex-col gap-4 overflow-y-auto"
    >
      {/* Logo */}
      <div className="flex items-center gap-2 px-4 py-2 mb-4">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">AI</span>
        </div>
        <span className="font-bold text-dark dark:text-white">Thien AI</span>
      </div>

      {/* Main Modules */}
      <div>
        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase px-4 mb-2">Công Cụ Chính</p>
        {modules.slice(0, 4).map((module) => (
          <button
            key={module.id}
            onClick={() => setActiveModule(module.id)}
            className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition ${
              activeModule === module.id
                ? 'bg-primary text-white'
                : 'text-dark dark:text-white hover:bg-gray-100 dark:hover:bg-dark'
            }`}
          >
            <span className="text-xl">{module.icon}</span>
            <span className="font-medium">{module.label}</span>
          </button>
        ))}
      </div>

      {/* Secondary Modules */}
      <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase px-4 mb-2">Thêm Công Cụ</p>
        {modules.slice(4).map((module) => (
          <button
            key={module.id}
            onClick={() => setActiveModule(module.id)}
            className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition ${
              activeModule === module.id
                ? 'bg-primary text-white'
                : 'text-dark dark:text-white hover:bg-gray-100 dark:hover:bg-dark'
            }`}
          >
            <span className="text-xl">{module.icon}</span>
            <span className="font-medium">{module.label}</span>
          </button>
        ))}
      </div>

      {/* User Profile */}
      <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-auto">
        <button className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-100 dark:hover:bg-dark rounded-lg transition">
          <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
          <div className="text-left flex-1">
            <p className="text-sm font-medium text-dark dark:text-white">Bạn</p>
            <p className="text-xs text-gray-500">Xem Hồ Sơ</p>
          </div>
        </button>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
