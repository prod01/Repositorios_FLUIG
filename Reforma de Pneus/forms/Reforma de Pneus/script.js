function setSelectedZoomItem(selectedItem) {
		console.log("entrou setselectzoom")
			if (selectedItem.inputId == "IDOBJOF") {			
				document.getElementById("FABRICANTE").value = selectedItem["CODFAB"]
				document.getElementById("IDTIPOOBJ").value = selectedItem["IDTIPOOBJ"]
				document.getElementById("IDHISTINDICADOR").value = selectedItem["IDHISTINDICADOR"]
				console.log("teste" +selectedItem["IDHISTINDICADOR"] )
				
				if (selectedItem["QTDEREFORMA"] == 'null'){
					document.getElementById("QTDEREFORMA").value = 0
					document.getElementById("QNT_REFORMA").value = 0
					console.log("teste1" )
				}
				else {
					
					document.getElementById("QTDEREFORMA").value = selectedItem["QTDEREFORMA"]
					document.getElementById("QNT_REFORMA").value = selectedItem["QTDEREFORMA"]
					console.log("teste2" )
				}
				
				consultaInformacaoDaMaquina()
			}
		
		if (selectedItem.inputId == "NOME_CLIFOR") {			
			document.getElementById("COD_CLIFOR").value = selectedItem["CODCFO"]
			document.getElementById("CNPJ_CLIFOR").value = selectedItem["CGCCFO"]
		}

}
//#####################################################################################################
function removedZoomItem(removedItem) {

	if (removedItem.inputId == "IDOBJOF") {
		document.getElementById("FABRICANTE").value = ""
			window["FABRICANTE"].clear();
		
	}
	if (removedItem.inputId == "NOME_CLIFOR") {
		document.getElementById("COD_CLIFOR").value = ""
		document.getElementById("CNPJ_CLIFOR").value = ""
			
	
	}

}
//#####################################################################################################
function consultaInformacaoDaMaquina() {
	 console.log("entrou function")
   //Monta as constraints para consulta
   
	var c1 = DatasetFactory.createConstraint("IDTIPOOBJ", document.getElementById("IDTIPOOBJ").value,  document.getElementById("IDTIPOOBJ").value, ConstraintType.MUST);
		var constraints = new Array(c1);
	    console.log("constraints:" + constraints )
	    //Define os campos para ordenação
	    var sortingFields = new Array("IDOBJOFPAI");
	    console.log("sortingFields:" + sortingFields)
	    //Busca o dataset
	    var dataset = DatasetFactory.getDataset("ds_Indice_Acompanhamento", null, constraints, null);
	    console.log("dataset" + dataset)
	    
		 var row = dataset.values[0];
						console.log("row"+row)
					
	    	var IDINDICE = row["IDINDICE"]; // variavel receber o valor do dataset (Campo Descriação do incidente)
			document.getElementById("INDICE_ACOMPANHAMENTO").value = IDINDICE
			console.log("description"+IDINDICE)
}
//#####################################################################################################
function blockCampos() {

	var informacao = document.getElementById("INFORMACAO_REFROMA").value
	
	if (informacao == "REFORMA") {
		
		//document.getElementById("NOVA_MEDIDA").parentNode.style.display = "none"
			$("#NOVA_MEDIDA").prop("disabled", false);
	}
	if (informacao == "MANUTENCAO") {
		
		//document.getElementById("NOVA_MEDIDA").parentNode.style.display = "block"
			$("#NOVA_MEDIDA").prop("disabled", true);
	}
	if (informacao == "VAZIO") {
		
		//document.getElementById("NOVA_MEDIDA").parentNode.style.display = "block"
			$("#NOVA_MEDIDA-end").prop("disabled", true);
	}

}
//#####################################################################################################

function showCamera(param) { 
	JSInterface.showCamera(param); 
}