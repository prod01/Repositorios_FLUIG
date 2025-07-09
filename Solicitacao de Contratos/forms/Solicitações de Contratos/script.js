function addLinhaTabela(tabela){
	var task= document.getElementById('NUMERO_ATIVIDADE').value 
	if(task=='0'){ 
	
	console.log("task" + task)							
	wdkAddChild(tabela);
	var inputs = $("[mask]");
    MaskEvent.initMask(inputs);

	var tbl = document.getElementById(tabela).getElementsByTagName('tbody')[0];
	var row = tbl.rows.length;
	var index1 = tbl.rows[1].cells[1].getElementsByClassName('form-control')[0].id;
	var index2 = tbl.rows[row-1].cells[1].getElementsByClassName('form-control')[0].id;
	var tipo = document.getElementById('TIPO_SOLICITACAO').value
	
	console.log("IF task" + task)	
		  if(tipo == "CONTRATO"){ 
				document.getElementById('TABELA_CONTRATOS_PRIMEIRO').value = index1.substring(17,index1.length);
				document.getElementById('TABELA_CONTRATOS_ULTIMO').value = index2.substring(17,index2.length);
				
		      }
		  else{
			  console.log("caiu else CONTRATO")
		  }
		  
		  if(tipo == "ADTIVO"){
				document.getElementById('TABELA_ADTIVOS_PRIMEIRO').value = index1.substring(15,index1.length);
				document.getElementById('TABELA_ADTIVOS_ULTIMO').value = index2.substring(15,index2.length);
		    }
		  else{
			  console.log("caiu else ADTIVO")
		  }
}

}
//####################################################################################################
function deleteLinhaTabela(campo, tabela){
	
	var task= document.getElementById('NUMERO_ATIVIDADE').value 
	console.log("IF task DELETA" + task)
	if(task=='0'){ 
		
	fnWdkRemoveChild(campo);//3.02.00000016487

	var tbl = document.getElementById(tabela).getElementsByTagName('tbody')[0];
	var row = tbl.rows.length;
	var index1 = tbl.rows[1].cells[1].getElementsByClassName('form-control')[0].id;
	var index2 = tbl.rows[row-1].cells[1].getElementsByClassName('form-control')[0].id;
	
 
	 	
		   try {
				
					document.getElementById('TABELA_CONTRATOS_PRIMEIRO').value = index1.substring(17,index1.length);
					document.getElementById('TABELA_CONTRATOS_ULTIMO').value = index2.substring(17,index2.length);
					
					
					document.getElementById('TABELA_ADTIVOS_PRIMEIRO').value = index1.substring(15,index1.length);
					document.getElementById('TABELA_ADTIVOS_ULTIMO').value = index2.substring(15,index2.length);
		
				
			} catch (e){
		
					document.getElementById('TABELA_CONTRATOS_PRIMEIRO').value = "0";
					document.getElementById('TABELA_CONTRATOS_ULTIMO').value = "0";
					document.getElementById('TABELA_CONTRATOS_PRIMEIRO').value = index1.substring(17,index1.length);
					document.getElementById('TABELA_CONTRATOS_ULTIMO').value = index2.substring(15,index2.length);
			
			}
   }
}
//####################################################################################################
function showCamera(param) { 
	JSInterface.showCamera(param); 
}
//####################################################################################################
function onload(){
	mostraTipoSolicitacao()
	sugestaoFornecedor()
	passivoMulta()
	valorRadio()
	
}
//####################################################################################################
function mostraTipoSolicitacao(){
	var tipo = document.getElementById("TIPO_SOLICITACAO").value
	console.log("var tipo::" +tipo)
	console.log("entrou a func")
	
	if (tipo=="CONTRATO"){ 
		console.log("entrou a if")
		document.getElementById("CONTRATOS").style.display = "block"
		document.getElementById("ADTIVOS").style.display = "none"
		document.getElementById("RECISAO").style.display = "none"
	}
	
	else if (tipo=="ADTIVO"){
		console.log("entrou a ifelse")
		document.getElementById("CONTRATOS").style.display = "none"
		document.getElementById("ADTIVOS").style.display = "block"
		document.getElementById("RECISAO").style.display = "none"
	}
	else if (tipo=="RECISAO"){
		console.log("entrou a else ")
		document.getElementById("CONTRATOS").style.display = "none"
		document.getElementById("ADTIVOS").style.display = "none"
		document.getElementById("RECISAO").style.display = "block"
	}
	
	
	
}
//####################################################################################################
function calculaContratos(){
	
	console.log("entrou calculaContratos")
	
	var pegarUltimoContratos = document.getElementById("TABELA_CONTRATOS_ULTIMO").value
	var i = 1;
	var total = 0
	
	do { 
		console.log("Execução de número: "+i)
		
		try{ 
				var quantMensalContratos = document.getElementById("QUANT_MENSAL_CONTRATOS___" + i).value
				console.log("quantMensalContratos: "+quantMensalContratos)
				var precoUnidadeContratos = document.getElementById("PRECO_UNID_CONTRATOS___" + i).value
				console.log("precoUnidadeContratos: "+precoUnidadeContratos)
				
				var valorSemPontoquant = quantMensalContratos.replace(".", "");
				console.log("trataQuantVirgulaContratos: "+valorSemPontoquant)
				var valorSempontoPreco = precoUnidadeContratos.replace(".", "");
				console.log("trataQuantVirgulaContratos: "+valorSemPontoquant)
				
				var trataQuantVirgulaContratos =  valorSemPontoquant.replace(",", ".");
				console.log("trataQuantVirgulaContratos: "+trataQuantVirgulaContratos)
				var trataPrecoVirgulaContratos =  valorSempontoPreco.replace(",", ".");
				console.log("trataPrecoVirgulaContratos: "+trataPrecoVirgulaContratos)
				
				
				trataQuantVirgulaContratos = parseFloat(trataQuantVirgulaContratos)
				trataPrecoVirgulaContratos = parseFloat(trataPrecoVirgulaContratos)
				
				console.log("trataQuantVirgulaContratos: "+trataQuantVirgulaContratos)
				console.log("trataPrecoVirgulaContratos: "+trataPrecoVirgulaContratos)
					
				total = total + (trataQuantVirgulaContratos * trataPrecoVirgulaContratos)
				
				console.log("total: "+total)
				
				document.getElementById("TOTAL_QQP_CONTRATOS").value = total
				
				console.log("entrou calculaContratos do " + pegarUltimoContratos)
		}catch(e){
			
		}
		
		i= i+1
		} 
	while (i <= pegarUltimoContratos)

}
//####################################################################################################
function calculaAditivos(){

	console.log("entrou calculaAditivos")
	
	var pegarUltimoAdtivos= document.getElementById("TABELA_ADTIVOS_ULTIMO").value
	var i = 1;
	var total = 0
	
	do { 
		 
		console.log("Execução de número: "+i)
		
		try{ 
		
			var quantMensalAdtivos =  document.getElementById("QUANT_MENSAL_ADTIVOS___" + i).value
			console.log("quantMensalAdtivos: "+quantMensalAdtivos)
			var precoUnidadeAdtivos = document.getElementById("PRECO_UNID_ADTIVOS___" + i).value
			console.log("precoUnidadeAdtivos: "+precoUnidadeAdtivos)
		
			var trataQuantVirgulaAdtivos =  quantMensalAdtivos.replace(",", ".");
			console.log("trataQuantVirgulaAdtivos: "+trataQuantVirgulaAdtivos)
			var trataPrecoVirgulaAdtivos =  precoUnidadeAdtivos.replace(",", ".");
			console.log("trataPrecoVirgulaAdtivos: "+trataPrecoVirgulaAdtivos)
			
			trataQuantVirgulaAdtivos = parseFloat(trataQuantVirgulaAdtivos)
			trataPrecoVirgulaAdtivos = parseFloat(trataPrecoVirgulaAdtivos)
			
			console.log("trataQuantVirgulaAdtivos: "+trataQuantVirgulaAdtivos)
			console.log("trataPrecoVirgulaAdtivos: "+trataPrecoVirgulaAdtivos)
				
			total = total + (trataQuantVirgulaAdtivos * trataPrecoVirgulaAdtivos)
			
			console.log("total: "+total)
			
			document.getElementById("TOTAL_QQP_ADTIVOS").value = total
			
			console.log("entrou calcula Adtivos do " + pegarUltimoAdtivos)
		
		}catch(e){
			
		}
		i= i+1
		
		
	}while (i <= pegarUltimoAdtivos);


}
//####################################################################################################
function setSelectedZoomItem(selectedItem) {
console.log("entrou setselectzoom")
	if (selectedItem.inputId == "CENTRO_DE_CUSTO") {
		//console.log("entrou setselectzoom if")
		//setZoomData("RESP_CENTRO_DE_CUSTO",
				//selectedItem["NOME"]);
		
		document.getElementById("RESP_CENTRO_DE_CUSTO").value = selectedItem["NOME"]
		
	}
	if (selectedItem.inputId == "N_CONTRATO_ADTIVOS") {
		//console.log("entrou setselectzoom if")
		//setZoomData("RESP_CENTRO_DE_CUSTO",
			//selectedItem["NOME"]);
	
		document.getElementById("RAZAO_SOCIAL_ADTIVOS").value = selectedItem["NOMEFANTASIA"]
	}
	if (selectedItem.inputId == "N_CONTRATO_RESCISAO") {
		//console.log("entrou setselectzoom if")
		//setZoomData("RESP_CENTRO_DE_CUSTO",
			//selectedItem["NOME"]);
	
		document.getElementById("RAZAO_SOCIAL_RESCISAO").value = selectedItem["NOMEFANTASIA"]
	}
	if (selectedItem.inputId == "NUMERO_DO_CONTRATO_INTE") {
		//console.log("entrou setselectzoom if")
		//setZoomData("RESP_CENTRO_DE_CUSTO",
			//selectedItem["NOME"]);
	
		document.getElementById("RAZAO_SOCIAL").value = selectedItem["NOMEFANTASIA"]
	}
	
	
}
//####################################################################################################
function setZoomData(instance, value) {
	window[instance].setValue(value);
}
//####################################################################################################
function removedZoomItem(removedItem) {

	if (removedItem.inputId == "CENTRO_DE_CUSTO") {
		console.log("Retornando resultado removedZoomItem");
		console.log(removedItem);

		document.getElementById("RESP_CENTRO_DE_CUSTO").value = ""
		//window["RESP_CENTRO_DE_CUSTO"].clear();
	}
	if (removedItem.inputId == "N_CONTRATO_ADTIVOS") {
		console.log("Retornando resultado removedZoomItem");
		console.log(removedItem);

		document.getElementById("RAZAO_SOCIAL_ADTIVOS").value = ""
		//window["RESP_CENTRO_DE_CUSTO"].clear();
	}
	if (removedItem.inputId == "N_CONTRATO_RESCISAO") {
		console.log("Retornando resultado removedZoomItem");
		console.log(removedItem);

		document.getElementById("RAZAO_SOCIAL_RESCISAO").value = ""
		//window["RESP_CENTRO_DE_CUSTO"].clear();
	}
	if (removedItem.inputId == "NUMERO_DO_CONTRATO_INTE") {
		console.log("Retornando resultado removedZoomItem");
		console.log(removedItem);

		document.getElementById("RAZAO_SOCIAL").value = ""
		//window["RESP_CENTRO_DE_CUSTO"].clear();
	}
	
}
//####################################################################################################
function sugestaoFornecedor(){
	console.log("function sugestãoFornecedor");
	
	var sugestaoFornecedor = document.getElementById("SUGESTAO_FORNECEDOR").value
	console.log("sugestãoFornecedor" + sugestaoFornecedor );
	if (sugestaoFornecedor == "VAZIO"){
		console.log("sugestãoFornecedor VAZIO" + sugestaoFornecedor );
		$('#RAZAO_SOCIAL_SUGESTAO').prop('disabled', true);
		$('#RESPONSAVEL_SUGESTAO').prop('disabled', true);
		$('#CNPJ_SUGESTAO').prop('disabled', true);
		$('#TELEFONE_SUGESTAO').prop('disabled', true);
		$('#EMAIL_SUGESTAO').prop('disabled', true);
		$('#JUSTIFICATIVA_SUGESTAO').prop('disabled', true);
		
	}
	if (sugestaoFornecedor == "SIM"){
		console.log("sugestãoFornecedor NÃO" + sugestaoFornecedor );
		$('#RAZAO_SOCIAL_SUGESTAO').prop('disabled', false);
		$('#RESPONSAVEL_SUGESTAO').prop('disabled', false);
		$('#CNPJ_SUGESTAO').prop('disabled', false);
		$('#TELEFONE_SUGESTAO').prop('disabled', false);
		$('#EMAIL_SUGESTAO').prop('disabled', false);
		$('#JUSTIFICATIVA_SUGESTAO').prop('disabled', false);
		
		
	}
	if (sugestaoFornecedor == "NAO"){
		console.log("sugestãoFornecedor NÃO" + sugestaoFornecedor );
		$('#RAZAO_SOCIAL_SUGESTAO').prop('disabled', true);
		$('#RESPONSAVEL_SUGESTAO').prop('disabled', true);
		$('#CNPJ_SUGESTAO').prop('disabled', true);
		$('#TELEFONE_SUGESTAO').prop('disabled', true);
		$('#EMAIL_SUGESTAO').prop('disabled', true);
		$('#JUSTIFICATIVA_SUGESTAO').prop('disabled', true);
		
		
	}
}	
//####################################################################################################
function passivoMulta(){
		console.log("function passivoMulta");
		
		var passivoMulta = document.getElementById("MULTAS").value
		var disponilidadeFisica = document.getElementById("DISPONIBILIDADE_FISICA").value
		console.log("passivoMulta" + passivoMulta );
		if (passivoMulta == "VAZIO"){
			console.log("sugestãoFornecedor VAZIO" + passivoMulta );
			$('#MULTAS_PREVISTAS').prop('disabled', true);
			$('#PERCENTUAL_RECISAO').prop('disabled', true);
		
			
		}
		if (passivoMulta == "SIM"){
			console.log("sugestãoFornecedor NÃO" + passivoMulta );
			$('#MULTAS_PREVISTAS').prop('disabled', false);
			$('#PERCENTUAL_RECISAO').prop('disabled', false);
			
			
		}
		if (passivoMulta == "NAO"){
			console.log("sugestãoFornecedor NÃO" + passivoMulta );
			$('#MULTAS_PREVISTAS').prop('disabled', true);
			$('#PERCENTUAL_RECISAO').prop('disabled', true);
			
		}
		if (disponilidadeFisica == "VAZIO"){
			console.log("disponilidadeFisica == VAZIO"+ disponilidadeFisica );
			$('#ANEXO_DISPONIBILIDADE').prop('disabled', true);
			
			
		}
		if (disponilidadeFisica == "PADRAO"){
			console.log("disponilidadeFisica == PADRAO" + disponilidadeFisica );
			$('#ANEXO_DISPONIBILIDADE').prop('disabled', true);
			
			
		}
		if (disponilidadeFisica == "LOCATARIA"){
			console.log("disponilidadeFisica == LOCATARIA"+ disponilidadeFisica );
			$('#ANEXO_DISPONIBILIDADE').prop('disabled', false);
			
			
		}
		
		
}

