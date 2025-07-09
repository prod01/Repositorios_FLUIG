function validateForm(form){
	
	
	//variavel que recebe o codigo referente ao estado atual do processo.
    var Now_State =parseInt(getValue("WKNumState"));
    var Next_State =parseInt(getValue("WKNextState"));
    
    // bloco de condição que valida no estado incial do processo se os seguintes campos etão em braco. 
	if(Now_State == 0 || Now_State == 4){
		
    if (form.getValue("NOME_SOLICITANTE") == ""){
		console.log("entrou if NOME_SOLICITANTE")
		throw "Necessario Preencher o campo  Nome."; 
	}
	if (form.getValue("CENTRO_DE_CUSTO") == ""){
		console.log("entrou if CENTRO_DE_CUSTO")
		throw "Necessario Preencher o campo Centro de custo."; 
	}
	if (form.getValue("OBJ_CONTRATO") == ""){
		console.log("entrou if OBJ_CONTRATO")
		throw "Necessario Preencher o campo Classe de Serviço."; 
	}
	//CAMPOS NOVOS CONTRATOS 
	if (form.getValue("TIPO_SOLICITACAO") == "CONTRATO"){
		console.log("entrou if CONTRATO")
		if (form.getValue("PRAZO_DE_ENTREGA") == ""){
			console.log("entrou if PRAZO_DE_ENTREGA")
			throw "Necessario Preencher o campo Prazo de Dias para mobilização, disponibilização de máquinas e/ou equipamentos :."; 
		}
		if (form.getValue("CENTRO_DE_CUSTO_ENTREGA") == ""){
			console.log("entrou if CENTRO_DE_CUSTO_ENTREGA")
			throw "Necessario Preencher o campo Local de entrega/execução:"; 
		}
		if (form.getValue("ENDEREÇO_DE_ENTREGA") == ""){
			console.log("entrou if ENDEREÇO_DE_ENTREGA")
			throw "Necessario Preencher o campo Endereço de entrega/execução:"; 
		}
		if (form.getValue("INICIO_VIGENCIA") == ""){
			console.log("entrou if INICIO_VIGENCIA")
			throw "Necessario Preencher o campo Inicio da vigencia:"; 
		}
		if (form.getValue("FIM_VIGENCIA") == ""){
			console.log("entrou if FIM_VIGENCIA")
			throw "Necessario Preencher o campo Fim da vigencia:"; 
		}
		if (form.getValue("QUANTIDADE_DIAS_PARA_MEDICAO") == ""){
			console.log("entrou if QUANTIDADE_DIAS_PARA_MEDICAO")
			throw "Necessario Preencher o campo Quantidades de dias para medição:"; 
		}
		if (form.getValue("PRAZO_DEPAGAMENTO") == ""){
			console.log("entrou if PRAZO_DEPAGAMENTO")
			throw "Necessario Preencher o campo Prazo de pagamento:"; 
		}
		if (form.getValue("GARANTIA") == ""){
			console.log("entrou if GARANTIA")
			throw "Necessario Preencher o campo Garantia:"; 
		}
		if (form.getValue("CRONOGRAMA_SERVICO") == ""){
			console.log("entrou if CRONOGRAMA_SERVICO")
			throw "Necessario Preencher o campo Cronograma dos serviços:"; 
		}
		if (form.getValue("TIPOS_CRONOGRAMA") == ""){
			console.log("entrou if TIPOS_CRONOGRAMA")
			throw "Necessario Preencher o campo Tipos de cronograma:"; 
		}
		if (form.getValue("MATERIAIS_ULTILIZADOS") == ""){
			console.log("entrou if MATERIAIS_ULTILIZADOS")
			throw "Necessario Preencher o campo Material utilizado: "; 
		}
		if (form.getValue("MOBILIZACAO_CLIENTE") == ""){
			console.log("entrou if MOBILIZACAO_CLIENTE")
			throw "Necessario Preencher o campo Mobilização no cliente: "; 
		}
		if (form.getValue("DESMOBILIZACAO_CLIENTE") == ""){
			console.log("entrou if DESMOBILIZACAO_CLIENTE")
			throw "Necessario Preencher o campo Desmobilização no cliente:"; 
		}
		if (form.getValue("REGISTRO_CLT") == ""){
			console.log("entrou if REGISTRO_CLT")
			throw "Necessario Preencher o campo Registro CLT:"; 
		}
		if (form.getValue("MULTAS") == "VAZIO"){
			console.log("entrou if MULTAS_PREVISTAS")
			throw "Necessario Preencher o campo Passivo de multa:"; 
		}
		if (form.getValue("MULTAS_PREVISTAS") == "" && form.getValue("MULTAS") != "SIM" ){
			
			throw "Necessario Preencher o campo Multas previstas na negociação:"; 
		}
		if (form.getValue("PERCENTUAL_RECISAO") == "VAZIO" && form.getValue("MULTAS") != "SIM" ){
			console.log("entrou if PERCENTUAL_RECISAO")
			throw "Necessario Preencher o campo Percentual sobre o faturamento do mês, definido pelas partes quando houver descumprimento das cláusulas contratuais:"; 
		}
		if (form.getValue("DISPONIBILIDADE_FISICA") == "VAZIO"){
			console.log("entrou if DISPONIBILIDADE_FISICA")
			throw "Necessario Preencher o campo Disponibilidade física dos equipamentos:"; 
		}
		if (form.getValue("HIPOTESE_RESCISAO") == ""){
			console.log("entrou if HIPOTESE_RESCISAO")
			throw "Necessario Preencher o campo Hipóteses de rescisão:"; 
		}
		if (form.getValue("PRAZO_RECISAO") == ""){
			console.log("entrou if PRAZO_RECISAO")
			throw "Necessario Preencher o campo Prazo da hipótese definida (em dias):"; 
		}
		if (form.getValue("SUGESTAO_FORNECEDOR") == "VAZIO"){
			console.log("entrou if SUGESTAO_FORNECEDOR")
			throw "Necessario Preencher o campo Sugestão de Fornecedor:"; 
		}
		if (form.getValue("RAZAO_SOCIAL_SUGESTAO") == "" && form.getValue("SUGESTAO_FORNECEDOR") == "SIM" ){
			console.log("entrou if RAZAO_SOCIAL_SUGESTAO" )
			throw "Necessario Preencher o campo Razão Social:"; 
		}
		if (form.getValue("RESPONSAVEL_SUGESTAO") == "" && form.getValue("SUGESTAO_FORNECEDOR") == "SIM"){
			console.log("entrou if RESPONSAVEL_SUGESTAO")
			throw "Necessario Preencher o campo Responsável:"; 
		}
		if (form.getValue("CPNJ_SUGESTAO") == "" && form.getValue("SUGESTAO_FORNECEDOR") == "SIM"){
			console.log("entrou if RESPONSAVEL_SUGESTAO")
			throw "Necessario Preencher o campo CNPJ:"; 
		}
		if (form.getValue("TELEFONE_SUGESTAO") == "" && form.getValue("SUGESTAO_FORNECEDOR") == "SIM"){
			console.log("entrou if TELEFONE_SUGESTAO")
			throw "Necessario Preencher o campo Telefone:"; 
		}
		if (form.getValue("EMAIL_SUGESTAO") == "" && form.getValue("SUGESTAO_FORNECEDOR") == "SIM"){
			console.log("entrou if EMAIL_SUGESTAO")
			throw "Necessario Preencher o E-mail:"; 
		}
		if (form.getValue("JUSTIFICATIVA_SUGESTAO") == "" && form.getValue("SUGESTAO_FORNECEDOR") == "SIM"){
			console.log("entrou if JUSTIFICATIVA_SUGESTAO")
			throw "Necessario Preencher o campo Justificativa de Indicação:"; 
		}
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

			} 
		while (i < pegarUltimoContratos);
		
		if (form.getValue(ITEM_CONTRATOS) == ""){
			console.log("entrou if ITEM_CONTRATOS")
			throw "Necessario Preencher o campo ITEM."; 
		}
		if (form.getValue(DESCROCAO_SERV_CONTRATOS) == ""){
			console.log("entrou if JUSTIFICATIVA_SUGESTAO")
			throw "Necessario Preencher o campo DESCRIÇÃO DO SERVIÇO:."; 
		}
		if (form.getValue(UNIDADE_CONTRATOS) == ""){
			console.log("entrou if JUSTIFICATIVA_SUGESTAO")
			throw "Necessario Preencher o campo UNIDADE:"; 
		}
		if (form.getValue(QUANT_MENSAL_CONTRATOS) == ""){
			console.log("entrou if JUSTIFICATIVA_SUGESTAO")
			throw "Necessario Preencher o campo QUANTIDADE MENSAL:"; 
		}
		if (form.getValue(PRECO_UNID_CONTRATOS) == ""){
			console.log("entrou if JUSTIFICATIVA_SUGESTAO")
			throw "Necessario Preencher o campo PREÇO UNITÁRIO:"; 
		}
		if (form.getValue("TOTAL_QQP_CONTRATOS") == ""){
			console.log("entrou if TOTAL_QQP_CONTRATOS")
			throw "Necessario calcular o QQP:"; 
		}
	
	  }
	}
	 //CAMPOS ADTIVOS
	if (form.getValue("TIPO_SOLICITACAO") == "ADTIVO"){
		console.log("entrou if ADTIVO")
		if (form.getValue("N_CONTRATO_ADTIVOS") == ""){
			console.log("entrou if N_CONTRATO_ADTIVOS")
			throw "Necessario Preencher o campo Nº do contrato:"; 
		}
		if (form.getValue("RAZAO_SOCIAL_ADTIVOS") == ""){
			console.log("entrou if RAZAO_SOCIAL_ADTIVOS")
			throw "Necessario Preencher o campo Razão Social:"; 
		}
		if (form.getValue("CONTATO_ADTIVOS") == ""){
			console.log("entrou if CONTATO_ADTIVOS")
			throw "Necessario Preencher o campo Contato:"; 
		}
		if (form.getValue("TELEFONE_ADTIVOS") == ""){
			console.log("entrou if TELEFONE_ADTIVOS")
			throw "Necessario Preencher o campo Telefone:"; 
		}
		if (form.getValue("DETALHAMENTO_SUGESTAO_ADTIVOS") == ""){
			console.log("entrou if DETALHAMENTO_SUGESTAO")
			throw "Necessario Preencher o campo Detalhamento do Aditivo:"; 
		}
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

			} 
		while (i < pegarUltimoContratos);
		
		if (form.getValue(ITEM_ADTIVOS) == ""){
			console.log("entrou if ITEM_CONTRATOS")
			throw "Necessario Preencher o campo ITEM:"; 
		}
		if (form.getValue(DESCROCAO_SERV_ADTIVOS) == ""){
			console.log("entrou if JUSTIFICATIVA_SUGESTAO")
			throw "Necessario Preencher o campo DESCRIÇÃO DO SERVIÇO:"; 
		}
		if (form.getValue(UNIDADE_ADTIVOS) == ""){
			console.log("entrou if JUSTIFICATIVA_SUGESTAO")
			throw "Necessario Preencher o campo UNIDADE:"; 
		}
		if (form.getValue(QUANT_MENSAL_ADTIVOS) == ""){
			console.log("entrou if JUSTIFICATIVA_SUGESTAO")
			throw "Necessario Preencher o campo QUANTIDADE MENSAL:"; 
		}
		if (form.getValue(PRECO_UNID_ADTIVOS) == ""){
			console.log("entrou if JUSTIFICATIVA_SUGESTAO")
			throw "Necessario Preencher o campo PREÇO UNITÁRIO:"; 
		}
		if (form.getValue("TOTAL_QQP_ADTIVOS") == ""){
			console.log("entrou if TOTAL_QQP_ADTIVOS")
			throw "Necessario calcular o QQP:"; 
		}
		

	}
	//CAMPOS RECISÃO
	if (form.getValue("TIPO_SOLICITACAO") == "RECISAO"){
		console.log("entrou if RECISAO*")
		
		if (form.getValue("N_CONTRATO_RESCISAO") == ""){
			console.log("entrou if N_CONTRATO_RESCISAO")
			throw "Necessario Preencher o campo Nº do contrato:"; 
		}
		if (form.getValue("CONTATO_RESCISAO") == ""){
			console.log("entrou if CONTATO_RESCISAO")
			throw "Necessario Preencher o campo Contato:"; 
		}
		if (form.getValue("TELEFONE_RESCISAO") == ""){
			console.log("entrou if TELEFONE_RESCISAO")
			throw "Necessario Preencher o campo Telefone:"; 
		}
		if (form.getValue("INICIO_VIGENCIA_RESCISAO") == ""){
			console.log("entrou if INICIO_VIGENCIA_RESCISAO")
			throw "Necessario Preencher o campo Fornecedor informado em:"; 
		}
		if (form.getValue("ULTIMO_PAGAMENTO_RESCISAO") == ""){
			console.log("entrou if ULTIMO_PAGAMENTO_RESCISAO")
			throw "Necessario Preencher o campo Data do último pagamento:"; 
		}
		if (form.getValue("VALOR_RESCISAO") == ""){
			console.log("entrou if VALOR_RESCISAO")
			throw "Necessario Preencher o campo valor de multa:"; 
		}
		if (form.getValue("ULTIMA_PRESTACAO_RESCISAO") == ""){
			console.log("entrou if ULTIMA_PRESTACAO_RESCISAO")
			throw "Necessario Preencher o campo ultima prestação de serviços:"; 
		}
		if (form.getValue("DETALHAMENTO_SUGESTAO_RESCISAO") == ""){
			console.log("entrou if DETALHAMENTO_SUGESTAO_RESCISAO")
			throw "Necessario Preencher o campo Detalhamento da Rescisão:"; 
		}
		
	}
	//CAMPOS APROVADO IDERANCA
	if(Now_State == 13){
		if (form.getValue("ESCOPO_APROVADO_LIDERANCA") == "VAZIO"){
		    throw "Necessario Preencher o Escopo aprovado:"; 
		}
	}
	//CAMPOS APROVADO SE CASO FOR NÃO O PROCESSO NAO SEGUIR.
	if(Next_State == 14){
		if (form.getValue("ESCOPO_APROVADO_LIDERANCA") == "NAO"){
		    throw "Favor enviar a atividade para o fim"; 
		}

	}
	//CAMPOS APRESENTACAO COTAÇÃO 
	if(Now_State == 14){
		if (form.getValue("FORNECEDOR1_COTACAO") == "" && form.getValue("TIPO_SOLICITACAO") != "RECISAO"){
		    throw "Necessario Preencher o campo Fornecedor 1:"; 
		}
		if (form.getValue("FORNECEDOR2_COTACAO") == "" && form.getValue("TIPO_SOLICITACAO") != "RECISAO"){
		    throw "Necessario Preencher o campo Fornecedor 2:"; 
		}
		if (form.getValue("FORNECEDOR3_COTACAO") == "" && form.getValue("TIPO_SOLICITACAO") != "RECISAO"){
		    throw "Necessario Preencher o campo Fornecedor 3:"; 
		}
		if (form.getValue("FORNECEDOR_ESCOLHA_COTACAO") == "" && form.getValue("TIPO_SOLICITACAO") != "RECISAO"){
		    throw "Necessario Preencher o campo Fornecedor recomendado:"; 
		}
		if (form.getValue("DADO_BANCARIO_COTACAO") == "" && form.getValue("TIPO_SOLICITACAO") != "RECISAO"){
		    throw "Necessario Preencher o campo Dados bancários:"; 
		}
		if (form.getValue("NOME_RESPONSAVEL_COTACAO") == "" && form.getValue("TIPO_SOLICITACAO") != "RECISAO"){
		    throw "Necessario Preencher o campo Nome:"; 
		} 
		if (form.getValue("TELEFONE_RESPONSAVEL_COTACAO") == "" && form.getValue("TIPO_SOLICITACAO") != "RECISAO"){
		    throw "Necessario Preencher o campo Telefone:"; 
		}
		if (form.getValue("EMAIL_RESPONSAVEL_COTACAO") == "" && form.getValue("TIPO_SOLICITACAO") != "RECISAO"){
		    throw "Necessario Preencher o campo Email:"; 
		}
		if (form.getValue("NOME_TESTEMUNHA_COTACAO1") == "" && form.getValue("TIPO_SOLICITACAO") != "RECISAO"){
		    throw "Necessario Preencher o campo Nome da Testemunha 1:"; 
		}
		if (form.getValue("TELEFONE_TESTEMUNHA_COTACAO1") == "" && form.getValue("TIPO_SOLICITACAO") != "RECISAO"){
		    throw "Necessario Preencher o campo Telefone da Testemunha 1:"; 
		}
		if (form.getValue("EMAIL_TESTEMUNHA_COTACAO1") == "" && form.getValue("TIPO_SOLICITACAO") != "RECISAO"){
		    throw "Necessario Preencher o campo Email da Testemunha 1:"; 
		}
		if (form.getValue("NOME_TESTEMUNHA_COTACAO2") == "" && form.getValue("TIPO_SOLICITACAO") != "RECISAO"){
		    throw "Necessario Preencher o campo Nome da Testemunha 2:"; 
		}
		if (form.getValue("TELEFONE_TESTEMUNHA_COTACAO2") == "" && form.getValue("TIPO_SOLICITACAO") != "RECISAO"){
		    throw "Necessario Preencher o campo Telefone da Testemunha 2:"; 
		}
		if (form.getValue("EMAIL_TESTEMUNHA_COTACAO2") == "" && form.getValue("TIPO_SOLICITACAO") != "RECISAO"){
		    throw "Necessario Preencher o campo Email da Testemunha 2:"; 
		}
	
	}
	//CAMPOS APROVADO LIDERANCA COMPRAS
	if(Now_State == 16){
		if (form.getValue("APROVADO_LIDERANCA_COMPRAS") == "VAZIO"){
		    throw "Necessario Preencher o Escopo aprovado:"; 
		}

		if (form.getValue("APROVADO_LIDERANCA_COMPRAS") == "NAO" && form.getValue("OBS_LIDER_COMP") == ""){
		    throw "Necessario Preencher a Observação liderança:"; 
		}
	}
	//CAMPOS APROVADO SE CASO FOR NÃO O PROCESSO NAO SEGUIR.
	if(Next_State == 34){
		if (form.getValue("ESCOPO_APROVADO_LIDERANCA") == "NAO"){
		    throw "Favor enviar a atividade para o fim"; 
		}
		

	}
	if(Now_State == 34){
		if (form.getValue("APROVADO_SUPERINTENDENCIA") == "VAZIO"){
		    throw "Necessario Preencher o Escopo aprovado:"; 
		}

		if (form.getValue("APROVADO_SUPERINTENDENCIA") == "NAO" && form.getValue("OBS_SUPERINTENDENCIA") == ""){
		    throw "Necessario Preencher a Observação Seuperintendência:"; 
		}
	}
	//CAMPOS APROVADO SE CASO FOR NÃO O PROCESSO NAO SEGUIR.
	if(Next_State == 40){
		if (form.getValue("APROVADO_SUPERINTENDENCIA") == "NAO"){
		    throw "Favor enviar a atividade para o fim"; 
		}

	}
	
	//CAMPOS DE CONTRATOS E JURIDICO
	if(Now_State == 15){
		if (form.getValue("POSSUI_CONTRATO") == "VAZIO"){
		    throw "Necessario Preencher o campo Fornecedor já possui contrato: "; 
		} 
		 
		if (form.getValue("OBS_CONFECCCAO_CONTRATO") == ""){
		    throw "Necessario Preencher o campo Observação compras:"; 
		
		 }

	}
	//CAMPOS APRESENTACAO COTAÇÃO 
	if(Now_State == 17){
		if (form.getValue("OBS_CONTRATO_JURIDICO") == ""){
		    throw "Necessario Preencher o campo Observação jurídico:"; 
		}
		
	}
	 
	 //Criação do contrato no RM
	if(Now_State == 29){
		if (form.getValue("NUMERO_DO_CONTRATO_INTE") == ""){
		    throw "Necessario Preencher o campo Número do contrato:"; 
		}
		if (form.getValue("RAZAO_SOCIAL") == ""){
		    throw "Necessario Preencher o campo Razão social:"; 
		}
		
	}

}