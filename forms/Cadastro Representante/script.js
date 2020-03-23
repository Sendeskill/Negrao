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
    $( '#empresa_cep' ).focusout( function () {
        var cep = $( '#empresa_cep' ).val();
        cep = cep.replace( '-', '' );

        var urlstr = 'http://viacep.com.br/ws/' + cep + '/json/';
        $.ajax( {
            url: urlstr,
            type: 'get',
            dataType: 'json',
            success: function ( data ) {
                console.log( data );
                $( '#empresa_cidade' ).val( data.localidade );
                $( '#empresa_rua' ).val( data.logradouro );
                $( '#empresa_uf' ).val( data.uf );
                $( '#empresa_bairro' ).val( data.bairro );

            },
            error: function ( erro ) {
                console.log( erro )
            }
        } );
    } );
    $( '#avaliacao_cep' ).focusout( function () {
        var cep = $( '#avaliacao_cep' ).val();
        cep = cep.replace( '-', '' );

        var urlstr = 'http://viacep.com.br/ws/' + cep + '/json/';
        $.ajax( {
            url: urlstr,
            type: 'get',
            dataType: 'json',
            success: function ( data ) {
                console.log( data );
                $( '#avaliacao_cidade' ).val( data.localidade );
                $( '#avaliacao_rua' ).val( data.logradouro );
                $( '#avaliacao_uf' ).val( data.uf );
                $( '#avaliacao_bairro' ).val( data.bairro );

            },
            error: function ( erro ) {
                console.log( erro )
            }
        } );
    } );
} );





