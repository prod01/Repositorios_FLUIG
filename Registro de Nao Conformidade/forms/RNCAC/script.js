function setSelectedZoomItem(selectedItem) {
		console.log("entrou setselectzoom")
			if (selectedItem.inputId == "CENTRO_DE_CUSTO") {			
				document.getElementById("RESP_CC_NC").value = selectedItem["NOME"]
				document.getElementById("COD_CCUSTO").value = selectedItem["CODCCUSTO"]
				document.getElementById("EMAIL_SOLICITANTE").value = selectedItem["EMAIL"]
			}

}
//#####################################################################################################
function removedZoomItem(removedItem) {

	if (removedItem.inputId == "CENTRO_DE_CUSTO") {
		document.getElementById("RESP_CC_NC").value = ""
			window["RESP_CC_NC"].clear();
		document.getElementById("COD_CCUSTO").value = ""
			window["COD_CCUSTO"].clear();
		document.getElementById("EMAIL_SOLICITANTE").value = ""
			window["EMAIL_SOLICITANTE"].clear();
	}
}
//#####################################################################################################

function onload() {
	console.log("entrou!!!!!teste")
var atividade = document.getElementById("NUM_ATIVIDADE").value
console.log("entrou!!!!!teste" + atividade)
	if (atividade == '7' ){
		console.log("entrou!!!!!teste")
	consultaDataHora()
	
	}
	
}
//#####################################################################################################
function consultaDataHora(){

	console.log("entrou!!!!!teste")
	var c1 = DatasetFactory.createConstraint("processTaskPK.processInstanceId", document.getElementById("IDCHAMADO").value, document.getElementById("IDCHAMADO").value, ConstraintType.MUST);
	console.log("entrou!!!!!teste")
	var idchamd=document.getElementById("IDCHAMADO").value
	var c2 = DatasetFactory.createConstraint("active", "true", "true", ConstraintType.MUST);
	var constraints = new Array(c1,c2);
	try{
		console.log("entrou try")
		var dataset = DatasetFactory.getDataset("processTask", null, constraints, null);
		 var row = dataset.values[0];  
			console.log(row)
		 
		var description = row["deadline"]; // variavel receber o data do ultimo processo  do dataset (Campo Descriação do incidente)   
		console.log(description)
		
		if( description != null){ 
		console.log( "description"+description )
		// início da função
		var dataH = new Date(description);
		console.log( "dataH"+dataH )
		
		var d = dataH.getDate();
		var m = dataH.getMonth() + 1;
		var a = dataH.getFullYear();
		
		if (m < 10) {
			m = "0" + m;
		}
		
		if (d < 10) {
			d = "0" + d;
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
		console.log("Data "+dataFull)
		
		var campoSLAExtenso
		try{
			campoSLAExtenso = document.getElementById("PRAZO_ATENDIMENTO_PA")
		} catch (e){
			console.log("errou 22 "+dataFull)
		}
		campoSLAExtenso.value = dataFull;
		}
		//término da função
		
	}catch(e){
		console.log(e);
		console.log("errou:)))))) ")
	}
	
	
}
//#####################################################################################################
function showCamera(param) { 
	JSInterface.showCamera(param); 
}
