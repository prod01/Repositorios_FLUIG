function inputFields(form){
	
	var regEx = /^\d{4}-\d{2}-\d{2}$/;
	
	 if (form.getValue('TX_DataEmissao').match(regEx)) {
        var split = form.getValue('TX_DataEmissao').split('-');
        form.setValue('TX_DataEmissao', split[2] + '/' + split[1] + '/' + split[0]);
	 }
	 //=========================================================================================
	 if (form.getValue('TX_DataRecebimento').match(regEx)) {
        var split = form.getValue('TX_DataRecebimento').split('-');
        form.setValue('TX_DataRecebimento', split[2] + '/' + split[1] + '/' + split[0]);
	 }
	 //=========================================================================================
	 if (form.getValue('TX_DataVencimentoBoleto').match(regEx)) {
        var split = form.getValue('TX_DataVencimentoBoleto').split('-');
        form.setValue('TX_DataVencimentoBoleto', split[2] + '/' + split[1] + '/' + split[0]);
	 }
	
}