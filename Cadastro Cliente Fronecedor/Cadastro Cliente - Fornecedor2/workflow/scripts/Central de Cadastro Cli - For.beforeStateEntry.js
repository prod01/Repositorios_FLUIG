function beforeStateEntry(sequenceId){
	

	if (sequenceId == 18){
		
		log.info("Entrou IF");
		
		if (hAPI.getCardValue("CADASTRODADOS") == "Realizado"){
			
			try{
				
				log.info("Entrou TRY Realizado:");
				
				var NOME_SOLICITANTE = hAPI.getCardValue("NOME_SOLICITANTE");
				var TIPO_CADASTRO = hAPI.getCardValue("TIPO_CADASTRO");
				var DATASOLICITACAO = hAPI.getCardValue("DATASOLICITACAO");
				var HORASOLICITACAO = hAPI.getCardValue("HORASOLICITACAO");
				var DATAFINALIZACAO = hAPI.getCardValue("DATAFINALIZACAO");
				
				if (hAPI.getCardValue("TIPO_ENTIDADE") == "Pessoa-Juridica"){
					var NOMEDOCLINTE = hAPI.getCardValue("RAZAO_PJ");
				} else {
					var NOMEDOCLINTE = hAPI.getCardValue("NOME_PF");
				}
				
				var emailSolicitante = hAPI.getCardValue("EMAIL_SOLICITANTE");
				var emailContato = hAPI.getCardValue("EMAILCONTATO");
				
			    //Monta mapa com parâmetros do template
			    var parametros = new java.util.HashMap();
			    
			    parametros.put("NOME_SOLICITANTE", NOME_SOLICITANTE);
			    parametros.put("TIPO_CADASTRO", TIPO_CADASTRO);
			    parametros.put("NOMEDOCLINTE", NOMEDOCLINTE);
			    parametros.put("DATASOLICITACAO", DATASOLICITACAO);
			    parametros.put("HORASOLICITACAO", HORASOLICITACAO);
			    parametros.put("DATAFINALIZACAO", DATAFINALIZACAO);
			 
			    //Relatório de Retorno de Plataformas - TPE-0000 - Contrato Nº 000000
			    var assunto = "Cadastro de Cliente/Fornecedor Tradimaq";
			    
			 
			    //Este parâmetro é obrigatório e representa o assunto do e-mail
			    parametros.put("subject", assunto);
			 
			    //Monta lista de destinatários
			    var destinatarios = new java.util.ArrayList();
			    destinatarios.add("arthur.evangelista@tradimaq.com.br");
			    destinatarios.add("barbara.costa@tradimaq.com.br");
			    destinatarios.add(emailSolicitante);
			    destinatarios.add(emailContato);
			 
			    //Envia e-mail
			    notifier.notify("008310", "009", parametros, destinatarios, "text/html");

				log.info("Email realizado enviado!");
			 
			} catch(e){
			    log.info("Erro ao enviar email:" + e);
			}
		
		} else {
			
			try{
				
				log.info("Entrou TRY Reprovado:");
				
				var NOME_SOLICITANTE = hAPI.getCardValue("NOME_SOLICITANTE");
				var TIPO_CADASTRO = hAPI.getCardValue("TIPO_CADASTRO");
				var DATASOLICITACAO = hAPI.getCardValue("DATASOLICITACAO");
				var HORASOLICITACAO = hAPI.getCardValue("HORASOLICITACAO");
				var CADASTROOBS = hAPI.getCardValue("CADASTROOBS");
				if (CADASTROOBS == ""){
					CADASTROOBS = hAPI.getCardValue("FINANCEIROOBS");
				}
				
				if (hAPI.getCardValue("TIPO_ENTIDADE") == "Pessoa-Juridica"){
					var NOMEDOCLINTE = hAPI.getCardValue("RAZAO_PJ");
				} else {
					var NOMEDOCLINTE = hAPI.getCardValue("NOME_PF");
				}
				
				var emailSolicitante = hAPI.getCardValue("EMAIL_SOLICITANTE");
				var emailContato = hAPI.getCardValue("EMAILCONTATO");
				
			    //Monta mapa com parâmetros do template
			    var parametros = new java.util.HashMap();
			    
			    parametros.put("NOME_SOLICITANTE", NOME_SOLICITANTE);
			    parametros.put("TIPO_CADASTRO", TIPO_CADASTRO);
			    parametros.put("NOMEDOCLINTE", NOMEDOCLINTE);
			    parametros.put("DATASOLICITACAO", DATASOLICITACAO);
			    parametros.put("HORASOLICITACAO", HORASOLICITACAO);
			    parametros.put("CADASTROOBS", CADASTROOBS);
			 
			    //Relatório de Retorno de Plataformas - TPE-0000 - Contrato Nº 000000
			    var assunto = "Cadastro de Cliente/Fornecedor Tradimaq";
			    
			 
			    //Este parâmetro é obrigatório e representa o assunto do e-mail
			    parametros.put("subject", assunto);
			 
			    //Monta lista de destinatários
			    var destinatarios = new java.util.ArrayList();
			    destinatarios.add("arthur.evangelista@tradimaq.com.br");
			    destinatarios.add("barbara.costa@tradimaq.com.br");
			    destinatarios.add(emailSolicitante);
			    destinatarios.add(emailContato);
			 
			    //Envia e-mail
			    notifier.notify("008310", "010", parametros, destinatarios, "text/html");

				log.info("Email reprovado enviado!");
			 
			} catch(e){
			    log.info("Erro ao enviar email:" + e);
			}
			
		}
	}
}