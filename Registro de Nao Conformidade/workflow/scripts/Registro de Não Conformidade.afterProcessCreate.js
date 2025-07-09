function afterProcessCreate(processId){
    
	//Pega o valor do idchamado interno e seta o valor no html.
    hAPI.setCardValue("IDCHAMADO", processId); 
    log.info("Idchamdo: " + processId)
    
}