function servicetask9(attempt, message) { 
	
	var nomeDataserver = "MOVMOVIMENTOTBCDATA"
		log.info("nomeDataserver: "+nomeDataserver)
	
	log.info("ENTROU NA FUNCTION")
	var user = DatasetFactory.getDataset("ds_connector", null, null, null);
	log.info("user: "+user)
	
	var usuario = user.getValue(0, "INTEGRADOR")
	log.info("usuario: "+usuario)
	
	var senha = user.getValue(0, "SENHA")
	log.info("senha: "+senha)
	
	var email = user.getValue(0, "EMAIL")
	log.info("email: "+email)
	
	var contexto = "codcoligada=1;codusuario=Fluig;codsistema=T"
		log.info("contexto: "+contexto)
		
	var authService = getWebService(usuario, senha)
	log.info("authService: "+authService)
	
	
	var CODLOC = hAPI.getCardValue("CODLOC")
	log.info("CODLOC"+CODLOC)
	var POSSUIORCAMENTO = hAPI.getCardValue("POSSUIORCAMENTO")
	log.info("POSSUIORCAMENTO"+POSSUIORCAMENTO)
	var IDPRD = hAPI.getCardValue("IDPRD")
	log.info("IDPRD"+IDPRD)
	var QUANTIDADE = hAPI.getCardValue("QUANTIDADE")
	log.info("QUANTIDADE"+QUANTIDADE)
	var CODCCUSTO = hAPI.getCardValue("CODCCUSTO")
	log.info("CODCCUSTO"+CODCCUSTO)
	var CODDEPARTAMENTO = hAPI.getCardValue("CODDEPARTAMENTO")
	log.info("CODDEPARTAMENTO"+CODDEPARTAMENTO)
	
	
	var SETQUANTIDADE =   QUANTIDADE +",000"
	
	
	var xml = 
			"<MovMovimento>"+
				  "<TMOV>"+
					    "<CODCOLIGADA>1</CODCOLIGADA>"+
					    "<IDMOV>-1</IDMOV>"+
					    "<CODFILIAL>1</CODFILIAL>"+
					    "<CODLOC>01</CODLOC>"+ //local de estoque  
					    "<CODTMV>1.1.03</CODTMV>"+
					    "<CODTB1FAT>"+POSSUIORCAMENTO+"</CODTB1FAT>"+ //Possui Orçamento
				  "</TMOV>"+
					  "<TITMMOV>"+
						    "<CODCOLIGADA>1</CODCOLIGADA>"+
						    "<IDMOV>-1</IDMOV>"+
						    "<NSEQITMMOV>1</NSEQITMMOV>"+
						    "<IDPRD>"+IDPRD+"</IDPRD>"+ // ID produto RM
						    "<QUANTIDADE>"+SETQUANTIDADE+"</QUANTIDADE>"+ // quantidade produto RM  
						    "<CODCCUSTO>"+CODCCUSTO+"</CODCCUSTO>"+ // Codigo centro de custo 
						    "<CODDEPARTAMENTO>"+CODDEPARTAMENTO+"</CODDEPARTAMENTO>"+ // departamento 
					  "</TITMMOV>"+
			  "</MovMovimento>"
		// 1 -1 1 01 1.1.03 01 1 -1 1 13 1,000 1.10.0001.05 1.02
		
		log.info("xml: "+xml)

	
var result = new String( authService.saveRecord(nomeDataserver, xml, contexto) );
	log.info("essa merda result" + result)
//String DataServerName, String XML, String UserName, String UserPassword, String contexto, String emailUsuarioContexto

}

function getWebService(usuario, senha){
	
	var nomeServico = "wsDataServer"
		log.info("nomeServico: "+nomeServico)
		
	var caminhoServico = "br.com.totvs.WsDataServer"
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
	
	var authService = serviceHelper.getBasicAuthenticatedClient(service, "br.com.totvs.IwsDataServer", usuario, senha)
	log.info("authService: "+authService)

	if (authService == null){
		throw "Erro ao autenticar dataserver!";
	}
	
	return authService;
	
}

