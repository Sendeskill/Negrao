$(document).ready(function () {

    escondeCampos();

    if (CURRENT_STATE === 1 || CURRENT_STATE === 0){
        $('#indicacao_btn_pesquisar').on('click', function () {
            const urlCNPJ = 'https://receitaws.com.br/v1/cnpj/34215820000112';

            $.ajax({
                url: urlCNPJ,
                contentType: 'application/json',
                cache: false,
                method: 'GET',
                dataType: 'json',
                success: function(data) {
                    console.log(data);
                }
            });
        });

        $('#representante_cep').focusout(function () {
            var cep = $('#representante_cep').val();
            cep = cep.replace('-', '');

            var urlstr = 'http://viacep.com.br/ws/' + cep + '/json/';
            $.ajax({
                url: urlstr,
                type: 'get',
                dataType: 'json',
                success: function (data) {
                    console.log(data);
                    $('#representante_cidade').val(data.localidade);
                    $('#representante_rua').val(data.logradouro);
                    $('#representante_uf').val(data.uf);
                    $('#representante_bairro').val(data.bairro);i8

                },
                error: function (erro) {
                    console.log(erro)
                }
            });
        });

        $('#empresa_cep').focusout(function () {
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

        $('#avaliacao_cep').focusout(function () {
            var cep = $('#avaliacao_cep').val();
            cep = cep.replace('-', '');

            var urlstr = 'http://viacep.com.br/ws/' + cep + '/json/';
            $.ajax({
                url: urlstr,
                type: 'get',
                dataType: 'json',
                success: function (data) {
                    console.log(data);
                    $('#avaliacao_cidade').val(data.localidade);
                    $('#avaliacao_rua').val(data.logradouro);
                    $('#avaliacao_uf').val(data.uf);
                    $('#avaliacao_bairro').val(data.bairro);

                },
                error: function (erro) {
                    console.log(erro)
                }
            });
        });
    }
});

function escondeCampos() {
    $('#toggle_representante').hide();
    $('#toggle_empresa').hide();
    $('#toggle_dados').hide();
    $('#toggle_documentos').hide();
    $('#toggle_contratos').hide();
}



