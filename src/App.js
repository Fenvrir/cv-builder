import { Header, Main, Footer } from './components'
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';
let html2pdf = require('html2pdf.js');

let opt = {
  margin: 1,
  filename: 'My-CV.pdf',
  image: { type: 'jpeg', quality: 0.98 },
  html2canvas: { scale: 2 },
  jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
};

function App() {
  const componentRef = useRef();

  const handlePrintClick = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleDownloadClick = () => {
    html2pdf().from(componentRef.current).set(opt).save()
  }


  return (
    <div className='App'>
      <div className='wrapper'>
        <Header onClickPrint={handlePrintClick} onClickDownload={handleDownloadClick} />
        <Main className='Main' inputRef={componentRef} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
