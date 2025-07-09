function displayFields(form,customHTML){
	
	
	
    form.setShowDisabledFields(true); // desabilita os set enable dos campos 
	form.setHidePrintLink(true); // // desabilita o botão de imprimir 
	
	
	var matrUser = getValue("WKUser"); //esta pegando a matricula do ususario
	
	//variavel que recebe o codigo referente ao estado atual do processo.
	var Now_State = parseInt(getValue("WKNumState"));
	form.setValue("NUM_ATIVIDADE", Now_State)
	
    switch(Now_State){
        case 0:
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
		  		
		  		var dia = d + "/" + mes + "/" + a;
		  		
		  		var h = date.getHours();
		  		var m = date.getMinutes();
		  		
		  		if (h < 10) {
					h = "0" + h;
				}
			
				if (m < 10) {
					m = "0" + m;
				}
				
				
				var hor = h + ":" + m;
				var dataFull = dia + " " + hor;
		  	
		          form.setValue('DATAABERTURA', dataFull);
		          log.info(dataFull)
		     
          
            // Exemplo de  Função que retorna os dados consultados do dataset "colleague"
            var colaborador = consult_dataset();
            // Exemplo de função que retorna os dados da API do fluig
            var api = consult_API();
            
            
            var nome = api.fullName
            form.setValue("NOMESOLICITANTE",api.fullName); // Método que carrega no campo input o objeto "nome" carregado pela API do Fluig
            consultaSecaoUsuarios(nome,form)
			form.setValue("EMAILSOLICITANTE", colaborador.getValue(0, "mail")); //  método que Carrega no input o email atráve pelo objeto do dataset "Coleague"
			form.setValue("RAMALSOLICITANTE", colaborador.getValue(0, "extensionNr")); // método que Carrega no input o ramal atráve pelo objeto do dataset "Coleague"
		    form.setValue("departamento", colaborador.getValue(0, "currentProject")); //método que Carrega no input o departamento atráve pelo objeto do dataset "Coleague"
		    

            // método que desabilita a edição dos seguintes campos do formulário
			form.setVisibleById("DADOS_SUPORTE", false);
			form.setVisibleById("VALIDAR_SOLUÇÃO_MKT", false);
			form.setVisibleById("FEEDBACK_SOLCIITACAO", false);
			form.setVisibleById("REVISAO_MATERIAL", false);
			form.setVisibleById("FECHAMENTO_SOLCITACAO", false);
		
			
			
			form.setEnabled("NOMESOLICITANTE", false); // método que desabilita o input nome 
            form.setEnabled("EMAILSOLICITANTE", false); // método que desabilita o input email
            form.setEnabled("SUBCATEGORIA", false); 
            ramal = colaborador.getValue(0, "extensionNr")
            if (ramal != ""){
            	form.setEnabled("RAMALSOLICITANTE", true);
             }
            
            break;

        case 9:
        	
          
        	//variavel que recebe o objeto da função do dataset
        	
        	var VALIDACAO_MKT = form.getValue("VALIDACAO_MKT");
        	var chapa = form.getValue("CHAPATECNICO");
            log.info(" teste da chapa " + chapa)
        	var responsavel = consult_dataset_tecnico (chapa);
        
        	form.setValue("NOMETECNICO", responsavel.getValue(0, "colleagueName")); // Método que carrega no input o nome do usuario suporte
        	form.setValue("EMAILTECNICO", responsavel.getValue(0, "mail")); // método que Carrega no input o email do usuario suporte 
        	form.setValue("RAMALTECNICO", responsavel.getValue(0, "extensionNR")); // método que carrega no input o ramal email do usuario suporte  

        	var radio = form.getValue("AVALIACAO")
        	
     
	            // método que desabilita a edição dos seguintes campos do formulário
            	
            	
            	form.setVisibleById("DADOS_SUPORTE", true);
				form.setVisibleById("VALIDAR_SOLUÇÃO_MKT", false);
				form.setVisibleById("FEEDBACK_SOLCIITACAO", false);
				form.setVisibleById("REVISAO_MATERIAL", false);
				form.setVisibleById("FECHAMENTO_SOLCITACAO", false);
	            	
	            form.setEnabled("NOMESOLICITANTE", false);
	            form.setEnabled("EMAILSOLICITANTE", false); 
		        form.setEnabled("RAMALSOLICITANTE", false);
		        form.setEnabled("SUB_CLASS_SERVICO", false);
		        form.setEnabled("TIPOSOLICITACAO",false);
			    form.setEnabled("DESCRICAOSOLICITACAO", false);
		        form.setEnabled("NOMETECNICO", false); 
		        form.setEnabled("EMAILTECNICO", false); 
	            form.setEnabled("RAMALTECNICO", false); 
	          	
	          	
	          
	            		
	            // método que oculta elementos do formulário 
	            
	            form.setVisibleById("CHAPATECNICO", false); 
	            form.setVisibleById("LABELSLA", true); 
	            form.setVisibleById("papel",false);
	            form.setVisibleById("SLA",false);
	            form.setVisibleById("SLAEXTENSO", true);
	            form.setVisibleById("SUBCATEGORIA", true);
	            form.setVisibleById("DATAREABERTURA", true);
	            form.setVisibleById("SLAGESTOR", true);
	            form.setVisibleById("_SLAGESTOR", true);
	            form.setVisibleById("LABELTRANSFERECHAMADO", false); 
	        	form.setVisibleById("TRANSFERECHAMADO", false);
	        	form.setVisibleById("_TRANSFERECHAMADO", false);
	        
	           
			break;
            
        	case 33:

		        // método que desabilita a edição dos seguintes campos do formulário
		    	
		    	
		    	form.setVisibleById("DADOS_SUPORTE", true);
				form.setVisibleById("VALIDAR_SOLUÇÃO_MKT", true);
				form.setVisibleById("FEEDBACK_SOLCIITACAO", false);
				form.setVisibleById("REVISAO_MATERIAL", false);
				form.setVisibleById("REVISAO_MATERIAL", false);
				form.setVisibleById("FECHAMENTO_SOLCITACAO", false);
				
				form.setEnabled("NOMESOLICITANTE", false);
	            form.setEnabled("EMAILSOLICITANTE", false); 
		        form.setEnabled("RAMALSOLICITANTE", false);
		        form.setEnabled("SUB_CLASS_SERVICO", false);
		        form.setEnabled("TIPOSOLICITACAO",false);
			    form.setEnabled("DESCRICAOSOLICITACAO", false);
			    form.setEnabled("RESOLUCAO", false); 
		        form.setEnabled("NOMETECNICO", false); 
		        form.setEnabled("EMAILTECNICO", false); 
	            form.setEnabled("RAMALTECNICO", false); 
	            
	          	
		        		
		        // método que oculta elementos do formulário 
		        
		        form.setVisibleById("LABELSLA", true); 
		        form.setVisibleById("SLAEXTENSO", true);
		        form.setVisibleById("SUBCATEGORIA", true);
		        form.setVisibleById("DATAREABERTURA", true);
		        form.setVisibleById("SLAGESTOR", false);
		        form.setVisibleById("_SLAGESTOR", false);
		        form.setVisibleById("LABELTRANSFERECHAMADO", false); 
		    	form.setVisibleById("TRANSFERECHAMADO", false);
		    	form.setVisibleById("_TRANSFERECHAMADO", false);
		    	
		     
				
		       
			break;
			
        	case 57:

		        // método que desabilita a edição dos seguintes campos do formulário
		    	
		    	
        		log.info("teste entrou resolvido")
            	log.info( "radio"+radio )
	         
	            // método que desabilita a edição dos seguintes campos do formulário
            	
            	
            	form.setVisibleById("DADOS_SUPORTE", true);
				form.setVisibleById("VALIDAR_SOLUÇÃO_MKT", true);
				form.setVisibleById("FEEDBACK_SOLCIITACAO", false);
				form.setVisibleById("REVISAO_MATERIAL", false);
				form.setVisibleById("FECHAMENTO_SOLCITACAO", false);
	            	
	            form.setEnabled("NOMESOLICITANTE", false);
	            form.setEnabled("EMAILSOLICITANTE", false); 
		        form.setEnabled("RAMALSOLICITANTE", false);
		        form.setEnabled("SUB_CLASS_SERVICO", false);
		        form.setEnabled("TIPOSOLICITACAO",false);
			    form.setEnabled("DESCRICAOSOLICITACAO", false);
		        form.setEnabled("NOMETECNICO", false); 
		        form.setEnabled("EMAILTECNICO", false); 
	            form.setEnabled("RAMALTECNICO", false);
	            form.setEnabled("VALIDACAO_MKT", false); 
	            form.setEnabled("COMENTARIO_VALIDACAO_MKT", false);
	            
	          	
	          	
	          
	            		
	            // método que oculta elementos do formulário 
	            
	            form.setVisibleById("CHAPATECNICO", false); 
	            form.setVisibleById("LABELSLA", true); 
	            form.setVisibleById("papel",false);
	            form.setVisibleById("SLA",false);
	            form.setVisibleById("SLAEXTENSO", true);
	            form.setVisibleById("SUBCATEGORIA", true);
	            form.setVisibleById("DATAREABERTURA", true);
	            form.setVisibleById("SLAGESTOR", true);
	            form.setVisibleById("_SLAGESTOR", true);
	            form.setVisibleById("LABELTRANSFERECHAMADO", false); 
	        	form.setVisibleById("TRANSFERECHAMADO", false);
	        	form.setVisibleById("_TRANSFERECHAMADO", false);
	        	
		     
				
		       
			break;
    
        	case 44:
        	
	        	var DATA_REVISAO = form.getValue("DATA_REVISAO")

	        	if(DATA_REVISAO == ""){ 

			    	log.info("DATA_REABERTURA vazio" + DATA_REVISAO)
			    	
	            	
	            	form.setVisibleById("DADOS_SUPORTE", true);
					form.setVisibleById("VALIDAR_SOLUÇÃO_MKT", true);
					form.setVisibleById("FEEDBACK_SOLCIITACAO", true);
					form.setVisibleById("REVISAO_MATERIAL", false);
					form.setVisibleById("FECHAMENTO_SOLCITACAO", false);
	            	
					form.setEnabled("NOMESOLICITANTE", false);
		            form.setEnabled("EMAILSOLICITANTE", false); 
			        form.setEnabled("RAMALSOLICITANTE", false);
			        form.setEnabled("SUB_CLASS_SERVICO", false);
			        form.setEnabled("TIPOSOLICITACAO",false);
				    form.setEnabled("DESCRICAOSOLICITACAO", false);
				    form.setEnabled("RESOLUCAO", false); 
			        form.setEnabled("NOMETECNICO", false); 
			        form.setEnabled("EMAILTECNICO", false); 
		            form.setEnabled("RAMALTECNICO", false); 
		            form.setEnabled("VALIDACAO_MKT", false); 
		            form.setEnabled("COMENTARIO_VALIDACAO_MKT", false);
		            
		          	
		            
		            		
		            // método que oculta elementos do formulário 
		            
		            form.setVisibleById("CHAPATECNICO", false); 
		            form.setVisibleById("LABELSLA", true); 
		            form.setVisibleById("papel",false);
		            form.setVisibleById("SLA",false);
		            form.setVisibleById("SLAEXTENSO", true);
		            form.setVisibleById("SUBCATEGORIA", true);
		            form.setVisibleById("DATAREABERTURA", true);
		            form.setVisibleById("SLAGESTOR", false);
		            form.setVisibleById("_SLAGESTOR", false);
		            form.setVisibleById("LABELTRANSFERECHAMADO", false); 
		        	form.setVisibleById("TRANSFERECHAMADO", false);
		        	form.setVisibleById("_TRANSFERECHAMADO", false);
		        	
		         
		        break;	
	        	}
	        	else{
	        		log.info("DATA_REABERTURA else" + DATA_REVISAO)
			    	
	        		form.setVisibleById("DADOS_SUPORTE", true);
					form.setVisibleById("VALIDAR_SOLUÇÃO_MKT", true);
					form.setVisibleById("FEEDBACK_SOLCIITACAO", true);
					form.setVisibleById("REVISAO_MATERIAL", true);
					form.setVisibleById("FECHAMENTO_SOLCITACAO", false);
	            	
					form.setEnabled("NOMESOLICITANTE", false);
		            form.setEnabled("EMAILSOLICITANTE", false); 
			        form.setEnabled("RAMALSOLICITANTE", false);
			        form.setEnabled("SUB_CLASS_SERVICO", false);
			        form.setEnabled("TIPOSOLICITACAO",false);
				    form.setEnabled("DESCRICAOSOLICITACAO", false);
				    form.setEnabled("RESOLUCAO", false); 
			        form.setEnabled("NOMETECNICO", false); 
			        form.setEnabled("EMAILTECNICO", false); 
		            form.setEnabled("RAMALTECNICO", false); 
		            form.setEnabled("VALIDACAO_MKT", false); 
		            form.setEnabled("COMENTARIO_VALIDACAO_MKT", false);
		            form.setEnabled("COMENT_REVISAO_MATERIAL", false);
		          	
		          
		            		
		            // método que oculta elementos do formulário 
		            
		            form.setVisibleById("CHAPATECNICO", false); 
		            form.setVisibleById("LABELSLA", true); 
		            form.setVisibleById("papel",false);
		            form.setVisibleById("SLA",false);
		            form.setVisibleById("SLAEXTENSO", true);
		            form.setVisibleById("SUBCATEGORIA", true);
		            form.setVisibleById("DATAREABERTURA", true);
		            form.setVisibleById("SLAGESTOR", false);
		            form.setVisibleById("_SLAGESTOR", false);
		            form.setVisibleById("LABELTRANSFERECHAMADO", false); 
		        	form.setVisibleById("TRANSFERECHAMADO", false);
		        	form.setVisibleById("_TRANSFERECHAMADO", false);
		        	
	        		
		        	break;	
	        	}
	        
            case 49:
	
	            	form.setVisibleById("DADOS_SUPORTE", true);
					form.setVisibleById("VALIDAR_SOLUÇÃO_MKT", true);
					form.setVisibleById("FEEDBACK_SOLCIITACAO", true);
					form.setVisibleById("REVISAO_MATERIAL", true);
					form.setVisibleById("FECHAMENTO_SOLCITACAO", false);
					
					
					form.setEnabled("NOMESOLICITANTE", false);
		            form.setEnabled("EMAILSOLICITANTE", false); 
			        form.setEnabled("RAMALSOLICITANTE", false);
			        form.setEnabled("SUB_CLASS_SERVICO", false);
			        form.setEnabled("TIPOSOLICITACAO",false);
				    form.setEnabled("DESCRICAOSOLICITACAO", false);
				    form.setEnabled("RESOLUCAO", false); 
			        form.setEnabled("NOMETECNICO", false); 
			        form.setEnabled("EMAILTECNICO", false); 
		            form.setEnabled("RAMALTECNICO", false); 
		            form.setEnabled("VALIDACAO_MKT", false); 
		            form.setEnabled("COMENTARIO_VALIDACAO_MKT", false);
		            form.setEnabled("AVALIACAO_USUARIO", false); 
		            form.setEnabled("COMENTARIO_AVALIACAO_USER", false);
		          	
		          
		            		
		            // método que oculta elementos do formulário 
		            form.setVisibleById("divradio", false); 
		            form.setVisibleById("CHAPATECNICO", false); 
		            form.setVisibleById("LABELSLA", true); 
		            form.setVisibleById("papel",false);
		            form.setVisibleById("SLA",false);
		            form.setVisibleById("SLAEXTENSO", true);
		            form.setVisibleById("SUBCATEGORIA", true);
		            form.setVisibleById("DATAREABERTURA", true);
		            form.setVisibleById("SLAGESTOR", false);
		            form.setVisibleById("_SLAGESTOR", false);
		            form.setVisibleById("LABELTRANSFERECHAMADO", false); 
		        	form.setVisibleById("TRANSFERECHAMADO", false);
		        	form.setVisibleById("_TRANSFERECHAMADO", false);
		        	
		         
					
		           
				break;
            
			
				case 40:

					var FINALIZACAO_REVISAO = form.getValue("FINALIZACAO_REVISAO")

		        	if(FINALIZACAO_REVISAO == ""){ 


			    	form.setVisibleById("DADOS_SUPORTE", true);
					form.setVisibleById("VALIDAR_SOLUÇÃO_MKT", true);
					form.setVisibleById("FEEDBACK_SOLCIITACAO", true);
					form.setVisibleById("REVISAO_MATERIAL", false);
					form.setVisibleById("FECHAMENTO_SOLCITACAO", true);
			    	
					form.setEnabled("NOMESOLICITANTE", false);
		            form.setEnabled("EMAILSOLICITANTE", false); 
			        form.setEnabled("RAMALSOLICITANTE", false);
			        form.setEnabled("SUB_CLASS_SERVICO", false);
			        form.setEnabled("TIPOSOLICITACAO",false);
				    form.setEnabled("DESCRICAOSOLICITACAO", false);
				    form.setEnabled("RESOLUCAO", false); 
			        form.setEnabled("NOMETECNICO", false); 
			        form.setEnabled("EMAILTECNICO", false); 
		            form.setEnabled("RAMALTECNICO", false); 
		            form.setEnabled("VALIDACAO_MKT", false); 
		            form.setEnabled("COMENTARIO_VALIDACAO_MKT", false);
		            form.setEnabled("AVALIACAO_USUARIO", false); 
		            form.setEnabled("COMENTARIO_AVALIACAO_USER", false);
		            form.setEnabled("COMENT_REVISAO_MATERIAL", false);
			      
			        		
			        // método que oculta elementos do formulário 
			        form.setVisibleById("divradio", false); 
			        form.setVisibleById("CHAPATECNICO", false); 
			        form.setVisibleById("LABELSLA", true); 
			        form.setVisibleById("papel",false);
			        form.setVisibleById("SLA",false);
			        form.setVisibleById("SLAEXTENSO", true);
			        form.setVisibleById("SUBCATEGORIA", true);
			        form.setVisibleById("DATAREABERTURA", true);
			        form.setVisibleById("SLAGESTOR", false);
			        form.setVisibleById("_SLAGESTOR", false);
			        form.setVisibleById("LABELTRANSFERECHAMADO", false); 
			    	form.setVisibleById("TRANSFERECHAMADO", false);
			    	form.setVisibleById("_TRANSFERECHAMADO", false);
			  
		        	}else{
		
			    	form.setVisibleById("DADOS_SUPORTE", true);
					form.setVisibleById("VALIDAR_SOLUÇÃO_MKT", true);
					form.setVisibleById("FEEDBACK_SOLCIITACAO", true);
					form.setVisibleById("REVISAO_MATERIAL", true);
					form.setVisibleById("FECHAMENTO_SOLCITACAO", true);
			    	
					form.setEnabled("NOMESOLICITANTE", false);
		            form.setEnabled("EMAILSOLICITANTE", false); 
			        form.setEnabled("RAMALSOLICITANTE", false);
			        form.setEnabled("SUB_CLASS_SERVICO", false);
			        form.setEnabled("TIPOSOLICITACAO",false);
				    form.setEnabled("DESCRICAOSOLICITACAO", false);
				    form.setEnabled("RESOLUCAO", false); 
			        form.setEnabled("NOMETECNICO", false); 
			        form.setEnabled("EMAILTECNICO", false); 
		            form.setEnabled("RAMALTECNICO", false); 
		            form.setEnabled("VALIDACAO_MKT", false); 
		            form.setEnabled("COMENTARIO_VALIDACAO_MKT", false);
		            form.setEnabled("AVALIACAO_USUARIO", false); 
		            form.setEnabled("COMENTARIO_AVALIACAO_USER", false);
		            form.setEnabled("COMENT_REVISAO_MATERIAL", false);
			      
			        		
			        // método que oculta elementos do formulário 
			        form.setVisibleById("divradio", false); 
			        form.setVisibleById("CHAPATECNICO", false); 
			        form.setVisibleById("LABELSLA", true); 
			        form.setVisibleById("papel",false);
			        form.setVisibleById("SLA",false);
			        form.setVisibleById("SLAEXTENSO", true);
			        form.setVisibleById("SUBCATEGORIA", true);
			        form.setVisibleById("DATAREABERTURA", true);
			        form.setVisibleById("SLAGESTOR", false);
			        form.setVisibleById("_SLAGESTOR", false);
			        form.setVisibleById("LABELTRANSFERECHAMADO", false); 
			    	form.setVisibleById("TRANSFERECHAMADO", false);
			    	form.setVisibleById("_TRANSFERECHAMADO", false);
			  }
			     
					
			       
				break;
}
        	

    log.info("###################################################################")
	var Responsalvel_SLA_Marketing = consultaUsuariosPapel("Responsalvel_SLA_Marketing")
    log.info("alteraSLA: "+ Responsalvel_SLA_Marketing)
    
    if (Responsalvel_SLA_Marketing){
    	form.setVisibleById("LABELSLAGESTOR", true)
    	form.setVisibleById("SLAGESTOR", true); 
    	form.setVisibleById("_SLAGESTOR", true); 
    	form.setVisibleById("LABELTRANSFERECHAMADO", true); 
    	form.setVisibleById("TRANSFERECHAMADO", true);
    	form.setVisibleById("_TRANSFERECHAMADO", true);
    	//
      	form.setEnabled("SLAGESTOR", true);
    	form.setEnabled("IMPACTO", true);
    	form.setEnabled("TRANSFERECHAMADO", true);

    } else {
    	form.setVisibleById("LABELSLAGESTOR", false)
    	form.setVisibleById("SLAGESTOR", false); 
    	form.setVisibleById("_SLAGESTOR", false); 
    	form.setVisibleById("LABELTRANSFERECHAMADO", false); 
    	form.setVisibleById("TRANSFERECHAMADO", false);
    	form.setVisibleById("_TRANSFERECHAMADO", false);
    	//
      	form.setEnabled("SLAGESTOR", false); 
      	form.setEnabled("IMPACTO", false);
    	form.setEnabled("TRANSFERECHAMADO", false);
    }

	
	customHTML.append("<script>function getWKNumState(){ return " + getValue('WKNumState') + "}</script>");
}
function consultaUsuariosPapel(papel){
	
	try{
	    var c1 = DatasetFactory.createConstraint("workflowColleagueRolePK.roleId", papel, papel, ConstraintType.MUST);
	    var c2 = DatasetFactory.createConstraint("workflowColleagueRolePK.colleagueId", getValue("WKUser"), getValue("WKUser"), ConstraintType.MUST);
		var constraints = new Array(c1, c2);
		var dataset = DatasetFactory.getDataset("workflowColleagueRole", null, constraints, null);
		log.info( "c1"+c1 )
		log.info( "conts"+constraints )
		log.info( "getValue('WKUser'): "+getValue("WKUser") )
		log.info( "#############################################" )
		log.info( "dataset:" )
		log.info( dataset )
		log.info( "#############################################" )
		
    	var row = dataset.values[0]
    	var chapaDoPapel = row[1]

		log.info( "chapaDoPapel: "+chapaDoPapel )
    	if (getValue("WKUser") == chapaDoPapel){
    		return true
        } else {
        	return false
        }
	    	
		
	}catch (e){
		console.log( e )
	}
	
} 

function consultaSecaoUsuarios(nome,form){
	
	log.info("NOMESOLICITANTE" + nome)
	
	try{
	    var c1 = DatasetFactory.createConstraint("NOMESOLICITANTE", nome, nome, ConstraintType.MUST);
		var constraints = new Array(c1);
		var dataset = DatasetFactory.getDataset("ds_secao_usuario", null, constraints, null);
		log.info( ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,")
		log.info( "c1"+c1 )
		log.info( "conts"+constraints )
		log.info( "dataset:" )
		log.info( dataset )
    	var row = dataset.values[0]
    	var secao = row[2]
		log.info( "secao:" +secao )
		
		form.setValue("CCUSTOSOLICITANTE", secao)
	}catch (e){
		console.log( e )

	
				} 	
}
