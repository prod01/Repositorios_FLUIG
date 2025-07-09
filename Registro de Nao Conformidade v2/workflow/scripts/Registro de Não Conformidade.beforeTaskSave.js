function beforeTaskSave(colleagueId,nextSequenceId,userList){
	var atividade = getValue("WKCurrentState")
	log.info("entrou before: ")
	if (atividade == "0" || atividade == "6"){
		log.info("atividade == 0 || atividade == 6 ");
		criaMov() ;
		email()
	}
	if ( atividade == "7"){
		log.info("atividade == 7 ");
		alteraInformacaoNC() ;

	}
	if ( atividade == "10"){
		log.info("atividade == 10 ");
		anexo() ;

	}
	if ( atividade == "18"){
		log.info("atividade == 18 ");
		finalInformacaoNC() ;

	}
}


function criaMov() {
	log.info("criaMov")
	var nomeDataserver = "MOVMOVIMENTOTBCDATA"
	log.info("nomeDataserver: "+nomeDataserver)
	
	 var idChamado = getValue("WKNumProces").toString()
	
	var user = DatasetFactory.getDataset("ds_connector", null, null, null);
	log.info("user: "+user)
	
	var usuario = user.getValue(0, "INTEGRADOR")
	log.info("usuario: "+usuario)
	var senha = user.getValue(0, "SENHA")
	log.info("senha: "+senha)
	var email = user.getValue(0, "EMAIL")
	log.info("email: "+email)
	
	var api = fluigAPI.getUserService().getCurrent();
	var fullName=api.fullName
	
	var contexto = "codcoligada=1;codusuario=pedro.jesus;codsistema=N"
		log.info("contexto: "+contexto)
		
	var authService = getWebService(usuario, senha)
	log.info("authService: "+authService)
	  
	var xml = 
		"<MovMovimento>"+
			"<TMOV>" +
					"<CODCOLIGADA>1</CODCOLIGADA>" +
					"<IDMOV>-1</IDMOV>" +
					"<NUMEROMOV>"+hAPI.getCardValue("NUM_MOV_NC")+"</NUMEROMOV>" +
					"<SERIE>RNC</SERIE>" +
					"<CODTMV>3.1.11</CODTMV>"+
					"<TIPO>A</TIPO>" +
					"<STATUS>N</STATUS>" +
					"<CODCCUSTO>"+ hAPI.getCardValue("COD_CCUSTO") +"</CODCCUSTO>" +
			"</TMOV>"+
			"<TMOVRATCCU>" +
					"<CODCOLIGADA>1</CODCOLIGADA>" +
					"<IDMOV>-1</IDMOV>" +
					"<CODCCUSTO>"+ hAPI.getCardValue("COD_CCUSTO") +"</CODCCUSTO>" +
					"<VALOR>1.0000</VALOR>" +
					"<IDMOVRATCCU>-1</IDMOVRATCCU>" +
			"</TMOVRATCCU>" +
			"<TITMMOV>" +
					"<CODCOLIGADA>1</CODCOLIGADA>" +
					"<IDMOV>-1</IDMOV>" +
					"<NSEQITMMOV>1</NSEQITMMOV>" +
					"<IDPRD>75779</IDPRD>" +
					"<QUANTIDADE>1.0000</QUANTIDADE>" +
					"<HISTORICOLONGO> Solicitação Fluig -- "+idChamado+"</HISTORICOLONGO>" +
			"</TITMMOV>" +
			"<TITMMOVRATCCU>" +
					"<CODCOLIGADA>1</CODCOLIGADA>" +
					"<IDMOV>-1</IDMOV>" +
					"<NSEQITMMOV>1</NSEQITMMOV>" +
					"<CODCCUSTO>"+ hAPI.getCardValue("COD_CCUSTO") +"</CODCCUSTO>" +
					"<VALOR>1.0000</VALOR>" +
					"<IDMOVRATCCU>-1</IDMOVRATCCU>" +
			"</TITMMOVRATCCU>" +
			"<TITMMOVCOMPL>" +
					"<CODCOLIGADA>1</CODCOLIGADA>" +
					"<IDMOV>-1</IDMOV>" +
					"<NSEQITMMOV>1</NSEQITMMOV>" +
					"<INCONFORME>"+ fullName + "</INCONFORME>" +
					"<DESCNCONF>"+ hAPI.getCardValue("REQUISITOS_NC_ISO") +" -- "+  hAPI.getCardValue("DESCRICAO_NC") +"</DESCNCONF>" +
					"<FONTEIDENT> "+  hAPI.getCardValue("FONTE_DE_IDENTIFICACAO_NC")+"</FONTEIDENT>" +
			"</TITMMOVCOMPL>"+
		"</MovMovimento>"
			
			log.info("xml: "+xml)
			
	
	
	var result = new String( authService.saveRecord(nomeDataserver, xml, contexto) );
	
	log.error("result: "+result);

	hAPI.setCardValue("IDMOV_RM_NC", result.split(";")[1])
	log.info("IDMOV_RM_NC :" + result.split(";")[1])
	
	if (result.split(";")[0] != "1"){
		throw "ERRO AO CRIAR O MOVIMENTO\n\n"+result.split("=")[0]+"\n\n"
	}
	
		
}


