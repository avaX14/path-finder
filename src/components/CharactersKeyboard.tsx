import { availableCharacters } from '../constants';

function CharactersKeyboard({
  setMapText,
}: {
  setMapText: React.Dispatch<React.SetStateAction<string>>;
}) {
  const handleAddingCharacter = (char: string) => {
    setMapText((prev) => {
      if (prev.startsWith(' ') && prev.length === 1) {
        return prev.slice(0, -1) + char;
      }
      if (prev.endsWith('\n ') && char !== ' ') {
        return prev.slice(0, -1) + char;
      }

      if (char === '←') {
        return prev.slice(0, -1);
      }

      return prev + (char === '⏎' ? '\n ' : char);
    });
  };

  return (
    <div className='flex flex-col items-center justify-center mt-5'>
      <div className='flex flex-wrap justify-center'>
        {availableCharacters.map((char) => (
          <div
            key={char}
            className='cursor-pointer inline-flex items-center justify-center m-1 w-12 h-12 border border-gray-400 rounded-lg bg-gradient-to-b from-gray-100 to-gray-300 shadow-lg text-xl font-mono select-none transition-transform active:translate-y-1'
            style={{
              boxShadow: '0 2px 6px rgba(0,0,0,0.15), 0 1px 0 #fff inset',
            }}
            onClick={() => {
              handleAddingCharacter(char);
            }}
          >
            <span>{char}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CharactersKeyboard;
