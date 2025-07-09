function createDataset(fields, constraints, sortFields) {

	var dataset = DatasetBuilder.newDataset();

	dataset.addColumn("IDINDICE");
	dataset.addColumn("NOME");
	dataset.addColumn("VALORMIN");
	dataset.addColumn("VALORMAX");
	dataset.addColumn("IDTIPOOBJ");

	var codSentenca = '091';
	var codColigada = '0';
	var codAplicacao = 'G';

	var constraintChapa = "%";
	var constraintPapel = "%";

	for (var i = 0; i < constraints.length; i++) {
		log.info("const " + i + "------");
		log.info("Chave " + i + ": " + constraints[i].fieldName);
		log.info("Valor " + i + ": " + constraints[i].initialValue);

		if (constraints[i].fieldName == "IDTIPOOBJ") {
			constraintChapa = constraints[i].initialValue;
		}
	}

	var campos = new Array("IDINDICE", "NOME", "VALORMIN", "VALORMAX", "IDTIPOOBJ");

	var c1 = DatasetFactory.createConstraint("CODSENTENCA", codSentenca,
			codSentenca, ConstraintType.MUST);
	var c2 = DatasetFactory.createConstraint("CODCOLIGADA", codColigada,
			codColigada, ConstraintType.MUST);
	var c3 = DatasetFactory.createConstraint("CODAPLICACAO", codAplicacao,
			codAplicacao, ConstraintType.MUST);
	var c4 = DatasetFactory.createConstraint("IDTIPOOBJ", constraintChapa,
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
			var IDINDICE = datasetRM.getValue(i, "IDINDICE");
			var NOME = datasetRM.getValue(i, "NOME");
			var VALORMIN = datasetRM.getValue(i, "VALORMIN");
			var VALORMAX = datasetRM.getValue(i, "VALORMAX");
			var IDTIPOOBJ = datasetRM.getValue(i, "IDTIPOOBJ");
			dataset.addRow(new Array(IDINDICE, NOME, VALORMIN, VALORMAX, IDTIPOOBJ));
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