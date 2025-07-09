function beforeTaskSave(colleagueId,nextSequenceId,userList){
	
	var numState = getValue("WKNumState");
	hAPI.setCardValue("ATIVIDADE", numState)
    var process = getValue("WKNumProces");
    var tipo = hAPI.getCardValue("TIPO_SOLICITACAO");

    log.info("numState: "+numState)
    log.info("process: "+process)
    log.info("hAPI.listAttachments().size(): "+hAPI.listAttachments().size())

    if (numState == "13"  && hAPI.listAttachments().size() < 1){ //etapa do processo
      
            log.info("Segundo if entrou")
        	throw "<br/><br/><strong>É obrigatório o anexo nesta atividade .</strong><br/>";
        
    }

    if ((numState == "0" || numState == "4") && tipo != "VAZIO" ){ //etapa do processo
      
            log.info("primeiro IF num state 0 - 4")
              if (hAPI.listAttachments().size() < 1) {
            	  log.info("Segundo IF num state 0 - 4")
        	throw "<br/><br/><strong>É obrigatório o anexo nesta atividade </strong><br/>";
              }
        
    }
//    if (numState == "0" && hAPI.listAttachments().size() < 4){
//    	throw "<br/><br/><strong>É obrigatório o anexo nesta atividade 14.</strong><br/>";
//    }
//    
    function temAnexo(){        
        var constraintProcessAttachment = DatasetFactory.createConstraint("processAttachmentPK.processInstanceId", process, process, ConstraintType.MUST);
        var datasetProcessAttachment = DatasetFactory.getDataset("processAttachment", null, new Array(constraintProcessAttachment), null);

        for(var i = 0; i < datasetProcessAttachment.rowsCount; i++) {
            var constraintProcessHistory1 = DatasetFactory.createConstraint('processHistoryPK.movementSequence', datasetProcessAttachment.getValue(i, "originalMovementSequence"), datasetProcessAttachment.getValue(i, "originalMovementSequence"), ConstraintType.MUST);
            var constraintProcessHistory2 = DatasetFactory.createConstraint('processHistoryPK.processInstanceId', process, process, ConstraintType.MUST);
            var constraintProcessHistory3 = DatasetFactory.createConstraint('processHistoryPK.companyId', datasetProcessAttachment.getValue(i, "processAttachmentPK.companyId"), datasetProcessAttachment.getValue(i, "processAttachmentPK.companyId"), ConstraintType.MUST);
            var constraintProcessHistory4 = DatasetFactory.createConstraint('stateSequence', numState, numState, ConstraintType.MUST);

            log.info("#################################################################")
            log.info("movementSequence: "+datasetProcessAttachment.getValue(i, "originalMovementSequence"))
            log.info("processInstanceId: "+process)
            log.info("companyId: "+datasetProcessAttachment.getValue(i, "processAttachmentPK.companyId"))
            log.info("stateSequence: "+numState)
            var datasetProcessHistory = DatasetFactory.getDataset('processHistory', null, new Array(constraintProcessHistory1, constraintProcessHistory2, constraintProcessHistory3, constraintProcessHistory4), null);
            for(var j = 0; j < datasetProcessHistory.rowsCount; j++) {  
                return "TEM"
            }
        }
        log.info("ENtou não tem")
        return "NAOTEM";    
        
    }
	
}