// Programa responsável por integrar com os Webservices do RM  
// Para executar o programa, seguir os passos abaixo:  
//    1) Adicionar o arquivo abaixo ao seu projeto:  
//            http://tdn.totvs.com/download/attachments/211064343/DataClientfluig.js  
//     2) Inclua um serviço no Fluig com o nome WSDATASERVER apontando para    
//       http://localhost:8051/wsDataServer/MEX?singlewsdl (substituir localhost pelo IP e Porta do servidor RM)//.  
  
function createDataset(fields, constraints, sortFields)  
{  
    /* Prepararação das variaveis */    
  
    //usuário e senha do aplicativo RM. O mesmo utilizado para logar no sistema e que tenha permissão de     
    //acesso ao cadastro que deseja utilizar    
    var usuario = "arthur.evangelista";    
    var senha = "p4x2g5r6t7";    
    //importante passar no contexto o mesmo código de usuário usado para logar no webservice    
          
          
          
    var context = "CODSISTEMA=G;CODCOLIGADA=1;CODUSUARIO=mestre"    
    //o filtro pode ser qualquer campo da visão, por exemplo CODCOLIGADA=1 AND CODFILIAL = 1    
    var filtro = "1=1" ;    
    /* Fim Prepararação das variaveis */    
  
    var retorno = dcReadView("FinCFODataBR", context, usuario, senha, filtro)    
  
    //Caso deseje utilizar as contraints do formulário  
    //var parsedConstraints = parseConstraints(constraints, true);  
    //var retorno = authService.readView("FinCFODataBR", parsedConstraints.filter, parsedConstraints.context, senha, filtro);  
      
      
    var xmlResultados = new XML(retorno);  
  
    var dataset = DatasetBuilder.newDataset();     
             dataset.addColumn('CODEXTERNO');   
             dataset.addColumn('CODCOLIGADA');   
             dataset.addColumn('CODCFO');   
             dataset.addColumn('CODLOJA');   
             dataset.addColumn('CODFILIALINTEGRACAO');   
             dataset.addColumn('NOMEFANTASIA');   
             dataset.addColumn('NOME');   
             dataset.addColumn('CGCCFO');   
             dataset.addColumn('INSCRESTADUAL');   
             dataset.addColumn('PAGREC');   
             dataset.addColumn('RUA');   
             dataset.addColumn('NUMERO');   
             dataset.addColumn('COMPLEMENTO');   
             dataset.addColumn('BAIRRO');   
             dataset.addColumn('CIDADE');   
             dataset.addColumn('CODETD');   
             dataset.addColumn('CEP');   
             dataset.addColumn('TELEFONE');   
             dataset.addColumn('RUAPGTO');   
             dataset.addColumn('NUMEROPGTO');   
             dataset.addColumn('COMPLEMENTOPGTO');   
             dataset.addColumn('BAIRROPGTO');   
             dataset.addColumn('CIDADEPGTO');   
             dataset.addColumn('CODETDPGTO');   
             dataset.addColumn('CEPPGTO');   
             dataset.addColumn('TELEFONEPGTO');   
             dataset.addColumn('RUAENTREGA');   
             dataset.addColumn('NUMEROENTREGA');   
             dataset.addColumn('COMPLEMENTREGA');   
             dataset.addColumn('BAIRROENTREGA');   
             dataset.addColumn('CIDADEENTREGA');   
             dataset.addColumn('CODETDENTREGA');   
             dataset.addColumn('CEPENTREGA');   
             dataset.addColumn('TELEFONEENTREGA');   
             dataset.addColumn('FAX');   
             dataset.addColumn('TELEX');   
             dataset.addColumn('EMAIL');   
             dataset.addColumn('CONTATO');   
             dataset.addColumn('CODTCF');   
             dataset.addColumn('ATIVO');   
             dataset.addColumn('LIMITECREDITO');   
             dataset.addColumn('VALORULTIMOLAN');   
             dataset.addColumn('DATAULTALTERACAO');   
             dataset.addColumn('DATACRIACAO');   
             dataset.addColumn('DATAULTMOVIMENTO');   
             dataset.addColumn('CAMPOLIVRE');   
             dataset.addColumn('CAMPOALFAOP1');   
             dataset.addColumn('CAMPOALFAOP2');   
             dataset.addColumn('CAMPOALFAOP3');   
             dataset.addColumn('VALOROP1');   
             dataset.addColumn('VALOROP2');   
             dataset.addColumn('VALOROP3');   
             dataset.addColumn('DATAOP1');   
             dataset.addColumn('DATAOP2');   
             dataset.addColumn('DATAOP3');   
             dataset.addColumn('CODTRA');   
             dataset.addColumn('CHAPA');   
             dataset.addColumn('DTINICATIVIDADES');   
             dataset.addColumn('PATRIMONIO');   
             dataset.addColumn('NUMFUNCIONARIOS');   
             dataset.addColumn('CODCOLTCF');   
             dataset.addColumn('FAXDEDICADO');   
             dataset.addColumn('CODMUNICIPIO');   
             dataset.addColumn('INSCRMUNICIPAL');   
             dataset.addColumn('PESSOAFISOUJUR');   
             dataset.addColumn('CONTATOPGTO');   
             dataset.addColumn('CONTATOENTREGA');   
             dataset.addColumn('PAIS');   
             dataset.addColumn('PAISPAGTO');   
             dataset.addColumn('PAISENTREGA');   
             dataset.addColumn('ULTIMODOCUMENTO');   
             dataset.addColumn('CONTRIBUINTE');   
             dataset.addColumn('CFOIMOB');   
             dataset.addColumn('CIDENTIDADE');   
             dataset.addColumn('CI_ORGAO');   
             dataset.addColumn('CI_UF');   
             dataset.addColumn('FAXENTREGA');   
             dataset.addColumn('EMAILENTREGA');   
             dataset.addColumn('FAXPGTO');   
             dataset.addColumn('EMAILPGTO');   
             dataset.addColumn('VALFRETE');   
             dataset.addColumn('TPTOMADOR');   
             dataset.addColumn('CONTRIBUINTEISS');   
             dataset.addColumn('NUMDEPENDENTES');   
             dataset.addColumn('ESTADOCIVIL');   
             dataset.addColumn('PRODUTORRURAL');   
             dataset.addColumn('USUARIOALTERACAO');   
             dataset.addColumn('SUFRAMA');   
             dataset.addColumn('CODMUNICIPIOPGTO');   
             dataset.addColumn('CODMUNICIPIOENTREGA');   
             dataset.addColumn('ORGAOPUBLICO');   
             dataset.addColumn('TELEFONECOMERCIAL');   
             dataset.addColumn('CAIXAPOSTAL');   
             dataset.addColumn('CAIXAPOSTALENTREGA');   
             dataset.addColumn('CAIXAPOSTALPAGAMENTO');   
             dataset.addColumn('CATEGORIAAUTONOMO');   
             dataset.addColumn('CBOAUTONOMO');   
             dataset.addColumn('CIAUTONOMO');   
             dataset.addColumn('IDCFO');   
             dataset.addColumn('VROUTRASDEDUCOESIRRF');   
             dataset.addColumn('CODRECEITA');   
             dataset.addColumn('RAMOATIV');   
             dataset.addColumn('OPTANTEPELOSIMPLES');   
             dataset.addColumn('TIPORUA');   
             dataset.addColumn('TIPOBAIRRO');   
             dataset.addColumn('REGIMEISS');   
             dataset.addColumn('RETENCAOISS');   
             dataset.addColumn('DTNASCIMENTO');   
             dataset.addColumn('USUARIOCRIACAO');   
             dataset.addColumn('TIPORUAPGTO');   
             dataset.addColumn('TIPOBAIRROPGTO');   
             dataset.addColumn('TIPORUAENTREGA');   
             dataset.addColumn('TIPOBAIRROENTREGA');   
             dataset.addColumn('PORTE');   
             dataset.addColumn('CEPCAIXAPOSTAL');   
             dataset.addColumn('NIT');   
             dataset.addColumn('CODPAGTOGPS');   
             dataset.addColumn('TIPOOPCOMBUSTIVEL');   
             dataset.addColumn('CODCONTAGER');   
             dataset.addColumn('IDPAIS');   
             dataset.addColumn('IDPAISPGTO');   
             dataset.addColumn('IDPAISENTREGA');   
             dataset.addColumn('NUMDIASATRASO');   
             dataset.addColumn('DESCTIPORUA');   
             dataset.addColumn('TIPOCONTRIBUINTEINSS');   
             dataset.addColumn('NACIONALIDADE');   
             dataset.addColumn('CODCOLCFOFISCAL');   
             dataset.addColumn('IDCFOFISCAL');   
             dataset.addColumn('CALCULAAVP');   
             dataset.addColumn('CODUSUARIOACESSO');   
             dataset.addColumn('RECCREATEDBY');   
             dataset.addColumn('RECCREATEDON');   
             dataset.addColumn('RECMODIFIEDBY');   
             dataset.addColumn('RECMODIFIEDON');   
             dataset.addColumn('EMAILFISCAL');   
             dataset.addColumn('IDINTEGRACAO');   
             dataset.addColumn('INDNATRET');   
             dataset.addColumn('TIPORENDIMENTO');   
             dataset.addColumn('FORMATRIBUTACAO');   
             dataset.addColumn('NIF');   
             dataset.addColumn('SITUACAONIF');   
             dataset.addColumn('DOCUMENTOESTRANGEIRO');   
             dataset.addColumn('ISTOTVSMESSAGE');   
             dataset.addColumn('INOVAR_AUTO');   
             dataset.addColumn('FILIALFINANCEIRA');   
             dataset.addColumn('TOMADORFOLHA');   
             dataset.addColumn('CNAEPREP');   
             dataset.addColumn('PERCENTACIDTRAB');   
             dataset.addColumn('APLICFORMULA');   
             dataset.addColumn('FORMULAVALDEDUCAOVARIAVEL');   
             dataset.addColumn('CODCOLFORMULA');   
             dataset.addColumn('CODCFOCOLINTEGRACAO');   
             dataset.addColumn('CODCFOINTEGRACAO');   
             dataset.addColumn('DIGVERIFICDEBAUTOMATICO');   
             dataset.addColumn('TIPOCLIENTE');   
             dataset.addColumn('TIPOCONTROLEPONTO');   
             dataset.addColumn('CODFILIALOBRA');   
             dataset.addColumn('FAP');   
             dataset.addColumn('CONSIDERAFILIALOBRA');   
             dataset.addColumn('CODCOLIGADAFILIALOBRA');   
             dataset.addColumn('OBRAPROPRIA');   
             dataset.addColumn('ENTIDADEEXECUTORAPAA');   
             dataset.addColumn('CONTEVENTOCONTAB');   
             dataset.addColumn('CODCOLCONTAGER');   
             dataset.addColumn('CODPROF');   
             dataset.addColumn('EMPRESA');   
             dataset.addColumn('CODCARGO');   
    for(var i = 0; i < xmlResultados.FCFO.length(); i++)   
    {   
           dataset.addRow(new Array(   
             xmlResultados.FCFO[i].CODEXTERNO.toString(),   
             xmlResultados.FCFO[i].CODCOLIGADA.toString(),   
             xmlResultados.FCFO[i].CODCFO.toString(),   
             xmlResultados.FCFO[i].CODLOJA.toString(),   
             xmlResultados.FCFO[i].CODFILIALINTEGRACAO.toString(),   
             xmlResultados.FCFO[i].NOMEFANTASIA.toString(),   
             xmlResultados.FCFO[i].NOME.toString(),   
             xmlResultados.FCFO[i].CGCCFO.toString(),   
             xmlResultados.FCFO[i].INSCRESTADUAL.toString(),   
             xmlResultados.FCFO[i].PAGREC.toString(),   
             xmlResultados.FCFO[i].RUA.toString(),   
             xmlResultados.FCFO[i].NUMERO.toString(),   
             xmlResultados.FCFO[i].COMPLEMENTO.toString(),   
             xmlResultados.FCFO[i].BAIRRO.toString(),   
             xmlResultados.FCFO[i].CIDADE.toString(),   
             xmlResultados.FCFO[i].CODETD.toString(),   
             xmlResultados.FCFO[i].CEP.toString(),   
             xmlResultados.FCFO[i].TELEFONE.toString(),   
             xmlResultados.FCFO[i].RUAPGTO.toString(),   
             xmlResultados.FCFO[i].NUMEROPGTO.toString(),   
             xmlResultados.FCFO[i].COMPLEMENTOPGTO.toString(),   
             xmlResultados.FCFO[i].BAIRROPGTO.toString(),   
             xmlResultados.FCFO[i].CIDADEPGTO.toString(),   
             xmlResultados.FCFO[i].CODETDPGTO.toString(),   
             xmlResultados.FCFO[i].CEPPGTO.toString(),   
             xmlResultados.FCFO[i].TELEFONEPGTO.toString(),   
             xmlResultados.FCFO[i].RUAENTREGA.toString(),   
             xmlResultados.FCFO[i].NUMEROENTREGA.toString(),   
             xmlResultados.FCFO[i].COMPLEMENTREGA.toString(),   
             xmlResultados.FCFO[i].BAIRROENTREGA.toString(),   
             xmlResultados.FCFO[i].CIDADEENTREGA.toString(),   
             xmlResultados.FCFO[i].CODETDENTREGA.toString(),   
             xmlResultados.FCFO[i].CEPENTREGA.toString(),   
             xmlResultados.FCFO[i].TELEFONEENTREGA.toString(),   
             xmlResultados.FCFO[i].FAX.toString(),   
             xmlResultados.FCFO[i].TELEX.toString(),   
             xmlResultados.FCFO[i].EMAIL.toString(),   
             xmlResultados.FCFO[i].CONTATO.toString(),   
             xmlResultados.FCFO[i].CODTCF.toString(),   
             xmlResultados.FCFO[i].ATIVO.toString(),   
             xmlResultados.FCFO[i].LIMITECREDITO.toString(),   
             xmlResultados.FCFO[i].VALORULTIMOLAN.toString(),   
             xmlResultados.FCFO[i].DATAULTALTERACAO.toString(),   
             xmlResultados.FCFO[i].DATACRIACAO.toString(),   
             xmlResultados.FCFO[i].DATAULTMOVIMENTO.toString(),   
             xmlResultados.FCFO[i].CAMPOLIVRE.toString(),   
             xmlResultados.FCFO[i].CAMPOALFAOP1.toString(),   
             xmlResultados.FCFO[i].CAMPOALFAOP2.toString(),   
             xmlResultados.FCFO[i].CAMPOALFAOP3.toString(),   
             xmlResultados.FCFO[i].VALOROP1.toString(),   
             xmlResultados.FCFO[i].VALOROP2.toString(),   
             xmlResultados.FCFO[i].VALOROP3.toString(),   
             xmlResultados.FCFO[i].DATAOP1.toString(),   
             xmlResultados.FCFO[i].DATAOP2.toString(),   
             xmlResultados.FCFO[i].DATAOP3.toString(),   
             xmlResultados.FCFO[i].CODTRA.toString(),   
             xmlResultados.FCFO[i].CHAPA.toString(),   
             xmlResultados.FCFO[i].DTINICATIVIDADES.toString(),   
             xmlResultados.FCFO[i].PATRIMONIO.toString(),   
             xmlResultados.FCFO[i].NUMFUNCIONARIOS.toString(),   
             xmlResultados.FCFO[i].CODCOLTCF.toString(),   
             xmlResultados.FCFO[i].FAXDEDICADO.toString(),   
             xmlResultados.FCFO[i].CODMUNICIPIO.toString(),   
             xmlResultados.FCFO[i].INSCRMUNICIPAL.toString(),   
             xmlResultados.FCFO[i].PESSOAFISOUJUR.toString(),   
             xmlResultados.FCFO[i].CONTATOPGTO.toString(),   
             xmlResultados.FCFO[i].CONTATOENTREGA.toString(),   
             xmlResultados.FCFO[i].PAIS.toString(),   
             xmlResultados.FCFO[i].PAISPAGTO.toString(),   
             xmlResultados.FCFO[i].PAISENTREGA.toString(),   
             xmlResultados.FCFO[i].ULTIMODOCUMENTO.toString(),   
             xmlResultados.FCFO[i].CONTRIBUINTE.toString(),   
             xmlResultados.FCFO[i].CFOIMOB.toString(),   
             xmlResultados.FCFO[i].CIDENTIDADE.toString(),   
             xmlResultados.FCFO[i].CI_ORGAO.toString(),   
             xmlResultados.FCFO[i].CI_UF.toString(),   
             xmlResultados.FCFO[i].FAXENTREGA.toString(),   
             xmlResultados.FCFO[i].EMAILENTREGA.toString(),   
             xmlResultados.FCFO[i].FAXPGTO.toString(),   
             xmlResultados.FCFO[i].EMAILPGTO.toString(),   
             xmlResultados.FCFO[i].VALFRETE.toString(),   
             xmlResultados.FCFO[i].TPTOMADOR.toString(),   
             xmlResultados.FCFO[i].CONTRIBUINTEISS.toString(),   
             xmlResultados.FCFO[i].NUMDEPENDENTES.toString(),   
             xmlResultados.FCFO[i].ESTADOCIVIL.toString(),   
             xmlResultados.FCFO[i].PRODUTORRURAL.toString(),   
             xmlResultados.FCFO[i].USUARIOALTERACAO.toString(),   
             xmlResultados.FCFO[i].SUFRAMA.toString(),   
             xmlResultados.FCFO[i].CODMUNICIPIOPGTO.toString(),   
             xmlResultados.FCFO[i].CODMUNICIPIOENTREGA.toString(),   
             xmlResultados.FCFO[i].ORGAOPUBLICO.toString(),   
             xmlResultados.FCFO[i].TELEFONECOMERCIAL.toString(),   
             xmlResultados.FCFO[i].CAIXAPOSTAL.toString(),   
             xmlResultados.FCFO[i].CAIXAPOSTALENTREGA.toString(),   
             xmlResultados.FCFO[i].CAIXAPOSTALPAGAMENTO.toString(),   
             xmlResultados.FCFO[i].CATEGORIAAUTONOMO.toString(),   
             xmlResultados.FCFO[i].CBOAUTONOMO.toString(),   
             xmlResultados.FCFO[i].CIAUTONOMO.toString(),   
             xmlResultados.FCFO[i].IDCFO.toString(),   
             xmlResultados.FCFO[i].VROUTRASDEDUCOESIRRF.toString(),   
             xmlResultados.FCFO[i].CODRECEITA.toString(),   
             xmlResultados.FCFO[i].RAMOATIV.toString(),   
             xmlResultados.FCFO[i].OPTANTEPELOSIMPLES.toString(),   
             xmlResultados.FCFO[i].TIPORUA.toString(),   
             xmlResultados.FCFO[i].TIPOBAIRRO.toString(),   
             xmlResultados.FCFO[i].REGIMEISS.toString(),   
             xmlResultados.FCFO[i].RETENCAOISS.toString(),   
             xmlResultados.FCFO[i].DTNASCIMENTO.toString(),   
             xmlResultados.FCFO[i].USUARIOCRIACAO.toString(),   
             xmlResultados.FCFO[i].TIPORUAPGTO.toString(),   
             xmlResultados.FCFO[i].TIPOBAIRROPGTO.toString(),   
             xmlResultados.FCFO[i].TIPORUAENTREGA.toString(),   
             xmlResultados.FCFO[i].TIPOBAIRROENTREGA.toString(),   
             xmlResultados.FCFO[i].PORTE.toString(),   
             xmlResultados.FCFO[i].CEPCAIXAPOSTAL.toString(),   
             xmlResultados.FCFO[i].NIT.toString(),   
             xmlResultados.FCFO[i].CODPAGTOGPS.toString(),   
             xmlResultados.FCFO[i].TIPOOPCOMBUSTIVEL.toString(),   
             xmlResultados.FCFO[i].CODCONTAGER.toString(),   
             xmlResultados.FCFO[i].IDPAIS.toString(),   
             xmlResultados.FCFO[i].IDPAISPGTO.toString(),   
             xmlResultados.FCFO[i].IDPAISENTREGA.toString(),   
             xmlResultados.FCFO[i].NUMDIASATRASO.toString(),   
             xmlResultados.FCFO[i].DESCTIPORUA.toString(),   
             xmlResultados.FCFO[i].TIPOCONTRIBUINTEINSS.toString(),   
             xmlResultados.FCFO[i].NACIONALIDADE.toString(),   
             xmlResultados.FCFO[i].CODCOLCFOFISCAL.toString(),   
             xmlResultados.FCFO[i].IDCFOFISCAL.toString(),   
             xmlResultados.FCFO[i].CALCULAAVP.toString(),   
             xmlResultados.FCFO[i].CODUSUARIOACESSO.toString(),   
             xmlResultados.FCFO[i].RECCREATEDBY.toString(),   
             xmlResultados.FCFO[i].RECCREATEDON.toString(),   
             xmlResultados.FCFO[i].RECMODIFIEDBY.toString(),   
             xmlResultados.FCFO[i].RECMODIFIEDON.toString(),   
             xmlResultados.FCFO[i].EMAILFISCAL.toString(),   
             xmlResultados.FCFO[i].IDINTEGRACAO.toString(),   
             xmlResultados.FCFO[i].INDNATRET.toString(),   
             xmlResultados.FCFO[i].TIPORENDIMENTO.toString(),   
             xmlResultados.FCFO[i].FORMATRIBUTACAO.toString(),   
             xmlResultados.FCFO[i].NIF.toString(),   
             xmlResultados.FCFO[i].SITUACAONIF.toString(),   
             xmlResultados.FCFO[i].DOCUMENTOESTRANGEIRO.toString(),   
             xmlResultados.FCFO[i].ISTOTVSMESSAGE.toString(),   
             xmlResultados.FCFO[i].INOVAR_AUTO.toString(),   
             xmlResultados.FCFO[i].FILIALFINANCEIRA.toString(),   
             xmlResultados.FCFO[i].TOMADORFOLHA.toString(),   
             xmlResultados.FCFO[i].CNAEPREP.toString(),   
             xmlResultados.FCFO[i].PERCENTACIDTRAB.toString(),   
             xmlResultados.FCFO[i].APLICFORMULA.toString(),   
             xmlResultados.FCFO[i].FORMULAVALDEDUCAOVARIAVEL.toString(),   
             xmlResultados.FCFO[i].CODCOLFORMULA.toString(),   
             xmlResultados.FCFO[i].CODCFOCOLINTEGRACAO.toString(),   
             xmlResultados.FCFO[i].CODCFOINTEGRACAO.toString(),   
             xmlResultados.FCFO[i].DIGVERIFICDEBAUTOMATICO.toString(),   
             xmlResultados.FCFO[i].TIPOCLIENTE.toString(),   
             xmlResultados.FCFO[i].TIPOCONTROLEPONTO.toString(),   
             xmlResultados.FCFO[i].CODFILIALOBRA.toString(),   
             xmlResultados.FCFO[i].FAP.toString(),   
             xmlResultados.FCFO[i].CONSIDERAFILIALOBRA.toString(),   
             xmlResultados.FCFO[i].CODCOLIGADAFILIALOBRA.toString(),   
             xmlResultados.FCFO[i].OBRAPROPRIA.toString(),   
             xmlResultados.FCFO[i].ENTIDADEEXECUTORAPAA.toString(),   
             xmlResultados.FCFO[i].CONTEVENTOCONTAB.toString(),   
             xmlResultados.FCFO[i].CODCOLCONTAGER.toString(),   
             xmlResultados.FCFO[i].CODPROF.toString(),   
             xmlResultados.FCFO[i].EMPRESA.toString(),   
             xmlResultados.FCFO[i].CODCARGO.toString()   
                                    ))}   
  
  
    // retorna...  
    return dataset;  
  
}  


