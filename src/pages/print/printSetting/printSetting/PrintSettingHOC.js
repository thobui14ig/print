import React from 'react'
import { usePrint } from '../../../../context/printerContext';
import PrintSetting from './PrintSetting';
export default function PrintSettingHOC() {
    const {options, setOptions, changPdf} = usePrint()

  return (
      <>  
        {options.pageSize.length > 0 &&
            <PrintSetting
              optionsPrinter={options}
              setOptions={setOptions}
              changPdf={changPdf}
             />     
        }
        
      </>

  )
}
