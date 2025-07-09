function beforeCancelProcess(colleagueId,processId){
	
	// função que esta validando o cancelamento indevido da solicitação.
	
	log.info("beforeCancelProcess")
	
	var atividade = getValue("WKNumState");
	log.info("atividade" + atividade)

	if (atividade == '9' || atividade == '20' ){
		
		log.info("entrou if ")
		
		
		throw "Você não pode cancelar esta solicitação"
	}
	
	
	
}