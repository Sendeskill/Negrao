function displayFields(form, customHTML) {
    if (getValue("WKNumProces") != '') {
        form.setValue("id_processo", getValue("WKNumProces"));
    }

    customHTML.append("<script> var CURRENT_STATE = " + getValue("WKNumState") + "; var CURRENT_USER = '" + getValue("WKUser") + "'; var CURRENT_PROCESS = " + getValue("WKNumProces") + "; </script>");
}
