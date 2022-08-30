export default async function HTML2PDF(){
  var testepdf
testepdf  = await fetch('http://localhost:3000/htmlPdf').then(res => res.json())
return testepdf;
}

