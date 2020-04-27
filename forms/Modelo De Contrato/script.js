$(document).ready(function () {
    var editor = FLUIGC.richeditor('editor');

    var conteudo = $('#conteudo_editor').val();

    if (conteudo !== '') {
        editor.setData(conteudo);
    }

    $('#salvar').on('click', function () {
        $('#conteudo_editor').val(editor.getData());
        FLUIGC.toast({
            title: '',
            message: 'Modelo salvo com sucesso.',
            type: 'success'
        });
    });
});
