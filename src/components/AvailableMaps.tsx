import MapOption from './MapOption';

function AvailableMaps({
  availableMaps,
  validMaps,
  setMapCallback,
  setSelectedMapNameCallback,
}: {
  availableMaps: string[][][];
  validMaps: boolean;
  setMapCallback: (mapString: string) => void;
  setSelectedMapNameCallback: (mapName: string | null) => void;
}) {
  const groupName = validMaps ? 'Valid' : 'Invalid';

  const handleSelect = (map: string[][], label: string): void => {
    const mapString: string = map
      .map((row: string[]) => row.join(''))
      .join('\n');
    setMapCallback(mapString);
    setSelectedMapNameCallback(label);
  };

  return (
    <div className='flex flex-col mt-5'>
      <h3 className='mx-2 text-xl'>{groupName} maps</h3>
      <div className='flex'>
        {availableMaps.map((map, idx) => {
          const label = `${groupName} Map ${idx + 1}`;
          return (
            <MapOption
              key={`${groupName}-map-${idx}`}
              label={label}
              map={map}
              onSelect={handleSelect}
            />
          );
        })}
      </div>
    </div>
  );
}

export default AvailableMaps;
