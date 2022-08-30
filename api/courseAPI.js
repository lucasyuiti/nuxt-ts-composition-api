const express = require('express');
const { GraphQLClient } = require('graphql-request');

const app = express();
app.use(express.json());

const client = new GraphQLClient(
    process.env.ENDPOINT
);

app.get('/getCourses', async (req, res) => {
    const allCourses = `
    {
        courses {
          id
          name
          description
          url
          vote
          authors {
            name
          }
        }
    }
  `;

  const { courses } = await client.request(allCourses);

  res.json({ courses })
});

app.get('/htmlPdf', async(req, res) =>{
  let pdf = new jsPDF();

  //var html = document.createElement("html");
  //html.innerHTML = stringHtml;
  pdf.html('', {
    callback: function (pdf) {
      pdf.save("Teste" + ".pdf");
    },
  });
  res = pdf;
})

module.exports = app
