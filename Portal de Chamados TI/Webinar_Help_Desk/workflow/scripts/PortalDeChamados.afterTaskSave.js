function afterTaskSave(colleagueId,nextSequenceId,userList){
//função que esta trocando o sla do chamado com validação diacordo com o valor escolhido no diagrama 
	var atividade = getValue("WKCurrentState");
	var valorSLA = hAPI.getCardValue("SLA");
	var setValorSLA = hAPI.getCardValue("SLAGESTOR");
	var nowDate = new Date(); 
	var prazoFormulario = nowDate.getDate()+'/'+(nowDate.getMonth()+1)+'/'+nowDate.getFullYear();
	var dataAtual = Date.now();
	
	
//	var oito = dataAtual +;
//	var dezesseis = dataAtual +;
//	var vintequatro = dataAtual +;
	
	log.info("Entrou Function: " + atividade)
	log.info("prazo Formulario: " + prazoFormulario)
	log.info("prazo Formulario: " + nowDate)
	
	
    // Atividade de sequência 5 é a da tarefa criada e que vou alterar o prazo de conclusão
    if (atividade == 5) {
    	
    	log.info("valor sla" + setValorSLA)
    				
    	
    	
    					if (setValorSLA == "5") {
    						console.log("entrou 5 ")
    								log.info("Entrou IF 5 Horas: " + setValorSLA)
    	
						        // Recuperando a data informada no campo do formulário
						        if (prazoFormulario != undefined && prazoFormulario != '') {

    								log.info("Entrou IF 1 After Task Save Não vazio: " + setValorSLA)
						            var numeroDaSolicitacao = getValue('WKNumProces');
						            var threadDaSolicitacao = 0; // Normalmente 0, quando não for atividade paralela
						            var responsavelPelaTarefa = colleagueId;
						             
						            /* Nesse caso o formato da data salva pelo formulário no exemplo é DD/MM/AAAA, mas isso pode variar de acordo com a formatação utilizada, 
						               mudando assim as posições das informações dentro do array */
						             /*01/07/2022*/
						            /* Extrai os dados da data do formulário para um array, para posteriormente transformar em data do Javascript */
						            var arrayPrazoConclusao = prazoFormulario.split("/");
						            var dia = arrayPrazoConclusao[0]; // Posição 0 do array é o dia
						            var mes = arrayPrazoConclusao[1] - 1; // Posição 1 do array é o mês (Subtraímos 1 porque na data do Javascript o mês vai de 0 a 11)
						            var ano = arrayPrazoConclusao[2]; // Posição 2 do array é o ano
						          
						            var horaDoPrazo = (15*60*60) - 1; /* A hora é em milisegundos, e esse cálculo tem resultado de 23:59:59, ou seja, 
						            o prazo de conclusão vai ser até o último segundo do dia informado no formulário */
						           try{
						            // Cria a data no Javascript
						            var dataDoPrazo = new Date();
						            dataDoPrazo.setDate(dia);
						            dataDoPrazo.setMonth(mes);
						            dataDoPrazo.setFullYear(ano);
						            
						            //Calcula o prazo
						            var obj = hAPI.calculateDeadLineHours(dataDoPrazo, 50000, 5, "Central de Cadastro - Cli/For");
						            var dt = obj[0];
						            var segundos = obj[1];
						            log.info("data do prazo: "+dataDoPrazo)
						            log.info("numeroDaSolicitacao: "+numeroDaSolicitacao)
						            log.info("threadDaSolicitacao: "+threadDaSolicitacao)
						            log.info("responsavelPelaTarefa: "+responsavelPelaTarefa)
						            log.info("dataDoPrazo: "+dt)
						            log.info("horaDoPrazo: "+segundos)
						             
						            
						            
						            // Altera o prazo de conclusão
						            hAPI.setDueDate(numeroDaSolicitacao, threadDaSolicitacao, responsavelPelaTarefa, dt, segundos);
						           
						            log.info("--------after--------- "+dataDoPrazo)
						            log.info("data do prazo: "+dataDoPrazo)
						            log.info("numeroDaSolicitacao: "+numeroDaSolicitacao)
						            log.info("threadDaSolicitacao: "+threadDaSolicitacao)
						            log.info("responsavelPelaTarefa: "+responsavelPelaTarefa)
						            log.info("dataDoPrazo: "+dt)
						            log.info("horaDoPrazo: "+segundos)
						            log.info("Try Executado with successo") 
						            console.log("dataDoPrazo 05 "+dataDoPrazo)
						           }catch (mistake){
						        	   log.info("erro do catch" + mistake)
					        	   }
						      
						     
//=---------------------------------------------------------------------------------------------------------------------------------------------------------------------------						        
						        
						}
					}else if (setValorSLA == "8") {
    						console.log("entrou 8 ")
    								log.info("Entrou IF 8 Horas: " + setValorSLA)
    	
						        // Recuperando a data informada no campo do formulário
						        if (prazoFormulario != undefined && prazoFormulario != '') {

    								log.info("Entrou IF 1 After Task Save Não vazio: " + setValorSLA)
						            var numeroDaSolicitacao = getValue('WKNumProces');
						            var threadDaSolicitacao = 0; // Normalmente 0, quando não for atividade paralela
						            var responsavelPelaTarefa = colleagueId;
						             
						            /* Nesse caso o formato da data salva pelo formulário no exemplo é DD/MM/AAAA, mas isso pode variar de acordo com a formatação utilizada, 
						               mudando assim as posições das informações dentro do array */
						             /*01/07/2022*/
						            /* Extrai os dados da data do formulário para um array, para posteriormente transformar em data do Javascript */
						            var arrayPrazoConclusao = prazoFormulario.split("/");
						            var dia = arrayPrazoConclusao[0]; // Posição 0 do array é o dia
						            var mes = arrayPrazoConclusao[1] - 1; // Posição 1 do array é o mês (Subtraímos 1 porque na data do Javascript o mês vai de 0 a 11)
						            var ano = arrayPrazoConclusao[2]; // Posição 2 do array é o ano
						          
						            var horaDoPrazo = (15*60*60) - 1; /* A hora é em milisegundos, e esse cálculo tem resultado de 23:59:59, ou seja, 
						            o prazo de conclusão vai ser até o último segundo do dia informado no formulário */
						           try{
						            // Cria a data no Javascript
						            var dataDoPrazo = new Date();
						            dataDoPrazo.setDate(dia);
						            dataDoPrazo.setMonth(mes);
						            dataDoPrazo.setFullYear(ano);
						            
						            //Calcula o prazo
						            var obj = hAPI.calculateDeadLineHours(dataDoPrazo, 50000, 8, "Central de Cadastro - Cli/For");
						            var dt = obj[0];
						            var segundos = obj[1];
						            log.info("data do prazo: "+dataDoPrazo)
						            log.info("numeroDaSolicitacao: "+numeroDaSolicitacao)
						            log.info("threadDaSolicitacao: "+threadDaSolicitacao)
						            log.info("responsavelPelaTarefa: "+responsavelPelaTarefa)
						            log.info("dataDoPrazo: "+dt)
						            log.info("horaDoPrazo: "+segundos)
						             
						            
						            
						            // Altera o prazo de conclusão
						            hAPI.setDueDate(numeroDaSolicitacao, threadDaSolicitacao, responsavelPelaTarefa, dt, segundos);
						           
						            log.info("--------after--------- "+dataDoPrazo)
						            log.info("data do prazo: "+dataDoPrazo)
						            log.info("numeroDaSolicitacao: "+numeroDaSolicitacao)
						            log.info("threadDaSolicitacao: "+threadDaSolicitacao)
						            log.info("responsavelPelaTarefa: "+responsavelPelaTarefa)
						            log.info("dataDoPrazo: "+dt)
						            log.info("horaDoPrazo: "+segundos)
						            log.info("Try Executado with successo") 
						            console.log("dataDoPrazo 08 "+dataDoPrazo)
						           }catch (mistake){
						        	   log.info("erro do catch" + mistake)
					        	   }
						      
						     
//=---------------------------------------------------------------------------------------------------------------------------------------------------------------------------						        
						        
						  }
					  }else if (setValorSLA == "12" ){
							  console.log("entrou 12")

    								log.info("Entrou IF 12 Horas: " + setValorSLA)
    	
						        // Recuperando a data informada no campo do formulário
						        if (prazoFormulario != undefined && prazoFormulario != '') {

    								log.info("Entrou IF 1 After Task Save Não vazio: " + setValorSLA)
						            var numeroDaSolicitacao = getValue('WKNumProces');
						            var threadDaSolicitacao = 0; // Normalmente 0, quando não for atividade paralela
						            var responsavelPelaTarefa = colleagueId;
						             
						            /* Nesse caso o formato da data salva pelo formulário no exemplo é DD/MM/AAAA, mas isso pode variar de acordo com a formatação utilizada, 
						               mudando assim as posições das informações dentro do array */
						             
						            /* Extrai os dados da data do formulário para um array, para posteriormente transformar em data do Javascript */
						            var arrayPrazoConclusao = prazoFormulario.split("/");
						            var dia = arrayPrazoConclusao[0]; // Posição 0 do array é o dia
						            var mes = arrayPrazoConclusao[1] - 1; // Posição 1 do array é o mês (Subtraímos 1 porque na data do Javascript o mês vai de 0 a 11)
						            var ano = arrayPrazoConclusao[2]; // Posição 2 do array é o ano
						          
						            var horaDoPrazo = (15*60*60) - 1; /* A hora é em milisegundos, e esse cálculo tem resultado de 23:59:59, ou seja, 
						            o prazo de conclusão vai ser até o último segundo do dia informado no formulário */
						           try{
						            // Cria a data no Javascript
						            var dataDoPrazo = new Date();
						            dataDoPrazo.setDate(dia);
						            dataDoPrazo.setMonth(mes);
						            dataDoPrazo.setFullYear(ano);
						            
						            //Calcula o prazo
						            var obj = hAPI.calculateDeadLineHours(dataDoPrazo, 50000, 12, "Central de Cadastro - Cli/For");
						            var dt = obj[0];
						            var segundos = obj[1];
						            log.info("data do prazo: "+dataDoPrazo)
						            log.info("numeroDaSolicitacao: "+numeroDaSolicitacao)
						            log.info("threadDaSolicitacao: "+threadDaSolicitacao)
						            log.info("responsavelPelaTarefa: "+responsavelPelaTarefa)
						            log.info("dataDoPrazo: "+dt)
						            log.info("horaDoPrazo: "+segundos)
						             
						            
						            
						            // Altera o prazo de conclusão
						            hAPI.setDueDate(numeroDaSolicitacao, threadDaSolicitacao, responsavelPelaTarefa, dt, segundos);
						           
						            log.info("--------after--------- "+dataDoPrazo)
						            log.info("data do prazo: "+dataDoPrazo)
						            log.info("numeroDaSolicitacao: "+numeroDaSolicitacao)
						            log.info("threadDaSolicitacao: "+threadDaSolicitacao)
						            log.info("responsavelPelaTarefa: "+responsavelPelaTarefa)
						            log.info("dataDoPrazo: "+dt)
						            log.info("horaDoPrazo: "+segundos)
						            log.info("Try Executado with successo") 
						            console.log("dataDoPrazo 12 "+dataDoPrazo)
						           }catch (mistake){
						        	   log.info("erro do catch" + mistake)
					        	   }
				

//------------------------------------------------------------------------------------------------------------------------------------------------------
						        	
						 }
					 }else if (setValorSLA == "15" ){
						  console.log("entrou 15")

							log.info("Entrou IF 15 Horas: " + setValorSLA)

				        // Recuperando a data informada no campo do formulário
				        if (prazoFormulario != undefined && prazoFormulario != '') {

							log.info("Entrou IF 1 After Task Save Não vazio: " + setValorSLA)
				            var numeroDaSolicitacao = getValue('WKNumProces');
				            var threadDaSolicitacao = 0; // Normalmente 0, quando não for atividade paralela
				            var responsavelPelaTarefa = colleagueId;
				             
				            /* Nesse caso o formato da data salva pelo formulário no exemplo é DD/MM/AAAA, mas isso pode variar de acordo com a formatação utilizada, 
				               mudando assim as posições das informações dentro do array */
				             
				            /* Extrai os dados da data do formulário para um array, para posteriormente transformar em data do Javascript */
				            var arrayPrazoConclusao = prazoFormulario.split("/");
				            var dia = arrayPrazoConclusao[0]; // Posição 0 do array é o dia
				            var mes = arrayPrazoConclusao[1] - 1; // Posição 1 do array é o mês (Subtraímos 1 porque na data do Javascript o mês vai de 0 a 11)
				            var ano = arrayPrazoConclusao[2]; // Posição 2 do array é o ano
				          
				            var horaDoPrazo = (15*60*60) - 1; /* A hora é em milisegundos, e esse cálculo tem resultado de 23:59:59, ou seja, 
				            o prazo de conclusão vai ser até o último segundo do dia informado no formulário */
				           try{
				            // Cria a data no Javascript
				            var dataDoPrazo = new Date();
				            dataDoPrazo.setDate(dia);
				            dataDoPrazo.setMonth(mes);
				            dataDoPrazo.setFullYear(ano);
				            
				            //Calcula o prazo
				            var obj = hAPI.calculateDeadLineHours(dataDoPrazo, 50000, 15, "Central de Cadastro - Cli/For");
				            var dt = obj[0];
				            var segundos = obj[1];
				            log.info("data do prazo: "+dataDoPrazo)
				            log.info("numeroDaSolicitacao: "+numeroDaSolicitacao)
				            log.info("threadDaSolicitacao: "+threadDaSolicitacao)
				            log.info("responsavelPelaTarefa: "+responsavelPelaTarefa)
				            log.info("dataDoPrazo: "+dt)
				            log.info("horaDoPrazo: "+segundos)
				             
				            
				            
				            // Altera o prazo de conclusão
				            hAPI.setDueDate(numeroDaSolicitacao, threadDaSolicitacao, responsavelPelaTarefa, dt, segundos);
				           
				            log.info("--------after--------- "+dataDoPrazo)
				            log.info("data do prazo: "+dataDoPrazo)
				            log.info("numeroDaSolicitacao: "+numeroDaSolicitacao)
				            log.info("threadDaSolicitacao: "+threadDaSolicitacao)
				            log.info("responsavelPelaTarefa: "+responsavelPelaTarefa)
				            log.info("dataDoPrazo: "+dt)
				            log.info("horaDoPrazo: "+segundos)
				            log.info("Try Executado with successo") 
				            console.log("dataDoPrazo 15 "+dataDoPrazo)
				           }catch (mistake){
				        	   log.info("erro do catch" + mistake)
			        	   }
		

//------------------------------------------------------------------------------------------------------------------------------------------------------
				        	
				 }
			 }else if (setValorSLA == "20" ){
							 console.log("entrou 20 ")

								log.info("Entrou IF 20 Horas: " + setValorSLA)
	
					        // Recuperando a data informada no campo do formulário
					        if (prazoFormulario != undefined && prazoFormulario != '') {

								log.info("Entrou IF 1 After Task Save Não vazio: " + setValorSLA)
					            var numeroDaSolicitacao = getValue('WKNumProces');
					            var threadDaSolicitacao = 0; // Normalmente 0, quando não for atividade paralela
					            var responsavelPelaTarefa = colleagueId;
					             
					            /* Nesse caso o formato da data salva pelo formulário no exemplo é DD/MM/AAAA, mas isso pode variar de acordo com a formatação utilizada, 
					               mudando assim as posições das informações dentro do array */
					             
					            /* Extrai os dados da data do formulário para um array, para posteriormente transformar em data do Javascript */
					            var arrayPrazoConclusao = prazoFormulario.split("/");
					            var dia = arrayPrazoConclusao[0]; // Posição 0 do array é o dia
					            var mes = arrayPrazoConclusao[1] - 1; // Posição 1 do array é o mês (Subtraímos 1 porque na data do Javascript o mês vai de 0 a 11)
					            var ano = arrayPrazoConclusao[2]; // Posição 2 do array é o ano
					          
					            var horaDoPrazo = (15*60*60) - 1; /* A hora é em milisegundos, e esse cálculo tem resultado de 23:59:59, ou seja, 
					            o prazo de conclusão vai ser até o último segundo do dia informado no formulário */
					           try{
					            // Cria a data no Javascript
					            var dataDoPrazo = new Date();
					            dataDoPrazo.setDate(dia);
					            dataDoPrazo.setMonth(mes);
					            dataDoPrazo.setFullYear(ano);
					            
					            //Calcula o prazo
					            var obj = hAPI.calculateDeadLineHours(dataDoPrazo, 50000, 20, "Central de Cadastro - Cli/For");
					            var dt = obj[0];
					            var segundos = obj[1];
					            log.info("data do prazo: "+dataDoPrazo)
					            log.info("numeroDaSolicitacao: "+numeroDaSolicitacao)
					            log.info("threadDaSolicitacao: "+threadDaSolicitacao)
					            log.info("responsavelPelaTarefa: "+responsavelPelaTarefa)
					            log.info("dataDoPrazo: "+dt)
					            log.info("horaDoPrazo: "+segundos)
					             
					            
					            
					            // Altera o prazo de conclusão
					            hAPI.setDueDate(numeroDaSolicitacao, threadDaSolicitacao, responsavelPelaTarefa, dt, segundos);
					           
					            log.info("--------after--------- "+dataDoPrazo)
					            log.info("data do prazo: "+dataDoPrazo)
					            log.info("numeroDaSolicitacao: "+numeroDaSolicitacao)
					            log.info("threadDaSolicitacao: "+threadDaSolicitacao)
					            log.info("responsavelPelaTarefa: "+responsavelPelaTarefa)
					            log.info("dataDoPrazo: "+dt)
					            log.info("horaDoPrazo: "+segundos)
					            log.info("Try Executado with successo") 
					            console.log("dataDoPrazo 20 "+dataDoPrazo)
					           }catch (mistake){
					        	   log.info("erro do catch" + mistake)
					           }
					           
//------------------------------------------------------------------------------------------------------------------------------------------------------
					        	
					   }
				   }else if (setValorSLA == "24" ){
							 console.log("entrou 24 ")

								log.info("Entrou IF 24 Horas: " + setValorSLA)
	
					        // Recuperando a data informada no campo do formulário
					        if (prazoFormulario != undefined && prazoFormulario != '') {

								log.info("Entrou IF 1 After Task Save Não vazio: " + setValorSLA)
					            var numeroDaSolicitacao = getValue('WKNumProces');
					            var threadDaSolicitacao = 0; // Normalmente 0, quando não for atividade paralela
					            var responsavelPelaTarefa = colleagueId;
					             
					            /* Nesse caso o formato da data salva pelo formulário no exemplo é DD/MM/AAAA, mas isso pode variar de acordo com a formatação utilizada, 
					               mudando assim as posições das informações dentro do array */
					             
					            /* Extrai os dados da data do formulário para um array, para posteriormente transformar em data do Javascript */
					            var arrayPrazoConclusao = prazoFormulario.split("/");
					            var dia = arrayPrazoConclusao[0]; // Posição 0 do array é o dia
					            var mes = arrayPrazoConclusao[1] - 1; // Posição 1 do array é o mês (Subtraímos 1 porque na data do Javascript o mês vai de 0 a 11)
					            var ano = arrayPrazoConclusao[2]; // Posição 2 do array é o ano
					          
					            var horaDoPrazo = (15*60*60) - 1; /* A hora é em milisegundos, e esse cálculo tem resultado de 23:59:59, ou seja, 
					            o prazo de conclusão vai ser até o último segundo do dia informado no formulário */
					           try{
					            // Cria a data no Javascript
					            var dataDoPrazo = new Date();
					            dataDoPrazo.setDate(dia);
					            dataDoPrazo.setMonth(mes);
					            dataDoPrazo.setFullYear(ano);
					            
					            //Calcula o prazo
					            var obj = hAPI.calculateDeadLineHours(dataDoPrazo, 50000, 24, "Central de Cadastro - Cli/For");
					            var dt = obj[0];
					            var segundos = obj[1];
					            log.info("data do prazo: "+dataDoPrazo)
					            log.info("numeroDaSolicitacao: "+numeroDaSolicitacao)
					            log.info("threadDaSolicitacao: "+threadDaSolicitacao)
					            log.info("responsavelPelaTarefa: "+responsavelPelaTarefa)
					            log.info("dataDoPrazo: "+dt)
					            log.info("horaDoPrazo: "+segundos)
					             
					            
					            
					            // Altera o prazo de conclusão
					            hAPI.setDueDate(numeroDaSolicitacao, threadDaSolicitacao, responsavelPelaTarefa, dt, segundos);
					           
					            log.info("--------after--------- "+dataDoPrazo)
					            log.info("data do prazo: "+dataDoPrazo)
					            log.info("numeroDaSolicitacao: "+numeroDaSolicitacao)
					            log.info("threadDaSolicitacao: "+threadDaSolicitacao)
					            log.info("responsavelPelaTarefa: "+responsavelPelaTarefa)
					            log.info("dataDoPrazo: "+dt)
					            log.info("horaDoPrazo: "+segundos)
					            log.info("Try Executado with successo") 
					            console.log("dataDoPrazo 24 "+dataDoPrazo)
					           }catch (mistake){
					        	   log.info("erro do catch" + mistake)
					           }
//------------------------------------------------------------------------------------------------------------------------------------------------------
					   }
				   }else if (setValorSLA == "30" ){
							 console.log("entrou 30 ")

								log.info("Entrou IF 30 Horas: " + setValorSLA)
	
					        // Recuperando a data informada no campo do formulário
					        if (prazoFormulario != undefined && prazoFormulario != '') {

								log.info("Entrou IF 1 After Task Save Não vazio: " + setValorSLA)
					            var numeroDaSolicitacao = getValue('WKNumProces');
					            var threadDaSolicitacao = 0; // Normalmente 0, quando não for atividade paralela
					            var responsavelPelaTarefa = colleagueId;
					             
					            /* Nesse caso o formato da data salva pelo formulário no exemplo é DD/MM/AAAA, mas isso pode variar de acordo com a formatação utilizada, 
					               mudando assim as posições das informações dentro do array */
					             
					            /* Extrai os dados da data do formulário para um array, para posteriormente transformar em data do Javascript */
					            var arrayPrazoConclusao = prazoFormulario.split("/");
					            var dia = arrayPrazoConclusao[0]; // Posição 0 do array é o dia
					            var mes = arrayPrazoConclusao[1] - 1; // Posição 1 do array é o mês (Subtraímos 1 porque na data do Javascript o mês vai de 0 a 11)
					            var ano = arrayPrazoConclusao[2]; // Posição 2 do array é o ano
					          
					            var horaDoPrazo = (15*60*60) - 1; /* A hora é em milisegundos, e esse cálculo tem resultado de 23:59:59, ou seja, 
					            o prazo de conclusão vai ser até o último segundo do dia informado no formulário */
					           try{
					            // Cria a data no Javascript
					            var dataDoPrazo = new Date();
					            dataDoPrazo.setDate(dia);
					            dataDoPrazo.setMonth(mes);
					            dataDoPrazo.setFullYear(ano);
					            
					            //Calcula o prazo
					            var obj = hAPI.calculateDeadLineHours(dataDoPrazo, 50000, 30, "Central de Cadastro - Cli/For");
					            var dt = obj[0];
					            var segundos = obj[1];
					            log.info("data do prazo: "+dataDoPrazo)
					            log.info("numeroDaSolicitacao: "+numeroDaSolicitacao)
					            log.info("threadDaSolicitacao: "+threadDaSolicitacao)
					            log.info("responsavelPelaTarefa: "+responsavelPelaTarefa)
					            log.info("dataDoPrazo: "+dt)
					            log.info("horaDoPrazo: "+segundos)
					             
					            
					            
					            // Altera o prazo de conclusão
					            hAPI.setDueDate(numeroDaSolicitacao, threadDaSolicitacao, responsavelPelaTarefa, dt, segundos);
					           
					            log.info("--------after--------- "+dataDoPrazo)
					            log.info("data do prazo: "+dataDoPrazo)
					            log.info("numeroDaSolicitacao: "+numeroDaSolicitacao)
					            log.info("threadDaSolicitacao: "+threadDaSolicitacao)
					            log.info("responsavelPelaTarefa: "+responsavelPelaTarefa)
					            log.info("dataDoPrazo: "+dt)
					            log.info("horaDoPrazo: "+segundos)
					            log.info("Try Executado with successo") 
					            console.log("dataDoPrazo 30 "+dataDoPrazo)
					           }catch (mistake){
					        	   log.info("erro do catch" + mistake)
					        	   }
					           
//------------------------------------------------------------------------------------------------------------------------------------------------------
					   
					      }
				   }else if (setValorSLA == "36" ){
						 console.log("entrou 4 DIAS ")

							log.info("Entrou IF 4 DIAS: " + setValorSLA)

				        // Recuperando a data informada no campo do formulário
				        if (prazoFormulario != undefined && prazoFormulario != '') {

							log.info("Entrou IF 1 After Task Save Não vazio: " + setValorSLA)
				            var numeroDaSolicitacao = getValue('WKNumProces');
				            var threadDaSolicitacao = 0; // Normalmente 0, quando não for atividade paralela
				            var responsavelPelaTarefa = colleagueId;
				             
				            /* Nesse caso o formato da data salva pelo formulário no exemplo é DD/MM/AAAA, mas isso pode variar de acordo com a formatação utilizada, 
				               mudando assim as posições das informações dentro do array */
				             
				            /* Extrai os dados da data do formulário para um array, para posteriormente transformar em data do Javascript */
				            var arrayPrazoConclusao = prazoFormulario.split("/");
				            var dia = arrayPrazoConclusao[0]; // Posição 0 do array é o dia
				            var mes = arrayPrazoConclusao[1] - 1; // Posição 1 do array é o mês (Subtraímos 1 porque na data do Javascript o mês vai de 0 a 11)
				            var ano = arrayPrazoConclusao[2]; // Posição 2 do array é o ano
				          
				            var horaDoPrazo = (15*60*60) - 1; /* A hora é em milisegundos, e esse cálculo tem resultado de 23:59:59, ou seja, 
				            o prazo de conclusão vai ser até o último segundo do dia informado no formulário */
				           try{
				            // Cria a data no Javascript
				            var dataDoPrazo = new Date();
				            dataDoPrazo.setDate(dia);
				            dataDoPrazo.setMonth(mes);
				            dataDoPrazo.setFullYear(ano);
				            
				            //Calcula o prazo
				            var obj = hAPI.calculateDeadLineHours(dataDoPrazo, 50000, 36, "Central de Cadastro - Cli/For");
				            var dt = obj[0];
				            var segundos = obj[1];
				            log.info("data do prazo: "+dataDoPrazo)
				            log.info("numeroDaSolicitacao: "+numeroDaSolicitacao)
				            log.info("threadDaSolicitacao: "+threadDaSolicitacao)
				            log.info("responsavelPelaTarefa: "+responsavelPelaTarefa)
				            log.info("dataDoPrazo: "+dt)
				            log.info("horaDoPrazo: "+segundos)
				             
				            
				            
				            // Altera o prazo de conclusão
				            hAPI.setDueDate(numeroDaSolicitacao, threadDaSolicitacao, responsavelPelaTarefa, dt, segundos);
				           
				            log.info("--------after--------- "+dataDoPrazo)
				            log.info("data do prazo: "+dataDoPrazo)
				            log.info("numeroDaSolicitacao: "+numeroDaSolicitacao)
				            log.info("threadDaSolicitacao: "+threadDaSolicitacao)
				            log.info("responsavelPelaTarefa: "+responsavelPelaTarefa)
				            log.info("dataDoPrazo: "+dt)
				            log.info("horaDoPrazo: "+segundos)
				            log.info("Try Executado with successo") 
				            console.log("dataDoPrazo 4 DIAS "+dataDoPrazo)
				           }catch (mistake){
				        	   log.info("erro do catch" + mistake)
				        	   }
				           
//------------------------------------------------------------------------------------------------------------------------------------------------------
				        
				        }
					}else if (setValorSLA == "45" ){
						 console.log("entrou 5 DIAS ")

							log.info("Entrou IF 5 DIAS: " + setValorSLA)

				        // Recuperando a data informada no campo do formulário
				        if (prazoFormulario != undefined && prazoFormulario != '') {

							log.info("Entrou IF 1 After Task Save Não vazio: " + setValorSLA)
				            var numeroDaSolicitacao = getValue('WKNumProces');
				            var threadDaSolicitacao = 0; // Normalmente 0, quando não for atividade paralela
				            var responsavelPelaTarefa = colleagueId;
				             
				            /* Nesse caso o formato da data salva pelo formulário no exemplo é DD/MM/AAAA, mas isso pode variar de acordo com a formatação utilizada, 
				               mudando assim as posições das informações dentro do array */
				             
				            /* Extrai os dados da data do formulário para um array, para posteriormente transformar em data do Javascript */
				            var arrayPrazoConclusao = prazoFormulario.split("/");
				            var dia = arrayPrazoConclusao[0]; // Posição 0 do array é o dia
				            var mes = arrayPrazoConclusao[1] - 1; // Posição 1 do array é o mês (Subtraímos 1 porque na data do Javascript o mês vai de 0 a 11)
				            var ano = arrayPrazoConclusao[2]; // Posição 2 do array é o ano
				          
				            var horaDoPrazo = (15*60*60) - 1; /* A hora é em milisegundos, e esse cálculo tem resultado de 23:59:59, ou seja, 
				            o prazo de conclusão vai ser até o último segundo do dia informado no formulário */
				           try{
				            // Cria a data no Javascript
				            var dataDoPrazo = new Date();
				            dataDoPrazo.setDate(dia);
				            dataDoPrazo.setMonth(mes);
				            dataDoPrazo.setFullYear(ano);
				            
				            //Calcula o prazo
				            var obj = hAPI.calculateDeadLineHours(dataDoPrazo, 50000, 45, "Central de Cadastro - Cli/For");
				            var dt = obj[0];
				            var segundos = obj[1];
				            log.info("data do prazo: "+dataDoPrazo)
				            log.info("numeroDaSolicitacao: "+numeroDaSolicitacao)
				            log.info("threadDaSolicitacao: "+threadDaSolicitacao)
				            log.info("responsavelPelaTarefa: "+responsavelPelaTarefa)
				            log.info("dataDoPrazo: "+dt)
				            log.info("horaDoPrazo: "+segundos)
				             
				            
				            
				            // Altera o prazo de conclusão
				            hAPI.setDueDate(numeroDaSolicitacao, threadDaSolicitacao, responsavelPelaTarefa, dt, segundos);
				           
				            log.info("--------after--------- "+dataDoPrazo)
				            log.info("data do prazo: "+dataDoPrazo)
				            log.info("numeroDaSolicitacao: "+numeroDaSolicitacao)
				            log.info("threadDaSolicitacao: "+threadDaSolicitacao)
				            log.info("responsavelPelaTarefa: "+responsavelPelaTarefa)
				            log.info("dataDoPrazo: "+dt)
				            log.info("horaDoPrazo: "+segundos)
				            log.info("Try Executado with successo") 
				            console.log("dataDoPrazo 5 DIAS "+dataDoPrazo)
				           }catch (mistake){
				        	   log.info("erro do catch" + mistake)
				        	   }
				           
//------------------------------------------------------------------------------------------------------------------------------------------------------
				        
				        }
					}else if (setValorSLA == "63" ){
						 console.log("entrou 7 DIAS ")

							log.info("Entrou IF 7 DIAS: " + setValorSLA)

				        // Recuperando a data informada no campo do formulário
				        if (prazoFormulario != undefined && prazoFormulario != '') {

							log.info("Entrou IF 1 After Task Save Não vazio: " + setValorSLA)
				            var numeroDaSolicitacao = getValue('WKNumProces');
				            var threadDaSolicitacao = 0; // Normalmente 0, quando não for atividade paralela
				            var responsavelPelaTarefa = colleagueId;
				             
				            /* Nesse caso o formato da data salva pelo formulário no exemplo é DD/MM/AAAA, mas isso pode variar de acordo com a formatação utilizada, 
				               mudando assim as posições das informações dentro do array */
				             
				            /* Extrai os dados da data do formulário para um array, para posteriormente transformar em data do Javascript */
				            var arrayPrazoConclusao = prazoFormulario.split("/");
				            var dia = arrayPrazoConclusao[0]; // Posição 0 do array é o dia
				            var mes = arrayPrazoConclusao[1] - 1; // Posição 1 do array é o mês (Subtraímos 1 porque na data do Javascript o mês vai de 0 a 11)
				            var ano = arrayPrazoConclusao[2]; // Posição 2 do array é o ano
				          
				            var horaDoPrazo = (15*60*60) - 1; /* A hora é em milisegundos, e esse cálculo tem resultado de 23:59:59, ou seja, 
				            o prazo de conclusão vai ser até o último segundo do dia informado no formulário */
				           try{
				            // Cria a data no Javascript
				            var dataDoPrazo = new Date();
				            dataDoPrazo.setDate(dia);
				            dataDoPrazo.setMonth(mes);
				            dataDoPrazo.setFullYear(ano);
				            
				            //Calcula o prazo
				            var obj = hAPI.calculateDeadLineHours(dataDoPrazo, 50000, 63, "Central de Cadastro - Cli/For");
				            var dt = obj[0];
				            var segundos = obj[1];
				            log.info("data do prazo: "+dataDoPrazo)
				            log.info("numeroDaSolicitacao: "+numeroDaSolicitacao)
				            log.info("threadDaSolicitacao: "+threadDaSolicitacao)
				            log.info("responsavelPelaTarefa: "+responsavelPelaTarefa)
				            log.info("dataDoPrazo: "+dt)
				            log.info("horaDoPrazo: "+segundos)
				             
				            
				            
				            // Altera o prazo de conclusão
				            hAPI.setDueDate(numeroDaSolicitacao, threadDaSolicitacao, responsavelPelaTarefa, dt, segundos);
				           
				            log.info("--------after--------- "+dataDoPrazo)
				            log.info("data do prazo: "+dataDoPrazo)
				            log.info("numeroDaSolicitacao: "+numeroDaSolicitacao)
				            log.info("threadDaSolicitacao: "+threadDaSolicitacao)
				            log.info("responsavelPelaTarefa: "+responsavelPelaTarefa)
				            log.info("dataDoPrazo: "+dt)
				            log.info("horaDoPrazo: "+segundos)
				            log.info("Try Executado with successo") 
				            console.log("dataDoPrazo 7 DIAS "+dataDoPrazo)
				           }catch (mistake){
				        	   log.info("erro do catch" + mistake)
				        	   }
				           
//------------------------------------------------------------------------------------------------------------------------------------------------------
				        
				        }
					}else if (setValorSLA == "72" ){
						 console.log("entrou 8 DIAS ")

							log.info("Entrou IF 8 DIAS: " + setValorSLA)

				        // Recuperando a data informada no campo do formulário
				        if (prazoFormulario != undefined && prazoFormulario != '') {

							log.info("Entrou IF 1 After Task Save Não vazio: " + setValorSLA)
				            var numeroDaSolicitacao = getValue('WKNumProces');
				            var threadDaSolicitacao = 0; // Normalmente 0, quando não for atividade paralela
				            var responsavelPelaTarefa = colleagueId;
				             
				            /* Nesse caso o formato da data salva pelo formulário no exemplo é DD/MM/AAAA, mas isso pode variar de acordo com a formatação utilizada, 
				               mudando assim as posições das informações dentro do array */
				             
				            /* Extrai os dados da data do formulário para um array, para posteriormente transformar em data do Javascript */
				            var arrayPrazoConclusao = prazoFormulario.split("/");
				            var dia = arrayPrazoConclusao[0]; // Posição 0 do array é o dia
				            var mes = arrayPrazoConclusao[1] - 1; // Posição 1 do array é o mês (Subtraímos 1 porque na data do Javascript o mês vai de 0 a 11)
				            var ano = arrayPrazoConclusao[2]; // Posição 2 do array é o ano
				          
				            var horaDoPrazo = (15*60*60) - 1; /* A hora é em milisegundos, e esse cálculo tem resultado de 23:59:59, ou seja, 
				            o prazo de conclusão vai ser até o último segundo do dia informado no formulário */
				           try{
				            // Cria a data no Javascript
				            var dataDoPrazo = new Date();
				            dataDoPrazo.setDate(dia);
				            dataDoPrazo.setMonth(mes);
				            dataDoPrazo.setFullYear(ano);
				            
				            //Calcula o prazo
				            var obj = hAPI.calculateDeadLineHours(dataDoPrazo, 50000, 72, "Central de Cadastro - Cli/For");
				            var dt = obj[0];
				            var segundos = obj[1];
				            log.info("data do prazo: "+dataDoPrazo)
				            log.info("numeroDaSolicitacao: "+numeroDaSolicitacao)
				            log.info("threadDaSolicitacao: "+threadDaSolicitacao)
				            log.info("responsavelPelaTarefa: "+responsavelPelaTarefa)
				            log.info("dataDoPrazo: "+dt)
				            log.info("horaDoPrazo: "+segundos)
				             
				            
				            
				            // Altera o prazo de conclusão
				            hAPI.setDueDate(numeroDaSolicitacao, threadDaSolicitacao, responsavelPelaTarefa, dt, segundos);
				           
				            log.info("--------after--------- "+dataDoPrazo)
				            log.info("data do prazo: "+dataDoPrazo)
				            log.info("numeroDaSolicitacao: "+numeroDaSolicitacao)
				            log.info("threadDaSolicitacao: "+threadDaSolicitacao)
				            log.info("responsavelPelaTarefa: "+responsavelPelaTarefa)
				            log.info("dataDoPrazo: "+dt)
				            log.info("horaDoPrazo: "+segundos)
				            log.info("Try Executado with successo") 
				            console.log("dataDoPrazo 8 DIAS "+dataDoPrazo)
				           }catch (mistake){
				        	   log.info("erro do catch" + mistake)
				        	   }
				           
//------------------------------------------------------------------------------------------------------------------------------------------------------
				        
				        }
					}else if (setValorSLA == "90" ){
						 console.log("entrou 10 DIAS ")

							log.info("Entrou IF 10 DIAS: " + setValorSLA)

				        // Recuperando a data informada no campo do formulário
				        if (prazoFormulario != undefined && prazoFormulario != '') {

							log.info("Entrou IF 1 After Task Save Não vazio: " + setValorSLA)
				            var numeroDaSolicitacao = getValue('WKNumProces');
				            var threadDaSolicitacao = 0; // Normalmente 0, quando não for atividade paralela
				            var responsavelPelaTarefa = colleagueId;
				             
				            /* Nesse caso o formato da data salva pelo formulário no exemplo é DD/MM/AAAA, mas isso pode variar de acordo com a formatação utilizada, 
				               mudando assim as posições das informações dentro do array */
				             
				            /* Extrai os dados da data do formulário para um array, para posteriormente transformar em data do Javascript */
				            var arrayPrazoConclusao = prazoFormulario.split("/");
				            var dia = arrayPrazoConclusao[0]; // Posição 0 do array é o dia
				            var mes = arrayPrazoConclusao[1] - 1; // Posição 1 do array é o mês (Subtraímos 1 porque na data do Javascript o mês vai de 0 a 11)
				            var ano = arrayPrazoConclusao[2]; // Posição 2 do array é o ano
				          
				            var horaDoPrazo = (15*60*60) - 1; /* A hora é em milisegundos, e esse cálculo tem resultado de 23:59:59, ou seja, 
				            o prazo de conclusão vai ser até o último segundo do dia informado no formulário */
				           try{
				            // Cria a data no Javascript
				            var dataDoPrazo = new Date();
				            dataDoPrazo.setDate(dia);
				            dataDoPrazo.setMonth(mes);
				            dataDoPrazo.setFullYear(ano);
				            
				            //Calcula o prazo
				            var obj = hAPI.calculateDeadLineHours(dataDoPrazo, 50000, 90, "Central de Cadastro - Cli/For");
				            var dt = obj[0];
				            var segundos = obj[1];
				            log.info("data do prazo: "+dataDoPrazo)
				            log.info("numeroDaSolicitacao: "+numeroDaSolicitacao)
				            log.info("threadDaSolicitacao: "+threadDaSolicitacao)
				            log.info("responsavelPelaTarefa: "+responsavelPelaTarefa)
				            log.info("dataDoPrazo: "+dt)
				            log.info("horaDoPrazo: "+segundos)
				             
				            
				            
				            // Altera o prazo de conclusão
				            hAPI.setDueDate(numeroDaSolicitacao, threadDaSolicitacao, responsavelPelaTarefa, dt, segundos);
				           
				            log.info("--------after--------- "+dataDoPrazo)
				            log.info("data do prazo: "+dataDoPrazo)
				            log.info("numeroDaSolicitacao: "+numeroDaSolicitacao)
				            log.info("threadDaSolicitacao: "+threadDaSolicitacao)
				            log.info("responsavelPelaTarefa: "+responsavelPelaTarefa)
				            log.info("dataDoPrazo: "+dt)
				            log.info("horaDoPrazo: "+segundos)
				            log.info("Try Executado with successo") 
				            console.log("dataDoPrazo 10 DIAS "+dataDoPrazo)
				           }catch (mistake){
				        	   log.info("erro do catch" + mistake)
				        	   }
				           
//------------------------------------------------------------------------------------------------------------------------------------------------------
				        
				        }
					}else if (setValorSLA == "108" ){
						 console.log("entrou 12 DIAS ")

							log.info("Entrou IF 12 DIAS: " + setValorSLA)

				        // Recuperando a data informada no campo do formulário
				        if (prazoFormulario != undefined && prazoFormulario != '') {

							log.info("Entrou IF 1 After Task Save Não vazio: " + setValorSLA)
				            var numeroDaSolicitacao = getValue('WKNumProces');
				            var threadDaSolicitacao = 0; // Normalmente 0, quando não for atividade paralela
				            var responsavelPelaTarefa = colleagueId;
				             
				            /* Nesse caso o formato da data salva pelo formulário no exemplo é DD/MM/AAAA, mas isso pode variar de acordo com a formatação utilizada, 
				               mudando assim as posições das informações dentro do array */
				             
				            /* Extrai os dados da data do formulário para um array, para posteriormente transformar em data do Javascript */
				            var arrayPrazoConclusao = prazoFormulario.split("/");
				            var dia = arrayPrazoConclusao[0]; // Posição 0 do array é o dia
				            var mes = arrayPrazoConclusao[1] - 1; // Posição 1 do array é o mês (Subtraímos 1 porque na data do Javascript o mês vai de 0 a 11)
				            var ano = arrayPrazoConclusao[2]; // Posição 2 do array é o ano
				          
				            var horaDoPrazo = (15*60*60) - 1; /* A hora é em milisegundos, e esse cálculo tem resultado de 23:59:59, ou seja, 
				            o prazo de conclusão vai ser até o último segundo do dia informado no formulário */
				           try{
				            // Cria a data no Javascript
				            var dataDoPrazo = new Date();
				            dataDoPrazo.setDate(dia);
				            dataDoPrazo.setMonth(mes);
				            dataDoPrazo.setFullYear(ano);
				            
				            //Calcula o prazo
				            var obj = hAPI.calculateDeadLineHours(dataDoPrazo, 50000, 108, "Central de Cadastro - Cli/For");
				            var dt = obj[0];
				            var segundos = obj[1];
				            log.info("data do prazo: "+dataDoPrazo)
				            log.info("numeroDaSolicitacao: "+numeroDaSolicitacao)
				            log.info("threadDaSolicitacao: "+threadDaSolicitacao)
				            log.info("responsavelPelaTarefa: "+responsavelPelaTarefa)
				            log.info("dataDoPrazo: "+dt)
				            log.info("horaDoPrazo: "+segundos)
				             
				            
				            
				            // Altera o prazo de conclusão
				            hAPI.setDueDate(numeroDaSolicitacao, threadDaSolicitacao, responsavelPelaTarefa, dt, segundos);
				           
				            log.info("--------after--------- "+dataDoPrazo)
				            log.info("data do prazo: "+dataDoPrazo)
				            log.info("numeroDaSolicitacao: "+numeroDaSolicitacao)
				            log.info("threadDaSolicitacao: "+threadDaSolicitacao)
				            log.info("responsavelPelaTarefa: "+responsavelPelaTarefa)
				            log.info("dataDoPrazo: "+dt)
				            log.info("horaDoPrazo: "+segundos)
				            log.info("Try Executado with successo") 
				            console.log("dataDoPrazo 12 DIAS "+dataDoPrazo)
				           }catch (mistake){
				        	   log.info("erro do catch" + mistake)
				        	   }
				           
//------------------------------------------------------------------------------------------------------------------------------------------------------
				        
				        }
					}else if (setValorSLA == "126" ){
						 console.log("entrou 14 DIAS ")

							log.info("Entrou IF 14 DIAS: " + setValorSLA)

				        // Recuperando a data informada no campo do formulário
				        if (prazoFormulario != undefined && prazoFormulario != '') {

							log.info("Entrou IF 1 After Task Save Não vazio: " + setValorSLA)
				            var numeroDaSolicitacao = getValue('WKNumProces');
				            var threadDaSolicitacao = 0; // Normalmente 0, quando não for atividade paralela
				            var responsavelPelaTarefa = colleagueId;
				             
				            /* Nesse caso o formato da data salva pelo formulário no exemplo é DD/MM/AAAA, mas isso pode variar de acordo com a formatação utilizada, 
				               mudando assim as posições das informações dentro do array */
				             
				            /* Extrai os dados da data do formulário para um array, para posteriormente transformar em data do Javascript */
				            var arrayPrazoConclusao = prazoFormulario.split("/");
				            var dia = arrayPrazoConclusao[0]; // Posição 0 do array é o dia
				            var mes = arrayPrazoConclusao[1] - 1; // Posição 1 do array é o mês (Subtraímos 1 porque na data do Javascript o mês vai de 0 a 11)
				            var ano = arrayPrazoConclusao[2]; // Posição 2 do array é o ano
				          
				            var horaDoPrazo = (15*60*60) - 1; /* A hora é em milisegundos, e esse cálculo tem resultado de 23:59:59, ou seja, 
				            o prazo de conclusão vai ser até o último segundo do dia informado no formulário */
				           try{
				            // Cria a data no Javascript
				            var dataDoPrazo = new Date();
				            dataDoPrazo.setDate(dia);
				            dataDoPrazo.setMonth(mes);
				            dataDoPrazo.setFullYear(ano);
				            
				            //Calcula o prazo
				            var obj = hAPI.calculateDeadLineHours(dataDoPrazo, 50000, 126, "Central de Cadastro - Cli/For");
				            var dt = obj[0];
				            var segundos = obj[1];
				            log.info("data do prazo: "+dataDoPrazo)
				            log.info("numeroDaSolicitacao: "+numeroDaSolicitacao)
				            log.info("threadDaSolicitacao: "+threadDaSolicitacao)
				            log.info("responsavelPelaTarefa: "+responsavelPelaTarefa)
				            log.info("dataDoPrazo: "+dt)
				            log.info("horaDoPrazo: "+segundos)
				             
				            
				            
				            // Altera o prazo de conclusão
				            hAPI.setDueDate(numeroDaSolicitacao, threadDaSolicitacao, responsavelPelaTarefa, dt, segundos);
				           
				            log.info("--------after--------- "+dataDoPrazo)
				            log.info("data do prazo: "+dataDoPrazo)
				            log.info("numeroDaSolicitacao: "+numeroDaSolicitacao)
				            log.info("threadDaSolicitacao: "+threadDaSolicitacao)
				            log.info("responsavelPelaTarefa: "+responsavelPelaTarefa)
				            log.info("dataDoPrazo: "+dt)
				            log.info("horaDoPrazo: "+segundos)
				            log.info("Try Executado with successo") 
				            console.log("dataDoPrazo 14 DIAS "+dataDoPrazo)
				           }catch (mistake){
				        	   log.info("erro do catch" + mistake)
				        	   }
				           
//------------------------------------------------------------------------------------------------------------------------------------------------------
				        
				        }
					}else if (setValorSLA == "144" ){
						 console.log("entrou 16 DIAS ")

							log.info("Entrou IF 16 DIAS: " + setValorSLA)

				        // Recuperando a data informada no campo do formulário
				        if (prazoFormulario != undefined && prazoFormulario != '') {

							log.info("Entrou IF 1 After Task Save Não vazio: " + setValorSLA)
				            var numeroDaSolicitacao = getValue('WKNumProces');
				            var threadDaSolicitacao = 0; // Normalmente 0, quando não for atividade paralela
				            var responsavelPelaTarefa = colleagueId;
				             
				            /* Nesse caso o formato da data salva pelo formulário no exemplo é DD/MM/AAAA, mas isso pode variar de acordo com a formatação utilizada, 
				               mudando assim as posições das informações dentro do array */
				             
				            /* Extrai os dados da data do formulário para um array, para posteriormente transformar em data do Javascript */
				            var arrayPrazoConclusao = prazoFormulario.split("/");
				            var dia = arrayPrazoConclusao[0]; // Posição 0 do array é o dia
				            var mes = arrayPrazoConclusao[1] - 1; // Posição 1 do array é o mês (Subtraímos 1 porque na data do Javascript o mês vai de 0 a 11)
				            var ano = arrayPrazoConclusao[2]; // Posição 2 do array é o ano
				          
				            var horaDoPrazo = (15*60*60) - 1; /* A hora é em milisegundos, e esse cálculo tem resultado de 23:59:59, ou seja, 
				            o prazo de conclusão vai ser até o último segundo do dia informado no formulário */
				           try{
				            // Cria a data no Javascript
				            var dataDoPrazo = new Date();
				            dataDoPrazo.setDate(dia);
				            dataDoPrazo.setMonth(mes);
				            dataDoPrazo.setFullYear(ano);
				            
				            //Calcula o prazo
				            var obj = hAPI.calculateDeadLineHours(dataDoPrazo, 50000, 144, "Central de Cadastro - Cli/For");
				            var dt = obj[0];
				            var segundos = obj[1];
				            log.info("data do prazo: "+dataDoPrazo)
				            log.info("numeroDaSolicitacao: "+numeroDaSolicitacao)
				            log.info("threadDaSolicitacao: "+threadDaSolicitacao)
				            log.info("responsavelPelaTarefa: "+responsavelPelaTarefa)
				            log.info("dataDoPrazo: "+dt)
				            log.info("horaDoPrazo: "+segundos)
				             
				            
				            
				            // Altera o prazo de conclusão
				            hAPI.setDueDate(numeroDaSolicitacao, threadDaSolicitacao, responsavelPelaTarefa, dt, segundos);
				           
				            log.info("--------after--------- "+dataDoPrazo)
				            log.info("data do prazo: "+dataDoPrazo)
				            log.info("numeroDaSolicitacao: "+numeroDaSolicitacao)
				            log.info("threadDaSolicitacao: "+threadDaSolicitacao)
				            log.info("responsavelPelaTarefa: "+responsavelPelaTarefa)
				            log.info("dataDoPrazo: "+dt)
				            log.info("horaDoPrazo: "+segundos)
				            log.info("Try Executado with successo") 
				            console.log("dataDoPrazo 16 DIAS "+dataDoPrazo)
				           }catch (mistake){
				        	   log.info("erro do catch" + mistake)
				        	   }
				           
//------------------------------------------------------------------------------------------------------------------------------------------------------
				        
				        }
					}else if (setValorSLA == "162" ){
						 console.log("entrou 18 DIAS ")

							log.info("Entrou IF 18 DIAS: " + setValorSLA)

				        // Recuperando a data informada no campo do formulário
				        if (prazoFormulario != undefined && prazoFormulario != '') {

							log.info("Entrou IF 1 After Task Save Não vazio: " + setValorSLA)
				            var numeroDaSolicitacao = getValue('WKNumProces');
				            var threadDaSolicitacao = 0; // Normalmente 0, quando não for atividade paralela
				            var responsavelPelaTarefa = colleagueId;
				             
				            /* Nesse caso o formato da data salva pelo formulário no exemplo é DD/MM/AAAA, mas isso pode variar de acordo com a formatação utilizada, 
				               mudando assim as posições das informações dentro do array */
				             
				            /* Extrai os dados da data do formulário para um array, para posteriormente transformar em data do Javascript */
				            var arrayPrazoConclusao = prazoFormulario.split("/");
				            var dia = arrayPrazoConclusao[0]; // Posição 0 do array é o dia
				            var mes = arrayPrazoConclusao[1] - 1; // Posição 1 do array é o mês (Subtraímos 1 porque na data do Javascript o mês vai de 0 a 11)
				            var ano = arrayPrazoConclusao[2]; // Posição 2 do array é o ano
				          
				            var horaDoPrazo = (15*60*60) - 1; /* A hora é em milisegundos, e esse cálculo tem resultado de 23:59:59, ou seja, 
				            o prazo de conclusão vai ser até o último segundo do dia informado no formulário */
				           try{
				            // Cria a data no Javascript
				            var dataDoPrazo = new Date();
				            dataDoPrazo.setDate(dia);
				            dataDoPrazo.setMonth(mes);
				            dataDoPrazo.setFullYear(ano);
				            
				            //Calcula o prazo
				            var obj = hAPI.calculateDeadLineHours(dataDoPrazo, 50000, 162, "Central de Cadastro - Cli/For");
				            var dt = obj[0];
				            var segundos = obj[1];
				            log.info("data do prazo: "+dataDoPrazo)
				            log.info("numeroDaSolicitacao: "+numeroDaSolicitacao)
				            log.info("threadDaSolicitacao: "+threadDaSolicitacao)
				            log.info("responsavelPelaTarefa: "+responsavelPelaTarefa)
				            log.info("dataDoPrazo: "+dt)
				            log.info("horaDoPrazo: "+segundos)
				             
				            
				            
				            // Altera o prazo de conclusão
				            hAPI.setDueDate(numeroDaSolicitacao, threadDaSolicitacao, responsavelPelaTarefa, dt, segundos);
				           
				            log.info("--------after--------- "+dataDoPrazo)
				            log.info("data do prazo: "+dataDoPrazo)
				            log.info("numeroDaSolicitacao: "+numeroDaSolicitacao)
				            log.info("threadDaSolicitacao: "+threadDaSolicitacao)
				            log.info("responsavelPelaTarefa: "+responsavelPelaTarefa)
				            log.info("dataDoPrazo: "+dt)
				            log.info("horaDoPrazo: "+segundos)
				            log.info("Try Executado with successo") 
				            console.log("dataDoPrazo 18 DIAS "+dataDoPrazo)
				           }catch (mistake){
				        	   log.info("erro do catch" + mistake)
				        	   }
				           
//------------------------------------------------------------------------------------------------------------------------------------------------------
				        
				        }
					}else if (setValorSLA == "180" ){
						 console.log("entrou 20 DIAS ")

							log.info("Entrou IF 20 DIAS: " + setValorSLA)

				        // Recuperando a data informada no campo do formulário
				        if (prazoFormulario != undefined && prazoFormulario != '') {

							log.info("Entrou IF 1 After Task Save Não vazio: " + setValorSLA)
				            var numeroDaSolicitacao = getValue('WKNumProces');
				            var threadDaSolicitacao = 0; // Normalmente 0, quando não for atividade paralela
				            var responsavelPelaTarefa = colleagueId;
				             
				            /* Nesse caso o formato da data salva pelo formulário no exemplo é DD/MM/AAAA, mas isso pode variar de acordo com a formatação utilizada, 
				               mudando assim as posições das informações dentro do array */
				             
				            /* Extrai os dados da data do formulário para um array, para posteriormente transformar em data do Javascript */
				            var arrayPrazoConclusao = prazoFormulario.split("/");
				            var dia = arrayPrazoConclusao[0]; // Posição 0 do array é o dia
				            var mes = arrayPrazoConclusao[1] - 1; // Posição 1 do array é o mês (Subtraímos 1 porque na data do Javascript o mês vai de 0 a 11)
				            var ano = arrayPrazoConclusao[2]; // Posição 2 do array é o ano
				          
				            var horaDoPrazo = (15*60*60) - 1; /* A hora é em milisegundos, e esse cálculo tem resultado de 23:59:59, ou seja, 
				            o prazo de conclusão vai ser até o último segundo do dia informado no formulário */
				           try{
				            // Cria a data no Javascript
				            var dataDoPrazo = new Date();
				            dataDoPrazo.setDate(dia);
				            dataDoPrazo.setMonth(mes);
				            dataDoPrazo.setFullYear(ano);
				            
				            //Calcula o prazo
				            var obj = hAPI.calculateDeadLineHours(dataDoPrazo, 50000, 180, "Central de Cadastro - Cli/For");
				            var dt = obj[0];
				            var segundos = obj[1];
				            log.info("data do prazo: "+dataDoPrazo)
				            log.info("numeroDaSolicitacao: "+numeroDaSolicitacao)
				            log.info("threadDaSolicitacao: "+threadDaSolicitacao)
				            log.info("responsavelPelaTarefa: "+responsavelPelaTarefa)
				            log.info("dataDoPrazo: "+dt)
				            log.info("horaDoPrazo: "+segundos)
				             
				            
				            
				            // Altera o prazo de conclusão
				            hAPI.setDueDate(numeroDaSolicitacao, threadDaSolicitacao, responsavelPelaTarefa, dt, segundos);
				           
				            log.info("--------after--------- "+dataDoPrazo)
				            log.info("data do prazo: "+dataDoPrazo)
				            log.info("numeroDaSolicitacao: "+numeroDaSolicitacao)
				            log.info("threadDaSolicitacao: "+threadDaSolicitacao)
				            log.info("responsavelPelaTarefa: "+responsavelPelaTarefa)
				            log.info("dataDoPrazo: "+dt)
				            log.info("horaDoPrazo: "+segundos)
				            log.info("Try Executado with successo") 
				            console.log("dataDoPrazo 20 DIAS "+dataDoPrazo)
				           }catch (mistake){
				        	   log.info("erro do catch" + mistake)
				        	   }
				           
//------------------------------------------------------------------------------------------------------------------------------------------------------
				        
				        }
					}else if (setValorSLA == "225" ){
						 console.log("entrou 25 DIAS ")

							log.info("Entrou IF 25 DIAS: " + setValorSLA)

				        // Recuperando a data informada no campo do formulário
				        if (prazoFormulario != undefined && prazoFormulario != '') {

							log.info("Entrou IF 1 After Task Save Não vazio: " + setValorSLA)
				            var numeroDaSolicitacao = getValue('WKNumProces');
				            var threadDaSolicitacao = 0; // Normalmente 0, quando não for atividade paralela
				            var responsavelPelaTarefa = colleagueId;
				             
				            /* Nesse caso o formato da data salva pelo formulário no exemplo é DD/MM/AAAA, mas isso pode variar de acordo com a formatação utilizada, 
				               mudando assim as posições das informações dentro do array */
				             
				            /* Extrai os dados da data do formulário para um array, para posteriormente transformar em data do Javascript */
				            var arrayPrazoConclusao = prazoFormulario.split("/");
				            var dia = arrayPrazoConclusao[0]; // Posição 0 do array é o dia
				            var mes = arrayPrazoConclusao[1] - 1; // Posição 1 do array é o mês (Subtraímos 1 porque na data do Javascript o mês vai de 0 a 11)
				            var ano = arrayPrazoConclusao[2]; // Posição 2 do array é o ano
				          
				            var horaDoPrazo = (15*60*60) - 1; /* A hora é em milisegundos, e esse cálculo tem resultado de 23:59:59, ou seja, 
				            o prazo de conclusão vai ser até o último segundo do dia informado no formulário */
				           try{
				            // Cria a data no Javascript
				            var dataDoPrazo = new Date();
				            dataDoPrazo.setDate(dia);
				            dataDoPrazo.setMonth(mes);
				            dataDoPrazo.setFullYear(ano);
				            
				            //Calcula o prazo
				            var obj = hAPI.calculateDeadLineHours(dataDoPrazo, 50000, 225, "Central de Cadastro - Cli/For");
				            var dt = obj[0];
				            var segundos = obj[1];
				            log.info("data do prazo: "+dataDoPrazo)
				            log.info("numeroDaSolicitacao: "+numeroDaSolicitacao)
				            log.info("threadDaSolicitacao: "+threadDaSolicitacao)
				            log.info("responsavelPelaTarefa: "+responsavelPelaTarefa)
				            log.info("dataDoPrazo: "+dt)
				            log.info("horaDoPrazo: "+segundos)
				             
				            
				            
				            // Altera o prazo de conclusão
				            hAPI.setDueDate(numeroDaSolicitacao, threadDaSolicitacao, responsavelPelaTarefa, dt, segundos);
				           
				            log.info("--------after--------- "+dataDoPrazo)
				            log.info("data do prazo: "+dataDoPrazo)
				            log.info("numeroDaSolicitacao: "+numeroDaSolicitacao)
				            log.info("threadDaSolicitacao: "+threadDaSolicitacao)
				            log.info("responsavelPelaTarefa: "+responsavelPelaTarefa)
				            log.info("dataDoPrazo: "+dt)
				            log.info("horaDoPrazo: "+segundos)
				            log.info("Try Executado with successo") 
				            console.log("dataDoPrazo 25 DIAS "+dataDoPrazo)
				           }catch (mistake){
				        	   log.info("erro do catch" + mistake)
				        	   }
				           
//------------------------------------------------------------------------------------------------------------------------------------------------------
				        
				        }
					}else if (setValorSLA == "270" ){
						 console.log("entrou 30 DIAS ")

							log.info("Entrou IF 30 DIAS: " + setValorSLA)

				        // Recuperando a data informada no campo do formulário
				        if (prazoFormulario != undefined && prazoFormulario != '') {

							log.info("Entrou IF 1 After Task Save Não vazio: " + setValorSLA)
				            var numeroDaSolicitacao = getValue('WKNumProces');
				            var threadDaSolicitacao = 0; // Normalmente 0, quando não for atividade paralela
				            var responsavelPelaTarefa = colleagueId;
				             
				            /* Nesse caso o formato da data salva pelo formulário no exemplo é DD/MM/AAAA, mas isso pode variar de acordo com a formatação utilizada, 
				               mudando assim as posições das informações dentro do array */
				             
				            /* Extrai os dados da data do formulário para um array, para posteriormente transformar em data do Javascript */
				            var arrayPrazoConclusao = prazoFormulario.split("/");
				            var dia = arrayPrazoConclusao[0]; // Posição 0 do array é o dia
				            var mes = arrayPrazoConclusao[1] - 1; // Posição 1 do array é o mês (Subtraímos 1 porque na data do Javascript o mês vai de 0 a 11)
				            var ano = arrayPrazoConclusao[2]; // Posição 2 do array é o ano
				          
				            var horaDoPrazo = (15*60*60) - 1; /* A hora é em milisegundos, e esse cálculo tem resultado de 23:59:59, ou seja, 
				            o prazo de conclusão vai ser até o último segundo do dia informado no formulário */
				           try{
				            // Cria a data no Javascript
				            var dataDoPrazo = new Date();
				            dataDoPrazo.setDate(dia);
				            dataDoPrazo.setMonth(mes);
				            dataDoPrazo.setFullYear(ano);
				            
				            //Calcula o prazo
				            var obj = hAPI.calculateDeadLineHours(dataDoPrazo, 50000, 270, "Central de Cadastro - Cli/For");
				            var dt = obj[0];
				            var segundos = obj[1];
				            log.info("data do prazo: "+dataDoPrazo)
				            log.info("numeroDaSolicitacao: "+numeroDaSolicitacao)
				            log.info("threadDaSolicitacao: "+threadDaSolicitacao)
				            log.info("responsavelPelaTarefa: "+responsavelPelaTarefa)
				            log.info("dataDoPrazo: "+dt)
				            log.info("horaDoPrazo: "+segundos)
				             
				            
				            
				            // Altera o prazo de conclusão
				            hAPI.setDueDate(numeroDaSolicitacao, threadDaSolicitacao, responsavelPelaTarefa, dt, segundos);
				           
				            log.info("--------after--------- "+dataDoPrazo)
				            log.info("data do prazo: "+dataDoPrazo)
				            log.info("numeroDaSolicitacao: "+numeroDaSolicitacao)
				            log.info("threadDaSolicitacao: "+threadDaSolicitacao)
				            log.info("responsavelPelaTarefa: "+responsavelPelaTarefa)
				            log.info("dataDoPrazo: "+dt)
				            log.info("horaDoPrazo: "+segundos)
				            log.info("Try Executado with successo") 
				            console.log("dataDoPrazo 30 DIAS "+dataDoPrazo)
				           }catch (mistake){
				        	   log.info("erro do catch" + mistake)
				        	   }
				           
//------------------------------------------------------------------------------------------------------------------------------------------------------
				        
				     }
			}else if (setValorSLA == "PAUSADO" ){
				 console.log("entrou PAUSADO ")

					log.info("Entrou IF PAUSADO: " + setValorSLA)

		        // Recuperando a data informada no campo do formulário
		        if (prazoFormulario != undefined && prazoFormulario != '') {

					log.info("Entrou IF 1 After Task Save Não vazio: " + setValorSLA)
		            var numeroDaSolicitacao = getValue('WKNumProces');
		            var threadDaSolicitacao = 0; // Normalmente 0, quando não for atividade paralela
		            var responsavelPelaTarefa = colleagueId;
		             
		            /* Nesse caso o formato da data salva pelo formulário no exemplo é DD/MM/AAAA, mas isso pode variar de acordo com a formatação utilizada, 
		               mudando assim as posições das informações dentro do array */
		             
		            /* Extrai os dados da data do formulário para um array, para posteriormente transformar em data do Javascript */
		            var arrayPrazoConclusao = prazoFormulario.split("/");
		            var dia = arrayPrazoConclusao[0]; // Posição 0 do array é o dia
		            var mes = arrayPrazoConclusao[1] - 1; // Posição 1 do array é o mês (Subtraímos 1 porque na data do Javascript o mês vai de 0 a 11)
		            var ano = arrayPrazoConclusao[2]; // Posição 2 do array é o ano
		          
		            var horaDoPrazo = (15*60*60) - 1; /* A hora é em milisegundos, e esse cálculo tem resultado de 23:59:59, ou seja, 
		            o prazo de conclusão vai ser até o último segundo do dia informado no formulário */
		           try{
		            // Cria a data no Javascript
		            var dataDoPrazo = new Date();
		            dataDoPrazo.setDate(dia);
		            dataDoPrazo.setMonth(mes);
		            dataDoPrazo.setFullYear(ano);
		            
		            //Calcula o prazo
		            var obj = hAPI.calculateDeadLineHours(dataDoPrazo, 0, 0, "Central de Cadastro - Cli/For");
		            var dt = obj[0];
		            var segundos = obj[1];
		            log.info("data do prazo: "+dataDoPrazo)
		            log.info("numeroDaSolicitacao: "+numeroDaSolicitacao)
		            log.info("threadDaSolicitacao: "+threadDaSolicitacao)
		            log.info("responsavelPelaTarefa: "+responsavelPelaTarefa)
		            log.info("dataDoPrazo: "+dt)
		            log.info("horaDoPrazo: "+segundos)
		             
		            
		            
		            // Altera o prazo de conclusão
		            hAPI.setDueDate(numeroDaSolicitacao, threadDaSolicitacao, responsavelPelaTarefa, 0, 0);
		           
		            log.info("--------after--------- "+dataDoPrazo)
		            log.info("data do prazo: "+dataDoPrazo)
		            log.info("numeroDaSolicitacao: "+numeroDaSolicitacao)
		            log.info("threadDaSolicitacao: "+threadDaSolicitacao)
		            log.info("responsavelPelaTarefa: "+responsavelPelaTarefa)
		            log.info("dataDoPrazo: "+dt)
		            log.info("horaDoPrazo: "+segundos)
		            log.info("Try Executado with successo") 
		            console.log("dataDoPrazo PAUSADO "+dataDoPrazo)
		           }catch (mistake){
		        	   log.info("erro do catch" + mistake)
		        	   }
		           
//------------------------------------------------------------------------------------------------------------------------------------------------------
		        
		 
		        }
		
		}

    }
}
