function createDataset(fields, constraints, sortFields) {

	var dataset = DatasetBuilder.newDataset();

	dataset.addColumn("CODIGOPRD");
	dataset.addColumn("IDPRD");
	dataset.addColumn("NOMEFANTASIA");
	dataset.addColumn("TIPO");
	

	var codSentenca = '106';
	var codColigada = '0';
	var codAplicacao = 'G';

	var constraintChapa = "%";
	var constraintPapel = "%";

	for (var i = 0; i < constraints.length; i++) {
		log.info("const " + i + "------");
		log.info("Chave " + i + ": " + constraints[i].fieldName);
		log.info("Valor " + i + ": " + constraints[i].initialValue);

		if (constraints[i].fieldName == "NOMEFANTASIA") {
			constraintChapa = constraints[i].initialValue;
		}
	}

	var campos = new Array("CODIGOPRD", "IDPRD", "NOMEFANTASIA", "TIPO");

	var c1 = DatasetFactory.createConstraint("CODSENTENCA", codSentenca,
			codSentenca, ConstraintType.MUST);
	var c2 = DatasetFactory.createConstraint("CODCOLIGADA", codColigada,
			codColigada, ConstraintType.MUST);
	var c3 = DatasetFactory.createConstraint("CODAPLICACAO", codAplicacao,
			codAplicacao, ConstraintType.MUST);
	var c4 = DatasetFactory.createConstraint("NOMEFANTASIA", constraintChapa,
			constraintChapa, ConstraintType.MUST);

	var arrayConstraints = new Array(c1, c2, c3, c4);

	var datasetRM = DatasetFactory.getDataset("ds_generic_rm_sql", campos,
			arrayConstraints, null);

	if (datasetRM == null || datasetRM == undefined) {
		throw "Ocorreu um erro ao executar a consulta ao RM. Favor entrar em contato com a equipe de TI.";

	} else if (datasetRM.rowsCount < 1) {
		throw "Não foram encontrados resultados para sua pesquisa.";

	} else {

		for (var i = 0; i < datasetRM.rowsCount; i++) {
			var CODIGOPRD = datasetRM.getValue(i, "CODIGOPRD");
			var IDPRD = datasetRM.getValue(i, "IDPRD");
			var NOMEFANTASIA = datasetRM.getValue(i, "NOMEFANTASIA");
			var TIPO = datasetRM.getValue(i, "TIPO");
			dataset.addRow(new Array(CODIGOPRD, IDPRD, NOMEFANTASIA, TIPO));
		}

		return dataset;
	}

	return null;

}
