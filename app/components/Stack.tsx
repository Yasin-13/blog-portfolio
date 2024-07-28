// components/Stack.tsx
import React from 'react';
import Image from 'next/image';

const tools = [
  { name: 'Stripe', category: 'Payment', src: '/stripe-logo.png' },
  { name: 'Tailwind', category: 'Styling', src: '/tailwind-logo.png' },
  { name: 'Vercel', category: 'Hosting Provider', src: '/vercel-logo.png' },
  { name: 'Figma', category: 'Design Tool', src: '/figma-logo.png' },
  { name: 'Remix', category: 'Framework', src: '/remix-logo.png' },
  { name: 'Shopify', category: 'E-Commerce', src: '/shopify-logo.png' },
  { name: 'Fly.io', category: 'Hosting Provider', src: '/flyio-logo.png' },
  { name: 'Chrome', category: 'Browser', src: '/chrome-logo.png' },
  { name: 'Next.js', category: 'Framework', src: '/nextjs-logo.png' },
  { name: 'VS Code', category: 'Code Editor', src: '/vscode-logo.png' },
  { name: 'Supabase', category: 'Database', src: '/supabase-logo.png' },
  { name: 'Posthog', category: 'Analytics', src: '/posthog-logo.png' },
];

const Stack: React.FC = () => {
  return (
    <div className="p-8 h-full bg-slate-950 text-white">
      <h1 className="text-5xl font-bold mb-4">My Stack</h1>
      <p className="text-lg mb-8">Software and tools I use on a regular basis.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <div key={index} className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
            <Image src={tool.src} alt={`${tool.name} logo`} width={40} height={40} className="rounded-md" />
            <div>
              <h2 className="text-xl font-semibold">{tool.name}</h2>
              <p className="text-gray-400">{tool.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stack;
