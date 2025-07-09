function beforeTaskSave(colleagueId,nextSequenceId,userList){
	
	var numState = getValue("WKNumState");
    var process = getValue("WKNumProces");
    

    log.info("numState: "+numState)
    log.info("process: "+process)
    log.info("hAPI.listAttachments().size(): "+hAPI.listAttachments().size())
    
    if ( (numState == "0" || numState == "4") && hAPI.listAttachments().size() <1 && hAPI.getCardValue("DISPONIBILIDADE_FISICA")== "PADRAO"){ //etapa do processo
        if (temAnexo() == "NAOTEM") {
            log.info("Segundo if entrou")
        	throw "<br/><br/><strong>É obrigatório o anexo nesta atividade 15, 18.</strong><br/>";
        }
    }
    if ( numState == "15" || numState == "18"){ //etapa do processo
        if (temAnexo() == "NAOTEM") {
            log.info("Segundo if entrou")
        	throw "<br/><br/><strong>É obrigatório o anexo nesta atividade 15, 18.</strong><br/>";
        }
    }
    if (process == "16" && hAPI.listAttachments().size() < 5 && hAPI.getCardValue("TIPO_SOLICITACAO")!= "RECISAO" && hAPI.getCardValue("DISPONIBILIDADE_FISICA")== "PADRAO" ){
    	if (temAnexo() == "NAOTEM") {
            log.info("Segundo if entrou")
    	throw "<br/><br/><strong>É obrigatório o anexo nesta atividade 14.</strong><br/>";
    	}
    }
    
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
        return "NAOTEM";    
    }
	
}