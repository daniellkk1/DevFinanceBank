import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    height: 300px;
    display:flex;
    margin-left: 15px;
    flex-direction:column;
    align-items: center;
    justify-content:space-around;
    font-family: 'Kdam Thmor Pro', sans-serif;
    font-weight: 400;
    @media(max-width: 750px){
            display: flex;
            
            width: 90%;
            justify-content: space-around;
        }
        p{
            font-size: 28px;
            font-weight: 500;
        }
`

export const Items = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
        @media(max-width: 750px){
            flex-direction: row;
            align-items: center;
                p{
                    font-size: 16px;
                    font-weight: bold;
                }
        }
`

export const Box = styled.div`
    width: 250px;
    height: 150px;
    background-color: #cccccc;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    display:flex;
    flex-direction: column;
    align-items: center;
    word-break: break-word;
    color: black;
    justify-content:space-around;
    border-radius: 10px;
    margin-right: 10px;
        @media(max-width: 750px){
            text-align: center;
            height: 95px;
            width: 180px;
            margin: 5px;
    }
`

export const DivInput = styled.div`
    margin: 10px;
    height: 60px;
    width: 90%;
    align-items: center;
    display: flex;
    justify-content: space-around;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        @media(max-width: 750px){
            flex-direction: column;
            height: 300px;
        }
`

export const InputDesc = styled.input`
    height: 30px;
    width: 200px;
    border: none;
    border-bottom: 1px solid gray;
    text-align: center;
    background: transparent;
`

export const SelectSty =  styled.div`
    display: flex;
    width: 180px;
    justify-content: space-between;
        input {
            cursor: pointer;
        }
`

export const Btn = styled.button`
    background-color: green;
    border: none;
    border-radius: 10px;
    padding: 8px;
    width: 100px;
    color: #f2f2f2;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
`