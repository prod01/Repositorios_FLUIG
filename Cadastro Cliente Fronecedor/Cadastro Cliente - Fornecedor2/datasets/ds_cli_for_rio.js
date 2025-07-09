function createDataset(fields, constraints, sortFields)  
{  
    /* Prepararação das variaveis */    
  
    //usuário e senha do aplicativo RM. O mesmo utilizado para logar no sistema e que tenha permissão de     
    //acesso ao cadastro que deseja utilizar    
    var usuario = "arthur.evangelista";    
    var senha = "p4x2g5r6t7";    
    //importante passar no contexto o mesmo código de usuário usado para logar no webservice    
          
          
          
    var context = "CODSISTEMA=G;CODCOLIGADA=1;CODUSUARIO=mestre";   
    //o filtro pode ser qualquer campo da visão, por exemplo CODCOLIGADA=1 AND CODFILIAL = 1    
    var filtro = "FCFO.CODCOLIGADA = 1" ;    
    /* Fim Prepararação das variaveis */    
  
    var retorno = dcReadView("EstPrdCfoDataBR", context, usuario, senha, filtro)    
  
    //Caso deseje utilizar as contraints do formulário  
    //var parsedConstraints = parseConstraints(constraints, true);  
    //var retorno = authService.readView("EstPrdCfoDataBR", parsedConstraints.filter, parsedConstraints.context, senha, filtro);  
      
      
    var xmlResultados = new XML(retorno);  
  
    var dataset = DatasetBuilder.newDataset();     
             dataset.addColumn('CODCOLIGADA');   
             dataset.addColumn('IDPRD');   
             dataset.addColumn('CODCOLCFO');   
             dataset.addColumn('CODCFO');   
             dataset.addColumn('CODNOFORN');   
             dataset.addColumn('PERCENTFORNECIMENTO');   
             dataset.addColumn('FATOREMBALAGEM');   
             dataset.addColumn('ATIVO');   
             dataset.addColumn('VALOR');   
             dataset.addColumn('DT_VALIDADE');   
             dataset.addColumn('NUM_CONTRATO');   
             dataset.addColumn('PATH_IMAGEM');   
             dataset.addColumn('TEMPOFORNEC');   
             dataset.addColumn('IDMOV');   
             dataset.addColumn('NSEQITMMOV');   
             dataset.addColumn('DATAATUALIZACAO');   
             dataset.addColumn('FORNECPRIORITARIO');   
             dataset.addColumn('DESCONTO');   
             dataset.addColumn('CAMPOLIVRE');   
             dataset.addColumn('CODMOEDAPRECO');   
             dataset.addColumn('CODIGOIRRF');   
             dataset.addColumn('DEDUCAOIRRF');   
             dataset.addColumn('CODIGOINSS');   
    for(var i = 0; i < xmlResultados.TPrdCfo.length(); i++)   
    {   
           dataset.addRow(new Array(   
             xmlResultados.TPrdCfo[i].CODCOLIGADA.toString(),   
             xmlResultados.TPrdCfo[i].IDPRD.toString(),   
             xmlResultados.TPrdCfo[i].CODCOLCFO.toString(),   
             xmlResultados.TPrdCfo[i].CODCFO.toString(),   
             xmlResultados.TPrdCfo[i].CODNOFORN.toString(),   
             xmlResultados.TPrdCfo[i].PERCENTFORNECIMENTO.toString(),   
             xmlResultados.TPrdCfo[i].FATOREMBALAGEM.toString(),   
             xmlResultados.TPrdCfo[i].ATIVO.toString(),   
             xmlResultados.TPrdCfo[i].VALOR.toString(),   
             xmlResultados.TPrdCfo[i].DT_VALIDADE.toString(),   
             xmlResultados.TPrdCfo[i].NUM_CONTRATO.toString(),   
             xmlResultados.TPrdCfo[i].PATH_IMAGEM.toString(),   
             xmlResultados.TPrdCfo[i].TEMPOFORNEC.toString(),   
             xmlResultados.TPrdCfo[i].IDMOV.toString(),   
             xmlResultados.TPrdCfo[i].NSEQITMMOV.toString(),   
             xmlResultados.TPrdCfo[i].DATAATUALIZACAO.toString(),   
             xmlResultados.TPrdCfo[i].FORNECPRIORITARIO.toString(),   
             xmlResultados.TPrdCfo[i].DESCONTO.toString(),   
             xmlResultados.TPrdCfo[i].CAMPOLIVRE.toString(),   
             xmlResultados.TPrdCfo[i].CODMOEDAPRECO.toString(),   
             xmlResultados.TPrdCfo[i].CODIGOIRRF.toString(),   
             xmlResultados.TPrdCfo[i].DEDUCAOIRRF.toString(),   
             xmlResultados.TPrdCfo[i].CODIGOINSS.toString()   
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
