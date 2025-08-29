export default function MapOption({
  label,
  map,
  onSelect,
}: {
  label: string;
  map: string[][];
  onSelect: (map: string[][], label: string) => void;
}) {
  return (
    <div
      onClick={() => onSelect(map, label)}
      className='cursor-pointer min-h-10 min-w-20 px-2 py-2 mx-2 my-2 border-2 border-gray-300 rounded-lg bg-gradient-to-b from-white to-gray-100 shadow hover:border-blue-500 hover:bg-blue-50 transition-colors flex items-center justify-center text-md font-semibold'
    >
      {label}
    </div>
  );
}
