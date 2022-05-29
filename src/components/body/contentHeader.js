import { Button } from 'devextreme-react/button'
import { ButtonItem, Form, GroupItem, Item } from 'devextreme-react/form'
import React, { useRef } from 'react'
import NhanvienProvider, { useNhanvien } from '../../context/nhanvien.context'


const buttonOptions = {
  text: "Tìm kiếm",
  type: 'success',
  useSubmitBehavior: true
}



export default function ContentHeader() {
  const formRef = useRef()
  const { searchDate, setStartDayEndDay } = useNhanvien();

  // console.log(searchDate);
  const dateTime = {
    startDate: searchDate.startDate,
    endDate: searchDate.endDate
  }

  const onFormSubmit = (e) => {
    const dataDate = formRef.current.props.formData
    setStartDayEndDay({
      startDate: dataDate.startDate,
      endDate: dataDate.endDate
    })
    e.preventDefault()
  }


  return (
    <form onSubmit={onFormSubmit}>
    <Form colCount={3} id="form" formData={dateTime} colspan={2} ref={formRef}>
          <GroupItem >
              <Item  caption="startDate" dataField={"startDate"} editorType={"dxDateBox"}/>                      
          </GroupItem>
          <GroupItem>
              <Item  dataField={"endDate"} editorType={"dxDateBox"}/>
          </GroupItem>
          <GroupItem>
              {/* <ButtonItem buttonOptions={buttonOptions}/> */}
              <Button text="Tìm kiếm" type='success' useSubmitBehavior={true}/>
          </GroupItem>
      </Form>   
  </form>
  )
}

