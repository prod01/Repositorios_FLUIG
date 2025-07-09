function inputFields(form){var regEx = /^\d{4}-\d{2}-\d{2}$/;

if (form.getValue('DATAABERTURA').match(regEx)) {
   var split = form.getValue('DATAABERTURA').split('-');
   form.setValue('DATAABERTURA', split[2] + '/' + split[1] + '/' + split[0]);
}
//=========================================================================================
if (form.getValue('SLAEXTENSO').match(regEx)) {
   var split = form.getValue('SLAEXTENSO').split('-');
   form.setValue('SLAEXTENSO', split[2] + '/' + split[1] + '/' + split[0]);
}
//=========================================================================================
if (form.getValue('DATAREABERTURA').match(regEx)) {
   var split = form.getValue('DATAREABERTURA').split('-');
   form.setValue('DATAREABERTURA', split[2] + '/' + split[1] + '/' + split[0]);
}
//=========================================================================================
if (form.getValue('SLA').match(regEx)) {
	   var split = form.getValue('SLA').split('-');
	   form.setValue('SLA', split[2] + '/' + split[1] + '/' + split[0]);
	}
//==========================================================================================
if (form.getValue('DATAFECHAMNETO').match(regEx)) {
	   var split = form.getValue('DATAFECHAMNETO').split('-');
	   form.setValue('DATAFECHAMNETO', split[2] + '/' + split[1] + '/' + split[0]);
	}
}