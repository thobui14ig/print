import React, { useContext, useEffect, useState } from 'react'
import getUser from '../api/methods/nhanvien';
import dayjs from 'dayjs'
export const NhanvienContext = React.createContext({})

const NhanvienProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [searchDate, setSearchDate] = useState({
        startDate: dayjs().startOf('year'),
        endDate: dayjs().endOf('year')

    })




    useEffect(() => {
        const fetchData = async() => {
            const data = await getUser();
            setUser(data)
        }
        fetchData()
    }, []);
    const setStartDayEndDay = (obj) => {
        setSearchDate({
            ...searchDate, ...obj
        })
    }

    return (
      <NhanvienContext.Provider value={{user, searchDate, setStartDayEndDay}}>
          {children}
      </NhanvienContext.Provider>
    );
  };



export default NhanvienProvider


export const useNhanvien = () => {
    return useContext(NhanvienContext);
}


