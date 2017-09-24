var page = {
    pedidos: [],
    database: firebase.database(),
    databaseRef: '/pedidos/',
    tablePedidos: document.querySelector("#table-pedidos"),
    btnVoltarListaPedido: document.querySelector("#btnVoltarListaPedido"),
    btnCriarNovoPedido: document.querySelector("#btnCriarNovoPedido"),
    btnVoltar: document.querySelector("#btnVoltar"),
    btnCriarPedido: document.querySelector("#btnCriarPedido"),
    btnBuscarPedido: document.querySelector("#btnBuscarPedido"),
    searchPedidoData: document.querySelector("#data-inicio-field"),
    nomeCliente: document.querySelector("#nomeCliente"),
    telCliente: document.querySelector("#telCliente"),
    valorPago: document.querySelector("#valorPago"),
    valorAPagar: document.querySelector("#valorAPagar"),
    dataCriacao: document.querySelector("#dataCriacao"),
    dataEntrega: document.querySelector("#dataEntrega"),
    qtdCoxinhaLista: document.querySelector("#qtdCoxinhaLista"),
    valorCoxinhaLista: document.querySelector("#valorCoxinhaLista"),
    qtdKibeLista: document.querySelector("#qtdKibeLista"),
    valorKibeLista: document.querySelector("#valorKibeLista"),
    qtdCarneLista: document.querySelector("#qtdCarneLista"),
    valorCarneLista: document.querySelector("#valorCarneLista"),
    qtdMilhoLista: document.querySelector("#qtdMilhoLista"),
    valorMilhoLista: document.querySelector("#valorMilhoLista"),
    qtdCarneSecaLista: document.querySelector("#qtdCarneSecaLista"),
    valorCarneSecaLista: document.querySelector("#valorCarneSecaLista"),
    qtdQSimplesLista: document.querySelector("#qtdQSimplesLista"),
    valorQSimplesLista: document.querySelector("#valorQSimplesLista"),
    qtdQAlhoLista: document.querySelector("#qtdQAlhoLista"),
    valorQAlhoLista: document.querySelector("#valorQAlhoLista"),
    qtdQOreganoLista: document.querySelector("#qtdQOreganoLista"),
    valorQOreganoLista: document.querySelector("#valorQOreganoLista"),
    qtdQAzeitonaLista: document.querySelector("#qtdQAzeitonaLista"),
    valorQAzeitonaLista: document.querySelector("#valorQAzeitonaLista"),
    qtdTopBacalhauLista: document.querySelector("#qtdTopBacalhauLista"),
    valorTopBacalhauLista: document.querySelector("#valorTopBacalhauLista"),
    qtdBacalhauLista: document.querySelector("#qtdBacalhauLista"),
    valorBacalhauLista: document.querySelector("#valorBacalhauLista"),
    qtdCalabresaLista: document.querySelector("#qtdCalabresaLista"),
    valorCalabresaLista: document.querySelector("#valorCalabresaLista"),
    qtdSalsichaLista: document.querySelector("#qtdSalsichaLista"),
    valorSalsichaLista: document.querySelector("#valorSalsichaLista"),
    qtdPresuntoLista: document.querySelector("#qtdPresuntoLista"),
    valorPresuntoLista: document.querySelector("#valorPresuntoLista"),
    qtdCamaraoLista: document.querySelector("#qtdCamaraoLista"),
    valorCamaraoLista: document.querySelector("#valorCamaraoLista"),
    qtdChurrosLeiteLista: document.querySelector("#qtdChurrosLeiteLista"),
    valorChurrosLeiteLista: document.querySelector("#valorChurrosLeiteLista"),
    qtdChurrosChocLeiteLista: document.querySelector("#qtdChurrosChocLeiteLista"),
    valorChurrosChocLeiteLista: document.querySelector("#valorChurrosChocLeiteLista"),
    qtdChurrosChocLista: document.querySelector("#qtdChurrosChocLista"),
    valorChurrosChocLista: document.querySelector("#valorChurrosChocLista"),
    qtdVariadosLista: document.querySelector("#qtdVariadosLista"),
    valorVariadosLista: document.querySelector("#valorVariadosLista"),
    qtdAipimCarneSecaLista: document.querySelector("#qtdAipimCarneSecaLista"),
    valorAipimCarneSecaLista: document.querySelector("#valorAipimCarneSecaLista"),
    valorTotal: document.querySelector("#valorTotal"),
    obsPedidoLista: document.querySelector("#obsPedidoLista")
}

