function showCamera(param) { 
	JSInterface.showCamera(param); 
}
//==============================================================================================================================================
function data(campo){
	var dateTime = FLUIGC.calendar(campo, {
	    pickDate: true,
	    pickTime: false,
	    sideBySide: false,
	    minDate: new Date()
	});
}
//==============================================================================================================================================
function dataColeta(campo){
	var dateTime = FLUIGC.calendar(campo, {
	    pickDate: true,
	    pickTime: true,
	    sideBySide: true,
	    minDate: new Date()
	});
}
//==============================================================================================================================================
function onLoad(){
	dataSolicitacao(document.getElementById("DATASOLICITACAO"))
	mostraFormulario()
	FLUIGC.switcher.init("#CHECKLISTACORDOGESTORSAIDA")
	FLUIGC.switcher.init("#MOBILIZACAOACEITEDESTINATARIO")
	FLUIGC.switcher.init("#MOBILIZACAOOSREMETENTEDEST")
	FLUIGC.switcher.init("#FRETETIPOLOGISTICA")
	FLUIGC.switcher.init("#CHECKLISTACORDOGESTORENTR")
	FLUIGC.switcher.init("#CHECKLISTOSGESTORENTR")
	habilitaCampoNFparaTransporte()
	liberaOpcoesTipoFrete()
	FLUIGC.switcher.initAll("#TABELA_OUTROS")
	FLUIGC.switcher.initAll("#TABELA_BATERIA")
	FLUIGC.switcher.initAll("#TABELA_CARREGADORES")
	FLUIGC.switcher.initAll("#TABELA_ACESSORIOS")
	bloqueiaCamposTabelasPaiFilho()
}
//==============================================================================================================================================
function tipoTorre(tipo){
	tipo.value === "Montada" ?
		document.getElementById("ALTURAFINAL").readOnly = false : 
			document.getElementById("ALTURAFINAL").readOnly = true
			document.getElementById("ALTURAFINAL").value = ""
} 
//==============================================================================================================================================
function dataSolicitacao(campo){
	if (campo.value == ""){			
			var data = new Date()
			var d = data.getDate() < 10 ? ("0"+data.getDate()) : data.getDate()
			var m = (data.getMonth()+1) < 10 ? ("0"+(data.getMonth()+1)) : (data.getMonth()+1)
			var y = data.getFullYear()
			
			data = d +"/"+ m +"/"+ y
			campo.value = data
		}
}
//==============================================================================================================================================
function addLinhaTabela(tabela){
	
	wdkAddChild(tabela)
	FLUIGC.switcher.initAll("#"+tabela)
	
}
//==============================================================================================================================================
function deleteLinhaTabela(campo, tabela){
	if(document.getElementById("WKNumState").value == "5"){
		fnWdkRemoveChild(campo);
	}
}
//==============================================================================================================================================
function botaoSwitch(campo){
	/* No checklist esta função serve para as tabelas Pai X Filho
	 *Já que os campos radio não funcionam bem, tive que criar campos separados e
	 * utilizar a função seguinte para desmarcar os outros simulando a funcionalidade dos campos radio
	 */
	if (FLUIGC.switcher.getState("#"+campo.id)){
		var linha = campo.parentNode.parentNode.parentNode.parentNode.parentNode
		var botao = null
		console.log(linha)
		var max = linha.cells.length + 1
		for (var i=0;i<max;i++){
			try{
				console.log("========"+i+"========")
				console.log(linha.cells[i].getElementsByTagName("input"))
				botao = linha.cells[i].getElementsByTagName("input")[0]
				console.log("Elemento: " +botao)
				
				console.log("Classe: " +botao.className)
				
				console.log("Botão: " +botao.getAttribute( "id" ))
				
				console.log("Campo: " +campo.id)
				//OUTROSSAIDA3___4
				if (botao.getAttribute( "id" ).substring(0,9) == campo.id.substring(0,9) && botao.className != "form-control"
					&& botao.getAttribute( "id" ) != campo.id){
					if (botao != undefined){
						FLUIGC.switcher.setFalse("#"+botao.getAttribute( "id" ))
					}
				}
			} catch (e) {
				console.log("Catch: "+e)
			}
		}
	}
	
}
//==============================================================================================================================================
function tipoEquipamento(tipo){
	
	if(tipo == "MAQUINASECAMINHOES"){
		document.getElementById("MAQUINASECAMINHOES").style.display = "block";
		document.getElementById("MAQUINAELETRICA").style.display = "none";
		document.getElementById("EMPILHADEIRA").style.display = "none";
	} else if(tipo == "MAQUINAELETRICA"){
		document.getElementById("MAQUINASECAMINHOES").style.display = "none";
		document.getElementById("MAQUINAELETRICA").style.display = "block";
		document.getElementById("EMPILHADEIRA").style.display = "none";
	} else if(tipo == "EMPILHADEIRA"){
		document.getElementById("MAQUINASECAMINHOES").style.display = "none";
		document.getElementById("MAQUINAELETRICA").style.display = "none";
		document.getElementById("EMPILHADEIRA").style.display = "block";
	} else {
		document.getElementById("MAQUINASECAMINHOES").style.display = "none";
		document.getElementById("MAQUINAELETRICA").style.display = "none";
		document.getElementById("EMPILHADEIRA").style.display = "none";
	}
		
}
//==============================================================================================================================================
function setSelectedZoomItem(selectedItem) {
	console.log("SelectedItem function")
	if (selectedItem.inputId == "EQUIPAMENTO") {
		console.log("Equipamento")
		setZoomData("SERIE", selectedItem["SERIE"])
		document.getElementById("MODELO").value = selectedItem["MODELO"]
		document.getElementById("HORIMETRO").value = selectedItem["HORIMETRO"]
		document.getElementById("ANO").value = selectedItem["ANO"]
		document.getElementById("PLACA").value = selectedItem["PLACA"]
		document.getElementById("CHASSI").value = selectedItem["CHASSI"]
		document.getElementById("LOCALORIGEM").value = selectedItem["LOCALORIGEM"]
		document.getElementById("CCORIGEM").value = selectedItem["CCORIGEM"]
		document.getElementById("RESPORIGEM").value = selectedItem["RESPONSAVEL"]
		document.getElementById("PRECOAQUISICAO").value = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(selectedItem["AQUISICAO"])
	}
	if (selectedItem.inputId == "SERIE") {
		setZoomData("EQUIPAMENTO", selectedItem["EQUIPAMENTO"])
		document.getElementById("MODELO").value = selectedItem["MODELO"]
		document.getElementById("HORIMETRO").value = selectedItem["HORIMETRO"]
		document.getElementById("ANO").value = selectedItem["ANO"]
		document.getElementById("PLACA").value = selectedItem["PLACA"]
		document.getElementById("CHASSI").value = selectedItem["CHASSI"]
		document.getElementById("LOCALORIGEM").value = selectedItem["LOCALORIGEM"]
		document.getElementById("CCORIGEM").value = selectedItem["CCORIGEM"]
		document.getElementById("RESPORIGEM").value = selectedItem["RESPONSAVEL"]
		document.getElementById("PRECOAQUISICAO").value = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(selectedItem["AQUISICAO"])
	}
	if (selectedItem.inputId == "REMETENTECNPJ") {
		document.getElementById("REMETENTENOME").value = selectedItem["NOMEFANTASIA"]
		document.getElementById("REMETENTEENDERECO").value = selectedItem["ENDERECO"]
		document.getElementById("REMETENTECIDADE").value = selectedItem["CIDADE"]
		document.getElementById("REMETENTEESTADO").value = selectedItem["ESTADO"]
		document.getElementById("REMETENTENUMERO").value = selectedItem["NUMERO"]
		document.getElementById("REMETENTEBAIRRO").value = selectedItem["BAIRRO"]
		document.getElementById("REMETENTECEP").value = selectedItem["CEP"]
	}
	if (selectedItem.inputId == "DESTINATARIOCNPJ") {
		document.getElementById("DESTINATARIONOME").value = selectedItem["NOMEFANTASIA"]
		document.getElementById("DESTINATARIOENDERECO").value = selectedItem["ENDERECO"]
		document.getElementById("DESTINATARIOCIDADE").value = selectedItem["CIDADE"]
		document.getElementById("DESTINATARIOESTADO").value = selectedItem["ESTADO"]
		document.getElementById("DESTINATARIONUMERO").value = selectedItem["NUMERO"]
		document.getElementById("DESTINATARIOBAIRRO").value = selectedItem["BAIRRO"]
		document.getElementById("DESTINATARIOCEP").value = selectedItem["CEP"]
	}

	if (selectedItem.inputId == "RESPDESTINO") {
		document.getElementById("EMAILDESTINATARIO").value = selectedItem["EMAIL"]
	}

	if (selectedItem.inputId == "LEVANTAMENTONUMEROOSENTR") {
		console.log(selectedItem)
		var numeroOS = document.getElementById("LEVANTAMENTONUMEROOSENTR").value
		var c1 = DatasetFactory.createConstraint("NUMEROMOV", numeroOS, numeroOS, ConstraintType.MUST);
		var constraints = new Array(c1);
		try{
			var dataset = DatasetFactory.getDataset("ds_Movimentos_Relacionados_OS", null, constraints, null);
			 var row = dataset.values[0];  
				console.log(row)
			 
			document.getElementById("LEVANTAMENTOOSRELACIONADOSENTR").value = row["Lista"];
			
		}catch(e){
		 console.log(e);
		}
	}

	if (selectedItem.inputId == "LEVANTAMENTONUMEROOSSAIDA") {
		console.log(selectedItem)
		var numeroOS = document.getElementById("LEVANTAMENTONUMEROOSSAIDA").value
		var c1 = DatasetFactory.createConstraint("NUMEROMOV", numeroOS, numeroOS, ConstraintType.MUST);
		var constraints = new Array(c1);
		try{
			var dataset = DatasetFactory.getDataset("ds_Movimentos_Relacionados_OS", null, constraints, null);
			 var row = dataset.values[0];  
				console.log(row)
			 
			document.getElementById("LEVANTAMENTOOSRELACIONADOSSAID").value = row["Lista"];
			
		}catch(e){
		 console.log(e);
		}
	}
}

