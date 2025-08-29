type MapScreenProps = {
  mapText: string;
};

function MapScreen({ mapText }: MapScreenProps) {
  const lines = mapText.split('\n');
  const cursorIndex = mapText.length - 1;

  let globalIdx = lines.length - 1;

  return (
    <div className='w-full min-h-40 border-2 border-gray-200'>
      {lines.map((line, lineIdx) => {
        return (
          <div key={lineIdx} className='flex'>
            {line.split('').map((char, charIdx) => {
              const isCursor = globalIdx === cursorIndex;

              const cell = (
                <div
                  key={charIdx}
                  className={`w-12 h-12 justify-center items-center flex ${
                    isCursor ? 'border-b-2 border-blue-500' : ''
                  }`}
                >
                  <span className='text-xl'>{char}</span>
                </div>
              );

              globalIdx++;
              return cell;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default MapScreen;