var pageCriarPedido = {
    pedidoNomeCliente: document.querySelector("#pedidoNomeCliente"),
    pedidoTelCliente: document.querySelector("#pedidoTelCliente"),
    pedidoDataCriacao: document.querySelector("#pedidoDataCriacao"),
    pedidoDataEntrega: document.querySelector("#pedidoDataEntrega"),
    pedidoValorPago: document.querySelector("#pedidoValorPago"),
    pedidoValoraPagar: document.querySelector("#pedidoValoraPagar"),
    qtdCoxinha: document.querySelector("#qtdCoxinha"),
    valorCoxinha: document.querySelector("#valorCoxinha"),
    qtdKibe: document.querySelector("#qtdKibe"),
    valorKibe: document.querySelector("#valorKibe"),
    qtdCarne: document.querySelector("#qtdCarne"),
    valorCarne: document.querySelector("#valorCarne"),
    qtdMilho: document.querySelector("#qtdMilho"),
    valorMilho: document.querySelector("#valorMilho"),
    qtdCarneSeca: document.querySelector("#qtdCarneSeca"),
    valorCarneSeca: document.querySelector("#valorCarneSeca"),
    qtdQSimples: document.querySelector("#qtdQSimples"),
    valorQSimples: document.querySelector("#valorQSimples"),
    qtdQAlho: document.querySelector("#qtdQAlho"),
    valorQAlho: document.querySelector("#valorQAlho"),
    qtdQOregano: document.querySelector("#qtdQOregano"),
    valorQOregano: document.querySelector("#valorQOregano"),
    qtdQAzeitona: document.querySelector("#qtdQAzeitona"),
    valorQAzeitona: document.querySelector("#valorQAzeitona"),
    qtdTopBacalhau: document.querySelector("#qtdTopBacalhau"),
    valorTopBacalhau: document.querySelector("#valorTopBacalhau"),
    qtdBacalhau: document.querySelector("#qtdBacalhau"),
    valorBacalhau: document.querySelector("#valorBacalhau"),
    qtdCalabresa: document.querySelector("#qtdCalabresa"),
    valorCalabresa: document.querySelector("#valorCalabresa"),
    qtdSalsicha: document.querySelector("#qtdSalsicha"),
    valorSalsicha: document.querySelector("#valorSalsicha"),
    qtdPresunto: document.querySelector("#qtdPresunto"),
    valorPresunto: document.querySelector("#valorPresunto"),
    qtdCamarao: document.querySelector("#qtdCamarao"),
    valorCamarao: document.querySelector("#valorCamarao"),
    qtdChurrosLeite: document.querySelector("#qtdChurrosLeite"),
    valorChurrosLeite: document.querySelector("#valorChurrosLeite"),
    qtdChurrosChocLeite: document.querySelector("#qtdChurrosChocLeite"),
    valorChurrosChocLeite: document.querySelector("#valorChurrosChocLeite"),
    qtdChurrosChocolate: document.querySelector("#qtdChurrosChocolate"),
    valorChurrosChocolate: document.querySelector("#valorChurrosChocolate"),
    qtdVariados: document.querySelector("#qtdVariados"),
    valorVariados: document.querySelector("#valorVariados"),
    qtdAipimCarneSeca: document.querySelector("#qtdAipimCarneSeca"),
    valorAipimCarneSeca: document.querySelector("#valorAipimCarneSeca"),
    valorTotalPedido: document.querySelector("#valorTotalPedido"),
    obsPedido: document.querySelector("#obsPedido")
}

window.addEventListener('load', getPedidos);

