import Link from "next/link";

export default function Navbar()
{
    return(
    <nav className="w-full relative flex justify-between items-center max-w-3xl mx-auto px-4 my-5">
        <Link href="/" className="font-bold text-3xl">
        Cyber<span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Blog</span>
        
        
        </Link>
       
        
    </nav>
    )
}