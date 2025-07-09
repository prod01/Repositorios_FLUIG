function beforeTaskSave(){
	
	
	vencimentoSLA()
	
	
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
		
		log.info("TESTE SE TA AQUI ")
		
	}
		
}

function vencimentoSLA(){
	
	var Now_State =parseInt(getValue("WKNumState"));
    var Next_State =parseInt(getValue("WKNextState"));
	
    if(Now_State == '5'){ 
	log.info("00000000000000000000000000000000000000000")
	//window["TRANSFERECHAMADO"].clear()o
	var text = hAPI.getCardValue("SLAEXTENSO")
	log.info("1111111111111111111111111111111111111111111111")
	log.info("text SLAEXTENSO " + text)
	log.info("2222222222222222222222222222222222222222222222222")
	log.info("ENTROU VENCIENTO Sla beforeTaskSave ")
	var myArray = text.split(" ");
	log.info("variavel myArray: " + myArray)
	var data = myArray[0].split("/");
	log.info("variavel data: " + data)
	var hora = myArray[1].split(":");
	log.info("variavel hora: " + hora)
	
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
    setReabertura()
}

function setReabertura(){
	
	log.info("setReabertura")
	
	var Now_State =parseInt(getValue("WKNumState"));
	log.info("Now_State : " + Now_State)
    var Next_State =parseInt(getValue("WKNextState"));
	log.info("Next_State : " + Next_State)
    var status = hAPI.getCardValue("AVALIACAO")
     log.info("status : " + status)
    var SLA = hAPI.getCardValue("VENCIMENTOSLA")
    log.info("SLA : " + SLA)
    
    if(Now_State == "9" && Next_State == "14" && status == "Resolvido"){
    	log.info("entrou primeiro if")
    	
    	if(SLA != "SLA Violado"){
    		
    		log.info("entrou if SLA != SLA Violado")
    		
    		hAPI.setCardValue("STATUS", "ABERTO" )
    		hAPI.setCardValue("VENCIMENTOSLA", "" )
    		
    	}

    	if(SLA == "SLA Violado"){
    		
    		log.info("entrou if SLA == SLA Violado")
    		
    		hAPI.setCardValue("STATUS", "ABERTO" )
    		
    	}	
    	

    }
	
}
