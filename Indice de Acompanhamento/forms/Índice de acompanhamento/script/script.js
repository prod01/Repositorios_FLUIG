function data(campo){
	
	var dateTime = FLUIGC.calendar(campo, { pickDate: true, pickTime: true, sideBySide: true, maxDate: new Date()} );
	
}

function setSelectedZoomItem(selectedItem) {
	
	if (selectedItem.inputName.substring(0,27) == "NOMEINDICEACOMPANHAMENTO___"){
		var INDICEACOMPANHAMENTO = "INDICEACOMPANHAMENTO___"+selectedItem.inputName.substring(27,selectedItem.inputName.lenght);
		console.log("INDICEACOMPANHAMENTO:"+INDICEACOMPANHAMENTO)
		document.getElementById(INDICEACOMPANHAMENTO).value = selectedItem["IDINDICE"]
		
	}

	if (selectedItem.inputId == "IDMAQUINA") {
		
		//campos referentes a integração com o indece de acompanhamento 
			var dataset = consultaInformacaoDaMaquina(selectedItem)
			
			document.getElementById("NUMEROPNEUS").value = dataset.values.length
			
			for (var x = 0; x < dataset.values.length; x++) {
			
	        var row = dataset.values[x];
		
	        if (row["IDOBJOF"] !=""){
	        addLinhaTabela("TABELA_PNEUS")
	        console.log("Adicionou linha da tabela")
	        console.log("row[IDOBJOF]" + row["IDOBJOF"])
	        			
	        document.getElementById("IDPNEU___"+document.getElementById("SET_ULTIMO_VALOR").value).value = row["IDOBJOF"]
	        document.getElementById("IDHISTINDICADOR___"+document.getElementById("SET_ULTIMO_VALOR").value).value = row["IDHISTINDICADOR"]
	        document.getElementById("VALORMAX___"+document.getElementById("SET_ULTIMO_VALOR").value).value = row["VALORMAX"]
	        document.getElementById("VALORMIN___"+document.getElementById("SET_ULTIMO_VALOR").value).value = row["VALORMIN"]
	        document.getElementById("POSICAOPNEU___"+document.getElementById("SET_ULTIMO_VALOR").value).value = row["POSICAO_PNEU"]
	        document.getElementById("NOMEINDICEACOMPANHAMENTO___"+document.getElementById("SET_ULTIMO_VALOR").value).value = row["NOME"]
	        document.getElementById("INDICEACOMPANHAMENTO___"+document.getElementById("SET_ULTIMO_VALOR").value).value = row["IDINDICE"]
	        document.getElementById("VALORDAULTMAMEDICAO___"+document.getElementById("SET_ULTIMO_VALOR").value).value = String(consultaValorUltimaMedPneu(row["IDOBJOF"])).replace(".", ",") 
	        
	        
	       
	        }if (row["IDOBJOF"] ==""){
				console.log("entrou o if do alerta")
				FLUIGC.toast({
				title: 'Aviso:',
				message: 'Esta maquina não tem um pneu atrelado a ela',
				type: 'warning'
				});
				
			}
	        
		}
		
	}
	if (selectedItem.inputId == "IDMAQUINA") { 
		
		//campos referentes a integração com o lancamento de horimetro
		
		document.getElementById("VALORULTIMAMEDICAO").value = selectedItem["VALORMEDIDOR1"];
		document.getElementById("VALORMAXMAMEDICAO").value = selectedItem["HORASMAXIMAS"];
		document.getElementById("IDHISTINDICADOR_PAI").value = selectedItem["IDHISTINDICADOR_PAI"];
		document.getElementById("DATAULTLANCAMENTO").value = selectedItem["DATACOLETA"];
		document.getElementById("USAINDICADORUSO5").value = selectedItem["USAINDICADORUSO5"];
		
		if (selectedItem["USAINDICADORUSO5"] == "1"){
			document.getElementById("VALORMEDIDOR5").removeAttribute("readonly");
		} else {
			document.getElementById("VALORMEDIDOR5").setAttribute("readonly", "readonly");
			document.getElementById("VALORMEDIDOR5").value = "";
		}
	}
	
	//pega o valor minimo que o RM aceita 
	if (selectedItem.inputId == "NOMEINDICEACOMPANHAMENTO") {
		document.getElementById("CAMPOVALORMIN").value = selectedItem["VALORMIN"]
	}

	//pega o valor maximo que o RM aceita 
	if (selectedItem.inputId == "NOMEINDICEACOMPANHAMENTO") {
		document.getElementById("CAMPOVALORMAX").value = selectedItem["VALORMAX"]
	}
	
}

