function displayFields(form,customHTML){ 
	

    form.setShowDisabledFields(true); // desabilita os set enable dos campos 
	form.setHidePrintLink(true); // // desabilita o botão de imprimir 
	 
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
		
	    form.setValue('DATACOLETA', dataFull);
	   
	    
	    var api = fluigAPI.getUserService().getCurrent();
	    var usuario = api.login;
	    form.setValue('USUARIOLOGADO', usuario);
	    
	
}