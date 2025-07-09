function displayFields(form,customHTML){ 
	
//set hora HTML
	var date = new Date();
    console.log(date)
    var d = date.getDate();
	var m = date.getMonth() + 1;
	var a = date.getFullYear();
	
	if (m < 10) {
		m = "0" + m;
	}
	
	if (d < 10) {
		d = "0" + d;
	}
	
	
	var dia = d + "/" + m + "/" + a;

	var h = date.getHours();
	var m = date.getMinutes();
	
	if (h < 10) {
		h  = "0" + h ;
	}
	
	if (m < 10) {
		m = "0" + m;
	}
	
	var hor = h + ":" + m;
	
	var dataFull = dia + " " + hor;
    form.setValue('DATAMEDICAO', dataFull);
    console.log(dataFull)
	
//
    
    var api = fluigAPI.getUserService().getCurrent();
    log.info("api_usuario"+api)
    log.info("api_usuario full name"+api.fullName)
    
    var fullName=api.fullName
    form.setValue("USUARIO",fullName); 
    form.setValue("_USUARIO",fullName);
    log.info("api_usuario full name" + fullName)
    
	////////////////////////////////////////////////
	
    //habilitar visualizção do campo 
    form.setVisibleById("DATAMEDICAO", true);
    form.setVisibleById("USUARIO", true);
	
    //habilita edição do campo
	form.setEnabled("DATAMEDICAO", false);
	form.setEnabled("USUARIO", false);
	
	
}