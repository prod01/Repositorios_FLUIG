function validateForm(form){
	 var Now_State =parseInt(getValue("WKNumState"));
	 var Next_State =parseInt(getValue("WKNextState"));
	 
	 
	 if(Now_State == 5){ 
			
		 if (form.getValue("NOME_SOLICITANTE") == ""){
				throw "Necessario Preencher o executor da caminhada"; 
			}
		 
		 if (form.getValue("CENTRO_DE_CUSTO") == ""){
				throw "Necessario Preencher o centro de custo "; 
			}
		 if (form.getValue("DATA_CAMINHADA") == ""){
				throw "Necessario Informar o Dia"; 
			}
		 if (form.getValue("HORARIO_CAMINHADA") == ""){
				throw "Necessario Informar a Hora"; 
			}
		 for (var i = 0; i <= form.getValue("NUMERO_NOME_ACOMPANHANTES"); i++){
				
				if (form.getValue("NOME_ACOMPANHANTES"+i)== "" ){
					throw "Necessario Informar o nome do participante.";
				}
				
			}   
		 
		 if (form.getValue("OBS_SOLICITANTE") == ""){
				throw "Necessario Preencher a observação do solicitante."; 
			}
		 
		 }
	 
	 if(Now_State == 6){ 
		 
		 for (var i = 0; i <= form.getValue("NUMERO_NOME_ACOMPANHANTES"); i++){
				
				if (form.getValue("LOCAL_OCORRENCIA"+i)== "" ){
					throw "Necessario Informar o Local Ocorrência:.";
				}

				if (form.getValue("DESCRICAO_OCORRENCIA"+i)== "" ){
					throw "Necessario Informar a Descrição da Ocorrência.";
				}

				if (form.getValue("RESP_ACAO"+i)== "" ){
					throw "Necessario Informar o Responsavel pela Ação.";
				}

				if (form.getValue("OBSERVACAO_LIDERANCA"+i)== "" ){
					throw "Necessario Informar a Observações liderança.";
				}

				if (form.getValue("TRATATIVA_LIDERANCA"+i)== "" ){
					throw "Necessario Informar a Tratativa liderança.";
				}
				
				
			}   
	 }
	 
	 
//	 if(Now_State == 7 ){ 
//		 
//		 for (var i = 0; i <= form.getValue("NUMERO_NOME_ACOMPANHANTES"); i++){
//				 if (form.getValue("OBSERVACAO_SSMA"+i)== "" ){
//						throw "Necessario Informar a Observação SSMA.";
//					}
//		 	}
//		 if (form.getValue("ESCOPO_APROVADO") != "SIM" && Next_State == 8){
//				throw "Somente 'Solicitaçoes Aprovadas' podem seguir para a proxima atividade"; 
//			}
//		 if (form.getValue("OBS_SSMA") == "" && form.getValue("ESCOPO_APROVADO_LIDERANCA") == "NAO"){
//				throw "Favor fornecer observações"; 
//			}
//
//	 }
	 
}