import React, {useState,useEffect} from 'react';
import * as C from './style'
import { IoArrowDownCircleOutline, IoArrowUpCircleOutline, IoCashOutline } from "react-icons/io5";


  export const Resumo = () => {
    
    const [desc, setDesc] = useState("")
    const [amount, setAmount] = useState("")
    const [isExpense, setExpense] = useState(false)  

    const generateId = () => Math.round(Math.random() * 1000)
    
    const transaction = {
        id: generateId(),
        description: desc,
        saldo: amount,
        type: isExpense
    }

    const handleAdd = () => {
      if( !desc || !amount){
        alert("infome a descrição e o valor")
        return;
      }
      else if(amount < 1){
        alert("O valor tem que ser positivo!")
        return;
      }
      const newArray = [...transactions, transaction];
      
      addTransaction(newArray);
      
      localStorage.setItem('appData', JSON.stringify(newArray))
      
      setDesc("");
      setAmount("")
    }

    
    const [entrada, setEntrada] = useState(0)
    const [saida, setSaida] = useState(0)
    const [total, setTotal] = useState(0)

    const data = localStorage.getItem('appData')
    const [transactions, addTransaction] = useState(data ? JSON.parse(data) : [])


        useEffect(() =>{
          const amountExpense = transactions.filter((item) => item.type).map((transf) => Number(transf.saldo))

          const amountIncome = transactions.filter((item) => !item.type).map((transf) => Number(transf.saldo))

          const expense = amountExpense.reduce((acc, cur) => acc + cur,0).toFixed(2)
          const amount = amountIncome.reduce((acc, cur) => acc + cur,0).toFixed(2)

          const total = Math.abs(expense - amount).toFixed(2)
          
          setEntrada(`R$${amount}`)
          setSaida(`R$${expense}`)
          setTotal(`${Number(amount) - Number(expense) < 0 ? "-" : ""}R$${total}`)

          
          console.log(amountIncome)
        }, [transactions])

        

    return (
      <C.Container>
        <C.Items>
          <C.Box>
            <IoArrowUpCircleOutline style={{color: 'green'}} size={50} />
            <p>{entrada}</p>
          </C.Box>
      
          <C.Box>
            <IoArrowDownCircleOutline style={{color: 'green'}} size={50} />
            <p>{saida}</p>
          </C.Box>
      
          <C.Box>
            <IoCashOutline style={{color: 'green'}} size={50} />
            <p>{total}</p>
          </C.Box>
        </C.Items>
      
        <C.DivInput>
          <C.InputDesc 
            value={desc}
            placeholder='Deposito' 
            onChange={(e) => setDesc(e.target.value)}>
          </C.InputDesc>

          <C.InputDesc 
            type='Number' 
            value={amount}
            placeholder='Valor' 
            onChange={(e) => setAmount(e.target.value)}>
          </C.InputDesc>

            <C.SelectSty>
                <input 
                  name='grupo1' 
                  id='rEntrada'
                   
                  type='radio' 
                  onChange={() => setExpense(isExpense)}>
                </input>
              <label htmlFor='rEntrada'>Entrada</label>

                <input 
                  name='grupo1' 
                  id='rSaida' 
                  type='radio' 
                  onChange={() => setExpense(!isExpense)}>
                </input>
              <label htmlFor='rSaida'>Saída</label>

            </C.SelectSty>
          
          <C.Btn onClick={handleAdd}>Continuar</C.Btn>
        </C.DivInput >
      </C.Container>
      
    );

}

export default Resumo;

