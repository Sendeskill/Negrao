$(document).ready(function () {

    hideAndShowFields();
    triggerClick();
    disableAndEnableFields();

    var myCalendar = FLUIGC.calendar('.date-picker', {
        useCurrent: false
    });

    if (CURRENT_STATE === 0 || CURRENT_STATE === 1) {
        $('#indicacao_btn_pesquisar').on('click', function (e) {

            e.preventDefault();

            var cnpj = $('#indicacao_cnpj').val().replace(/[^0-9]/g, '');

            if (cnpj.length == 14) {

                $.ajax({
                    url: 'https://www.receitaws.com.br/v1/cnpj/' + cnpj,
                    method: 'GET',
                    dataType: 'jsonp',
                    complete: function (xhr) {

                        response = xhr.responseJSON;

                        if (response.status === 'OK') {
                            $('#toggle_empresa').show();

                            $('#toggle_indicacao').attr('aria-expanded', 'false');
                            $('#li_tab_indicacao').removeClass('active');
                            $('#tab_indicacao').removeClass('active');

                            $('#toggle_empresa').attr('aria-expanded', 'true');
                            $('#li_tab_empresa').addClass('active');
                            $('#tab_empresa').addClass('active');

                            // Agora preenchemos os campos com os valores retornados
                            $('#empresa_razao_social').val(response.nome);
                            $('#empresa_cnpj').val(response.cnpj);
                            // $('#empresa_num_alvara').val(response.municipio);
                            $('#empresa_cep').val(response.cep);
                            $('#empresa_logradouro').val(response.logradouro);
                            $('#empresa_complemento').val(response.complemento);
                            $('#empresa_numero').val(response.numero);
                            $('#empresa_uf').val(response.uf);
                            $('#empresa_bairro').val(response.bairro);
                            $('#empresa_cidade').val(response.municipio);

                            console.log('response', response)
                        } else {
                            alert(response.message);
                        }
                    }
                });

            } else {
                FLUIGC.toast({
                    title: '',
                    message: 'É necessário informar um CNPJ válido para realizar a consulta.',
                    type: 'danger'
                });
            }
        });

        $('select[name="indicacao_empresa"]').on('change', function () {
            $('input[name="indicacao_empresa_hidden"]').val($(this).val());
        });
    } else if (CURRENT_STATE === 12) {
        $('#btn_aprovar_cadastro').on('click', function () {
            $('input[name="cadastro_aprovado"]').val('S');
        });

        $('#btn_recusa_cadastro').on('click', function () {
            $('input[name="cadastro_aprovado"]').val('N');
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
                    $('#representante_bairro').val(data.bairro);
                    i8
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
    }
});

function beforeSendValidate(currentStage, nextStage) {
    var msg = "";

    if (CURRENT_STATE === 0 || CURRENT_STATE === 1) {
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
            msg += "É necessário verificar o cadastro no MD-Log e Senior.";
        }
    } else if (CURRENT_STATE === 25) {
        if ($('input[name="vincula_clientes"]').is(':checked') === false) {
            msg += "É necessário marcar o campo <strong>Clientes Vinculados</strong>.";
        }
    } else if (CURRENT_STATE === 44) {
        if ($('input[name="envia_tablet"]').is(':checked') === false) {
            msg += "É necessário marcar o campo <strong>Tablet Enviado</strong>.";
        }
    } else if (CURRENT_STATE === 46) {
        if ($('input[name="configura_acesso"]').is(':checked') === false) {
            msg += "É necessário marcar o campo <strong>Acesso Configurado</strong>.";
        }
    }

    if (msg !== "") {
        throw (msg);
    }
}

function triggerClick() {
    if (CURRENT_STATE === 0 || CURRENT_STATE === 1) {
        $('#toggle_indicacao').trigger('click');
    } else if (CURRENT_STATE === 6) {
        $('#toggle_avaliacao').trigger('click');
    } else if (CURRENT_STATE === 25 || CURRENT_STATE === 44 || CURRENT_STATE === 46) {
        $('#toggle_tarefas').trigger('click');
    } else if (CURRENT_STATE === 40) {
        $('#toggle_contratos').trigger('click');
    }
}

function hideAndShowFields() {
    if (CURRENT_STATE === 0 || CURRENT_STATE === 1) {
        $('#toggle_representante').hide();
        $('#toggle_avaliacao').hide();
        $('#toggle_empresa').hide();
        $('#toggle_dados').hide();
        $('#toggle_documentos').hide();
        $('#toggle_contratos').hide();
        $('#toggle_tarefas').hide();
    } else if (CURRENT_STATE === 6) {
        $('#row_aprova_representante').show();
        $('#toggle_representante').hide();
        $('#toggle_empresa').hide();
        $('#toggle_dados').hide();
        $('#toggle_documentos').hide();
        $('#toggle_contratos').hide();
        $('#toggle_tarefas').hide();
    } else if (CURRENT_STATE === 12) {
        $('#row_aprova_cadastro').show();
        $('#toggle_contratos').hide();
        $('#toggle_tarefas').hide();
    } else if (CURRENT_STATE === 21) {
        $('#row_aprova_mdlog').show();
        $('#toggle_contratos').hide();
        $('#toggle_tarefas').hide();
    } else if (CURRENT_STATE === 25) {
        $('#toggle_contratos').hide();
        $('#row_vincula_clientes').show();
    } else if (CURRENT_STATE === 44) {
        $('#row_envia_tablet').show();
    } else if (CURRENT_STATE === 46) {
        $('#row_configura_acesso').show();
    }
}

function disableAndEnableFields() {
    if (CURRENT_STATE !== 0 && CURRENT_STATE !== 1) {
        $('.input_indicacao').attr('readonly', true);

        $('select[name="indicacao_empresa"] option[value="' + $('input[name="indicacao_empresa_hidden"]').val() + '"]').attr('selected', 'selected');
        $('select[name="indicacao_empresa"]').attr('disabled', true);
    } else if (CURRENT_STATE !== 12) {
        $('.input_cadastro_rep').attr('readonly', true);
    }
}
