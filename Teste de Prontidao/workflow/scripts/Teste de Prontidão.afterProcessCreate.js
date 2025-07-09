function afterProcessCreate(processId){
	
	hAPI.setCardValue("IDCHAMADO", processId); //função que pega o numero do chamado do fluig 
    log.info("IDCHAMADO: " + processId)
    
}