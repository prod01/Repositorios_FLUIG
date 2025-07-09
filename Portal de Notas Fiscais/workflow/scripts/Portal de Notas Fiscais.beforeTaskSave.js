function beforeTaskSave(colleagueId, nextSequenceId, userList) {

    var numState = getValue("WKNumState");
    var process = getValue("WKNumProces");
    var transferencia = getValue("WKIsTransfer");
    var anexado = false;
    var message = "";
    
    var TEMCTE = hAPI.getCardValue("CB_Cte");
    var TEMBOLETO = hAPI.getCardValue("CB_Boleto");

    /*if(numState = 0 && hAPI.listAttachments().size() < 2) {
        message += "<br/>- É necessario anexar os documentos;"
    }*/
    if (numState == "0" || numState == "4" || numState == "56"){ //etapa do processo
        if (temAnexo() == "NAOTEM"){ message += "<br/>- É necessario anexar os documentos;";}

        if (hAPI.listAttachments().size() < 1) {
        	throw "<br/><br/><strong>É obrigatório o anexo da NF</strong><br/>";
        } else if (hAPI.listAttachments().size() < 2 && TEMCTE == "1") {
        	throw "<br/><br/><strong>É obrigatório o anexo da NF e do CTE</strong><br/>";
        }
    }
    
    if (getValue("WKIsTransfer") == 1 && numState == "35" && (getValue("WKUser") != "fca72ff2-6312-4823-a493-16749c0875ee"
    	&& getValue("WKUser") != "e689bfd1-cf74-471e-93ee-55f2e03652f4" && getValue("WKUser") != "0e3d63e2-ace9-4a19-9cbb-73f41d63bf44" && getValue("WKUser") != "27f372e5-637e-4726-b821-62384015e4ef"
        	&& getValue("WKUser") != "19080c7f-d97b-4f93-b8ef-12d70e86d681") ){ 
    	throw "<br/><br/><strong>Você não tem permissão para transferir a atividade!</strong><br/>";
    }
    
    function temAnexo(){        
        var constraintProcessAttachment = DatasetFactory.createConstraint('processAttachmentPK.processInstanceId', process, process, ConstraintType.MUST);
        var datasetProcessAttachment = DatasetFactory.getDataset('processAttachment', null, new Array(constraintProcessAttachment), null);

        for(var i = 0; i < datasetProcessAttachment.rowsCount; i++) {
            var constraintProcessHistory1 = DatasetFactory.createConstraint('processHistoryPK.movementSequence', datasetProcessAttachment.getValue(i, "originalMovementSequence"), datasetProcessAttachment.getValue(i, "originalMovementSequence"), ConstraintType.MUST);
            var constraintProcessHistory2 = DatasetFactory.createConstraint('processHistoryPK.processInstanceId', process, process, ConstraintType.MUST);
            var constraintProcessHistory3 = DatasetFactory.createConstraint('processHistoryPK.companyId', datasetProcessAttachment.getValue(i, "processAttachmentPK.companyId"), datasetProcessAttachment.getValue(i, "processAttachmentPK.companyId"), ConstraintType.MUST);
            var constraintProcessHistory4 = DatasetFactory.createConstraint('stateSequence', numState, numState, ConstraintType.MUST);
            var datasetProcessHistory = DatasetFactory.getDataset('processHistory', null, new Array(constraintProcessHistory1, constraintProcessHistory2, constraintProcessHistory3, constraintProcessHistory4), null);
            for(var j = 0; j < datasetProcessHistory.rowsCount; j++) {                
                return "TEM";            
            }    
        }
        return "NAOTEM";    
    }    
    
}