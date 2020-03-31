$(document).ready(function () {
    var myCalendar = FLUIGC.calendar('.date-picker', {
        useCurrent: false
    });

    $('#toggle_auth').trigger('click');

    $('#representante_cep').on('focusout', function () {
        var cep = $('#representante_cep').val();
        cep = cep.replace('-', '');

        var urlstr = 'http://viacep.com.br/ws/' + cep + '/json/';
        $.ajax({
            url: urlstr,
            type: 'get',
            dataType: 'json',
            success: function (data) {
                $('#representante_cidade').val(data.localidade);
                $('#representante_rua').val(data.logradouro);
                $('#representante_uf').val(data.uf);
                $('#representante_bairro').val(data.bairro);
            },
            error: function (err) {
                FLUIGC.toast({
                    title: '',
                    message: 'Erro ao realizar a consulta.',
                    type: 'danger'
                });
            }
        });
    });

    $('#btn_envia').on('click', function () {
        var c1 = DatasetFactory.createConstraint("token_widget", $('input[name="auth"]').val(), $('input[name="auth"]').val(), ConstraintType.MUST);
        var c2 = DatasetFactory.createConstraint("id_processo", $('input[name="num_processo"]').val(), $('input[name="num_processo"]').val(), ConstraintType.MUST);
        var c3 = DatasetFactory.createConstraint("userSecurityId", "admin.fluig", "admin.fluig", ConstraintType.MUST);
        var ds = DatasetFactory.getDataset("dsChecklistPCP", null, [c1, c2, c3], null);

        if (!ds.values) {
            return FLUIGC.toast({
                title: '',
                message: 'Erro ao enviar os dados, verifique o <strong>Núm. Processo</strong> e o <strong>Token</strong>.',
                type: 'danger'
            });
        }

        // Validação
        var msg = "";

        if ($('input[name="representante_cpf"]').val() == '') {
            msg += "É necessário preencher o campo <strong>CPF</strong>.<br>";
        }
        if ($('input[name="representante_nome"]').val() == '') {
            msg += "É necessário preencher o campo <strong>Representante</strong>.<br>";
        }
        if ($('input[name="representante_nascimento"]').val() == '') {
            msg += "É necessário preencher o campo <strong>Data de Nascimento</strong>.<br>";
        }
        if ($('input[name="representante_rg"]').val() == '') {
            msg += "É necessário preencher o campo <strong>RG</strong>.<br>";
        }
        if ($('input[name="representante_org_expedidor"]').val() == '') {
            msg += "É necessário preencher o campo <strong>Orgão Expedidor</strong>.<br>";
        }
        if ($('input[name="representante_email"]').val() == '') {
            msg += "É necessário preencher o campo <strong>E-mail</strong>.<br>";
        }
        if ($('input[name="representante_telefone"]').val() == '') {
            msg += "É necessário preencher o campo <strong>Telefone</strong>.<br>";
        }
        if ($('input[name="representante_celular"]').val() == '') {
            msg += "É necessário preencher o campo <strong>Telefone 2 / Celular</strong>.<br>";
        }
        if ($('input[name="representante_num_core"]').val() == '') {
            msg += "É necessário preencher o campo <strong>Número CORE</strong>.<br>";
        }
        if ($('input[name="representante_uf_core"]').val() == '') {
            msg += "É necessário preencher o campo <strong>UF CORE</strong>.<br>";
        }
        if ($('input[name="representante_emissao_core"]').val() == '') {
            msg += "É necessário preencher o campo <strong>Emissão CORE</strong>.<br>";
        }
        if ($('input[name="representante_validade_core"]').val() == '') {
            msg += "É necessário preencher o campo <strong>Validade CORE</strong>.<br>";
        }
        if ($('input[name="representante_cep"]').val() == '') {
            msg += "É necessário preencher o campo <strong>CEP</strong>.<br>";
        }
        if ($('input[name="representante_logradouro"]').val() == '') {
            msg += "É necessário preencher o campo <strong>Logradouro</strong>.<br>";
        }
        if ($('input[name="representante_numero"]').val() == '') {
            msg += "É necessário preencher o campo <strong>Número</strong>.<br>";
        }
        if ($('input[name="representante_uf"]').val() == '') {
            msg += "É necessário preencher o campo <strong>UF</strong>.<br>";
        }
        if ($('input[name="representante_bairro"]').val() == '') {
            msg += "É necessário preencher o campo <strong>Bairro</strong>.<br>";
        }
        if ($('input[name="representante_cidade"]').val() == '') {
            msg += "É necessário preencher o campo <strong>Cidade</strong>.<br>";
        }
        if ($('input[name="dados_banco"]').val() == '') {
            msg += "É necessário preencher o campo <strong>Banco</strong>.<br>";
        }
        if ($('input[name="dados_agencia"]').val() == '') {
            msg += "É necessário preencher o campo <strong>Agência</strong>.<br>";
        }
        if ($('input[name="dados_conta"]').val() == '') {
            msg += "É necessário preencher o campo <strong>Conta</strong>.<br>";
        }
        if ($('input[name="tipo_conta"]').is(':checked') === false) {
            msg += "É necessário marcar o campo <strong>Tipo de Conta</strong>.<br>";
        }
        if ($('input[name="dados_cpf"]').val() == '') {
            msg += "É necessário preencher o campo <strong>Contador - CPF</strong>.<br>";
        }
        if ($('input[name="dados_nome"]').val() == '') {
            msg += "É necessário preencher o campo <strong>Contador - Nome Completo</strong>.<br>";
        }
        if ($('input[name="dados_crc"]').val() == '') {
            msg += "É necessário preencher o campo <strong>Contador - CRC</strong>.<br>";
        }

        if (msg !== "") {
            return FLUIGC.toast({
                title: '',
                message: msg,
                type: 'danger'
            });
        } else {
            sendData();
        }
    });
});

function sendData() {
    var wsUrl = "http://fluig.teste.voxelz.com.br/webdesk/ECMCardService?wsdl";

    var soapRequest = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.dm.ecm.technology.totvs.com/">' +
        '<soapenv:Header/>' +
        '<soapenv:Body>' +
        '   <ws:updateCardData>' +
        '      <companyId></companyId>' +
        '      <username>lucas.karger</username>' +
        '      <password>lucas123</password>' +
        '      <cardId>' + $('input[name="num_processo"]').val() + '</cardId>' +
        '      <cardData>' +
        '         <item>' +
        '            <field></field>' +
        '            <value></value>' +
        '         </item>' +
        '      </cardData>' +
        '   </ws:updateCardData>' +
        '</soapenv:Body>' +
        '</soapenv:Envelope>';

    //Enviando a requisição
    $.ajax({
        url: wsUrl,
        type: "POST",
        dataType: "xml",
        data: soapRequest,
        processData: false,
        contentType: "text/xml; charset=\"utf-8\"",
        success: function (data) {
            $('#btn_envia').attr('disabled', true);

            FLUIGC.toast({
                title: '',
                message: "Dados enviador, aguarde o retorno em seu e-mail.",
                type: 'success'
            });
        },
    })
}