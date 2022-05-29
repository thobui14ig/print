import React from 'react'
import { usePrint } from '../../../context/printerContext'
import PrintContent from'./PrintContent'
export default function PrintContentHOC() {
    const {options, isLoading} = usePrint()
    const { optionsPrinter } = options
  return (
    <>
        {optionsPrinter.printerName &&
            <PrintContent 
            optionsPrinter={optionsPrinter}
            isLoading={isLoading}
            />
        }
    </>
    
  )
}