function setZoomData(instance, value) {
	window[instance].setValue(value);
}

function removedZoomItem(removedItem) {
	
	if (removedItem.inputId == "IDMAQUINA") {
		deleteLinhaTabela("IDPNEU___3")
		

			if (removedItem.inputId == "IDMAQUINA") {
				document.getElementById("VALORULTIMAMEDICAO").value = "";
				document.getElementById("VALORMAXMAMEDICAO").value = "";
				document.getElementById("IDHISTINDICADOR").value = "";
				document.getElementById("DATAULTLANCAMENTO").value = "";
			}
		
	
	}
}

function addLinhaTabela(tabela){
	
	wdkAddChild(tabela);

	var tabela = document.getElementById(tabela).getElementsByTagName('tbody')[0];
	var linhas = tabela.rows.length;
	var primeiraLinha = tabela.rows[1].cells[0].getElementsByClassName('form-control')[0].id;
	var ultimaLinha = tabela.rows[linhas-1].cells[0].getElementsByClassName('form-control')[0].id;

	document.getElementById("SET_PRIMEIRO_VALOR").value = primeiraLinha.substring(9,primeiraLinha.length);
	document.getElementById("SET_ULTIMO_VALOR").value = ultimaLinha.substring(9,ultimaLinha.length);
	
	
}

function deleteLinhaTabela(campo, tabela){
	console.log("entrou na function")
	$('table[tablename=TABELA_PNEUS] tbody tr').not(':first').remove();
	/*fnWdkRemoveChild(campo);//3.02.00000016487*/
}


function consultaInformacaoDaMaquina() {
	 console.log("entrou function")
    //Monta as constraints para consulta
    var c1 = DatasetFactory.createConstraint("IDOBJOFPAI", document.getElementById("IDMAQUINA").value, document.getElementById("IDMAQUINA").value, ConstraintType.MUST);
    
	 console.log("entrou function: " + document.getElementById("IDMAQUINA").value)
	
	 
	try{
	    var constraints = new Array(c1);
	    console.log("constraints:" + constraints )
	    console.log( constraints )
	    //Define os campos para ordenação
	    var sortingFields = new Array("IDOBJOFPAI");
	    console.log("sortingFields:" + sortingFields)
	    //Busca o dataset
	    var dataset = DatasetFactory.getDataset("ds_Objeto_Manutencao_Pneu", null, constraints, null);
	    console.log("dataset" + dataset)
	    console.log( dataset )
 
	    return dataset
	    
	}catch (e){
		console.log("datasetee" + e)
		return e
	}
}


function consultaValorUltimaMedPneu(idPneu) {

	var c1 = DatasetFactory.createConstraint("IDOBJOF", idPneu, idPneu, ConstraintType.MUST);
   
	 console.log("entrou function: " + document.getElementById("IDMAQUINA").value)

	try{
		console.log("entrou try: " )
	    var constraints = new Array(c1);
	    console.log("constraints:" + constraints )
	    console.log( constraints )
	    //Define os campos para ordenação
	    var sortingFields = new Array("IDOBJOFPAI");
	    console.log("sortingFields:" + sortingFields)
	    //Busca o dataset
	    var dataset = DatasetFactory.getDataset("ds_valor_ultmed_pneu", null, constraints, null);
	    var row = dataset.values[0];
			
		var valorMedicao = row["VALOR"]; // variavel receber o valor do dataset (Campo Descriação do incidente)
		console.log("entrou try: " +valorMedicao )
		
		if (valorMedicao != ""){
			
			return valorMedicao
		}
		
		else {
			return "0"
		}
		
		
	}catch (e){
		console.log("datasetee" + e)
		return e
	}
}
