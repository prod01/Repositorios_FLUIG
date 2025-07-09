function validateForm(form){
	
	var numeroPros = getValue("WKNumState");
	var nextPros = getValue("WKNextState");
	var isTransfer = getValue("WKIsTransfer");
		
	
	if (numeroPros == "4" || numeroPros == "0"){
		//============================ Impede que notas marcadas como NFex sejam enviadas diretamente para o fiscal =====================================
		if (form.getValue("TIPONOTA") == "NFEX" && nextPros == "56" && form.getValue("CB_Diretoria") != "1"){
			throw "<hr><h4>Erro:</h4><p style='font-size:20px;color:red;'> Notas do tipo NFex devem ir para aprovação do Gestor! \n</p>" +
					"<p>Direcione o formulário para a atividade ''Aprovação de NFex''</p>" +
					"<p>Motivo: Data de postagem superior a 7 (sete) dias.</p><hr>"
		}
		//============================ Impede que NFex já aprovadas voltem para a diretoria =====================================
		if (form.getValue("TIPONOTA") == "NFEX" && nextPros != "56" && form.getValue("CB_Diretoria") == "1"){
			throw "<hr><h4>Erro:</h4><p style='font-size:20px;color:red;'> Esta NFEX já foi aprovada! \n</p>" +
					"<p>Direcione o formulário para a atividade ''Triagem Fiscal''</p>" +
					"<p>Motivo: Esta nota ja passou pelo processo de aprovação.</p><hr>"
		}
		//======================================== Impede que notas não NFex vão para o Gestor por engano ================================================
		if (form.getValue("TIPONOTA") == "NORMAL" && nextPros == "11"){
			throw "<hr><h4>Erro:</h4><p style='font-size:18px;'> Notas do tipo Normal não precisam de aprovação do Gestor! \n</p><hr>"
		}
	}
	//================================ Impede que notas NFex não aprovadas pelo gestor vão para a diretoria ==========================================
	if (numeroPros == "11" && form.getValue("CB_Gestor") == "2" && nextPros == "13"){
		throw "<hr><h4>Erro:</h4><p style='font-size:20px;color:red;'> Não é possível enviar a nota para aprovação da diretoria se o Gestor não aprovou! \n</p>"
	}
	//================================ Impede que notas NFex aprovadas pelo gestor vão para a correção ==========================================
	if (numeroPros == "11" && form.getValue("CB_Gestor") == "1" && nextPros != "76"){
		throw "<hr><h4>Erro:</h4><p style='font-size:20px;color:red;'> Não é possível enviar a nota para correção se o Gestor aprovou! \n</p>"
	}
	//================================== Impede que notas NFex não aprovadas pela diretoria vão para o fiscal ========================================
	if ((numeroPros == "13" || numeroPros == "79" || numeroPros == "81") && form.getValue("CB_Diretoria") != "1" && (nextPros != "72" && nextPros != "4" && nextPros != "81")){  
		throw "<hr><h4>Erro:</h4><p style='font-size:20px;color:red;'> Não é possível enviar a nota para o fiscal sem aprovação! \n</p>"
	}
	//=========================== Impede que notas NFex aprovadas pela diretoria vão para correção ou de volta pro gestor =============================
	if ((numeroPros == "13" || numeroPros == "79" || numeroPros == "81") && form.getValue("CB_Diretoria") != "2" && nextPros == "72"){
		throw "<hr><h4>Erro:</h4><p style='font-size:20px;color:red;'> Não é possível enviar a nota para a gerência fiscal se foi aprovada! \n</p>"
	}
	
	
	//================================================== Preenchimento da menságem de Erro ===========================================================
	var msg = "<hr><h4>Erro:</h4><p>";

	if (numeroPros == "4" || numeroPros == "0"){
		if (form.getValue("TIPONOTA") == "NFEX" && form.getValue("TA_JustificaAtraso") == ""){
				msg += "Campo Justificativa de Atraso está vazio.\n";
		}
		if (form.getValue("TX_DataEmissao") == ""){
			msg += "Campo Data de Emissão está vazio.\n";
		}
		if (form.getValue("TX_DataRecebimento") == ""){
			msg += "Campo Data de Recebimento está vazio.\n";
		}
//		if (form.getValue("TX_NumeroOcNota") == ""){
//			msg += "Campo Número da OC da Nota está vazio.\n";
//		}
		if (form.getValue("ZOOM_LocalRecebimento") == ""){
			msg += "Campo Local de Recebimento está vazio.\n";
		}
		if (form.getValue("TX_NumeroNota") == ""){
			msg += "Campo Número da Nota está vazio.\n";
		}
		if (form.getValue("CB_Boleto") == "1" && form.getValue("TX_DataVencimentoBoleto") == ""){
			msg += "Campo Vencimento do Boleto é obrigatório.\n";
		}
		if (form.getValue("CB_Boleto") == "1" && form.getValue("TX_DataVencimentoBoleto") != "" && form.getValue("DENTRODOPRAZOPAGAMENTO") == "FORADOPRAZO"){
			msg += "Este boleto está fora do Prazo de pagamento. Favor prorrogar o boleto.\n";
		}
//		if (form.getValue("CB_Cte") == "1" && form.getValue("TX_NumeroOcCte") == ""){
//			msg += "Campo Número da OC do CT-e está vazio.\n";
//		}
	}
	//==============================================================================================================================================
	if (numeroPros == "11"){
		if (form.getValue("CB_Gestor") == "0"){
			msg += "Favor aprovar ou não o envio da nota para a Diretoria.\n";
		}
		if (form.getValue("CB_Gestor") == "2" && form.getValue("TA_JustificaAprovGestor") == ""){
			msg += "Favor justificar a negação do envio da nota para a Diretoria.\n";
		}
		if (form.getValue("DENTRO_PRAZO_APROV_GEST") == "FORADOPRAZO" && nextPros == "76" ){
			msg += "Boleto fora do prazo de pagamento favor realizar a prorrogação do boleto.\n";
		}
	}
	//==============================================================================================================================================
	if (numeroPros == "13"){
		if (form.getValue("CB_Diretoria") == "0"){
			msg += "Favor aprovar ou não o envio da nota para o Fiscal.\n";
		}
		if (form.getValue("CB_Diretoria") == "2" && form.getValue("TA_JustificaAprovDiretoria") == ""){
			msg += "Favor justificar a negação do envio da nota para o Fiscal.\n";
		}
	}
	//==============================================================================================================================================
	if (nextPros == "43" || nextPros == "66"){
		if (form.getValue("CB_TipoNota") == "0"){
			msg += "Favor Selecionar o tipo de nota.\n";
		}
	}
	//==============================================================================================================================================
	if (numeroPros == "43"){
		if (form.getValue("TA_JustificaCompras") == ""){
			msg += "Favor preencher o campo Justificativa do Setor de Compras.\n";
		}
	}
	//==============================================================================================================================================
	if (nextPros == "18"){
		if (form.getValue("TX_IDMOV") == ""){
			msg += "Não foi informado o IDMOV.\n";
		}
		if (form.getValue("TX_ChapaLogado") == "Elisson Rodrigues da Cruz"){
			msg += "Você não tem permissão para finalizar esse processo.\n";
		}
	}
	//==============================================================================================================================================
	if (msg != "<hr><h4>Erro:</h4><p>"){
		
		msg += "</p><hr>";
		
		throw msg;
		
	}
	
}