function validateForm(form){
	
	//variavel que recebe o codigo referente ao estado atual do processo.
    var Now_State =parseInt(getValue("WKNumState"));
    var Next_State =parseInt(getValue("WKNextState"));
    var radio = form.getValue("AVALIACAO");
    var matrUser = getValue("WKUser"); //esta pegando a matricula do ususario

    
	//throw Now_State + " - "+ Next_State + " - "+ radio
    // bloco de condição que valida no estado incial do processo se os seguintes campos etão em braco. 
	if (form.getValue("SUB_CLASS_SERVICO") == ""){
		throw "Necessario Preencher o campo Sub Classe de Serviço."; 
	}
	if (form.getValue("RAMALSOLICITANTE") == ""){
		throw "Necessario Preencher o campo telefone."; 
	}
	if (form.getValue("DESCRICAOSOLICITACAO") == ""){
		throw "Necessario descrever a sua necessidade."; 
	}
	if (form.getValue("DESCRICAOSOLICITACAO") == form.getValue("SUB_CLASS_SERVICO")){
		throw "Necessario descrever a sua necessidade."; 
	}
	
	// Codição que valida no estado do processo Analisar Suporte (5) o seguinte campo se está em braco.
	if(Now_State == 9){
		if (form.getValue("RESOLUCAO") == "" && form.getValue("TRANSFERECHAMADO") == ""){
		    throw "Necessario Preencher o campo Solução."; 
		}
		
	}
	if(Now_State == 9){
		if (form.getValue("CATEGORIA") == "NULO" && form.getValue("TRANSFERECHAMADO") == ""){
			    throw "Necessario preencher o campo categoria."; 
		}
	}
	if(Now_State == 9){
		if (form.getValue("SUBCATEGORIA") == "" && form.getValue("TRANSFERECHAMADO") == "") {
				    throw "Necessario preencher o campo subcategoria."; 
		}
	}
	
	if(Now_State == 9){
		if (form.getValue("VENCIMENTOSLA") == "SLA Violado" && (form.getValue("SLAGESTOR") != "0" && form.getValue("TRANSFERECHAMADO") != "") ) {
				
				throw "Você não pode alterar um SLA violado."; 
		}
	}
	
	if(Now_State == 33 && Next_State == 44){
		if (form.getValue("VALIDACAO_MKT") == "NAO"  ) {
				
				throw "Você não pode enviar para validação do usuario um escopo não aprovado."; 
		}
		if (form.getValue("VALIDACAO_MKT") == "NULO"  ) {
			
			throw "Você não pode enviar para validação do usuario um escopo sem aprovado."; 
		}
	}
	if(Now_State == 33 && Next_State == 57 ){
		if (form.getValue("VALIDACAO_MKT") == "NAO"  && form.getValue("COMENTARIO_AVALIACAO_MKT") == "" ) {
				
				throw "Favor informar um comentario para coreção do escopo."; 
		}
		
	}
	if(Now_State == 33 && Next_State == 57 ){
		if (form.getValue("VALIDACAO_MKT") == "SIM") {
				
				throw "Você não pode enviar para Revisão um escopo aprovado."; 
		}
		
	}
	
	if(Now_State == 44 && Next_State == 49){
		if (form.getValue("VALIDACAO_USUARIO") == "NAO" && form.getValue("COMENTARIO_AVALIACAO_USER") == ""  ) {
				
				throw "Você não pode enviar para validação do escopo sem um comentario."; 
		}
		if (form.getValue("VALIDACAO_MKT") == "NULO") {
			
			throw "Você não pode enviar para validação do usuario um escopo sem aprovado."; 
		}
	}
	
	if(Now_State == 40 && Next_State == 42){
		if (form.getValue("STATUS_SOLICITACAO") != "FECHADO") {
				
				throw "Você não pode enviar para o fim uma solicitação Aberta."; 
		}
		if (form.getValue("COMENT_FECHAMENTO_SOLCITACAO") == "") {
			
			throw "Você não pode enviar para o fim uma solicitação sem um comentario"; 
		}
	}

	


}



