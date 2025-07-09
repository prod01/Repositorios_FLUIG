function setSelectedZoomItem(selectedItem) {
	
	if (selectedItem.inputId == "IDMAQUINA") {
		document.getElementById("VALORULTIMAMEDICAO").value = selectedItem["VALORMEDIDOR1"];
		document.getElementById("VALORMAXMAMEDICAO").value = selectedItem["HORASMAXIMAS"];
		document.getElementById("IDHISTINDICADOR").value = selectedItem["ID"];
		document.getElementById("DATAULTLANCAMENTO").value = selectedItem["DATACOLETA"];
		document.getElementById("USAINDICADORUSO5").value = selectedItem["USAINDICADORUSO5"];
		
		if (selectedItem["USAINDICADORUSO5"] == "1"){
			document.getElementById("VALORMEDIDOR5").removeAttribute("readonly");
		} else {
			document.getElementById("VALORMEDIDOR5").setAttribute("readonly", "readonly");
			document.getElementById("VALORMEDIDOR5").value = "";
		}
	}
		
}
	
function setZoomData(instance, value) {
	window[instance].setValue(value);
}

function removedZoomItem(removedItem) {
	
	if (removedItem.inputId == "IDMAQUINA") {
		document.getElementById("VALORULTIMAMEDICAO").value = "";
		document.getElementById("VALORMAXMAMEDICAO").value = "";
		document.getElementById("IDHISTINDICADOR").value = "";
		document.getElementById("DATAULTLANCAMENTO").value = "";
	}
	
}