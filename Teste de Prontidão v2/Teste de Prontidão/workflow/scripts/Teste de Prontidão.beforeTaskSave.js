function beforeTaskSave(sequenceId){
	log.info("Entrou beforeTaskSave:");
	var PERGUNTA_1 = hAPI.getCardValue("PERGUNTA_1");
	var PERGUNTA_2 = hAPI.getCardValue("PERGUNTA_2");
	var PERGUNTA_3 = hAPI.getCardValue("PERGUNTA_3");
	var PERGUNTA_4 = hAPI.getCardValue("PERGUNTA_4");
	var PERGUNTA_5 = hAPI.getCardValue("PERGUNTA_5");
	var PERGUNTA_6 = hAPI.getCardValue("PERGUNTA_6");
	var PERGUNTA_7 = hAPI.getCardValue("PERGUNTA_7");
	var idChamado = getValue("WKNumProces").toString()
	var funcao = hAPI.getCardValue("FUNCAO")
	
	 if (	
			PERGUNTA_1 == '3' || PERGUNTA_2 == '3' || PERGUNTA_3 == '3' || PERGUNTA_4 == '3' ||
			PERGUNTA_5 == '3' || PERGUNTA_6 == '3' || PERGUNTA_7 == '3' 
			){ 
				log.info("Entrou if ");
				log.info("Entrou if " + funcao);
				log.info("TESTE DE PRONTIDÃO " + idChamado + " - ALERTA VERMELHO ");
				
				try{
					hAPI.setCardValue("STATUS","VERMELHO");
					log.info("Entrou TRY Envio de email Nota Emitida:");
					
				    //Monta mapa com parâmetros do template
				    var parametros = new java.util.HashMap();
				    
				  //Parametros que vão estar dentro do template 
				    parametros.put("NOME", hAPI.getCardValue("NOME_COMPLETO"));
				    parametros.put("CHAPA", hAPI.getCardValue("CHAPA"));
				    parametros.put("FUNCAO", hAPI.getCardValue("FUNCAO"));
				    parametros.put("SOLICITACAO" , idChamado );
		
				    var assunto = "TESTE DE PRONTIDÃO PGS-004633 - " + idChamado + " - ALERTA VERMELHO"
				 
				    //Este parâmetro é obrigatório e representa o assunto do e-mail
				    parametros.put("subject", assunto);
				 
				    //Monta lista de destinatários
				    var destinatarios = new java.util.ArrayList();
			
			//		var EMAILCONSULTOR = hAPI.getCardValue("EMAILCONSULTOR");
					var EMAIL_SOLICITANTE = hAPI.getCardValue("EMAIL");
				    destinatarios.add("pedro.jesus@tradimaq.com.br");
				    destinatarios.add("renato@tradimaq.com.br");
				    destinatarios.add("arthur.evangelista@tradimaq.com.br");
				    destinatarios.add("gilson@tradimaq.com.br");
				    destinatarios.add("leonardo.leite@tradimaq.com.br");
				    destinatarios.add("testeprontidao@tradimaq.com.br");
				    destinatarios.add(EMAIL_SOLICITANTE);
		
				    //Envia e-mail
				    notifier.notify("008310", "028", parametros, destinatarios, "text/html");
			
					log.info("Email Nota Emitida enviado!");
				 
				} catch(e){
				    log.info("Erro ao enviar email Nota Emitida: " + e);
			}
		} else if (	
			PERGUNTA_1 == '2' || PERGUNTA_2 == '2' || PERGUNTA_3 == '2' || PERGUNTA_4 == '2' ||
			PERGUNTA_5 == '2' || PERGUNTA_6 == '2' || PERGUNTA_7 == '2'  
			){ 
				log.info("Entrou if ");
				log.info("TESTE DE PRONTIDÃO - ALERTA lARANJA");
				try{
					hAPI.setCardValue("STATUS","lARANJA");
					log.info("Entrou TRY Envio de email Nota Emitida:");
					
				    //Monta mapa com parâmetros do template
				    var parametros = new java.util.HashMap();
				    
				  //Parametros que vão estar dentro do template 
				    parametros.put("NOME", hAPI.getCardValue("NOME_COMPLETO"));
				    parametros.put("CHAPA", hAPI.getCardValue("CHAPA"));
				    parametros.put("FUNCAO", hAPI.getCardValue("FUNCAO"));
				    parametros.put("SOLICITACAO" , idChamado );
				    
				    
				    var assunto = "TESTE DE PRONTIDÃO PGS-004633 - " + idChamado + " - ALERTA LARANJA"
				 
				    //Este parâmetro é obrigatório e representa o assunto do e-mail
				    parametros.put("subject", assunto);
				 
				    //Monta lista de destinatários
				    var destinatarios = new java.util.ArrayList();
			
			//		var EMAILCONSULTOR = hAPI.getCardValue("EMAILCONSULTOR");
					var EMAIL_SOLICITANTE = hAPI.getCardValue("EMAIL");
				    destinatarios.add("pedro.jesus@tradimaq.com.br");
				    destinatarios.add("renato@tradimaq.com.br");
				    destinatarios.add("arthur.evangelista@tradimaq.com.br");
				    destinatarios.add("gilson@tradimaq.com.br");
				    destinatarios.add("leonardo.leite@tradimaq.com.br");
				    destinatarios.add("testeprontidao@tradimaq.com.br");
				    destinatarios.add(EMAIL_SOLICITANTE);
		
				    //Envia e-mail
				    notifier.notify("008310", "027", parametros, destinatarios, "text/html");
			
					log.info("Email Nota Emitida enviado!");
				 
				} catch(e){
				    log.info("Erro ao enviar email Nota Emitida: " + e);
			}
		} else if (	
				PERGUNTA_1 == '1' || PERGUNTA_2 == '1' || PERGUNTA_3 == '1' || PERGUNTA_4 == '1' ||
				PERGUNTA_5 == '1' || PERGUNTA_6 == '1' || PERGUNTA_7 == '1'
				){ 
					log.info("Entrou if ");
					log.info("TESTE DE PRONTIDÃO - ALERTA AMARELO");
					try{
						hAPI.setCardValue("STATUS","AMARELO");
						log.info("Entrou TRY Envio de email Nota Emitida:");
						
					    //Monta mapa com parâmetros do template
					    var parametros = new java.util.HashMap();
					    
					  //Parametros que vão estar dentro do template 
					    parametros.put("NOME", hAPI.getCardValue("NOME_COMPLETO"));
					    parametros.put("CHAPA", hAPI.getCardValue("CHAPA"));
					    parametros.put("FUNCAO", hAPI.getCardValue("FUNCAO"));
					    parametros.put("SOLICITACAO" , idChamado );
			
					    var assunto = "TESTE DE PRONTIDÃO PGS-004633 - " + idChamado + " - ALERTA AMARELO"
					 
					    //Este parâmetro é obrigatório e representa o assunto do e-mail
					    parametros.put("subject", assunto);
					 
					    //Monta lista de destinatários
					    var destinatarios = new java.util.ArrayList();
				
				//		var EMAILCONSULTOR = hAPI.getCardValue("EMAILCONSULTOR");
						var EMAIL_SOLICITANTE = hAPI.getCardValue("EMAIL");
					    destinatarios.add("pedro.jesus@tradimaq.com.br");
					    destinatarios.add("renato@tradimaq.com.br");
					    destinatarios.add("arthur.evangelista@tradimaq.com.br");
					    destinatarios.add("gilson@tradimaq.com.br");
					    destinatarios.add("leonardo.leite@tradimaq.com.br");
					    destinatarios.add("testeprontidao@tradimaq.com.br");
					    destinatarios.add(EMAIL_SOLICITANTE);
			
					    //Envia e-mail
					    notifier.notify("008310", "026", parametros, destinatarios, "text/html");
				
						log.info("Email Nota Emitida enviado!");
					 
					} catch(e){
					    log.info("Erro ao enviar email Nota Emitida: " + e);
				}
			}
}