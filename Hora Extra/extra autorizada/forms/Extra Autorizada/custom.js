function setSelectedZoomItem(selectedItem){
	
	var nome = document.getElementById("NOME_SOLICITANTE").value
	console.log("NOMESOLICITANTE" + nome)
	
	if (selectedItem.inputId == "NOME_SOLICITANTE"){
		
	
	try{
	    var c1 = DatasetFactory.createConstraint("NOMESOLICITANTE", nome, nome, ConstraintType.MUST);
		var constraints = new Array(c1);
		var dataset = DatasetFactory.getDataset("ds_informacoes_usuario", null, constraints, null);
		console.log( ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,")
		console.log( "c1"+c1 )
		console.log( "conts"+constraints )
		console.log( "dataset:" )
		console.log( dataset )
    	
		var row = dataset.values[0]
		
		console.log( "row:" )
		console.log( row )
		
    	var chapa_func = row["CHAPA"]
		var nome_codcusto = row["NOME_CODCCUSTO"]
		var nome_resp = row["NOME_RESP"]
		var chapa_resp = row["CHAPA_RESP"]
		
		
		console.log( "chapa_func:" +chapa_func )
		console.log( "nome_codcusto:" +nome_codcusto )
		console.log( "nome_resp:" +nome_resp )
		console.log( "chapa_resp:" +chapa_resp )
		
		document.getElementById("CHAPA_SOLICITANTE").value = chapa_func
		document.getElementById("NOME_CODCCUSTO").value = nome_codcusto
		document.getElementById("RESPONSAVEL").value = nome_resp
		document.getElementById("CHAPA_RESPONSAVEL").value = chapa_resp
		
	
		
	}catch (e){
		console.log( e )

	
				} 
	}
}

function consultaRm (){
	
	var DATA_EXTRA = document.getElementById("DATA_EXTRA").value
	console.log("DATA_EXTRA" + DATA_EXTRA)
	
	var CHAPA_SOLICITANTE = document.getElementById("CHAPA_SOLICITANTE").value
	console.log("NOMESOLICITANTE" + CHAPA_SOLICITANTE)
	
	
	try{
	    var c1 = DatasetFactory.createConstraint("DATA_EXTRA", DATA_EXTRA, DATA_EXTRA, ConstraintType.MUST);
	    var c2 = DatasetFactory.createConstraint("CHAPA", CHAPA_SOLICITANTE, CHAPA_SOLICITANTE, ConstraintType.MUST);
		var constraints = new Array(c1,c2);
		var dataset = DatasetFactory.getDataset("ds_informacoes_data", null, constraints, null);
		console.log( ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,")
		console.log( "c1"+c1 )
		console.log( "c2"+c2 )
		console.log( "conts"+constraints )
		console.log( "dataset:" )
		console.log( dataset )
    	
		var row = dataset.values[0]
		
		console.log( "row:" )
		console.log( row )
		
    	var data_extra = row["DATA"]

		
		console.log( "data_extra:" +data_extra )
		
		document.getElementById("data_extra").value = VALIDACAO_HORA_BANCO
		
		
	
		
	}catch (e){
		console.log( e )

	
				} 
	
}

function validaPreenchimentoData(){
	
	var dataDigitada = document.getElementById("DATAOCORRENCIA").value
	if (dataDigitada != ""){
		var regEx = /^\d{4}-\d{2}-\d{2}$/;
		if (dataDigitada.match(regEx)) {
	       var split = dataDigitada.split('-');
	       dataDigitada = split[2] + '/' + split[1] + '/' + split[0];
		 }
		console.log("dataDigitada: "+ dataDigitada)
		var dataValida = true 
		var match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(dataDigitada);
		if (dataDigitada.split("/")[2] > (new Date()).getFullYear() ||
				dataDigitada.split("/")[2] < "2000"){
			dataValida = false
		} else if (match) {
		    var dia = parseInt(match[1]);
		    var mes = parseInt(match[2]);
		    var ano = parseInt(match[3]);
	
		    var d = new Date(ano, mes - 1, dia);
		    dataValida = d.getFullYear() == ano
		                     && d.getMonth() + 1 == mes
		                     && d.getDate() == dia;
		    console.log(dataValida); // true
		} else {
			dataValida = false
		}
		
		if(!dataValida){
			FLUIGC.toast({
				title: 'Data preenchida Inválida: ',
				message: 'Favor preencher o campo com uma data válida!',
				type: 'danger'
			});
			document.getElementById("DATAOCORRENCIA").value = ""
		}
	}
	
}

function onload(){
	
	DATA_EXTRA.min = new Date().toISOString().split("T")[0];
}