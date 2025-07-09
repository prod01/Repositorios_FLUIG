function showCamera(param) { 
	JSInterface.showCamera(param); 
}
//####################################################################################################
function onload(){
	tipo()
}
//####################################################################################################
function setSelectedZoomItem(selectedItem) {
console.log("entrou setselectzoom")
	if (selectedItem.inputId == "CENTRO_DE_CUSTO") {
//		console.log("entrou setselectzoom if")
//		setZoomData("RESP_CENTRO_DE_CUSTO",
//				selectedItem["NOME"]);
//		
		document.getElementById("RESP_CENTRO_DE_CUSTO").value = selectedItem["NOME"]
		
	}

}
//####################################################################################################
function setZoomData(instance, value) {
	window[instance].setValue(value);
}
//#####################################################################################################
function removedZoomItem(removedItem) {

	if (removedItem.inputId == "CENTRO_DE_CUSTO") {
		console.log("Retornando resultado removedZoomItem");
		console.log(removedItem);
		document.getElementById("RESP_CENTRO_DE_CUSTO").value = ""
			window["RESP_CENTRO_DE_CUSTO"].clear();
	}
}
//#####################################################################################################
function tipo(){
	console.log("function tipo");

	var atividade = document.getElementById("ATIVIDADE").value
	var TEMPO_ATIVIDADE = document.getElementById("TEMPO_ATIVIDADE").value
	
	console.log("atividade" + atividade );
	
	var tipoSolicitacao = document.getElementById("TIPO_SOLICITACAO").value
	console.log("tipoSolicitacao" + tipoSolicitacao );
	
	if (tipoSolicitacao == "VAZIO"){
		console.log("tipoSolicitacao VAZIO" + tipoSolicitacao );
		$('#OUTROS').prop('disabled', true);
		$('#NUMERO_DO_CONTRATO').prop('disabled', true);
		$('#ANEXOS_CONTRATO_ORIGEM').prop('disabled', true);
		
		document.getElementById("NUMERO_DO_CONTRATO").parentNode.style.display = "none"
		document.getElementById("NUMERO_DO_CONTRATO_FUNC").parentNode.style.display = "block"
		document.getElementById("OUTROS").parentNode.style.display = "none"
		document.getElementById("DIV_DATA_RECEBIMENTO").parentNode.style.display = "none"
			
		
		
	}
	if (tipoSolicitacao == "CONTRATO"){
		
		console.log("tipoSolicitacao CONTRATO");
		$('#OUTROS').prop('disabled', true);
		$('#NUMERO_DO_CONTRATO').prop('disabled', true);
		$('#ANEXOS_CONTRATO_ORIGEM').prop('disabled', false);
		
		document.getElementById("NUMERO_DO_CONTRATO").parentNode.style.display = "none"
		document.getElementById("NUMERO_DO_CONTRATO_FUNC").parentNode.style.display = "block"
		document.getElementById("OUTROS").parentNode.style.display = "none"
		document.getElementById("DIV_DATA_RECEBIMENTO").parentNode.style.display = "none"
			
		document.getElementById("TEMPO_ATIVIDADE").value = '059:36'
			
		console.log("tipoSolicitacao CONTRATO // TEMPO_ATIVIDADE ");
	
		
	}
	if (tipoSolicitacao == "ADTIVO"){
		console.log("tipoSolicitacao ADTIVO" + tipoSolicitacao );
		
		$('#OUTROS').prop('disabled', true);
		$('#NUMERO_DO_CONTRATO').prop('disabled', false);
		$('#ANEXOS_CONTRATO_ORIGEM').prop('disabled', false);
		document.getElementById("NUMERO_DO_CONTRATO").parentNode.style.display = "block"
		document.getElementById("NUMERO_DO_CONTRATO_FUNC").parentNode.style.display = "none"
		document.getElementById("OUTROS").parentNode.style.display = "none"
		document.getElementById("DIV_DATA_RECEBIMENTO").parentNode.style.display = "none"
			
		document.getElementById("TEMPO_ATIVIDADE").value = '059:36'
		
		console.log("tipoSolicitacao ADTIVO // TEMPO_ATIVIDADE");
		

		
	}
	if (tipoSolicitacao == "RECISAO"){
		console.log("tipoSolicitacao RECISAO" + tipoSolicitacao );
		$('#OUTROS').prop('disabled', true);
		$('#NUMERO_DO_CONTRATO').prop('disabled', false);
		$('#ANEXOS_CONTRATO_ORIGEM').prop('disabled', false);
		
		document.getElementById("NUMERO_DO_CONTRATO").parentNode.style.display = "block"
		document.getElementById("NUMERO_DO_CONTRATO_FUNC").parentNode.style.display = "none"
		document.getElementById("OUTROS").parentNode.style.display = "none"
		document.getElementById("DIV_DATA_RECEBIMENTO").parentNode.style.display = "none"

		document.getElementById("TEMPO_ATIVIDADE").value = '059:36'
			
		console.log("tipoSolicitacao RECISAO // TEMPO_ATIVIDADE");
	
	}
	if (tipoSolicitacao == "NOTIFICACAO"){
		console.log("tipoSolicitacao NOTIFICACAO" + tipoSolicitacao );
		$('#OUTROS').prop('disabled', true);
		$('#NUMERO_DO_CONTRATO').prop('disabled', true);
		$('#ANEXOS_CONTRATO_ORIGEM').prop('disabled', false);
		
		document.getElementById("NUMERO_DO_CONTRATO").parentNode.style.display = "none"
		document.getElementById("NUMERO_DO_CONTRATO_FUNC").parentNode.style.display = "block"
		document.getElementById("OUTROS").parentNode.style.display = "none"
		document.getElementById("DIV_DATA_RECEBIMENTO").parentNode.style.display = "block"
			
		
		document.getElementById("TEMPO_ATIVIDADE").value = '008:48'
			
		console.log("tipoSolicitacao NOTIFICACAO // TEMPO_ATIVIDADE" )
		

		
	}
	if (tipoSolicitacao == "OUTROS"){
		console.log("tipoSolicitacao OUTROS" + tipoSolicitacao );
		$('#OUTROS').prop('disabled', false);
		$('#NUMERO_DO_CONTRATO').prop('disabled', true);
		$('#ANEXOS_CONTRATO_ORIGEM').prop('disabled', false);
		
		document.getElementById("NUMERO_DO_CONTRATO").parentNode.style.display = "none"
		document.getElementById("NUMERO_DO_CONTRATO_FUNC").parentNode.style.display = "block"
		document.getElementById("OUTROS").parentNode.style.display = "block"
		document.getElementById("DIV_DATA_RECEBIMENTO").parentNode.style.display = "none"
			
		document.getElementById("TEMPO_ATIVIDADE").value = '059:36'
			
		console.log("tipoSolicitacao OUTROS // TEMPO_ATIVIDADE");

	
	}
}
//#####################################################################################################

