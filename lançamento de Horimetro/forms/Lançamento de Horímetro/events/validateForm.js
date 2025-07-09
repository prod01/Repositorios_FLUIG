function validateForm(form){
	
	 var Now_State = parseInt(getValue("WKNumState"));
	 var Next_State = parseInt(getValue("WKNextState"));
	 
	 
	 var VALORULTIMAMEDICAO = parseInt(form.getValue("VALORULTIMAMEDICAO"));
	 var VALORMEDIDOR1 = parseInt(form.getValue("VALORMEDIDOR1"));
	 var VALORMAXMAMEDICAO =parseInt(form.getValue("VALORMAXMAMEDICAO"));
	 
	
	
	if (form.getValue("IDMAQUINA") == ""){
		throw "Necessario preencha o ID da maquina";
	 }
	
	 var regex = /^(TDE|TCM|TTP|TPE|TPA|TRB|TEH|TPC|TRE|TMH|TPH|TDV|TTT|LCM|LCR|LDE|LDV|LEH|LMN|LMP|LOB|LPC|LPE|LPG|LRC|LRE|LTE).*/
			if ( regex.test(form.getValue("IDMAQUINA")) ){
					
					 if (form.getValue("VALORMEDIDOR1") == ""){
						 throw "Favor informar um horímetro!";
					 }
					
					 if (VALORMEDIDOR1 < VALORULTIMAMEDICAO){
						 throw "Você esta tentando lançar um horímetro menor que o da última medição!";
					 }
					 
					 if (VALORMEDIDOR1 > VALORMAXMAMEDICAO){
						 throw "Você esta tentando lançar um horímetro maior que o horímetro máximo estipulado!";
					 }
					 
					 if (form.getValue("USAINDICADORUSO5") == "1" && form.getValue("VALORMEDIDOR5") == ""){
						 throw "O campo Diesel/Gasolina/Alcool é obrigatório para este objeto!";
					}
	
			}else {
				
				throw "O ID da maquina e incompativel com o processo";
			} 
	
}