function getPedidos() {
    page.database.ref(page.databaseRef).once('value').then(function(snapshot){
        snapshot.forEach(function(pedidoRef) {
            var tempPedido = pedidoRef.val();
            tempPedido.uid = pedidoRef.key;
            page.pedidos[pedidoRef.key] = tempPedido;
            preencheTabelaPedido(tempPedido);       
        });
    });
}

page.btnCriarNovoPedido.addEventListener('click', function(){
    $("#listaPedido").hide();
    $("#criarPedido").show();
});

page.btnVoltarListaPedido.addEventListener('click', function(){
    $("#listaDetalhePedido").hide();
    $("#listaPedido").show();
});

page.btnVoltar.addEventListener('click', function(){
    $("#criarPedido").hide();
    $("#listaPedido").show();
});

page.btnBuscarPedido.addEventListener('click', function(){
    limparTabelaPedido();
    var dataCriacao = $(page.searchPedidoData).val();
    var dataCriacaoFormat = new Date(dataCriacao);
    
    for(var key in page.pedidos) {
        var dataFormatada = new Date(page.pedidos[key].datacriacao);
        if(dataCriacaoFormat == dataFormatada)
        {
            preencheTabelaPedido(page.pedidos[key]);        
            console.log(page.pedidos[key].datacriacao);
    }
    if(dataCriacao == "") {
        preencheTabelaPedido(page.pedidos[key]);   
    }
}
    console.log(page.searchPedidoData.value);
});

page.btnCriarPedido.addEventListener('click', function(){
    var tempPedido = {
        pedidoNomeCliente: pageCriarPedido.pedidoNomeCliente.value,
        pedidoTelCliente: pageCriarPedido.pedidoTelCliente.value,
        pedidoDataCriacao: pageCriarPedido.pedidoDataCriacao.value,
        pedidoDataEntrega: pageCriarPedido.pedidoDataEntrega.value,
        pedidoValorPago: pageCriarPedido.pedidoValorPago.value,
        pedidoValoraPagar: pageCriarPedido.pedidoValoraPagar.value,
        qtdCoxinha: pageCriarPedido.qtdCoxinha.value,
        valorCoxinha: pageCriarPedido.valorCoxinha.value,
        qtdKibe: pageCriarPedido.qtdKibe.value,
        valorKibe: pageCriarPedido.valorKibe.value,
        qtdCarne: pageCriarPedido.qtdCarne.value,
        valorCarne: pageCriarPedido.valorCarne.value,
        qtdMilho: pageCriarPedido.qtdMilho.value,
        valorMilho: pageCriarPedido.valorMilho.value,
        qtdCarneSeca: pageCriarPedido.qtdCarneSeca.value,
        valorCarneSeca: pageCriarPedido.valorCarneSeca.value,
        qtdQSimples: pageCriarPedido.qtdQSimples.value,
        valorQSimples: pageCriarPedido.valorQSimples.value,
        qtdQAlho: pageCriarPedido.qtdQAlho.value,
        valorQAlho: pageCriarPedido.valorQAlho.value,
        qtdQOregano: pageCriarPedido.qtdQOregano.value,
        valorQOregano: pageCriarPedido.valorQOregano.value,
        qtdQAzeitona: pageCriarPedido.qtdQAzeitona.value,
        valorQAzeitona: pageCriarPedido.valorQAzeitona.value,
        qtdTopBacalhau: pageCriarPedido.qtdTopBacalhau.value,
        valorTopBacalhau:pageCriarPedido.valorTopBacalhau.value,
        qtdBacalhau: pageCriarPedido.qtdBacalhau.value,
        valorBacalhau: pageCriarPedido.valorBacalhau.value,
        qtdCalabresa: pageCriarPedido.qtdCalabresa.value,
        valorCalabresa: pageCriarPedido.valorCalabresa.value,
        qtdSalsicha: pageCriarPedido.qtdSalsicha.value,
        valorSalsicha: pageCriarPedido.valorSalsicha.value,
        qtdPresunto: pageCriarPedido.qtdPresunto.value,
        valorPresunto: pageCriarPedido.valorPresunto.value,
        qtdCamarao: pageCriarPedido.qtdCamarao.value,
        valorCamarao: pageCriarPedido.valorCamarao.value,
        qtdChurrosLeite: pageCriarPedido.qtdChurrosLeite.value,
        valorChurrosLeite:pageCriarPedido.valorChurrosLeite.value,
        qtdChurrosChocLeite:pageCriarPedido.qtdChurrosChocLeite.value,
        valorChurrosChocLeite:pageCriarPedido.valorChurrosChocLeite.value,
        qtdChurrosChocolate:pageCriarPedido.qtdChurrosChocolate.value,
        valorChurrosChocolate:pageCriarPedido.valorChurrosChocolate.value,
        qtdVariados: pageCriarPedido.qtdVariados.value,
        valorVariados: pageCriarPedido.valorVariados.value,
        qtdAipimCarneSeca:pageCriarPedido.qtdAipimCarneSeca.value,
        valorAipimCarneSeca:pageCriarPedido.valorAipimCarneSeca.value,
        obsPedido: pageCriarPedido.obsPedido.value,
        valorTotalPedido:pageCriarPedido.valorTotalPedido.value
    }
    criarPedido(tempPedido);
});

