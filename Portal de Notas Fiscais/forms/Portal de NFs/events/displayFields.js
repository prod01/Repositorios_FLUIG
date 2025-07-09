function displayFields(form,customHTML){
	
	form.setShowDisabledFields(true);
	
	formataCampos(form, customHTML);
	
	usuarioLogado(form, customHTML);

	datahj(form, customHTML);
	
	valida(form, customHTML);
	
}
//==============================================================================================================================================
function datahj(form, customHTML){

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

	form.setValue("TX_DtLancamento", dataFull);
	
}
//==============================================================================================================================================
function valida(form, customHTML){

	var numSolicitacao = getValue("WKNumProces");
	var c1 = DatasetFactory.createConstraint("processTaskPK.processInstanceId", numSolicitacao, numSolicitacao, ConstraintType.MUST);
	//var c2 = DatasetFactory.createConstraint("totalRuntime", 0, 1, ConstraintType.MUST_NOT);
	var constraints = new Array(c1);
	try{
		var dataset = DatasetFactory.getDataset("processTask", null, constraints, null);
		var linhas = dataset.getRowsCount() - 1
		var value = dataset.values[linhas][36] -1 //36
		log.info("Número movimentações: "+value) //9
		
		
		var data = dataset.values[0][7] //7
		log.info("Data abertura: "+data)
		
		var data = Math.abs(new Date().getTime() - data.getTime())
		var dias = Math.ceil(data / (1000 * 3600 * 24))
		
		//value >= 9 || dias >= 5
		if (false){
			form.setValue("CHAPATECNICO", "0e3d63e2-ace9-4a19-9cbb-73f41d63bf44")
		}
	}catch(e){
		log.info(e)
	}
	
}
//==============================================================================================================================================
function usuarioLogado(form, customHTML) {

	var matrUser = getValue("WKUser");
	var atividade = getValue("WKNumState");
	var nomeUser = "";
	var emailUser = "";
	var loginUser = "";
	var tiponota = "";

	var fields = [ "colleagueName", "mail", "login" ];
	var c1 = DatasetFactory.createConstraint("colleaguePK.colleagueId",
			matrUser, matrUser, ConstraintType.MUST);
	var c2 = DatasetFactory.createConstraint("colleaguePK.companyId",
			getValue("WKCompany"), getValue("WKCompany"), ConstraintType.MUST);
	
	var dataset = DatasetFactory.getDataset("colleague", fields, [ c1, c2 ],
			null);
	
	if (dsTemValor(dataset)) {
		nomeUser = dataset.getValue(0, "colleagueName");

		if (temValor(nomeUser)) {
			if ( atividade == "35" ){
				form.setValue("TX_ChapaLogado", nomeUser);
			}
			if ( atividade == "0" || atividade == "4" ){
				form.setValue("USUARIOLANCAMENTO", nomeUser);
			}
		}
	}
}
function temValor(valor) {
	if (valor != null && valor != undefined && valor.trim() != "") {
		return true;
	} else {
		return false;
	}
}
function dsTemValor(dataset) {
	if (dataset != null && dataset != undefined && dataset.rowsCount > 0) {
		return true;
	} else {
		return false;
	}
}
//==============================================================================================================================================
function formataCampos(form, customHTML) {
	
	var atividade = getValue("WKNumState");
	
	form.setValue("NUMEROATIVIDADE", atividade)
	
	form.setEnabled("USUARIOLANCAMENTO", false);
	
	if (atividade == 43){
		form.setValue("CB_Postagem", "0");
	}
	if (atividade != 43){
		form.setEnabled("TA_JustificaCompras", false);
	}
	
	if (atividade != 0 && atividade != 4 && atividade != 43){	
		form.setEnabled("TX_NumeroOcNota", false);
	}
		
//	if (atividade != 0 && atividade != 4){
//		customHTML.append("<script>campoTipoNota(document.getElementById('TX_DataRecebimento'), document.getElementById('radio-1'), document.getElementById('radio-2'), document.getElementById('TA_JustificaAtraso'));</script>");
//	}
	
	if (atividade != 0 && atividade != 4){	

		if (form.getValue("TIPONOTA") == "NORMAL") {
			customHTML.append('<script>document.getElementById("radio-1").checked = true</script>');
		}
		if (form.getValue("TIPONOTA") == "NFEX") {
			customHTML.append('<script>document.getElementById("radio-2").checked = true</script>');
		}
		
		form.setEnabled("RB_Tipo", false);
		form.setEnabled("TX_DataEmissao", false);
		form.setEnabled("TX_DataRecebimento", false);
		form.setEnabled("ZOOM_LocalRecebimento", false);
		form.setEnabled("CB_Cte", false);
		form.setEnabled("TX_NumeroOcCte", false);
		form.setEnabled("TX_NumeroNota", false);
		form.setEnabled("CB_Boleto", false);
		form.setEnabled("TX_DataVencimentoBoleto", false);
		form.setEnabled("TA_Observacao", false);
		form.setEnabled("TA_JustificaAtraso", false);
		customHTML.append('<script>$( "#BT_AnexoNf" ).prop( "disabled", true );</script>');
		customHTML.append('<script>$( "#BT_AnexoCte" ).prop( "disabled", true );</script>');
		customHTML.append('<script>$( "#BT_AnexoBoleto" ).prop( "disabled", true );</script>');
	}
	if (atividade == 4){
		customHTML.append('<script>$( "#BT_AnexoCte" ).prop( "disabled", false );</script>');
		customHTML.append('<script>$( "#TX_NumeroOcCte" ).prop( "disabled", false );</script>');
		customHTML.append('<script>$( "#TA_JustificaAtraso" ).prop( "disabled", false );</script>');
		customHTML.append('<script>$( "#BT_AnexoBoleto" ).prop( "disabled", true );</script>');
		form.setValue("CB_Postagem", 0);
	}
	//==============================================================================================================================================
	if (atividade != 11){
		form.setEnabled("CB_Gestor", false);
		form.setEnabled("TA_JustificaAprovGestor", false);
	}
	//==============================================================================================================================================
	if (atividade != 13 && atividade != 79 && atividade != 81){
		form.setEnabled("CB_Diretoria", false);
		form.setEnabled("TA_JustificaAprovDiretoria", false);
	}
	//==============================================================================================================================================
	if (atividade != 35 && atividade != 25 && atividade != 27 && atividade != 16 && atividade != 5){	
		form.setEnabled("CB_Postagem", false);
		form.setEnabled("CB_TipoNota", false);
	//==============================================================================================================================================
		form.setEnabled("TX_IDMOV", false);
		form.setEnabled("TX_IDMOV1", false);
		form.setEnabled("TX_IDMOV2", false);
		form.setEnabled("TX_IDMOV3", false);
		form.setEnabled("TX_IDMOV4", false);
	}
}
//==============================================================================================================================================