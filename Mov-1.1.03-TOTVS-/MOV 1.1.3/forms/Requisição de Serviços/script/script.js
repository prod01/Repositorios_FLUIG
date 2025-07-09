function setSelectedZoomItem(selectedItem) {

	console.log("entrou function setSelectedZoomItem")
	console.log(selectedItem.inputName.substring(0,27))

	
	//pega codlocal de estoque 
	if (selectedItem.inputId == "NOMELOCAL") {
		document.getElementById("CODLOC").value = selectedItem["CODLOC"]
	}

	//pega id produto
	if (selectedItem.inputId == "NOMEPRD") {
		document.getElementById("IDPRD").value = selectedItem["IDPRD"]
	}
	
	//pega o cod  produto  
	if (selectedItem.inputId == "NOMEPRD") {
		document.getElementById("CODIGOPRD").value = selectedItem["CODIGOPRD"]
	}
	
	//pega cocccusto
	if (selectedItem.inputId == "NOMECCUSTO") {
		document.getElementById("CODCCUSTO").value = selectedItem["CODCCUSTO"]
	}
	
	//pega o cod departamento  
	if (selectedItem.inputId == "NOMEDEPARTAMENTO") {
		document.getElementById("CODDEPARTAMENTO").value = selectedItem["CODDEPARTAMENTO"]
	}
	
}