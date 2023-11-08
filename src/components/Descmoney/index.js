import React, { useState } from "react";
import * as C from "./style"
import { MdDelete, MdBrightness1 } from "react-icons/md";

export const Descmoney = () => {

    const storage = localStorage.getItem('appData')
    const [items, setItems] = useState( storage ? JSON.parse(storage) : [])

    const onDelete = (ID) => {
        const newArray = items.filter((transf) => transf.id !== ID)
        setItems(newArray)
        localStorage.setItem('appData', JSON.stringify(newArray))
    }

    return(
         <C.ContainDiv>
            {items.map((item) => {
                return(
                    <C.ContainDesc key={item.id}>
                        <p>{item.description}</p>
                        <p>{item.saldo}</p>
                        <MdBrightness1 size={30} color={item.type === true ? "red" : "green"}/>
                        <MdDelete cursor="pointer" size={30} onClick={() => onDelete(item.id)}></MdDelete>
                    </C.ContainDesc>
                )
            })}
         </C.ContainDiv>
    )
}