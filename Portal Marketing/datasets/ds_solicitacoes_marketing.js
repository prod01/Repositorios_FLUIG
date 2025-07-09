function createDataset(fields, constraints, sortFields) {
//DATASET QUE PEGA AS INFORMAÇÕES DO TECNICO CADASTRADO 
	var dataset = DatasetBuilder.newDataset();

	dataset.addColumn("CHAPATECNICO");
	dataset.addColumn("PAPEL");

	var codSentenca = '083';
	var codColigada = '0';
	var codAplicacao = 'G';

	var constraintChapa = "%";
	var constraintPapel = "%";

	for (var i = 0; i < constraints.length; i++) {
		log.info("const " + i + "---Solicitacoes HelpDesk---");
		log.info("Chave " + i + ": " + constraints[i].fieldName);
		log.info("Valor " + i + ": " + constraints[i].initialValue);

		if (constraints[i].fieldName == "CHAPATECNICO") {
			constraintChapa = constraints[i].initialValue;
		}
		if (constraints[i].fieldName == "PAPEL") {
			constraintPapel = constraints[i].initialValue;
		}
	}

	var campos = new Array("CHAPATECNICO", "PAPEL");

	var c1 = DatasetFactory.createConstraint("CODSENTENCA", codSentenca,
			codSentenca, ConstraintType.MUST);
	var c2 = DatasetFactory.createConstraint("CODCOLIGADA", codColigada,
			codColigada, ConstraintType.MUST);
	var c3 = DatasetFactory.createConstraint("CODAPLICACAO", codAplicacao,
			codAplicacao, ConstraintType.MUST);
	var c4 = DatasetFactory.createConstraint("CHAPATECNICO", constraintChapa,
			constraintChapa, ConstraintType.MUST);
	var c5 = DatasetFactory.createConstraint("PAPEL", constraintPapel,
			constraintPapel, ConstraintType.MUST);

	var arrayConstraints = new Array(c1, c2, c3, c4, c5);

	var datasetRM = DatasetFactory.getDataset("ds_generic_rm_sql", campos,
			arrayConstraints, null);

	if (datasetRM == null || datasetRM == undefined) {
		throw "Ocorreu um erro ao executar a consulta ao RM. Favor entrar em contato com a equipe de TI.";

	} else if (datasetRM.rowsCount < 1) {
		throw "Não foram encontrados resultados para sua pesquisa.";

	} else {

		for (var i = 0; i < datasetRM.rowsCount; i++) {
			var CHAPATECNICO = datasetRM.getValue(i, "CHAPATECNICO");
			var PAPEL = datasetRM.getValue(i, "PAPEL");
			dataset.addRow(new Array(CHAPATECNICO, PAPEL));
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