function preencheTabelaPedido(tempPedido) {
    var html = '';
    html += '<tr class="idDosPedidos" id="' + tempPedido.uid + '">';
    html += '<td class="nomeClientePedido">' + tempPedido.pedidoNomeCliente + '</a></td>';
    html += '<td class="dataPedido">' + tempPedido.pedidoDataCriacao + '</td>';
    html += '<td class="dataPedido">' + tempPedido.pedidoDataEntrega + '</td>';
    html += '<td class="valorPedido">R$' + tempPedido.valorTotalPedido + '</td>';
    html += '<td ><a onclick="verPedido(\'' + tempPedido.uid + '\')" href="#" class="editar-clube"><i class="material-icons">pageview</i></a>' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + '<a onclick="excluirPedido(\'' + tempPedido.uid + '\' )" href="#" class="excluir-pedido"><i class="material-icons"><i class="material-icons">remove_circle</i></td>';
    html += '</tr>';
    $('#body-pedido').append(html);
}

function criarPedido(tempPedido) {
    page.database.ref(page.databaseRef).push(tempPedido).then(swal("", "Pedido cadastrado", "success"));
    $("#criarPedido").hide();
    $("#listaPedido").show();
    limparTabelaPedido();
    getPedidos();
}

function verPedido(idPedido) {
    for(var key in page.pedidos) {
        if(idPedido == page.pedidos[key].uid) {
            preencheCamposDetalhePedido(page.pedidos[key]);
        }
    }
}

function excluirPedido(idPedido) {
    page.database.ref(page.databaseRef+idPedido).remove().then(swal("", "Pedido excluído", "error"));
    limparTabelaPedido();
    getPedidos();
}

