import { ObjectId } from "mongodb"
import { Iitem } from '../interface/item'

import { ConectaBd } from '../database/mongo'


export const CriaItem = async (item: Iitem) => {
  const resultado = (await ConectaBd()).collection(`items`).insertOne(item)
  return resultado
}

export const EncontraItem = async (id: string) => {
  const resultado = (await ConectaBd()).collection(`items`).findOne({_id: new ObjectId(id) })
  return resultado
}

export const EncontraTodosItems = async () => {
  const resultado = (await ConectaBd()).collection(`items`).find({}).sort({status: 1}).toArray()
  return resultado
}

export const AlteraItem = async (id: string, item: Iitem | any) => {
    const resultado = (await ConectaBd()).collection(`items`).updateOne({_id: new ObjectId(id)}, {$set: item})
    return resultado
  }

export const DeletaItem = async (id: string) => {
  const resultado = (await ConectaBd()).collection(`items`).deleteOne({_id: new ObjectId(id)})
  return resultado
}