import React, { useEffect, useState } from "react"
import { Iitem } from "../../list/interface/item"
import {  CriaItem, DeletaItem, AlteraItem, EncontraTodosItems } from "../../list/controller/itemController"
import { Form } from "../../list/components/form"

export const App: React.FC = () => {




  const smalltalk = require(`smalltalk`)
  const [lista, setLista] = useState<any>([])

  const listaItem = async () => {
    await EncontraTodosItems().then((data) => {
      setLista({ ...data })
    })
  }

  useEffect(() => {
    listaItem()
  }, [])

  const handleCriaItem = async (item : Iitem) => {
    await CriaItem(item)
    await listaItem()
  }

  const handleStatus = async (id: string, status: boolean) => {
    const item = { "status": status}
    await AlteraItem(id, item)
    await listaItem()
  }

  const handleDeleta = async (id:string) => {
    await DeletaItem(id)
    await listaItem()
  }

  const handleAltera = async (id:string, nome:string) => {
    await smalltalk
      .prompt(`Alterar`, `Novo nome:`, nome, {type: `text`}) 
      .then((value: string) => {
        nome = value
      })
      .catch(() => {

      })
    if (nome !== ``) {
      const item = {"nome": nome}
      await AlteraItem(id, item)
    }
    await listaItem()
  }

  return (
    <div className={"App"}>
  <div className="App-header"> 
      <h1>Todo-List</h1>
      <p>-----------</p>
      

      <div className="Form">
        <Form handleCriaTarefa={handleCriaItem} lista={lista} handleStatus={handleStatus} handleDeleta={handleDeleta} handleAltera={handleAltera}/>
      </div>

      </div>
    
      
      
    </div>
  )
}


  