function preencheCamposDetalhePedido(tempPedido)
{
    $("#listaPedido").hide();
    $("#listaDetalhePedido").show();
    if(tempPedido.pedidoValorPago == undefined) tempPedido.pedidoValorPago = 0;
        page.nomeCliente.innerHTML = tempPedido.pedidoNomeCliente;
        page.telCliente.innerHTML = "TEL: " + tempPedido.pedidoTelCliente;       
        page.dataCriacao.innerHTML = tempPedido.pedidoDataCriacao;
        page.dataEntrega.innerHTML = tempPedido.pedidoDataEntrega;
        page.valorPago.innerHTML = "R$" + tempPedido.pedidoValorPago;
        page.valorAPagar.innerHTML = "R$" + tempPedido.pedidoValoraPagar;
        page.qtdCoxinhaLista.innerHTML = tempPedido.qtdCoxinha;
        page.valorCoxinhaLista.innerHTML = "R$" +  tempPedido.valorCoxinha;
        page.qtdKibeLista.innerHTML = tempPedido.qtdKibe;
        page.valorKibeLista.innerHTML = "R$" + tempPedido.valorKibe;
        page.qtdCarneLista.innerHTML = tempPedido.qtdCarne;
        page.valorCarneLista.innerHTML = "R$" + tempPedido.valorCarne;
        page.qtdMilhoLista.innerHTML = tempPedido.qtdMilho;
        page.valorMilhoLista.innerHTML = "R$" + tempPedido.valorMilho;
        page.qtdCarneSecaLista.innerHTML = tempPedido.qtdCarneSeca;
        page.valorCarneSecaLista.innerHTML = "R$" + tempPedido.valorCarneSeca;
        page.qtdQSimplesLista.innerHTML = tempPedido.qtdQSimples;
        page.valorQSimplesLista.innerHTML = "R$" + tempPedido.valorQSimples;
        page.qtdQAlhoLista.innerHTML = tempPedido.qtdQAlho;
        page.valorQAlhoLista.innerHTML = "R$" + tempPedido.valorQAlho;
        page.qtdQOreganoLista.innerHTML = tempPedido.qtdQOregano;
        page.valorQOreganoLista.innerHTML = "R$" + tempPedido.valorQOregano;
        page.qtdQAzeitonaLista.innerHTML = tempPedido.qtdQAzeitona;
        page.valorQAzeitonaLista.innerHTML = "R$" + tempPedido.valorQAzeitona;
        page.qtdTopBacalhauLista.innerHTML = tempPedido.qtdTopBacalhau;
        page.valorTopBacalhauLista.innerHTML = "R$" + tempPedido.valorTopBacalhau;
        page.qtdBacalhauLista.innerHTML = tempPedido.qtdBacalhau;
        page.valorBacalhauLista.innerHTML = "R$" + tempPedido.valorBacalhau;
        page.qtdCalabresaLista.innerHTML = tempPedido.qtdCalabresa;
        page.valorCalabresaLista.innerHTML = "R$" + tempPedido.valorCalabresa;
        page.qtdSalsichaLista.innerHTML = tempPedido.qtdSalsicha;
        page.valorSalsichaLista.innerHTML = "R$" + tempPedido.valorSalsicha;
        page.qtdPresuntoLista.innerHTML = tempPedido.qtdPresunto;
        page.valorPresuntoLista.innerHTML = "R$" + tempPedido.valorPresunto;
        page.qtdCamaraoLista.innerHTML = tempPedido.qtdCamarao;
        page.valorCamaraoLista.innerHTML = "R$" + tempPedido.valorCamarao;
        page.qtdChurrosLeiteLista.innerHTML = tempPedido.qtdChurrosLeite;
        page.valorChurrosLeiteLista.innerHTML = "R$" + tempPedido.valorChurrosLeite;
        page.qtdChurrosChocLeiteLista.innerHTML = tempPedido.qtdChurrosChocLeite;
        page.valorChurrosChocLeiteLista.innerHTML = "R$" + tempPedido.valorChurrosChocLeite;
        page.qtdChurrosChocLista.innerHTML = tempPedido.qtdChurrosChocolate;
        page.valorChurrosChocLista.innerHTML = "R$" + tempPedido.valorChurrosChocolate;
        page.qtdVariadosLista.innerHTML = tempPedido.qtdVariados
        page.valorVariadosLista.innerHTML = "R$" + tempPedido.valorVariados
        page.qtdAipimCarneSecaLista.innerHTML = tempPedido.qtdAipimCarneSeca;
        page.valorAipimCarneSecaLista.innerHTML = "R$" + tempPedido.valorAipimCarneSeca;
        page.valorTotal.innerHTML = "R$" + tempPedido.valorTotalPedido;
        page.obsPedidoLista.innerHTML = tempPedido.obsPedido;
}

function limparTabelaPedido() {
    var pedidosNaTela = document.querySelectorAll('.idDosPedidos');
    pedidosNaTela.forEach(function () {
        page.tablePedidos.querySelector('#body-pedido').innerHTML = '';
    });
}