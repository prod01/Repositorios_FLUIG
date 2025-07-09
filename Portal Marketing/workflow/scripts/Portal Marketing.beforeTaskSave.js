function beforeTaskSave(){
	
	

	var atividade = getValue("WKCurrentState");
	
	
	
	vencimentoSLA(atividade)
	consultaDataHora(atividade)
	dataFechamentoChamado()
	
	log.info("beforeTaskSave")
	
	if(atividade == 9 || atividade == 49 ||   atividade == 57){
		log.info("entrou if")
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
		

		if (atividade == 9){ 
			log.info("FINALIZACAO_REVISAO" +atividade )
			hAPI.setCardValue("DATAFECHAMENTO", dataFull)
		}
		
		if (atividade == 57){ 
			log.info("FINALIZACAO_REVISAO" +atividade )
			hAPI.setCardValue("DATAFECHAMENTO", dataFull)
		}
	
	
		if (atividade == 49){ 
			log.info("FINALIZACAO_REVISAO" +atividade )
			hAPI.setCardValue("FINALIZACAO_REVISAO", dataFull)
		}
		
		
		
		
	}
}

function vencimentoSLA(atividade){
	
	
	var FINALIZACAO_REVISAO = hAPI.getCardValue
	("FINALIZACAO_REVISAO");
	
	if (atividade == 33){ 
		
		log.info("C" +atividade )

	
	//window["TRANSFERECHAMADO"].clear()
	var text = hAPI.getCardValue("SLAEXTENSO")
	console.log("ENTROU VENCIENTO Sla")
	var myArray = text.split(" ");
	var data = myArray[0].split("/");
	var hora = myArray[1].split(":");
	
	var dia = data[0];
	log.info("variavel dia: " + dia)
	var meses = data[1];
	log.info("variavel meses: " + meses)
	var ano = data[2];
	log.info("variavel ano: " + ano)
	var h = hora[0];
	log.info("variavel h: " + h)
	var m = hora[1];
	log.info("variavel m: " + m)
	
	var mesjs = meses -1
	log.info("variavel mesjs: " + mesjs)
	
	var dataVencimentoSLA= new Date(ano, mesjs, dia, h, m, "00")

	log.info("=================================")
	log.info("variavel dataVencimentoSLA: " + dataVencimentoSLA)

	
	var DATAFECHAMENTO = parseInt(hAPI.getCardValue("DATAFECHAMENTO"));


  	
  	
   if (dataVencimentoSLA > DATAFECHAMENTO){
  		hAPI.setCardValue("VENCIMENTOSLA","SLA Atendido");
  		log.info("SLA Atendido: "+dataVencimentoSLA )
  	}
 
  	else if (dataVencimentoSLA < DATAFECHAMENTO){
  		hAPI.setCardValue("VENCIMENTOSLA","SLA Violado");
  		
  		log.info("dSLA Violadooc: "+dataVencimentoSLA )
  		//19/10/2022 15:32 19/10/2022 17:31
  	}
   
  
  	
  }
	
	if (atividade == 40 && FINALIZACAO_REVISAO != ""){ 
		
			log.info("vencimentoSLA" +atividade )
		
		//window["TRANSFERECHAMADO"].clear()
		var text = hAPI.getCardValue("SLA_REVISAO");
		log.info("ENTROU VENCIENTO Sla")
		var myArray = text.split(" ");
		var data = myArray[0].split("/");
		var hora = myArray[1].split(":");
		
		var dia = data[0];
		log.info("variavel dia: " + dia)
		var meses = data[1];
		log.info("variavel meses: " + meses)
		var ano = data[2];
		log.info("variavel ano: " + ano)
		var h = hora[0];
		log.info("variavel h: " + h)
		var m = hora[1];
		log.info("variavel m: " + m)
		
		var mesjs = meses -1
		log.info("variavel mesjs: " + mesjs)
		
		var dataVencimentoSLA= new Date(ano, mesjs, dia, h, m, "00")

		log.info("=================================")
		log.info("variavel dataVencimentoSLA: " + dataVencimentoSLA)
		
		var FINALIZACAO_REVISAO = parseInt( hAPI.getCardValue("FINALIZACAO_REVISAO"));
	  	
			
			 if (dataVencimentoSLA > FINALIZACAO_REVISAO ){
		  		hAPI.setCardValue("VENCIMENTO_REVISAO","SLA Atendido");
		  		log.info("SLA Atendido: "+dataVencimentoSLA)
		  	}
			
			else if (dataVencimentoSLA < FINALIZACAO_REVISAO){
		  		hAPI.setCardValue("VENCIMENTO_REVISAO","SLA Violado");
	  			log.info("dSLA Violadooc: "+dataVencimentoSLA)
	  			
		  	}
	  }

}
function consultaDataHora(atividade){
	
	console.log("consultaDataHora"  + atividade )
	var atividade2 = getValue("WKNextState");
	hAPI.setCardValue("NUM_PROX_ATIVIDADE",atividade2)
	
	
		if (atividade == 9){ 
					console.log("consultaDataHora ATV9" )
					console.log("ATIVIDADE" +atividade )
					var c1 = DatasetFactory.createConstraint("processTaskPK.processInstanceId", hAPI.getCardValue("IDCHAMADO"),hAPI.getCardValue("IDCHAMADO"), ConstraintType.MUST);
				
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
	
	if (atividade == 49){ 
					console.log("consultaDataHora ATV49" )
					console.log("ATIVIDADE" +atividade )
					console.log("entrou!!!!!teste")
					var c1 = DatasetFactory.createConstraint("processTaskPK.processInstanceId",hAPI.getCardValue("IDCHAMADO"), hAPI.getCardValue("IDCHAMADO"), ConstraintType.MUST);
					
					var c2 = DatasetFactory.createConstraint("closureStatus", 0, 0, ConstraintType.MUST);
					var constraints = new Array(c1,c2);
								try{
									console.log("entrou try")
									var dataset = DatasetFactory.getDataset("processTask", null, constraints, null);
									 var row = dataset.values[0];  
									 log.info("teste da row")	
									 log.info(row)
									 
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
	if (atividade == 57){ 
					console.log("consultaDataHora ATV57" )
					console.log("ATIVIDADE" +atividade )
					console.log("entrou!!!!!teste")
					
					
					hAPI.setCardValue("VENCIMENTOSLA", "Revisão")
					hAPI.setCardValue("DATAFECHAMENTO", "")
					
					var c1 = DatasetFactory.createConstraint("processTaskPK.processInstanceId", hAPI.getCardValue("IDCHAMADO"),hAPI.getCardValue("IDCHAMADO"), ConstraintType.MUST);
					
					var c2 = DatasetFactory.createConstraint("closureStatus", 0, 0, ConstraintType.MUST);
					var constraints = new Array(c1,c2);
					
					
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

function dataFechamentoChamado(){
	
	var ATIVIDADE = hAPI.getCardValue("NUM_ATIVIDADE");
	var STATUS_SOLICITACAO = hAPI.getCardValue("STATUS_SOLICITACAO");
	console.log("entrou dataReabertura" + ATIVIDADE)
	var vencimentoSLA = hAPI.getCardValue("VENCIMENTOSLA");
	
	console.log("entrou dataReabertura " + vencimentoSLA)
	
	if (ATIVIDADE == 40 && STATUS_SOLICITACAO == "FECHADO" ){ 
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
		hAPI.setCardValue("FECHAMENTO_SOLICITACAO",dataFull)
		
		
	}

     
}


