import { PathFinder } from './components/PathFinder';

function App() {
  return (
    <div style={{ padding: 20 }} className='flex flex-col items-center'>
      <h3 className=' text-2xl'>Welcome to </h3>
      <div className='flex'>
        <h1 className='mb-2 text-5xl font-extrabold text-blue-400 '>
          Software Sauna Code Challenge
        </h1>
      </div>
      <p className='mb-8'>
        Developed by <span className='font-bold '>Branko Karać</span>
      </p>

      <p className='text-lg font-bold'>
        You can create your own letter paths or choose from existing ones.
      </p>
      <PathFinder />
    </div>
  );
}

export default App;
