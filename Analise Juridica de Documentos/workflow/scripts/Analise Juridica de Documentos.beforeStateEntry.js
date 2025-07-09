function beforeStateEntry(sequenceId){
	
	if(sequenceId == "17"){ 
		try{
			
			log.info("Entrou TRY Envio de email Nota Emitida:");
			
		    //Monta mapa com parâmetros do template
		    var parametros = new java.util.HashMap();
		    
		    
		    parametros.put("SOLICITACAO", hAPI.getCardValue("N_SOLICITACAO"));

		    var assunto = "Análise juridica de documentos - " +hAPI.getCardValue("N_SOLICITACAO")
		 
		    //Este parâmetro é obrigatório e representa o assunto do e-mail
		    parametros.put("subject", assunto);
		 
		    //Monta lista de destinatários
		    var destinatarios = new java.util.ArrayList();
	
	//		var EMAILCONSULTOR = hAPI.getCardValue("EMAILCONSULTOR");
			var EMAIL_SOLICITANTE = hAPI.getCardValue("EMAIL_SOLICITANTE");
		    destinatarios.add("pedro.jesus@tradimaq.com.br");
		    destinatarios.add("barbara.costa@tradimaq.com.br");
		    destinatarios.add(EMAIL_SOLICITANTE);
		    //destinatarios.add(EMAILFATURAMENTO);
		 
		    //Envia e-mail
		    notifier.notify("008310", "025", parametros, destinatarios, "text/html");
	
			log.info("Email Nota Emitida enviado!");
		 
		} catch(e){
		    log.info("Erro ao enviar email Nota Emitida: " + e);
		}
	}
}