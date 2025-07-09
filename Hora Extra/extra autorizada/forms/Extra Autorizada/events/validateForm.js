function validateForm(form){
	 var Now_State =parseInt(getValue("WKNumState"));
	 var Next_State =parseInt(getValue("WKNextState"));
	 
	 if(Now_State == 6){ 
	
	 if (form.getValue("NOMESOLICITANTE") == ""){
			throw "Necessario Preencher o nome do Funcionario"; 
		}
	 
	 if (form.getValue("DATA_EXTRA") == ""){
			throw "Necessario Preencher o nome do Funcionario"; 
		}
	 if (form.getValue("JUSTIFICATIVA_DIA") == ""){
			throw "Necessario Informar o Dia"; 
		}
	 if (form.getValue("HORA_EXTRA") >  121 && form.getValue("JUSTIFICATIVA_DIA") == "UTIL"){
			throw "São permitidas no maximo 120 'CENTO E VINTE' minutos extras em dias úteis"; 
		}
	 if (form.getValue("HORA_EXTRA") > 601 && (form.getValue("JUSTIFICATIVA_DIA") == "SABADO" || form.getValue("JUSTIFICATIVA_DIA") == "FERIADO")){
			throw "São permitidas no maximo 480 'QUATROCENTOS E OITENTA  ' minutos extras em feriados ou Sabados"; 
	 	}
	 if (form.getValue("HORA_EXTRA") == ""){
			throw "Necessario Preencher o nome do Funcionario"; 
		}
	 if (form.getValue("JUSTIFICATIVA") == ""){
			throw "Necessario Preencher o nome do Funcionario"; 
		}
	 if (form.getValue("OBJ_SOLICITANTE") == ""){
			throw "Necessario Preencher a Observação"; 
		}
	 
	 }
	 
	 
	 if(Now_State == 7 ){ 
		 
		 if (form.getValue("ESCOPO_APROVADO_LIDERANCA") != "SIM" && Next_State == 8){
				throw "Somente 'Solicitaçoes Aprovadas' podem seguir para a proxima atividade"; 
			}
		 if (form.getValue("OBSERVACAO_LIDERANCA") == "" && form.getValue("ESCOPO_APROVADO_LIDERANCA") == "NAO"){
				throw "Favor fornecer observações"; 
			}

	 }
	 
	 if(Now_State == 8){ 
		 
		 if (form.getValue("ESCOPO_APROVADO_RH") != "SIM" && Next_State == 9){
				throw "Somente 'Solicitaçoes Aprovadas' podem seguir para a proxima atividade"; 
			}

	 }
	 if (form.getValue("OBSERVACAO_RH") == "" && form.getValue("ESCOPO_APROVADO_RH") == "NAO"){
			throw "Favor fornecer observações"; 
		}
	 
}