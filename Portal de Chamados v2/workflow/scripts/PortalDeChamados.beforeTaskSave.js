function beforeTaskSave(){
	
	var atividade = getValue("WKCurrentState");
	vencimentoSLA(atividade)
	dataReabertura()
	//consultaDataHora(atividade)
	
	log.info("beforeTaskSave")
	var status = hAPI.getCardValue("STATUS") 
	
	if(status == "FECHADO" ){ 
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
		
		
		hAPI.setCardValue("DATAFECHAMENTO", dataFull)
		
	
	}
		
}

function vencimentoSLA(atividade){
	
	
	
	if(atividade == 5){
	//window["TRANSFERECHAMADO"].clear()
	var text = hAPI.getCardValue("SLAEXTENSO")
	log.info("ENTROU VENCIENTO Sla")
	var myArray = text.split(" ");
	log.info("variavel myArray: " + myArray)
	var data = myArray[0].split("/");
	log.info("variavel  data: " + data)
	var hora = myArray[1].split(":");
	log.info("variavel : " + hora)
	
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
	
	var date = new Date();
	log.info("=================================")
	log.info("variavel date: " + date)
	var d = date.getDate();
	var mes = date.getMonth() + 1;
	var a = date.getFullYear();
		
		if (mes < 10) {
			mes = "0" + mes;
		}
		
		if (d < 10) {
			d = "0" + d;
		}
		
		var h = date.getHours();
		var m = date.getMinutes();
		
		if (h < 10) {
		h = "0" + h;
		}
	
		if (m < 10) {
			m = "0" + m;
		}
		
		mesjs = mes -1
		
		var dataAtual = new Date(a, mesjs, d, h, m, "00")

		log.info("=================================")
		log.info("variavel datanow: "+dataAtual)
      

  	log.info("entrouESS: "+ dataVencimentoSLA +" ??? " + dataAtual)
  	var status = hAPI.getCardValue("STATUS");


  	if (dataVencimentoSLA > dataAtual && status == "FECHADO"){
  		hAPI.setCardValue("VENCIMENTOSLA", "SLA Atendido" )
  		log.info("SLA Atendido: "+dataVencimentoSLA+" teste " +dataAtual )
  	}
  	if (dataVencimentoSLA < dataAtual){
  		hAPI.setCardValue("VENCIMENTOSLA", "SLA Violado" )
  		log.info("dSLA Violadooc: "+dataVencimentoSLA+" teste " +dataAtual )
  		//19/10/2022 15:32 19/10/2022 17:31
  	}
  	
	}
	
}

function dataReabertura(){
	log.info("dataReabertura")
	
	var reabertura = hAPI.getCardValue("AVALIACAO");
	log.info( "reabertura"+reabertura);
	var atividade = hAPI.getCardValue("NUM_ATIVIDADE");
	log.info("atividade :: "+ atividade);
	if (reabertura == "Resolvido" && atividade == '9' ){  
	
		log.info("entrou nesse if")
	 var date = new Date();
		log.info(date)
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
		hAPI.setCardValue("DATAREABERTURA",dataFull);
		hAPI.setCardValue("VENCIMENTOSLA", "");
		hAPI.setCardValue("STATUS", "ABERTO");
     
			log.info(dataFull);
     
	}
}





