function createDataset(fields, constraints, sortFields) {
	//DATASET QUE PEGA AS INFORMAÇÕES DE QUEM ABRIU O CHAMADO
	var dataset = DatasetBuilder.newDataset();

	dataset.addColumn("P_NOME");
	dataset.addColumn("CHAPA");
	dataset.addColumn("CODSECAO");
	dataset.addColumn("NROCENCUSTOCONT");
	dataset.addColumn("G_NOME");
	dataset.addColumn("RESPONSAVEL");
	dataset.addColumn("CODCOLIGADA");
	dataset.addColumn("CODSITUACAO");
	dataset.addColumn("F_CODIGO");
	dataset.addColumn("F_NOME");

	var codSentenca = '126';
	var codColigada = '0';
	var codAplicacao = 'G';

	var descricao = "%";

	for (var i = 0; i < constraints.length; i++) {
		log.info("const " + i + "------");
		log.info("Chave " + i + ": " + constraints[i].fieldName);
		log.info("Valor " + i + ": " + constraints[i].initialValue);

		if (constraints[i].fieldName == "P_NOME") {
			descricao = constraints[i].initialValue;
		}
	}

	var campos = new Array("P_NOME","CHAPA", "CODSECAO", "NROCENCUSTOCONT", "G_NOME","RESPONSAVEL", "CODCOLIGADA", "CODSITUACAO", "F_CODIGO", "F_NOME");

	var c1 = DatasetFactory.createConstraint("CODSENTENCA", codSentenca,
			codSentenca, ConstraintType.MUST);
	var c2 = DatasetFactory.createConstraint("CODCOLIGADA", codColigada,
			codColigada, ConstraintType.MUST);
	var c3 = DatasetFactory.createConstraint("CODAPLICACAO", codAplicacao,
			codAplicacao, ConstraintType.MUST);
	var c4 = DatasetFactory.createConstraint("P_NOME", descricao,
			descricao, ConstraintType.MUST);

	var arrayConstraints = new Array(c1, c2, c3, c4);

	var datasetRM = DatasetFactory.getDataset("ds_generic_rm_sql", campos,
			arrayConstraints, null);

	if (datasetRM == null || datasetRM == undefined) {
		throw "Ocorreu um erro ao executar a consulta ao RM. Favor entrar em contato com a equipe de TI.";

	} else {

		for (var i = 0; i < datasetRM.rowsCount; i++) {
			var P_NOME = datasetRM.getValue(i, "P_NOME");
			var CHAPA = datasetRM.getValue(i, "CHAPA");
			var CODSECAO = datasetRM.getValue(i, "CODSECAO")
			var NROCENCUSTOCONT = datasetRM.getValue(i, "NROCENCUSTOCONT");
			var G_NOME = datasetRM.getValue(i, "G_NOME");
			var RESPONSAVEL = datasetRM.getValue(i, "RESPONSAVEL");
			var CODCOLIGADA = datasetRM.getValue(i, "CODCOLIGADA")
			var CODSITUACAO = datasetRM.getValue(i, "CODSITUACAO");
			var F_CODIGO = datasetRM.getValue(i, "F_CODIGO")
			var F_NOME = datasetRM.getValue(i, "F_NOME");
			dataset.addRow(new Array(P_NOME, CHAPA, CODSECAO, NROCENCUSTOCONT, G_NOME, RESPONSAVEL, CODCOLIGADA, CODSITUACAO,F_CODIGO,F_NOME ));
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