/**'
* A API de autenticação da Totvs baseia no "Basic access authentication" do HTTP.
 * Código Java para autenticação 
 * Programa responsável por integrar com os Webservices do RM 
 *  Exemplo dev valores para os parâmetros 
 *		@param string Usuario = "mestre";
 *		@param string Senha = "totvs";
*/

function getWebService(Usuario, Senha){

    var Nome_Servico = "WSDATASERVER";
    var Caminho_Servico = "com.totvs.WsDataServer";
    
	var dataServerService = ServiceManager.getServiceInstance(Nome_Servico);
	if(dataServerService == null){
		throw "Servico nao encontrado: " + Nome_Servico;
	}
	
	var serviceLocator = dataServerService.instantiate(Caminho_Servico);
	if(serviceLocator == null){
		throw "Instancia do servico nao encontrada: " + Nome_Servico + " - " + Caminho_Servico;
	}

	var service = serviceLocator.getRMIwsDataServer();	
	if(service == null){
		throw "Instancia do dataserver do invalida: " + Nome_Servico + " - " + Caminho_Servico;
	}

	var serviceHelper = dataServerService.getBean();
	if(serviceHelper == null){
		throw "Instancia do service helper invalida: " + Nome_Servico + " - " + Caminho_Servico;
	}

	var authService = serviceHelper.getBasicAuthenticatedClient(service, "com.totvs.IwsDataServer", Usuario, Senha);	  
	if(serviceHelper == null){
		throw "Instancia do auth service invalida: " + Nome_Servico + " - " + Caminho_Servico;
	}
	
	return authService;
}


