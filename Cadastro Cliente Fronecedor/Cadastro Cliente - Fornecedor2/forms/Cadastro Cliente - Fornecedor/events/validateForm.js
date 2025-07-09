function validateForm(form){
	
	var NumeroPros = getValue("WKNumState");
	var NextPros = getValue("WKNextState");
	var msg = "<hr><h4>Erro:</h4><p>";
	


//================================================================================================================================================================================================================

	if (NumeroPros == 4){
		if (form.getValue("NOME_SOLICITANTE") == ""){
			msg += "Campo Nome do Solicitante é obrigatório.\n";
		}
		if (form.getValue("FONE_SOLICITANTE") == ""){
			msg += "Campo Telefone é obrigatório.\n";
		}
		if (form.getValue("EMAIL_SOLICITANTE") == ""){
			msg += "Campo Email é obrigatório.\n";
		}
		if (form.getValue("NOMECONTATO") == ""){
			msg += "É obrigatório selecionar um contato na Tradimaq.\n";
		}
		if (form.getValue("TIPO_CADASTRO") == "0"){
			msg += "É obrigatório informar o tipo de cadastro desejado.\n";
		}
		if (form.getValue("TIPO_ENTIDADE") == "0"){
			msg += "É obrigatório informar o tipo de entidade à ser cadastrada.\n";
		}
		if (form.getValue("TIPO_CADASTRO") == "2" && form.getValue("CATEGORIAFORNECEDOR") == "0"){
				msg += "Para cadastro do fornecedor é necessário infomar o seu tipo.\n";
		}
		if (form.getValue("TPCLIFOR") == "" && form.getValue("TIPO_CADASTRO") == "Fornecedor"){
			msg += "Para cadastro do fornecedor é necessário infomar o seu tipo.\n";
		}
		if (form.getValue("CATEGORIAFORNECEDOR") == "0" ){
			msg += "Para cadastro do fornecedor é necessário infomar o seu tipo.\n";
		}
		
		if (form.getValue("TIPO_CADASTRO") == "Fornecedor" && form.getValue("TIPO_ENTIDADE") == "Pessoa-Juridica"){	
			
						if (form.getValue("CNPJ_PJ") == ""){
							msg += "Campo CNPJ é obrigatório.\n";
						}
						if (form.getValue("RAZAO_PJ") == ""){
							msg += "Campo Razão Social é obrigatório.\n";
						}
						if (form.getValue("IE_PJ") == "" && form.getValue("IM_PJ") == ""){
							msg += "É obrigatório preencher a IE ou a IM.\n";
						}
						if (form.getValue("EMAILXML_PJ") == ""){
							msg += "Campo Email para XML é obrigatório.\n";
						}
						if (form.getValue("FIXO_PJ") == ""){
							msg += "Campo Nº do Telefone é obrigatório.\n";
						}
						if (form.getValue("EMAIL_PJ") == ""){
							msg += "Campo Email é obrigatório.\n";
						}
						if (form.getValue("NOMECONTATO_PJ") == ""){
							msg += "Campo Nome de Contato é obrigatório.\n";
						}
						if (form.getValue("CEP_PJ") == ""){
							msg += "Campo CEP é obrigatório.\n";
						}
						if (form.getValue("BAIRRO_PJ") == ""){
							msg += "Campo Bairro é obrigatório.\n";
						}
						if (form.getValue("MUNICIPIO_PJ") == ""){
							msg += "Campo Municipio é obrigatório.\n";
						}
						if (form.getValue("ESTADO_PJ") == ""){
							msg += "Campo Estado é obrigatório.\n";
						}
						if (form.getValue("RUA_PJ") == ""){
							msg += "Campo Rua é obrigatório.\n";
						}
						if (form.getValue("NUMERO_PJ") == ""){
							msg += "Campo Número é obrigatório.\n";
						}
						
		} if (form.getValue("TIPO_CADASTRO") == "Fornecedor" && form.getValue("TIPO_ENTIDADE") == "Pessoa-Fisica"){	
			
						if (form.getValue("CPF_PF") == ""){
							msg += "Campo CPF é obrigatório.\n";
						}
						if (form.getValue("NOME_PF") == ""){
							msg += "Campo Nome é obrigatório.\n";
						}
						if (form.getValue("RG_PF") == ""){
							msg += "Campo RG é obrigatório.\n";
						}
						if (form.getValue("ORGAOEMISSOR_PF") == ""){
							msg += "Campo Órgão Emissor é obrigatório.\n";
						}
						if (form.getValue("NASCIMENTO_PF") == ""){
							msg += "Campo Data de Nascimento é obrigatório.\n";
						}
						if (form.getValue("ESTADOCIVIL_PF") == ""){
							msg += "Campo Estado Civil é obrigatório.\n";
						}
						if (form.getValue("DEPENDENTES_PF") == ""){
							msg += "Campo Número de dependentes é obrigatório.\n";
						}
						if (form.getValue("PIS_PF") == "" && form.getValue("TIPO_CADASTRO") == "Fornecedor"){
							msg += "Campo Número do Pis é obrigatório.\n";
						}
						if (form.getValue("CATAUTONOMO_PF") == "" && form.getValue("TIPO_CADASTRO") == "Fornecedor"){
							msg += "Campo Categoria do Autônomo é obrigatório.\n";
						}
						if (form.getValue("CBOAUTONOMO_PF") == "" && form.getValue("TIPO_CADASTRO") == "Fornecedor"){
							msg += "Campo CBO Autônomo é obrigatório.\n";
						}
						if (form.getValue("TELEFONE_PF") == ""){
							msg += "Campo Número de telefone é obrigatório.\n";
						}
						if (form.getValue("EMAILXML_PF") == "" && form.getValue("TIPO_CADASTRO") != "Colaborador"){
							msg += "Campo Email para XML é obrigatório.\n";
						}
						if (form.getValue("EMAIL_PF") == ""){
							msg += "Campo Email é obrigatório.\n";
						}
						if (form.getValue("CEP_PF") == ""){
							msg += "Campo CEP é obrigatório.\n";
						}
						if (form.getValue("BAIRRO_PF") == ""){
							msg += "Campo Bairro é obrigatório.\n";
						}
						if (form.getValue("MUNICIPIO_PF") == ""){
							msg += "Campo Municipio é obrigatório.\n";
						}
						if (form.getValue("ESTADO_PF") == ""){
							msg += "Campo Estado é obrigatório.\n";
						}
						if (form.getValue("RUA_PF") == ""){
							msg += "Campo Rua é obrigatório.\n";
						}
						if (form.getValue("NUMERO_PF") == ""){
							msg += "Campo Número é obrigatório.\n";
						}
		
		} if (form.getValue("TIPO_CADASTRO") == "Cliente" && form.getValue("TIPO_ENTIDADE") == "Pessoa-Juridica"){	

						if (form.getValue("CNPJ_PJ") == ""){
							msg += "Campo CNPJ é obrigatório.\n";
						}
						if (form.getValue("RAZAO_PJ") == ""){
							msg += "Campo Razão Social é obrigatório.\n";
						}
						if (form.getValue("IE_PJ") == "" && form.getValue("IM_PJ") == ""){
							msg += "É obrigatório preencher a IE ou a IM.\n";
						}
						if (form.getValue("EMAILXML_PJ") == ""){
							msg += "Campo Email para XML é obrigatório.\n";
						}
						if (form.getValue("FIXO_PJ") == ""){
							msg += "Campo Nº do Telefone é obrigatório.\n";
						}
						if (form.getValue("NOMECONTATO_PJ") == ""){
							msg += "Campo Nome de Contato é obrigatório.\n";
						}
						if (form.getValue("CEP_PJ") == ""){
							msg += "Campo CEP é obrigatório.\n";
						}
						if (form.getValue("BAIRRO_PJ") == ""){
							msg += "Campo Bairro é obrigatório.\n";
						}
						if (form.getValue("MUNICIPIO_PJ") == ""){
							msg += "Campo Municipio é obrigatório.\n";
						}
						if (form.getValue("ESTADO_PJ") == ""){
							msg += "Campo Estado é obrigatório.\n";
						}
						if (form.getValue("RUA_PJ") == ""){
							msg += "Campo Rua é obrigatório.\n";
						}
						if (form.getValue("NUMERO_PJ") == ""){
							msg += "Campo Número é obrigatório.\n";
						}
						if (form.getValue("NOMEREFERENCIA_PJ") == ""){
							msg += "Campo Nome da empresa de referência é obrigatório.\n";
						}
						if (form.getValue("TELEFONEREFERENCIA_PJ") == ""){
							msg += "Campo Telefone da empresa de referência é obrigatório.\n";
						}
						if (form.getValue("CONTATOREFERENCIA_PJ") == ""){
							msg += "Campo Nome de Contato da empresa de referência é obrigatório.\n";
						}
						if (form.getValue("CREDITODESEJADO_PJ") == ""){
							msg += "Campo Crédito Desejado é obrigatório.\n";
						}
						if (form.getValue("PAGAMENTODESEJADO_PJ") == ""){
							msg += "Campo Condição de Pagamenteo Desejada é obrigatório.\n";
						}
						if (form.getValue("FORMAPAGAMENTO_PJ") == "0"){
							msg += "Campo Forma de pagamento é obrigatório.\n";
						}
						if (form.getValue("CHAVEPIX_PJ") == ""){
							msg += "Campo Chave PIX e obrigatorio é obrigatório.\n";
						}
						
		}  if (form.getValue("TIPO_CADASTRO") == "Cliente" && form.getValue("TIPO_ENTIDADE") == "Pessoa-Fisica"){

						if (form.getValue("CPF_PF") == ""){
							msg += "Campo CPF é obrigatório.\n";
						}
						if (form.getValue("NOME_PF") == ""){
							msg += "Campo Nome é obrigatório.\n";
						}
						if (form.getValue("RG_PF") == ""){
							msg += "Campo RG é obrigatório.\n";
						}
						if (form.getValue("ORGAOEMISSOR_PF") == ""){
							msg += "Campo Órgão Emissor é obrigatório.\n";
						}
						if (form.getValue("ESTADOCIVIL_PF") == ""){
							msg += "Campo Estado Civil é obrigatório.\n";
						}
						if (form.getValue("DEPENDENTES_PF") == ""){
							msg += "Campo Número de dependentes é obrigatório.\n";
						}
						if (form.getValue("PIS_PF") == "" && form.getValue("TIPO_CADASTRO") == "Fornecedor"){
							msg += "Campo Número do Pis é obrigatório.\n";
						}
						if (form.getValue("CATAUTONOMO_PF") == "" && form.getValue("TIPO_CADASTRO") == "Fornecedor"){
							msg += "Campo Categoria do Autônomo é obrigatório.\n";
						}
						if (form.getValue("CBOAUTONOMO_PF") == "" && form.getValue("TIPO_CADASTRO") == "Fornecedor"){
							msg += "Campo CBO Autônomo é obrigatório.\n";
						}
						if (form.getValue("TELEFONE_PF") == ""){
							msg += "Campo Número de telefone é obrigatório.\n";
						}
						if (form.getValue("EMAILXML_PF") == "" && form.getValue("TIPO_CADASTRO") != "Colaborador"){
							msg += "Campo Email para XML é obrigatório.\n";
						}
						if (form.getValue("CEP_PF") == ""){
							msg += "Campo CEP é obrigatório.\n";
						}
						if (form.getValue("BAIRRO_PF") == ""){
							msg += "Campo Bairro é obrigatório.\n";
						}
						if (form.getValue("MUNICIPIO_PF") == ""){
							msg += "Campo Municipio é obrigatório.\n";
						}
						if (form.getValue("ESTADO_PF") == ""){
							msg += "Campo Estado é obrigatório.\n";
						}
						if (form.getValue("RUA_PF") == ""){
							msg += "Campo Rua é obrigatório.\n";
						}
						if (form.getValue("NUMERO_PF") == ""){
							msg += "Campo Número é obrigatório.\n";
						}
						if (form.getValue("NOMEREFERENCIA_PF") == "" && form.getValue("TIPO_CADASTRO") != "Colaborador"){
							msg += "Campo Nome da empresa de referência é obrigatório.\n";
						}
						if (form.getValue("TELEFONEREFERENCIA_PF") == "" && form.getValue("TIPO_CADASTRO") != "Colaborador"){
							msg += "Campo Telefone da empresa de referência é obrigatório.\n";
						}
						if (form.getValue("CONTATOREFERENCIA_PF") == "" && form.getValue("TIPO_CADASTRO") != "Colaborador"){
							msg += "Campo Nome de Contato da empresa de referência é obrigatório.\n";
						}
						if (form.getValue("CREDITODESEJADO_PF") == ""){
							msg += "Campo Crédito Desejado é obrigatório.\n";
						}
						if (form.getValue("PAGAMENTODESEJADO_PF") == ""){
							msg += "Campo Condição de Pagamenteo Desejada é obrigatório.\n";
						}	
						if (form.getValue("FORMAPAGAMENTO_PF") == "0"){
						msg += "Campo Forma de pagamento é obrigatório.\n";
						}
						if (form.getValue("TIPODACHAVE_PF") == ""){
							msg += "Campo Tipo de Chave e obrigatorio é obrigatório.\n";
						}
						if (form.getValue("CHAVEPIX_PF") == ""){
							msg += "Campo Chave PIX e obrigatorio é obrigatório.\n";
						}
		
			} if (form.getValue("TIPO_CADASTRO") == "Colaborador" ){	
								
						if (form.getValue("CPF_PF") == ""){
							msg += "Campo CPF é obrigatório.\n";
						}
						if (form.getValue("NOME_PF") == ""){
							msg += "Campo Nome é obrigatório.\n";
						}
						if (form.getValue("RG_PF") == ""){
							msg += "Campo RG é obrigatório.\n";
						}
						if (form.getValue("ORGAOEMISSOR_PF") == ""){
							msg += "Campo Órgão Emissor é obrigatório.\n";
						}
						if (form.getValue("NASCIMENTO_PF") == ""){
							msg += "Campo Data de Nascimento é obrigatório.\n";
						}
						if (form.getValue("ESTADOCIVIL_PF") == ""){
							msg += "Campo Estado Civil é obrigatório.\n";
						}
						if (form.getValue("DEPENDENTES_PF") == ""){
							msg += "Campo Número de dependentes é obrigatório.\n";
						}
						if (form.getValue("TELEFONE_PF") == ""){
							msg += "Campo Número de telefone é obrigatório.\n";
						}
						if (form.getValue("EMAIL_PF") == ""){
							msg += "Campo Email é obrigatório.\n";
						}
						if (form.getValue("CEP_PF") == ""){
							msg += "Campo CEP é obrigatório.\n";
						}
						if (form.getValue("BAIRRO_PF") == ""){
							msg += "Campo Bairro é obrigatório.\n";
						}
						if (form.getValue("MUNICIPIO_PF") == ""){
							msg += "Campo Municipio é obrigatório.\n";
						}
						if (form.getValue("ESTADO_PF") == ""){
							msg += "Campo Estado é obrigatório.\n";
						}
						if (form.getValue("RUA_PF") == ""){
							msg += "Campo Rua é obrigatório.\n";
						}
						if (form.getValue("NUMERO_PF") == ""){
							msg += "Campo Número é obrigatório.\n";
						
						}
						if (form.getValue("PAGAMENTODESEJADO_PF") == "0"){
							msg += "Campo Forma de Pagamenteo é obrigatório.\n";
						}
			}
	}
//========================================================================================================================================================================================================
	if (NumeroPros == 24){
		if (form.getValue("FINANCEIROAPROVA") == "0"){
			msg += "Favor informar se o crédito do cliente foi aprovado ou não.\n";
		}
		if (form.getValue("FINANCEIROAPROVA") == "Aprovado_com_Ressalva" && form.getValue("FINANCEIROLIMITE") == ""){
			msg += "Favor informar o Limíte de Crédito.\n";
		}
		if (form.getValue("FINANCEIROAPROVA") == "Aprovado_com_Ressalva" || form.getValue("FINANCEIROAPROVA") == "Reprovado"){
			if (form.getValue("FINANCEIROOBS") == ""){ msg += "Favor dar uma justificativa para a decisão: "+form.getValue("FINANCEIROAPROVA").value+"\n";}
		}
		if (NextPros == 14 && form.getValue("FINANCEIROAPROVA") == "Reprovado"){
			throw "Favor enviar a solicitação para o fim ou volta-lo para o solicitante, já que ele foi reprovado na avaliação.";
		}
	}
//===========================================================================================================================================================================================================
	if (NumeroPros == 12 || NumeroPros == 14 || NumeroPros == 27){
		if (form.getValue("CADASTRODADOS") == "0"){
			msg += "Favor selecionar se a atividade de cadastro foi realizada.\n";
		}
		
		if (NextPros == 39 && form.getValue("CADASTRODADOS") == "Nao_Realizado" ){
			
			
			msg += "Você esta tentando cadastrar um CLI/FOR Reprovado.\n";
		}
		
		if (NextPros == 42 && form.getValue("CADASTRODADOS") == "Realizado" ){
			
			msg += "Você esta tentando finalizar uma SL aprovada para cadastro.\n";
			
		}
	}
//==============================================================================================================================================================================================================
	if (NumeroPros == 36){
		if (form.getValue("COMPRASAPROVA") == "0"){
			msg += "Favor selecionar se a atividade de cadastro foi realizada.\n";
		}
		if (form.getValue("COMPRASAPROVA") == "Reprovado" && form.getValue("OBSCOMPRAS") == "" ){
			msg += "Favor informar o motivo da reprovação no campo observação /For.\n";
		}
	}		
//==============================================================================================================================================================================================================
	if (msg != "<hr><h4>Erro:</h4><p>"){
		
		msg += "</p><hr>";
		throw msg;		
	}
}