function valorRadio(){
	console.log("entrou valorRadio" );
	
	var task= document.getElementById('NUMERO_ATIVIDADE').value 
	console.log("entrou valorRadio task" + task)
	
	var CRONOGRAMA_SERVICO = document.getElementsByName("CRONOGRAMA_SERVICO").value
	console.log("entrou valorRadio CRONOGRAMA_SERVICO"  + CRONOGRAMA_SERVICO)
	
	var MATERIAIS_ULTILIZADOS = document.getElementsByName("MATERIAIS_ULTILIZADOS").value
	console.log("entrou valorRadio MATERIAIS_ULTILIZADOS" + MATERIAIS_ULTILIZADOS) 
	
	var MOBILIZACAO_CLIENTE = document.getElementsByName("MOBILIZACAO_CLIENTE").value
	console.log("entrou valorRadio MOBILIZACAO_CLIENTE" + MOBILIZACAO_CLIENTE) 
	
	var DESMOBILIZACAO_CLIENTE = document.getElementsByName("DESMOBILIZACAO_CLIENTE").value
	console.log("entrou valorRadio DESMOBILIZACAO_CLIENTE"  + DESMOBILIZACAO_CLIENTE)
	
	var REGISTRO_CLT = document.getElementsByName("REGISTRO_CLT").value
	console.log("entrou valorRadio REGISTRO_CLT"  + REGISTRO_CLT)

	if(task==14){
		
//		document.getElementByName("CRONOGRAMA_SERVICO").value = selectedItem[CRONOGRAMA_SERVICO]
//		document.getElementByName("MATERIAIS_ULTILIZADOS").value = selectedItem[MATERIAIS_ULTILIZADOS]
//		document.getElementByName("MOBILIZACAO_CLIENTE").value = selectedItem[MOBILIZACAO_CLIENTE]
//		document.getElementByName("DESMOBILIZACAO_CLIENTE").value = selectedItem[DESMOBILIZACAO_CLIENTE]
//		document.getElementByName("REGISTRO_CLT").value = selectedItem[REGISTRO_CLT]
//		
		
	}
	
	
	
	
	
	
}

