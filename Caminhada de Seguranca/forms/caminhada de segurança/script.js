function setSelectedZoomItem(selectedItem){
	
	var CCUSTO = document.getElementById("CENTRO_DE_CUSTO").value
	
	console.log("CENTRO_DE_CUSTO" + CCUSTO)
	
	if (selectedItem.inputId == "CENTRO_DE_CUSTO"){
		
	
	try{
	    var c1 = DatasetFactory.createConstraint("CENTRO_DE_CUSTO", CCUSTO, CCUSTO, ConstraintType.MUST);
		var constraints = new Array(c1);
		var dataset = DatasetFactory.getDataset("ds_informacao_ccusto", null, constraints, null);
		console.log( ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,")
		console.log( "c1"+c1 )
		console.log( "conts"+constraints )
		console.log( "dataset:" )
		console.log( dataset )
    	
		var row = dataset.values[0]
		
		console.log( "row:" )
		console.log( row )
		
		var nome_resp = row["NOME_RESP"]
		
	
		console.log( "nome_resp:" +nome_resp )
	
		
		document.getElementById("RESP_CENTRO_DE_CUSTO").value = nome_resp
		
	}catch (e){
		console.log( e )

	
				} 
	}
}
//==============================================================================================================================================
function onload(){
	
	addLinhaTabela("TABELA_OCORRENCIA")
	
	
	var atividade = document.getElementById("ATIVIDADE_SOLICITACAO").value
	
	
	if(atividade == 6 || atividade == 7){ 
		console.log("onload bloqueiaAnexos" )
		bloqueiaAnexos()
		
	}
	
}
//==============================================================================================================================================
function addLinhaTabela(tabela){
	
	console.log("addLinhaTabela")
	console.log("tabela :" + tabela)
	var atividade = document.getElementById("ATIVIDADE_SOLICITACAO").value
	console.log("atividade :" + atividade)
	
	
	if(atividade != 6 && atividade != 7){ 
		
			if (tabela == 'TABELA_NOME_ACOMPANHANTES'){
				console.log("TABELA_NOME_ACOMPANHANTES")
				
				contadorLinhasTabelaAcompanhantes()
				
				wdkAddChild("TABELA_NOME_ACOMPANHANTES")
				}
			
			if (tabela == 'TABELA_OCORRENCIA'){
				
				console.log("TABELA_OCORRENCIA")
				
				contadorLinhasTabelaOcorrencia()
				
				wdkAddChild(tabela)
				}
			
			for (var i = 0; i <= document.getElementById("NUMERO_OCORRENCIA").value; i++){
				
				console.log("entrou for addlinhatabela (bloqueia campos) :" )
				
				$('#TRATATIVA_LIDERANCA___'+i).prop('disabled', true);
				$('#OBSERVACAO_SSMA_OCORRENCIA___'+i).prop('disabled', true);
				
		}  
	}
	
	
	
}
//==============================================================================================================================================
function deleteLinhaTabela(campo, tabela){
	
	var atividade = document.getElementById("ATIVIDADE_SOLICITACAO").value
	
	console.log("tabela :" + tabela )
	
	if (tabela == "TABELA_NOME_ACOMPANHANTES" && (atividade != 6 && atividade != 7)){
		
		console.log("TABELA_NOME_ACOMPANHANTES")
		fnWdkRemoveChild(campo)
		deletaLinhasTabelaAcompanhantes()
		
		}
	
	if (tabela == "TABELA_OCORRENCIA"  && (atividade != 6 && atividade != 7)){
		
		console.log("TABELA_OCORRENCIA")
		fnWdkRemoveChild(campo)
		deletaLinhasTabelaOcorrencia()
		
		
		}
	
}
//==============================================================================================================================================
function contadorLinhasTabelaAcompanhantes(){
	
	console.log("NUMERO_NOME_ACOMPANHANTES")
	
	var NUMERO_ACOMPANHANTES = document.getElementById("NUMERO_NOME_ACOMPANHANTES").value
	
	NUMERO_ACOMPANHANTES ++
	
	console.log("NUMERO_ACOMPANHANTES"+NUMERO_ACOMPANHANTES)
	 
	document.getElementById("NUMERO_NOME_ACOMPANHANTES").value=NUMERO_ACOMPANHANTES
	 
}
//==============================================================================================================================================
function contadorLinhasTabelaOcorrencia(){
	console.log("NUMERO_OCORRENCIA")
	
	var NUMERO_OCORRENCIA = document.getElementById("NUMERO_OCORRENCIA").value
	
	NUMERO_OCORRENCIA++
	
	console.log("NUMERO_OCORRENCIA"+NUMERO_OCORRENCIA)
	 
	document.getElementById("NUMERO_OCORRENCIA").value =NUMERO_OCORRENCIA
	 
}
//==============================================================================================================================================
function deletaLinhasTabelaAcompanhantes(){
	
	console.log("NUMERO_NOME_ACOMPANHANTES")
	
	var NUMERO_ACOMPANHANTES = document.getElementById("NUMERO_NOME_ACOMPANHANTES").value
	
	NUMERO_ACOMPANHANTES --
	
	console.log("NUMERO_ACOMPANHANTES"+NUMERO_ACOMPANHANTES)
	 
	document.getElementById("NUMERO_NOME_ACOMPANHANTES").value=NUMERO_ACOMPANHANTES
	 
}
//==============================================================================================================================================
function deletaLinhasTabelaOcorrencia(){
	console.log("NUMERO_OCORRENCIA")
	
	var NUMERO_OCORRENCIA = document.getElementById("NUMERO_OCORRENCIA").value
	
	NUMERO_OCORRENCIA--
	
	console.log("NUMERO_OCORRENCIA"+NUMERO_OCORRENCIA)
	 
	document.getElementById("NUMERO_OCORRENCIA").value =NUMERO_OCORRENCIA
	 
}
//==============================================================================================================================================
function showCamera(param) { 
	var atividade = document.getElementById("ATIVIDADE_SOLICITACAO").value
	
	if(atividade != 6 && atividade != 7){
		
		JSInterface.showCamera(param); 
		
	}
}
//==============================================================================================================================================
function bloqueiaAnexos() { 
	
	console.log("funcao bloqueiaAnexos" )
	
		for (var i = 0; i <= document.getElementById("NUMERO_OCORRENCIA").value; i++){
			console.log($('#ANEXOS_OCORRENCIA') )
		
			
		$('#ANEXOS_CAMINHADA___'+i).prop('disabled', true);
		
		
		
		
	}
}