
import dayjs from 'dayjs';
import DataGrid, {
  Column,
  Editing, Form, Paging, Popup
} from 'devextreme-react/data-grid';
import { Item } from 'devextreme-react/form';
import 'devextreme-react/text-area';
import { ColumnHeaderFilter, FilterRow } from 'devextreme-react/tree-list';
import CustomStore from 'devextreme/data/custom_store';
import React, { useState } from 'react';
import 'whatwg-fetch';
import {CRUDNhanvien} from '../../api/methods/nhanvien'





// const URL = 'http://localhost:9100/user';



const NhanvienContent = ({searchDate}) => {
  const startDateParam = dayjs(searchDate.startDate).format('YYYY/MM/DD')
  const endDateParam = dayjs(searchDate.endDate).format('YYYY/MM/DD')

  const [focusedRowKey, setFocusedRowKey] = useState(null)


  const ordersData = new CustomStore({
    key: 'id',
    load: () => sendRequest(),
    insert: (values) => sendRequest( 'POST', {
      values: JSON.stringify(values),
    }),
    update: (key, values) => sendRequest( 'PUT', {
      key,
      values: JSON.stringify(values),
    }),
    remove: (key) => sendRequest('DELETE', {
      key,
    }),
  })

  const customersData = new CustomStore({
    key: 'Value',
    loadMode: 'raw',
    load: () => sendRequest(`${URL}/CustomersLookup`),


  })
 

  const sendRequest = async(method = 'GET', data = {}, startDate = startDateParam, endDate = endDateParam) => {
    if (method === 'GET') {

     return CRUDNhanvien(method, null, startDate, endDate)
    }

    if (data) {
      console.log(data);
      return CRUDNhanvien(method, data)
     
    }
  }






    return (
 

        <DataGrid
            dataSource={ordersData}
            id="gridContainer"

            focusedRowEnabled={true}
            showBorders={true}
            // height="75vh"
            width={"100%"}
        >
          <Paging enabled={true} defaultPageSize={10} />
          <ColumnHeaderFilter visible={true} />

          <FilterRow visible={true} />
          <Paging defaultPageSize={10} />

          <Editing
            mode="popup"
            allowUpdating={true}
            allowAdding={true}
            allowDeleting={true}
          >
            <Popup title="Employee Info" showTitle={true} width={700} height={525} />
            <Form>
                <Item itemType="group" colCount={2} colSpan={2}>
                    <Item dataField="nickname" />
                    <Item dataField="email" />

                  </Item>

            </Form>

          </Editing>
          {/* <Column
            dataField="CustomerID"
            width={150}
            allowSorting={false}
            editCellComponent={UserDropDownBoxComponent}
          >
                <Lookup
                  dataSource={customersData}
                  valueExpr="Value"
                   displayExpr="Text"
                />
            
          </Column> */}
          <Column  dataField="nickname"></Column>
          <Column  dataField="email"></Column>
          <Column  dataField="createAt" dataType={"date"}></Column>
          <Column  dataField="updatedAt"dataType={"date"}> </Column>
          



        </DataGrid>

    );
  }


export default NhanvienContent

