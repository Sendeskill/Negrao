function displayFields(form, customHTML) {
    var CURRENT_STATE = getValue("WKNumState");
    var CURRENT_PROCESS = getValue("WKNumProces");

    customHTML.append("<script> var CURRENT_STATE = " + getValue("WKNumState") + "; var CURRENT_USER = '" + getValue("WKUser") + "'; var CURRENT_PROCESS = " + getValue("WKNumProces") + "; </script>");
}
