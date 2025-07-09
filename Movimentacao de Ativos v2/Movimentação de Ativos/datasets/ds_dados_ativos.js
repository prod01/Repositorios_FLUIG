function createDataset(fields, constraints, sortFields) {

	var dataset = DatasetBuilder.newDataset();

	dataset.addColumn("EQUIPAMENTO");
	dataset.addColumn("SERIE");
	dataset.addColumn("MODELO");
	dataset.addColumn("ANO");
	dataset.addColumn("LOCALORIGEM");
	dataset.addColumn("CCORIGEM");
	dataset.addColumn("HORIMETRO");
	dataset.addColumn("PLACA");
	dataset.addColumn("CHASSI");
	dataset.addColumn("RESPONSAVEL");
	dataset.addColumn("AQUISICAO");

	var codSentenca = '080';
	var codColigada = '0';
	var codAplicacao = 'G';

	var descricao = "%";

	for (var i = 0; i < constraints.length; i++) {
		log.info("const " + i + "------");
		log.info("Chave " + i + ": " + constraints[i].fieldName);
		log.info("Valor " + i + ": " + constraints[i].initialValue);

		if (constraints[i].fieldName == "EQUIPAMENTO") {
			descricao = constraints[i].initialValue;
		}
	}

	var campos = new Array("EQUIPAMENTO", "SERIE", "MODELO"
						, "ANO", "LOCALORIGEM", "CCORIGEM"
						, "HORIMETRO", "PLACA", "CHASSI"
						, "RESPONSAVEL", "AQUISICAO");

	var c1 = DatasetFactory.createConstraint("CODSENTENCA", codSentenca,
			codSentenca, ConstraintType.MUST);
	var c2 = DatasetFactory.createConstraint("CODCOLIGADA", codColigada,
			codColigada, ConstraintType.MUST);
	var c3 = DatasetFactory.createConstraint("CODAPLICACAO", codAplicacao,
			codAplicacao, ConstraintType.MUST);
	var c4 = DatasetFactory.createConstraint("EQUIPAMENTO", descricao,
			descricao, ConstraintType.MUST);

	var arrayConstraints = new Array(c1, c2, c3, c4);

	var datasetRM = DatasetFactory.getDataset("ds_generic_rm_sql", campos,
			arrayConstraints, null);

	if (datasetRM == null || datasetRM == undefined) {
		throw "Ocorreu um erro ao executar a consulta ao RM. Favor entrar em contato com a equipe de TI.";

	} else if (datasetRM.rowsCount < 1) {
		throw "Não foram encontrados resultados para sua pesquisa.";

	} else {

		for (var i = 0; i < datasetRM.rowsCount; i++) {
			var EQUIPAMENTO = isNull(datasetRM.getValue(i, "EQUIPAMENTO"));
			var SERIE = isNull(datasetRM.getValue(i, "NSERIE"));
			var MODELO = isNull(datasetRM.getValue(i, "MODELO"));
			var ANO = isNull(datasetRM.getValue(i, "ANO"));
			var LOCALORIGEM = isNull(datasetRM.getValue(i, "LOCALORIGEM"));
			var CCORIGEM = isNull(datasetRM.getValue(i, "CCORIGEM"));
			var HORIMETRO = isNull(datasetRM.getValue(i, "HORIMETRO"));
			var PLACA = isNull(datasetRM.getValue(i, "PLACA"));
			var CHASSI = isNull(datasetRM.getValue(i, "CHASSI"));
			var RESPONSAVEL = isNull(datasetRM.getValue(i, "RESPONSAVEL"));
			var AQUISICAO = datasetRM.getValue(i, "AQUISICAO");
			dataset.addRow(new Array(EQUIPAMENTO, SERIE, MODELO, ANO, LOCALORIGEM, CCORIGEM, HORIMETRO, PLACA, CHASSI, RESPONSAVEL, AQUISICAO));
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

function isNull(dataCampo){
	console.log("===\n"+dataCampo)
	if (dataCampo == "undefined" || dataCampo == null || dataCampo == "") {
		return "Em branco no TOTVS"
	} else {
		return dataCampo
	}
}