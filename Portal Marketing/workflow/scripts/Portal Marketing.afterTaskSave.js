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
    if (atividade == 9 && setValorSLA != "0") {
    	
    	log.info("valor sla" + setValorSLA)
    				
    	
    	
    								log.info("Novo prazo" + setValorSLA)
    	
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
						            var obj = hAPI.calculateDeadLineHours(dataDoPrazo, 50000, setValorSLA , "Central de Cadastro - Cli/For");
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
						            console.log("dataDoPrazo"+dataDoPrazo)
						           }catch (mistake){
						        	   log.info("erro do catch" + mistake)
					        	   }

    }
 }
}
