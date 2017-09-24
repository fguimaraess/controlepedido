var page = {
    pedidos: [],
    database: firebase.database(),
    databaseRef: '/pedidos/',
    btnVoltarListaPedido: document.querySelector("#btnVoltarListaPedido"),
    btnCriarNovoPedido: document.querySelector("#btnCriarNovoPedido"),
    btnVoltar: document.querySelector("#btnVoltar"),
    btnCriarPedido: document.querySelector("#btnCriarPedido"),
    nomeCliente: document.querySelector("#nomeCliente")
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

page.btnCriarPedido.addEventListener('click', function(){
    
});

function preencheTabelaPedido(tempPedido) {
    var html = '';
    html += '<tr class="idDosPedidos" id="' + tempPedido.uid + '">';
    html += '<td class="nomeClientePedido">' + tempPedido.cliente + '</a></td>';
    html += '<td class="dataPedido">' + tempPedido.datacriacao + '</td>';
    html += '<td class="dataPedido">' + tempPedido.dataentrega + '</td>';
    html += '<td class="valorPedido">R$' + tempPedido.valortotal + '</td>';
    html += '<td ><a onclick="editarPedido(\'' + tempPedido.uid + '\')" href="#" class="editar-clube"><i class="material-icons">pageview</i></a>' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + '<a onclick="excluirPeddo(\'' + tempPedido.uid + '\' )" href="#" class="excluir-clube"><i class="material-icons"><i class="material-icons">remove_circle</i></td>';
    html += '</tr>';
    $('#body-pedido').append(html);
}

function editarPedido(idPedido) {
    for(var key in page.pedidos) {
        if(idPedido == page.pedidos[key].uid) {
            preencheCamposDetalhePedido(page.pedidos[key]);
        }
    }
}

function preencheCamposDetalhePedido(tempPedido)
{
    $("#listaPedido").hide();
    $("#listaDetalhePedido").show();
    page.nomeCliente.innerHTML = tempPedido.cliente;
}