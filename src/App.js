import { Header, Main, Footer } from './components'
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';

function App() {
  const componentRef = useRef();
  const handlePrintClick = useReactToPrint({
    content: () => componentRef.current,
  });


  return (
    <div className='App'>
      <div className='wrapper'>
        <Header onClick={handlePrintClick} />
        <Main className='Main' inputRef={componentRef} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
