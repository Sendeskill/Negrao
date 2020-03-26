$(document).ready(function() {
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

    $('#btn_envia').on('click', function() {
        alert('clicado');
    });
});

