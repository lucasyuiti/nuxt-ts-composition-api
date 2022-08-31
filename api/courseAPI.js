import {jsPDF} from "jspdf"

const express = require('express');
const { GraphQLClient } = require('graphql-request');

const app = express();
app.use(express.json());

const client = new GraphQLClient(
    process.env.ENDPOINT
);

app.get('/urlPdf', async(req, res) =>{
  let pdf = new jsPDF();

  var html = document.createElement("html");
  html.innerHTML = req;
  pdf.html('', {
    callback: function (pdf) {
      pdf.save("Teste" + ".pdf");
    },
  });
  res = pdf;
})

app.get('/htmlPdf', async(req, res) =>{
  let pdf = new jsPDF();

  var html = document.createElement("html");
  html.innerHTML = req;
  pdf.html('', {
    callback: function (pdf) {
      pdf.save("Teste" + ".pdf");
    },
  });
  res = pdf;
})

module.exports = app
