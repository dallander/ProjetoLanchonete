<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/fonts.css">
    <link rel="stylesheet" href="assets/css/style.css">
    <title>Lanchonete</title>
</head>
<body>

    <!--INÍCIO CONFIGURAÇÃO DO NAVBAR-->
    <nav id="containerNavTop">
        <div class="menuNav">
            <h2>Menu</h2>
            
        </div>
        <img src="assets/images/bt_img/carrinho.png" alt="" id="cartimg">
        <div class="containerCarrinhoNav esconde">

            <div class="BotaofecharCarrinho">
               <img src="assets/images/bt_img/fechar.png" alt="" class="x">
            </div>

            <div class="areaItemCarrinho">
                <div class="itemCarrinho">
                    
                    <div class="quantidadeItemDentroCarrinho">
                        <img src="assets/images/imgLanche/batataFrita.jpeg" alt="item">
                        <div class="containerBtMaisMenosCarrinho">
                            <div class="btMaisCarrinho">
                                +
                            </div>
                            <div class="quantidade">
                                <input type="number" name="" id="inputCarrinho" min="1" value="1" readonly>
                            </div>

                            <div class="btMenosCarrinho">
                                -
                            </div>
                            <div class="removerItemCarrinho">
                                X
                            </div>
                        </div>
                    </div>
                    <div class="valorTotalCarrinho">
                        <div class="valorTotalContainerTitulo">
                            <h3>Valor total</h3>
                        </div>
                        <div class="valor">
                            R$ 50.00
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </nav>
    <!--FIM CONFIGURAÇÃO DO NAVBAR-->
    <main class="containerMain">
    <!--INÍCIO CONFIGURAÇÃO SECTION LANCHE-->
        <section class="sectionLanche">
            <!--INÍCIO CONFIGURAÇÃO DO ITEM LANCHE-->
            <div class="itemLanche ">
                <div class="imgLanche">
                    <img src="assets/images/imgLanche/batataFrita.jpeg" alt="lanche x">
                </div>
                <div class="infoLanche">
                    <div class="containerTituloInfoLanche">
                        <h3 class="nomeLanche">Nome lanche</h3>
                    </div>
                    <div class="btnContainer">
                        <div class="imgBotaoAbrirModal">
                            <div class="containerImgImagemBotao">
                                <img src="assets/images/bt_img/botao.png" alt="imagemAbrirModal">
                            </div>
                            <div class="containerValorImagemBtn">
                                <h4>R$ 10.99</h4>
                            </div>

                        </div>
                    </div>
                </div>

                <!--INÍCIO CONFIGURAÇÃO DO ITEM LANCHE MODAL-->
                <div class="containerModal esconderModal ">
                    <div class="itemLancheModal ">
                        <div class="imgLancheModal">
                            <img src="assets/images/imgLanche/batataFrita.jpeg" alt="lanche x">
                        </div>
                        <div class="infoLancheModal">
                            <div class="fecharModal">
                                    x
                            </div>
                            <div class="containerTituloInfoLancheModal">
                                <h1 class="nomeLancheModal">Nome lanche</h1>
                                
                                <div class="qtItem">
                                
                                    <div class="btnMais">
                                        +
                                    </div>
                                    valor
                                    <div class="btnMenos">
                                        -
                                    </div>
                                </div>
                            </div>
                                
                            <div class="btnContainerModal">
                                <div class="btnModal">

                                    <div class="containerValorImagemBtnModal">
                                        <input type="button" value="Adicionar ao carrinho" class="botaoModal">
                                    </div>

                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--FIM CONFIGURAÇÃO DO ITEM MODAL-->

            
            <!--FIM CONFIGURAÇÃO DO ITEM LANCHE-->

 
            
        </section>
        <!--FIM CONFIGURAÇÃO SECTION LANCHE-->
    </main>


    <script src="assets/js/ajax.js"></script>
    <script src="assets/js/abrirModal.js"></script>
</body>
    <footer>
        <h1>FOOTER</h1>
    </footer>
</html>