function beforeCancelProcess(colleagueId,processId){

	 var Now_State =parseInt(getValue("WKNumState"));
	if(Now_State ==9){
		
		throw "Você não pode cancelar uma solicitação atendida, favor fechar-la."; 
	}
}