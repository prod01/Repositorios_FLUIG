function afterStateEntry(sequenceId){
	

	//pega o valor do WKDocument e transforma ele em duas variaveis 
	var doc = getValue("WKDocument");
	try{
		var docExpires = doc.getExpires();
		var docExpirationDate = doc.getExpirationDate();
		
		log.info("doc: "+doc)
		log.info("docExpires: "+docExpires)
		log.info("docExpirationDate: "+docExpirationDate)
	}
	catch(e){
		log.info("Erro: "+e)
	}
	
}


