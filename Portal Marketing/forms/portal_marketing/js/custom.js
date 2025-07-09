S//função que utiliza o seguinte método para capturar os dados o campo zoom e carrega-los nos respectivos campos.
//função setSelectedZoomItem esta contando quantas atividades tem por tecnico pela consulta 115 ou 116 no RM 
function setSelectedZoomItem(selectedItem) { 


	if (selectedItem.inputId == "TRANSFERECHAMADO"){
		console.log("entrou chapa tecnico")
		document.getElementById("CHAPATECNICO").value = selectedItem["USER_CODE"]
	
	}else{
		console.log('entrou na funck')
		console.log(selectedItem)
		
		var c1 = DatasetFactory.createConstraint("nmIncidente", selectedItem["nmIncidente"], selectedItem["nmIncidente"], ConstraintType.MUST);
		var constraints = new Array(c1);
		//mudar o data set 
		//teste:ds_tipo_solicitacoes
	    //produção:ds_tipo_solicitação
		try{
			var dataset = DatasetFactory.getDataset("class_serrviços_marketing", null, constraints, null);
			 var row = dataset.values[0];
				console.log("row"+row)
			
			var description = row["nmIncidente"]; // variavel receber o valor do dataset (Campo Descriação do incidente)
			document.getElementById("DESCRICAOSOLICITACAO").value = description
			console.log("description"+description)
			
			var papel = row["papel_responsavel"]; // variavel receber o valor do dataset (Campo papel responsável)
			document.getElementById("PAPEL").value = papel
			console.log("papel"+papel)
			
			var clas  = row["cdIncidente"]; // variavel receber o valor do dataset (Campo papel responsável)
			document.getElementById("CLASS_SERVICO").value = clas
			console.log("clas"+clas)
			
			var sla = row["nrPrazo"]; // variavel receber o valor do dataset (Campo SLA)
			document.getElementById("SLA").value = sla
			console.log("SLA"+sla) 
			
			try{
				console.log( "papel "+papel )
				var c1 = DatasetFactory.createConstraint("roleDescription", papel, papel, ConstraintType.MUST);
				console.log( "workflowRole "+c1 )
				var constraints = new Array(c1);
				console.log( "constraints 1  "+constraints )
				var dataset = DatasetFactory.getDataset("workflowRole", null, constraints, null);
				console.log( "dataset 1  "+dataset )
				var row = dataset.values[0];
				console.log( "row 1  " )
				console.log(row )
				var codpapel = row["workflowRolePK.roleId"];
				console.log( "codpapel 1  "+codpapel )
				
		        var c2 = DatasetFactory.createConstraint("workflowColleagueRolePK.roleId", codpapel, codpapel, ConstraintType.MUST);
		        console.log( "consultaUsuariosPapel papel: "+codpapel )
		        console.log( "c1:"+c2 )
		        var constraints = new Array(c2);
		        console.log( "constraints:"+constraints )
		    	var dataset = DatasetFactory.getDataset("workflowColleagueRole", null, constraints, null);
		    	console.log( "consultaUsuariosPapel dataset: "+dataset )  
		    var row = dataset.values[0];
		    var chapa = row["workflowColleagueRolePK.colleagueId"];
		    console.log( "chapa responsavel  "+chapa )
		    
		    document.getElementById("CHAPATECNICO").value = chapa
				
		    }catch (e){
		    	console.log( "consultaUsuariosPapel catch: "+e )
		    }
			
		}catch(e){
		 console.log( e);
		}
	
	
	}
	
	
}

function onload(){
	
	consultaDataHora();
	//vencimentoSLA();
	dataReabertura();
	someComentario(form);
	
	
	
}



function consultaUsuariosPapel(papel){
	//função confere quem e o responsavel pelo atendiemnto.
	try{
        var c1 = DatasetFactory.createConstraint("workflowColleagueRolePK.roleId", papel, papel, ConstraintType.MUST);
        console.log( "consultaUsuariosPapel papel: "+papel )
        console.log( "c1:"+c1 )
        var constraints = new Array(c1);
        console.log( "constraints:"+constraints )
    	var dataset = DatasetFactory.getDataset("workflowColleagueRole", null, constraints, null);
    	console.log( "consultaUsuariosPapel dataset: "+dataset )  
		return dataset
    }catch (e){
    	console.log( "consultaUsuariosPapel catch: "+e )
    }
}


