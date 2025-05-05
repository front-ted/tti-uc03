
$(".painel-arquivo button").mouseleave(function() {
    $(".painel-arquivo").css('background-image','url(img/painel-clicavel-00.png)');
})
$(".btn-matricula").mouseover(function() {
    $(".painel-arquivo").css('background-image','url(img/painel-clicavel-01.png)');
})
$(".btn-iptu").mouseover(function() {
    $(".painel-arquivo").css('background-image','url(img/painel-clicavel-02.png)');
})
$(".btn-itr").mouseover(function() {
    $(".painel-arquivo").css('background-image','url(img/painel-clicavel-03.png)');
})
$(".btn-guia").mouseover(function() {
    $(".painel-arquivo").css('background-image','url(img/painel-clicavel-04.png)');
})
$(".btn-rg_cpf").mouseover(function() {
    $(".painel-arquivo").css('background-image','url(img/painel-clicavel-05.png)');
})
$(".btn-registros").mouseover(function() {
    $(".painel-arquivo").css('background-image','url(img/painel-clicavel-06.png)');
})
$(".btn-certidoes").mouseover(function() {
    $(".painel-arquivo").css('background-image','url(img/painel-clicavel-07.png)');
})

$(".btn-matricula").click(function(){
    $(".check-matricula").css('display','block');
});
$(".btn-iptu").click(function(){
    $(".check-iptu").css('display','block');
});
$(".btn-itr").click(function(){
    $(".check-itr").css('display','block');
});
$(".btn-guia").click(function(){
    $(".check-guia").css('display','block');
});
$(".btn-rg_cpf").click(function(){
    $(".check-rg_cpf").css('display','block');
});
$(".btn-registros").click(function(){
    $(".check-registros").css('display','block');
});
$(".btn-certidoes").click(function(){
    $(".check-certidoes").css('display','block');
});