function dcReadView(dataservername, context, usuario, senha, filtro)
{	 
      // carrega o webservice...
	  var authService = getWebService(usuario, senha);
	  
      // lê os dados da visão respeitando o filtro passado
	  var viewData = new String(authService.readView(dataservername, filtro, context));

	  return viewData;
 }


function dcReadRecord(dataservername, context, usuario, senha, primaryKey)
{	 
      // carrega o webservice...
	  var authService = getWebService(usuario, senha);

      // lê os dados do registro respeitando a pk passada
	  try
	  {
		var recordData = new String(authService.readRecord(dataservername, primaryKey, context));
	  }
	  catch (e) 
	  {
		  var recordData = new String(authService.getSchema(dataservername, context));
	  }
	  
	  return recordData;
 }
  
 
function dcSaveRecord(dataservername, context, usuario, senha, xml)
{	 
      // carrega o webservice...
	  var authService = getWebService(usuario, senha);

      // salva o registro de acordo com o xml passado
	  var pk = new String(authService.readRecord(dataservername, xml, context));
	  	  
	  return pk;
 }
 
 
//Transforma o conceito de constraints do Fluig para o Filtro do TBC.
function parseConstraints(constraints, filterRequired)
{
	// inicializa o resultado...
	var result = [];
	result.context = "";
	
	// inicializa o filtro...
	var filter = "";
	
	// varre as contraints...
    for	(con in constraints) {
    	var fieldName = con.getFieldName().toUpperCase();
    	if (fieldName == "RMSCONTEXT")
    	{
    		result.context = con.getInitialValue();
    		continue;
    	}
    	
    	filter += "(";
    	
    	if (fieldName == "RMSFILTER")
		{
    		filter += con.getInitialValue();
		}
    	else
		{
    		if (con.getInitialValue() == con.getFinalValue() || isEmpty(con.getFinalValue()))
			{
				filter += con.getFieldName();
				var isLike = false;
				switch(con.getConstraintType())
				{
					case ConstraintType.MUST:
						filter += " = ";
					break;
					case ConstraintType.MUST_NOT:
						filter += " = ";
					break;
					case ConstraintType.SHOULD:
						filter += " LIKE ";
						isLike = true;
					break;
					case ConstraintType.SHOULD_NOT:
						filter += " NOT LIKE ";
						isLike = true;
					break;
				}
				filter += getFormattedValue(con.getInitialValue(), isLike);
			}
    		else
			{
    			filter += con.getFieldName();
    			filter += " BETWEEN ";
    			filter += getFormattedValue(con.getInitialValue(), false);
    			filter += " AND ";
    			filter += getFormattedValue(con.getFinalValue(), false);
			}
		}
    	
		filter += ") AND ";
	}
    
    if (filter.length == 0)
    {
    	if(filterRequired){
    	  filter = "1=1";
    	}
    	else{
      	  filter = "1=1";
    	}
    }
    else
    	filter = filter.substring(0, filter.length-5);
    
    // guarda o filtro...
    result.filter = filter;
    
    // retorna o resultado...
    return result;
}

