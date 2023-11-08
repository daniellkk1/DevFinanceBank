import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 100px;
    background-color: #003300;
    display:flex;
    justify-content:center;
    align-items: center;
    color: white;
    font-family: 'Sometype Mono', monospace;
    font-size:14px;
    margin-bottom: 8px;
        @media(max-width: 750px ){
            text-align: center;
        }
`

export const ConHeader = styled.header`
    width: 90%;
    height: inherit;
`

export const ConNav = styled.nav`
    width: inherit;
    height: inherit;
    display: flex;
    list-style: none;
    align-items: center;
    @media(max-width: 750px) {
            display: flex;
            justify-content: space-between;   
        }
        
`

export const ConList = styled.li`
    font-size: 18px;
    margin-left: 20px;
    font-family: 'Kdam Thmor Pro', sans-serif;
        @media(max-width: 750px) {
                display: none;   
            }
`
export const MenuList = styled.li`
    display: none;
    font-size: 18px;
    margin-left: 20px;
    font-family: 'Kdam Thmor Pro', sans-serif;
        @media(max-width: 750px) {
            display: flex;
            justify-content: space-around;   
        }
`

export const Banner = styled.li`
    display: none;
    font-size: 18px;
    margin-left: 20px;
    font-family: 'Kdam Thmor Pro', sans-serif;
    border: 1px solid white ;
    padding: 8px;
    border-radius: 8px;
        @media(max-width: 750px) {
            display: flex;  
        }
`