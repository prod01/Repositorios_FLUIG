function displayFields(form,customHTML){ 
	
		var Now_State = getValue("WKNumState");
		log.info(Now_State)
		
		form.setValue("ATIVIDADE_SOLICITACAO",Now_State)
		
	 	form.setShowDisabledFields(true); // desabilita os set enable dos campos 
	 	form.setHidePrintLink(true); // // desabilita o botão de imprimir 
	

		form.setVisibleById("OCORRENCIA", true);
		form.setVisibleById("VALIDACAO_TRATATIVA", false);

	
	if(Now_State == 6) {
		
		
		
		form.setVisibleById("OCORRENCIA", true);
		form.setVisibleById("VALIDACAO_TRATATIVA", false);
		
		 
		form.setEnabled("NOME_SOLICITANTE", false);
		form.setEnabled("CENTRO_DE_CUSTO", false);
		form.setEnabled("DATA_CAMINHADA", false);
		form.setEnabled("HORARIO_CAMINHADA", false);
		for (var i = 0; i <= form.getValue("NUMERO_NOME_ACOMPANHANTES"); i++){
				
				form.setEnabled("NOME_PARTICIPANTES___"+i, false)
				
				}   
		customHTML.append("<script>$('#TABELA_NOME_ACOMPANHANTES_BOTAO').prop('disabled', true);</script>");
		customHTML.append("<script>$('#ANEXOS_CAMINHADA').prop('disabled', true);</script>");
		
		form.setEnabled("OBS_SOLICITANTE_CAMINHADA", false);
		for (var i = 0; i <= form.getValue("NUMERO_OCORRENCIA"); i++){
			
			form.setEnabled("LOCAL_OCORRENCIA___"+i, false)
			form.setEnabled("DESCRICAO_OCORRENCIA___"+i, false)
			form.setEnabled("RESP_ACAO___"+i, false)
			customHTML.append("<script>$('#ANEXOS_OCORRENCIA').prop('disabled', true);</script>");
			form.setEnabled("ANEXOS_OCORRENCIA", false)
			customHTML.append("<script>$('#ANEXOS_OCORRENCIA___"+i+"').prop('disabled', true);</script>");
			form.setEnabled("TRATATIVA_LIDERANCA___"+i, true)
			form.setEnabled("OBSERVACAO_SSMA_OCORRENCIA___"+i, false)

			}  
		
		
	}
	
//	if(Now_State == 7) {
//		
//		form.setVisibleById("OCORRENCIA", true);
//		form.setVisibleById("VALIDACAO_TRATATIVA", true);
//		
//		 
//		form.setEnabled("NOME_SOLICITANTE", false);
//		form.setEnabled("CENTRO_DE_CUSTO", false);
//		form.setEnabled("DATA_CAMINHADA", false);
//		form.setEnabled("HORARIO_CAMINHADA", false);
//		
//		for (var i = 0; i <= form.getValue("NUMERO_NOME_ACOMPANHANTES"); i++){
//				
//				form.setEnabled("NOME_PARTICIPANTES___"+i, false)
//				
//				}
//		
//		customHTML.append("<script>$('#TABELA_NOME_ACOMPANHANTES_BOTAO').prop('disabled', true);</script>");
//		customHTML.append("<script>$('#ANEXOS_CAMINHADA').prop('disabled', true);</script>");
//		form.setEnabled("OBS_SOLICITANTE_CAMINHADA", false);
//		
//		for (var i = 0; i <= form.getValue("NUMERO_OCORRENCIA"); i++){
//			
//			form.setEnabled("LOCAL_OCORRENCIA___"+i, false)
//			form.setEnabled("DESCRICAO_OCORRENCIA___"+i, false)
//			form.setEnabled("RESP_ACAO___"+i, false)
//			customHTML.append("<script>$('#ANEXOS_OCORRENCIA___'"+i+").prop('disabled', true);</script>");
//			form.setEnabled("TRATATIVA_LIDERANCA___"+i, false)
//			form.setEnabled("OBSERVACAO_SSMA_OCORRENCIA___"+i, false)
//
//			}  
//		
//		
//		
//	}
	
}