function alteraInformacaoNC (){
	
	
	var nomeDataserver = "MOVMOVIMENTOTBCDATA"
		log.info("nomeDataserver: "+nomeDataserver)
		
		var user = DatasetFactory.getDataset("ds_connector", null, null, null);
		log.info("user: "+user)
		
		var usuario = user.getValue(0, "INTEGRADOR")
		log.info("usuario: "+usuario)
		var senha = user.getValue(0, "SENHA")
		log.info("senha: "+senha)
		var email = user.getValue(0, "EMAIL")
		log.info("email: "+email)
		
		var DATACOLETA = hAPI.getCardValue("PRAZO_ATENDIMENTO_PA")
		log.info("PRAZO_ATENDIMENTO_PA: "+DATACOLETA)
    
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
		
		var contexto = "codcoligada=1;codusuario=pedro.jesus;codsistema=N"
			log.info("contexto: "+contexto)
			
		var authService = getWebService(usuario, senha)
		log.info("authService: "+authService)
		
		var xml = 
			"<MovMovimento>"+
				"<TMOV>" +
						"<CODCOLIGADA>1</CODCOLIGADA>" +
						"<IDMOV>"+hAPI.getCardValue("IDMOV_RM_NC")+"</IDMOV>" +
						"<CODTMV>3.1.11</CODTMV>"+
						"<DATAEXTRA1>" + datafull  + " </DATAEXTRA1>"+
				"</TMOV>"+
				"<TITMMOVCOMPL>" +
						"<CODCOLIGADA>1</CODCOLIGADA>" +
						"<IDMOV>"+hAPI.getCardValue("IDMOV_RM_NC")+"</IDMOV>" +
						"<NSEQITMMOV>1</NSEQITMMOV>" +
						"<ACAUSAR>"+hAPI.getCardValue("PORQUE_1")+hAPI.getCardValue("PORQUE_2")+hAPI.getCardValue("PORQUE_3")+hAPI.getCardValue("PORQUE_4")+hAPI.getCardValue("PORQUE_5")+ "</ACAUSAR>"+
						"<ACORRECAO>"+hAPI.getCardValue("ACAO_IMEDIATA_PA")+" </ACORRECAO>"+
						"<ACORRETIVA>"+hAPI.getCardValue("ACAO_CORRETIVA_PA")+" </ACORRETIVA>"+
				"</TITMMOVCOMPL>"+
			"</MovMovimento>"
				
				log.info("xml: "+xml)
				
		
		
		var result = new String( authService.saveRecord(nomeDataserver, xml, contexto) );

		log.error("result: "+result);
		
		if (result.split(";")[0] != "1"){
			throw "ERRO AO CRIAR O MOVIMENTO\n\n"+result.split("=")[0]+"\n\n"
		}

}


