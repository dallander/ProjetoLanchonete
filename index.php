<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/fonts.css">
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel = "icon" type ="image/x-icon" href="assets/images/logo/favicon-16x16.png">
    <title>Lanchonete</title>
</head>
<body>

    <!--INÍCIO CONFIGURAÇÃO DO NAVBAR-->
    <nav id="containerNavTop">
        <div class="menuNav">
            <img src="assets/images/logo/logodom.png" alt="logo" class="logo">
            
        </div>

        <div class="consultarPedido">

            <label for="consultarPedido">Digite o número do celular...</label>
            <div class="containerBotao">
                <input type="text" name="consultarPedido" id="consultarPedido" max="99" placeholder="Consulte seu pedido" required>
                <button type="button" class="botaoConsultaPedido">Consultar</button>
            </div>

        </div>

        <div class="containerimgCarrinho">
            <img src="assets/images/bt_img/carrinho.png" alt="" id="cartimg">
        </div>

        <div class="containerCarrinhoNav esconde">

            <div class="BotaofecharCarrinho">
               <img src="assets/images/bt_img/fechar.png" alt="" class="x">
            </div>

            <div class="areaItemCarrinho">
                <div class="itemCarrinho">
                    
                    <div class="quantidadeItemDentroCarrinho">
                        <img src="assets/images/imgLanche/1.png" alt="item">
                        <div class="containerBtMaisMenosCarrinho">
                            <div class="btMenosCarrinho">
                                -
                            </div>
                            <div class="quantidade">
                                <input type="number" name="" class="inputCarrinho"  max="99" value="1" readonly>
                            </div>

                            <div class=" btMaisCarrinho">
                                +
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
                    <img src="assets/images/imgLanche/1.png" alt="lanche x" class ="imgIndividual">
                </div>
                <div class="infoLanche">
                    <div class="containerTituloInfoLanche">
                        <h4 class="nomeLanche">Nome lanche</h4>
                    </div>
                    <div class="btnContainer">
                        <div class="imgBotaoAbrirModal">
                            <div class="containerImgImagemBotao">
                                <img src="assets/images/bt_img/botao.png" alt="imagemAbrirModal">
                            </div>
                            <div class="containerValorImagemBtn">
                                <h4 class="precoItem">R$ 10.99</h4>
                            </div>

                        </div>
                    </div>
                </div>

                <!--INÍCIO CONFIGURAÇÃO DO ITEM LANCHE MODAL-->
                <div class="containerModal esconderModal ">
                    <div class="itemLancheModal">
                        <div class="imgLancheModal ">
                            <img src="assets/images/imgLanche/1.png" alt="lanche x" class="imgModalLanche">
                        </div>
                        <div class="infoLancheModal">
                            <div class="fecharModal">
                                    x
                            </div>
                            <div class="containerTituloInfoLancheModal">
                                <h1 class="nomeLancheModal ">MOdal</h1>
                                
                                <div class="qtItem">
                                
                                    <div class="btnMenos">
                                        -
                                    </div>
                                    <input type="number" name="inputCarrinho" class="inputCmodal" min ="1" value="1" readonly>
                                    <div class=" btnMais">
                                        +
                                    </div>
                                </div>
                            </div>
                                
                            <div class="btnContainerModal">

                                <div class="valorIndividualModal">
                                    <h4 class="precoItem"> 10.99</h4>
                                </div>

                                <div class="btnModal">
                                    <div class="containerValorImagemBtnModal">
                                        <input type="button" value="Adicionar ao carrinho"  class="botaoModal">
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
    <script src="assets/js/eventos.js"></script>
</body>
    <footer>
        <h1>FOOTER</h1>
    </footer>
</html>