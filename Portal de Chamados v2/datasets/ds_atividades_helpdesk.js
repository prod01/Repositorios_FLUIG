function createDataset(fields, constraints, sortFields) {
	//DATASET QUE PEGA AS INFORMAÇÕES DE QUEM ABRIU O CHAMADO
	var dataset = DatasetBuilder.newDataset();

	dataset.addColumn("QUANTIDADE");
	dataset.addColumn("FULLNAME");
	dataset.addColumn("LOGIN");
	dataset.addColumn("CDMATRICULA");
	dataset.addColumn("PAPELTECNICO");

	var codSentenca = '115';
	var codColigada = '0';
	var codAplicacao = 'G';

	var descricao = "%";

	for (var i = 0; i < constraints.length; i++) {
		log.info("const " + i + "------");
		log.info("Chave " + i + ": " + constraints[i].fieldName);
		log.info("Valor " + i + ": " + constraints[i].initialValue);

		if (constraints[i].fieldName == "PAPELTECNICO") {
			descricao = constraints[i].initialValue;
		}
	}

	var campos = new Array("QUANTIDADE", "FULL_NAME", "LOGIN", "CD_MATRICULA", "PAPELTECNICO");

	var c1 = DatasetFactory.createConstraint("CODSENTENCA", codSentenca,
			codSentenca, ConstraintType.MUST);
	var c2 = DatasetFactory.createConstraint("CODCOLIGADA", codColigada,
			codColigada, ConstraintType.MUST);
	var c3 = DatasetFactory.createConstraint("CODAPLICACAO", codAplicacao,
			codAplicacao, ConstraintType.MUST);
	var c4 = DatasetFactory.createConstraint("PAPELTECNICO", descricao,
			descricao, ConstraintType.MUST);

	var arrayConstraints = new Array(c1, c2, c3, c4);

	var datasetRM = DatasetFactory.getDataset("ds_generic_rm_sql", campos,
			arrayConstraints, null);

	if (datasetRM == null || datasetRM == undefined) {
		throw "Ocorreu um erro ao executar a consulta ao RM. Favor entrar em contato com a equipe de TI.";

	} else {

		for (var i = 0; i < datasetRM.rowsCount; i++) {
			var QUANTIDADE = datasetRM.getValue(i, "QUANTIDADE");
			var FULLNAME = datasetRM.getValue(i, "FULL_NAME");
			var LOGIN = datasetRM.getValue(i, "LOGIN");
			var CDMATRICULA = datasetRM.getValue(i, "CD_MATRICULA");
			var PAPELTECNICO = datasetRM.getValue(i, "PAPELTECNICO");
			dataset.addRow(new Array(QUANTIDADE, FULLNAME, LOGIN, CDMATRICULA, PAPELTECNICO));
		}

		return dataset;
	}

	return null;

}

function converteDataBanco(dataBanco) {
	var splitData = dataBanco.split("T");
	if (splitData[0] != undefined && splitData[0] != null && splitData[0] != "") {
		var dataAmericana = splitData[0];
		var splitDataAmericana = dataAmericana.split("-");
		return splitDataAmericana[2] + "/" + splitDataAmericana[1] + "/"
				+ splitDataAmericana[0];
	} else {
		return "";
	}
}