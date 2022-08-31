import { assertExpressionStatement } from "@babel/types"

const HTML2PDF = async() => {
  let testepdf = await fetch('http://localhost:3000/htmlPdf')
}

const URL2PDF = async() => {
  let pdf = await fetch('http://localhost:3000/urlPDF')
}

export default{HTML2PDF, URL2PDF}

