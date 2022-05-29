import React, { useCallback, useRef, useState } from 'react'
import NhanvienProvider from '../../context/nhanvien.context'
import NhanvienHOC from './nhanvienHOC'
import { Popup } from 'devextreme-react';
import Print from '../print';
export default function Nhanvien() {
  const [visible, setVisible] = useState(false)
  const componentRef = useRef();
  const handlePrint = async() => {
    await window.myAPI.handlePrint();
    //setVisible(true)
  }
  const handlePopupHidden = () => {
    setVisible(false)
  }



  return (
    <>
      <div className="content-wrapper" ref={componentRef}>
        <NhanvienProvider>
            <NhanvienHOC/>
            {visible &&
              <Popup
              
                height={"100vh"}
                showTitle={true}
                // title={this.state.currentHouse.Address}
                // dragEnabled={false}
                closeOnOutsideClick={true}
                visible={visible}
                onHiding={handlePopupHidden}

              >
                
                <Print/>
              </Popup>            
            }


        </NhanvienProvider>      
      
      </div>
      <button onClick={handlePrint }>Print</button>    
    </>


  )
}
