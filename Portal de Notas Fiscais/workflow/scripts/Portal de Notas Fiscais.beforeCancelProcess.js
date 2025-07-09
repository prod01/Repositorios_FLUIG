function beforeCancelProcess(colleagueId,processId){
	
	log.info("Entrou cancel process:");
	var matrUser = getValue("WKUser");
	var atividade = getValue("WKNumState");
	var nomeUser = "";
	var emailUser = "";
	var loginUser = "";
	var tiponota = "";

	var fields = [ "colleagueName", "mail", "login" ];
	var c1 = DatasetFactory.createConstraint("colleaguePK.colleagueId",
			matrUser, matrUser, ConstraintType.MUST);
	var c2 = DatasetFactory.createConstraint("colleaguePK.companyId",
			getValue("WKCompany"), getValue("WKCompany"), ConstraintType.MUST);
	
	var dataset = DatasetFactory.getDataset("colleague", fields, [ c1, c2 ],
			null);
	
	if (dsTemValor(dataset)) {
		log.info("DATASET TEM VALOR");
		nomeUser = dataset.getValue(0, "colleagueName");
		loginUser = dataset.getValue(0, "login");
		log.info("LOGIN :" + loginUser);

		if (temValor(loginUser)) {
			log.info("TEM VALOR");

//			if (loginUser == "Vagner.soares"){
//				log.info("ENTROU NO USUÁRIO");
//				 throw "<br/><br/><strong>Não é possível cancelar esta solicitação, caso seja realmente necessário solicitar para Julie Natalia!</strong>";
//			}
			
		}
	}
	function temValor(valor) {
		if (valor != null && valor != undefined && valor.trim() != "") {
			return true;
		} else {
			return false;
		}
	}
	function dsTemValor(dataset) {
		if (dataset != null && dataset != undefined && dataset.rowsCount > 0) {
			return true;
		} else {
			return false;
		}
	}
}