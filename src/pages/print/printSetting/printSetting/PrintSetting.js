import { Form, GroupItem, Item } from 'devextreme-react/form';
import { NumberBox } from 'devextreme-react/number-box';
import DataSource from 'devextreme/data/data_source';
import { TextBox } from 'devextreme-react/text-box';
import { Label } from 'devextreme-react/bar-gauge';

import { debounce } from 'lodash';
const landscape = ["Portrait", "Landscape"];
export default function PrintSetting({ optionsPrinter, setOptions, changPdf }) {
  console.log('render-danh sach options');
  const onFieldDataChanged = debounce((e) => {
    
     if( ["landscape","scale", "pageSize", "page", "top", "right", "bottom", "left" ].includes(e.dataField) ){
      changPdf(optionsPrinter.optionsPrinter)
     }

     if(e.dataField === "pageRange" && e.value !== 0){
       // if(e.value !== 0){
         

     }
 },300)

 const newPaperSize = new DataSource({
  store: {
    type: "array",
    key: "name",
    data: optionsPrinter.pageSize
  }
})



  return (
    <Form  id="form" colCount={2}  formData={optionsPrinter.optionsPrinter} onFieldDataChanged={onFieldDataChanged}>
    <GroupItem colSpan={2} >
        <Item editorType={"dxRadioGroup"}   dataField={"landscape"} editorOptions={{ items: landscape }}></Item>

        <Item  editorType={"dxNumberBox"}  dataField={"scale"} editorOptions={{ width: 50, step: 1, min: 10, max: 200 }}></Item>


        <Item    editorType={"dxSelectBox"} dataField={"pageSize"}  editorOptions={{dataSource: newPaperSize, searchEnabled: true, displayExpr: "name",}}>
              <Label text="Page Size"></Label>  
        </Item>                     

        {/* <Item dataField={"pageRange"}  render={pageRender}/> */}

    </GroupItem>  

    <GroupItem caption={"Margin"} colSpan={2}>
        <GroupItem colCount={2}  >
          <Item dataField={"top"} width={50} editorType={"dxNumberBox"}/>
          <Item dataField={"right"} width={50}  editorType={"dxNumberBox"}/>
        </GroupItem>
        <GroupItem colCount={2}>
                  
          <Item dataField={"bottom"}  width={50} editorType={"dxNumberBox"}/>
          <Item dataField={"left"} width={50}  editorType={"dxNumberBox"}/> 
        </GroupItem>              
  

         
    </GroupItem>

</Form>   
  )
}
