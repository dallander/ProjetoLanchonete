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
<body class="body">

    <!--INÍCIO CONFIGURAÇÃO DO NAVBAR-->
    <nav id="containerNavTop">
        <div class="menuNav">
            <img src="assets/images/logo/logodom.png" alt="logo" class="logo">
            
        </div>

        <div class="consultarPedido">

            <label for="consultarPedido">Pesquisar Produto...</label>
            <div class="containerBotao">
                <input type="text" name="consultarPedido" id="consultarPedido"  placeholder="Digite o nome do produto" required>
            </div>

        </div>
        <div class="containerLogin">
            <section class="containerImgUser ">
                <img src="assets/images/usr/user.png" alt="login"><span>Minha conta</span>

            </section>
            <section class="login esconde">
                <label for="login">Celular</label>
                <input type="text" name="login" id="login" placeholder="21 123456789">
                <label for="senha">Senha</label>
                <input type="password" name="senha" id="senha">
                <button type="button" class="lembrarSenha">Esqueci a senha</button>
                <button type="button" id="entrar">Entrar</button>
            
            </section>
        </div>

        <div class="containerimgCarrinho">
            <img src="assets/images/bt_img/carrinho.png" title="Abrir Carrinho" alt="Botao Abrir Carrinho" id="cartimg">
        </div>

        <div class="containerCarrinhoNav esconde">

            <ul class="item modelo ">
                <li class="containerImagemCarrinho">
                    <img src="assets/images/imgLanche/2.png" alt="imagem carrinho" class="imgItem" >
                </li>

                <li class="containerPrecoItemCarrinho">
                    <div class="precoItemCarrinho">R$ 10</div>
                </li>

                <li class="containerCarrinhoMaisMenos">
                    <div class="menosCarrinho">-</div>
                    <input type="number" name="qtdCarrinhonav" class="qtCarrinhonav" value="100" readonly>
                    <div class="maisCarrinho">+</div>
                    <div title="Excluir" class="excluirItem">X</div>
                </li>
                
            </ul>

            <div title="Fechar carrinho" class="xCarrinho">X</div>
    </nav>

    
    <div class="comprar">
            <div class="valorTotal">
                R$ 100.00
            </div>
            <div class="btConfirmaCompra">
                Concluir Pedido
            </div>
        </div>
    </div>


    <!--FIM CONFIGURAÇÃO DO NAVBAR-->
    <main class="containerMain">
    <!--INÍCIO CONFIGURAÇÃO SECTION LANCHE-->
        <section class="sectionLanche">
            <!--INÍCIO CONFIGURAÇÃO DO ITEM LANCHE-->
            <div class="itemLanche modelo excluido">
                <div class="imgLanche">
                    <img src="assets/images/imgLanche/1.png" alt="lanche x" class ="imgIndividual">
                </div>
                <div class="infoLanche">
                    <div class="containerTituloInfoLanche">
                        <h4 class="nomeLanche">Nome lanche</h4>
                    </div>
                    <p class="desc">
                        asdasdd
                    </p>
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
                                <p class="descModal">
                                    asdasdd
                                </p>
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
                                        <input type="button" value="Pôr no carrinho"  class="botaoModal" readonly>
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
    <section class="sectionForm esconde">
        <form action="" class="formulario">
            <div class="fecharForm ">X</div>
            <label for="">Nome:</label>
            <input type="text" name="nome" id="nome" placeholder="Digite seu nome" required>
            <label for="">Celular:</label>
            <input type="number" name="celular" id="celular" placeholder="21 123456789" required>
            <label for="">Endereço:</label>
            <input type="text" name="endereco" id="endereco" placeholder="Digite seu Endereço" required>
            <label for="">Número da casa:</label>
            <input type="number" name="numero" id="numero" placeholder="Digite o número da sua casa" required>
            <label for="">Bairro:</label>
            <input type="text" name="bairro" id="bairro" placeholder="Digite seu Bairro" required>
            <button type="submit">Enviar</button>
        </form>
    </section>

    <section class="pagamentoPix">
        <h2>Pagamento via Pix</h2>
        <div class="containerImg">
            <img src="assets/images/pagamento/pix.jpg" alt="img">
        </div>
    </section>

    <script src="assets/js/ajax.js"></script>
    <script src="assets/js/eventos.js"></script>
</body>
    <footer>
        <img src="assets/images/logo/minhalogo.png" alt="">
         <p>&copy; 2025 Leão. Todos os direitos reservados.</p>
        
    </footer>
</html>