function isEmpty(str) {
    return (!str || 0 === str.length);
}

function getFormattedValue(value, isLike){
	if(isLike){
	  return "'%" + value + "%'";
	}
	else{
	  return "'" + value + "'";
	}
}



function getXMLFromString(xmlString) {
	var factory = javax.xml.parsers.DocumentBuilderFactory.newInstance();
	var parser = factory.newDocumentBuilder();
	var is = new org.xml.sax.InputSource();
    is.setCharacterStream(new java.io.StringReader(xmlString));
	return parser.parse(is);
}

 
 function abrirPesquisa(DATASET_ID, dataFields, resultFields, type, title){	
	window.open("/webdesk/zoom.jsp" +
	"?datasetId=" +
	DATASET_ID +
	"&dataFields=" +
	dataFields +
	"&resultFields=" +
	resultFields +
	"&type=" +
	type+
	"&title=" +
	title 	
	, "zoom", "status,scroolbars=no,width=600,height=350,top=0,left=0");
}

function checkIsPK(result, qtd){
	var lines = result.split('\r');
	
	if(lines.length == 1){
		var pk = result.split(';');
		if(pk.length == qtd)
			return;
	}
		throw result;
	
}

 function ChekExist(result)
 {
	 var lines = result.split('\r');
	if(lines.length > 1)
		return true
	else
		return false;
 }
 

function replaceValue(text, columnName, newValue){

	
	if ((newValue != null) && (newValue.trim() != ""))
	{
		var regex = new RegExp("<" + columnName + ">(.*?)<\\/" + columnName + ">", "g");
		var replaceText = "<" + columnName + ">" + newValue + "</" + columnName + ">";
		
		return text.replace(regex, replaceText);
	}
	else
		return text;
}


function isEmpty(str) {
    return (!str || 0 === str.length);
}
