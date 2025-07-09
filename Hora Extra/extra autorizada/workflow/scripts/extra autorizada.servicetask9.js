function servicetask9(attempt, message,Integer) {

	var nomeDataserver = "PtoDataExtraAutorizada"
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
	
 
	var CHAPA = hAPI.getCardValue("CHAPA_SOLICITANTE")
	log.info("CHAPA_SOLICITANTE: "+CHAPA)
	
	var DATA = hAPI.getCardValue("DATA_EXTRA")
	log.info("DATA_EXTRA: "+DATA)
    
    		var hor =  "00:00:00";
    		
    		var dataFull = DATA + "T"  + hor;
            log.info("data da medicao"+dataFull)

	
	var HORA =hAPI.getCardValue("HORA_EXTRA")
	log.info("HORA_EXTRA: "+HORA)
	
	var HORA_AUTORIZADA = parseInt(HORA)
	
	var MOTIVO = String(hAPI.getCardValue("OBJ_SOLICITANTE"))
	log.info("OBJ_SOLICITANTE: "+MOTIVO)
	
	var RESPONSAVEL = String(hAPI.getCardValue("CHAPA_RESPONSAVEL"))
	log.info("CHAPA_RESPONSAVEL: "+RESPONSAVEL)
	
	var JUSTIFICATIVA =  String(hAPI.getCardValue("JUSTIFICATIVA"))
	log.info("JUSTIFICATIVA: "+JUSTIFICATIVA)
	
	var NUM_PROCESS =  String(hAPI.getCardValue("NUM_PROCESS"))
	log.info("JUSTIFICATIVA: "+NUM_PROCESS)

    //xml que envia as informaçoes para o RM    
	var xml = 
		"<PtoAEAutFun>" +
			"<AEAUTFUN>" +
				"<CODCOLIGADA>1</CODCOLIGADA>" +
				"<CHAPA>" + CHAPA + "</CHAPA>" +
				"<DATA>" + dataFull + "</DATA>" +
				"<HORAINICIO>0</HORAINICIO>" +
				"<HORAFIM>1440</HORAFIM>"+
				"<AUTORIZADO>"+ HORA_AUTORIZADA +"</AUTORIZADO>"+
				"<MOTIVO>"+ NUM_PROCESS + " - " + MOTIVO +"</MOTIVO>" +
				"<RESPONSAVEL>"+ RESPONSAVEL +"</RESPONSAVEL>" +
				"<JUSTIFICATIVA>"+ JUSTIFICATIVA +"</JUSTIFICATIVA>" +
				"<SOLUCAOCONFLITO>1</SOLUCAOCONFLITO>" +
			"</AEAUTFUN>" +
		"</PtoAEAutFun>"
			
			log.info("xml: "+xml)
			
				
	var result = new String( authService.saveRecord(nomeDataserver, xml, contexto) );
	//String DataServerName, String XML, String UserName, String UserPassword, String contexto, String emailUsuarioContexto

	
		
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




