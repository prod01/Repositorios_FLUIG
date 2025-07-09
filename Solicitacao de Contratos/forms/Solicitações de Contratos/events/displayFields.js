function displayFields(form,customHTML){

    form.setShowDisabledFields(true); // desabilita os set enable dos campos 
	form.setHidePrintLink(true); // // desabilita o botão de imprimir 

	//variavel que recebe o codigo referente ao estado atual do processo.
	var Now_State = parseInt(getValue("WKNumState"));
	form.setValue('NUMERO_ATIVIDADE',Now_State)
	
	
	
    
    switch(Now_State){
        case 0:
            //método que desabilita a edição dos seguintes campos do formulário
             
           //CAMPOS NOVOS CONTRATOS 
             	form.setEnabled("TIPO_SOLICITACAO", true);
	            form.setEnabled("NOME_SOLICITANTE", true); 
		        form.setEnabled("CENTRO_DE_CUSTO", true);
		        form.setEnabled("RESP_CENTRO_DE_CUSTO", true);		
		        form.setEnabled("OBJ_CONTRATO", true);
			    form.setEnabled("PRAZO_DE_ENTREGA", true);
		        form.setEnabled("CENTRO_DE_CUSTO_ENTREGA",true);
			    form.setEnabled("ENDEREÇO_DE_ENTREGA", true);
		        form.setEnabled("INICIO_VIGENCIA", true); 
		        form.setEnabled("FIM_VIGENCIA", true); 
	            form.setEnabled("QUANTIDADE_DIAS_PARA_MEDICAO", true); 
		        form.setEnabled("PRAZO_DEPAGAMENTO", true);
	            form.setEnabled("GARANTIA", true);
//	          	form.setEnabled("CRONOGRAMA_SERVICO_1", true);
//	          	form.setEnabled("CRONOGRAMA_SERVICO_2", true);
//	          	form.setEnabled("CRONOGRAMA_SERVICO_3", true);
	          	form.setEnabled("TIPOS_CRONOGRAMA", true);
//	          	form.setEnabled("MATERIAIS_ULTILIZADOS_1", true);
//	          	form.setEnabled("MATERIAIS_ULTILIZADOS_2", true);
//	          	form.setEnabled("MATERIAIS_ULTILIZADOS_3", true);
//	          	form.setEnabled("MOBILIZACAO_CLIENTE_1", true);
//	          	form.setEnabled("MOBILIZACAO_CLIENTE_2", true);
//	          	form.setEnabled("MOBILIZACAO_CLIENTE_3", true);
//	          	form.setEnabled("DESMOBILIZACAO_CLIENTE_1", true);
//	          	form.setEnabled("DESMOBILIZACAO_CLIENTE_2", true);
//	          	form.setEnabled("DESMOBILIZACAO_CLIENTE_3", true);
//	          	form.setEnabled("REGISTRO_CLT_1", true);
//	          	form.setEnabled("REGISTRO_CLT_2", true);
//	          	form.setEnabled("REGISTRO_CLT_3", true);
	        	form.setEnabled("MULTAS", true);
	        	form.setEnabled("MULTAS_PREVISTAS", true);
	        	form.setEnabled("DISPONIBILIDADE_FISICA", true);
	        	form.setEnabled("ANEXO_DISPONIBILIDADE", true);
	        	form.setEnabled("DISPONIBILIDADE_FISICA", true);
	        	form.setEnabled("ANEXO_DISPONIBILIDADE", true);
				form.setEnabled("PERCENTUAL_RECISAO", true);
	            form.setEnabled("HIPOTESE_RESCISAO", true); 
		        form.setEnabled("PRAZO_RECISAO", true);
		        form.setEnabled("SUGESTAO_FORNECEDOR", true);
		        form.setEnabled("RAZAO_SOCIAL_SUGESTAO", true);
			    form.setEnabled("RESPONSAVEL_SUGESTAO", true);
			    form.setEnabled("CNPJ_SUGESTAO", true);
		        form.setEnabled("TELEFONE_SUGESTAO",true);
			    form.setEnabled("EMAIL_SUGESTAO", true);
		        form.setEnabled("JUSTIFICATIVA_SUGESTAO", true); 
		      //CAMPOS TABELA NOVOS CONTRATOS 
		        form.setEnabled("ITEM_CONTRATOS", true);
		        form.setEnabled("DESCROCAO_SERV_CONTRATOS", true);
		        form.setEnabled("UNIDADE_CONTRATOS", true);
		        form.setEnabled("QUANT_MENSAL_CONTRATOS", true);
		        form.setEnabled("PRECO_UNID_CONTRATOS", true);
			 //CAMPOS ADTIVOS
		        form.setEnabled("N_CONTRATO_ADTIVOS", true);
	          	form.setEnabled("RAZAO_SOCIAL_ADTIVOS", true);
	            form.setEnabled("CONTATO_ADTIVOS", true); 
	          	form.setEnabled("TELEFONE_ADTIVOS", true);
	          	form.setEnabled("DETALHAMENTO_SUGESTAO", true);
	          //CAMPOS TABELA ADTIVOS
	            form.setEnabled("TABELA_ADTIVOS", true);
	            form.setEnabled("ITEM_ADTIVOS", true);
		        form.setEnabled("DESCROCAO_SERV_ADTIVOS", true);
		        form.setEnabled("UNIDADE_ADTIVOS", true);
		        form.setEnabled("QUANT_MENSAL_ADTIVOS", true);
		        form.setEnabled("PRECO_UNID_ADTIVOS", true);
		        form.setEnabled("TABELA_ADTIVOS_BOTAO", false);
	    		form.setEnabled("CALCULARTOTAL_ADTIVOS", false);
		      //CAMPOS RECISÃO
	          	form.setEnabled("N_CONTRATO_RESCISAO", true);
	          	form.setEnabled("RAZAO_SOCIAL_RESCISAO", true); 
	        	form.setEnabled("CONTATO_RESCISAO", true);
	        	form.setEnabled("TELEFONE_RESCISAO", true);
				form.setEnabled("INICIO_VIGENCIA_RESCISAO", true);
	            form.setEnabled("ULTIMO_PAGAMENTO_RESCISAO", true); 
		        form.setEnabled("VALOR_RESCISAO", true);
		        form.setEnabled("ULTIMA_PRESTACAO_RESCISAO", true);		
		        form.setEnabled("DETALHAMENTO_SUGESTAO_RESCISAO", true);
		    //CAMPOS APROVADO IDERANCA 
			    form.setEnabled("ESCOPO_APROVADO_LIDERANCA", false);
		        form.setEnabled("OBSERVACAO_LIDERANCA",false);
		   //CAMPOS APRESENTACAO COTAÇÃO 
			    //form.setEnabled("ANEXOS_COTACAO", false);
		        customHTML.append("<script>$('#ANEXOS_COTACAO').prop('disabled', true);</script>");
		        form.setEnabled("FORNECEDOR1_COTACAO", false); 
		        form.setEnabled("FORNECEDOR2_COTACAO", false); 
	            form.setEnabled("FORNECEDOR3_COTACAO", false); 
		        form.setEnabled("FORNECEDOR_ESCOLHA_COTACAO", false);
	            form.setEnabled("DADO_BANCARIO_COTACAO", false);
	          	form.setEnabled("NOME_RESPONSAVEL_COTACAO", false); 
	          	form.setEnabled("TELEFONE_RESPONSAVEL_COTACAO", false); 
	          	form.setEnabled("EMAIL_RESPONSAVEL_COTACAO", false);
	            form.setEnabled("NOME_TESTEMUNHA_COTACAO1", false); 
	          	form.setEnabled("TELEFONE_TESTEMUNHA_COTACAO1", false);
				form.setEnabled("EMAIL_TESTEMUNHA_COTACAO1", false);
	          	form.setEnabled("NOME_TESTEMUNHA_COTACAO2", false); 
	        	form.setEnabled("TELEFONE_TESTEMUNHA_COTACAO2", false);
	        	form.setEnabled("EMAIL_TESTEMUNHA_COTACAO2", false);
				//form.setEnabled("ANEXO_CONTRATO_SOCIAL", false);
	        	customHTML.append("<script>$('#ANEXO_CONTRATO_SOCIAL').prop('disabled', true);</script>");
	            //form.setEnabled("ANEXO_ULT_ALTERACAO", false);
	        	customHTML.append("<script>$('#ANEXO_ULT_ALTERACAO').prop('disabled', true);</script>");
		        //form.setEnabled("ANEXO_SOCIO_RESP", false);
	        	customHTML.append("<script>$('#ANEXO_SOCIO_RESP').prop('disabled', true);</script>");
		        form.setEnabled("OBSERVACAO_COTACAO", false);
		    //CAMPOS APROVADO LIDERANCA COMPRAS   
		        form.setEnabled("APROVADO_LIDERANCA_COMPRAS", false);
			    form.setEnabled("OBS_LIDER_COMP", false);
			//CAMPOS APROVADO APROVADO_SUPERINTENDENCIA
		        form.setEnabled("APROVADO_SUPERINTENDENCIA",false);
			    form.setEnabled("OBS_SUPERINTENDENCIA", false);
			//CAMPOS DE CONTRATOS E JURIDICO
		        form.setEnabled("POSSUI_CONTRATO", false); 
		        //form.setEnabled("ANEXO_CONFECCCAO_CONTRATO", false);
		        customHTML.append("<script>$('#ANEXO_CONFECCCAO_CONTRATO').prop('disabled', true);</script>");
	            form.setEnabled("OBS_CONFECCCAO_CONTRATO", false); 
		        form.setEnabled("OBS_CONTRATO_JURIDICO", false);
	            //form.setEnabled("ANEXO_CONTRATO_JURIDICO", false);
		        customHTML.append("<script>$('#ANEXO_CONTRATO_JURIDICO').prop('disabled', true);</script>");
	          	form.setEnabled("NUMERO_DO_CONTRATO_INTE", false); 
	          	form.setEnabled("RAZAO_SOCIAL", false); 
  
            break;

        case 13:
        	//Aprovação do escopo  e analise de verba

        	 //CAMPOS NOVOS CONTRATOS 
         	form.setEnabled("TIPO_SOLICITACAO", false);
            form.setEnabled("NOME_SOLICITANTE", false); 
	        form.setEnabled("CENTRO_DE_CUSTO", false);
	        form.setEnabled("RESP_CENTRO_DE_CUSTO", false);		
	        form.setEnabled("OBJ_CONTRATO", false);
		    form.setEnabled("PRAZO_DE_ENTREGA", false);
	        form.setEnabled("CENTRO_DE_CUSTO_ENTREGA",false);
		    form.setEnabled("ENDERECO_DE_ENTREGA", false);
	        form.setEnabled("INICIO_VIGENCIA", false); 
	        form.setEnabled("FIM_VIGENCIA", false); 
            form.setEnabled("QUANTIDADE_DIAS_PARA_MEDICAO", false); 
	        form.setEnabled("PRAZO_DEPAGAMENTO", false);
            form.setEnabled("GARANTIA", false);
            customHTML.append("<script>$('#CRONOGRAMA_SERVICO_1').attr('onclick', 'return false');</script>");
            customHTML.append("<script>$('#CRONOGRAMA_SERVICO_2').attr('onclick', 'return false');</script>");
            customHTML.append("<script>$('#CRONOGRAMA_SERVICO_3').attr('onclick', 'return false');</script>");

          	form.setEnabled("TIPOS_CRONOGRAMA", false);
          	
          	customHTML.append("<script>$('#MATERIAIS_ULTILIZADOS_1').attr('onclick', 'return false');</script>");
            customHTML.append("<script>$('#MATERIAIS_ULTILIZADOS_2').attr('onclick', 'return false');</script>");
            customHTML.append("<script>$('#MATERIAIS_ULTILIZADOS_3').attr('onclick', 'return false');</script>");
//          
            customHTML.append("<script>$('#MOBILIZACAO_CLIENTE_1').attr('onclick', 'return false');</script>");
            customHTML.append("<script>$('#MOBILIZACAO_CLIENTE_2').attr('onclick', 'return false');</script>");
            customHTML.append("<script>$('#MOBILIZACAO_CLIENTE_3').attr('onclick', 'return false');</script>");
//          
            customHTML.append("<script>$('#DESMOBILIZACAO_CLIENTE_1').attr('onclick', 'return false');</script>");
            customHTML.append("<script>$('#DESMOBILIZACAO_CLIENTE_2').attr('onclick', 'return false');</script>");
            customHTML.append("<script>$('#DESMOBILIZACAO_CLIENTE_3').attr('onclick', 'return false');</script>");
//          
            customHTML.append("<script>$('#REGISTRO_CLT_1').attr('onclick', 'return false');</script>");
            customHTML.append("<script>$('#REGISTRO_CLT_2').attr('onclick', 'return false');</script>");
            customHTML.append("<script>$('#REGISTRO_CLT_3').attr('onclick', 'return false');</script>");
//        
        	form.setEnabled("MULTAS", false);
        	form.setEnabled("MULTAS_PREVISTAS", false);
        	form.setEnabled("DISPONIBILIDADE_FISICA", false);
        	customHTML.append("<script>$('#ANEXO_DISPONIBILIDADE').prop('disabled', true)</script>");
        	form.setEnabled("ANEXO_DISPONIBILIDADE", false);
			form.setEnabled("PERCENTUAL_RECISAO", false);
            form.setEnabled("HIPOTESE_RESCISAO", false); 
	        form.setEnabled("PRAZO_RECISAO", false);
	        form.setEnabled("SUGESTAO_FORNECEDOR", false);		
	        form.setEnabled("RAZAO_SOCIAL_SUGESTAO", false);
		    form.setEnabled("RESPONSAVEL_SUGESTAO", false);
		    form.setEnabled("CNPJ_SUGESTAO", false);
	        form.setEnabled("TELEFONE_SUGESTAO",false);
		    form.setEnabled("EMAIL_SUGESTAO", false);
	        form.setEnabled("JUSTIFICATIVA_SUGESTAO", false);
	        form.setEnabled("TABELA_CONTRATOS_BOTAO", false);
	      //CAMPOS TABELA NOVOS CONTRATOS 
	        var pegarUltimoContratos = parseInt(form.getValue("TABELA_CONTRATOS_ULTIMO"))
			var i = 0;
			do {
				i = i+ 1
				var ITEM_CONTRATOS = "ITEM_CONTRATOS___" + i
				var DESCROCAO_SERV_CONTRATOS = "DESCROCAO_SERV_CONTRATOS___" + i
				var UNIDADE_CONTRATOS = "UNIDADE_CONTRATOS___" + i
				var QUANT_MENSAL_CONTRATOS = "QUANT_MENSAL_CONTRATOS___" + i
				var PRECO_UNID_CONTRATOS = "PRECO_UNID_CONTRATOS___" + i
				form.setEnabled(ITEM_CONTRATOS, false);
		        form.setEnabled(DESCROCAO_SERV_CONTRATOS, false);
		        form.setEnabled(UNIDADE_CONTRATOS, false);
		        form.setEnabled(QUANT_MENSAL_CONTRATOS, false);
		        form.setEnabled(PRECO_UNID_CONTRATOS, false);

				} 
			while (i < pegarUltimoContratos);
//	        form.setEnabled("ITEM_CONTRATOS", false);
//	        form.setEnabled("DESCROCAO_SERV_CONTRATOS", false);
//	        form.setEnabled("UNIDADE_CONTRATOS", false);
//	        form.setEnabled("QUANT_MENSAL_CONTRATOS", false);
//	        form.setEnabled("PRECO_UNID_CONTRATOS", false);
		 //CAMPOS ADTIVOS
	        form.setEnabled("N_CONTRATO_ADTIVOS", false);
          	form.setEnabled("RAZAO_SOCIAL_ADTIVOS", false);
            form.setEnabled("CONTATO_ADTIVOS", false); 
          	form.setEnabled("TELEFONE_ADTIVOS", false);
          	form.setEnabled("DETALHAMENTO_SUGESTAO", false);
          //CAMPOS TABELA ADTIVOS
          	
          	var pegarUltimoContratos = parseInt(form.getValue("TABELA_ADTIVOS_ULTIMO"))
    		var i = 0;
    		
    		do { 
    			i = i+ 1
    			var ITEM_ADTIVOS = "ITEM_ADTIVOS___" + i
    			var DESCROCAO_SERV_ADTIVOS = "DESCROCAO_SERV_ADTIVOS___" + i
    			var UNIDADE_ADTIVOS = "UNIDADE_ADTIVOS___" + i
    			var QUANT_MENSAL_ADTIVOS = "QUANT_MENSAL_ADTIVOS___" + i
    			var PRECO_UNID_ADTIVOS = "PRECO_UNID_ADTIVOS___" + i
    			
    			//form.setEnabled(TABELA_ADTIVOS, false);
    			form.setEnabled(ITEM_ADTIVOS, false);
    	        form.setEnabled(DESCROCAO_SERV_ADTIVOS, false);
    	        form.setEnabled(UNIDADE_ADTIVOS, false);
    	        form.setEnabled(QUANT_MENSAL_ADTIVOS, false);
    	        form.setEnabled(PRECO_UNID_ADTIVOS, false);

    			} 
    		while (i < pegarUltimoContratos);
//          form.setEnabled("TABELA_ADTIVOS", false);
//          form.setEnabled("ITEM_ADTIVOS", false);
//	        form.setEnabled("DESCROCAO_SERV_ADTIVOS", false);
//	        form.setEnabled("UNIDADE_ADTIVOS", false);
//	        form.setEnabled("QUANT_MENSAL_ADTIVOS", false);
//	        form.setEnabled("PRECO_UNID_ADTIVOS", false);
    		form.setEnabled("TABELA_ADTIVOS_BOTAO", false);
    		form.setEnabled("CALCULARTOTAL_ADTIVOS", false);
	      //CAMPOS RECISÃO
          	form.setEnabled("N_CONTRATO_RESCISAO", false);
          	form.setEnabled("RAZAO_SOCIAL_RESCISAO", false); 
        	form.setEnabled("CONTATO_RESCISAO", false);
        	form.setEnabled("TELEFONE_RESCISAO", false);
			form.setEnabled("INICIO_VIGENCIA_RESCISAO", false);
            form.setEnabled("ULTIMO_PAGAMENTO_RESCISAO", false); 
	        form.setEnabled("VALOR_RESCISAO", false);
	        form.setEnabled("ULTIMA_PRESTACAO_RESCISAO", false);		
	        form.setEnabled("DETALHAMENTO_SUGESTAO_RESCISAO", false);
	    //CAMPOS APROVADO IDERANCA 
		    form.setEnabled("ESCOPO_APROVADO_LIDERANCA", true);
	        form.setEnabled("OBSERVACAO_LIDERANCA",true);
	   //CAMPOS APRESENTACAO COTAÇÃO 
		    //form.setEnabled("ANEXOS_COTACAO", false);
	        customHTML.append("<script>$('#ANEXOS_COTACAO').prop('disabled', true);</script>");
	        form.setEnabled("FORNECEDOR1_COTACAO", false); 
	        form.setEnabled("FORNECEDOR2_COTACAO", false); 
            form.setEnabled("FORNECEDOR3_COTACAO", false); 
	        form.setEnabled("FORNECEDOR_ESCOLHA_COTACAO", false);
            form.setEnabled("DADO_BANCARIO_COTACAO", false);
          	form.setEnabled("NOME_RESPONSAVEL_COTACAO", false); 
          	form.setEnabled("TELEFONE_RESPONSAVEL_COTACAO", false); 
          	form.setEnabled("EMAIL_RESPONSAVEL_COTACAO", false);
            form.setEnabled("NOME_TESTEMUNHA_COTACAO1", false); 
          	form.setEnabled("TELEFONE_TESTEMUNHA_COTACAO1", false);
			form.setEnabled("EMAIL_TESTEMUNHA_COTACAO1", false);
          	form.setEnabled("NOME_TESTEMUNHA_COTACAO2", false); 
        	form.setEnabled("TELEFONE_TESTEMUNHA_COTACAO2", false);
        	form.setEnabled("EMAIL_TESTEMUNHA_COTACAO2", false);
			//form.setEnabled("ANEXO_CONTRATO_SOCIAL", false);
        	customHTML.append("<script>$('#ANEXO_CONTRATO_SOCIAL').prop('disabled', true);</script>");
            //form.setEnabled("ANEXO_ULT_ALTERACAO", false);
        	customHTML.append("<script>$('#ANEXO_ULT_ALTERACAO').prop('disabled', true);</script>");
	        //form.setEnabled("ANEXO_SOCIO_RESP", false);
        	customHTML.append("<script>$('#ANEXO_SOCIO_RESP').prop('disabled', true);</script>");
	        form.setEnabled("OBSERVACAO_COTACAO", false);
	    //CAMPOS APROVADO LIDERANCA COMPRAS   
	        form.setEnabled("APROVADO_LIDERANCA_COMPRAS", false);
		    form.setEnabled("OBS_LIDER_COMP", false);
		//CAMPOS APROVADO APROVADO_SUPERINTENDENCIA
	        form.setEnabled("APROVADO_SUPERINTENDENCIA",false);
		    form.setEnabled("OBS_SUPERINTENDENCIA", false);
		//CAMPOS DE CONTRATOS E JURIDICO
	        form.setEnabled("POSSUI_CONTRATO", false); 
	        //form.setEnabled("ANEXO_CONFECCCAO_CONTRATO", false);
	        customHTML.append("<script>$('#ANEXO_CONFECCCAO_CONTRATO').prop('disabled', true);</script>");
            form.setEnabled("OBS_CONFECCCAO_CONTRATO", false); 
	        form.setEnabled("OBS_CONTRATO_JURIDICO", false);
            //form.setEnabled("ANEXO_CONTRATO_JURIDICO", false);
	        customHTML.append("<script>$('#ANEXO_CONTRATO_JURIDICO').prop('disabled', true);</script>");
          	form.setEnabled("NUMERO_DO_CONTRATO_INTE", false); 
          	form.setEnabled("RAZAO_SOCIAL", false); 

            break;

        case 14:
        	//Cotação
        	
        	 //CAMPOS NOVOS CONTRATOS 
         	form.setEnabled("TIPO_SOLICITACAO", false);
            form.setEnabled("NOME_SOLICITANTE", false); 
	        form.setEnabled("CENTRO_DE_CUSTO", false);
	        form.setEnabled("RESP_CENTRO_DE_CUSTO", false);		
	        form.setEnabled("OBJ_CONTRATO", false);
		    form.setEnabled("PRAZO_DE_ENTREGA", false);
	        form.setEnabled("CENTRO_DE_CUSTO_ENTREGA",false);
		    form.setEnabled("ENDERECO_DE_ENTREGA", false);
	        form.setEnabled("INICIO_VIGENCIA", false); 
	        form.setEnabled("FIM_VIGENCIA", false); 
            form.setEnabled("QUANTIDADE_DIAS_PARA_MEDICAO", false); 
	        form.setEnabled("PRAZO_DEPAGAMENTO", false);
            form.setEnabled("GARANTIA", false); 
            
            customHTML.append("<script>$('#CRONOGRAMA_SERVICO_1').prop('disabled', false);</script>");
            customHTML.append("<script>$('#CRONOGRAMA_SERVICO_2').prop('disabled', false);</script>");
            customHTML.append("<script>$('#CRONOGRAMA_SERVICO_3').prop('disabled', false);</script>");

          	form.setEnabled("TIPOS_CRONOGRAMA", true);
          	
            customHTML.append("<script>$('#MATERIAIS_ULTILIZADOS_1').prop('disabled', false);</script>");
            customHTML.append("<script>$('#MATERIAIS_ULTILIZADOS_2').prop('disabled', false);</script>");
            customHTML.append("<script>$('#MATERIAIS_ULTILIZADOS_3').prop('disabled', false);</script>");
//          
            customHTML.append("<script>$('#MOBILIZACAO_CLIENTE_1').prop('disabled', false);</script>");
            customHTML.append("<script>$('#MOBILIZACAO_CLIENTE_2').prop('disabled', false);</script>");
            customHTML.append("<script>$('#MOBILIZACAO_CLIENTE_3').prop('disabled', false);</script>");
//         
            customHTML.append("<script>$('#DESMOBILIZACAO_CLIENTE_1').prop('disabled', false);</script>");
            customHTML.append("<script>$('#DESMOBILIZACAO_CLIENTE_2').prop('disabled', false);</script>");
            customHTML.append("<script>$('#DESMOBILIZACAO_CLIENTE_3').prop('disabled', false);</script>");
//        
            customHTML.append("<script>$('#REGISTRO_CLT_1').prop('disabled', false);</script>");
            customHTML.append("<script>$('#REGISTRO_CLT_2').prop('disabled', false);</script>");
            customHTML.append("<script>$('#REGISTRO_CLT_3').prop('disabled', false);</script>");
//          	
        	form.setEnabled("MULTAS", true);
        	form.setEnabled("MULTAS_PREVISTAS", true);
        	form.setEnabled("DISPONIBILIDADE_FISICA", true);
        	customHTML.append("<script>$('#ANEXO_DISPONIBILIDADE').prop('disabled', true)</script>");
        	form.setEnabled("ANEXO_DISPONIBILIDADE", false);
			form.setEnabled("PERCENTUAL_RECISAO", true);
            form.setEnabled("HIPOTESE_RESCISAO", true); 
	        form.setEnabled("PRAZO_RECISAO", true);
	        form.setEnabled("SUGESTAO_FORNECEDOR", false);		
	        form.setEnabled("RAZAO_SOCIAL_SUGESTAO", false);
		    form.setEnabled("RESPONSAVEL_SUGESTAO", false);
		    form.setEnabled("CNPJ_SUGESTAO", false);
	        form.setEnabled("TELEFONE_SUGESTAO",false);
		    form.setEnabled("EMAIL_SUGESTAO", false);
	        form.setEnabled("JUSTIFICATIVA_SUGESTAO", false); 
	        form.setEnabled("TABELA_CONTRATOS_BOTAO", false);
	      //CAMPOS TABELA NOVOS CONTRATOS 
	        var pegarUltimoContratos = parseInt(form.getValue("TABELA_CONTRATOS_ULTIMO"))
			var i = 0;
			do {
				i = i+ 1
				var ITEM_CONTRATOS = "ITEM_CONTRATOS___" + i
				var DESCROCAO_SERV_CONTRATOS = "DESCROCAO_SERV_CONTRATOS___" + i
				var UNIDADE_CONTRATOS = "UNIDADE_CONTRATOS___" + i
				var QUANT_MENSAL_CONTRATOS = "QUANT_MENSAL_CONTRATOS___" + i
				var PRECO_UNID_CONTRATOS = "PRECO_UNID_CONTRATOS___" + i
				form.setEnabled(ITEM_CONTRATOS, false);
		        form.setEnabled(DESCROCAO_SERV_CONTRATOS, false);
		        form.setEnabled(UNIDADE_CONTRATOS, false);
		        form.setEnabled(QUANT_MENSAL_CONTRATOS, false);
		        form.setEnabled(PRECO_UNID_CONTRATOS, false);

				} 
			while (i < pegarUltimoContratos);
			
//	        form.setEnabled("ITEM_CONTRATOS", false);
//	        form.setEnabled("DESCROCAO_SERV_CONTRATOS", false);
//	        form.setEnabled("UNIDADE_CONTRATOS", false);
//	        form.setEnabled("QUANT_MENSAL_CONTRATOS", false);
//	        form.setEnabled("PRECO_UNID_CONTRATOS", false);
		 //CAMPOS ADTIVOS
	        form.setEnabled("N_CONTRATO_ADTIVOS", false);
          	form.setEnabled("RAZAO_SOCIAL_ADTIVOS", false);
            form.setEnabled("CONTATO_ADTIVOS", false); 
          	form.setEnabled("TELEFONE_ADTIVOS", false);
          	form.setEnabled("DETALHAMENTO_SUGESTAO", false);
          //CAMPOS TABELA ADTIVOS

          	var pegarUltimoContratos = parseInt(form.getValue("TABELA_ADTIVOS_ULTIMO"))
    		var i = 0;
    		
    		do { 
    			i = i+ 1
    			var ITEM_ADTIVOS = "ITEM_ADTIVOS___" + i
    			var DESCROCAO_SERV_ADTIVOS = "DESCROCAO_SERV_ADTIVOS___" + i
    			var UNIDADE_ADTIVOS = "UNIDADE_ADTIVOS___" + i
    			var QUANT_MENSAL_ADTIVOS = "QUANT_MENSAL_ADTIVOS___" + i
    			var PRECO_UNID_ADTIVOS = "PRECO_UNID_ADTIVOS___" + i
    			
    			//form.setEnabled(TABELA_ADTIVOS, false);
    			form.setEnabled(ITEM_ADTIVOS, false);
    	        form.setEnabled(DESCROCAO_SERV_ADTIVOS, false);
    	        form.setEnabled(UNIDADE_ADTIVOS, false);
    	        form.setEnabled(QUANT_MENSAL_ADTIVOS, false);
    	        form.setEnabled(PRECO_UNID_ADTIVOS, false);

    			} 
    		while (i < pegarUltimoContratos);
          	
//          form.setEnabled("TABELA_ADTIVOS", false);
//          form.setEnabled("ITEM_ADTIVOS", false);
//	        form.setEnabled("DESCROCAO_SERV_ADTIVOS", false);
//	        form.setEnabled("UNIDADE_ADTIVOS", false);
//	        form.setEnabled("QUANT_MENSAL_ADTIVOS", false);
//	        form.setEnabled("PRECO_UNID_ADTIVOS", false);
    		form.setEnabled("TABELA_ADTIVOS_BOTAO", false);
    		form.setEnabled("CALCULARTOTAL_ADTIVOS", false);
	      //CAMPOS RECISÃO
          	form.setEnabled("N_CONTRATO_RESCISAO", false);
          	form.setEnabled("RAZAO_SOCIAL_RESCISAO", false); 
        	form.setEnabled("CONTATO_RESCISAO", false);
        	form.setEnabled("TELEFONE_RESCISAO", false);
			form.setEnabled("INICIO_VIGENCIA_RESCISAO", false);
            form.setEnabled("ULTIMO_PAGAMENTO_RESCISAO", false); 
	        form.setEnabled("VALOR_RESCISAO", false);
	        form.setEnabled("ULTIMA_PRESTACAO_RESCISAO", false);		
	        form.setEnabled("DETALHAMENTO_SUGESTAO_RESCISAO", false);
	    //CAMPOS APROVADO IDERANCA 
		    form.setEnabled("ESCOPO_APROVADO_LIDERANCA", false);
	        form.setEnabled("OBSERVACAO_LIDERANCA",false);
	   //CAMPOS APRESENTACAO COTAÇÃO 
		    form.setEnabled("ANEXOS_COTACAO", true);
	        //customHTML.append("<script>$('#ANEXOS_COTACAO').prop('disabled', true);</script>");
	        form.setEnabled("FORNECEDOR1_COTACAO", true); 
	        form.setEnabled("FORNECEDOR2_COTACAO", true); 
            form.setEnabled("FORNECEDOR3_COTACAO", true); 
	        form.setEnabled("FORNECEDOR_ESCOLHA_COTACAO", true);
            form.setEnabled("DADO_BANCARIO_COTACAO", true);
          	form.setEnabled("NOME_RESPONSAVEL_COTACAO", true); 
          	form.setEnabled("TELEFONE_RESPONSAVEL_COTACAO", true); 
          	form.setEnabled("EMAIL_RESPONSAVEL_COTACAO", true);
            form.setEnabled("NOME_TESTEMUNHA_COTACAO1", true); 
          	form.setEnabled("TELEFONE_TESTEMUNHA_COTACAO1", true);
			form.setEnabled("EMAIL_TESTEMUNHA_COTACAO1", true);
          	form.setEnabled("NOME_TESTEMUNHA_COTACAO2", true); 
        	form.setEnabled("TELEFONE_TESTEMUNHA_COTACAO2", true);
        	form.setEnabled("EMAIL_TESTEMUNHA_COTACAO2", true);
			form.setEnabled("ANEXO_CONTRATO_SOCIAL", true);
        	//customHTML.append("<script>$('#ANEXO_CONTRATO_SOCIAL').prop('disabled', true);</script>");
            form.setEnabled("ANEXO_ULT_ALTERACAO", true);
        	//customHTML.append("<script>$('#ANEXO_ULT_ALTERACAO').prop('disabled', true);</script>");
	        form.setEnabled("ANEXO_SOCIO_RESP", true);
        	///customHTML.append("<script>$('#ANEXO_SOCIO_RESP').prop('disabled', true);</script>");
	        form.setEnabled("OBSERVACAO_COTACAO", true);
	    //CAMPOS APROVADO LIDERANCA COMPRAS   
	        form.setEnabled("APROVADO_LIDERANCA_COMPRAS", false);
		    form.setEnabled("OBS_LIDER_COMP", false);
		//CAMPOS APROVADO APROVADO_SUPERINTENDENCIA
	        form.setEnabled("APROVADO_SUPERINTENDENCIA",false);
		    form.setEnabled("OBS_SUPERINTENDENCIA", false);
		//CAMPOS DE CONTRATOS E JURIDICO
	        form.setEnabled("POSSUI_CONTRATO", false); 
	        //form.setEnabled("ANEXO_CONFECCCAO_CONTRATO", false);
	        customHTML.append("<script>$('#ANEXO_CONFECCCAO_CONTRATO').prop('disabled', true);</script>");
            form.setEnabled("OBS_CONFECCCAO_CONTRATO", false); 
	        form.setEnabled("OBS_CONTRATO_JURIDICO", false);
            //form.setEnabled("ANEXO_CONTRATO_JURIDICO", false);
	        customHTML.append("<script>$('#ANEXO_CONTRATO_JURIDICO').prop('disabled', true);</script>");
          	form.setEnabled("NUMERO_DO_CONTRATO_INTE", false); 
          	form.setEnabled("RAZAO_SOCIAL", false); 

            break;
        
      case 16:
    	  //Aprovação contratação

    	//CAMPOS NOVOS CONTRATOS 
       		form.setEnabled("TIPO_SOLICITACAO", false);
            form.setEnabled("NOME_SOLICITANTE", false); 
	        form.setEnabled("CENTRO_DE_CUSTO", false);
	        form.setEnabled("RESP_CENTRO_DE_CUSTO", false);		
	        form.setEnabled("OBJ_CONTRATO", false);
		    form.setEnabled("PRAZO_DE_ENTREGA", false);
	        form.setEnabled("CENTRO_DE_CUSTO_ENTREGA",false);
		    form.setEnabled("ENDERECO_DE_ENTREGA", false);
	        form.setEnabled("INICIO_VIGENCIA", false); 
	        form.setEnabled("FIM_VIGENCIA", false); 
	        form.setEnabled("QUANTIDADE_DIAS_PARA_MEDICAO", false); 
	        form.setEnabled("PRAZO_DEPAGAMENTO", false);
	        form.setEnabled("GARANTIA", false); 
	        customHTML.append("<script>$('#CRONOGRAMA_SERVICO_1').prop('disabled', true);</script>");
            customHTML.append("<script>$('#CRONOGRAMA_SERVICO_2').prop('disabled', true);</script>");
            customHTML.append("<script>$('#CRONOGRAMA_SERVICO_3').prop('disabled', true);</script>");

          	form.setEnabled("TIPOS_CRONOGRAMA", false);
          	customHTML.append("<script>$('#MATERIAIS_ULTILIZADOS_1').prop('disabled', true);</script>");
            customHTML.append("<script>$('#MATERIAIS_ULTILIZADOS_2').prop('disabled', true);</script>");
            customHTML.append("<script>$('#MATERIAIS_ULTILIZADOS_3').prop('disabled', true);</script>");

          	customHTML.append("<script>$('#MOBILIZACAO_CLIENTE_1').prop('disabled', true);</script>");
            customHTML.append("<script>$('#MOBILIZACAO_CLIENTE_2').prop('disabled', true);</script>");
            customHTML.append("<script>$('#MOBILIZACAO_CLIENTE_3').prop('disabled', true);</script>");

          	customHTML.append("<script>$('#DESMOBILIZACAO_CLIENTE_1').prop('disabled', true);</script>");
            customHTML.append("<script>$('#DESMOBILIZACAO_CLIENTE_2').prop('disabled', true);</script>");
            customHTML.append("<script>$('#DESMOBILIZACAO_CLIENTE_3').prop('disabled', true);</script>");

          	customHTML.append("<script>$('#REGISTRO_CLT_1').prop('disabled', true);</script>");
            customHTML.append("<script>$('#REGISTRO_CLT_2').prop('disabled', true);</script>");
            customHTML.append("<script>$('#REGISTRO_CLT_3').prop('disabled', true);</script>");

        	form.setEnabled("MULTAS", false);
        	form.setEnabled("MULTAS_PREVISTAS", false);
        	form.setEnabled("DISPONIBILIDADE_FISICA", false);
        	customHTML.append("<script>$('#ANEXO_DISPONIBILIDADE').prop('disabled', true)</script>");
        	form.setEnabled("ANEXO_DISPONIBILIDADE", false);
			form.setEnabled("PERCENTUAL_RECISAO", false);
			form.setEnabled("HIPOTESE_RESCISAO", false); 
	        form.setEnabled("PRAZO_RECISAO", false);
	        form.setEnabled("SUGESTAO_FORNECEDOR", false);		
	        form.setEnabled("RAZAO_SOCIAL_SUGESTAO", false);
		    form.setEnabled("RESPONSAVEL_SUGESTAO", false);
		    form.setEnabled("CNPJ_SUGESTAO", false);
	        form.setEnabled("TELEFONE_SUGESTAO",false);
		    form.setEnabled("EMAIL_SUGESTAO", false);
	        form.setEnabled("JUSTIFICATIVA_SUGESTAO", false); 
	        form.setEnabled("TABELA_CONTRATOS_BOTAO", false);
	      //CAMPOS TABELA NOVOS CONTRATOS 
	        var pegarUltimoContratos = parseInt(form.getValue("TABELA_CONTRATOS_ULTIMO"))
			var i = 0;
			do {
				i = i+ 1
				var ITEM_CONTRATOS = "ITEM_CONTRATOS___" + i
				var DESCROCAO_SERV_CONTRATOS = "DESCROCAO_SERV_CONTRATOS___" + i
				var UNIDADE_CONTRATOS = "UNIDADE_CONTRATOS___" + i
				var QUANT_MENSAL_CONTRATOS = "QUANT_MENSAL_CONTRATOS___" + i
				var PRECO_UNID_CONTRATOS = "PRECO_UNID_CONTRATOS___" + i
				form.setEnabled(ITEM_CONTRATOS, false);
		        form.setEnabled(DESCROCAO_SERV_CONTRATOS, false);
		        form.setEnabled(UNIDADE_CONTRATOS, false);
		        form.setEnabled(QUANT_MENSAL_CONTRATOS, false);
		        form.setEnabled(PRECO_UNID_CONTRATOS, false);

				} 
			while (i < pegarUltimoContratos);
//	        form.setEnabled("ITEM_CONTRATOS", false);
//	        form.setEnabled("DESCROCAO_SERV_CONTRATOS", false);
//	        form.setEnabled("UNIDADE_CONTRATOS", false);
//	        form.setEnabled("QUANT_MENSAL_CONTRATOS", false);
//	        form.setEnabled("PRECO_UNID_CONTRATOS", false);
			
		 //CAMPOS ADTIVOS
	        form.setEnabled("N_CONTRATO_ADTIVOS", false);
        	form.setEnabled("RAZAO_SOCIAL_ADTIVOS", false);
        	form.setEnabled("CONTATO_ADTIVOS", false); 
        	form.setEnabled("TELEFONE_ADTIVOS", false);
        	form.setEnabled("DETALHAMENTO_SUGESTAO", false);
        //CAMPOS TABELA ADTIVOS
        	var pegarUltimoContratos = parseInt(form.getValue("TABELA_ADTIVOS_ULTIMO"))
    		var i = 0;
    		
    		do { 
    			i = i+ 1
    			var ITEM_ADTIVOS = "ITEM_ADTIVOS___" + i
    			var DESCROCAO_SERV_ADTIVOS = "DESCROCAO_SERV_ADTIVOS___" + i
    			var UNIDADE_ADTIVOS = "UNIDADE_ADTIVOS___" + i
    			var QUANT_MENSAL_ADTIVOS = "QUANT_MENSAL_ADTIVOS___" + i
    			var PRECO_UNID_ADTIVOS = "PRECO_UNID_ADTIVOS___" + i
    			
    			//form.setEnabled(TABELA_ADTIVOS, false);
    			form.setEnabled(ITEM_ADTIVOS, false);
    	        form.setEnabled(DESCROCAO_SERV_ADTIVOS, false);
    	        form.setEnabled(UNIDADE_ADTIVOS, false);
    	        form.setEnabled(QUANT_MENSAL_ADTIVOS, false);
    	        form.setEnabled(PRECO_UNID_ADTIVOS, false);

    			} 
    		while (i < pegarUltimoContratos);
//        	form.setEnabled("TABELA_ADTIVOS", false);
//          form.setEnabled("ITEM_ADTIVOS", false);
//	        form.setEnabled("DESCROCAO_SERV_ADTIVOS", false);
//	        form.setEnabled("UNIDADE_ADTIVOS", false);
//	        form.setEnabled("QUANT_MENSAL_ADTIVOS", false);
//	        form.setEnabled("PRECO_UNID_ADTIVOS", false);
    		form.setEnabled("TABELA_ADTIVOS_BOTAO", false);
    		form.setEnabled("CALCULARTOTAL_ADTIVOS", false);
	      //CAMPOS RECISÃO
        	form.setEnabled("N_CONTRATO_RESCISAO", false);
        	form.setEnabled("RAZAO_SOCIAL_RESCISAO", false); 
        	form.setEnabled("CONTATO_RESCISAO", false);
        	form.setEnabled("TELEFONE_RESCISAO", false);
			form.setEnabled("INICIO_VIGENCIA_RESCISAO", false);
			form.setEnabled("ULTIMO_PAGAMENTO_RESCISAO", false); 
	        form.setEnabled("VALOR_RESCISAO", false);
	        form.setEnabled("ULTIMA_PRESTACAO_RESCISAO", false);		
	        form.setEnabled("DETALHAMENTO_SUGESTAO_RESCISAO", false);
	    //CAMPOS APROVADO IDERANCA 
		    form.setEnabled("ESCOPO_APROVADO_LIDERANCA", false);
	        form.setEnabled("OBSERVACAO_LIDERANCA",false);
	   //CAMPOS APRESENTACAO COTAÇÃO 
		    //form.setEnabled("ANEXOS_COTACAO", false);
	   customHTML.append("<script>$('#ANEXOS_COTACAO').prop('disabled', true);</script>");
	        form.setEnabled("FORNECEDOR1_COTACAO", false); 
	        form.setEnabled("FORNECEDOR2_COTACAO", false); 
	        form.setEnabled("FORNECEDOR3_COTACAO", false); 
	        form.setEnabled("FORNECEDOR_ESCOLHA_COTACAO", false);
	        form.setEnabled("DADO_BANCARIO_COTACAO", false);
        	form.setEnabled("NOME_RESPONSAVEL_COTACAO", false); 
        	form.setEnabled("TELEFONE_RESPONSAVEL_COTACAO", false); 
        	form.setEnabled("EMAIL_RESPONSAVEL_COTACAO", false);
        	form.setEnabled("NOME_TESTEMUNHA_COTACAO1", false); 
        	form.setEnabled("TELEFONE_TESTEMUNHA_COTACAO1", false);
			form.setEnabled("EMAIL_TESTEMUNHA_COTACAO1", false);
        	form.setEnabled("NOME_TESTEMUNHA_COTACAO2", false); 
        	form.setEnabled("TELEFONE_TESTEMUNHA_COTACAO2", false);
        	form.setEnabled("EMAIL_TESTEMUNHA_COTACAO2", false);
			//form.setEnabled("ANEXO_CONTRATO_SOCIAL", false);
      	customHTML.append("<script>$('#ANEXO_CONTRATO_SOCIAL').prop('disabled', true);</script>");
			//form.setEnabled("ANEXO_ULT_ALTERACAO", false);
      	customHTML.append("<script>$('#ANEXO_ULT_ALTERACAO').prop('disabled', true);</script>");
	        //form.setEnabled("ANEXO_SOCIO_RESP", false);
      	customHTML.append("<script>$('#ANEXO_SOCIO_RESP').prop('disabled', true);</script>");
	        form.setEnabled("OBSERVACAO_COTACAO", false);
	    //CAMPOS APROVADO LIDERANCA COMPRAS   
	        form.setEnabled("APROVADO_LIDERANCA_COMPRAS", true);
		    form.setEnabled("OBS_LIDER_COMP", true);
		//CAMPOS APROVADO APROVADO_SUPERINTENDENCIA
	        form.setEnabled("APROVADO_SUPERINTENDENCIA",false);
		    form.setEnabled("OBS_SUPERINTENDENCIA", false);
		//CAMPOS DE CONTRATOS E JURIDICO
	        form.setEnabled("POSSUI_CONTRATO", false); 
	        //form.setEnabled("ANEXO_CONFECCCAO_CONTRATO", false);
	        customHTML.append("<script>$('#ANEXO_CONFECCCAO_CONTRATO').prop('disabled', true);</script>");
	        form.setEnabled("OBS_CONFECCCAO_CONTRATO", false); 
	        form.setEnabled("OBS_CONTRATO_JURIDICO", false);
          //form.setEnabled("ANEXO_CONTRATO_JURIDICO", false);
	        customHTML.append("<script>$('#ANEXO_CONTRATO_JURIDICO').prop('disabled', true);</script>");
        	form.setEnabled("NUMERO_DO_CONTRATO_INTE", false); 
        	form.setEnabled("RAZAO_SOCIAL", false); 

          break;
            
      case 34:
    	  //Aprovação Superintendência

    	//CAMPOS NOVOS CONTRATOS 
     		form.setEnabled("TIPO_SOLICITACAO", false);
     		form.setEnabled("NOME_SOLICITANTE", false); 
	        form.setEnabled("CENTRO_DE_CUSTO", false);
	        form.setEnabled("RESP_CENTRO_DE_CUSTO", false);		
	        form.setEnabled("OBJ_CONTRATO", false);
		    form.setEnabled("PRAZO_DE_ENTREGA", false);
	        form.setEnabled("CENTRO_DE_CUSTO_ENTREGA",false);
		    form.setEnabled("ENDEREÇO_DE_ENTREGA", false);
	        form.setEnabled("INICIO_VIGENCIA", false); 
	        form.setEnabled("FIM_VIGENCIA", false); 
	        form.setEnabled("QUANTIDADE_DIAS_PARA_MEDICAO", false); 
	        form.setEnabled("PRAZO_DEPAGAMENTO", false);
	        form.setEnabled("GARANTIA", false); 
	        customHTML.append("<script>$('#CRONOGRAMA_SERVICO_1').prop('disabled', true);</script>");
            customHTML.append("<script>$('#CRONOGRAMA_SERVICO_2').prop('disabled', true);</script>");
            customHTML.append("<script>$('#CRONOGRAMA_SERVICO_3').prop('disabled', true);</script>");

          	form.setEnabled("TIPOS_CRONOGRAMA", false);
          	
          	customHTML.append("<script>$('#MATERIAIS_ULTILIZADOS_1').prop('disabled', true);</script>");
            customHTML.append("<script>$('#MATERIAIS_ULTILIZADOS_2').prop('disabled', true);</script>");
            customHTML.append("<script>$('#MATERIAIS_ULTILIZADOS_3').prop('disabled', true);</script>");

          	customHTML.append("<script>$('#MOBILIZACAO_CLIENTE_1').prop('disabled', true);</script>");
            customHTML.append("<script>$('#MOBILIZACAO_CLIENTE_2').prop('disabled', true);</script>");
            customHTML.append("<script>$('#MOBILIZACAO_CLIENTE_3').prop('disabled', true);</script>");

          	customHTML.append("<script>$('#DESMOBILIZACAO_CLIENTE_1').prop('disabled', true);</script>");
            customHTML.append("<script>$('#DESMOBILIZACAO_CLIENTE_2').prop('disabled', true);</script>");
            customHTML.append("<script>$('#DESMOBILIZACAO_CLIENTE_3').prop('disabled', true);</script>");

          	customHTML.append("<script>$('#REGISTRO_CLT_1').prop('disabled', true);</script>");
            customHTML.append("<script>$('#REGISTRO_CLT_2').prop('disabled', true);</script>");
            customHTML.append("<script>$('#REGISTRO_CLT_3').prop('disabled', true);</script>");

      		form.setEnabled("MULTAS", false);
      		form.setEnabled("MULTAS_PREVISTAS", false);
      		form.setEnabled("DISPONIBILIDADE_FISICA", false);
        	customHTML.append("<script>$('#ANEXO_DISPONIBILIDADE').prop('disabled', true)</script>");
        	form.setEnabled("ANEXO_DISPONIBILIDADE", false);
			form.setEnabled("PERCENTUAL_RECISAO", false);
			form.setEnabled("HIPOTESE_RESCISAO", false); 
	        form.setEnabled("PRAZO_RECISAO", false);
	        form.setEnabled("SUGESTAO_FORNECEDOR", false);		
	        form.setEnabled("RAZAO_SOCIAL_SUGESTAO", false);
		    form.setEnabled("RESPONSAVEL_SUGESTAO", false);
		    form.setEnabled("CNPJ_SUGESTAO", false);
	        form.setEnabled("TELEFONE_SUGESTAO",false);
		    form.setEnabled("EMAIL_SUGESTAO", false);
	        form.setEnabled("JUSTIFICATIVA_SUGESTAO", false); 
	        form.setEnabled("TABELA_CONTRATOS_BOTAO", false);
	      //CAMPOS TABELA NOVOS CONTRATOS 
	        var pegarUltimoContratos = parseInt(form.getValue("TABELA_CONTRATOS_ULTIMO"))
			var i = 0;
			do {
				i = i+ 1
				var ITEM_CONTRATOS = "ITEM_CONTRATOS___" + i
				var DESCROCAO_SERV_CONTRATOS = "DESCROCAO_SERV_CONTRATOS___" + i
				var UNIDADE_CONTRATOS = "UNIDADE_CONTRATOS___" + i
				var QUANT_MENSAL_CONTRATOS = "QUANT_MENSAL_CONTRATOS___" + i
				var PRECO_UNID_CONTRATOS = "PRECO_UNID_CONTRATOS___" + i
				form.setEnabled(ITEM_CONTRATOS, false);
		        form.setEnabled(DESCROCAO_SERV_CONTRATOS, false);
		        form.setEnabled(UNIDADE_CONTRATOS, false);
		        form.setEnabled(QUANT_MENSAL_CONTRATOS, false);
		        form.setEnabled(PRECO_UNID_CONTRATOS, false);

				} 
			while (i < pegarUltimoContratos);
			form.setEnabled("TABELA_CONTRATOS_BOTAO", false);
//	        form.setEnabled("ITEM_CONTRATOS", false);
//	        form.setEnabled("DESCROCAO_SERV_CONTRATOS", false);
//	        form.setEnabled("UNIDADE_CONTRATOS", false);
//	        form.setEnabled("QUANT_MENSAL_CONTRATOS", false);
//	        form.setEnabled("PRECO_UNID_CONTRATOS", false);
		 //CAMPOS ADTIVOS
	        form.setEnabled("N_CONTRATO_ADTIVOS", false);
	        form.setEnabled("RAZAO_SOCIAL_ADTIVOS", false);
      		form.setEnabled("CONTATO_ADTIVOS", false); 
      		form.setEnabled("TELEFONE_ADTIVOS", false);
      		form.setEnabled("DETALHAMENTO_SUGESTAO", false);
      //CAMPOS TABELA ADTIVOS

      		
          	var pegarUltimoContratos = parseInt(form.getValue("TABELA_ADTIVOS_ULTIMO"))
    		var i = 0;
    		
    		do { 
    			i = i+ 1
    			var ITEM_ADTIVOS = "ITEM_ADTIVOS___" + i
    			var DESCROCAO_SERV_ADTIVOS = "DESCROCAO_SERV_ADTIVOS___" + i
    			var UNIDADE_ADTIVOS = "UNIDADE_ADTIVOS___" + i
    			var QUANT_MENSAL_ADTIVOS = "QUANT_MENSAL_ADTIVOS___" + i
    			var PRECO_UNID_ADTIVOS = "PRECO_UNID_ADTIVOS___" + i
    			
    			//form.setEnabled(TABELA_ADTIVOS, false);
    			form.setEnabled(ITEM_ADTIVOS, false);
    	        form.setEnabled(DESCROCAO_SERV_ADTIVOS, false);
    	        form.setEnabled(UNIDADE_ADTIVOS, false);
    	        form.setEnabled(QUANT_MENSAL_ADTIVOS, false);
    	        form.setEnabled(PRECO_UNID_ADTIVOS, false);

    			} 
    		while (i < pegarUltimoContratos);
//      	form.setEnabled("TABELA_ADTIVOS", false);
//        	form.setEnabled("ITEM_ADTIVOS", false);
//	        form.setEnabled("DESCROCAO_SERV_ADTIVOS", false);
//	        form.setEnabled("UNIDADE_ADTIVOS", false);
//	        form.setEnabled("QUANT_MENSAL_ADTIVOS", false);
//	        form.setEnabled("PRECO_UNID_ADTIVOS", false);
    		form.setEnabled("TABELA_ADTIVOS_BOTAO", false);
    		form.setEnabled("CALCULARTOTAL_ADTIVOS", false);
	      //CAMPOS RECISÃO
	        form.setEnabled("N_CONTRATO_RESCISAO", false);
	        form.setEnabled("RAZAO_SOCIAL_RESCISAO", false); 
	        form.setEnabled("CONTATO_RESCISAO", false);
	        form.setEnabled("TELEFONE_RESCISAO", false);
			form.setEnabled("INICIO_VIGENCIA_RESCISAO", false);
			form.setEnabled("ULTIMO_PAGAMENTO_RESCISAO", false); 
	        form.setEnabled("VALOR_RESCISAO", false);
	        form.setEnabled("ULTIMA_PRESTACAO_RESCISAO", false);		
	        form.setEnabled("DETALHAMENTO_SUGESTAO_RESCISAO", false);
	    //CAMPOS APROVADO IDERANCA 
		    form.setEnabled("ESCOPO_APROVADO_LIDERANCA", false);
	        form.setEnabled("OBSERVACAO_LIDERANCA",false);
	   //CAMPOS APRESENTACAO COTAÇÃO 
		    //form.setEnabled("ANEXOS_COTACAO", false);
	     customHTML.append("<script>$('#ANEXOS_COTACAO').prop('disabled', true);</script>");
	        form.setEnabled("FORNECEDOR1_COTACAO", false); 
	        form.setEnabled("FORNECEDOR2_COTACAO", false); 
	        form.setEnabled("FORNECEDOR3_COTACAO", false); 
	        form.setEnabled("FORNECEDOR_ESCOLHA_COTACAO", false);
	        form.setEnabled("DADO_BANCARIO_COTACAO", false);
	        form.setEnabled("NOME_RESPONSAVEL_COTACAO", false); 
      		form.setEnabled("TELEFONE_RESPONSAVEL_COTACAO", false); 
      		form.setEnabled("EMAIL_RESPONSAVEL_COTACAO", false);
      		form.setEnabled("NOME_TESTEMUNHA_COTACAO1", false); 
      		form.setEnabled("TELEFONE_TESTEMUNHA_COTACAO1", false);
			form.setEnabled("EMAIL_TESTEMUNHA_COTACAO1", false);
			form.setEnabled("NOME_TESTEMUNHA_COTACAO2", false); 
      		form.setEnabled("TELEFONE_TESTEMUNHA_COTACAO2", false);
      		form.setEnabled("EMAIL_TESTEMUNHA_COTACAO2", false);
			//form.setEnabled("ANEXO_CONTRATO_SOCIAL", false);
    	customHTML.append("<script>$('#ANEXO_CONTRATO_SOCIAL').prop('disabled', true);</script>");
			//form.setEnabled("ANEXO_ULT_ALTERACAO", false);
    	customHTML.append("<script>$('#ANEXO_ULT_ALTERACAO').prop('disabled', true);</script>");
	        //form.setEnabled("ANEXO_SOCIO_RESP", false);
    	customHTML.append("<script>$('#ANEXO_SOCIO_RESP').prop('disabled', true);</script>");
	        form.setEnabled("OBSERVACAO_COTACAO", false);
	    //CAMPOS APROVADO LIDERANCA COMPRAS   
	        form.setEnabled("APROVADO_LIDERANCA_COMPRAS", false);
		    form.setEnabled("OBS_LIDER_COMP", false);
		//CAMPOS APROVADO APROVADO_SUPERINTENDENCIA
	        form.setEnabled("APROVADO_SUPERINTENDENCIA",true);
		    form.setEnabled("OBS_SUPERINTENDENCIA", true);
		//CAMPOS DE CONTRATOS E JURIDICO
	        form.setEnabled("POSSUI_CONTRATO", false); 
		    //form.setEnabled("ANEXO_CONFECCCAO_CONTRATO", false);
	        customHTML.append("<script>$('#ANEXO_CONFECCCAO_CONTRATO').prop('disabled', true);</script>");
	        form.setEnabled("OBS_CONFECCCAO_CONTRATO", false); 
	        form.setEnabled("OBS_CONTRATO_JURIDICO", false);
        //form.setEnabled("ANEXO_CONTRATO_JURIDICO", false);
	        customHTML.append("<script>$('#ANEXO_CONTRATO_JURIDICO').prop('disabled', true);</script>");
	        form.setEnabled("NUMERO_DO_CONTRATO_INTE", false); 
	        form.setEnabled("RAZAO_SOCIAL", false); 

      

          break;
      case 40:
     	 //DESTINA AO COMPRADOR
 	
     	//CAMPOS NOVOS CONTRATOS 
    		form.setEnabled("TIPO_SOLICITACAO", false);
    		form.setEnabled("NOME_SOLICITANTE", false); 
 	        form.setEnabled("CENTRO_DE_CUSTO", false);
 	        form.setEnabled("RESP_CENTRO_DE_CUSTO", false);		
 	        form.setEnabled("OBJ_CONTRATO", false);
 		    form.setEnabled("PRAZO_DE_ENTREGA", false);
 	        form.setEnabled("CENTRO_DE_CUSTO_ENTREGA",false);
 		    form.setEnabled("ENDEREÇO_DE_ENTREGA", false);
 	        form.setEnabled("INICIO_VIGENCIA", false); 
 	        form.setEnabled("FIM_VIGENCIA", false); 
 	        form.setEnabled("QUANTIDADE_DIAS_PARA_MEDICAO", false); 
 	        form.setEnabled("PRAZO_DEPAGAMENTO", false);
 	        form.setEnabled("GARANTIA", false); 
 	        customHTML.append("<script>$('#CRONOGRAMA_SERVICO_1').prop('disabled', true);</script>");
            customHTML.append("<script>$('#CRONOGRAMA_SERVICO_2').prop('disabled', true);</script>");
            customHTML.append("<script>$('#CRONOGRAMA_SERVICO_3').prop('disabled', true);</script>");

         	form.setEnabled("TIPOS_CRONOGRAMA", false);
         	customHTML.append("<script>$('#MATERIAIS_ULTILIZADOS_1').prop('disabled', true);</script>");
            customHTML.append("<script>$('#MATERIAIS_ULTILIZADOS_2').prop('disabled', true);</script>");
            customHTML.append("<script>$('#MATERIAIS_ULTILIZADOS_3').prop('disabled', true);</script>");

         	customHTML.append("<script>$('#MOBILIZACAO_CLIENTE_1').prop('disabled', true);</script>");
            customHTML.append("<script>$('#MOBILIZACAO_CLIENTE_2').prop('disabled', true);</script>");
            customHTML.append("<script>$('#MOBILIZACAO_CLIENTE_3').prop('disabled', true);</script>");

         	customHTML.append("<script>$('#DESMOBILIZACAO_CLIENTE_1').prop('disabled', true);</script>");
            customHTML.append("<script>$('#DESMOBILIZACAO_CLIENTE_2').prop('disabled', true);</script>");
            customHTML.append("<script>$('#DESMOBILIZACAO_CLIENTE_3').prop('disabled', true);</script>");

         	customHTML.append("<script>$('#REGISTRO_CLT_1').prop('disabled', true);</script>");
            customHTML.append("<script>$('#REGISTRO_CLT_2').prop('disabled', true);</script>");
            customHTML.append("<script>$('#REGISTRO_CLT_3').prop('disabled', true);</script>");

     		form.setEnabled("MULTAS", false);
     		form.setEnabled("MULTAS_PREVISTAS", false);
     		form.setEnabled("DISPONIBILIDADE_FISICA", false);
        	customHTML.append("<script>$('#ANEXO_DISPONIBILIDADE').prop('disabled', true)</script>");
        	form.setEnabled("ANEXO_DISPONIBILIDADE", false);
 			form.setEnabled("PERCENTUAL_RECISAO", false);
 			form.setEnabled("HIPOTESE_RESCISAO", false); 
 	        form.setEnabled("PRAZO_RECISAO", false);
 	        form.setEnabled("SUGESTAO_FORNECEDOR", false);		
 	        form.setEnabled("RAZAO_SOCIAL_SUGESTAO", false);
 		    form.setEnabled("RESPONSAVEL_SUGESTAO", false);
 		   form.setEnabled("CNPJ_SUGESTAO", false);
 	        form.setEnabled("TELEFONE_SUGESTAO",false);
 		    form.setEnabled("EMAIL_SUGESTAO", false);
 	        form.setEnabled("JUSTIFICATIVA_SUGESTAO", false);
 	       form.setEnabled("TABELA_CONTRATOS_BOTAO", false);
 	      //CAMPOS TABELA NOVOS CONTRATOS 
 	       var pegarUltimoContratos = parseInt(form.getValue("TABELA_CONTRATOS_ULTIMO"))
			var i = 0;
			do {
				i = i+ 1
				var ITEM_CONTRATOS = "ITEM_CONTRATOS___" + i
				var DESCROCAO_SERV_CONTRATOS = "DESCROCAO_SERV_CONTRATOS___" + i
				var UNIDADE_CONTRATOS = "UNIDADE_CONTRATOS___" + i
				var QUANT_MENSAL_CONTRATOS = "QUANT_MENSAL_CONTRATOS___" + i
				var PRECO_UNID_CONTRATOS = "PRECO_UNID_CONTRATOS___" + i
				form.setEnabled(ITEM_CONTRATOS, false);
		        form.setEnabled(DESCROCAO_SERV_CONTRATOS, false);
		        form.setEnabled(UNIDADE_CONTRATOS, false);
		        form.setEnabled(QUANT_MENSAL_CONTRATOS, false);
		        form.setEnabled(PRECO_UNID_CONTRATOS, false);

				} 
			while (i < pegarUltimoContratos);
			var pegarUltimoContratos = parseInt(form.getValue("TABELA_ADTIVOS_ULTIMO"))
    		var i = 0;
    		
    		do { 
    			i = i+ 1
    			var ITEM_ADTIVOS = "ITEM_ADTIVOS___" + i
    			var DESCROCAO_SERV_ADTIVOS = "DESCROCAO_SERV_ADTIVOS___" + i
    			var UNIDADE_ADTIVOS = "UNIDADE_ADTIVOS___" + i
    			var QUANT_MENSAL_ADTIVOS = "QUANT_MENSAL_ADTIVOS___" + i
    			var PRECO_UNID_ADTIVOS = "PRECO_UNID_ADTIVOS___" + i
    			
    			//form.setEnabled(TABELA_ADTIVOS, false);
    			form.setEnabled(ITEM_ADTIVOS, false);
    	        form.setEnabled(DESCROCAO_SERV_ADTIVOS, false);
    	        form.setEnabled(UNIDADE_ADTIVOS, false);
    	        form.setEnabled(QUANT_MENSAL_ADTIVOS, false);
    	        form.setEnabled(PRECO_UNID_ADTIVOS, false);

    			} 
    		while (i < pegarUltimoContratos);
// 	        form.setEnabled("ITEM_CONTRATOS", false);
// 	        form.setEnabled("DESCROCAO_SERV_CONTRATOS", false);
// 	        form.setEnabled("UNIDADE_CONTRATOS", false);
// 	        form.setEnabled("QUANT_MENSAL_CONTRATOS", false);
// 	        form.setEnabled("PRECO_UNID_CONTRATOS", false);
 		 //CAMPOS ADTIVOS
 	        form.setEnabled("N_CONTRATO_ADTIVOS", false);
 	        form.setEnabled("RAZAO_SOCIAL_ADTIVOS", false);
     		form.setEnabled("CONTATO_ADTIVOS", false); 
     		form.setEnabled("TELEFONE_ADTIVOS", false);
     		form.setEnabled("DETALHAMENTO_SUGESTAO", false);
     //CAMPOS TABELA ADTIVOS
     		
//     		form.setEnabled("TABELA_ADTIVOS", false);
//     		form.setEnabled("ITEM_ADTIVOS", false);
// 	        form.setEnabled("DESCROCAO_SERV_ADTIVOS", false);
// 	        form.setEnabled("UNIDADE_ADTIVOS", false);
// 	        form.setEnabled("QUANT_MENSAL_ADTIVOS", false);
// 	        form.setEnabled("PRECO_UNID_ADTIVOS", false);
     		form.setEnabled("TABELA_ADTIVOS_BOTAO", false);
    		form.setEnabled("CALCULARTOTAL_ADTIVOS", false);
 	      //CAMPOS RECISÃO
 	        form.setEnabled("N_CONTRATO_RESCISAO", false);
 	        form.setEnabled("RAZAO_SOCIAL_RESCISAO", false); 
 	        form.setEnabled("CONTATO_RESCISAO", false);
 	        form.setEnabled("TELEFONE_RESCISAO", false);
 			form.setEnabled("INICIO_VIGENCIA_RESCISAO", false);
 			form.setEnabled("ULTIMO_PAGAMENTO_RESCISAO", false); 
 	        form.setEnabled("VALOR_RESCISAO", false);
 	        form.setEnabled("ULTIMA_PRESTACAO_RESCISAO", false);		
 	        form.setEnabled("DETALHAMENTO_SUGESTAO_RESCISAO", false);
 	    //CAMPOS APROVADO IDERANCA 
 		    form.setEnabled("ESCOPO_APROVADO_LIDERANCA", false);
 	        form.setEnabled("OBSERVACAO_LIDERANCA",false);
 	   //CAMPOS APRESENTACAO COTAÇÃO 
 		    //form.setEnabled("ANEXOS_COTACAO", false);
 	        customHTML.append("<script>$('#ANEXOS_COTACAO').prop('disabled', true);</script>");
 	        form.setEnabled("FORNECEDOR1_COTACAO", false); 
 	        form.setEnabled("FORNECEDOR2_COTACAO", false); 
 	        form.setEnabled("FORNECEDOR3_COTACAO", false); 
 	        form.setEnabled("FORNECEDOR_ESCOLHA_COTACAO", false);
 	        form.setEnabled("DADO_BANCARIO_COTACAO", false);
 	        form.setEnabled("NOME_RESPONSAVEL_COTACAO", false); 
     		form.setEnabled("TELEFONE_RESPONSAVEL_COTACAO", false); 
     		form.setEnabled("EMAIL_RESPONSAVEL_COTACAO", false);
     		form.setEnabled("NOME_TESTEMUNHA_COTACAO1", false); 
     		form.setEnabled("TELEFONE_TESTEMUNHA_COTACAO1", false);
 			form.setEnabled("EMAIL_TESTEMUNHA_COTACAO1", false);
 			form.setEnabled("NOME_TESTEMUNHA_COTACAO2", false); 
     		form.setEnabled("TELEFONE_TESTEMUNHA_COTACAO2", false);
     		form.setEnabled("EMAIL_TESTEMUNHA_COTACAO2", false);
 			//form.setEnabled("ANEXO_CONTRATO_SOCIAL", false);
   	customHTML.append("<script>$('#ANEXO_CONTRATO_SOCIAL').prop('disabled', true);</script>");
 			//form.setEnabled("ANEXO_ULT_ALTERACAO", false);
   	customHTML.append("<script>$('#ANEXO_ULT_ALTERACAO').prop('disabled', true);</script>");
 	        //form.setEnabled("ANEXO_SOCIO_RESP", false);
   	customHTML.append("<script>$('#ANEXO_SOCIO_RESP').prop('disabled', true);</script>");
 	        form.setEnabled("OBSERVACAO_COTACAO", false);
 	    //CAMPOS APROVADO LIDERANCA COMPRAS   
 	        form.setEnabled("APROVADO_LIDERANCA_COMPRAS", false);
 		    form.setEnabled("OBS_LIDER_COMP", false);
 		//CAMPOS APROVADO APROVADO_SUPERINTENDENCIA
 	        form.setEnabled("APROVADO_SUPERINTENDENCIA",false);
 		    form.setEnabled("OBS_SUPERINTENDENCIA", false);
 		//CAMPOS DE CONTRATOS E JURIDICO
 	        form.setEnabled("POSSUI_CONTRATO", false); 
 	        //form.setEnabled("ANEXO_CONFECCCAO_CONTRATO", false);
 	  customHTML.append("<script>$('#ANEXO_CONFECCCAO_CONTRATO').prop('disabled', true);</script>");
 	        form.setEnabled("OBS_CONFECCCAO_CONTRATO", false); 
 	        form.setEnabled("OBS_CONTRATO_JURIDICO", false);
       //form.setEnabled("ANEXO_CONTRATO_JURIDICO", false);
 	        customHTML.append("<script>$('#ANEXO_CONTRATO_JURIDICO').prop('disabled', true);</script>");
 	        form.setEnabled("NUMERO_DO_CONTRATO_INTE", false); 
 	        form.setEnabled("RAZAO_SOCIAL", false); 

           break;
         
      case 15:
    	 //Confeccção do contrato
	
    	//CAMPOS NOVOS CONTRATOS 
   			form.setEnabled("TIPO_SOLICITACAO", false);
   			form.setEnabled("NOME_SOLICITANTE", false); 
	        form.setEnabled("CENTRO_DE_CUSTO", false);
	        form.setEnabled("RESP_CENTRO_DE_CUSTO", false);		
	        form.setEnabled("OBJ_CONTRATO", false);
		    form.setEnabled("PRAZO_DE_ENTREGA", false);
	        form.setEnabled("CENTRO_DE_CUSTO_ENTREGA",false);
		    form.setEnabled("ENDERECO_DE_ENTREGA", false);
	        form.setEnabled("INICIO_VIGENCIA", false); 
	        form.setEnabled("FIM_VIGENCIA", false); 
	        form.setEnabled("QUANTIDADE_DIAS_PARA_MEDICAO", false); 
	        form.setEnabled("PRAZO_DEPAGAMENTO", false);
	        form.setEnabled("GARANTIA", false); 
	        customHTML.append("<script>$('#CRONOGRAMA_SERVICO_1').prop('disabled', true);</script>");
            customHTML.append("<script>$('#CRONOGRAMA_SERVICO_2').prop('disabled', true);</script>");
            customHTML.append("<script>$('#CRONOGRAMA_SERVICO_3').prop('disabled', true);</script>");

          	form.setEnabled("TIPOS_CRONOGRAMA", false);
          	
          	customHTML.append("<script>$('#MATERIAIS_ULTILIZADOS_1').prop('disabled', true);</script>");
            customHTML.append("<script>$('#MATERIAIS_ULTILIZADOS_2').prop('disabled', true);</script>");
            customHTML.append("<script>$('#MATERIAIS_ULTILIZADOS_3').prop('disabled', true);</script>");

          	customHTML.append("<script>$('#MOBILIZACAO_CLIENTE_1').prop('disabled', true);</script>");
            customHTML.append("<script>$('#MOBILIZACAO_CLIENTE_2').prop('disabled', true);</script>");
            customHTML.append("<script>$('#MOBILIZACAO_CLIENTE_3').prop('disabled', true);</script>");

          	customHTML.append("<script>$('#DESMOBILIZACAO_CLIENTE_1').prop('disabled', true);</script>");
            customHTML.append("<script>$('#DESMOBILIZACAO_CLIENTE_2').prop('disabled', true);</script>");
            customHTML.append("<script>$('#DESMOBILIZACAO_CLIENTE_3').prop('disabled', true);</script>");

          	customHTML.append("<script>$('#REGISTRO_CLT_1').prop('disabled', true);</script>");
            customHTML.append("<script>$('#REGISTRO_CLT_2').prop('disabled', true);</script>");
            customHTML.append("<script>$('#REGISTRO_CLT_3').prop('disabled', true);</script>");

    		form.setEnabled("MULTAS", false);
    		form.setEnabled("MULTAS_PREVISTAS", false);
    		form.setEnabled("DISPONIBILIDADE_FISICA", false);
        	customHTML.append("<script>$('#ANEXO_DISPONIBILIDADE').prop('disabled', true)</script>");
        	form.setEnabled("ANEXO_DISPONIBILIDADE", false);
			form.setEnabled("PERCENTUAL_RECISAO", false);
			form.setEnabled("HIPOTESE_RESCISAO", false); 
	        form.setEnabled("PRAZO_RECISAO", false);
	        form.setEnabled("SUGESTAO_FORNECEDOR", false);		
	        form.setEnabled("RAZAO_SOCIAL_SUGESTAO", false);
		    form.setEnabled("RESPONSAVEL_SUGESTAO", false);
		    form.setEnabled("CNPJ_SUGESTAO", false);
	        form.setEnabled("TELEFONE_SUGESTAO",false);
		    form.setEnabled("EMAIL_SUGESTAO", false);
	        form.setEnabled("JUSTIFICATIVA_SUGESTAO", false); 
	        form.setEnabled("TABELA_CONTRATOS_BOTAO", false);
	      //CAMPOS TABELA NOVOS CONTRATOS 
	        var pegarUltimoContratos = parseInt(form.getValue("TABELA_CONTRATOS_ULTIMO"))
			var i = 0;
			do {
				i = i+ 1
				var ITEM_CONTRATOS = "ITEM_CONTRATOS___" + i
				var DESCROCAO_SERV_CONTRATOS = "DESCROCAO_SERV_CONTRATOS___" + i
				var UNIDADE_CONTRATOS = "UNIDADE_CONTRATOS___" + i
				var QUANT_MENSAL_CONTRATOS = "QUANT_MENSAL_CONTRATOS___" + i
				var PRECO_UNID_CONTRATOS = "PRECO_UNID_CONTRATOS___" + i
				form.setEnabled(ITEM_CONTRATOS, false);
		        form.setEnabled(DESCROCAO_SERV_CONTRATOS, false);
		        form.setEnabled(UNIDADE_CONTRATOS, false);
		        form.setEnabled(QUANT_MENSAL_CONTRATOS, false);
		        form.setEnabled(PRECO_UNID_CONTRATOS, false);

				} 
			while (i < pegarUltimoContratos);
//	        form.setEnabled("ITEM_CONTRATOS", false);
//	        form.setEnabled("DESCROCAO_SERV_CONTRATOS", false);
//	        form.setEnabled("UNIDADE_CONTRATOS", false);
//	        form.setEnabled("QUANT_MENSAL_CONTRATOS", false);
//	        form.setEnabled("PRECO_UNID_CONTRATOS", false);
		 //CAMPOS ADTIVOS
	        form.setEnabled("N_CONTRATO_ADTIVOS", false);
	        form.setEnabled("RAZAO_SOCIAL_ADTIVOS", false);
    		form.setEnabled("CONTATO_ADTIVOS", false); 
    		form.setEnabled("TELEFONE_ADTIVOS", false);
    		form.setEnabled("DETALHAMENTO_SUGESTAO", false);
    //CAMPOS TABELA ADTIVOS

    		
          	var pegarUltimoContratos = parseInt(form.getValue("TABELA_ADTIVOS_ULTIMO"))
    		var i = 0;
    		
    		do { 
    			i = i+ 1
    			var ITEM_ADTIVOS = "ITEM_ADTIVOS___" + i
    			var DESCROCAO_SERV_ADTIVOS = "DESCROCAO_SERV_ADTIVOS___" + i
    			var UNIDADE_ADTIVOS = "UNIDADE_ADTIVOS___" + i
    			var QUANT_MENSAL_ADTIVOS = "QUANT_MENSAL_ADTIVOS___" + i
    			var PRECO_UNID_ADTIVOS = "PRECO_UNID_ADTIVOS___" + i
    			
    			//form.setEnabled(TABELA_ADTIVOS, false);
    			form.setEnabled(ITEM_ADTIVOS, false);
    	        form.setEnabled(DESCROCAO_SERV_ADTIVOS, false);
    	        form.setEnabled(UNIDADE_ADTIVOS, false);
    	        form.setEnabled(QUANT_MENSAL_ADTIVOS, false);
    	        form.setEnabled(PRECO_UNID_ADTIVOS, false);

    			} 
    		while (i < pegarUltimoContratos);
//    		form.setEnabled("TABELA_ADTIVOS", false);
//    		form.setEnabled("ITEM_ADTIVOS", false);
//	        form.setEnabled("DESCROCAO_SERV_ADTIVOS", false);
//	        form.setEnabled("UNIDADE_ADTIVOS", false);
//	        form.setEnabled("QUANT_MENSAL_ADTIVOS", false);
//	        form.setEnabled("PRECO_UNID_ADTIVOS", false);
    		form.setEnabled("TABELA_ADTIVOS_BOTAO", false);
    		form.setEnabled("CALCULARTOTAL_ADTIVOS", false);
	      //CAMPOS RECISÃO
	        form.setEnabled("N_CONTRATO_RESCISAO", false);
	        form.setEnabled("RAZAO_SOCIAL_RESCISAO", false); 
	        form.setEnabled("CONTATO_RESCISAO", false);
	        form.setEnabled("TELEFONE_RESCISAO", false);
			form.setEnabled("INICIO_VIGENCIA_RESCISAO", false);
			form.setEnabled("ULTIMO_PAGAMENTO_RESCISAO", false); 
	        form.setEnabled("VALOR_RESCISAO", false);
	        form.setEnabled("ULTIMA_PRESTACAO_RESCISAO", false);		
	        form.setEnabled("DETALHAMENTO_SUGESTAO_RESCISAO", false);
	    //CAMPOS APROVADO IDERANCA 
		    form.setEnabled("ESCOPO_APROVADO_LIDERANCA", false);
	        form.setEnabled("OBSERVACAO_LIDERANCA",false);
	   //CAMPOS APRESENTACAO COTAÇÃO 
		    //form.setEnabled("ANEXOS_COTACAO", false);
	  customHTML.append("<script>$('#ANEXOS_COTACAO').prop('disabled', true);</script>");
	        form.setEnabled("FORNECEDOR1_COTACAO", false); 
	        form.setEnabled("FORNECEDOR2_COTACAO", false); 
	        form.setEnabled("FORNECEDOR3_COTACAO", false); 
	        form.setEnabled("FORNECEDOR_ESCOLHA_COTACAO", false);
	        form.setEnabled("DADO_BANCARIO_COTACAO", false);
	        form.setEnabled("NOME_RESPONSAVEL_COTACAO", false); 
    		form.setEnabled("TELEFONE_RESPONSAVEL_COTACAO", false); 
    		form.setEnabled("EMAIL_RESPONSAVEL_COTACAO", false);
    		form.setEnabled("NOME_TESTEMUNHA_COTACAO1", false); 
    		form.setEnabled("TELEFONE_TESTEMUNHA_COTACAO1", false);
			form.setEnabled("EMAIL_TESTEMUNHA_COTACAO1", false);
			form.setEnabled("NOME_TESTEMUNHA_COTACAO2", false); 
    		form.setEnabled("TELEFONE_TESTEMUNHA_COTACAO2", false);
    		form.setEnabled("EMAIL_TESTEMUNHA_COTACAO2", false);
			//form.setEnabled("ANEXO_CONTRATO_SOCIAL", false);
  	customHTML.append("<script>$('#ANEXO_CONTRATO_SOCIAL').prop('disabled', true);</script>");
			//form.setEnabled("ANEXO_ULT_ALTERACAO", false);
  	customHTML.append("<script>$('#ANEXO_ULT_ALTERACAO').prop('disabled', true);</script>");
	        //form.setEnabled("ANEXO_SOCIO_RESP", false);
  	customHTML.append("<script>$('#ANEXO_SOCIO_RESP').prop('disabled', true);</script>");
	        form.setEnabled("OBSERVACAO_COTACAO", false);
	    //CAMPOS APROVADO LIDERANCA COMPRAS   
	        form.setEnabled("APROVADO_LIDERANCA_COMPRAS", false);
		    form.setEnabled("OBS_LIDER_COMP", false);
		//CAMPOS APROVADO APROVADO_SUPERINTENDENCIA
	        form.setEnabled("APROVADO_SUPERINTENDENCIA",false);
		    form.setEnabled("OBS_SUPERINTENDENCIA", false);
		//CAMPOS DE CONTRATOS E JURIDICO
	        form.setEnabled("POSSUI_CONTRATO", true); 
	        form.setEnabled("ANEXO_CONFECCCAO_CONTRATO", true);
	        //customHTML.append("<script>$('#ANEXO_CONFECCCAO_CONTRATO').prop('disabled', true);</script>");
	        form.setEnabled("OBS_CONFECCCAO_CONTRATO", true); 
	        form.setEnabled("OBS_CONTRATO_JURIDICO", false);
	        //form.setEnabled("ANEXO_CONTRATO_JURIDICO", false);
	        customHTML.append("<script>$('#ANEXO_CONTRATO_JURIDICO').prop('disabled', true);</script>");
	        form.setEnabled("NUMERO_DO_CONTRATO_INTE", false); 
	        form.setEnabled("RAZAO_SOCIAL", false); 

          break;
        
      case 17:
    	  //Analise do Contrato 

    	//CAMPOS NOVOS CONTRATOS 
 			form.setEnabled("TIPO_SOLICITACAO", false);
 			form.setEnabled("NOME_SOLICITANTE", false); 
	        form.setEnabled("CENTRO_DE_CUSTO", false);
	        form.setEnabled("RESP_CENTRO_DE_CUSTO", false);		
	        form.setEnabled("OBJ_CONTRATO", false);
		    form.setEnabled("PRAZO_DE_ENTREGA", false);
	        form.setEnabled("CENTRO_DE_CUSTO_ENTREGA",false);
		    form.setEnabled("ENDERECO_DE_ENTREGA", false);
	        form.setEnabled("INICIO_VIGENCIA", false); 
	        form.setEnabled("FIM_VIGENCIA", false); 
	        form.setEnabled("QUANTIDADE_DIAS_PARA_MEDICAO", false); 
	        form.setEnabled("PRAZO_DEPAGAMENTO", false);
	        form.setEnabled("GARANTIA", false); 
	        customHTML.append("<script>$('#CRONOGRAMA_SERVICO_1').prop('disabled', true);</script>");
            customHTML.append("<script>$('#CRONOGRAMA_SERVICO_2').prop('disabled', true);</script>");
            customHTML.append("<script>$('#CRONOGRAMA_SERVICO_3').prop('disabled', true);</script>");

          	form.setEnabled("TIPOS_CRONOGRAMA", false);
          	
          	customHTML.append("<script>$('#MATERIAIS_ULTILIZADOS_1').prop('disabled', true);</script>");
            customHTML.append("<script>$('#MATERIAIS_ULTILIZADOS_2').prop('disabled', true);</script>");
            customHTML.append("<script>$('#MATERIAIS_ULTILIZADOS_3').prop('disabled', true);</script>");

          	customHTML.append("<script>$('#MOBILIZACAO_CLIENTE_1').prop('disabled', true);</script>");
            customHTML.append("<script>$('#MOBILIZACAO_CLIENTE_2').prop('disabled', true);</script>");
            customHTML.append("<script>$('#MOBILIZACAO_CLIENTE_3').prop('disabled', true);</script>");

          	customHTML.append("<script>$('#DESMOBILIZACAO_CLIENTE_1').prop('disabled', true);</script>");
            customHTML.append("<script>$('#DESMOBILIZACAO_CLIENTE_2').prop('disabled', true);</script>");
            customHTML.append("<script>$('#DESMOBILIZACAO_CLIENTE_3').prop('disabled', true);</script>");

          	customHTML.append("<script>$('#REGISTRO_CLT_1').prop('disabled', true);</script>");
            customHTML.append("<script>$('#REGISTRO_CLT_2').prop('disabled', true);</script>");
            customHTML.append("<script>$('#REGISTRO_CLT_3').prop('disabled', true);</script>");

          	form.setEnabled("MULTAS", false);
          	form.setEnabled("MULTAS_PREVISTAS", false);
          	form.setEnabled("DISPONIBILIDADE_FISICA", false);
        	customHTML.append("<script>$('#ANEXO_DISPONIBILIDADE').prop('disabled', true)</script>");
        	form.setEnabled("ANEXO_DISPONIBILIDADE", false);
			form.setEnabled("PERCENTUAL_RECISAO", false);
			form.setEnabled("HIPOTESE_RESCISAO", false); 
	        form.setEnabled("PRAZO_RECISAO", false);
	        form.setEnabled("SUGESTAO_FORNECEDOR", false);		
	        form.setEnabled("RAZAO_SOCIAL_SUGESTAO", false);
		    form.setEnabled("RESPONSAVEL_SUGESTAO", false);
		    form.setEnabled("CNPJ_SUGESTAO", false);
	        form.setEnabled("TELEFONE_SUGESTAO",false);
		    form.setEnabled("EMAIL_SUGESTAO", false);
	        form.setEnabled("JUSTIFICATIVA_SUGESTAO", false); 
	        form.setEnabled("TABELA_CONTRATOS_BOTAO", false);
	      //CAMPOS TABELA NOVOS CONTRATOS 
	        var pegarUltimoContratos = parseInt(form.getValue("TABELA_CONTRATOS_ULTIMO"))
			var i = 0;
			do {
				i = i+ 1
				var ITEM_CONTRATOS = "ITEM_CONTRATOS___" + i
				var DESCROCAO_SERV_CONTRATOS = "DESCROCAO_SERV_CONTRATOS___" + i
				var UNIDADE_CONTRATOS = "UNIDADE_CONTRATOS___" + i
				var QUANT_MENSAL_CONTRATOS = "QUANT_MENSAL_CONTRATOS___" + i
				var PRECO_UNID_CONTRATOS = "PRECO_UNID_CONTRATOS___" + i
				form.setEnabled(ITEM_CONTRATOS, false);
		        form.setEnabled(DESCROCAO_SERV_CONTRATOS, false);
		        form.setEnabled(UNIDADE_CONTRATOS, false);
		        form.setEnabled(QUANT_MENSAL_CONTRATOS, false);
		        form.setEnabled(PRECO_UNID_CONTRATOS, false);

				} 
			while (i < pegarUltimoContratos);


//	        form.setEnabled("ITEM_CONTRATOS", false);
//	        form.setEnabled("DESCROCAO_SERV_CONTRATOS", false);
//	        form.setEnabled("UNIDADE_CONTRATOS", false);
//	        form.setEnabled("QUANT_MENSAL_CONTRATOS", false);
//	        form.setEnabled("PRECO_UNID_CONTRATOS", false);
		 //CAMPOS ADTIVOS
	        form.setEnabled("N_CONTRATO_ADTIVOS", false);
	        form.setEnabled("RAZAO_SOCIAL_ADTIVOS", false);
	        form.setEnabled("CONTATO_ADTIVOS", false); 
	        form.setEnabled("TELEFONE_ADTIVOS", false);
	        form.setEnabled("DETALHAMENTO_SUGESTAO", false);
  //CAMPOS TABELA ADTIVOS

	    	
          	var pegarUltimoContratos = parseInt(form.getValue("TABELA_ADTIVOS_ULTIMO"))
    		var i = 0;
    		
    		do { 
    			i = i+ 1
    			var ITEM_ADTIVOS = "ITEM_ADTIVOS___" + i
    			var DESCROCAO_SERV_ADTIVOS = "DESCROCAO_SERV_ADTIVOS___" + i
    			var UNIDADE_ADTIVOS = "UNIDADE_ADTIVOS___" + i
    			var QUANT_MENSAL_ADTIVOS = "QUANT_MENSAL_ADTIVOS___" + i
    			var PRECO_UNID_ADTIVOS = "PRECO_UNID_ADTIVOS___" + i
    			
    			//form.setEnabled(TABELA_ADTIVOS, false);
    			form.setEnabled(ITEM_ADTIVOS, false);
    	        form.setEnabled(DESCROCAO_SERV_ADTIVOS, false);
    	        form.setEnabled(UNIDADE_ADTIVOS, false);
    	        form.setEnabled(QUANT_MENSAL_ADTIVOS, false);
    	        form.setEnabled(PRECO_UNID_ADTIVOS, false);

    			} 
    		while (i < pegarUltimoContratos);
//	        form.setEnabled("TABELA_ADTIVOS", false);
//	        form.setEnabled("ITEM_ADTIVOS", false);
//	        form.setEnabled("DESCROCAO_SERV_ADTIVOS", false);
//	        form.setEnabled("UNIDADE_ADTIVOS", false);
//	        form.setEnabled("QUANT_MENSAL_ADTIVOS", false);
//	        form.setEnabled("PRECO_UNID_ADTIVOS", false);
    		form.setEnabled("TABELA_ADTIVOS_BOTAO", false);
    		form.setEnabled("CALCULARTOTAL_ADTIVOS", false);
	      //CAMPOS RECISÃO
	        form.setEnabled("N_CONTRATO_RESCISAO", false);
	        form.setEnabled("RAZAO_SOCIAL_RESCISAO", false); 
	        form.setEnabled("CONTATO_RESCISAO", false);
	        form.setEnabled("TELEFONE_RESCISAO", false);
			form.setEnabled("INICIO_VIGENCIA_RESCISAO", false);
			form.setEnabled("ULTIMO_PAGAMENTO_RESCISAO", false); 
	        form.setEnabled("VALOR_RESCISAO", false);
	        form.setEnabled("ULTIMA_PRESTACAO_RESCISAO", false);		
	        form.setEnabled("DETALHAMENTO_SUGESTAO_RESCISAO", false);
	    //CAMPOS APROVADO IDERANCA 
		    form.setEnabled("ESCOPO_APROVADO_LIDERANCA", false);
	        form.setEnabled("OBSERVACAO_LIDERANCA",false);
	   //CAMPOS APRESENTACAO COTAÇÃO 
		    form.setEnabled("ANEXOS_COTACAO", false);
	        //customHTML.append("<script>$('#ANEXOS_COTACAO').prop('disabled', true);</script>");
	        form.setEnabled("FORNECEDOR1_COTACAO", false); 
	        form.setEnabled("FORNECEDOR2_COTACAO", false); 
	        form.setEnabled("FORNECEDOR3_COTACAO", false); 
	        form.setEnabled("FORNECEDOR_ESCOLHA_COTACAO", false);
	        form.setEnabled("DADO_BANCARIO_COTACAO", false);
	        form.setEnabled("NOME_RESPONSAVEL_COTACAO", false); 
	  		form.setEnabled("TELEFONE_RESPONSAVEL_COTACAO", false); 
	  		form.setEnabled("EMAIL_RESPONSAVEL_COTACAO", false);
	  		form.setEnabled("NOME_TESTEMUNHA_COTACAO1", false); 
  			form.setEnabled("TELEFONE_TESTEMUNHA_COTACAO1", false);
			form.setEnabled("EMAIL_TESTEMUNHA_COTACAO1", false);
			form.setEnabled("NOME_TESTEMUNHA_COTACAO2", false); 
			form.setEnabled("TELEFONE_TESTEMUNHA_COTACAO2", false);
			form.setEnabled("EMAIL_TESTEMUNHA_COTACAO2", false);
			//form.setEnabled("ANEXO_CONTRATO_SOCIAL", false);
			customHTML.append("<script>$('#ANEXO_CONTRATO_SOCIAL').prop('disabled', true);</script>");
			//form.setEnabled("ANEXO_ULT_ALTERACAO", false);
			customHTML.append("<script>$('#ANEXO_ULT_ALTERACAO').prop('disabled', true);</script>");
	        //form.setEnabled("ANEXO_SOCIO_RESP", false);
			customHTML.append("<script>$('#ANEXO_SOCIO_RESP').prop('disabled', true);</script>");
	        form.setEnabled("OBSERVACAO_COTACAO", false);
	    //CAMPOS APROVADO LIDERANCA COMPRAS   
	        form.setEnabled("APROVADO_LIDERANCA_COMPRAS", false);
		    form.setEnabled("OBS_LIDER_COMP", false);
		//CAMPOS APROVADO APROVADO_SUPERINTENDENCIA
	        form.setEnabled("APROVADO_SUPERINTENDENCIA",false);
		    form.setEnabled("OBS_SUPERINTENDENCIA", false);
		//CAMPOS DE CONTRATOS E JURIDICO
	        form.setEnabled("POSSUI_CONTRATO", false); 
	        //form.setEnabled("ANEXO_CONFECCCAO_CONTRATO", false);
	        customHTML.append("<script>$('#ANEXO_CONFECCCAO_CONTRATO').prop('disabled', true);</script>");
	        form.setEnabled("OBS_CONFECCCAO_CONTRATO", false); 
	        form.setEnabled("OBS_CONTRATO_JURIDICO", true);
	        //form.setEnabled("ANEXO_CONTRATO_JURIDICO", false);
	        customHTML.append("<script>$('#ANEXO_CONTRATO_JURIDICO').prop('disabled', true);</script>");
	        form.setEnabled("NUMERO_DO_CONTRATO_INTE", false); 
	        form.setEnabled("RAZAO_SOCIAL", false); 

          break;
          
      case 18:
    	 //Assinatura do contrato
      	
    	//CAMPOS NOVOS CONTRATOS 
 			form.setEnabled("TIPO_SOLICITACAO", false);
 			form.setEnabled("NOME_SOLICITANTE", false); 
	        form.setEnabled("CENTRO_DE_CUSTO", false);
	        form.setEnabled("RESP_CENTRO_DE_CUSTO", false);		
	        form.setEnabled("OBJ_CONTRATO", false);
		    form.setEnabled("PRAZO_DE_ENTREGA", false);
	        form.setEnabled("CENTRO_DE_CUSTO_ENTREGA",false);
		    form.setEnabled("ENDERECO_DE_ENTREGA", false);
	        form.setEnabled("INICIO_VIGENCIA", false); 
	        form.setEnabled("FIM_VIGENCIA", false); 
	        form.setEnabled("QUANTIDADE_DIAS_PARA_MEDICAO", false); 
	        form.setEnabled("PRAZO_DEPAGAMENTO", false);
	        form.setEnabled("GARANTIA", false); 
	        customHTML.append("<script>$('#CRONOGRAMA_SERVICO_1').prop('disabled', true);</script>");
            customHTML.append("<script>$('#CRONOGRAMA_SERVICO_2').prop('disabled', true);</script>");
            customHTML.append("<script>$('#CRONOGRAMA_SERVICO_3').prop('disabled', true);</script>");

          	form.setEnabled("TIPOS_CRONOGRAMA", false);
          	
          	customHTML.append("<script>$('#MATERIAIS_ULTILIZADOS_1').prop('disabled', true);</script>");
            customHTML.append("<script>$('#MATERIAIS_ULTILIZADOS_2').prop('disabled', true);</script>");
            customHTML.append("<script>$('#MATERIAIS_ULTILIZADOS_3').prop('disabled', true);</script>");

          	customHTML.append("<script>$('#MOBILIZACAO_CLIENTE_1').prop('disabled', true);</script>");
            customHTML.append("<script>$('#MOBILIZACAO_CLIENTE_2').prop('disabled', true);</script>");
            customHTML.append("<script>$('#MOBILIZACAO_CLIENTE_3').prop('disabled', true);</script>");

          	customHTML.append("<script>$('#DESMOBILIZACAO_CLIENTE_1').prop('disabled', true);</script>");
            customHTML.append("<script>$('#DESMOBILIZACAO_CLIENTE_2').prop('disabled', true);</script>");
            customHTML.append("<script>$('#DESMOBILIZACAO_CLIENTE_3').prop('disabled', true);</script>");

          	customHTML.append("<script>$('#REGISTRO_CLT_1').prop('disabled', true);</script>");
            customHTML.append("<script>$('#REGISTRO_CLT_2').prop('disabled', true);</script>");
            customHTML.append("<script>$('#REGISTRO_CLT_3').prop('disabled', true);</script>");

	  		form.setEnabled("MULTAS", false);
  			form.setEnabled("MULTAS_PREVISTAS", false);
  			form.setEnabled("DISPONIBILIDADE_FISICA", false);
        	customHTML.append("<script>$('#ANEXO_DISPONIBILIDADE').prop('disabled', true)</script>");
        	form.setEnabled("ANEXO_DISPONIBILIDADE", false);
			form.setEnabled("PERCENTUAL_RECISAO", false);
			form.setEnabled("HIPOTESE_RESCISAO", false); 
	        form.setEnabled("PRAZO_RECISAO", false);
	        form.setEnabled("SUGESTAO_FORNECEDOR", false);		
	        form.setEnabled("RAZAO_SOCIAL_SUGESTAO", false);
		    form.setEnabled("RESPONSAVEL_SUGESTAO", false);
		    form.setEnabled("CNPJ_SUGESTAO", false);
	        form.setEnabled("TELEFONE_SUGESTAO",false);
		    form.setEnabled("EMAIL_SUGESTAO", false);
	        form.setEnabled("JUSTIFICATIVA_SUGESTAO", false);
	        form.setEnabled("TABELA_CONTRATOS_BOTAO", false);
	      //CAMPOS TABELA NOVOS CONTRATOS 
	        var pegarUltimoContratos = parseInt(form.getValue("TABELA_CONTRATOS_ULTIMO"))
			var i = 0;
			do {
				i = i+ 1
				var ITEM_CONTRATOS = "ITEM_CONTRATOS___" + i
				var DESCROCAO_SERV_CONTRATOS = "DESCROCAO_SERV_CONTRATOS___" + i
				var UNIDADE_CONTRATOS = "UNIDADE_CONTRATOS___" + i
				var QUANT_MENSAL_CONTRATOS = "QUANT_MENSAL_CONTRATOS___" + i
				var PRECO_UNID_CONTRATOS = "PRECO_UNID_CONTRATOS___" + i
				form.setEnabled(ITEM_CONTRATOS, false);
		        form.setEnabled(DESCROCAO_SERV_CONTRATOS, false);
		        form.setEnabled(UNIDADE_CONTRATOS, false);
		        form.setEnabled(QUANT_MENSAL_CONTRATOS, false);
		        form.setEnabled(PRECO_UNID_CONTRATOS, false);

				} 
			while (i < pegarUltimoContratos);
			var pegarUltimoContratos = parseInt(form.getValue("TABELA_CONTRATOS_ULTIMO"))
			var i = 0;
			do {
				i = i+ 1
				var ITEM_CONTRATOS = "ITEM_CONTRATOS___" + i
				var DESCROCAO_SERV_CONTRATOS = "DESCROCAO_SERV_CONTRATOS___" + i
				var UNIDADE_CONTRATOS = "UNIDADE_CONTRATOS___" + i
				var QUANT_MENSAL_CONTRATOS = "QUANT_MENSAL_CONTRATOS___" + i
				var PRECO_UNID_CONTRATOS = "PRECO_UNID_CONTRATOS___" + i
				form.setEnabled(ITEM_CONTRATOS, false);
		        form.setEnabled(DESCROCAO_SERV_CONTRATOS, false);
		        form.setEnabled(UNIDADE_CONTRATOS, false);
		        form.setEnabled(QUANT_MENSAL_CONTRATOS, false);
		        form.setEnabled(PRECO_UNID_CONTRATOS, false);

				} 
			while (i < pegarUltimoContratos);


//	        form.setEnabled("ITEM_CONTRATOS", false);
//	        form.setEnabled("DESCROCAO_SERV_CONTRATOS", false);
//	        form.setEnabled("UNIDADE_CONTRATOS", false);
//	        form.setEnabled("QUANT_MENSAL_CONTRATOS", false);
//	        form.setEnabled("PRECO_UNID_CONTRATOS", false);
		 //CAMPOS ADTIVOS
	        form.setEnabled("N_CONTRATO_ADTIVOS", false);
	        form.setEnabled("RAZAO_SOCIAL_ADTIVOS", false);
	        form.setEnabled("CONTATO_ADTIVOS", false); 
  			form.setEnabled("TELEFONE_ADTIVOS", false);
  			form.setEnabled("DETALHAMENTO_SUGESTAO", false);
  		//CAMPOS TABELA ADTIVOS

  			
          	var pegarUltimoContratos = parseInt(form.getValue("TABELA_ADTIVOS_ULTIMO"))
    		var i = 0;
    		
    		do { 
    			i = i+ 1
    			var ITEM_ADTIVOS = "ITEM_ADTIVOS___" + i
    			var DESCROCAO_SERV_ADTIVOS = "DESCROCAO_SERV_ADTIVOS___" + i
    			var UNIDADE_ADTIVOS = "UNIDADE_ADTIVOS___" + i
    			var QUANT_MENSAL_ADTIVOS = "QUANT_MENSAL_ADTIVOS___" + i
    			var PRECO_UNID_ADTIVOS = "PRECO_UNID_ADTIVOS___" + i
    			
    			//form.setEnabled(TABELA_ADTIVOS, false);
    			form.setEnabled(ITEM_ADTIVOS, false);
    	        form.setEnabled(DESCROCAO_SERV_ADTIVOS, false);
    	        form.setEnabled(UNIDADE_ADTIVOS, false);
    	        form.setEnabled(QUANT_MENSAL_ADTIVOS, false);
    	        form.setEnabled(PRECO_UNID_ADTIVOS, false);

    			} 
    		while (i < pegarUltimoContratos);
//  		form.setEnabled("TABELA_ADTIVOS", false);
//  		form.setEnabled("ITEM_ADTIVOS", false);
//	        form.setEnabled("DESCROCAO_SERV_ADTIVOS", false);
//	        form.setEnabled("UNIDADE_ADTIVOS", false);
//	        form.setEnabled("QUANT_MENSAL_ADTIVOS", false);
//	        form.setEnabled("PRECO_UNID_ADTIVOS", false);
    		form.setEnabled("TABELA_ADTIVOS_BOTAO", false);
    		form.setEnabled("CALCULARTOTAL_ADTIVOS", false);
	      //CAMPOS RECISÃO
	        form.setEnabled("N_CONTRATO_RESCISAO", false);
	        form.setEnabled("RAZAO_SOCIAL_RESCISAO", false); 
	        form.setEnabled("CONTATO_RESCISAO", false);
	        form.setEnabled("TELEFONE_RESCISAO", false);
			form.setEnabled("INICIO_VIGENCIA_RESCISAO", false);
			form.setEnabled("ULTIMO_PAGAMENTO_RESCISAO", false); 
	        form.setEnabled("VALOR_RESCISAO", false);
	        form.setEnabled("ULTIMA_PRESTACAO_RESCISAO", false);		
	        form.setEnabled("DETALHAMENTO_SUGESTAO_RESCISAO", false);
	    //CAMPOS APROVADO IDERANCA 
		    form.setEnabled("ESCOPO_APROVADO_LIDERANCA", false);
	        form.setEnabled("OBSERVACAO_LIDERANCA",false);
	    //CAMPOS APRESENTACAO COTAÇÃO 
		    //form.setEnabled("ANEXOS_COTACAO", false);
	        customHTML.append("<script>$('#ANEXOS_COTACAO').prop('disabled', true);</script>");
	        form.setEnabled("FORNECEDOR1_COTACAO", false); 
	        form.setEnabled("FORNECEDOR2_COTACAO", false); 
	        form.setEnabled("FORNECEDOR3_COTACAO", false); 
	        form.setEnabled("FORNECEDOR_ESCOLHA_COTACAO", false);
	        form.setEnabled("DADO_BANCARIO_COTACAO", false);
	        form.setEnabled("NOME_RESPONSAVEL_COTACAO", false); 
	        form.setEnabled("TELEFONE_RESPONSAVEL_COTACAO", false); 
	        form.setEnabled("EMAIL_RESPONSAVEL_COTACAO", false);
	        form.setEnabled("NOME_TESTEMUNHA_COTACAO1", false); 
	        form.setEnabled("TELEFONE_TESTEMUNHA_COTACAO1", false);
			form.setEnabled("EMAIL_TESTEMUNHA_COTACAO1", false);
			form.setEnabled("NOME_TESTEMUNHA_COTACAO2", false); 
			form.setEnabled("TELEFONE_TESTEMUNHA_COTACAO2", false);
			form.setEnabled("EMAIL_TESTEMUNHA_COTACAO2", false);
			form.setEnabled("ANEXO_CONTRATO_SOCIAL", false);
			customHTML.append("<script>$('#ANEXO_CONTRATO_SOCIAL').prop('disabled', true);</script>");
			//form.setEnabled("ANEXO_ULT_ALTERACAO", false);
			customHTML.append("<script>$('#ANEXO_ULT_ALTERACAO').prop('disabled', true);</script>");
	        //form.setEnabled("ANEXO_SOCIO_RESP", false);
			customHTML.append("<script>$('#ANEXO_SOCIO_RESP').prop('disabled', true);</script>");
	        form.setEnabled("OBSERVACAO_COTACAO", false);
	    //CAMPOS APROVADO LIDERANCA COMPRAS   
	        form.setEnabled("APROVADO_LIDERANCA_COMPRAS", false);
		    form.setEnabled("OBS_LIDER_COMP", false);
		//CAMPOS APROVADO APROVADO_SUPERINTENDENCIA
	        form.setEnabled("APROVADO_SUPERINTENDENCIA",false);
		    form.setEnabled("OBS_SUPERINTENDENCIA", false);
		//CAMPOS DE CONTRATOS E JURIDICO
	        form.setEnabled("POSSUI_CONTRATO", false); 
	        //form.setEnabled("ANEXO_CONFECCCAO_CONTRATO", false);
	        customHTML.append("<script>$('#ANEXO_CONFECCCAO_CONTRATO').prop('disabled', true);</script>");
	        form.setEnabled("OBS_CONFECCCAO_CONTRATO", false); 
	        form.setEnabled("OBS_CONTRATO_JURIDICO", false);
	        form.setEnabled("ANEXO_CONTRATO_JURIDICO", true);
	        //customHTML.append("<script>$('#ANEXO_CONTRATO_JURIDICO').prop('disabled', true);</script>");
	        form.setEnabled("NUMERO_DO_CONTRATO_INTE", false); 
	        form.setEnabled("RAZAO_SOCIAL", false); 

          break;
          
      case 29:
    	 //Criação do contrato no RM
      	
    		//CAMPOS NOVOS CONTRATOS 
   			form.setEnabled("TIPO_SOLICITACAO", false);
   			form.setEnabled("NOME_SOLICITANTE", false); 
	        form.setEnabled("CENTRO_DE_CUSTO", false);
	        form.setEnabled("RESP_CENTRO_DE_CUSTO", false);		
	        form.setEnabled("OBJ_CONTRATO", false);
		    form.setEnabled("PRAZO_DE_ENTREGA", false);
	        form.setEnabled("CENTRO_DE_CUSTO_ENTREGA",false);
		    form.setEnabled("ENDERECO_DE_ENTREGA", false);
	        form.setEnabled("INICIO_VIGENCIA", false); 
	        form.setEnabled("FIM_VIGENCIA", false); 
	        form.setEnabled("QUANTIDADE_DIAS_PARA_MEDICAO", false); 
	        form.setEnabled("PRAZO_DEPAGAMENTO", false);
	        form.setEnabled("GARANTIA", false); 
	        customHTML.append("<script>$('#CRONOGRAMA_SERVICO_1').prop('disabled', true);</script>");
            customHTML.append("<script>$('#CRONOGRAMA_SERVICO_2').prop('disabled', true);</script>");
            customHTML.append("<script>$('#CRONOGRAMA_SERVICO_3').prop('disabled', true);</script>");

          	form.setEnabled("TIPOS_CRONOGRAMA", false);
          	
          	customHTML.append("<script>$('#MATERIAIS_ULTILIZADOS_1').prop('disabled', true);</script>");
            customHTML.append("<script>$('#MATERIAIS_ULTILIZADOS_2').prop('disabled', true);</script>");
            customHTML.append("<script>$('#MATERIAIS_ULTILIZADOS_3').prop('disabled', true);</script>");

          	customHTML.append("<script>$('#MOBILIZACAO_CLIENTE_1').prop('disabled', true);</script>");
            customHTML.append("<script>$('#MOBILIZACAO_CLIENTE_2').prop('disabled', true);</script>");
            customHTML.append("<script>$('#MOBILIZACAO_CLIENTE_3').prop('disabled', true);</script>");

          	customHTML.append("<script>$('#DESMOBILIZACAO_CLIENTE_1').prop('disabled', true);</script>");
            customHTML.append("<script>$('#DESMOBILIZACAO_CLIENTE_2').prop('disabled', true);</script>");
            customHTML.append("<script>$('#DESMOBILIZACAO_CLIENTE_3').prop('disabled', true);</script>");

          	customHTML.append("<script>$('#REGISTRO_CLT_1').prop('disabled', true);</script>");
            customHTML.append("<script>$('#REGISTRO_CLT_2').prop('disabled', true);</script>");
            customHTML.append("<script>$('#REGISTRO_CLT_3').prop('disabled', true);</script>");

    		form.setEnabled("MULTAS", false);
    		form.setEnabled("MULTAS_PREVISTAS", false);
    		form.setEnabled("DISPONIBILIDADE_FISICA", false);
        	customHTML.append("<script>$('#ANEXO_DISPONIBILIDADE').prop('disabled', true)</script>");
        	form.setEnabled("ANEXO_DISPONIBILIDADE", false);
			form.setEnabled("PERCENTUAL_RECISAO", false);
			form.setEnabled("HIPOTESE_RESCISAO", false); 
	        form.setEnabled("PRAZO_RECISAO", false);
	        form.setEnabled("SUGESTAO_FORNECEDOR", false);		
	        form.setEnabled("RAZAO_SOCIAL_SUGESTAO", false);
		    form.setEnabled("RESPONSAVEL_SUGESTAO", false);
		    form.setEnabled("CNPJ_SUGESTAO", false);
	        form.setEnabled("TELEFONE_SUGESTAO",false);
		    form.setEnabled("EMAIL_SUGESTAO", false);
	        form.setEnabled("JUSTIFICATIVA_SUGESTAO", false); 
	        form.setEnabled("TABELA_CONTRATOS_BOTAO", false);
	      //CAMPOS TABELA NOVOS CONTRATOS 
	        var pegarUltimoContratos = parseInt(form.getValue("TABELA_CONTRATOS_ULTIMO"))
			var i = 0;
			do {
				i = i+ 1
				var ITEM_CONTRATOS = "ITEM_CONTRATOS___" + i
				var DESCROCAO_SERV_CONTRATOS = "DESCROCAO_SERV_CONTRATOS___" + i
				var UNIDADE_CONTRATOS = "UNIDADE_CONTRATOS___" + i
				var QUANT_MENSAL_CONTRATOS = "QUANT_MENSAL_CONTRATOS___" + i
				var PRECO_UNID_CONTRATOS = "PRECO_UNID_CONTRATOS___" + i
				form.setEnabled(ITEM_CONTRATOS, false);
		        form.setEnabled(DESCROCAO_SERV_CONTRATOS, false);
		        form.setEnabled(UNIDADE_CONTRATOS, false);
		        form.setEnabled(QUANT_MENSAL_CONTRATOS, false);
		        form.setEnabled(PRECO_UNID_CONTRATOS, false);

				} 
			while (i < pegarUltimoContratos);


//	        form.setEnabled("ITEM_CONTRATOS", false);
//	        form.setEnabled("DESCROCAO_SERV_CONTRATOS", false);
//	        form.setEnabled("UNIDADE_CONTRATOS", false);
//	        form.setEnabled("QUANT_MENSAL_CONTRATOS", false);
//	        form.setEnabled("PRECO_UNID_CONTRATOS", false);
		 //CAMPOS ADTIVOS
	        form.setEnabled("N_CONTRATO_ADTIVOS", false);
	        form.setEnabled("RAZAO_SOCIAL_ADTIVOS", false);
    		form.setEnabled("CONTATO_ADTIVOS", false); 
    		form.setEnabled("TELEFONE_ADTIVOS", false);
    		form.setEnabled("DETALHAMENTO_SUGESTAO", false);
    //CAMPOS TABELA ADTIVOS

          	var pegarUltimoContratos = parseInt(form.getValue("TABELA_ADTIVOS_ULTIMO"))
    		var i = 0;
    		
    		do { 
    			i = i+ 1
    			var ITEM_ADTIVOS = "ITEM_ADTIVOS___" + i
    			var DESCROCAO_SERV_ADTIVOS = "DESCROCAO_SERV_ADTIVOS___" + i
    			var UNIDADE_ADTIVOS = "UNIDADE_ADTIVOS___" + i
    			var QUANT_MENSAL_ADTIVOS = "QUANT_MENSAL_ADTIVOS___" + i
    			var PRECO_UNID_ADTIVOS = "PRECO_UNID_ADTIVOS___" + i
    			
    			//form.setEnabled(TABELA_ADTIVOS, false);
    			form.setEnabled(ITEM_ADTIVOS, false);
    	        form.setEnabled(DESCROCAO_SERV_ADTIVOS, false);
    	        form.setEnabled(UNIDADE_ADTIVOS, false);
    	        form.setEnabled(QUANT_MENSAL_ADTIVOS, false);
    	        form.setEnabled(PRECO_UNID_ADTIVOS, false);

    			} 
    		while (i < pegarUltimoContratos);
//    		form.setEnabled("TABELA_ADTIVOS", false);
//    		form.setEnabled("ITEM_ADTIVOS", false);
//	        form.setEnabled("DESCROCAO_SERV_ADTIVOS", false);
//	        form.setEnabled("UNIDADE_ADTIVOS", false);
//	        form.setEnabled("QUANT_MENSAL_ADTIVOS", false);
//	        form.setEnabled("PRECO_UNID_ADTIVOS", false);
    		form.setEnabled("TABELA_ADTIVOS_BOTAO", false);
    		form.setEnabled("CALCULARTOTAL_ADTIVOS", false);
	      //CAMPOS RECISÃO
	        form.setEnabled("N_CONTRATO_RESCISAO", false);
	        form.setEnabled("RAZAO_SOCIAL_RESCISAO", false); 
	        form.setEnabled("CONTATO_RESCISAO", false);
	        form.setEnabled("TELEFONE_RESCISAO", false);
			form.setEnabled("INICIO_VIGENCIA_RESCISAO", false);
			form.setEnabled("ULTIMO_PAGAMENTO_RESCISAO", false); 
	        form.setEnabled("VALOR_RESCISAO", false);
	        form.setEnabled("ULTIMA_PRESTACAO_RESCISAO", false);		
	        form.setEnabled("DETALHAMENTO_SUGESTAO_RESCISAO", false);
	    //CAMPOS APROVADO IDERANCA 
		    form.setEnabled("ESCOPO_APROVADO_LIDERANCA", false);
	        form.setEnabled("OBSERVACAO_LIDERANCA",false);
	   //CAMPOS APRESENTACAO COTAÇÃO 
		    //form.setEnabled("ANEXOS_COTACAO", false);
	        customHTML.append("<script>$('#ANEXOS_COTACAO').prop('disabled', true);</script>");
	        form.setEnabled("FORNECEDOR1_COTACAO", false); 
	        form.setEnabled("FORNECEDOR2_COTACAO", false); 
	        form.setEnabled("FORNECEDOR3_COTACAO", false); 
	        form.setEnabled("FORNECEDOR_ESCOLHA_COTACAO", false);
	        form.setEnabled("DADO_BANCARIO_COTACAO", false);
	        form.setEnabled("NOME_RESPONSAVEL_COTACAO", false); 
    		form.setEnabled("TELEFONE_RESPONSAVEL_COTACAO", false); 
    		form.setEnabled("EMAIL_RESPONSAVEL_COTACAO", false);
    		form.setEnabled("NOME_TESTEMUNHA_COTACAO1", false); 
    		form.setEnabled("TELEFONE_TESTEMUNHA_COTACAO1", false);
			form.setEnabled("EMAIL_TESTEMUNHA_COTACAO1", false);
			form.setEnabled("NOME_TESTEMUNHA_COTACAO2", false); 
    		form.setEnabled("TELEFONE_TESTEMUNHA_COTACAO2", false);
    		form.setEnabled("EMAIL_TESTEMUNHA_COTACAO2", false);
			//form.setEnabled("ANEXO_CONTRATO_SOCIAL", false);
    		customHTML.append("<script>$('#ANEXO_CONTRATO_SOCIAL').prop('disabled', true);</script>");
			//form.setEnabled("ANEXO_ULT_ALTERACAO", false);
    		customHTML.append("<script>$('#ANEXO_ULT_ALTERACAO').prop('disabled', true);</script>");
	        //form.setEnabled("ANEXO_SOCIO_RESP", false);
    		customHTML.append("<script>$('#ANEXO_SOCIO_RESP').prop('disabled', true);</script>");
	        form.setEnabled("OBSERVACAO_COTACAO", false);
	    //CAMPOS APROVADO LIDERANCA COMPRAS   
	        form.setEnabled("APROVADO_LIDERANCA_COMPRAS", false);
		    form.setEnabled("OBS_LIDER_COMP", false);
		//CAMPOS APROVADO APROVADO_SUPERINTENDENCIA
	        form.setEnabled("APROVADO_SUPERINTENDENCIA",false);
		    form.setEnabled("OBS_SUPERINTENDENCIA", false);
		//CAMPOS DE CONTRATOS E JURIDICO
	        form.setEnabled("POSSUI_CONTRATO", false); 
	        form.setEnabled("ANEXO_CONFECCCAO_CONTRATO", false);
	        customHTML.append("<script>$('#ANEXO_CONFECCCAO_CONTRATO').prop('disabled', true);</script>");
	        form.setEnabled("OBS_CONFECCCAO_CONTRATO", false); 
	        form.setEnabled("OBS_CONTRATO_JURIDICO", false);
	        //form.setEnabled("ANEXO_CONTRATO_JURIDICO", false);
	        customHTML.append("<script>$('#ANEXO_CONTRATO_JURIDICO').prop('disabled', true);</script>");
	        form.setEnabled("NUMERO_DO_CONTRATO_INTE", true); 
	        form.setEnabled("RAZAO_SOCIAL", true); 

          break;

    }

}