function setZoomData(instance, value) {
	window[instance].setValue(value);
}

function removedZoomItem(removedItem) {

	if (removedItem.inputId == "EQUIPAMENTO") {
		window["SERIE"].clear();
		document.getElementById("MODELO").value = ""
		document.getElementById("HORIMETRO").value = ""
		document.getElementById("ANO").value = ""
		document.getElementById("PLACA").value = ""
		document.getElementById("CHASSI").value = ""
		document.getElementById("LOCALORIGEM").value = ""
		document.getElementById("CCORIGEM").value = ""
		document.getElementById("RESPORIGEM").value = ""
		document.getElementById("PRECOAQUISICAO").value = ""
	}
	if (removedItem.inputId == "SERIE") {
		window["EQUIPAMENTO"].clear();
		document.getElementById("MODELO").value = ""
		document.getElementById("HORIMETRO").value = ""
		document.getElementById("ANO").value = ""
		document.getElementById("PLACA").value = ""
		document.getElementById("CHASSI").value = ""
		document.getElementById("LOCALORIGEM").value = ""
		document.getElementById("CCORIGEM").value = ""
		document.getElementById("RESPORIGEM").value = ""
		document.getElementById("PRECOAQUISICAO").value = ""
	}
}
//==============================================================================================================================================
function liberaObservacaoCheckListGestorEntr(){
	if (FLUIGC.switcher.getState("#CHECKLISTACORDOGESTORENTR")){
		document.getElementById("CHECKLISTOBSGESTORENTR").disabled = true
	} else {
		document.getElementById("CHECKLISTOBSGESTORENTR").disabled = false
	}
}
//==============================================================================================================================================
function liberaOpcoesTipoFrete(){
	if (!FLUIGC.switcher.getState("#FRETETIPOLOGISTICA")){
		document.getElementById("FRETEVALORLOGISTICA").disabled = true
		document.getElementById("DADOSMOTORISTAFRETEINTERNO").style.display = "none"
	} else {
		document.getElementById("FRETEVALORLOGISTICA").disabled = false
		document.getElementById("DADOSMOTORISTAFRETEINTERNO").style.display = "block"
	}
}
//==============================================================================================================================================
function buscarLocalizacaoAtual(){
	
	var equipamento = document.getElementById("EQUIPAMENTO").value
	try{
        var c1 = DatasetFactory.createConstraint("EQUIPAMENTO", equipamento, equipamento, ConstraintType.MUST);
    	var constraints = new Array(c1);
    	var dataset = DatasetFactory.getDataset("ds_dados_ativos", null, constraints, null);
    	
    	var row = dataset.values[0]; 
    	document.getElementById("PCMCCATUAL").value = row[dataset.columns[5]];
    	document.getElementById("PCMLOCALIZACAOATUAL").value = row[dataset.columns[4]];
    	
    	if (document.getElementById("CCORIGEM").value == row[dataset.columns[5]] &&
    		document.getElementById("LOCALORIGEM").value == row[dataset.columns[4]]){
    			
			FLUIGC.toast({
				title: 'Localização incorreta: ',
				message: 'Localização ainda não alterada.',
				type: 'warning'
			});
    	} else {
			FLUIGC.toast({
				title: 'Localização correta: ',
				message: 'Localização alterada corretamente.',
				type: 'success'
			});
    	}
    	
    	//console.log(dataset.values)
		return true
    }catch (e){
    	console.log( e )
    }
	
}
//==============================================================================================================================================
function habilitaCampoNFparaTransporte(){
	if ($("#EMISSORNFTRANSPORTE").val() == "Tradimaq"){
		document.getElementById("NFTRANSPORTE").parentNode.style.display = "block"
		document.getElementById("NFTRANSPORTEHIDDEN").parentNode.style.display = "none"
	} else {
		document.getElementById("NFTRANSPORTE").parentNode.style.display = "none"
		document.getElementById("NFTRANSPORTEHIDDEN").parentNode.style.display = "block"
		try{
			window["NFTRANSPORTE"].clear();
		}catch (e){
			console.log(e)
		}
	}
}
//==============================================================================================================================================
function mostraFormulario(){

	document.getElementById("NAV1").classList.add("active")
	document.getElementById("NAV2").classList.remove("active")
	
	document.getElementById("FORMULARIO").style.display = "block"
	document.getElementById("CHECKLISTS").style.display = "none"
	
}
//==============================================================================================================================================
function mostraChecklist(){
	
	if (document.getElementById("TIPOEQUIPAMENTO").value != "SELECIONE"){
		document.getElementById("NAV1").classList.remove("active")
		document.getElementById("NAV2").classList.add("active")
	
		document.getElementById("FORMULARIO").style.display = "none"
		document.getElementById("CHECKLISTS").style.display = "block"
		tipoEquipamento(document.getElementById("TIPOEQUIPAMENTO").value)		
	} else {
		FLUIGC.toast({
		title: 'Checklist: ',
		message: 'Favor selecionar o Tipo de Equipamento para visualizar o checklist.',
		type: 'info'
		});
	}
	
}
//==============================================================================================================================================
function verificaAprovacaoMovimentosOS(numeroOS, validaAprova){

	var c1 = DatasetFactory.createConstraint("NUMEROMOV", numeroOS, numeroOS, ConstraintType.MUST);
	var constraints = new Array(c1);
	try{
		var dataset = DatasetFactory.getDataset("ds_Aprovacao_Relacionados_OS", null, constraints, null);
		var row = dataset.values[0];  
			console.log(row) //row["Lista"]
			var movimentos = ""
			var i = 0
			do{
				
				if (validaAprova.value != "NAOAPROVADO"){
					if (row["APROVACAO"] == "NAOAPROVADO"){
						movimentos = movimentos + row["NUMEROMOV"] + ""
						validaAprova.value = "NAOAPROVADO"
					} else {
						validaAprova.value = "APROVADO"
					}
				} else {
					if (row["APROVACAO"] == "NAOAPROVADO"){
						movimentos = movimentos + ", " + row["NUMEROMOV"]
						validaAprova.value = "NAOAPROVADO"
					} else {
						validaAprova.value = "APROVADO"
					}
				}
				
				i++
			}while (i < dataset.values)
		 
			if (validaAprova.value == "NAOAPROVADO"){
				FLUIGC.toast({
					title: 'Movimenos não aprovados: ',
					message: 'O(s) movimento(s) '+movimentos+ ' não estão aprovados!',
					type: 'info'
				});
			} else {
				FLUIGC.toast({
					title: 'Movimentos aprovados: ',
					message: 'Todos os movimentos aprovados!',
					type: 'succes'
				});
			}
		
	}catch(e){
	 validaAprova.value = "APROVADO"
	}
}
//==============================================================================================================================================
function bloqueiaCamposTabelasPaiFilho(){
	if (document.getElementById("WKNumState").value != "5"){
		
		$("input[id^='BATERIASAIDA1___']").each(function (index) {
			FLUIGC.switcher.isReadOnly("#"+$(this).attr("id"), true)
		})
		$("input[id^='BATERIASAIDA2___']").each(function (index) {
			FLUIGC.switcher.isReadOnly("#"+$(this).attr("id"), true)
		})
		$("input[id^='BATERIASAIDA3___']").each(function (index) {
			FLUIGC.switcher.isReadOnly("#"+$(this).attr("id"), true)
		})
		
		$("input[id^='NSERIEBATERIA___']").each(function (index) {
			$(this).prop('disabled', true);
		})
		//==============================================================
		$("input[id^='CARREGADORESSAIDA1___']").each(function (index) {
			FLUIGC.switcher.isReadOnly("#"+$(this).attr("id"), true)
		})
		$("input[id^='CARREGADORESSAIDA2___']").each(function (index) {
			FLUIGC.switcher.isReadOnly("#"+$(this).attr("id"), true)
		})
		$("input[id^='CARREGADORESSAIDA3___']").each(function (index) {
			FLUIGC.switcher.isReadOnly("#"+$(this).attr("id"), true)
		})
		
		$("input[id^='NSERIECARREGADORES___']").each(function (index) {
			$(this).prop('disabled', true);
		})
		//==============================================================
		$("input[id^='ACESSORIOSSAIDA1___']").each(function (index) {
			FLUIGC.switcher.isReadOnly("#"+$(this).attr("id"), true)
		})
		$("input[id^='ACESSORIOSSAIDA2___']").each(function (index) {
			FLUIGC.switcher.isReadOnly("#"+$(this).attr("id"), true)
		})
		$("input[id^='ACESSORIOSSAIDA3___']").each(function (index) {
			FLUIGC.switcher.isReadOnly("#"+$(this).attr("id"), true)
		})
		
		$("input[id^='NSERIEACESSORIOS___']").each(function (index) {
			$(this).prop('disabled', true);
		})
		//==============================================================
		$("input[id^='OUTROSSAIDA1___']").each(function (index) {
			FLUIGC.switcher.isReadOnly("#"+$(this).attr("id"), true)
		})
		$("input[id^='OUTROSSAIDA2___']").each(function (index) {
			FLUIGC.switcher.isReadOnly("#"+$(this).attr("id"), true)
		})
		$("input[id^='OUTROSSAIDA3___']").each(function (index) {
			FLUIGC.switcher.isReadOnly("#"+$(this).attr("id"), true)
		})
		
		$("input[id^='OUTROS1DESCRICAO___']").each(function (index) {
			$(this).prop('disabled', true);
		})
		
	}
	
	if (document.getElementById("WKNumState").value != "35"){		
		$("input[id^='BATERIAENTR1___']").each(function (index) {
			FLUIGC.switcher.isReadOnly("#"+$(this).attr("id"), true)
		})
		$("input[id^='BATERIAENTR2___']").each(function (index) {
			FLUIGC.switcher.isReadOnly("#"+$(this).attr("id"), true)
		})
		$("input[id^='BATERIAENTR3___']").each(function (index) {
			FLUIGC.switcher.isReadOnly("#"+$(this).attr("id"), true)
		})
		
		$("input[id^='CARREGADORESENTR1___']").each(function (index) {
			FLUIGC.switcher.isReadOnly("#"+$(this).attr("id"), true)
		})
		$("input[id^='CARREGADORESENTR2___']").each(function (index) {
			FLUIGC.switcher.isReadOnly("#"+$(this).attr("id"), true)
		})
		$("input[id^='CARREGADORESENTR3___']").each(function (index) {
			FLUIGC.switcher.isReadOnly("#"+$(this).attr("id"), true)
		})
	
		$("input[id^='ACESSORIOSENTR1___']").each(function (index) {
			FLUIGC.switcher.isReadOnly("#"+$(this).attr("id"), true)
		})
		$("input[id^='ACESSORIOSENTR2___']").each(function (index) {
			FLUIGC.switcher.isReadOnly("#"+$(this).attr("id"), true)
		})
		$("input[id^='ACESSORIOSENTR3___']").each(function (index) {
			FLUIGC.switcher.isReadOnly("#"+$(this).attr("id"), true)
		})
		
		$("input[id^='OUTROSENTR1___']").each(function (index) {
			FLUIGC.switcher.isReadOnly("#"+$(this).attr("id"), true)
		})
		$("input[id^='OUTROSENTR2___']").each(function (index) {
			FLUIGC.switcher.isReadOnly("#"+$(this).attr("id"), true)
		})
		$("input[id^='OUTROSENTR3___']").each(function (index) {
			FLUIGC.switcher.isReadOnly("#"+$(this).attr("id"), true)
		})
	}
}