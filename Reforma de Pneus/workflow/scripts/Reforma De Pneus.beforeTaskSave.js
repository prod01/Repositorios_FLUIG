function beforeTaskSave(colleagueId,nextSequenceId,userList){
	
	
	var atividade = getValue("WKCurrentState")
	
	
	if ( atividade == 10 ){
		anexo()
		descartaPneu()
	}
	
	if ( atividade == 23 ){
		
		
		if (hAPI.getCardValue("INFORMACAO_REFROMA") == "REFORMA" ){
			
			anexo()
			alteraMedidas()
			alteraReforma()
			
			
		}

		else {
			
			log.info("O Pneu não foi reformado" + hAPI.getCardValue("INFORMACAO_REFROMA"))
			
		}
	}
	
	
	
}
function anexo(){
	if ( hAPI.listAttachments().size() < 1){    
		log.info("function anexo ")
    	throw "<br/><br/><strong>É obrigatório o anexo nesta atividade .</strong><br/>";
    
		}	
}

function descartaPneu(){
	
	var nomeDataserver = "MntObjOficinaData"
		log.info("nomeDataserver: "+nomeDataserver)
		
		var user = DatasetFactory.getDataset("ds_connector", null, null, null);
		log.info("user: "+user)
		
		var usuario = user.getValue(0, "INTEGRADOR")
		log.info("usuario: "+usuario)
		var senha = user.getValue(0, "SENHA")
		log.info("senha: "+senha)
		var email = user.getValue(0, "EMAIL")
		log.info("email: "+email)
		
	var contexto = "codcoligada=1;codusuario=pedro.jesus;codsistema=O"
		log.info("contexto: "+contexto)
		
	var authService = getWebService(usuario, senha)
	log.info("authService: "+authService)

	var xml = 
		"<MntObjOficina>"+
			"<OfObjOficina>" +
					"<CODCOLIGADA>1</CODCOLIGADA>" +
					"<IDOBJOF>"+hAPI.getCardValue("IDOBJOF")+"</IDOBJOF>" +
					"<ESTADOCONSERVACAO>S</ESTADOCONSERVACAO>"+
			"</OfObjOficina>"+
		"</MntObjOficina>"
			
			log.info("xml: "+xml)
			
	
	
	var result = new String( authService.saveRecord(nomeDataserver, xml, contexto) );

	log.error("result: "+result);

	if (result.split(";")[0] != "1"){
		throw "ERRO AO FAZER A ALTERAÇÃO \n\n"+result.split("=")[0]+"\n\n"
	}

	
}


function alteraMedidas(){
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


		
		var idObJof = hAPI.getCardValue("IDOBJOF")
	
		var idIndice = hAPI.getCardValue("INDICE_ACOMPANHAMENTO")
	
		var dataMedicao = hAPI.getCardValue("DATAMEDICAO")
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
		
		//pega do html o VALORMEDICAO
		var valorMedicao = hAPI.getCardValue("NOVA_MEDIDA")
	
		//pega do html o CAMPOIDHISTINDICADOR
		var valorIDHistoricoIndicador = hAPI.getCardValue("IDHISTINDICADOR")
	
		
		//seta o a virgula para ponto 
		var milimetragem=valorMedicao.replace(".",",")
		log.info("milimetragem: "+milimetragem)
		
		
		//set data e hora diacordo com o padrao do RM 
		
					
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

		
	if (result.split(";")[0] != "1"){
		throw "ERRO AO FAZER A ALTERAÇÃO \n\n"+result.split("=")[0]+"\n\n"
	}

	
}



function alteraReforma(){
	
	var nomeDataserver = "MntObjOficinaData"
		log.info("nomeDataserver: "+nomeDataserver)
		
		var user = DatasetFactory.getDataset("ds_connector", null, null, null);
		log.info("user: "+user)
		
		var usuario = user.getValue(0, "INTEGRADOR")
		log.info("usuario: "+usuario)
		var senha = user.getValue(0, "SENHA")
		log.info("senha: "+senha)
		var email = user.getValue(0, "EMAIL")
		log.info("email: "+email)
		
	var contexto = "codcoligada=1;codusuario=pedro.jesus;codsistema=O"
		log.info("contexto: "+contexto)
		
	var authService = getWebService(usuario, senha)
	log.info("authService: "+authService)
	
	var reforma = hAPI.getCardValue("QTDEREFORMA")
	
	var reforma = reforma + 1

	var xml = 
		"<MntObjOficina>"+
			"<OfObjOficina>" +
					"<CODCOLIGADA>1</CODCOLIGADA>" +
					"<IDOBJOF>"+hAPI.getCardValue("IDOBJOF")+"</IDOBJOF>" +
					"<QTDEREFORMA>" +reforma+"</QTDEREFORMA>"+
					"<ESTADOCONSERVACAO>R</ESTADOCONSERVACAO>" +
					"<STATUS>4</STATUS>"+
			"</OfObjOficina>"+
		"</MntObjOficina>"
			
			log.info("xml: "+xml)
			
	
	
	var result = new String( authService.saveRecord(nomeDataserver, xml, contexto) );

	log.error("result: "+result);

	if (result.split(";")[0] != "1"){
		throw "ERRO AO FAZER A ALTERAÇÃO \n\n"+result.split("=")[0]+"\n\n"
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

