
function validateForm(form){
	
	//variavel que recebe o codigo referente ao estado atual do processo.
    var Now_State =parseInt(getValue("WKNumState"));
    var Next_State =parseInt(getValue("WKNextState"));
    var radio = form.getValue("AVALIACAO");
    var matrUser = getValue("WKUser"); //esta pegando a matricula do ususario

    
	//throw Now_State + " - "+ Next_State + " - "+ radio
    // bloco de condição que valida no estado incial do processo se os seguintes campos etão em braco. 
	if (form.getValue("TIPOSOLICITACAO") == ""){
		throw "Necessario Preencher o campo Classe de Serviço."; 
	}
	if (form.getValue("RAMALSOLICITANTE") == ""){
		throw "Necessario Preencher o campo telefone."; 
	}
	if (form.getValue("DESCRICAOSOLICITACAO") == ""){
		throw "Necessario descrever a sua necessidade."; 
	}
	if (form.getValue("DESCRICAOSOLICITACAO") == "Acesso / Permissão / Login"){
		throw "Necessario descrever a sua necessidade."; 
	}
	if (form.getValue("DESCRICAOSOLICITACAO") == "Hardware / Infraestrutura"){
		throw "Necessario descrever a sua necessidade."; 
	}
	if (form.getValue("DESCRICAOSOLICITACAO") == "Informação"){
		throw "Necessario  descrever a sua necessidade."; 
	}
	if (form.getValue("DESCRICAOSOLICITACAO") == "Software / Programas / E-mail"){
		throw "Necessario descrever a sua necessidade."; 
	}
	if (form.getValue("DESCRICAOSOLICITACAO") == "Totvs / Fluig"){
		throw "Necessario descrever a sua necessidade."; 
	}
	// Codição que valida no estado do processo Analisar Suporte (5) o seguinte campo se está em braco.
	if(Now_State == 5){
		if (form.getValue("RESOLUCAO") == "" && form.getValue("TRANSFERECHAMADO") == ""){
		    throw "Necessario Preencher o campo Solução."; 
		}
		
	}
	if(Now_State == 5){
		if (form.getValue("CATEGORIA") == "NULO" && form.getValue("TRANSFERECHAMADO") == ""){
			    throw "Necessario preencher o campo categoria."; 
		}
	}
	if(Now_State == 5){
		if (form.getValue("SUBCATEGORIA") == "" && form.getValue("TRANSFERECHAMADO") == "") {
				    throw "Necessario preencher o campo subcategoria."; 
		}
	}
	if(Now_State == 5){
		if (form.getValue("VENCIMENTOSLA") == "SLA Violado" && form.getValue("STATUS") == "PAUSADO" ) {
				
				throw "SLA violado Não pode ser alterado para pausado."; 
		}
	}
	if(Now_State == 5){
		if (form.getValue("VENCIMENTOSLA") == "SLA Violado" && (form.getValue("SLAGESTOR") != "NULO" && form.getValue("SLAGESTOR") != "") ) {
				
				throw "Você não pode alterar um SLA violado."; 
		}
	}
	
	
	
	if(Now_State == 9 && (radio == "Ruim" || radio == "Péssimo" || radio == "Regular" ) &&  form.getValue("COMENTARIOAVALIACAO") == "" ){
	
		
		
			    throw "Necessario preencher o campo comentario."; 
		
	}
	if(Now_State == 9 && (radio == "Problema não Resolvido") &&  form.getValue("COMENTARIOAVALIACAO") == "" ){
		
		
		
	    throw "Necessario preencher o campo comentario."; 

	}
	if(Now_State == 9 && (radio == "")){
		
		
		
	    throw "Necessario preencher um dos campos da avaliação."; 

	}
	
	
	//========================================================================================================================================================
	//NEXT STATE 
	
	if(Next_State == 26){
		if (form.getValue("STATUS") != "PAUSADO" ) {
	    throw "Necessario preencher o campo Status com pausado."; 
		}
		
	}
	if(Next_State == 26){
		if (form.getValue("VENCIMENTOSLA") == "SLA Violado" && form.getValue("STATUS") != "PAUSADO"  ) {
				    throw "Você não pode alterar um SLA para Pausa."; 
		}
	}
	if(Next_State == 9){
		if (form.getValue("STATUS") == "PAUSADO" ) {
	    throw "Você não pode enviar um SLA Pausa."; 
		}
		
	}
	if(Next_State == 9){
		if (form.getValue("STATUS") != "FECHADO"  ) {
	    throw "Necessario preencher o campo Status com Fechado."; 
		}
		
	}
	


}



