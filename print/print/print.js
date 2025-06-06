
  var print_default_path = '../assets/print/print/';
  var leitor_default_path = '../assets/print/print/';
  var bootstrap_path = '../assets/bootstrap/';
  var default_css_path = '../assets/css/';
  var fa_path = '../assets/fa/css/' ;
  var js_path = '../assets/js/';
  var img_path = '../assets/images/';

    //pra usar print modificado por conteudo, adicionar uma tag de script antes
  // do link do print.js no index do conteudo.
  try{
    if(custom_print_path != null)
      print_default_path = custom_print_path;
  } catch (error){
    console.warn('sem caminho do css do print modificado no index.')
  }
  try{
    if(custom_leitor_path != null)
    leitor_default_path = custom_leitor_path;
  } catch (error){
    console.warn('sem caminho do css do leitor modificado no index.')
  }

  $(function (){
    //initToPDF();

    $("[data-pdf='true']").click(function (){
    //  window.open(getIndexFile() + "?leitor=1");
        layoutLeitor();
    });

    $("[data-click='fontSize']").click(function (){
      fontSize($(this).attr("data-value"));
    });

    $("[data-pdf='2']").click(function (){
      var script = document.createElement('script');
      script.onload = function() {
        //  salert("Script loaded jsPDF and ready");
        savePDF();
      };

      script.src = "js/jsPDF/dist/jspdf.min.js";
      document.getElementsByTagName('head')[0].appendChild(script);

    });
  });

  function savePDF()
  {

    if(checkURI()){

    }
  }

  function initToPDF()
  {
    if(checkURI()){

    }


  }

  function fontSize(size)
  {

    size = Number(size);
    switch (size)
    {
      case 1:

        $("h1").css({"font-size":"26pt "});
        $("h2").css({"font-size":"24pt "});
        $("h3").css({"font-size":"22pt "});
        $("h4").css({"font-size":"20pt "});
        $("h5").css({"font-size":"18pt "});
        $("p").css({"font-size":"14pt "});
        break;

      case 2:

          $("h1").css({"font-size":"28pt "});
          $("h2").css({"font-size":"26pt "});
          $("h3").css({"font-size":"24pt "});
          $("h4").css({"font-size":"22pt "});
          $("h5").css({"font-size":"20pt "});
          $("p").css({"font-size":"18pt "});
          break;

      default:
          $("h1").css({"font-size":""});
          $("h2").css({"font-size":""});
          $("h3").css({"font-size":""});
          $("h4").css({"font-size":""});
          $("h5").css({"font-size":""});
          $("p").css({"font-size":""});
          break;
    }

    $("[data-click='fontSize']").removeClass("active");
    $("[data-click='fontSize'][data-value='"+size+"']").addClass("active");
  }

  function layoutLeitor(){
    HTMLstring='<!DOCTYPE html>\n';
    HTMLstring='<html lang="pt-br">\n';
    HTMLstring+='<head>\n';
    HTMLstring+='    <link href="'+bootstrap_path+'bootstrap.min.css" rel="stylesheet">\n';
    HTMLstring+='    <link href="../css/preloader.css" rel="stylesheet">\n';
    HTMLstring+='    <link href="'+fa_path+'all.min.css" type="text/css" rel="stylesheet">\n';
    //HTMLstring+='    <link href="css/cores.css" type="text/css" media="all" rel="stylesheet">\n';
    HTMLstring+='    <link href="'+leitor_default_path+'leitor.css" type="text/css" media="all" rel="stylesheet">\n';
    HTMLstring+='    <link href="'+print_default_path+'print.css" type="text/css" rel="stylesheet">\n';
    HTMLstring+='<title>Versão para impressão</title>\n';
    HTMLstring+='</head>\n';
    HTMLstring+='<body>\n';
    HTMLstring+='<div class="bg-topo-print text-center">\n';
    HTMLstring+='<button type="button" onclick="javascript:print()" class="btn btn-primary">\n';
    HTMLstring+='<span class="fa fa-print"></span> Imprimir</button>\n';
    HTMLstring+=' <span class="d-none d-lg-inline-block"><span style="margin-left: 10px; margin-right: 10px;">|</span> <span class="fa fa-font" style="margin-right: 10px;"></span>';
    HTMLstring+='<button class="btn btn-primary active" data-click="fontSize" data-value="0">Padrão</button> ';
    HTMLstring+='<button class="btn btn-primary" data-click="fontSize" data-value="1">Médio</button> ';
    HTMLstring+='<button class="btn btn-primary" data-click="fontSize" data-value="2">Grande</button></span> ';
    HTMLstring+='</div>\n';
    HTMLstring+='<img src="'+img_path+'logo_senac_colorido.png" id="marcadaguaLogo">\n';
    HTMLstring+='\n';
    HTMLstring+='<div id="booklet" class="visualizar-print">\n';
    HTMLstring+='<h1>' + $("#nome-curso").text() + '</h1>\n';
    // for(var i = 1; i <= countPages(); i++){
    //   HTMLstring+=$(".pagina:nth-child("+i+")").html();
    // }
    HTMLstring+=$(".paginas").html();
    HTMLstring+='</div>\n';
    HTMLstring+='\n';
    HTMLstring+='<script src="'+js_path+'jquery-3.6.0.min.js"></script>\n';
    HTMLstring+='<script src="'+print_default_path+'print.js"></script>\n';
    //HTMLstring+='<script src="js/images.loader.js"></script>\n';
    //HTMLstring+='<script language="javascript">$(function (){ $(".pagina").css("display","block"); imagesLoader(false); });</script>'
    HTMLstring+='<script language="javascript">$(function (){ $(".pagina").css("display","block");});</script>'
    HTMLstring+='</body>\n';
    HTMLstring+='</html>';

    newwindow=window.open();
    newdocument=newwindow.document;
    newdocument.write(HTMLstring);
    newdocument.close();

  }
