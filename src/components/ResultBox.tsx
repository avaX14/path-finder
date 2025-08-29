function Result({
  resultValue,
  resultName,
}: {
  resultValue: string;
  resultName: string;
}) {
  return (
    <p className='text-xl font-bold mb-2'>
      <span className='text-blue-700 mr-2'>{resultName}:</span>
      <span className='bg-white px-2 py-1 rounded shadow text-blue-900 font-mono break-all'>
        {resultValue}
      </span>
    </p>
  );
}

export default function ResultBox({
  result,
}: {
  result: { letters: string; path: string };
}) {
  return (
    <div className='mb-5 mt-5 p-6 rounded-xl bg-gradient-to-br from-blue-100 to-blue-300 shadow-lg border border-blue-400 text-gray-900 flex flex-col items-center'>
      <Result resultName='Letters' resultValue={result.letters} />
      <Result resultName='Path' resultValue={result.path} />
    </div>
  );
}
