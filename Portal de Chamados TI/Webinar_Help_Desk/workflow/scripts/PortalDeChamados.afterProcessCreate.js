function afterProcessCreate(processId){
    
	log.info("afterProcessCreate: ")
	
	//Pega o valor do idchamado interno e seta o valor no html.
    hAPI.setCardValue("IDCHAMADO", processId); 
	

}