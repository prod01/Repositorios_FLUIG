function createDataset(fields, constraints, sortFields) {

	var dataset = DatasetBuilder.newDataset();

	dataset.addColumn("IDOBJOF");
	dataset.addColumn("IDOBJOFPAI");
	dataset.addColumn("POSICAO_PNEU");
	dataset.addColumn("IDTIPOOBJ");
	dataset.addColumn("IDHISTINDICADOR");


	var codSentenca = '090.1';
	var codColigada = '0';
	var codAplicacao = 'G';

	var constraint = "%";
	

	for (var i = 0; i < constraints.length; i++) {
		log.info("const " + i + "------");
		log.info("Chave " + i + ": " + constraints[i].fieldName);
		log.info("Valor " + i + ": " + constraints[i].initialValue);

		if (constraints[i].fieldName == "IDOBJOFPAI") {
			constraint = constraints[i].initialValue;
		}
	}

	var campos = new Array("IDOBJOF", "IDOBJOFPAI", "POSICAO_PNEU", "IDTIPOOBJ", "IDHISTINDICADOR");

	var c1 = DatasetFactory.createConstraint("CODSENTENCA", codSentenca,
			codSentenca, ConstraintType.MUST);
	var c2 = DatasetFactory.createConstraint("CODCOLIGADA", codColigada,
			codColigada, ConstraintType.MUST);
	var c3 = DatasetFactory.createConstraint("CODAPLICACAO", codAplicacao,
			codAplicacao, ConstraintType.MUST);
	var c4 = DatasetFactory.createConstraint("IDOBJOFPAI", constraint,
			constraint, ConstraintType.MUST);

	var arrayConstraints = new Array(c1, c2, c3, c4);

	var datasetRM = DatasetFactory.getDataset("ds_generic_rm_sql", campos,
			arrayConstraints, null);

	if (datasetRM == null || datasetRM == undefined) {
		throw "Ocorreu um erro ao executar a consulta ao RM. Favor entrar em contato com a equipe de TI.";

	} else if (datasetRM.rowsCount < 1) {
		throw "Não foram encontrados resultados para sua pesquisa.";

	} else {

		for (var i = 0; i < datasetRM.rowsCount; i++) {
			var IDOBJOF = datasetRM.getValue(i, "IDOBJOF");
			var IDOBJOFPAI = datasetRM.getValue(i, "IDOBJOFPAI");
			var POSICAO_PNEU = datasetRM.getValue(i, "POSICAO_PNEU");
			var IDTIPOOBJ = datasetRM.getValue(i, "IDTIPOOBJ");
			var IDHISTINDICADOR = datasetRM.getValue(i, "IDHISTINDICADOR");
			
			dataset.addRow(new Array(IDOBJOF, IDOBJOFPAI, POSICAO_PNEU, IDTIPOOBJ, IDHISTINDICADOR));
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