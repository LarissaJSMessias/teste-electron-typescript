import React, { useState } from 'react'
import { Iitem } from '../interface/item'

export const Form = ({handleCriaItem, lista, handleStatus, handleDeleta, handleAltera}: any) => {

    const [item, setItem] = useState<Iitem>({status: false, nome:``})
  
    const handleSubmit = async (item: Iitem) => {
      if(item.nome !== ``){
        await handleCriaItem(item)
      }
      setItem({status: false, nome:``})
    }
  
    return(
      <div className = "form" >
        <input id="standard-basic" type = "text" placeholder= "Novo Item" value= {item.nome} onChange={(event) => {setItem({status: false, nome : event.target.value})}}/>
        <button className="button-form" onClick={() => handleSubmit(item)}>Adicionar</button>
        <table>
          <thead>
            <tr>
              <th>Status</th>
              <th>Tarefa</th>
              <th>Deletar</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(lista).map((item: any) => (
              <tr key={item[1]._id}>
                <td> 
                  <input type="checkbox" checked={item[1].status} onChange={(event) => {handleStatus(item[1]._id, event.target.checked)}}></input>
                </td>
                <td className = {((item[1].status === true) ? `isConcluida` : `null`)}> {item[1].nome}</td>
                <td>
                <button onClick={() => handleAltera(item[1]._id, item[1].nome)}></button>
              </td>
                <td>
                  <button onClick={() => handleDeleta(item[1]._id)}></button>
                </td>
              </tr>
            ))}          
          </tbody>
        </table>  
      </div>
  
    )
  }


  