function finalInformacaoNC (){
	
	
	var nomeDataserver = "MOVMOVIMENTOTBCDATA"
		log.info("nomeDataserver: "+nomeDataserver)
		
		var user = DatasetFactory.getDataset("ds_connector", null, null, null);
		log.info("user: "+user)
		
		var usuario = user.getValue(0, "INTEGRADOR")
		log.info("usuario: "+usuario)
		var senha = user.getValue(0, "SENHA")
		log.info("senha: "+senha)
		var email = user.getValue(0, "EMAIL")
		log.info("email: "+email)
		
		var DATACOLETA = hAPI.getCardValue("DATA_FINALIZACAO")
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
		
		var contexto = "codcoligada=1;codusuario=pedro.jesus;codsistema=N"
			log.info("contexto: "+contexto)
			
		var authService = getWebService(usuario, senha)
		log.info("authService: "+authService)

		var xml = 
			"<MovMovimento>"+
				"<TMOV>" +
						"<CODCOLIGADA>1</CODCOLIGADA>" +
						"<IDMOV>"+hAPI.getCardValue("IDMOV_RM_NC")+"</IDMOV>" +
						"<CODTMV>3.1.11</CODTMV>"+
						"<DATAEXTRA2>" + datafull  + " </DATAEXTRA2>"+
				"</TMOV>"+
				"<TITMMOVCOMPL>" +
						"<CODCOLIGADA>1</CODCOLIGADA>" +
						"<IDMOV>"+hAPI.getCardValue("IDMOV_RM_NC")+"</IDMOV>" +
						"<NSEQITMMOV>1</NSEQITMMOV>" +
						"<AVALACAO>"+hAPI.getCardValue("AVALIACAO_EFICACIA")+ "</AVALACAO>"+
						"<RESPRNCA>"+  hAPI.getCardValue("RESPONSAVEL_PREENCHIMENTO") +"</RESPRNCA>" +
						"<RESPENCERR>"+hAPI.getCardValue("RESPONSAVEL_ENCERRAMENTO")+" </RESPENCERR>"+
				"</TITMMOVCOMPL>"+
			"</MovMovimento>"
				
				log.info("xml: "+xml)
				
		
		
		var result = new String( authService.saveRecord(nomeDataserver, xml, contexto) );
	
		log.error("result: "+result);
	
		if (result.split(";")[0] != "1"){
			throw "ERRO AO CRIAR O MOVIMENTO\n\n"+result.split("=")[0]+"\n\n"
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

function anexo(){
	if ( hAPI.listAttachments().size() < 1){    
		log.info("function anexo ")
    	throw "<br/><br/><strong>É obrigatório o anexo nesta atividade .</strong><br/>";
    
		}	
}
function email(){
	
	try{
		log.info("Entrou TRY Envio de email Nota Emitida:");
		
	    //Monta mapa com parâmetros do template
	    var parametros = new java.util.HashMap();
	    var idChamado = getValue("WKNumProces").toString()
	    	log.info("idChamado" +idChamado);
	    var numeroMov = hAPI.getCardValue("NUM_MOV_NC")
	    	log.info("numeroMov" + numeroMov);
	    
	  //Parametros que vão estar dentro do template 
	    parametros.put("NMOV", numeroMov);
	    parametros.put("SLFLUIG", hAPI.getCardValue("idChamado"));
	    parametros.put("CCUSTO", hAPI.getCardValue("CENTRO_DE_CUSTO"));
	    parametros.put("DATAPRAZO" , hAPI.getCardValue("PRAZO_EMAIL") );
	   
	    
	    var assunto = "RNCAC - " + numeroMov
	 
	    //Este parâmetro é obrigatório e representa o assunto do e-mail
	    parametros.put("subject", assunto);
	 
	    //Monta lista de destinatários
	    var destinatarios = new java.util.ArrayList();

//		var EMAILCONSULTOR = hAPI.getCardValue("EMAILCONSULTOR");
		var EMAIL_SOLICITANTE = hAPI.getCardValue("EMAIL_SOLICITANTE");
	    //destinatarios.add("pedro.jesus@tradimaq.com.br");
	    destinatarios.add("qualidade@tradimaq.com.br");
	    destinatarios.add(EMAIL_SOLICITANTE);

	    //Envia e-mail
	    notifier.notify("008310", "032", parametros, destinatarios, "text/html");

		log.info("Email Nota Emitida enviado!");
	 
	} catch(e){
	    log.info("Erro ao enviar email Nota Emitida: " + e);
}
}


