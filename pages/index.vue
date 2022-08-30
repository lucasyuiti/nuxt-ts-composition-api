<template>
  <div>
    <button @click="">DownloadPDF</button>
  </div>
</template>

<script lang="js">
  import HTML2PDF from "~/modules/services/pdfService"

  const downloadPDF = () => {
    HTML2PDF('<html><head> <title>pdf-test</title> </head> <body> <noscript> <strong>We re sorry but pdf-test doesnt work properly without JavaScript enabled. Please enable it to continue.</strong> </noscript> <div id="app" data-v-app=""><div><div><h1>conteudo</h1></div><button>Download pdf</button></div></div> <!-- built files will be auto injected --> </body></html>',"Teste Jackinho")
  }
</script>
