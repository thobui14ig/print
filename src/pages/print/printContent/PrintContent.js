import React, { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { usePrint } from '../../../context/printerContext';
import './style.css';


const PrintContent = ({ isLoading, optionsPrinter }) => {
  
  const [numberPages, setNumberPages] = useState(null)
  const [url, setURL] = useState(null)

  const onDocument = ({ numPages }) => {
    
    setNumberPages(numPages)
    // setURL('http://localhost:8080/pdf/1')
  }

  //changPDF Ở ĐÂYY
  const changePDF = async(options) => {
    const random = Date.now()

    console.log('render-content', random) 
  }

  useEffect(() => {
      changePDF(optionsPrinter)
      const random = Date.now()
     
      const url = 'http://localhost:8080/pdf?' + random
      setURL(url)          
  }, [isLoading, optionsPrinter])
  return (
    <>

        <div className="pdfContent">
            <Document  file={url} onLoadSuccess={onDocument}>
            {
                  Array.from(new Array(numberPages), (el, index) => {
                    // console.log(index);
                    return (
                      <div className="pdf" key={`page_${index + 1}`}>
                          <Page  pageNumber={index + 1} className="custom"> </Page>
                      </div>
                      
                    )
                  })  
            }
            </Document>       
        </div>     
  
    </>



  )
}

export default React.memo(PrintContent)
