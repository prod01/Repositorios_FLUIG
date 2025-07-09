function beforeTaskSave(colleagueId,nextSequenceId,userList){
	log.info("test entrou   : ")
	var cadastro = hAPI.getCardValue("TIPO_CADASTRO")
	var TIPODADOSBANCRIOS_PF = hAPI.getCardValue("TIPODADOSBANCRIOS_PF")
	var dadosbancariospj =  hAPI.getCardValue("TIPODADOSBANCRIOS_PJ")
	var dadosbancariospf =  hAPI.getCardValue("TIPODADOSBANCRIOS_PF")
//	var NumeroPros = getValue("WKNumState");
//	var NextPros = getValue("WKNextState");
	var Entidade = hAPI.getCardValue("TIPO_ENTIDADE")
	var tipoChave_PJ = hAPI.getCardValue("TIPODACHAVE_PJ")
	var tipoChave_PF = hAPI.getCardValue("TIPODACHAVE_PF")
	
	var NumeroPros = getValue("WKNumState");
	var NextPros = getValue("WKNextState");
	//var numState = getValue("WKNumState");
  
    
//==================================================================================================================================================================================================================================================================================================
	if (NumeroPros == "10" && hAPI.listAttachments().size() < 2 && cadastro== "Fornecedor" && dadosbancariospj == "DADOS_BANCARIOS" || NumeroPros == "10" && hAPI.listAttachments().size() < 2 && cadastro== "Fornecedor" && dadosbancariospf == "DADOS_BANCARIOS"){
		throw "<br/><br/><strong>É obrigatório o anexo dos Dados Bancarios nesta Atividade.</strong><br/>";
	    }
	    if (NumeroPros == "10" && hAPI.listAttachments().size() < 1 && cadastro!= "Fornecedor"){
	    	throw "<br/><br/><strong>É obrigatório o anexo dos Dados Bancarios nesta Atividade.</strong><br/>";
	    } 
		log.info("test entrou  1 : ")
//==================================================================================================================================================================================================================================================================================================
	    // Validação CNPJ
	    var text = hAPI.getCardValue("CHAVEPIX_PJ")
    	var CHAVEPIX_PJ = text.split("/");
    	var text = hAPI.getCardValue("CNPJ_PJ")
    	var CNPJ_PJ = text.split("/");
	    
	    if (NumeroPros == "4" && NextPros=="10" && Entidade == "Pessoa-Juridica" && tipoChave_PJ == "CNPJ"){
	    	if (CHAVEPIX_PJ[0] != CNPJ_PJ[0]){
	    		throw "<hr><h4>Erro:</h4><p style='font-size:20px;color:red;font-weight: bold;'> A chave pix não é correspondente ao CNPJ da empresa! \n</p>";
		    }    
	    }   
		log.info("test entrou 2  : ")
//==================================================================================================================================================================================================================================================================================================
	    // Validação CPF	    
	    if (NumeroPros == "4" && NextPros == "10" && Entidade == "Pessoa-Fisica" && tipoChave_PF == "CPF"){
	    	if (hAPI.getCardValue("CPF_PF") != hAPI.getCardValue("CPF_PF") ){
				throw "<hr><h4>Erro:</h4><p style='font-size:20px;color:red;font-weight: bold;'> A chave pix não é correspondente ao CPF da pessoa! \n</p>";
	    	}    
	    }	    	    
//==================================================================================================================================================================================================================================================================================================	    
	    log.info("teste 01  : ")
	      log.info("teste 01  : "+ NumeroPros)
	        log.info("teste 01  : " + NextPros)
	 
	    if ((NumeroPros == "14" && NextPros=="39") || (NumeroPros == "27" && NextPros=="39") ){
	    
	    	
	    	if (hAPI.getCardValue("TIPO_CADASTRO") == "Colaborador"){
	    		log.info("Colaborador : ")
	    		xmlColaborador ()
	    	}else {
			    	
			    	if (hAPI.getCardValue("TIPO_ENTIDADE") == "Pessoa-Fisica"){
			    		log.info("Pessoa-Fisica : ")
			    		xmlPessoaFisica()	    	
			    	}
			    	if (hAPI.getCardValue("TIPO_ENTIDADE") == "Pessoa-Juridica"){
			    		log.info("Pessoa-Juridica : ")
			    		xmlPessoaJuridica()
			    	}
	    	}	
	    	    
	    }
	    log.info("teste 02  : ")
}	 
//==================================================================================================================================================================================================================================================================================================	    
function getWebService(usuario, senha){
	
	var nomeServico = "wsDataServer"		
	var caminhoServico = "com.totvs.WsDataServer"		
	var dataServerService = ServiceManager.getServiceInstance(nomeServico);
	
	if (dataServerService == null){
		throw "Erro ao encontrar serviço!";
	}
	var locator = dataServerService.instantiate(caminhoServico);

	if (locator == null){
		throw "Erro ao instanciar serviço!";
	}	
	var service = locator.getRMIwsDataServer();

	if (service == null){
		throw "Erro instancia incorreta ou com problemas!";
	}	
	var serviceHelper = dataServerService.getBean();

	if (serviceHelper == null){
		throw "Erro no serviço de autenticação!";
	}
	var authService = serviceHelper.getBasicAuthenticatedClient(service, "com.totvs.IwsDataServer", usuario, senha)
	if (authService == null){
		throw "Erro ao autenticar dataserver!";
	}	
	return authService;	
}
//==================================================================================================================================================================================================================================================================================================	    
function xmlPessoaFisica (){
	
	var CODMUNICIPIO = consultaEstado()
	var nomeDataserver = "FinCFODataBR"	
	var user = DatasetFactory.getDataset("ds_connector", null, null, null);	
	var usuario = user.getValue(0, "INTEGRADOR")
	var senha = user.getValue(0, "SENHA")
	var email = user.getValue(0, "EMAIL")	
	var login = fluigAPI.getUserService().getCurrent().getLogin();
	var primeiraLetra = login.substring(0, 1).toUpperCase();
	var restoDaString = login.slice(1);
	var codusuario = primeiraLetra + restoDaString;
	var contexto = "codcoligada=1;codusuario="+codusuario+";codsistema=F"		
	var authService = getWebService(usuario, senha)	
	var pagrec = ""
		
		if (hAPI.getCardValue("TIPO_CADASTRO") == "Cliente" ) {
			log.info("TIPO_CADASTRO: Cliente")
			pagrec = 1
		}
		if (hAPI.getCardValue("TIPO_CADASTRO" ) != "Cliente"){
			log.info("TIPO_CADASTRO: Fornecedor")
			pagrec = 2	
		}
	var DATA = hAPI.getCardValue("NASCIMENTO_PF")    
    var hor =  "00:00:00";
	var d = DATA.split("/")[0];
	var m = DATA.split("/")[1];
	var a = DATA.split("/")[2];
	var dia = a + "-" + m + "-" + d;
    var dataFull = dia + "T"  + hor;	
	var xml = ""+
	"<FinCFOBR>"+
 		"<FCFO>"+
	 		"<CODCOLIGADA>0</CODCOLIGADA>"+
	 		"<CODCFO>-1</CODCFO>"+
		    "<NOMEFANTASIA>" + hAPI.getCardValue("NOME_PF").replace("&", "e") + "</NOMEFANTASIA>"+
		    "<NOME>" + hAPI.getCardValue("NOME_PF").replace("&", "e")+ "</NOME>"+
		    "<CGCCFO>" + hAPI.getCardValue("CPF_PF")+ "</CGCCFO>"+
		    "<INSCRESTADUAL>" + hAPI.getCardValue("IE_PF")+ "</INSCRESTADUAL>"+
		    "<PAGREC>" + pagrec + "</PAGREC>"+
		    "<RUA>" + hAPI.getCardValue("RUA_PF")+ "</RUA>"+
		    "<NUMERO>" + hAPI.getCardValue("NUMERO_PF")+ "</NUMERO>"+
		    "<COMPLEMENTO>" + hAPI.getCardValue("COMPLEMENTO_PF")+ "</COMPLEMENTO>"+
		    "<BAIRRO>" + hAPI.getCardValue("BAIRRO_PF")+ "</BAIRRO>"+
		    "<CIDADE>" + hAPI.getCardValue("MUNICIPIO_PF")+ "</CIDADE>"+
		    "<CODETD>" + hAPI.getCardValue("ESTADO_PF")+ "</CODETD>"+
		    "<CEP>" + hAPI.getCardValue("CEP_PF")+ "</CEP>"+
		    "<TELEFONE>" + hAPI.getCardValue("TELEFONE_PF")+ "</TELEFONE>"+
		    "<RUAPGTO>" + hAPI.getCardValue("RUA_PF")+ "</RUAPGTO>"+
		    "<NUMEROPGTO>" + hAPI.getCardValue("NUMERO_PF")+ "</NUMEROPGTO>"+
		    "<BAIRROPGTO>" + hAPI.getCardValue("BAIRRO_PF")+ "</BAIRROPGTO>"+
		    "<COMPLEMENTOPGTO>" + hAPI.getCardValue("COMPLEMENTO_PF")+ "</COMPLEMENTOPGTO>"+
		    "<CIDADEPGTO>" + hAPI.getCardValue("MUNICIPIO_PF")+ "</CIDADEPGTO>"+
		    "<CODETDPGTO>" + hAPI.getCardValue("ESTADO_PF")+ "</CODETDPGTO>"+
		    "<CEPPGTO>" + hAPI.getCardValue("CEP_PF")+ "</CEPPGTO>"+
		    "<TELEFONEPGTO>" + hAPI.getCardValue("TELEFONE_PF")+ "</TELEFONEPGTO>"+
		    "<RUAENTREGA>" + hAPI.getCardValue("RUA_PF")+ "</RUAENTREGA>"+
		    "<NUMEROENTREGA>" + hAPI.getCardValue("NUMERO_PF")+ "</NUMEROENTREGA>"+
		    "<COMPLEMENTREGA>" + hAPI.getCardValue("COMPLEMENTO_PF")+ "</COMPLEMENTREGA>"+
		    "<BAIRROENTREGA>" + hAPI.getCardValue("BAIRRO_PF")+ "</BAIRROENTREGA>"+
		    "<CIDADEENTREGA>" + hAPI.getCardValue("MUNICIPIO_PF")+ "</CIDADEENTREGA>"+
		    "<CODETDENTREGA>" + hAPI.getCardValue("ESTADO_PF")+ "</CODETDENTREGA>"+
		    "<CEPENTREGA>" + hAPI.getCardValue("CEP_PF")+ "</CEPENTREGA>"+
		    "<TELEFONEENTREGA>" + hAPI.getCardValue("TELEFONE_PF")+ "</TELEFONEENTREGA>"+
		    "<TELEX>"+ hAPI.getCardValue("TELEFONE_PF")+ "</TELEX>"+     
		    "<EMAIL>" + hAPI.getCardValue("EMAILXML_PF")+ "</EMAIL>"+
		    "<CONTATO>" + hAPI.getCardValue("CONTATOREFERENCIA_PF")+ "</CONTATO>"+
		    "<CODTCF>008</CODTCF>"+
		    "<ATIVO>0</ATIVO>"+
		    "<LIMITECREDITO>"+ hAPI.getCardValue("FINANCEIROLIMITE")+"</LIMITECREDITO>"+
		    "<CODCOLTCF>0</CODCOLTCF>"+
		    "<CODMUNICIPIO>" + CODMUNICIPIO + "</CODMUNICIPIO>"+
		    "<PESSOAFISOUJUR>F</PESSOAFISOUJUR>"+
		    "<CONTATOPGTO>" + hAPI.getCardValue("CONTATOREFERENCIA_PF")+ "</CONTATOPGTO>"+
		    "<CONTATOENTREGA>" + hAPI.getCardValue("CONTATOREFERENCIA_PF")+ "</CONTATOENTREGA>"+
		    "<CIDENTIDADE>" + hAPI.getCardValue("RG_PF")+ "</CIDENTIDADE>"+
		    "<CI_ORGAO>" + hAPI.getCardValue("ORGAOEMISSOR_PF")+ "</CI_ORGAO>"+
		    "<CI_UF>" + hAPI.getCardValue("ESTADO_PF")+ "</CI_UF>"+
		    "<EMAILENTREGA>" + hAPI.getCardValue("EMAIL_PF")+ "</EMAILENTREGA>"+
		    "<CONTATOENTREGA>" + hAPI.getCardValue("NOME_PF")+ "</CONTATOENTREGA>"+
		    "<EMAILPGTO>" + hAPI.getCardValue("EMAILXML_PF")+ "</EMAILPGTO>"+
		    "<CONTATOPGTO>" + hAPI.getCardValue("NOME_PF")+ "</CONTATOPGTO>"+
		    "<NUMDEPENDENTES>" + hAPI.getCardValue("DEPENDENTES_PF")+ "</NUMDEPENDENTES>"+
		    "<DTNASCIMENTO>" +  dataFull + "</DTNASCIMENTO>"+
		    "<ESTADOCIVIL>" + hAPI.getCardValue("ESTADOCIVIL_PF")+ "</ESTADOCIVIL>"+
		    "<CODMUNICIPIOPGTO>" + CODMUNICIPIO + "</CODMUNICIPIOPGTO>"+
		    "<CODMUNICIPIOENTREGA>" + CODMUNICIPIO + "</CODMUNICIPIOENTREGA>"+
		    "<CATEGORIAAUTONOMO>"+ hAPI.getCardValue("CATAUTONOMO_PF")+"</CATEGORIAAUTONOMO>"+
		    "<CBOAUTONOMO>"+ hAPI.getCardValue("CBOAUTONOMO_PF")+"</CBOAUTONOMO>"+
		    "<CIAUTONOMO>"+ hAPI.getCardValue("PIS_PF")+"</CIAUTONOMO>"+
		    "<TIPORUA>6</TIPORUA>"+
		    "<TIPOBAIRRO>1</TIPOBAIRRO>"+
		    "<TIPORUAPGTO>6</TIPORUAPGTO>"+
		    "<TIPOBAIRROPGTO>1</TIPOBAIRROPGTO>"+
		    "<TIPORUAENTREGA>6</TIPORUAENTREGA>"+
		    "<TIPOBAIRROENTREGA>1</TIPOBAIRROENTREGA>"+
		    "<IDPAIS>1</IDPAIS>"+
		    "<IDPAISPGTO>1</IDPAISPGTO>"+
		    "<IDPAISENTREGA>1</IDPAISENTREGA>"+
		    "<NACIONALIDADE>0</NACIONALIDADE>"+
		    "<INDNATRET>03</INDNATRET>"+
		    "<CODCFOCOLINTEGRACAO>0</CODCFOCOLINTEGRACAO>"+
		"</FCFO>"+
		"<FCFOCOMPL>"+
			    "<CODCOLIGADA>0</CODCOLIGADA>"+
			    "<CODCFO>-1</CODCFO>"+
			    "<RAMOATIVIDADE>"+ hAPI.getCardValue("TPCLIFOR").split("-")[0] + "</RAMOATIVIDADE>"+
			    "<SL_FLUIG>" + getValue("WKNumProces")+ "</SL_FLUIG>"+
	    "</FCFOCOMPL>"+
"</FinCFOBR>"

		log.error("xml: ")
		log.error(xml)
			
		var result = new String( authService.saveRecord(nomeDataserver, xml, contexto) );
		
		if (result.split(";")[0] != "0"){
			throw "ERRO AO CADASTRAR O CLI/FOR\n\n"+result.split("=")[0]+"\n\n"
		}
		hAPI.setCardValue("CADASTROCLIFOR", result.split(";")[1] )	
		}
