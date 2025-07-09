function validateForm(form){
	
	
	//variavel que recebe o codigo referente ao estado atual do processo.
    var Now_State =parseInt(getValue("WKNumState"));
    var Next_State =parseInt(getValue("WKNextState"));

    // bloco de condição que valida no estado incial do processo se os seguintes campos etão em braco. 
	if (form.getValue("NOME_SOLICITANTE") == ""){
		console.log("entrou if NOME_SOLICITANTE")
		throw "Necessario Preencher o campo Solicitante:"; 
	}
    if (form.getValue("CENTRO_DE_CUSTO") == ""){
		console.log("entrou if CENTRO_DE_CUSTO")
		throw "Necessario Preencher o campo Centro de custo:"; 
	}
	if (form.getValue("CLI_FOR") == "VAZIO"){
		console.log("entrou if CLI_FOR")
		throw "Necessario Preencher o campo Cliente / Fornecedor:"; 
	}
	if (form.getValue("NOME_CLI_FOR") == ""){
		console.log("entrou if CLI_FOR")
		throw "Necessario Preencher Razão Social do Cliente / Fornecedor:"; 
	}
	if (form.getValue("RESP_CENTRO_DE_CUSTO") == ""){
		console.log("entrou if RESP_CENTRO_DE_CUSTO")
		throw "Necessario Preencher o campo Responsavel Centro Custo:"; 
	}
	if (form.getValue("TIPO_SOLICITACAO") == "VAZIO"){
		console.log("entrou if TIPO_SOLICITACAO")
		throw "Necessario Preencher o campo Responsavel Tipo:"; 
	}
	if (form.getValue("NUMERO_DO_CONTRATO") == " " && form.getValue("TIPO_SOLICITACAO") == "ADTIVO" ){
		console.log("entrou if TIPO_SOLICITACAO")
		throw "Necessario Preencher o campo Numero do contrato:"; 
	}
	if (form.getValue("NUMERO_DO_CONTRATO") == " " && form.getValue("TIPO_SOLICITACAO") == "RECISAO" ){
		console.log("entrou if TIPO_SOLICITACAO")
		throw "Necessario Preencher o campo Numero do contrato:"; 
	}
	if (form.getValue("DATA_RECIMENTO") == " " && form.getValue("TIPO_SOLICITACAO") == "NOTIFICACAO" ){
		console.log("entrou if TIPO_SOLICITACAO")
		throw "Necessario Preencher o campo Numero do contrato:"; 
	}
	if (form.getValue("OUTROS") == " " && form.getValue("TIPO_SOLICITACAO") == "OUTROS" ){
		console.log("entrou if TIPO_SOLICITACAO")
		throw "Necessario Preencher o campo Responsavel Outros:"; 
	}
	if (form.getValue("OBJ_SOLICITANTE") == ""){
		console.log("entrou if OBJ_SOLICITANTE")
		throw "Necessario Preencher o campo Observações do solicitante:"; 
	}
	
	if(Now_State == 5){
		if (form.getValue("ESCOPO_APROVADO_LIDERANCA") == "VAZIO"){
			console.log("entrou if ESCOPO_APROVADO_LIDERANCA")
			throw "Necessario Preencher o campo Escopo aprovado."; 
		}

		else if (form.getValue("ESCOPO_APROVADO_LIDERANCA") == "NAO" && Next_State == "12"){
			console.log("entrou if ESCOPO_APROVADO_LIDERANCA")
			throw "Necessario enviar para a atividade FIM."; 
		}
		
	}
	if(Now_State == 12){
			if (form.getValue("OBS_CONTRATO_JURIDICO") == ""){
				console.log("entrou if ESCOPO_APROVADO_LIDERANCA")
				throw "Necessario Preencher o campo Observação juridico."; 
			}
			
	}
	

}