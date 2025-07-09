function validateForm(form){
	
	var Now_State = parseInt(getValue("WKNumState"));
	var Next_State =parseInt(getValue("WKNextState"));
	    
	  
	if(Now_State == 0 || Now_State == 6 ){
		
		if (form.getValue("IDOBJOF") == ""){
			throw "Necessario Preencher o Identificador do Pneu."; 
		}
		if (form.getValue("NUMERO_NF") == ""){
			throw "Necessario Preencher o Numero da NF Remessa."; 
		}
		if (form.getValue("NOME_CLIFOR") == ""){
			throw "Necessario Preencher o Nome do Fornecedor."; 
		}
		
	}
	
	if( Now_State == 7  ){
		
		
		
		if (Next_State == 9){
			
			if (form.getValue("VALIDACAO_LAUDO") == "REPROVADA"){
				throw "Uma Reforma Reprovada não pode ser enviada para informar OC"; 
			}
			if (form.getValue("OBS_APRV_LAUDO") == ""){
				throw "Necessario Preencher o campo Observações."; 
			}
		
			
		}
		
	if (Next_State == 10){
			
			if (form.getValue("VALIDACAO_LAUDO") == "APROVADA"){
				throw "Uma Reforma aprovada não pode ser enviada para descarte do Pneu"; 
			}
			if (form.getValue("OBS_APRV_LAUDO") == ""){
				throw "Necessario Preencher o campo Observações."; 
			}
		
		
		}
		
		
		
	}
	
	if(Now_State == 9 && Next_State == 23){
		
        if (form.getValue("OC_APROVADA") == ""){
			throw "Necessario Informar o Numero da Ordem de Compra."; 
		}
		if (form.getValue("PRAZO_RETORNO") == ""){
			throw "Necessario Preencher o campo Prazo Retorno da Reforma."; 
		}
        
	}
	
	
	
	if(Now_State == 10 && Next_State ==  19 ){
		
        if (form.getValue("MOTIVO_DESCARTE") == ""){
			throw "Necessario Preencher o campo Motivo do Descarte:"; 
		}
		
	}
	
	if(Now_State == 23 && Next_State == 39 ){
		
		if (form.getValue("NOVA_MEDIDA") == ""){
			throw "Necessario Preencher o campo Medida Pos Reforma:."; 
		}
		if (form.getValue("QNT_REFORMA") == ""){
			throw "Necessario Preencher o campo Numero de Reforma:."; 
		}
		if (form.getValue("NF_RETORNO") == ""){
			throw "Necessario Preencher o campo Nº Nota Fisca de Retorno:."; 
		}
		if (form.getValue("SL_PORTAL_NF") == "VAZIO"){
			throw "Necessario Preencher o campo SL Portal de Notas:."; 
		}
		
	}
	
//	if(Now_State == 25 && Next_State == 36 ){
//		
//	    if (form.getValue("VALIDACAO_ALT_MILI") == "VAZIO"){
//			throw "Necessario Preencher o campo Alteração da Milimetragem."; 
//		}
//		if (form.getValue("VALIDACAO_ALT_REF") == "VAZIO"){
//			throw "Necessario Preencher o campo Alteração de Reforma."; 
//		}
//	}
	
}