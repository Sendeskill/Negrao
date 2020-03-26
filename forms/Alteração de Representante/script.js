$( document ).ready( function () {
    $( '#representante_cep' ).focusout( function () {
        var cep = $( '#representante_cep' ).val();
        cep = cep.replace( '-', '' );

        var urlstr = 'http://viacep.com.br/ws/' + cep + '/json/';
        $.ajax( {
            url: urlstr,
            type: 'get',
            dataType: 'json',
            success: function ( data ) {
                console.log( data );
                $( '#representante_cidade' ).val( data.localidade );
                $( '#representante_rua' ).val( data.logradouro );
                $( '#representante_uf' ).val( data.uf );
                $( '#representante_bairro' ).val( data.bairro );

            },
            error: function ( erro ) {
                console.log( erro )
            }
        } );
    } );


} );





