function beforeStateEntry(sequenceId){
	
	
//	if (sequenceId = '5' ){ 
//	var processId = getValue("WKNumProces")
//	
//	log.info("before state entry: " + processId )
//
//    var c1 = DatasetFactory.createConstraint("processTaskPK.processInstanceId", processId, processId, ConstraintType.MUST);
//    log.info("Teste C1")
//    log.info("c1" + c1)
//	var c2 = DatasetFactory.createConstraint("closureStatus", 0, 0, ConstraintType.MUST);
//    log.info("Teste c2")
//    log.info("c2" + c2)
////	var c3 = DatasetFactory.createConstraint("active", true, true, ConstraintType.MUST);
////    log.info("Teste c3")
////    log.info("c3" + c3)
//	var constraints = new Array(c1,c2);
//	log.info("constraints : " + constraints)
//	try{
//		log.info("entrou primeiro try")
//		var dataset = DatasetFactory.getDataset("processTask", null, constraints, null);
//		log.info("dataset : " + dataset)
//		 var row = dataset.values[0];  
//			console.log("row :" +row)
//		 
//		var description = row["deadline"]; // variavel receber o data do ultimo processo  do dataset (Campo Descriação do incidente)   
//			log.info("description" + description)
//		
//		if( description != null){ 
//		log.info( "IF description"+description )
//		// início da função
//		var dataH = new Date(description);
//		log.info( "dataH"+dataH )
//		
//		var d = dataH.getDate();
//		var m = dataH.getMonth() + 1;
//		var a = dataH.getFullYear();
//		
//		if (m < 10) {
//			m = "0" + m;
//		}
//		
//		if (d < 10) {
//			d = "0" + d;
//		}
//		
//		var dia = d + "/" + m + "/" + a;
//
//		var h = dataH.getHours();
//		var m = dataH.getMinutes();
//		
//		if (h < 10) {
//			h = "0" + h;
//		}
//	
//		if (m < 10) {
//			m = "0" + m;
//		}
//		
//		var hor = h + ":" + m;
//		
//		var dataFull = dia + " " + hor;
//		log.info("Data "+dataFull)
//		
//		var campoSLAExtenso
//		try{
//			campoSLAExtenso = hAPI.getCardValue("SLAEXTENSO")
//			log.info( "entrou o try 2" )
//		} catch (e){
//			log.info("entrou caths errou  "+dataFull)
//		}
//		hAPI.setCardValue("SLAEXTENSO",dataFull)
//		log.info( "hapi.setcardvalue sla extenso" )
//		log.info("executou o porecesso  "+campoSLAExtenso)
//		}
//		//término da função
//		
//	}catch(e){
//		log.info(e);
//		log.info("errou:)))))) ")
//	}
// }
}	