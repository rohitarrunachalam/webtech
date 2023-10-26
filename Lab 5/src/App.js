import logo from './logo.svg';
import './App.css';
import QuoteCard from './components/QuoteCard';
function App() {
  return (
    <>
    <div className='flex items-center justify-center h-screen flex-col bg-gradient-to-r from-rose-100 to-teal-100'>
    <div className='text-center'>
      <h1 className=' text-[32px] text-teal-800 outfit-600'>Quotefy & Beyond</h1>
    </div>
    <QuoteCard />
    </div>
    </>
  );
}

export default App;
