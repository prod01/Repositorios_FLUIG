function setSelectedZoomItem(selectedItem) {
	
	console.log("chamou a func setSelectedZoomItem")
	
	if (selectedItem.inputId == "NOME_COMPLETO") {
		
		console.log("entrou if")
		
		document.getElementById("lOCAL_BASE").value = selectedItem["G_NOME"]
	
		document.getElementById("CHAPA").value = selectedItem["CHAPA"]
		
		document.getElementById("FUNCAO").value = selectedItem["F_NOME"]
		
		console.log("selectedItem[CHAPA]" + selectedItem["RESPONSAVEL"])
		
			var c1 = DatasetFactory.createConstraint("RESPONSAVEL", selectedItem["RESPONSAVEL"], selectedItem["RESPONSAVEL"], ConstraintType.MUST);
			var constraints = new Array(c1);
			console.log("return constraints" + constraints)
			var dataset = DatasetFactory.getDataset("DS_Responsavel_Func", new Array("EMAIL"), constraints, null);
			console.log("return dataset" + dataset)
			var row = dataset.values[0]["EMAIL"]
			console.log("return testo" + row)
			document.getElementById("EMAIL").value = row
			console.log("return testo" + row)
	}
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function dataLancamento() {
			var dataH = new Date();
			console.log( "dataH"+dataH )
			
			var d = dataH.getDate();
			var m = dataH.getMonth() + 1;
			var a = dataH.getFullYear();
			
			if (m < 10) {
				m = "0" + m;
			}
			
			if (d < 10) {
				d = "0" + d;
			}
			
			var dia = d + "/" + m + "/" + a;
			
			document.getElementById("DATA_LANCAMENTO").value = dia
			
			var h = dataH.getHours();
			var m = dataH.getMinutes();
			
			if (h < 10) {
				h = "0" + h;
			}
			
			if (m < 10) {
				m = "0" + m;
			}
			
			var hor = h + ":" + m;
			
			document.getElementById("HORA_LANCAMENTO").value = hor
			
			var dataFull = dia + " " + hor;
	
}