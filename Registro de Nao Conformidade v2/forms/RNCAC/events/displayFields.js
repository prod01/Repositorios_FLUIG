function displayFields(form,customHTML,Now_State){ 
	form.setValue("NUM_ATIVIDADE", Now_State)
	
	form.setShowDisabledFields(true); // desabilita os set enable dos campos 
	form.setHidePrintLink(true); // // desabilita o botão de imprimir 
	
	
	var Now_State = parseInt(getValue("WKNumState"));
	if(Now_State == 0 || Now_State == 6 ){

		var api = fluigAPI.getUserService().getCurrent();
		
		form.setValue("NUM_ATIVIDADE", Now_State)
		
		var fullName=api.fullName
	    var usuario = api.login;
		    form.setValue("RESP_NC",fullName); 
		    form.setValue("_RESP_NC",fullName);
		    form.setValue('USUARIO_NC', usuario);
		    form.setValue('_USUARIO_NC', usuario);
					
		var date = new Date();
	        console.log(date)
	        var d = date.getDate();
	  		var mes = date.getMonth() + 1;
	  		var a = date.getFullYear();
	  		
	  		if (mes < 10) {
	  			mes = "0" + mes;
	  		}
	  		
	  		if (d < 10) {
	  			d = "0" + d;
	  		}
	  		
	  		var dia = d + "/" + mes + "/" + a;
	  		
	  		var h = date.getHours();
	  		var m = date.getMinutes();
	  		
	  		if (h < 10) {
				h = "0" + h;
			}
		
			if (m < 10) {
				m = "0" + m;
			}
			
			
			var hor = h + ":" + m;
			var dataFull = dia + " " + hor;
			
	        form.setValue('DATA_NC', dataFull);
	        log.info(dataFull)
	        
	        //CALCULO DO PRAZO PARA O ENVIO DO EMAIL 
	        
	    	var dataInicial = new Date();
	    	var horasParaAdicionar = 700;
	    	dataInicial.setHours(dataInicial.getHours() + horasParaAdicionar);
	    	dataInicial.setUTCHours(dataInicial.getUTCHours() - 3);
	    	
	    	var date = dataInicial
	        console.log(date)
	        var d = date.getDate();
	  		var mes = date.getMonth() + 1;
	  		var a = date.getFullYear();
	  		
	  		if (mes < 10) {
	  			mes = "0" + mes;
	  		}
	  		
	  		if (d < 10) {
	  			d = "0" + d;
	  		}
	  		
	  		var dia = d + "/" + mes + "/" + a;

	    	form.setValue('PRAZO_EMAIL', dia);
	    	
	        form.setVisibleById("PLANO_ACAO", false);
	        form.setVisibleById("VALIDACAO_PLANO_ACAO", false);
	        form.setVisibleById("ANEXO_EVIDENCIAS", false);
	        form.setVisibleById("VALIDACAO_EVIDENCIAS", false);
	        form.setVisibleById("FOLLOW_UP", false);
	        
	        

	}
	
	if (Now_State == 7){
		
			form.setValue("NUM_ATIVIDADE", Now_State)
		
		 	form.setVisibleById("PLANO_ACAO", true);
	        form.setVisibleById("VALIDACAO_PLANO_ACAO", false);
	        form.setVisibleById("ANEXO_EVIDENCIAS", false);
	        form.setVisibleById("VALIDACAO_EVIDENCIAS", false);
	        form.setVisibleById("FOLLOW_UP", false);
		
	        form.setEnabled("RESP_NC",false)
	        form.setEnabled("REQUISITOS_NC_ISO",false) 
	        form.setEnabled("NUM_MOV_NC",false) 
	        form.setEnabled("DATA_NC",false) 
	        form.setEnabled("CENTRO_DE_CUSTO",false)  
	        form.setEnabled("FONTE_DE_IDENTIFICACAO_NC",false) 
	        form.setEnabled("REINCIDENCIA_NC",false) 
	        form.setEnabled("DESCRICAO_NC",false) 
	}
	
	if (Now_State == 9){
		
			form.setValue("NUM_ATIVIDADE", Now_State)
			
		 	form.setVisibleById("PLANO_ACAO", true);
	        form.setVisibleById("VALIDACAO_PLANO_ACAO", true);
	        form.setVisibleById("ANEXO_EVIDENCIAS", false);
	        form.setVisibleById("VALIDACAO_EVIDENCIAS", false);
	        form.setVisibleById("FOLLOW_UP", false);
	        
	        form.setEnabled("RESP_NC",false)
	        form.setEnabled("REQUISITOS_NC_ISO",false) 
	        form.setEnabled("NUM_MOV_NC",false) 
	        form.setEnabled("DATA_NC",false) 
	        form.setEnabled("CENTRO_DE_CUSTO",false)  
	        form.setEnabled("FONTE_DE_IDENTIFICACAO_NC",false) 
	        form.setEnabled("REINCIDENCIA_NC",false) 
	        form.setEnabled("DESCRICAO_NC",false)
	        
	        form.setEnabled("PRAZO_ACAO_PA",false)
	        form.setEnabled("ACAO_IMEDIATA_PA",false) 
	        form.setEnabled("PORQUE_1",false) 
	        form.setEnabled("PORQUE_2",false) 
	        form.setEnabled("PORQUE_3",false)  
	        form.setEnabled("PORQUE_4",false) 
	        form.setEnabled("PORQUE_5",false) 
	        form.setEnabled("ACAO_CORRETIVA_PA",false)
	        
		}
	
	if (Now_State == 10){
		
			form.setValue("NUM_ATIVIDADE", Now_State)
		
		 	form.setVisibleById("PLANO_ACAO", true);
	        form.setVisibleById("VALIDACAO_PLANO_ACAO", true);
	        form.setVisibleById("ANEXO_EVIDENCIAS", true);
	        form.setVisibleById("VALIDACAO_EVIDENCIAS", false);
	        form.setVisibleById("FOLLOW_UP", false);
	        
	        form.setEnabled("RESP_NC",false)
	        form.setEnabled("REQUISITOS_NC_ISO",false) 
	        form.setEnabled("NUM_MOV_NC",false) 
	        form.setEnabled("DATA_NC",false) 
	        form.setEnabled("CENTRO_DE_CUSTO",false)  
	        form.setEnabled("FONTE_DE_IDENTIFICACAO_NC",false) 
	        form.setEnabled("REINCIDENCIA_NC",false) 
	        form.setEnabled("DESCRICAO_NC",false)
	        
	        form.setEnabled("PRAZO_ACAO_PA",false)
	        form.setEnabled("ACAO_IMEDIATA_PA",false) 
	        form.setEnabled("PORQUE_1",false) 
	        form.setEnabled("PORQUE_2",false) 
	        form.setEnabled("PORQUE_3",false)  
	        form.setEnabled("PORQUE_4",false) 
	        form.setEnabled("PORQUE_5",false) 
	        form.setEnabled("ACAO_CORRETIVA_PA",false)
	        
	        form.setEnabled("VALIDACAO_PLAN_ACAO",false) 
	        form.setEnabled("OBS_PLAN_ACAO",false)
	        
		
	}
	
	if (Now_State == 11){
		
		
			form.setValue("NUM_ATIVIDADE", Now_State)
		
		 	form.setVisibleById("PLANO_ACAO", true);
	        form.setVisibleById("VALIDACAO_PLANO_ACAO", true);
	        form.setVisibleById("ANEXO_EVIDENCIAS", true);
	        form.setVisibleById("VALIDACAO_EVIDENCIAS", true);
	        form.setVisibleById("FOLLOW_UP", false);
	
	        form.setEnabled("RESP_NC",false)
	        form.setEnabled("REQUISITOS_NC_ISO",false) 
	        form.setEnabled("NUM_MOV_NC",false) 
	        form.setEnabled("DATA_NC",false) 
	        form.setEnabled("CENTRO_DE_CUSTO",false)  
	        form.setEnabled("FONTE_DE_IDENTIFICACAO_NC",false) 
	        form.setEnabled("REINCIDENCIA_NC",false) 
	        form.setEnabled("DESCRICAO_NC",false)
	        
	        form.setEnabled("PRAZO_ACAO_PA",false)
	        form.setEnabled("ACAO_IMEDIATA_PA",false) 
	        form.setEnabled("PORQUE_1",false) 
	        form.setEnabled("PORQUE_2",false) 
	        form.setEnabled("PORQUE_3",false)  
	        form.setEnabled("PORQUE_4",false) 
	        form.setEnabled("PORQUE_5",false) 
	        form.setEnabled("ACAO_CORRETIVA_PA",false)
	        
	        form.setEnabled("VALIDACAO_PLAN_ACAO",false) 
	        form.setEnabled("OBS_PLAN_ACAO",false)
	        
	        form.setEnabled("OBS_EVIDENCIAS_GEST",false) 
	        customHTML.append("<script>$('#ANEXO_EVIDENCIAS').prop('disabled', true);</script>");
	}
	
	if (Now_State == 18){
		
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
			
		    form.setValue('DATA_FINALIZACAO', dataFull);
		
			form.setValue("NUM_ATIVIDADE", Now_State)
		
		 	form.setVisibleById("PLANO_ACAO", true);
	        form.setVisibleById("VALIDACAO_PLANO_ACAO", true);
	        form.setVisibleById("ANEXO_EVIDENCIAS", true);
	        form.setVisibleById("VALIDACAO_EVIDENCIAS", true);
	        form.setVisibleById("FOLLOW_UP", true);
	        
	        form.setEnabled("RESP_NC",false)
	        form.setEnabled("REQUISITOS_NC_ISO",false) 
	        form.setEnabled("NUM_MOV_NC",false) 
	        form.setEnabled("DATA_NC",false) 
	        form.setEnabled("CENTRO_DE_CUSTO",false)  
	        form.setEnabled("FONTE_DE_IDENTIFICACAO_NC",false) 
	        form.setEnabled("REINCIDENCIA_NC",false) 
	        form.setEnabled("DESCRICAO_NC",false)
	        
	        form.setEnabled("PRAZO_ACAO_PA",false)
	        form.setEnabled("ACAO_IMEDIATA_PA",false) 
	        form.setEnabled("PORQUE_1",false) 
	        form.setEnabled("PORQUE_2",false) 
	        form.setEnabled("PORQUE_3",false)  
	        form.setEnabled("PORQUE_4",false) 
	        form.setEnabled("PORQUE_5",false) 
	        form.setEnabled("ACAO_CORRETIVA_PA",false)
	        
	        form.setEnabled("VALIDACAO_PLAN_ACAO",false) 
	        form.setEnabled("OBS_PLAN_ACAO",false)
	        
	        form.setEnabled("VALIDACAO_EVIDENCIAS",false) 
	        form.setEnabled("OBS_EVIDENCIAS",false)
	        
	        
	        form.setEnabled("OBS_EVIDENCIAS_GEST",false) 
	        customHTML.append("<script>$('#ANEXO_EVIDENCIAS').prop('disabled', true);</script>");
	        
		
	}

}

