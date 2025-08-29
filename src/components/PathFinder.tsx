import { useEffect, useState } from 'react';
import { walkPath } from '../utils';
// import { walkPath } from '../utils/walkPath2';
import {
  availableInvalidMaps,
  availableValidMaps,
} from '../constants/pathMaps';
import AvailableMaps from './AvailableMaps';
import MapScreen from './MapScreen';
import CharactersKeyboard from './CharactersKeyboard';
import ResultBox from './ResultBox';

export function PathFinder() {
  const [mapText, setMapText] = useState('');
  const [result, setResult] = useState<{
    letters: string;
    path: string;
  } | null>(null);
  const [selectedMapName, setSelectedMapName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleRun = () => {
    try {
      const mapArray: string[][] = mapText
        .split('\n')
        .map((line) => line.replace(/\t/g, ' ').trimEnd().split(''));

      const output = walkPath(mapArray);
      setResult(output);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(String(err));
      }
      setResult(null);
    }
  };

  useEffect(() => {
    if (mapText) {
      setError(null);
      setResult(null);
    }
  }, [mapText]);

  return (
    <div className='w-3/4 '>
      <div className='flex flex-col'>
        <AvailableMaps
          availableMaps={availableValidMaps}
          validMaps={true}
          setMapCallback={setMapText}
          setSelectedMapNameCallback={setSelectedMapName}
        />
        <AvailableMaps
          availableMaps={availableInvalidMaps}
          validMaps={false}
          setMapCallback={setMapText}
          setSelectedMapNameCallback={setSelectedMapName}
        />
        <button
          onClick={() => setMapText(' ')}
          className='w-40 mt-5 border-2 border-blue-400 cursor-pointer py-2 px-4 rounded hover:border-blue-600'
        >
          New map
        </button>
      </div>

      <div className='mt-10'>
        <label>{selectedMapName}</label>
        <MapScreen mapText={mapText} />
        {error && (
          <div className='border border-red-500 bg-red-50 text-red-700 p-2 rounded'>
            <p>{error}</p>
          </div>
        )}
      </div>

      {result && <ResultBox result={result} />}
      <CharactersKeyboard setMapText={setMapText} />
      <button
        onClick={handleRun}
        className='w-40 mt-10 cursor-pointer bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'
      >
        Run Algorithm
      </button>
    </div>
  );
}
