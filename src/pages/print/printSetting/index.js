import React from 'react'
import ListPrinterHOC from './listPrinter/ListPrinterHOC';
import PrintSettingHOC from './printSetting/PrintSettingHOC';


export default function PrintSetting() {

  return (
    <div>
      <ListPrinterHOC/>
      <PrintSettingHOC/>
    </div>
  )
}
