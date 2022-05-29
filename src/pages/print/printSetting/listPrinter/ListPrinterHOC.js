import React, { useCallback, useEffect, useState } from 'react';
import { usePrint } from '../../../../context/printerContext';
import ListPrinter from './ListPrinter';


const mayinmacdinh = 'Fax';
export default function ListPrinterHOC() {
    const {optionsPrinterDefault, setOptions, options,changPdf } = usePrint()
    const [obj, setObj] = useState({
        listPrinter: [],
        printerNameDefault: "",
    })
    useEffect(() => {
        const getData = async() => {
            const optionsPrinter = await window.myAPI.getPrinters()
            const newListPrinter = optionsPrinter.map((item) => {
                return item.displayName
            })
            const optionsPrinterLocal = JSON.parse(localStorage.getItem('printer'))
            const check = optionsPrinterLocal?.find((item) => item.printerName === mayinmacdinh)??false

            if(check){//NẾU CÓ MÁY IN TỪ LOCAL
                const { newPaperSize } = await setArrPageSize(check.printerName) //set danh sách pageSize
                const obj = {
                    ...options, 
                    optionsPrinter: {...optionsPrinterDefault, ...check, landscape: check.landscape === 0 ? "Portrait" : "Landscape",} , 
                    pageSize: newPaperSize
                }
                setOptions(obj)
                setObj({ //set lại các giá trị cho component listPrinter
                    ...obj, listPrinter: newListPrinter, printerNameDefault: check.printerName
                }) 

                //change pdf
                // changPdf(obj.optionsPrinter)
            }else{ //nếu không tồn tại trong local thì chọn phần tử đầu tiên trong danh sách máy in
                getOptionsPrinterByName(newListPrinter[0])
                setObj({ //set lại các giá trị cho component listPrinter
                    ...obj, listPrinter: newListPrinter, printerNameDefault: newListPrinter[0]
                }) 
            }
        }
        getData()
    }, []);
    const onValueChanged = useCallback((printerName) => {
        getOptionsPrinterByName(printerName);
        setObj({
            ...obj, printerNameDefault: printerName
        }) 
    }, [obj])
    const getOptionsPrinterByName =  async(printerName) => {
        const { objectDefault, newPaperSize } = await setArrPageSize(printerName)
        const optionsDefault = objectDefault.DefaultPageSettings
        setOptions({
            ...options, 
            optionsPrinter: {
                ...optionsPrinterDefault, 
                printerName: printerName,
                landscape: optionsDefault.Landscape === 0 ? "Portrait" : "Landscape",
                pageSize: {
                    name: optionsDefault.PaperSize.PaperName,
                    width: optionsDefault.PaperSize.Width,
                    height: optionsDefault.PaperSize.Height,
                }
            },
            pageSize: newPaperSize
        })
    }
    const setArrPageSize = async(printerName) => {
        const getPrintInfo = await window.myAPI.getPaperSize(printerName) //lấy thông tin máy in
        const objectDefault = JSON.parse(getPrintInfo.stdout)
        const newPaperSize = objectDefault.PaperSizes.map((item) => {     
          return {
              name: item.PaperName,
              width: item.Width,
              height: item.Height,    
          } 
        })
        return {
            objectDefault, newPaperSize
        }
    }
  return (
      <>
        {obj.listPrinter.length > 0 &&
            <ListPrinter 
                obj={obj} 
                selectedPrinterName={onValueChanged}
            />
        }
      </>
  )
}
