function servicetask5(attempt, message) {

	var nomeDataserver = "MntObjIndiceData"
	log.info("nomeDataserver: "+nomeDataserver)
	
	var user = DatasetFactory.getDataset("ds_connector", null, null, null);
	log.info("user: "+user)
	
	var usuario = user.getValue(0, "INTEGRADOR")
	log.info("usuario: "+usuario)
	var senha = user.getValue(0, "SENHA")
	log.info("senha: "+senha)
	var email = user.getValue(0, "EMAIL")
	log.info("email: "+email)
	
	var contexto = "codcoligada=1;codusuario=Pedro.jesus;codsistema=O"
		log.info("contexto: "+contexto)
		
	var authService = getWebService(usuario, senha)
	log.info("authService: "+authService)

	//conta o numero de pneus para fazer o for executar diacordo com o numero de pneus
	var numeroDePneus = hAPI.getCardValue("NUMEROPNEUS")
	log.info("numeroDePneus: " +numeroDePneus)
	
	
	var i = 0;
	var resultado = '';
	do {
	   i += 1;
	   resultado += i + ' ';
	   
	   log.info("antes do do ")
	//pega do html o IDPNEU
	var idObJof = hAPI.getCardValue("IDPNEU___"+i)
	log.info("idObJof: "+idObJof)
	log.info("IDPNEU___"+i)
	//pega do html o INDICEACOMPANHAMENTO
	var idIndice = hAPI.getCardValue("INDICEACOMPANHAMENTO___"+i)
	log.info("idIndice: "+idIndice)

	//pega do html o DATAMEDICAO
	var dataMedicao = hAPI.getCardValue("DATAMEDICAO")
	log.info("dataMedicao: "+dataMedicao)
	
	//pega do html o VALORMEDICAO
	var valorMedicao = hAPI.getCardValue("VALORMEDICAO___"+i)
	log.info("valorHorimetro: "+valorMedicao)
	log.info("VALORMEDICAO___"+i)
	//pega do html o CAMPOIDHISTINDICADOR
	var valorIDHistoricoIndicador = hAPI.getCardValue("IDHISTINDICADOR___"+i)
	log.info("valorIDHistoricoIndicador: "+valorIDHistoricoIndicador)
	
	//seta o a virgula para ponto 
	var milimetragem=valorMedicao.replace(".",",")
	log.info("milimetragem: "+milimetragem)
	
	
	//set data e hora diacordo com o padrao do RM 
	var date = dataMedicao.split(" ")[0];
	log.info("data"+date);
    var hora = dataMedicao.split(" ")[1];
	log.info("hora" +hora);
	
           var d = date.split("/")[0];
    	   var m = date.split("/")[1];
    	   var a = date.split("/")[2];
    	   //     03    08  2022
    		
    		
    		var dia = a + "-" + m + "-" + d;

    		var h = hora.split(":")[0];
    		var m = hora.split(":")[1];
    		
    		
    		
    		var hor = h + ":" + m + ":00";
    		
    		var dataFull = dia + "T"  + hor;
            log.info("data da medicao"+dataFull)

				
    //xml que envia as informaçoes para o RM    
	var xml = "<MntObjIndice>" +
			"<OfObjIndice>" +
				"<CODCOLIGADA>1</CODCOLIGADA>" +
				"<IDOBJOF>" + idObJof + "</IDOBJOF>" +
				"<IDINDICE>" + idIndice + "</IDINDICE>" +
				"<DATAMEDICAO>" + dataFull + "</DATAMEDICAO>" +
				"<VALOR>" + milimetragem + "</VALOR>"+
				"<IDHISTINDICADOR>"+ valorIDHistoricoIndicador +"</IDHISTINDICADOR>" +
			"</OfObjIndice>" +
			"</MntObjIndice>"
			
			
			log.info("xml: "+xml)
			
				
	var result = new String( authService.saveRecord(nomeDataserver, xml, contexto) );
	//String DataServerName, String XML, String UserName, String UserPassword, String contexto, String emailUsuarioContexto

	log.info("result: "+result)
	} while (i < numeroDePneus);
		
}

function getWebService(usuario, senha){
	
	var nomeServico = "wsDataServer"
		log.info("nomeServico: "+nomeServico)
		
	var caminhoServico = "com.totvs.WsDataServer"
		log.info("caminhoServico: "+caminhoServico)
		
	var dataServerService = ServiceManager.getServiceInstance(nomeServico);
	log.info("dataServerService: "+dataServerService)
	
	if (dataServerService == null){
		throw "Erro ao encontrar serviço!";
	}
	
	var locator = dataServerService.instantiate(caminhoServico);
	log.info("locator: "+locator)

	if (locator == null){
		throw "Erro ao instanciar serviço!";
	}
	
	var service = locator.getRMIwsDataServer();
	log.info("service: "+service)

	if (service == null){
		throw "Erro instancia incorreta ou com problemas!";
	}
	
	var serviceHelper = dataServerService.getBean();
	log.info("serviceHelper: "+serviceHelper)

	if (serviceHelper == null){
		throw "Erro no serviço de autenticação!";
	}
	
	var authService = serviceHelper.getBasicAuthenticatedClient(service, "com.totvs.IwsDataServer", usuario, senha)
	log.info("authService: "+authService)

	if (authService == null){
		throw "Erro ao autenticar dataserver!";
	}
	
	return authService;
	
}




