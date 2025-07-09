function validateForm(form){
	
	//variavel que recebe o codigo referente ao estado atual do processo.
    
    var verificaValorMedicao = parseFloat(form.getValue("VALORMEDICAO"));
    var verificaValorMaxMedicao =parseFloat(form.getValue("CAMPOVALORMAX"));
    var verificaValorMinMedicao = parseFloat(form.getValue("CAMPOVALORMIN"));
    log.info("verificaValorMedicao" + verificaValorMedicao);
    log.info("verificaValorMaxMedicao" + verificaValorMaxMedicao);
    log.info("verificaValorMinMedicao" + verificaValorMinMedicao);
    
    //teste do campo de valor da medição 
    
    var medicao = form.getValue("VALORMEDICAO") 
   
	if(verificaValorMedicao < verificaValorMinMedicao  ){
							
			    throw "Seu valor e inferior a " + verificaValorMinMedicao ; 		
	} 

	if(verificaValorMedicao > verificaValorMaxMedicao  ){
					
			    throw "Seu valor e superior a " + verificaValorMaxMedicao ; 		
	}	
	
	
	if (form.getValue("IDMAQUINA") == ""){
		
		throw "Necessario preencha o id da maquina";
	}
	
	for (var i = form.getValue("SET_PRIMEIRO_VALOR"); i <= form.getValue("SET_ULTIMO_VALOR"); i++){
		
		if (form.getValue("VALORMEDICAO___"+i)== "" ){
			throw "Necessario Preencher o valor da medição.";
		}
		

		if (form.getValue("NOMEINDICEACOMPANHAMENTO___"+i) == ""){
			throw "Necessario Preencher o indice de acompanhamento.";
		}
		
	}   
	
	if (medicao /1 != medicao){
		throw "Necessario Preencher o valor medição.";
	}
	
	

}



