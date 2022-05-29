import { SelectBox } from 'devextreme-react'
import React, { useState } from 'react'

 function ListPrinter({ obj, selectedPrinterName }) {
    console.log('render-listPrinter');
    const onValueChanged = (e) => {
        selectedPrinterName(e.value);
    }
  return (
    <div>
        <SelectBox items={obj.listPrinter}
            showClearButton={true} 
            defaultValue={obj.printerNameDefault}
            // value={obj.printerNameDefault}
            onValueChanged={onValueChanged}
        
        />
    </div> 
  )
}

export default React.memo(ListPrinter)
