import { ResponsiveBox } from 'devextreme-react';
import { Row, Item as ItemBox } from 'devextreme-react/responsive-box';
import React from 'react'
import ContentHeader from '../../components/body/contentHeader';
import { useNhanvien } from '../../context/nhanvien.context';
import NhanvienContent from './nhanvienContent'
import { Location } from 'devextreme-react/map';


export default function NhanvienHOC() {
    const {user, searchDate} = useNhanvien();  
    
    if(!user){
        return <p>Loadding............. nè!</p>
    }else{
       
        return (
            <>
                <ResponsiveBox>
                    <Row/>
                    <Row/>

                    <ItemBox>
                        <Location screen="xs sm md lg" row={0} col={0}/>
                        <ContentHeader user={user}/>
                    </ItemBox>
                   
                    <ItemBox>
                        <Location screen="xs sm md lg" row={1} col={0}/>
                        <NhanvienContent searchDate={searchDate}/>      
                    </ItemBox>
                                    
                </ResponsiveBox>
           
            </>

                
        )
    }

}
