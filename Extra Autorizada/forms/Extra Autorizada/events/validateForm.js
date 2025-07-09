function validateForm(form){
	 var Now_State =parseInt(getValue("WKNumState"));
	 var Next_State =parseInt(getValue("WKNextState"));
	 
	 if(Next_State == 7){ 
	
	 if (form.getValue("NOME_SOLICITANTE") == ""){
			throw "Necessario Preencher o nome do Funcionario"; 
		}
	 
	 if (form.getValue("DATA_EXTRA") == ""){
			throw "Necessario a data da hora extra"; 
		}
	 if (form.getValue("DATA_EXTRA") != ""){
		 
		 var data = form.getValue("DATA_EXTRA");
		  
		 
		 if (dataExtra(data) < dataAtual() ){
			 
				throw "Você Não pode solicitar hora extra retroativa"
		 }
			
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
			throw "Necessario Preencher o Campo Quantidade de Horas Extra (Em minutos) "; 
		}
	 if (form.getValue("JUSTIFICATIVA") == "" || form.getValue("JUSTIFICATIVA") == "VAZIO" ){
			throw "Necessario Preencher o Campo Justificativa"; 
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


function dataAtual(){
	
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

			var mesjs = mes -1
			
			var dataAtual = new Date(a, mesjs, d, "00","00", "00")


			return dataAtual;

}

function dataExtra(data){
	

	    var myArray = data.split("-");
		
		var ano = myArray[0];
		
		var meses = myArray[1];
		
		var dia = myArray[2];
		

		var mesjs = meses -1
		console.log("variavel mesjs: " + mesjs)
		
		var dataExtra= new Date(ano, mesjs, dia, "00", "00", "00")
		
		return dataExtra;

}







	