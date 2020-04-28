function displayFields(form, customHTML) {
    if (getValue("WKNumProces") != '') {
        form.setValue("id_processo", getValue("WKNumProces"));

        // Token para o widget
        var result = '';
        for (var i = 80; i > 0; --i) {
            result += (Math.floor(Math.random() * 256)).toString(16);
        }
        form.setValue("token_widget", result);
    }

    customHTML.append("<script> var CURRENT_STATE = " + getValue("WKNumState") + "; var CURRENT_USER = '" + getValue("WKUser") + "'; var CURRENT_PROCESS = " + getValue("WKNumProces") + "; </script>");
}
