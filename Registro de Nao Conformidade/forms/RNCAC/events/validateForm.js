function validateForm(form){
	
	 var Now_State =parseInt(getValue("WKNumState"));
	    var Next_State =parseInt(getValue("WKNextState"));
	    
	    // bloco de condição que valida no estado incial do processo se os seguintes campos etão em braco. 
	
	
	
			if(Now_State == 0 || Now_State == 6 ){
				
				
				    if (form.getValue("REQUISITOS_NC_ISO") == "VAZIO"){
						throw "Necessario Preencher o campo 'Requisitos ISO 9001'."; 
					}
					if (form.getValue("NUM_MOV_NC") == ""){
						throw "Necessario Preencher o campo 'Número Mov NC'."; 
					}
					if (form.getValue("CENTRO_DE_CUSTO") == ""){
						throw "Necessario Preencher o campo 'Centro de custo'."; 
					}
					if (form.getValue("FONTE_DE_IDENTIFICACAO_NC") == ""){
						throw "Necessario Preencher o campo 'Fonte de Identificação'."; 
					}
					if (form.getValue("REINCIDENCIA_NC") == ""){
						throw "Necessario Preencher o campo 'Reincidência'."; 
					}
					if (form.getValue("DESCRICAO_NC") == ""){
						throw "Necessario Preencher o campo 'Descrição NC'.";  
					}

			}
			
			if (Now_State == 7 && Next_State==9){
				
					if (form.getValue("PRAZO_ACAO_PA") == ""){
						throw "Necessario Preencher o campo 'Prazo Ação NC'."; 
					}
		
					if (form.getValue("ACAO_IMEDIATA_PA") == ""){
						throw "Necessario Preencher o campo 'Ação Imediata'."; 
					}
					if (form.getValue("PORQUE_1") == ""){
						throw "Necessario Preencher o campo 'Por quê?' na ANALISE DE CAUSA.";
					}
					if (form.getValue("PORQUE_2") == ""){
						throw "Necessario Preencher o campo 'Por quê?' na ANALISE DE CAUSA.";
					}
					if (form.getValue("PORQUE_3") == ""){
						throw "Necessario Preencher o campo 'Por quê?' na ANALISE DE CAUSA.";
					}
					if (form.getValue("ACAO_CORRETIVA_PA") == ""){
						throw "Necessario Preencher o campo 'Ações corretivas'.";
					}
					
			}
			
			if (Now_State == 9 && Next_State == 10 ){
					
					if (form.getValue("VALIDACAO_PLAN_ACAO") == "VAZIO"){
						throw "Necessario Preencher o campo 'Validação Plano de Ação'."; 
					}
					if (form.getValue("OBS_PLAN_ACAO") == ""){
						throw "Necessario Preencher o campo 'Observações' na Validação Plano de Ação."; 
					}
					if(Next_State == 10 && form.getValue("VALIDACAO_PLAN_ACAO") == "REPROVADA" ){
						throw "Um plano de Ação Reprovado não pode ser enviado para Anexação das Evidencias."; 
					}
					if(Next_State == 7 && form.getValue("VALIDACAO_PLAN_ACAO") == "APROVADA" ){
						throw "Um plano de Ação Aprovado não pode ser enviado para Edição da Ação do Gestor."; 
					}

			}
			
			if (Now_State == 10 && Next_State == 11 ){
			
					if (form.getValue("OBS_EVIDENCIAS_GEST") == "VAZIO"){
						throw "Necessario Preencher o campo 'Observações' nas EVIDÊNCIAS."; 
					}
				
			}

			
			if (Now_State == 11 && Next_State == 18 ){
				
					if (form.getValue("VALIDACAO_EVIDENCIAS") == "VAZIO"){
						throw "Necessario Preencher o campo 'Validação Evidencias'."; 
					}
					if (form.getValue("OBS_EVIDENCIAS") == ""){
						throw "Necessario Preencher o campo 'Observações' na VAVILAÇÃO EVIDENCIAS."; 
					}
					if(Next_State == 18 && form.getValue("VALIDACAO_PLAN_ACAO") == "REPROVADA" ){
						throw "Uma Evidências Reprovado não pode ser enviado para Follow Up."; 
					}
					if(Next_State == 7 && form.getValue("VALIDACAO_PLAN_ACAO") == "APROVADA" ){
						throw "Um plano de Ação Aprovado não pode ser enviado para Edição da Ação do Gestor."; 
					}
			}
			
			if (Now_State == 18){
				
					if (form.getValue("FOLLOW_UP_STATUS") == "VAZIO"){
						throw "Necessario Preencher o campo 'STATUS'."; 
					}
					if (form.getValue("AVALIACAO_EFICACIA") == ""){
						throw "Necessario Preencher o campo 'Avaliação de Eficácia das Ações'."; 
					}
					if (form.getValue("RESPONSAVEL_PREENCHIMENTO") == ""){
						throw "Necessario Preencher o campo 'Responsável pelo Preenchimento do RNCA'."; 
					}
					if (form.getValue("RESPONSAVEL_ENCERRAMENTO") == ""){
						throw "Necessario Preencher o campo 'Responsável pelo Encerramento'."; 
					}
					if (form.getValue("OBSERVACAO_FOLLOW_UP") == ""){
						throw "Necessario Preencher o campo 'Observações' no FOLLOW UP."; 
					}

			}
	
}
		