function consultaDataHora(){
	var ATIVIDADE = document.getElementById("NUM_ATIVIDADE").value;
	var ATIVIDADE_PORX = document.getElementById("NUM_PROX_ATIVIDADE").value;
	console.log("ATIVIDADE" +ATIVIDADE )
	console.log("ATIVIDADE_PORX" +ATIVIDADE_PORX )
	
	if (ATIVIDADE == 9){ 
	console.log("ATIVIDADE" +ATIVIDADE )
	var c1 = DatasetFactory.createConstraint("processTaskPK.processInstanceId", document.getElementById("IDCHAMADO").value, document.getElementById("IDCHAMADO").value, ConstraintType.MUST);
	console.log("entrou!!!!!teste")
	var idchamd=document.getElementById("IDCHAMADO").value
	console.log("idchamado : "+ idchamd)
	var c2 = DatasetFactory.createConstraint("closureStatus", 0, 0, ConstraintType.MUST);
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
			campoSLAExtenso = document.getElementById("SLAEXTENSO")
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
	
	if (ATIVIDADE == 49){ 
		console.log("ATIVIDADE" +ATIVIDADE )
		console.log("entrou!!!!!teste")
		var c1 = DatasetFactory.createConstraint("processTaskPK.processInstanceId", document.getElementById("IDCHAMADO").value, document.getElementById("IDCHAMADO").value, ConstraintType.MUST);
		console.log("entrou!!!!!teste")
		var idchamd=document.getElementById("IDCHAMADO").value
		console.log("idchamado : "+ idchamd)
		var c2 = DatasetFactory.createConstraint("closureStatus", 0, 0, ConstraintType.MUST);
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
				campoSLAExtenso = document.getElementById("SLA_REVISAO")
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
	if (ATIVIDADE == 57){ 
		
		console.log("consultaDataHora ATV57" )
		console.log("ATIVIDADE" +ATIVIDADE )
		console.log("entrou!!!!!teste")
	
		document.getElementById("VENCIMENTOSLA").value = "Revisão"
		document.getElementById("DATAFECHAMENTO").value = ""
		
		
		var c1 = DatasetFactory.createConstraint("processTaskPK.processInstanceId", document.getElementById("IDCHAMADO").value, document.getElementById("IDCHAMADO").value, ConstraintType.MUST);
		
		var c2 = DatasetFactory.createConstraint("closureStatus", 0, 0, ConstraintType.MUST);
		var constraints = new Array(c1,c2);
		console.log("constraints")
		console.log(constraints)
		
				try{
					console.log("entrou try")
					var dataset = DatasetFactory.getDataset("processTask", null, constraints, null);
					console.log("entrou try")
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
									campoSLAExtenso = document.getElementById("SLAEXTENSO")
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
	
	
}



function alerta(mensagem){
	//se o renato tentar enviar a solicitação quando for trocar o sla vai aparecer o erro abaixo 
	
		FLUIGC.toast({
		title: 'Aviso:',
		message: 'Você não pode enviar essa solicitação, somente salvar',
		type: 'danger'
		});
						
}

function dataReabertura(){
	
	var ATIVIDADE = document.getElementById("NUM_ATIVIDADE").value;

	
	if (ATIVIDADE == 49){ 
		
		console.log("entrou dataReabertura" + ATIVIDADE)
		var vencimentoSLA = document.getElementById("VENCIMENTOSLA").value;
		
		console.log("entrou dataReabertura " + vencimentoSLA)
		console.log("entrou nesse if")
		 var date = new Date();
	     console.log(date)
	     var d = date.getDate();
			var m = date.getMonth() + 1;
			var a = date.getFullYear();
			
			if (m < 10) {
				m = "0" + m;
			}
			
			if (d < 10) {
				d = "0" + d;
			}
			
			var dia = d + "/" + m + "/" + a;
	
			var h = date.getHours();
			var m = date.getMinutes();
			
			if ( h < 10) {
				h = "0" + h;
			}
		
			if ( m < 10) {
				m = "0" + m;
			}
	
			var hor = h + ":" + m;
			
			var dataFull = dia + " " + hor;
			document.getElementById("DATA_REVISAO").value=dataFull

	}

     
     console.log(dataFull)
}

//function vencimentoSLA(){
//	
//	
//
//	var ATIVIDADE = document.getElementById("NUM_ATIVIDADE").value;
//	var vencimentoSLA = document.getElementById("VENCIMENTOSLA").value;
//	
//	if (ATIVIDADE == 9){ 
//	
//	//window["TRANSFERECHAMADO"].clear()
//	var text = document.getElementById("SLAEXTENSO").value
//	console.log("ENTROU VENCIENTO Sla")
//	var myArray = text.split(" ");
//	var data = myArray[0].split("/");
//	var hora = myArray[1].split(":");
//	
//	var dia = data[0];
//	console.log("variavel dia: " + dia)
//	var meses = data[1];
//	console.log("variavel meses: " + meses)
//	var ano = data[2];
//	console.log("variavel ano: " + ano)
//	var h = hora[0];
//	console.log("variavel h: " + h)
//	var m = hora[1];
//	console.log("variavel m: " + m)
//	
//	var mesjs = meses -1
//	console.log("variavel mesjs: " + mesjs)
//	
//	var dataVencimentoSLA= new Date(ano, mesjs, dia, h, m, "00")
//
//	console.log("=================================")
//	console.log("variavel dataVencimentoSLA: " + dataVencimentoSLA)
//	
//	var date = new Date();
//	console.log("=================================")
//	console.log("variavel date: " + date)
//	var d = date.getDate();
//	var mes = date.getMonth() + 1;
//	var a = date.getFullYear();
//		
//		if (mes < 10) {
//			mes = "0" + mes;
//		}
//		
//		if (d < 10) {
//			d = "0" + d;
//		}
//		
//		var h = date.getHours();
//		var m = date.getMinutes();
//		
//		if (h < 10) {
//		h = "0" + h;
//		}
//	
//		if (m < 10) {
//			m = "0" + m;
//		}
//		
//		mesjs = mes -1
//		
//		var dataAtual = new Date(a, mesjs, d, h, m, "00")
//
//		console.log("=================================")
//		console.log("variavel datanow: "+dataAtual)
//      
//
//  	console.log("entrouESS: "+ dataVencimentoSLA +" ??? " + dataAtual)
//  	var ATIVIDADE = document.getElementById("NUM_ATIVIDADE").value;
//
//  	
//  	if (dataVencimentoSLA >= dataAtual){
//  		document.getElementById("VENCIMENTOSLA").value = ""
//  		console.log("vazio: "+dataVencimentoSLA+" teste " +dataAtual )
//  	}
//  	if (dataVencimentoSLA > dataAtual){
//  		document.getElementById("VENCIMENTOSLA").value = "SLA Atendido"
//  		console.log("SLA Atendido: "+dataVencimentoSLA+" teste " +dataAtual )
//  	}
//  	if (dataVencimentoSLA < dataAtual){
//  		document.getElementById("VENCIMENTOSLA").value = "SLA Violado"
//  		console.log("dSLA Violadooc: "+dataVencimentoSLA+" teste " +dataAtual )
//  		//19/10/2022 15:32 19/10/2022 17:31
//  	}
//  }
//	
//	if (ATIVIDADE == 49 ){ 
//		
//		
//		var text = document.getElementById("SLA_REVISAO").value
//		console.log("ENTROU VENCIENTO Sla")
//		var myArray = text.split(" ");
//		var data = myArray[0].split("/");
//		var hora = myArray[1].split(":");
//		
//		var dia = data[0];
//		console.log("variavel dia: " + dia)
//		var meses = data[1];
//		console.log("variavel meses: " + meses)
//		var ano = data[2];
//		console.log("variavel ano: " + ano)
//		var h = hora[0];
//		console.log("variavel h: " + h)
//		var m = hora[1];
//		console.log("variavel m: " + m)
//		
//		var mesjs = meses -1
//		console.log("variavel mesjs: " + mesjs)
//		
//		var dataVencimentoSLA= new Date(ano, mesjs, dia, h, m, "00")
//
//		console.log("=================================")
//		console.log("variavel dataVencimentoSLA: " + dataVencimentoSLA)
//		
//		var date = new Date();
//		console.log("=================================")
//		console.log("variavel date: " + date)
//		var d = date.getDate();
//		var mes = date.getMonth() + 1;
//		var a = date.getFullYear();
//			
//			if (mes < 10) {
//				mes = "0" + mes;
//			}
//			
//			if (d < 10) {
//				d = "0" + d;
//			}
//			
//			var h = date.getHours();
//			var m = date.getMinutes();
//			
//			if (h < 10) {
//			h = "0" + h;
//			}
//		
//			if (m < 10) {
//				m = "0" + m;
//			}
//			
//			mesjs = mes -1
//			
//			var dataAtual = new Date(a, mesjs, d, h, m, "00")
//
//			console.log("=================================")
//			console.log("variavel datanow: "+dataAtual)
//	      
//
//	  	console.log("entrouESS: "+ dataVencimentoSLA +" ??? " + dataAtual)
//	  	var ATIVIDADE = document.getElementById("NUM_ATIVIDADE").value;
//		var FINALIZACAO_REVISAO = document.getElementById("FINALIZACAO_REVISAO").value;
//	  	
//	  	if (dataVencimentoSLA >= dataAtual && FINALIZACAO_REVISAO == ""){
//	  		document.getElementById("VENCIMENTO_REVISAO").value = ""
//	  		console.log("vazio: "+dataVencimentoSLA+" teste " +dataAtual )
//	  	}
//	  	if (dataVencimentoSLA > dataAtual ){
//	  		document.getElementById("VENCIMENTO_REVISAO").value = "SLA Atendido"
//	  		console.log("SLA Atendido: "+dataVencimentoSLA+" teste " +dataAtual )
//	  	}
//	  	if (dataVencimentoSLA < dataAtual){
//	  		document.getElementById("VENCIMENTO_REVISAO").value = "SLA Violado"
//	  		console.log("dSLA Violadooc: "+dataVencimentoSLA+" teste " +dataAtual )
//	  		//19/10/2022 15:32 19/10/2022 17:31
//	  	}
//	  }
//	
//
//}

function apareceComentario(){
	var ATIVIDADE = document.getElementById("NUM_ATIVIDADE").value;
	var VALIDACAO_MKT = document.getElementById("VALIDACAO_MKT").value;
	var VALIDACAO_USUARIO = document.getElementById("VALIDACAO_USUARIO").value;
	
	if(ATIVIDADE == 33){
		console.log("=================================")
		console.log("ATIVIDADE: 33"+ATIVIDADE)
		
		if(VALIDACAO_MKT == "SIM"){
			console.log("=================================")
			console.log("VALIDACAO_MKT == SIM: "+VALIDACAO_MKT)
			document.getElementById('COMENTARIO_AVALIACAO_MKT').disabled = true;
			
			
			
		}
		
		if(VALIDACAO_MKT != "SIM"){
			console.log("=================================")
			console.log("VALIDACAO_MKT: NÃO"+VALIDACAO_MKT)
			document.getElementById('COMENTARIO_AVALIACAO_MKT').disabled = false;
		
			
		}
		
	}
	if(ATIVIDADE == 44){
		console.log("=================================")
		console.log("ATIVIDADE: 44"+ATIVIDADE)
		
		if(VALIDACAO_USUARIO == "SIM"){
			console.log("=================================")
			console.log("VALIDACAO_USUARIO == SIM: "+VALIDACAO_USUARIO)
			document.getElementById('COMENTARIO_AVALIACAO_USER').disabled = true;
			
			
		}
		
		if(VALIDACAO_USUARIO != "SIM"){
			console.log("=================================")
			console.log("VALIDACAO_USUARIO: NÃO"+VALIDACAO_USUARIO)
			document.getElementById('COMENTARIO_AVALIACAO_USER').disabled = false;
			
			
		}
		
	}

	
}

function someComentario(){ 
	
	var ATIVIDADE = document.getElementById("NUM_ATIVIDADE").value;
	var VALIDACAO_MKT = document.getElementById("VALIDACAO_MKT").value;
	var VALIDACAO_USUARIO = document.getElementById("VALIDACAO_USUARIO").value;
	console.log("=================================")
	console.log("someComentario: NÃO")

		if(VALIDACAO_MKT != "NAO"){
			console.log("=================================")
			console.log("VALIDACAO_MKT "+VALIDACAO_MKT)
			document.getElementById('COMENTARIO_AVALIACAO_MKT').disabled = true;
			
			
		
		}
	

		if(VALIDACAO_USUARIO == "NULO"){
		console.log("=================================")
		console.log("VALIDACAO_USUARIO: someComentario"+VALIDACAO_USUARIO)
		document.getElementById('COMENTARIO_AVALIACAO_USER').disabled = true;
		
		
	}
		

}





