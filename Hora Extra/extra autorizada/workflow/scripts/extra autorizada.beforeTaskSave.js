function beforeTaskSave(colleagueId,nextSequenceId,userList){

	var processo = getValue("WKNumProces");
	hAPI.setCardValue("NUM_PROCESS",processo)
	
//	
//	var HORA = hAPI.getCardValue("HORA_EXTRA")
//	log.info('HORA INETEIRA' + HORA)
//	
//	var MIN = HORA * 60
//	log.info('MIN INETEIRA' + MIN)
//	hAPI.setCardValue("MINUTOS_XML",MIN)
	
}