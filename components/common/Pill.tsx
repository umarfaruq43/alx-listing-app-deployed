import { PillProps } from '@/interfaces';

export default function Pill({ label, active = false, onClick }: PillProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full border transition ${
        active
          ? 'bg-blue-600 text-white border-blue-600'
          : 'bg-white text-gray-700 border-gray-300'
      }hover:bg-blue-500 hover:text-white `}
    >
      {label}
    </button>
  );
}
