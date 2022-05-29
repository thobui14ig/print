import DataGrid, {
  Column,
  FilterRow,
  Paging,
  Scrolling,
  Selection
} from 'devextreme-react/data-grid';
import DropDownBox from 'devextreme-react/drop-down-box';
import React, { useRef, useState } from 'react';

const dropDownOptions = { width: 500 };
let searchTimer = null;
const UserDropDownBoxComponent = (props) => {
  console.log([props.data.value])
  const datagridRef = useRef()
  const [selectedRowKeys, setSelectedRowKeys] = useState([props.data.value])  //==========
  const [isDropDownOpened, setIsDropDownOpened] = useState(false)

  const [focusedRowKey, setFocusedRowKey] = useState(props.data.value) ////==========

  const boxOptionChanged = (e) => {
    if (e.name === 'opened') {

      setIsDropDownOpened(e.value)

    }
  }

  const onOpened = (e) => {
    setTimeout(() => {
        e.component.focus()
        e.component.field().select();
    }, 200);
  }

  const contentReady = (e) => {
    let gridDataSource = datagridRef.current.instance.getDataSource()
    gridDataSource.searchExpr(["Text", "Value"])     
    // gridDataSource.filter(['id','<>',1]) 
    // gridDataSource.load() //==================
  };

  const onInput = function (e) {
    // this.pageIndex(0)
    clearTimeout(searchTimer);
    setFocusedRowKey(null)
    searchTimer = setTimeout(function () {
      let text = e.component.option("text");
     
      let gridDataSource = datagridRef.current.instance.getDataSource()
      console.log(gridDataSource._items)
      gridDataSource.searchValue(text)
      gridDataSource.load().then((items) => { //==========
          // select vào phần tử đầu tiên khi tìm kiếm

          if(items.length > 0){
            setFocusedRowKey(items[0].Value)
          }
      });

     
      
      

    }, 500);
  };



  const contentRender = (value) => {
   
    return (
      <DataGrid
        dataSource={props.data.column.lookup.dataSource}
        remoteOperations={true}
        height={250}
        selectedRowKeys={selectedRowKeys}
        hoverStateEnabled={true}
        onSelectionChanged={onSelectionChanged}
        focusedRowEnabled={true}
        ref={datagridRef}
        onContentReady={contentReady}
        focusedRowKey={focusedRowKey}


        // focusedRowKey={focusedRowKey}

    
      >
        {/* <Column dataField="FullName" />
        <Column dataField="Title" />*/}
        <Column dataField="Text" /> 
        <Column dataField="Value" /> 

 
        <FilterRow visible={true}/>
        <Scrolling mode="virtual" />
        <Selection mode="single" />
      </DataGrid>
    );
  }

  const onSelectionChanged = (selectionChangedArgs) => {
    console.log("heloooooooooooooooooooooooo", selectionChangedArgs)
    //sữa lỗi lần đầu tiên bật comboxbox tự tắt
    setSelectedRowKeys(selectionChangedArgs.selectedRowKeys)
    setFocusedRowKey(null) //==========
    if(selectionChangedArgs.selectedRowsData.length > 0){
      setIsDropDownOpened(false)
      
      props.data.setValue(selectionChangedArgs.selectedRowsData[0].Value);
    }else{
      
      

      props.data.setValue(selectedRowKeys[0]);
    }

  }




  


    return (
      <DropDownBox
        onOptionChanged={boxOptionChanged}
        opened={isDropDownOpened}
        dropDownOptions={dropDownOptions}
        dataSource={props.data.column.lookup.dataSource}
        value={selectedRowKeys[0]}
        valueExpr="Value"
        displayExpr="Text"
        contentRender={() => contentRender(123)}
        acceptCustomValue={true}
        onInput={onInput}
        onOpened={onOpened}
        // placeholder="Select a value..."
        // acceptCustomValue={true}
       
        >








          
          
      </DropDownBox>
    );

}


export default React.memo(UserDropDownBoxComponent)