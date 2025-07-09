function data(campo){
	
	//campo desabilitado
	//fazia a função de executar um layout de data e hora
	var dateTime = FLUIGC.calendar(campo, {
	    pickDate: true,
	    pickTime: true,
	    sideBySide: true,
	    maxDate: new Date()
	});
}

function setSelectedZoomItem(selectedItem) {

	console.log("entrou function setSelectedZoomItem")

	console.log(selectedItem.inputName.substring(0,27))
	
	
	if (selectedItem.inputName.substring(0,27) == "NOMEINDICEACOMPANHAMENTO___"){
		var INDICEACOMPANHAMENTO = "INDICEACOMPANHAMENTO___"+selectedItem.inputName.substring(27,selectedItem.inputName.lenght);
		console.log("INDICEACOMPANHAMENTO:"+INDICEACOMPANHAMENTO)
		document.getElementById(INDICEACOMPANHAMENTO).value = selectedItem["IDINDICE"]
		
	}

	if (selectedItem.inputId == "IDMAQUINA") {
		
			var dataset = consultaInformacaoDaMaquina(selectedItem)
			
			console.log("dataset 1 :" + dataset)
			
			document.getElementById("NUMEROPNEUS").value = dataset.values.length
			
			for (var x = 0; x < dataset.values.length; x++) {
				
			console.log("dataset.values.length 2 :" + dataset.values.length )
			
	        var row = dataset.values[x];
		
	        
		        //AQUI DENTRo chamar a função de adicionar linha e depois preencher a linha com os dados da row do dataset
	        console.log("Entrou em dataset linha: "+x)
	        
	        if (row["IDOBJOF"] !=""){
	        addLinhaTabela("TABELA_PNEUS")
	        console.log("Adicionou linha da tabela")
	        console.log("row[IDOBJOF]" + row["IDOBJOF"])
	        			
	        document.getElementById("IDPNEU___"+document.getElementById("SET_ULTIMO_VALOR").value).value = row["IDOBJOF"]
	        document.getElementById("IDHISTINDICADOR___"+document.getElementById("SET_ULTIMO_VALOR").value).value = row["IDHISTINDICADOR"]
	        document.getElementById("LABELPOSICAOPNEU___"+document.getElementById("SET_ULTIMO_VALOR").value).innerHTML = "Pneu "+row["POSICAO_PNEU"]
	        reloadZoomFilterValues("NOMEINDICEACOMPANHAMENTO___"+document.getElementById("SET_ULTIMO_VALOR").value, "IDTIPOOBJ," + row["IDTIPOOBJ"])
	        
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
	
}}

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
    
	try{
	    var constraints = new Array(c1);
	    console.log("constraints:" + constraints )
	    //Define os campos para ordenação
	    var sortingFields = new Array("IDOBJOFPAI");
	    console.log("sortingFields:" + sortingFields)
	    //Busca o dataset
	    var dataset = DatasetFactory.getDataset("ds_Objeto_Manutencao_Pneu", null, constraints, null);
	    console.log("dataset" + dataset)

	    return dataset
	    
	}catch (e){
		console.log("datasetee" + e)
		return e
	}
}