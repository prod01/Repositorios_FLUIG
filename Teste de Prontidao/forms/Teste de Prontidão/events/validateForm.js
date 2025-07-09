function validateForm(form){
	
	var dataH = new Date();
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
	
	 
	 	if (form.getValue("NOME_COMPLETO") == ""){
			console.log("entrou if NOME_COMPLETO")
			throw "Necessario Preencher o nome completo "; 
		}
	    if (form.getValue("lOCAL_BASE") == ""){
			console.log("entrou if lOCAL_BASE")
			throw "Necessario Preencher o lacal / base"; 
		}
	    
		if (form.getValue("DATA_LANCAMENTO") == ""){
			console.log("entrou if DATA_LANCAMENTO")
			throw "Necessario Preencher a data"; 
		}
		if (form.getValue("HORA_LANCAMENTO") == ""){
			console.log("entrou if HORA_LANCAMENTO")
			throw "Necessario Preencher a hora "; 
		}
		
	 	if (form.getValue("PERGUNTA_1") == "NULO"){
			console.log("entrou if PERGUNTA_1")
			throw "Necessario Preencher a 1º pergunta"; 
		}
	    if (form.getValue("PERGUNTA_2") == "NULO"){
			console.log("entrou if PERGUNTA_2")
			throw "Necessario Preencher a 2º pergunta"; 
		}
		if (form.getValue("PERGUNTA_3") == "NULO"){
			console.log("entrou if PERGUNTA_3")
			throw "Necessario Preencher a 3º pergunta"; 
		}
		if (form.getValue("PERGUNTA_4") == "NULO"){
			console.log("entrou if PERGUNTA_4")
			throw "Necessario Preencher a 4º pergunta"; 
		}
		if (form.getValue("PERGUNTA_5") == "NULO"){
			console.log("entrou if PERGUNTA_5")
			throw "Necessario Preencher a 5º pergunta"; 
		}
		if (form.getValue("PERGUNTA_6") == "NULO"  ){
			console.log("entrou if PERGUNTA_6")
			throw "Necessario Preencher a 6º pergunta"; 
		}
		if (form.getValue("PERGUNTA_7") == "NULO"  ){
			console.log("entrou if PERGUNTA_7")
			throw "Necessario Preencher a 7º pergunta"; 
		}
		if (form.getValue("PERGUNTA_8") == "NULO"  ){
			console.log("entrou if PERGUNTA_8")
			throw "Necessario Preencher a 8º pergunta"; 
		}
	
}