//==================================================================================================================================================================================================================================================================================================	    
function xmlPessoaJuridica (){
	
	log.info("Pessoa-Juridica : ")
	
	var CODMUNICIPIO = consultaEstado()
	var nomeDataserver = "FinCFODataBR"
	var user = DatasetFactory.getDataset("ds_connector", null, null, null);	
	var usuario = user.getValue(0, "INTEGRADOR")
	var senha = user.getValue(0, "SENHA")
	var email = user.getValue(0, "EMAIL")	
	var login = fluigAPI.getUserService().getCurrent().getLogin();
	var primeiraLetra = login.substring(0, 1).toUpperCase();
	var restoDaString = login.slice(1);
	var codusuario = primeiraLetra + restoDaString;	
	var contexto = "codcoligada=1;codusuario="+codusuario+";codsistema=F"
	var authService = getWebService(usuario, senha)	
	var pagrec = ""
	
	if (hAPI.getCardValue("TIPO_CADASTRO") == "Cliente" ) {
		log.info("TIPO_CADASTRO: Cliente")
		pagrec = 1
	}
	if (hAPI.getCardValue("TIPO_CADASTRO" ) != "Cliente"){
		log.info("TIPO_CADASTRO: Fornecedor")
		pagrec = 2	
	}	
	var xml = ""+
		"<FinCFOBR>"+
		 	"<FCFO>"+
		 		"<CODCOLIGADA>0</CODCOLIGADA>"+
		 		"<CODCFO>-1</CODCFO>"+
			    "<NOMEFANTASIA>" + hAPI.getCardValue("NOMEF_PJ").replace("&", "e") + "</NOMEFANTASIA>"+
			    "<NOME>" + hAPI.getCardValue("RAZAO_PJ").replace("&", "e")+ "</NOME>"+
			    "<CGCCFO>" + hAPI.getCardValue("CNPJ_PJ")+ "</CGCCFO>"+
			    "<INSCRESTADUAL>" + hAPI.getCardValue("IE_PJ")+ "</INSCRESTADUAL>"+
			    "<INSCRMUNICIPAL>" + hAPI.getCardValue("IM_PJ")+ "</INSCRMUNICIPAL>"+
			    "<PAGREC>" + pagrec + "</PAGREC>"+
			    "<RUA>" + hAPI.getCardValue("RUA_PJ")+ "</RUA>"+
			    "<NUMERO>" + hAPI.getCardValue("NUMERO_PJ")+ "</NUMERO>"+
			    "<COMPLEMENTO>" + hAPI.getCardValue("COMPLEMENTO_PJ")+ "</COMPLEMENTO>"+
			    "<BAIRRO>" + hAPI.getCardValue("BAIRRO_PJ")+ "</BAIRRO>"+
			    "<CIDADE>" + hAPI.getCardValue("MUNICIPIO_PJ")+ "</CIDADE>"+
			    "<CODETD>" + hAPI.getCardValue("ESTADO_PJ")+ "</CODETD>"+
			    "<CEP>" + hAPI.getCardValue("CEP_PJ")+ "</CEP>"+
			    "<TELEFONE>" + hAPI.getCardValue("FIXO_PJ")+ "</TELEFONE>"+
			    "<RUAPGTO>" + hAPI.getCardValue("RUA_PJ")+ "</RUAPGTO>"+
			    "<NUMEROPGTO>" + hAPI.getCardValue("NUMERO_PJ")+ "</NUMEROPGTO>"+
			    "<COMPLEMENTOPGTO>" + hAPI.getCardValue("COMPLEMENTO_PJ")+ "</COMPLEMENTOPGTO>"+
			    "<BAIRROPGTO>" + hAPI.getCardValue("BAIRRO_PJ")+ "</BAIRROPGTO>"+
			    "<CIDADEPGTO>" + hAPI.getCardValue("MUNICIPIO_PJ")+ "</CIDADEPGTO>"+
			    "<CODETDPGTO>" + hAPI.getCardValue("ESTADO_PJ")+ "</CODETDPGTO>"+
			    "<CEPPGTO>" + hAPI.getCardValue("CEP_PJ")+ "</CEPPGTO>"+
			    "<TELEFONEPGTO>" + hAPI.getCardValue("FIXO_PJ")+ "</TELEFONEPGTO>"+
			    "<RUAENTREGA>" + hAPI.getCardValue("RUA_PJ")+ "</RUAENTREGA>"+
			    "<NUMEROENTREGA>" + hAPI.getCardValue("NUMERO_PJ")+ "</NUMEROENTREGA>"+
			    "<COMPLEMENTREGA>" + hAPI.getCardValue("COMPLEMENTO_PJ")+ "</COMPLEMENTREGA>"+
			    "<BAIRROENTREGA>" + hAPI.getCardValue("BAIRRO_PJ")+ "</BAIRROENTREGA>"+
			    "<CIDADEENTREGA>" + hAPI.getCardValue("MUNICIPIO_PJ")+ "</CIDADEENTREGA>"+
			    "<CODETDENTREGA>" + hAPI.getCardValue("ESTADO_PJ")+ "</CODETDENTREGA>"+
			    "<CEPENTREGA>" + hAPI.getCardValue("CEP_PJ")+ "</CEPENTREGA>"+
			    "<TELEFONEENTREGA>" + hAPI.getCardValue("FIXO_PJ")+ "</TELEFONEENTREGA>"+
			    "<TELEX>"+ hAPI.getCardValue("CEL_PJ")+ "</TELEX>"+     
			    "<EMAIL>" + hAPI.getCardValue("EMAILXML_PJ")+ "</EMAIL>"+
			    "<CONTATO>" + hAPI.getCardValue("NOMECONTATO_PJ")+ "</CONTATO>"+
			    "<CODTCF>008</CODTCF>"+
			    "<ATIVO>0</ATIVO>"+
			    "<LIMITECREDITO>"+ hAPI.getCardValue("FINANCEIROLIMITE")+"</LIMITECREDITO>"+
			    "<CODCOLTCF>0</CODCOLTCF>"+
			    "<CODMUNICIPIO>" + CODMUNICIPIO+ "</CODMUNICIPIO>"+
			    "<PESSOAFISOUJUR>J</PESSOAFISOUJUR>"+
			    "<CONTATOPGTO>" + hAPI.getCardValue("NOMECONTATO_PJ")+ "</CONTATOPGTO>"+
			    "<CONTATOENTREGA>" + hAPI.getCardValue("NOMECONTATO_PJ")+ "</CONTATOENTREGA>"+
			    "<PAIS>1</PAIS>"+
			    "<PAISPAGTO>1</PAISPAGTO>"+
			    "<PAISENTREGA>1</PAISENTREGA>"+
			    "<EMAILENTREGA>" + hAPI.getCardValue("EMAIL_PJ")+ "</EMAILENTREGA>"+
			    "<EMAILPGTO>" + hAPI.getCardValue("EMAILXML_PJ")+ "</EMAILPGTO>"+
			    "<CODMUNICIPIOPGTO>" + CODMUNICIPIO+ "</CODMUNICIPIOPGTO>"+
			    "<CODMUNICIPIOENTREGA>" + CODMUNICIPIO+ "</CODMUNICIPIOENTREGA>"+
			    "<TIPORUA>6</TIPORUA>"+
			    "<TIPOBAIRRO>1</TIPOBAIRRO>"+
			    "<TIPORUAPGTO>6</TIPORUAPGTO>"+
			    "<TIPOBAIRROPGTO>1</TIPOBAIRROPGTO>"+
			    "<TIPORUAENTREGA>6</TIPORUAENTREGA>"+
			    "<TIPOBAIRROENTREGA>1</TIPOBAIRROENTREGA>"+
			    "<IDPAIS>1</IDPAIS>"+
			    "<IDPAISPGTO>1</IDPAISPGTO>"+
			    "<IDPAISENTREGA>1</IDPAISENTREGA>"+
			    "<NACIONALIDADE>0</NACIONALIDADE>"+
			    "<INDNATRET>03</INDNATRET>"+
			    "<CODCFOCOLINTEGRACAO>0</CODCFOCOLINTEGRACAO>"+
	  		"</FCFO>"+
	  		"<FCFOCOMPL>"+
			    "<CODCOLIGADA>0</CODCOLIGADA>"+
			    "<CODCFO>-1</CODCFO>"+
			    "<RAMOATIVIDADE>"+hAPI.getCardValue("TPCLIFOR").split("-")[0] + "</RAMOATIVIDADE>"+
			    "<SL_FLUIG>" + getValue("WKNumProces")+ "</SL_FLUIG>"+
			    "</FCFOCOMPL>"+
	 "</FinCFOBR>"			
			    
				log.error("xml: ")
				log.error(xml)
				
	var result = new String( authService.saveRecord(nomeDataserver, xml, contexto) );
	log.info("result: " + result)

	if (result.split(";")[0] != "0"){
		throw "ERRO AO CADASTRAR O CLI/FOR\n\n"+result.split("=")[0]+"\n\n"
	}
	hAPI.setCardValue("CADASTROCLIFOR", result.split(";")[1] )
}
//==================================================================================================================================================================================================================================================================================================	    
function xmlColaborador(){
	
	var CODMUNICIPIO = consultaEstado()
	var nomeDataserver = "FinCFODataBR"
	var user = DatasetFactory.getDataset("ds_connector", null, null, null);	
	var usuario = user.getValue(0, "INTEGRADOR")
	var senha = user.getValue(0, "SENHA")
	var email = user.getValue(0, "EMAIL")	
	var login = fluigAPI.getUserService().getCurrent().getLogin();
	var primeiraLetra = login.substring(0, 1).toUpperCase();
	var restoDaString = login.slice(1);
	var codusuario = primeiraLetra + restoDaString;	
	var contexto = "codcoligada=1;codusuario="+codusuario+";codsistema=F"		
	var authService = getWebService(usuario, senha)
	var pagrec = ""
		
		if (hAPI.getCardValue("TIPO_CADASTRO") == "Cliente" ) {
			log.info("TIPO_CADASTRO: Cliente")
			pagrec = 1	
		}
	
		if (hAPI.getCardValue("TIPO_CADASTRO" ) != "Cliente"){
			log.info("TIPO_CADASTRO: Fornecedor")
			pagrec = 2	
		}
	var DATA = hAPI.getCardValue("NASCIMENTO_PF")   
    var hor =  "00:00:00";
	var d = DATA.split("/")[0];
	var m = DATA.split("/")[1];
	var a = DATA.split("/")[2];		
	var dia = a + "-" + m + "-" + d;
    var dataFull = dia + "T"  + hor;
	var xml = ""+
	"<FinCFOBR>"+
 		"<FCFO>"+
	 		"<CODCOLIGADA>0</CODCOLIGADA>"+
	 		"<CODCFO>-1</CODCFO>"+
		    "<NOMEFANTASIA>" + hAPI.getCardValue("NOME_PF").replace("&", "e") + "</NOMEFANTASIA>"+
		    "<NOME>" + hAPI.getCardValue("NOME_PF").replace("&", "e")+ "</NOME>"+
		    "<CGCCFO>" + hAPI.getCardValue("CPF_PF")+ "</CGCCFO>"+
		    "<PAGREC>" + pagrec + "</PAGREC>"+
		    "<RUA>" + hAPI.getCardValue("RUA_PF")+ "</RUA>"+
		    "<NUMERO>" + hAPI.getCardValue("NUMERO_PF")+ "</NUMERO>"+
		    "<COMPLEMENTO>" + hAPI.getCardValue("COMPLEMENTO_PF")+ "</COMPLEMENTO>"+
		    "<BAIRRO>" + hAPI.getCardValue("BAIRRO_PF")+ "</BAIRRO>"+
		    "<CIDADE>" + hAPI.getCardValue("MUNICIPIO_PF")+ "</CIDADE>"+
		    "<CODETD>" + hAPI.getCardValue("ESTADO_PF")+ "</CODETD>"+
		    "<CEP>" + hAPI.getCardValue("CEP_PF")+ "</CEP>"+
		    "<TELEFONE>" + hAPI.getCardValue("TELEFONE_PF")+ "</TELEFONE>"+
		    "<RUAPGTO>" + hAPI.getCardValue("RUA_PF")+ "</RUAPGTO>"+
		    "<NUMEROPGTO>" + hAPI.getCardValue("NUMERO_PF")+ "</NUMEROPGTO>"+
		    "<BAIRROPGTO>" + hAPI.getCardValue("BAIRRO_PF")+ "</BAIRROPGTO>"+
		    "<COMPLEMENTOPGTO>" + hAPI.getCardValue("COMPLEMENTO_PF")+ "</COMPLEMENTOPGTO>"+
		    "<CIDADEPGTO>" + hAPI.getCardValue("MUNICIPIO_PF")+ "</CIDADEPGTO>"+
		    "<CODETDPGTO>" + hAPI.getCardValue("ESTADO_PF")+ "</CODETDPGTO>"+
		    "<CEPPGTO>" + hAPI.getCardValue("CEP_PF")+ "</CEPPGTO>"+
		    "<TELEFONEPGTO>" + hAPI.getCardValue("TELEFONE_PF")+ "</TELEFONEPGTO>"+
		    "<RUAENTREGA>" + hAPI.getCardValue("RUA_PF")+ "</RUAENTREGA>"+
		    "<NUMEROENTREGA>" + hAPI.getCardValue("NUMERO_PF")+ "</NUMEROENTREGA>"+
		    "<COMPLEMENTREGA>" + hAPI.getCardValue("COMPLEMENTO_PF")+ "</COMPLEMENTREGA>"+
		    "<BAIRROENTREGA>" + hAPI.getCardValue("BAIRRO_PF")+ "</BAIRROENTREGA>"+
		    "<CIDADEENTREGA>" + hAPI.getCardValue("MUNICIPIO_PF")+ "</CIDADEENTREGA>"+
		    "<CODETDENTREGA>" + hAPI.getCardValue("ESTADO_PF")+ "</CODETDENTREGA>"+
		    "<CEPENTREGA>" + hAPI.getCardValue("CEP_PF")+ "</CEPENTREGA>"+
		    "<TELEFONEENTREGA>" + hAPI.getCardValue("TELEFONE_PF")+ "</TELEFONEENTREGA>"+
		    "<TELEX>"+ hAPI.getCardValue("CELULAR_PF")+ "</TELEX>"+     
		    "<EMAIL>" + hAPI.getCardValue("EMAIL_PF")+ "</EMAIL>"+
		    "<CONTATO>" + hAPI.getCardValue("CONTATOREFERENCIA_PF")+ "</CONTATO>"+
		    "<CODTCF>008</CODTCF>"+
		    "<ATIVO>0</ATIVO>"+
		    "<LIMITECREDITO>"+ hAPI.getCardValue("FINANCEIROLIMITE")+"</LIMITECREDITO>"+
		    "<CODCOLTCF>0</CODCOLTCF>"+
		    "<CODMUNICIPIO>" + CODMUNICIPIO + "</CODMUNICIPIO>"+
		    "<PESSOAFISOUJUR>F</PESSOAFISOUJUR>"+
		    "<CONTATOPGTO>" + hAPI.getCardValue("NOME_PF")+ "</CONTATOPGTO>"+
		    "<CONTATOENTREGA>" + hAPI.getCardValue("NOME_PF")+ "</CONTATOENTREGA>"+
		    "<CIDENTIDADE>" + hAPI.getCardValue("RG_PF")+ "</CIDENTIDADE>"+
		    "<CI_ORGAO>" + hAPI.getCardValue("ORGAOEMISSOR_PF")+ "</CI_ORGAO>"+
		    "<CI_UF>" + hAPI.getCardValue("ESTADO_PF")+ "</CI_UF>"+
		    "<EMAILENTREGA>" + hAPI.getCardValue("EMAIL_PF")+ "</EMAILENTREGA>"+
		    "<CONTATOENTREGA>" + hAPI.getCardValue("NOME_PF")+ "</CONTATOENTREGA>"+
		    "<EMAILPGTO>" + hAPI.getCardValue("EMAIL_PF")+ "</EMAILPGTO>"+
		    "<CONTATOPGTO>" + hAPI.getCardValue("NOME_PF")+ "</CONTATOPGTO>"+
		    "<NUMDEPENDENTES>" + hAPI.getCardValue("DEPENDENTES_PF")+ "</NUMDEPENDENTES>"+
		    "<DTNASCIMENTO>" +  dataFull + "</DTNASCIMENTO>"+
		    "<ESTADOCIVIL>" + hAPI.getCardValue("ESTADOCIVIL_PF")+ "</ESTADOCIVIL>"+
		    "<CODMUNICIPIOPGTO>" + CODMUNICIPIO + "</CODMUNICIPIOPGTO>"+
		    "<CODMUNICIPIOENTREGA>" + CODMUNICIPIO + "</CODMUNICIPIOENTREGA>"+
		    "<CATEGORIAAUTONOMO>"+ hAPI.getCardValue("CATAUTONOMO_PF")+"</CATEGORIAAUTONOMO>"+
		    "<CBOAUTONOMO>"+ hAPI.getCardValue("CBOAUTONOMO_PF")+"</CBOAUTONOMO>"+
		    "<CIAUTONOMO>"+ hAPI.getCardValue("IE_PF")+"</CIAUTONOMO>"+
		    "<TIPORUA>6</TIPORUA>"+
		    "<TIPOBAIRRO>1</TIPOBAIRRO>"+
		    "<TIPORUAPGTO>6</TIPORUAPGTO>"+
		    "<TIPOBAIRROPGTO>1</TIPOBAIRROPGTO>"+
		    "<TIPORUAENTREGA>6</TIPORUAENTREGA>"+
		    "<TIPOBAIRROENTREGA>1</TIPOBAIRROENTREGA>"+
		    "<IDPAIS>1</IDPAIS>"+
		    "<IDPAISPGTO>1</IDPAISPGTO>"+
		    "<IDPAISENTREGA>1</IDPAISENTREGA>"+
		    "<NACIONALIDADE>0</NACIONALIDADE>"+
		    "<INDNATRET>03</INDNATRET>"+
		    "<CODCFOCOLINTEGRACAO>0</CODCFOCOLINTEGRACAO>"+
		"</FCFO>"+
		"<FCFOCOMPL>"+
			    "<CODCOLIGADA>0</CODCOLIGADA>"+
			    "<CODCFO>-1</CODCFO>"+
			    "<RAMOATIVIDADE>"+ hAPI.getCardValue("TPCLIFOR").split("-")[0] + "</RAMOATIVIDADE>"+
			    "<SL_FLUIG>" + getValue("WKNumProces")+ "</SL_FLUIG>"+
	    "</FCFOCOMPL>"+
"</FinCFOBR>"
	    
		log.error("xml: ")
		log.error(xml)
			
	var result = new String( authService.saveRecord(nomeDataserver, xml, contexto) );

		if (result.split(";")[0] != "0"){
			throw "ERRO AO CADASTRAR O CLI/FOR\n\n"+result.split("=")[0]+"\n\n"
		}
		hAPI.setCardValue("CADASTROCLIFOR", result.split(";")[1] )	
}
//==================================================================================================================================================================================================================================================================================================	    
function consultaEstado(){
	
	if (hAPI.getCardValue("TIPO_ENTIDADE") == "Pessoa-Fisica"){	
		var c1 = DatasetFactory.createConstraint("NOME", hAPI.getCardValue("MUNICIPIO_PF"),hAPI.getCardValue("MUNICIPIO_PF"), ConstraintType.MUST);
		var c2 = DatasetFactory.createConstraint("ESTADO", hAPI.getCardValue("ESTADO_PF"),hAPI.getCardValue("ESTADO_PF"), ConstraintType.MUST);
		var constraints = new Array(c1,c2);
		var dataset = DatasetFactory.getDataset('DS_MUNICIPIO_CLIFOR',null,constraints,null);
		var row = dataset.getValue(0, "CODMUNICIPIO")
		return row	
	}
	else {		
		var c1 = DatasetFactory.createConstraint("NOME", hAPI.getCardValue("MUNICIPIO_PJ"),hAPI.getCardValue("MUNICIPIO_PJ"), ConstraintType.MUST);
		var c2 = DatasetFactory.createConstraint("ESTADO", hAPI.getCardValue("ESTADO_PJ"),hAPI.getCardValue("ESTADO_PJ"), ConstraintType.MUST);
		var constraints = new Array(c1,c2);
		var dataset = DatasetFactory.getDataset('DS_MUNICIPIO_CLIFOR',null,constraints,null);
		var row = dataset.getValue(0, "CODMUNICIPIO")
		return row		
	}		
}