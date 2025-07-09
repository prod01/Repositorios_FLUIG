function displayFields(form,customHTML){ 
	
	 	form.setShowDisabledFields(true); // desabilita os set enable dos campos 
	 	form.setHidePrintLink(true); // // desabilita o botão de imprimir 
	
	var Now_State = parseInt(getValue("WKNumState"));
	
		form.setVisibleById("APROVACAO_LIDERANCA", false);
		form.setVisibleById("APROVACAO_RH", false);


	if(Now_State == 7) {
		
		form.setVisibleById("APROVACAO_LIDERANCA", true);
		form.setVisibleById("APROVACAO_RH", false);
		
		form.setEnabled("JUSTIFICATIVA_DIA", false);
		form.setEnabled("NOME_SOLICITANTE", false);
		form.setEnabled("DATA_EXTRA", false);
		form.setEnabled("HORA_EXTRA", false);
		form.setEnabled("JUSTIFICATIVA", false);
		form.setEnabled("OBJ_SOLICITANTE", false);
	}
	
	if(Now_State == 8) {
		
		form.setVisibleById("APROVACAO_LIDERANCA", true);
		form.setVisibleById("APROVACAO_RH", true);

		form.setEnabled("JUSTIFICATIVA_DIA", false);
		form.setEnabled("NOME_SOLICITANTE", false);
		form.setEnabled("DATA_EXTRA", false);
		form.setEnabled("HORA_EXTRA", false);
		form.setEnabled("JUSTIFICATIVA", false);
		form.setEnabled("OBJ_SOLICITANTE", false);
		form.setEnabled("ESCOPO_APROVADO_LIDERANCA", false);
		form.setEnabled("OBSERVACAO_LIDERANCA", false);
		
	}
	
}

