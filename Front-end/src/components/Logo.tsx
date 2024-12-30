import { HandshakeIcon } from 'lucide-react';

export const Logo = () => {
  return (
    <div className="flex items-center gap-2 text-3xl font-bold text-white">
      <HandshakeIcon size={40} />
      <span>RESOURCEHUB</span>
    </div>
  );
};