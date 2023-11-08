import React from "react";
import * as C from './style'
import { VscMenu } from "react-icons/vsc";

export const Header = () => {
    return(
        <C.Container>
            <C.ConHeader>
                <C.ConNav>
                    <C.Banner>StynBank</C.Banner>
                    <C.ConList>Produtos</C.ConList>
                    <C.ConList>Planos</C.ConList>
                    <C.ConList>Financeiro</C.ConList>
                    <C.ConList>Contato</C.ConList>
                    <C.MenuList><VscMenu size={30}/></C.MenuList>
                </C.ConNav>
            </C.ConHeader>
        </C.Container>
    )
}

export default Header;

