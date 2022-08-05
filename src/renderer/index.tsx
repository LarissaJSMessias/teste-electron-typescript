import React from "react"
import ReactDOM from "react-dom"
import { criaCollectionItems } from "../list/database/mongo"

import "./index.scss"
import { App } from "./ui/App"


criaCollectionItems()
ReactDOM.render(<App />, document.getElementById("root"))