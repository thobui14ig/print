import ResponsiveBox, {
  Col,
  Item,
  Location, Row
} from 'devextreme-react/responsive-box';
import React from 'react';
import NhanvienProvider from '../../context/printerContext';
import PrintContentHOC from './printContent/PrintContentHOC';
import PrintSetting from './printSetting';


 function Print() {
  return (

    <NhanvienProvider>
        <ResponsiveBox>

          <Row />

          <Col ratio={3} />
          <Col ratio={1} />




          <Item>
          
              <Location row={0} col={0}/>
              <PrintContentHOC/>
          </Item>

          <Item>
              <Location  row={0} col={1}/>
              <PrintSetting/>
          </Item>



      </ResponsiveBox>

    </NhanvienProvider>

  )
}

export default React.memo(Print)
