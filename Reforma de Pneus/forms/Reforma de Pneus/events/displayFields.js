function displayFields(form,customHTML){
	
	form.setShowDisabledFields(true); // desabilita os set enable dos campos 
	form.setHidePrintLink(true); // // desabilita o botão de imprimir 
	
	
	var Now_State = parseInt(getValue("WKNumState"));
	if(Now_State == 0 || Now_State == 6 ){
		
		form.setVisibleById("VALIDACAO_LAUDO", false);
        form.setVisibleById("DESCARTE_DO_PNEU", false);
        form.setVisibleById("INFORMAR_OC", false);
        form.setVisibleById("VALIDACAO_REFORMA", true);
        form.setVisibleById("ALTERACAO_MEDIDAS", false);
      
       
	}
	
	if( Now_State == 7 ){
		
		form.setVisibleById("VALIDACAO_LAUDO", true);
        form.setVisibleById("DESCARTE_DO_PNEU", false);
        form.setVisibleById("INFORMAR_OC", false);
        form.setVisibleById("VALIDACAO_REFORMA", false);
        form.setVisibleById("ALTERACAO_MEDIDAS", false);
		
        form.setEnabled("IDOBJOF",false)
        form.setEnabled("NUMERO_NF",false) 
        form.setEnabled("NOME_CLIFOR",false) 
        form.setEnabled("VALIDACAO_LAUDO",true) 
        form.setEnabled("OBS_APRV_LAUDO",true)  
        //form.setEnabled("ANEXO_LAUDO",false) //json
        customHTML.append("<script>$('#ANEXO_LAUDO').prop('disabled', true);</script>");
        form.setEnabled("MOTIVO_DESCARTE",false) 
        form.setEnabled("OC_APROVADA",false)
        form.setEnabled("PRAZO_RETORNO",false)  
        form.setEnabled("NOVA_MEDIDA",false) 
        form.setEnabled("QNT_REFORMA",false)
        form.setEnabled("NF_RETORNO",false)
		form.setEnabled("SL_PORTAL_NF",false) 
        //form.setEnabled("ANEXO_EVIDENCIAS",false) //json
        customHTML.append("<script>$('#ANEXO_EVIDENCIAS').prop('disabled', true);</script>");
        form.setEnabled("VALIDACAO_ALT_MILI",false)
        form.setEnabled("VALIDACAO_ALT_REF",false)
		
	}
	
	if(Now_State == 9 ){
		
		form.setVisibleById("VALIDACAO_LAUDO", true);
        form.setVisibleById("DESCARTE_DO_PNEU", false);
        form.setVisibleById("INFORMAR_OC", true);
        form.setVisibleById("VALIDACAO_REFORMA", false);
        form.setVisibleById("ALTERACAO_MEDIDAS", false);
        
        form.setEnabled("IDOBJOF",false)
        form.setEnabled("NUMERO_NF",false) 
        form.setEnabled("NOME_CLIFOR",false) 
        form.setEnabled("VALIDACAO_LAUDO",false) 
        form.setEnabled("OBS_APRV_LAUDO",false)  
        //form.setEnabled("ANEXO_LAUDO",false) //json
        customHTML.append("<script>$('#ANEXO_LAUDO').prop('disabled', true);</script>");
        form.setEnabled("MOTIVO_DESCARTE",false) 
        form.setEnabled("OC_APROVADA",true)
        form.setEnabled("PRAZO_RETORNO",true)  
        form.setEnabled("NOVA_MEDIDA",false) 
        form.setEnabled("QNT_REFORMA",false)
        form.setEnabled("NF_RETORNO",false)
		form.setEnabled("SL_PORTAL_NF",false) 
       //form.setEnabled("ANEXO_EVIDENCIAS",false) //json
        customHTML.append("<script>$('#ANEXO_EVIDENCIAS').prop('disabled', true);</script>");
        form.setEnabled("VALIDACAO_ALT_MILI",false)
        form.setEnabled("VALIDACAO_ALT_REF",false)
	}
	
	if(Now_State == 10 ){
		
		form.setVisibleById("VALIDACAO_LAUDO", true);
        form.setVisibleById("DESCARTE_DO_PNEU", true);
        form.setVisibleById("INFORMAR_OC", false);
        form.setVisibleById("VALIDACAO_REFORMA", false);
        form.setVisibleById("ALTERACAO_MEDIDAS", false);
        
        form.setEnabled("IDOBJOF",false)
        form.setEnabled("NUMERO_NF",false) 
        form.setEnabled("NOME_CLIFOR",false) 
        form.setEnabled("VALIDACAO_LAUDO",false) 
        form.setEnabled("OBS_APRV_LAUDO",false)  
        form.setEnabled("MOTIVO_DESCARTE",true) 
        form.setEnabled("OC_APROVADA",false)
        form.setEnabled("PRAZO_RETORNO",false)  
        form.setEnabled("NOVA_MEDIDA",false) 
        form.setEnabled("QNT_REFORMA",false)
        form.setEnabled("NF_RETORNO",false)
		form.setEnabled("SL_PORTAL_NF",false) 
        //form.setEnabled("ANEXO_EVIDENCIAS",false) //json
        customHTML.append("<script>$('#ANEXO_EVIDENCIAS').prop('disabled', true);</script>");
        form.setEnabled("VALIDACAO_ALT_MILI",false)
        form.setEnabled("VALIDACAO_ALT_REF",false)
		
	}
	
	if(Now_State == 23 ){
		
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
		
		form.setVisibleById("VALIDACAO_LAUDO", true);
        form.setVisibleById("DESCARTE_DO_PNEU", false);
        form.setVisibleById("INFORMAR_OC", true);
        form.setVisibleById("VALIDACAO_REFORMA", true);
        form.setVisibleById("ALTERACAO_MEDIDAS", false);
        
        form.setEnabled("IDOBJOF",false)
        form.setEnabled("NUMERO_NF",false) 
        form.setEnabled("NOME_CLIFOR",false) 
        form.setEnabled("VALIDACAO_LAUDO",false) 
        form.setEnabled("OBS_APRV_LAUDO",false)  
        //form.setEnabled("ANEXO_LAUDO",false) //json
        customHTML.append("<script>$('#ANEXO_EVIDENCIAS').prop('disabled', true);</script>");
        form.setEnabled("MOTIVO_DESCARTE",false) 
        form.setEnabled("OC_APROVADA",false)
        form.setEnabled("PRAZO_RETORNO",false)  
        form.setEnabled("NOVA_MEDIDA",true) 
        form.setEnabled("QNT_REFORMA",true)
        form.setEnabled("NF_RETORNO",true)
		form.setEnabled("SL_PORTAL_NF",true) 
        form.setEnabled("ANEXO_EVIDENCIAS",true) //json
        form.setEnabled("VALIDACAO_ALT_MILI",false)
        form.setEnabled("VALIDACAO_ALT_REF",false)
        
        customHTML.append("<script>$('#NOVA_MEDIDA').prop('disabled', true);</script>");
		
		
	}	
	
}