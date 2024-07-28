import Image from 'next/image';
import Link from 'next/link';
import { FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';
import { FaHome, FaBook, FaInfoCircle, FaLayerGroup, FaCog } from 'react-icons/fa';
import { IoLogoVercel } from "react-icons/io5";


interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`fixed inset-0 z-30 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} border-r border-slate-800 transition-transform duration-300 ease-in-out md:relative md:translate-x-0 w-64 bg-slate-950 text-white flex flex-col items-center py-8 h-screen`}>
      <div className="absolute top-4 right-4 md:hidden">
        <button onClick={toggleSidebar}>
          <AiOutlineClose size={24} />
        </button>
      </div>
      <div className="mb-8 text-center">
        <Image
          src="/profile.png"
          alt="Profile Picture"
          width={100}
          height={100}
          className="rounded-full mx-auto mb-4"
        />
        <span className="block text-xl md:text-4xl font-bold">Mohamed Yasin</span>
        <a href="#" className="text-blue-400">View profile</a>
      </div>
      <nav className="w-full px-4">
        <Link href="/" className="flex items-center py-2 px-4 mb-2 bg-gray-700 rounded">
          <FaHome className="mr-2" /> Home
        </Link>
        <Link href="/projects" className="flex items-center py-2 px-4 mb-2 hover:bg-gray-700 rounded">
          <FaBook className="mr-2" /> Projects
        </Link>
        <Link href="/about" className="flex items-center py-2 px-4 mb-2 hover:bg-gray-700 rounded">
          <FaInfoCircle className="mr-2" /> About
        </Link>
        <Link href="/stack" className="flex items-center py-2 px-4 mb-2 hover:bg-gray-700 rounded">
          <FaLayerGroup className="mr-2" /> Stack
        </Link>
        <Link href="/settings" className="flex items-center py-2 px-4 mb-2 hover:bg-gray-700 rounded">
          <FaCog className="mr-2" /> Settings
        </Link>
      </nav>
      <div className="mt-auto w-full px-4">
        <div className="flex justify-around mb-8">
          <a href="mailto:email@example.com"><MdEmail size={24} /></a>
          <a href="https://twitter.com/username"><FaTwitter size={24} /></a>
          <a href="https://youtube.com/username"><FaYoutube size={24} /></a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
