function servicetask13(attempt, message,Integer) {

	var nomeDataserver = "MntHistIndicadorData"
	log.info("nomeDataserver: "+nomeDataserver)
	
	var user = DatasetFactory.getDataset("ds_connector", null, null, null);
	log.info("user: "+user)
	
	var usuario = user.getValue(0, "INTEGRADOR")
	log.info("usuario: "+usuario)
	var senha = user.getValue(0, "SENHA")
	log.info("senha: "+senha)
	var email = user.getValue(0, "EMAIL")
	log.info("email: "+email)
	
	var USUARIOLOGADO = hAPI.getCardValue("USUARIOLOGADO");
	var primeiraLetra = USUARIOLOGADO.substring(0, 1).toUpperCase();
	var restoDaString = USUARIOLOGADO.slice(1);
	var USUARIOLOGADO = primeiraLetra + restoDaString;
	log.info("USUARIOLOGADO: "+USUARIOLOGADO);
	
	var contexto = "codcoligada=1;codusuario="+USUARIOLOGADO+";codsistema=O"
		log.info("contexto: "+contexto)
		
	var authService = getWebService(usuario, senha)
	log.info("authService: "+authService)
	
	var IDMAQUINA = hAPI.getCardValue("IDMAQUINA")
	log.info("IDMAQUINA: "+IDMAQUINA)
	
	var DATACOLETA = hAPI.getCardValue("DATACOLETA")
	log.info("DATALANCAMENTO: "+DATACOLETA)
    
    		var date = DATACOLETA.split(" ")[0];
			log.info("data"+date);
		    var hora = DATACOLETA.split(" ")[1];
			log.info("hora" +hora);
	
           var d = date.split("/")[0];
    	   var m = date.split("/")[1];
    	   var a = date.split("/")[2];
    
    		
    		var dia = a + "-" + m + "-" + d;

    		var h = hora.split(":")[0];
    		var m = hora.split(":")[1];

    		var hor = h + ":" + m + ":00";
    		
    		var datafull = dia + "T"  + hor;
            log.info("data da medicao"+datafull)
            
            
	
	var VALORMEDIDOR1 = parseFloat(hAPI.getCardValue("VALORMEDIDOR1"));
	log.info("VALORMEDIDOR1: "+VALORMEDIDOR1);
	var VALORMEDIDOR5 = parseFloat(hAPI.getCardValue("VALORMEDIDOR5"));
	log.info("VALORMEDIDOR5: "+VALORMEDIDOR5);
	
	
	try{
		var c1_2 = DatasetFactory.createConstraint("IDOBJOF", IDMAQUINA, IDMAQUINA, ConstraintType.MUST);
		var constraints_2 = new Array(c1_2);
		var dataset_2 = DatasetFactory.getDataset("ds_OSE_HistoricoIndicadorDeUso", null, constraints_2, null);
		var horimetroAtual = dataset_2.getValue(0, "VALORMEDIDOR1");
		var horimetroAcumulado = dataset_2.getValue(0, "VALORACUMULADO1");
		var combustivelAtual = dataset_2.getValue(0, "VALORMEDIDOR5") == "null" ? 0 : dataset_2.getValue(0, "VALORMEDIDOR5");
		var combustivelAcumulado = dataset_2.getValue(0, "VALORACUMULADO5") == "null" ? 0 : dataset_2.getValue(0, "VALORACUMULADO5");
		var dataLancamento = dataset_2.getValue(0, "DATALANCAMENTO").split(" ")[0];
	} catch (e) {
		log.error(e);
	}

	if ( parseFloat(horimetroAtual) < parseFloat(VALORMEDIDOR1) ){
		horimetroAcumulado = parseFloat(horimetroAcumulado) + (parseFloat(VALORMEDIDOR1) - parseFloat(horimetroAtual));
	}
	if ( parseFloat(combustivelAtual) < parseFloat(VALORMEDIDOR5) ){
		combustivelAcumulado = parseFloat(combustivelAcumulado) + (parseFloat(VALORMEDIDOR5) - parseFloat(combustivelAtual));
	}
	
	// Obtém a data atual
	var dataAtual = new Date();
	
	// Extrai os componentes da data
	var ano = dataAtual.getFullYear();
	var mes = (dataAtual.getMonth() + 1) < 10 ? "0"+(dataAtual.getMonth() + 1) : (dataAtual.getMonth() + 1); // Os meses são indexados a partir de 0
	var dia = (dataAtual.getDate()) < 10 ? "0"+(dataAtual.getDate()) : (dataAtual.getDate());
            
	var dataColeta = hAPI.getCardValue("DATACOLETA").split(" ")[0]
	dataColeta = new Date(dataColeta.split("/")[2], dataColeta.split("/")[1]-1, dataColeta.split("/")[0]);

	if ( ( new Date(ano, mes-1, dia).toISOString().split('T')[0] > dataLancamento ) ||
					( dataLancamento == dataColeta.toISOString().split('T')[0] &&
							String(VALORMEDIDOR1).replace(".", ",") != horimetroAtual.replace(".", ",") ) ){
    //xml que envia as informaçoes para o RM    
	var xml = 
		" <NewDataSet>"+
				"<OFHistIndicador>"+
			    	"<CODCOLIGADA>1</CODCOLIGADA>"+
				    "<IDOBJOF>" +IDMAQUINA+ "</IDOBJOF>"+
					"<IDHISTINDICADOR>-1</IDHISTINDICADOR>"+
					"<DATACOLETA>" +datafull+ "</DATACOLETA>"+
					"<CODUSUARIO>" +USUARIOLOGADO+ "</CODUSUARIO>"+
					"<VALORMEDIDOR1>" +String(VALORMEDIDOR1).replace(".", ",")+ "</VALORMEDIDOR1>"+
					"<VALORACUMULADO1>" +String(horimetroAcumulado).replace(".", ",")+ "</VALORACUMULADO1>";
	
				if (hAPI.getCardValue("USAINDICADORUSO5") == "1"){
					xml = xml+"<VALORMEDIDOR5>" +String(VALORMEDIDOR5).replace(".", ",")+ "</VALORMEDIDOR5>"+
					"<VALORACUMULADO5>" +String(combustivelAcumulado).replace(".", ",")+ "</VALORACUMULADO5>";
				}
					
			xml = xml+ "</OFHistIndicador>"+
		"</NewDataSet>";
			
			log.info("xml: "+xml)
			log.info("teste antes : "+xml);
				
	var result = new String( authService.saveRecord(nomeDataserver, xml, contexto) );
	//String DataServerName, String XML, String UserName, String UserPassword, String contexto, String emailUsuarioContexto
			
			log.info("teste depois: "+result);	
			log.info("result: "+result);
	} else {
		throw "ERRO AO LANÇAR HORIMETRO DA MAQUINA\n\n"+result.split("=")[0]+"\n\n"
		log.error("Não entrou no IF");
		log.error("=======================================================");
		log.error("new Date: "+new Date(ano, mes-1, dia).toISOString().split('T')[0]);
		log.error("dataLancamento: "+dataLancamento);
		log.error("=======================================================");
		log.error("dataLancamento: "+dataLancamento);
		log.error("datacoleta: "+dataColeta.toISOString().split('T')[0]);
		log.error("VALORMEDIDOR1: "+String(VALORMEDIDOR1).replace(".", ","));
		log.error("horimetroAtual: "+horimetroAtual.replace(".", ","));
		log.error("=======================================================");
	}
			
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
