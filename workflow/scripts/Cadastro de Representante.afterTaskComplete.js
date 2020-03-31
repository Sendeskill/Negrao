function afterTaskComplete(colleagueId, nextSequenceId, userList) {
    // Envia e-mail ao representante
    if (nextSequenceId == 12) {
        try {
            //Monta mapa com parâmetros do template
            var parametros = new java.util.HashMap();
            parametros.put("RAZAO_EMPRESA", hAPI.getCardValue("empresa_razao_social"));
            parametros.put("URL_FLUIG", "http://fluig.teste.voxelz.com.br/portal/001/Cadastro_Representante");
            parametros.put("TOKEN_PROCESSO", hAPI.getCardValue("token_widget"));
            parametros.put("NUM_PROCESSO", hAPI.getCardValue("id_processo"));

            //Este parâmetro é obrigatório e representa o assunto do e-mail
            parametros.put("subject", "Negrão - Cadastro de Representante");

            //Monta lista de destinatários
            var destinatarios = new java.util.ArrayList();
            destinatarios.add(hAPI.getCardValue("indicacao_email"));

            log.dir('ARRAYS LUCAS');
            log.dir(getValue("WKUser"));
            log.dir(parametros);
            log.dir(destinatarios);
            log.dir(hAPI.getCardValue("indicacao_email"));
            log.dir("FIM");
            
            //Envia e-mail
            notifier.notify(getValue("WKUser"), "cadastro_representante_email", parametros, destinatarios, "text/html");
        } catch (e) {
            log.dir('ERRO EMAIL VISH');
            log.dir(e);
        }
    }
}