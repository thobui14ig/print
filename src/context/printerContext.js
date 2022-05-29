import React, { useCallback, useContext, useState } from 'react';

export const PrintContext = React.createContext({})

const NhanvienProvider = ({ children }) => {
    const optionsPrinterDefault = {
      path: "./pdf/report.pdf",
      printerName: null,
      landscape: 0,
      pageSize: [],
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      scale: 100
    }

    // const [optionsPrinter, setOptionsPrinter] = useState({...optionsPrinterDefault})
    // const [pageSize, setPageSize] = useState([])

    const [options, setOptions] = useState({
      optionsPrinter: {...optionsPrinterDefault},
      pageSize: []
    })
    const [isLoading, checkIsLoadding] = useState(false)

    

    const changPdf = (options) => {
      console.log(options)
      checkIsLoadding(!isLoading)
    }

    return (
      <PrintContext.Provider value={{ 
        optionsPrinterDefault, setOptions,
        options,isLoading, checkIsLoadding,changPdf
       
       }}>
          {children}
      </PrintContext.Provider>
    );
  };



export default NhanvienProvider


export const usePrint = () => {
    return useContext(PrintContext);
}


