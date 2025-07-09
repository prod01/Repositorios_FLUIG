function displayFields(form,customHTML){
	
	form.setShowDisabledFields(true);

	datahj(form, customHTML);
	
	formataCampos(form, customHTML);
	
}
//==============================================================================================================================================
function datahj(form, customHTML){
	
	var proxAtividade = getValue("WKNextState");

	var dataH = new Date();
	
	var d = dataH.getDate();
	var m = dataH.getMonth() + 1;
	var a = dataH.getFullYear();
	
	if (d < 10) {
		d = "0" + d;
	}
	if (m < 10) {
		m = "0" + m;
	}
	
	var dia = d + "/" + m + "/" + a;

	var h = dataH.getHours();
	var m = dataH.getMinutes();
	
	if (h < 10) {
		h = "0" + h;
	}
	if (m < 10) {
		m = "0" + m;
	}
	
	var hor = h + ":" + m;
	
	var dataFull = dia + " " + hor;

	if (proxAtividade < 11){
		form.setValue("DATASOLICITACAO", dia);
		form.setValue("HORASOLICITACAO", hor);
	}

	form.setValue("DATAFINALIZACAO", dia);
	
}
//==================================================================================================================================
function formataCampos(form, customHTML) {
	
	var atividade = getValue("WKNumState");
	
	form.setValue("NUMATIVIDADE", atividade);
	
	if (atividade != 24){
		form.setEnabled("FINANCEIROAPROVA", false);
	}
	
	if (atividade != 36){
		form.setEnabled("COMPRASAPROVA", false);
		form.setEnabled("OBSCOMPRAS", false);
	}

	if (atividade == 4 || atividade == 0 ){
		form.setEnabled("FINANCEIROAPROVA", false);
		form.setEnabled("FINANCEIROLIMITE", false);
		form.setEnabled("FINANCEIROOBS", false);
		form.setEnabled("CADASTRODADOS", false);
		form.setEnabled("CADASTROOBS", false);

	}
	

	if (atividade != 14 && atividade != 27){
		form.setEnabled("CADASTRODADOS", false);
		form.setEnabled("CADASTROCLIFOR", false);
		form.setEnabled("CADASTROOBS", false);
	}
	
}