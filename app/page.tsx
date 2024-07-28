"use client"
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import { AiOutlineMenu } from 'react-icons/ai';

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      <main className="flex-1 p-8 bg-slate-950 text-white relative overflow-auto">
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="absolute top-4 left-4">
            <AiOutlineMenu size={24} />
          </button>
        </div>
        <h1 className="text-4xl font-bold mb-4 whitespace-normal ">Everything related to CyberSecuirty and Developmeny in one place.</h1>
        <p className="mb-8">Your one-stop destination for all things Security,web development, from the latest updates to in-depth tutorials and resources.</p>
        <div className="flex mb-8">
          <button className="bg-blue-500 text-white py-2 px-4 rounded mr-4">Blogs</button>
          <button className="bg-gray-700 text-white py-2 px-4 rounded">About Jan</button>
        </div>
        <h2 className="text-2xl font-bold mb-4">Recommended</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-700 h-48 flex items-center justify-center">Image Thumbnail</div>
          <div className="bg-gray-700 h-48 flex items-center justify-center">Image Thumbnail</div>
        </div>
      </main>
    </div>
  );
};

export default Home;
