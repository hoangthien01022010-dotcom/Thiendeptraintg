'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '@/components/Sidebar';
import ChatInterface from '@/components/ChatInterface';

const Dashboard = () => {
  const [activeModule, setActiveModule] = useState('chat');

  return (
    <div className="flex h-screen bg-light dark:bg-dark">
      <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />
      <main className="flex-1 overflow-hidden">
        {activeModule === 'chat' && <ChatInterface />}
        {activeModule === 'code' && <div className="p-8"><h1 className="text-3xl font-bold">💻 AI Lập Trình</h1></div>}
        {activeModule === 'website' && <div className="p-8"><h1 className="text-3xl font-bold">🌐 Tạo Website</h1></div>}
        {activeModule === 'design' && <div className="p-8"><h1 className="text-3xl font-bold">🎨 Thiết Kế</h1></div>}
        {activeModule === 'content' && <div className="p-8"><h1 className="text-3xl font-bold">✍️ Viết Nội Dung</h1></div>}
      </main>
    </div>
  );
};

export default Dashboard;
