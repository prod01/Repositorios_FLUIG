function displayFields(form,customHTML){

    form.setShowDisabledFields(true); // desabilita os set enable dos campos 
	form.setHidePrintLink(true); // // desabilita o botão de imprimir 
	usuarioLogado(form, customHTML)
	
	//variavel que recebe o codigo referente ao estado atual do processo.
	var Now_State = parseInt(getValue("WKNumState"));
		getValue("WKNumProces")
	form.setValue('N_SOLICITACAO',getValue("WKNumProces"))
	form.setValue('NUMERO_ATIVIDADE',Now_State)
	
	//Esta chamando a função 
	
    
    switch(Now_State){
        case 0:
            //método que desabilita a edição dos seguintes campos do formulário
             
           //CAMPOS NOVOS CONTRATOS 
             	form.setEnabled("NOME_SOLICITANTE", true);
	            form.setEnabled("CENTRO_DE_CUSTO", true); 
		        form.setEnabled("CLI_FOR", true);
		        form.setEnabled("NOME_CLI_FOR", true);
		        form.setEnabled("RESP_CENTRO_DE_CUSTO", true);		
		        form.setEnabled("TIPO_SOLICITACAO", true);
		        form.setEnabled("OBJ_SOLICITANTE", true);

		    //CAMPOS APROVADO LIDERANCA 
			    form.setEnabled("ESCOPO_APROVADO_LIDERANCA", false);
		        form.setEnabled("OBSERVACAO_LIDERANCA",false);
			//CAMPOS DE CONTRATOS E JURIDICO
		        form.setEnabled("OBS_CONTRATO_JURIDICO", false);
	            //form.setEnabled("ANEXO_CONTRATO_JURIDICO", false);
		        customHTML.append("<script>$('#ANEXO_CONTRATO_JURIDICO').prop('disabled', true);</script>");
	          
            break;
        case 5:
            //método que desabilita a edição dos seguintes campos do formulário
             
           //CAMPOS NOVOS CONTRATOS 
             	form.setEnabled("NOME_SOLICITANTE", false);
	            form.setEnabled("CENTRO_DE_CUSTO", false); 
		        form.setEnabled("CLI_FOR", false);
		        form.setEnabled("NOME_CLI_FOR", false);
		        form.setEnabled("RESP_CENTRO_DE_CUSTO", false);		
		        form.setEnabled("TIPO_SOLICITACAO", false);
		        form.setEnabled("OBJ_SOLICITANTE", false);
		        form.setEnabled("DATA_RECEBIMENTO", false);
		       //form.setEnabled("NUMERO_DO_CONTRATO", false);
		       //customHTML.append("<script>$('#ANEXOS_CONTRATO_ORIGEM').prop('disabled', true);</script>");

		    //CAMPOS APROVADO LIDERANCA 
			    form.setEnabled("ESCOPO_APROVADO_LIDERANCA", true);
		        form.setEnabled("OBSERVACAO_LIDERANCA",true);
			//CAMPOS DE CONTRATOS E JURIDICO
		        form.setEnabled("OBS_CONTRATO_JURIDICO", false);
		        form.setEnabled("ANEXO_CONTRATO_JURIDICO", false);
		        
		    customHTML.append("<script>$('#ANEXO_CONTRATO_JURIDICO').prop('disabled', true);</script>");
		        
		        
            break;

        case 12:
            //método que desabilita a edição dos seguintes campos do formulário
             
           //CAMPOS NOVOS CONTRATOS 
        		form.setEnabled("NOME_SOLICITANTE", false);
        		form.setEnabled("CENTRO_DE_CUSTO", false); 
        		form.setEnabled("CLI_FOR", false);
        		form.setEnabled("NOME_CLI_FOR", false);
        		form.setEnabled("RESP_CENTRO_DE_CUSTO", false);		
        		form.setEnabled("TIPO_SOLICITACAO", false);
        		form.setEnabled("OBJ_SOLICITANTE", false);
        		form.setEnabled("DATA_RECEBIMENTO", false);
        		//form.setEnabled("NUMERO_DO_CONTRATO", false);
        		customHTML.append("<script>$('#ANEXOS_CONTRATO_ORIGEM').prop('disabled', true);</script>");
        		
		    //CAMPOS APROVADO LIDERANCA 
			    form.setEnabled("ESCOPO_APROVADO_LIDERANCA", false);
		        form.setEnabled("OBSERVACAO_LIDERANCA",false);
			//CAMPOS DE CONTRATOS E JURIDICO
		        form.setEnabled("OBS_CONTRATO_JURIDICO", true);
	            //form.setEnabled("ANEXO_CONTRATO_JURIDICO", false);
		        customHTML.append("<script>$('#ANEXO_CONTRATO_JURIDICO').prop('disabled', true);</script>");
		       
		        
            break;
            
        case 13:
            //método que desabilita a edição dos seguintes campos do formulário
             
           //CAMPOS NOVOS CONTRATOS 
        		form.setEnabled("NOME_SOLICITANTE", false);
        		form.setEnabled("CENTRO_DE_CUSTO", false); 
        		form.setEnabled("CLI_FOR", false);
        		form.setEnabled("NOME_CLI_FOR", false);
        		form.setEnabled("RESP_CENTRO_DE_CUSTO", false);		
        		form.setEnabled("TIPO_SOLICITACAO", false);
        		form.setEnabled("OBJ_SOLICITANTE", false);
        		form.setEnabled("DATA_RECEBIMENTO", false);
        		//form.setEnabled("NUMERO_DO_CONTRATO", false);
        		customHTML.append("<script>$('#ANEXOS_CONTRATO_ORIGEM').prop('disabled', true);</script>");
		    //CAMPOS APROVADO LIDERANCA 
			    form.setEnabled("ESCOPO_APROVADO_LIDERANCA", false);
		        form.setEnabled("OBSERVACAO_LIDERANCA",false);
			//CAMPOS DE CONTRATOS E JURIDICO
		        form.setEnabled("OBS_CONTRATO_JURIDICO", false);
	            form.setEnabled("ANEXO_CONTRATO_JURIDICO", true);
		        //customHTML.append("<script>$('#ANEXO_CONTRATO_JURIDICO').prop('disabled', true);</script>");
	            
	            
            break;


    }

}
function usuarioLogado(form, customHTML) {

	var matrUser = getValue("WKUser");
	var atividade = String(getValue("WKNumState"));
	var nomeUser = "";
	var emailUser = "";
	var loginUser = "";
	
	var fields = [ "colleagueName", "mail", "login" ];
	var c1 = DatasetFactory.createConstraint("colleaguePK.colleagueId", 
			matrUser, matrUser, ConstraintType.MUST);
	var c2 = DatasetFactory.createConstraint("colleaguePK.companyId",
			getValue("WKCompany"), getValue("WKCompany"), ConstraintType.MUST);
	
	var dataset = DatasetFactory.getDataset("colleague", fields, [ c1, c2 ],
			null);
	
	if (dsTemValor(dataset)) {
		emailUser = dataset.getValue(0, "mail");

		if (temValor(emailUser)) {
			if ( atividade == "0" || atividade == "4" ){
				form.setValue("EMAIL_SOLICITANTE", emailUser);
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