// pages/stack.tsx
import React from 'react';
import Stack from './components/Stack';
import Sidebar from './components/Sidebar';
import { useState } from 'react';

const StackPage: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 p-8">
        <Stack />
      </div>
    </div>
  );
};

export default StackPage;
