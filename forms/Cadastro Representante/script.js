$(document).ready(function () {

    hideAndShowFields();
    triggerClick();
    disableAndEnableFields();

    var myCalendar = FLUIGC.calendar('.date-picker', {
        useCurrent: false
    });

    if (CURRENT_STATE === 0) {
        $('#indicacao_btn_pesquisar').on('click', function () {
            const urlCNPJ = 'https://receitaws.com.br/v1/cnpj/34215820000112';

            $.ajax({
                url: urlCNPJ,
                contentType: 'application/json',
                cache: false,
                method: 'GET',
                dataType: 'json',
                success: function (data) {
                    console.log(data);
                }
            });
        });

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
                    $('#representante_bairro').val(data.bairro); i8

                },
                error: function (erro) {
                    console.log(erro);
                }
            });
        });

        $('#empresa_cep').on('focusout', function () {
            var cep = $('#empresa_cep').val();
            cep = cep.replace('-', '');

            var urlstr = 'http://viacep.com.br/ws/' + cep + '/json/';
            $.ajax({
                url: urlstr,
                type: 'get',
                dataType: 'json',
                success: function (data) {
                    console.log(data);
                    $('#empresa_cidade').val(data.localidade);
                    $('#empresa_rua').val(data.logradouro);
                    $('#empresa_uf').val(data.uf);
                    $('#empresa_bairro').val(data.bairro);

                },
                error: function (erro) {
                    console.log(erro)
                }
            });
        });

        // $('#avaliacao_cep').on('focusout', function () {
        //     var cep = $('#avaliacao_cep').val();
        //     cep = cep.replace('-', '');

        //     var urlstr = 'http://viacep.com.br/ws/' + cep + '/json/';
        //     $.ajax({
        //         url: urlstr,
        //         type: 'get',
        //         dataType: 'json',
        //         success: function (data) {
        //             console.log(data);
        //             $('#avaliacao_cidade').val(data.localidade);
        //             $('#avaliacao_rua').val(data.logradouro);
        //             $('#avaliacao_uf').val(data.uf);
        //             $('#avaliacao_bairro').val(data.bairro);

        //         },
        //         error: function (erro) {
        //             console.log(erro)
        //         }
        //     });
        // });
    } else if (CURRENT_STATE === 12) {
        $('#btn_aprovar_cadastro').on('click', function() {
            $('input[name="cadastro_aprovado"]').val('S');
        });

        $('#btn_recusa_cadastro').on('click', function() {
            $('input[name="cadastro_aprovado"]').val('N');
        });
    }
});

function beforeSendValidate(currentStage, nextStage) {
    var msg = "";

    if (CURRENT_STATE === 0) {
        if ($('select[name="indicacao_empresa"]').val() == '') {
            msg += "É necessário selecionar a <strong>Empresa</strong>.<br>";
        }
    } else if (CURRENT_STATE === 6) {
        if ($('input[name="representante_selecionado"]').is(':checked') === false) {
            msg += "É necessário marcar o campo <strong>Representante Selecionado</strong>.";
        }
    } else if (CURRENT_STATE === 12) {
        if ($('input[name="cadastro_aprovado"]').val() == '') {
            msg += "É necessário aprovar ou desaprovar o cadastro e os documentos.";
        }
        if ($('input[name="cadastro_aprovado"]').val() === 'N') {
            msg += "É necessário aprovar o cadastro e os documentos para avançar.";
        }
    } else if (CURRENT_STATE === 21) {
        if ($('input[name="mdlog_ok"]').is(':checked') === false) {
            msg += "É necessário verificar o cadastro no MD-Log e Senior";
        }
    }

    if (msg !== "") {
        throw (msg);
    }
}

function triggerClick() {
    if (CURRENT_STATE === 0) {
        $('#toggle_indicacao').trigger('click');
    } else if (CURRENT_STATE === 6) {
        $('#toggle_avaliacao').trigger('click');
    }
}

function hideAndShowFields() {
    if (CURRENT_STATE === 0) {
        $('#toggle_avaliacao').hide();
        $('#toggle_representante').hide();
        $('#toggle_empresa').hide();
        $('#toggle_dados').hide();
        $('#toggle_documentos').hide();
        $('#toggle_contratos').hide();
    } else if (CURRENT_STATE === 6) {
        $('#toggle_empresa').hide();
        $('#toggle_dados').hide();
        $('#toggle_documentos').hide();
        $('#toggle_contratos').hide();
    } else if (CURRENT_STATE === 12) {
        $('#row_aprova_cadastro').show();
    } else if (CURRENT_STATE === 21) {
        $('#row_aprova_mdlog').show();
    }
}

function disableAndEnableFields() {
    if (CURRENT_STATE !== 0 && CURRENT_STATE !== 6) {
        $('#selecionado_sim').attr('checked', true);
    }
}
