//função que utiliza o seguinte método para capturar os dados o campo zoom e carrega-los nos respectivos campos.
//função setSelectedZoomItem esta contando quantas atividades tem por tecnico pela consulta 115 ou 116 no RM 
function setSelectedZoomItem(selectedItem) { 

	if (selectedItem.inputId == "TRANSFERECHAMADO"){
		console.log("entrou chapa tecnico")
		document.getElementById("CHAPATECNICO").value = selectedItem["USER_CODE"]
	
	}else{
		console.log('entrou na funck')
		console.log(selectedItem)
		
		var c1 = DatasetFactory.createConstraint("nmIncidente", selectedItem["nmIncidente"], selectedItem["nmIncidente"], ConstraintType.MUST);
		var constraints = new Array(c1);
		//mudar o data set 
		//teste:ds_tipo_solicitacoes
	    //produção:ds_tipo_solicitação
		try{
			var dataset = DatasetFactory.getDataset("ds_tipo_solicitação", null, constraints, null);
			 var row = dataset.values[0];
				console.log("row"+row)
			
			var description = row["nmIncidente"]; // variavel receber o valor do dataset (Campo Descriação do incidente)
			document.getElementById("DESCRICAOSOLICITACAO").value = description
			console.log("description"+description)
			
			var papel = row["papel_responsavel"]; // variavel receber o valor do dataset (Campo papel responsável)
			document.getElementById("PAPEL").value = papel
			console.log("papel"+papel)
			
			var sla = row["nrPrazo"]; // variavel receber o valor do dataset (Campo SLA)
			document.getElementById("SLA").value = sla
			console.log("SLA"+sla) 
			
		}catch(e){
		 console.log( e);
		}
	
		try{
	
	        //ORDENAÇÃO SERÁ PELA QUANTIDADE
	        var sortingFields = new Array("QUANTIDADE");
	        console.log(sortingFields+"sortingFields")
	        //CAMPOS QUE DEVEM SER RETORNADOS
	        var returnFields = new Array("QUANTIDADE", "CDMATRICULA")
	        console.log(returnFields+"sortingFields")
		    var c1 = DatasetFactory.createConstraint("sqlLimit", "100", "100", ConstraintType.MUST);
		    console.log(c1+"sortingFields")
	        var c2 = DatasetFactory.createConstraint("PAPELTECNICO", papel, papel, ConstraintType.MUST);
	        console.log(c2+"sortingFields")
	        var constraints = new Array(c1,c2);
	        console.log(constraints+"constraints")
	        
			var dataset1 = DatasetFactory.getDataset("ds_atividades_helpdesk", returnFields, constraints, sortingFields);
	        console.log(dataset1+"dataset1")
		    console.log("try 2: \n" + dataset1.values.length) 
		    
		    var quantResp = new Array([dataset1.values.length]+1)
		    var resp = new Array([dataset1.values.length]+1)
		    
		    
		    quantResp[dataset1.values.length+1] = 9999999
		    
		    for (var i=0;i<dataset1.values.length;i++){
		    	quantResp[i] = dataset1.values[i]["QUANTIDADE"]
		    	if (parseInt(quantResp[i]) < parseInt(quantResp[dataset1.values.length+1])){
		    		quantResp[dataset1.values.length+1] = quantResp[i]
		    		resp[dataset1.values.length+1] = dataset1.values[i]["CDMATRICULA"]
		    	}
		    }
		    
		    var chapafinal = resp[dataset1.values.length+1]
		    
		    console.log( "Responsável: " + chapafinal + "\n\n================================");
		    
		    // Parãmetro "Pool:Role" é uma string que o fluig utiliza para determinar o tipo de papel. 
		    
		    document.getElementById("CHAPATECNICO").value = chapafinal
		    
			return true
			
		}catch (e){
			console.log( e )
		}
		
		 if (dadodBotaoRadio == 'Resolvido'){
			 
			 dataReabertura()
			 
		 }
	
	}
	
	
}

function consultaUsuariosPapel(papel){
	//função confere quem e o responsavel pelo atendiemnto.
	try{
        var c1 = DatasetFactory.createConstraint("workflowColleagueRolePK.roleId", papel, papel, ConstraintType.MUST);
        console.log( "consultaUsuariosPapel papel: "+papel )
        console.log( "c1:"+c1 )
        var constraints = new Array(c1);
        console.log( "constraints:"+constraints )
    	var dataset = DatasetFactory.getDataset("workflowColleagueRole", null, constraints, null);
    	console.log( "consultaUsuariosPapel dataset: "+dataset )  
		return dataset
    }catch (e){
    	console.log( "consultaUsuariosPapel catch: "+e )
    }
}

function consultaTarefasUser(chapa, papel){
	//pega o valor do dataset e esta consultando as tarefas do user 
	console.log( "chamou a função " )
	try{
		console.log("Chapa consultada: " + chapa)
		console.log("Papel consultado: " + papel)
        var c1 = DatasetFactory.createConstraint("CHAPATECNICO", chapa, chapa, ConstraintType.MUST);
        var c2 = DatasetFactory.createConstraint("PAPEL", papel, papel, ConstraintType.MUST);
    	var constraints = new Array(c1, c2);
    	//mudar o data set 
		//teste:ds_tipo_solicitacoes
	    //produção:ds_tipo_solicitação
    	var dataset = DatasetFactory.getDataset("ds_tipo_solicitação", null, constraints, null);
    	
    	if (dataset.values[0][dataset.columns[0]] == ""){ //caso retorne uma linha em branco então conta com 0 ao invés de 1 resultado da consulta
    		return 0
    	} else {
    		return dataset.values.length
    	}
    }catch (e){
    	console.log( "teste"+e )
    }}


function consultaDataHora(){
	
	var atividade = document.getElementById("NUM_ATIVIDADE").value
	
	if (atividade == '5' ){  
	
	console.log("entrou!!!!!teste")
	var c1 = DatasetFactory.createConstraint("processTaskPK.processInstanceId", document.getElementById("IDCHAMADO").value, document.getElementById("IDCHAMADO").value, ConstraintType.MUST);
	console.log("entrou!!!!!teste")
	var idchamd=document.getElementById("IDCHAMADO").value
	var c2 = DatasetFactory.createConstraint("active", "true", "true", ConstraintType.MUST);
	var constraints = new Array(c1,c2);
	try{
		console.log("entrou try")
		var dataset = DatasetFactory.getDataset("processTask", null, constraints, null);
		 var row = dataset.values[0];  
			console.log(row)
		 
		var description = row["deadline"]; // variavel receber o data do ultimo processo  do dataset (Campo Descriação do incidente)   
		console.log(description)
		
		if( description != null){ 
		console.log( "description"+description )
		// início da função
		var dataH = new Date(description);
		console.log( "dataH"+dataH )
		
		var d = dataH.getDate();
		var m = dataH.getMonth() + 1;
		var a = dataH.getFullYear();
		
		if (m < 10) {
			m = "0" + m;
		}
		
		if (d < 10) {
			d = "0" + d;
		}
		
		var dia = d + "/" + m + "/" + a;

		var h = dataH.getHours();
		var m = dataH.getMinutes();
		
		if (h < 10) {
			h = "0" + h;
		}
	
		if (m < 10) {
			m = "0" + m;
		}
		
		var hor = h + ":" + m;
		
		var dataFull = dia + " " + hor;
		console.log("Data "+dataFull)
		
		var campoSLAExtenso
		try{
			campoSLAExtenso = document.getElementById("SLAEXTENSO")
		} catch (e){
			console.log("errou 22 "+dataFull)
		}
		campoSLAExtenso.value = dataFull;
		}
		//término da função
		
	}catch(e){
		console.log(e);
		console.log("errou:)))))) ")
	}
	
	}
}


function trocaOpcoes(){
	//função que troca as opçoes das categoria dos chamados
	console.log("Chamou a função");
	//pega os valres necessarios para validação 
	var valorCategoria = document.getElementById("CATEGORIA").value;
	var subCategoria = document.getElementById("SUBCATEGORIA");
	var numeroCategorias = document.getElementById("SUBCATEGORIA").length;
	
	console.log(numeroCategorias);
	
	
	if (valorCategoria == "ACESSO" ){
		
		for (var i = 0; i < numeroCategorias; i++) {
			console.log("removeu: ")+i;
			subCategoria.removeChild(subCategoria.firstElementChild)
			}
	//pega as options do selct  e nos prociximos ifs
		var acesso0 = new Option("","");
		var acesso1 = new Option("Alarme Monitoramento Matriz", "Alarme Monitoramento Matrix");
		var acesso2 = new Option("CFTV", "CFTV");
		var acesso3 = new Option("Fluig", "Fluig");
		var acesso4 = new Option("Criação de Usuários", "Criação de Usuários");
		var acesso5 = new Option("Navegador / Web", "Navegador / Web");
		var acesso6 = new Option("Permissão Acesso Pastas", "Permissão Acesso Pastas");
		var acesso7 = new Option("Remoto / Windows", "Remoto / Windows");
		var acesso8 = new Option("Remover / Desabilitar Acesso", "Remover / Desabilitar Acesso");
		var acesso9 = new Option("Senior ERP", "Senior ERP");
		var acesso10 = new Option("TOTVS-ERP", "TOTVS-ERP");
		var acesso11 = new Option("Troca Senha", "Troca Senha");
		var acesso12 = new Option("VPN / Rede", "VPN / Rede");
		
		
		
		console.log(valorCategoria);
		//seta o valor seguinda das opções 
		subCategoria.appendChild(acesso0);
		subCategoria.appendChild(acesso1);
		subCategoria.appendChild(acesso2);
		subCategoria.appendChild(acesso3);
		subCategoria.appendChild(acesso4);
		subCategoria.appendChild(acesso5);
		subCategoria.appendChild(acesso6);
		subCategoria.appendChild(acesso7);
		subCategoria.appendChild(acesso8);
		subCategoria.appendChild(acesso9);
		subCategoria.appendChild(acesso10);
		subCategoria.appendChild(acesso11);
		subCategoria.appendChild(acesso12);
		
		
	}else if (valorCategoria == "SOFTWARES"){
		
		for (var i = 0; i < numeroCategorias; i++) {
			console.log("removeu: ")+i;
			subCategoria.removeChild(subCategoria.firstElementChild)
		}

		
		var acesso0 = new Option("","");
		var acesso1 = new Option("Adobe Reader - Erro/Configuração", "Adobe Reader - Erro/Configuração");
		var acesso2 = new Option("Aplicativo Câmeras", "Aplicativo Câmeras");
		var acesso3 = new Option("Aplicativo Manutenção", "Aplicativo Manutenção");
		var acesso4 = new Option("Configuração VPN", "Configuração VPN");
		var acesso5 = new Option("Download de Programas", "Download de Programas");
		var acesso6 = new Option("LibreOffice", "LibreOffice");
		var acesso7 = new Option("Microsoft Office", "Microsoft Office");
		var acesso8 = new Option("Navegador - Erro - Browser", "Navegador - Erro - Browser");
		var acesso9 = new Option("Pesquisa Tradimaq", "Pesquisa Tradimaq");
		var acesso10 = new Option("Programas Instalação", "Programas Instalação");
		var acesso11 = new Option("Regenerador de Baterias ", "Regenerador de Baterias");
		var acesso12 = new Option("Site de Pesquisa - Absenteismo, etc.", "Site de Pesquisa - Absenteismo, etc.");
		var acesso13 = new Option("Skype", "Skype");
		var acesso14 = new Option("Wallpaper", "Wallpaper");
		var acesso15 = new Option("WebDealer - Acesso", "WebDealer - Acesso");
		var acesso16 = new Option("Windows Falha/Erro", "Windows Falha/Erro");
		var acesso17 = new Option("Yale PC Service Tools/Ifak/Etac", "Yale PC Service Tools/Ifak/Etac");
		
		
		
		
		console.log(valorCategoria);
		subCategoria.appendChild(acesso0);
		subCategoria.appendChild(acesso1);
		subCategoria.appendChild(acesso2);
		subCategoria.appendChild(acesso3);
		subCategoria.appendChild(acesso4);
		subCategoria.appendChild(acesso5);
		subCategoria.appendChild(acesso6);
		subCategoria.appendChild(acesso7);
		subCategoria.appendChild(acesso8);
		subCategoria.appendChild(acesso9);
		subCategoria.appendChild(acesso10);
		subCategoria.appendChild(acesso11);
		subCategoria.appendChild(acesso12);
		subCategoria.appendChild(acesso13);
		subCategoria.appendChild(acesso14);
		subCategoria.appendChild(acesso15);
		subCategoria.appendChild(acesso16);
		subCategoria.appendChild(acesso17);
		
		
	}else if (valorCategoria == "BACKUP"){
		
		for (var i = 0; i < numeroCategorias; i++) {
			console.log("removeu: ")+i;
			subCategoria.removeChild(subCategoria.firstElementChild)
			}
		
		var acesso0 = new Option("","");
		var acesso1 = new Option("Backup", "Backup");
		var acesso2 = new Option("Restore de Dados", "Restore de Dados");
		var acesso3 = new Option("Suporte / Parametrização", "Suporte / Parametrizção");
		
		
		console.log(valorCategoria.value);
		subCategoria.appendChild(acesso0);
		subCategoria.appendChild(acesso1);
		subCategoria.appendChild(acesso2);
		subCategoria.appendChild(acesso3);
		
		
	}else if (valorCategoria == "CFTV"){
		
		for (var i = 0; i < numeroCategorias; i++) {
			console.log("removeu: ")+i;
			subCategoria.removeChild(subCategoria.firstElementChild)
			}
		
		var acesso0 = new Option("","");
		var acesso1 = new Option("Erro de Câmera", "Erro de Cãmera");
		var acesso2 = new Option("Erro no DVR/NVR", "Erro no DVR/NVR");
		var acesso3 = new Option("Reparos / Configurações", "Reparos / Configurações");
		
		
		console.log(valorCategoria.value);
		subCategoria.appendChild(acesso0);
		subCategoria.appendChild(acesso1);
		subCategoria.appendChild(acesso2);
		subCategoria.appendChild(acesso3);
		
		
	}else if (valorCategoria == "EMAIL"){
		
		for (var i = 0; i < numeroCategorias; i++) {
			console.log("removeu: ")+i;
			subCategoria.removeChild(subCategoria.firstElementChild)
			}

		var acesso0 = new Option("","");
		var acesso1 = new Option("Armazenamento de e-mail", "Armazenamento de e-mail");
		var acesso2 = new Option("Configuração / Ajustes", "Configuração / Ajustes");
		var acesso3 = new Option("Erro e-mail", "Erro e-mail");
		var acesso4 = new Option("Instalar Aplicativo Thunderbird", "Instalar Aplicativo Thunderbird");
		var acesso5 = new Option("Mensagem de Férias / Redirecionamento", "Mensagem de Férias / Redirecionamento");
		
		
		console.log(valorCategoria.value);
		subCategoria.appendChild(acesso0);
		subCategoria.appendChild(acesso1);
		subCategoria.appendChild(acesso2);
		subCategoria.appendChild(acesso3);
		subCategoria.appendChild(acesso4);
		subCategoria.appendChild(acesso5);
		
	
	}else if (valorCategoria == "FLUIG"){
		
		for (var i = 0; i < numeroCategorias; i++) {
			console.log("removeu: ")+i;
			subCategoria.removeChild(subCategoria.firstElementChild)
			}	
		
		var acesso0 = new Option("","");
		var acesso1 = new Option("Desenvolvimento de Processos", "Desenvolvimento de Processos");
		var acesso2 = new Option("Manutenção de Processos", "Manutenção de Processos");
		var acesso3 = new Option("Suporte / Parametrização", "Suporte / Parametrização");
		
		
		
		console.log(valorCategoria.value);
		subCategoria.appendChild(acesso0);
		subCategoria.appendChild(acesso1);
		subCategoria.appendChild(acesso2);
		subCategoria.appendChild(acesso3);
		
		
	}else if (valorCategoria == "FORMATACAOPC"){
		
		for (var i = 0; i < numeroCategorias; i++) {
			console.log("removeu: ")+i;
			subCategoria.removeChild(subCategoria.firstElementChild)
			}
		

		var acesso0 = new Option("","");
		var acesso1 = new Option("Drivers", "Drivers");
		var acesso2 = new Option("Entrega Técnica", "Entrega Técnica");
		var acesso3 = new Option("Liberação de Espaço / Memória ", "Liberação de Espaço / Memória");
		var acesso4 = new Option("Manutenção Toten", "Manutenção Toten");
		var acesso5 = new Option("Manutenção Notebook", "Manutenção Notebook");
		
		
		console.log(valorCategoria.value);
		subCategoria.appendChild(acesso0);
		subCategoria.appendChild(acesso1);
		subCategoria.appendChild(acesso2);
		subCategoria.appendChild(acesso3);
		subCategoria.appendChild(acesso4);
		subCategoria.appendChild(acesso5);
		
		
	}else if (valorCategoria == "FORMATACAOTABLET"){
		
		for (var i = 0; i < numeroCategorias; i++) {
			console.log("removeu: ")+i;
			subCategoria.removeChild(subCategoria.firstElementChild)
			}
		
		var acesso0 = new Option("","");
		var acesso1 = new Option("Reparo Tablet", "Reparo Tablet")
		
		
		console.log(valorCategoria.value);
		subCategoria.appendChild(acesso0);
		subCategoria.appendChild(acesso1);
		
		
	}else if (valorCategoria == "IMPRESSAO"){
		
		for (var i = 0; i < numeroCategorias; i++) {
			console.log("removeu: ")+i;
			subCategoria.removeChild(subCategoria.firstElementChild)
			}

		var acesso0 = new Option("","");
		var acesso1 = new Option("Atolamento de Papel", "Atolamento de Papel");
		var acesso2 = new Option("Configuração - Erro", "Configuração - Erro");
		var acesso3 = new Option("Scaner", "Scaner");
		var acesso4 = new Option("Toner - Troca/Reparo", "Toner - Troca/Reparo");
		
		console.log(valorCategoria.value);
		subCategoria.appendChild(acesso0);
		subCategoria.appendChild(acesso1);
		subCategoria.appendChild(acesso2);
		subCategoria.appendChild(acesso3);
		subCategoria.appendChild(acesso4);
		
		
	}else if (valorCategoria == "INFRAESTRUTURA"){
		
		for (var i = 0; i < numeroCategorias; i++) {
			console.log("removeu: ")+i;
			subCategoria.removeChild(subCategoria.firstElementChild)
			}

		var acesso0 = new Option("","");
		var acesso1 = new Option("Acessórios de Telefone", "Acessórios de Telefone");
		var acesso2 = new Option("CFTV", "CFTV");
		var acesso3 = new Option("Infraestrutura", "Infraestrutura");
		var acesso4 = new Option("Nova Bateria Notebook", "Nova Bateria Notebook");
		var acesso5 = new Option("Novo Mouse", "Novo Mouse");
		var acesso6 = new Option("Novo Ramal / Telefone", "Novo Ramal / Telefone");
		var acesso7 = new Option("Novo Relógio de Ponto", "Novo Relógio de Ponto");
		var acesso8 = new Option("Novo Tablet", "Novo Tablet");
		var acesso9 = new Option("Novo Teclado", "Novo Teclado");
		var acesso10 = new Option("Novo Carregador", "Novo Carregador");
		var acesso11 = new Option("Novo Monitor", "Novo Monitor");
		var acesso12 = new Option("Novo Ponto de Rede / Voz", "Novo Ponto de Rede / Voz");
		var acesso13 = new Option("Upgrade - Partes e Peças", "Upgrade - Partes e Peças");
		
		
		
		
		
		console.log(valorCategoria.value);
		subCategoria.appendChild(acesso0);
		subCategoria.appendChild(acesso1);
		subCategoria.appendChild(acesso2);
		subCategoria.appendChild(acesso3);
		subCategoria.appendChild(acesso4);
		subCategoria.appendChild(acesso5);
		subCategoria.appendChild(acesso6);
		subCategoria.appendChild(acesso7);
		subCategoria.appendChild(acesso8);
		subCategoria.appendChild(acesso9);
		subCategoria.appendChild(acesso10);
		subCategoria.appendChild(acesso11);
		subCategoria.appendChild(acesso12);
		subCategoria.appendChild(acesso13);

		
	}else if (valorCategoria == "INTERNET"){
		
		for (var i = 0; i < numeroCategorias; i++) {
			console.log("removeu: ")+i;
			subCategoria.removeChild(subCategoria.firstElementChild)
			}

		var acesso0 = new Option("","");
		var acesso1 = new Option("Browser (Navegador Internet)", "Browser (Navegador Internet)");
		var acesso2 = new Option("Link off", "Link off");
		
		
		
		console.log(valorCategoria.value);
		subCategoria.appendChild(acesso0);
		subCategoria.appendChild(acesso1);
		subCategoria.appendChild(acesso2);
		

	
	}else if (valorCategoria == "WINDOWS"){
		
		for (var i = 0; i < numeroCategorias; i++) {
			console.log("removeu: ")+i;
			subCategoria.removeChild(subCategoria.firstElementChild)
			}

		var acesso0 = new Option("","");
		var acesso1 = new Option("Erro - Falha", "Erro - Falha");
		var acesso2 = new Option("Papel de Parede", "Papel de Parede");
		
		
		
		console.log(valorCategoria.value);
		subCategoria.appendChild(acesso0);
		subCategoria.appendChild(acesso1);
		subCategoria.appendChild(acesso2);
		
	
	
	}else if (valorCategoria == "OSE"){
		
		for (var i = 0; i < numeroCategorias; i++) {
			console.log("removeu: ")+i;
			subCategoria.removeChild(subCategoria.firstElementChild)
			}

		var acesso0 = new Option("","");
		var acesso1 = new Option("Alterar Status em Andamento - Erro", "Alterar Status em Andamento - Erro");
		var acesso2 = new Option("Cancelar OS", "Cancelar OS");
		var acesso3 = new Option("Erro Geral", "Erro Geral");
		var acesso4 = new Option("Suporte / Parametrização", "Suporte / Parametrização");
		var acesso5 = new Option("Terminar OS", "Terminar OS");
		
		
		console.log(valorCategoria.value);
		subCategoria.appendChild(acesso0);
		subCategoria.appendChild(acesso1);
		subCategoria.appendChild(acesso2);
		subCategoria.appendChild(acesso3);
		subCategoria.appendChild(acesso4);
		subCategoria.appendChild(acesso5);
		
		
	}else if (valorCategoria == "PONTOELETRONICO"){
		
		for (var i = 0; i < numeroCategorias; i++) {
			console.log("removeu: ")+i;
			subCategoria.removeChild(subCategoria.firstElementChild)
			}
		
		var acesso0 = new Option("","");
		var acesso1 = new Option("Configuração Kurumim", "Configuração Kurumim");
		var acesso2 = new Option("Erro Importação", "Erro Importação");
		var acesso3 = new Option("Reparo", "Reparo");
		
		
		
		console.log(valorCategoria.value);
		subCategoria.appendChild(acesso0);
		subCategoria.appendChild(acesso1);
		subCategoria.appendChild(acesso2);
		subCategoria.appendChild(acesso3);
	
	
	}else if (valorCategoria == "REDE"){
		
		for (var i = 0; i < numeroCategorias; i++) {
			console.log("removeu: ")+i;
			subCategoria.removeChild(subCategoria.firstElementChild)
			}
		
		var acesso0 = new Option("","");
		var acesso1 = new Option("Cabo de Rede", "Cabo de Rede");
		var acesso2 = new Option("Defeito no Ponto de Rede", "Defeito no Ponto de Rede");
		var acesso3 = new Option("Roteador", "Roteador");
		var acesso4 = new Option("Wireless", "Wireless");
		
		
		
		console.log(valorCategoria.value);
		subCategoria.appendChild(acesso0);
		subCategoria.appendChild(acesso1);
		subCategoria.appendChild(acesso2);
		subCategoria.appendChild(acesso3);
		subCategoria.appendChild(acesso4);
		
		
	}else if (valorCategoria == "SENIOR"){
		
		for (var i = 0; i < numeroCategorias; i++) {
			console.log("removeu: ")+i;
			subCategoria.removeChild(subCategoria.firstElementChild)
			}
	
		var acesso0 = new Option("","");
		var acesso1 = new Option("Rubi", "Rubi");
		var acesso2 = new Option("SDE", "SDE");
		var acesso3 = new Option("SM - Segurança e Medicina do Trabalho", "SM - Segurança e Medicina do Trabalho");
		var acesso4 = new Option("Sapiens", "Sapiens");
		var acesso5 = new Option("Vetor", "Vetor");
		
		
		
		
		console.log(valorCategoria.value);
		subCategoria.appendChild(acesso0);
		subCategoria.appendChild(acesso1);
		subCategoria.appendChild(acesso2);
		subCategoria.appendChild(acesso3);
		subCategoria.appendChild(acesso4);
		subCategoria.appendChild(acesso5);
		
		
	}else if (valorCategoria == "ANTIVIRUS"){
		
		for (var i = 0; i < numeroCategorias; i++) {
			console.log("removeu: ")+i;
			subCategoria.removeChild(subCategoria.firstElementChild)
			}
		
		var acesso0 = new Option("","");
		var acesso1 = new Option("Análise de Ameaça", "Análise de Ameaça")
		var acesso2 = new Option("Parametrização / Suporte Antivirus", "Parametrização / Suporte Antivirus")
		
		console.log(valorCategoria.value);
		subCategoria.appendChild(acesso0);
		subCategoria.appendChild(acesso1);
		subCategoria.appendChild(acesso2);

	}else if (valorCategoria == "FIREWALL"){
		
		for (var i = 0; i < numeroCategorias; i++) {
			console.log("removeu: ")+i;
			subCategoria.removeChild(subCategoria.firstElementChild)
			}
		
		var acesso0 = new Option("","");
		var acesso1 = new Option("Acesso a URL/IP", "Acesso a URL/IP")
		var acesso2 = new Option("Relatório / Auditoria", "Relatório / Auditoria")
		
		console.log(valorCategoria.value);
		subCategoria.appendChild(acesso0);
		subCategoria.appendChild(acesso1);
		subCategoria.appendChild(acesso2);
		
		
	}else if (valorCategoria == "MELHORIAS"){
		
		for (var i = 0; i < numeroCategorias; i++) {
			console.log("removeu: ")+i;
			subCategoria.removeChild(subCategoria.firstElementChild)
			}
		
		var acesso0 = new Option("","");
		var acesso1 = new Option("Sugestão de Melhoria", "Sugestão de Melhoria")
		
		
		console.log(valorCategoria.value);
		subCategoria.appendChild(acesso0);
		subCategoria.appendChild(acesso1);
		
		
	}else if (valorCategoria == "TOTVS - ERP"){
		
		for (var i = 0; i < numeroCategorias; i++) {
			console.log("removeu: ")+i;
			subCategoria.removeChild(subCategoria.firstElementChild)
			}
	
		var acesso0 = new Option("","");
		var acesso1 = new Option("Atualização de Versão", "Atualização de Versão");
		var acesso2 = new Option("Automação de Ponto - Suporte / Parametrização", "Automação de Ponto - Suporte / Parametrização");
		var acesso3 = new Option("Colaboração", "Colaboração");
		var acesso4 = new Option("Folha de Pagamento - Suporte / Parametrização", "Folha de Pagamento - Suporte / Parametrização");
		var acesso5 = new Option("Framework / Serviços", "Framework / Serviços");
		var acesso6 = new Option("Fórmula Visual", "Fórmula Visual");
		var acesso7 = new Option("Gerador de Relatório - Suporte/Parametrização", "Gerador de Relatorio - Suporte/Parametrização");
		var acesso8 = new Option("Gerador de Relatório - Desenvolvimento/Ajustes", "Gerador de Relatorio - Desenvolvimento/Ajustes");
		var acesso9 = new Option("Gestão Contábil - Suporte/Parametrização ", "Gestão Contábil - Suporte/Parametrização ");
		var acesso10 = new Option("Gestão Financeira - Suporte/Parametrização", "Gestão Financeira - Suporte/Parametrização");
		var acesso11 = new Option("Gestão Fiscal - Suporte/Parametrização", "Gestão Fiscal - Suporte/Parametrização");
		var acesso12 = new Option("Gestão Patrimonial - Suporte/Parametrização", "Gestão Patrimonial - Suporte/Parametrização");
		var acesso13 = new Option("Gestão de Estoque, Compras e Faturamento - Suporte/Parametrização", "Gestão de Estoque, Compras e Faturamento - Suporte/Parametrização");
		var acesso14 = new Option("Gestão de Pessoas - Suporte/Parametrização", "Gestão de Pessoas - Suporte/Parametrização");
		var acesso15 = new Option("Inteligência de Negócios - Suporte/Parametrização", "Inteligência de Negócios - Suporte/Parametrização");
		var acesso16 = new Option("Manutenção - Suporte/Parametrização", "Manutenção - Suporte/Parametrização");
		var acesso17 = new Option("Meu RH", "Meu RH");
		var acesso18 = new Option("NF-e/NFs-e", "NF-e/NFs-e");
		var acesso19 = new Option("Obras e projetos - Suporte/Parametrização", "Obras e projetos - Suporte/Parametrização");
		var acesso20 = new Option("Painel de Metas  - Desenvolvimento/Ajustes", "Painel de Metas  - Desenvolvimento/Ajustes");
		var acesso21 = new Option("Painel de Metas  - Suporte/Parametrização", "Painel de Metas  - Suporte/Parametrização");
		var acesso22 = new Option("Segurança e Medicina do Trabalho - Suporte/Parametrização", "Segurança e Medicina do Trabalho - Suporte/Parametrização");
		var acesso22 = new Option("TAF", "TAF");
		
		
		
		console.log(valorCategoria.value);
		subCategoria.appendChild(acesso0);
		subCategoria.appendChild(acesso1);
		subCategoria.appendChild(acesso2);
		subCategoria.appendChild(acesso3);
		subCategoria.appendChild(acesso4);
		subCategoria.appendChild(acesso5);
		subCategoria.appendChild(acesso6);
		subCategoria.appendChild(acesso7);
		subCategoria.appendChild(acesso8);
		subCategoria.appendChild(acesso9);
		subCategoria.appendChild(acesso10);
		subCategoria.appendChild(acesso11);
		subCategoria.appendChild(acesso12);
		subCategoria.appendChild(acesso13);
		subCategoria.appendChild(acesso14);
		subCategoria.appendChild(acesso15);
		subCategoria.appendChild(acesso16);
		subCategoria.appendChild(acesso17);
		subCategoria.appendChild(acesso18);
		subCategoria.appendChild(acesso19);
		subCategoria.appendChild(acesso20);
		subCategoria.appendChild(acesso21);
		subCategoria.appendChild(acesso22);
		
		
	}else if (valorCategoria == "TELEFONIA"){
		
		for (var i = 0; i < numeroCategorias; i++) {
			console.log("removeu: ")+i;
			subCategoria.removeChild(subCategoria.firstElementChild)
			}
		
		var acesso0 = new Option("","");
		var acesso1 = new Option("Configurações", "Configurações")
		var acesso1 = new Option("Defeito no Ponto de Telefone", "Defeito no Ponto de Telefone")
		var acesso1 = new Option("Mudança de Ramal", "Mudança de Ramal")
		
		
		console.log(valorCategoria.value);
		subCategoria.appendChild(acesso0);
		subCategoria.appendChild(acesso1);
		subCategoria.appendChild(acesso2);
		subCategoria.appendChild(acesso3);
				
		
	}else if (valorCategoria == "INF"){
		
		for (var i = 0; i < numeroCategorias; i++) {
			console.log("removeu: ")+i;
			subCategoria.removeChild(subCategoria.firstElementChild)
			}
		
		var acesso0 = new Option("", "");
		var acesso1 = new Option("Transferência de Responsável", "Transferência de Responsável")
		
		
		
		
		
		
		
		console.log(valorCategoria.value);
		subCategoria.appendChild(acesso0);
		subCategoria.appendChild(acesso1);
		
		
		
	
		
	
	}
	
}

function alerta(mensagem){
	//se o renato tentar enviar a solicitação quando for trocar o sla vai aparecer o erro abaixo 
	
		FLUIGC.toast({
		title: 'Aviso:',
		message: 'Você não pode enviar essa solicitação, somente salvar',
		type: 'danger'
		});
						
}

//function dataReabertura(){
//	var reabertura = document.getElementById("fgNaoAtendido").checked;
//	console.log( "reabertura"+reabertura);
//	var atividade = document.getElementById("NUM_ATIVIDADE").value;
//	console.log("atividade :: "+ atividade);
//	if (reabertura == true && atividade == '5'){  
//	
//	 console.log("entrou nesse if")
//	 var date = new Date();
//     console.log(date)
//     var d = date.getDate();
//		var m = date.getMonth() + 1;
//		var a = date.getFullYear();
//		
//		if (m < 10) {
//			m = "0" + m;
//		}
//		
//		if (d < 10) {
//			d = "0" + d;
//		}
//		
//		var dia = d + "/" + m + "/" + a;
//
//		var h = date.getHours();
//		var m = date.getMinutes();
//		
//		if ( h < 10) {
//			h = "0" + h;
//		}
//	
//		if ( m < 10) {
//			m = "0" + m;
//		}
//
//		var hor = h + ":" + m;
//		
//		var dataFull = dia + " " + hor;
//		document.getElementById("DATAREABERTURA").value= dataFull
//		document.getElementById("_DATAREABERTURA").value= dataFull
//		document.getElementById("VENCIMENTOSLA").value = ""
//		document.getElementById("STATUS").value = "ABERTO"
//     
//     console.log(dataFull)
//     
//	}
//}

function vencimentoSLA(){
	
	var atividade = document.getElementById("NUM_ATIVIDADE").value
	
	if (atividade == '5' ){  
	//window["TRANSFERECHAMADO"].clear()
	var text = document.getElementById("SLAEXTENSO").value
	console.log("ENTROU VENCIENTO Sla")
	var myArray = text.split(" ");
	console.log(myArray)
	var data = myArray[0].split("/");
	var hora = myArray[1].split(":");
	
	var dia = data[0];
	console.log("variavel dia: " + dia)
	var meses = data[1];
	console.log("variavel meses: " + meses)
	var ano = data[2];
	console.log("variavel ano: " + ano)
	var h = hora[0];
	console.log("variavel h: " + h)
	var m = hora[1];
	console.log("variavel m: " + m)
	
	var mesjs = meses -1
	console.log("variavel mesjs: " + mesjs)
	
	var dataVencimentoSLA= new Date(ano, mesjs, dia, h, m, "00")

	console.log("=================================")
	console.log("variavel dataVencimentoSLA: " + dataVencimentoSLA)
	
	var date = new Date();
	console.log("=================================")
	console.log("variavel date: " + date)
	var d = date.getDate();
	var mes = date.getMonth() + 1;
	var a = date.getFullYear();
		
		if (mes < 10) {
			mes = "0" + mes;
		}
		
		if (d < 10) {
			d = "0" + d;
		}
		
		var h = date.getHours();
		var m = date.getMinutes();
		
		if (h < 10) {
		h = "0" + h;
		}
	
		if (m < 10) {
			m = "0" + m;
		}
		
		mesjs = mes -1
		
		var dataAtual = new Date(a, mesjs, d, h, m, "00")

		console.log("=================================")
		console.log("variavel datanow: "+dataAtual)
      

  	console.log("entrouESS: "+ dataVencimentoSLA +" ??? " + dataAtual)
  	var status = document.getElementById("STATUS").value;

  	
  	if (dataVencimentoSLA >= dataAtual){
  		document.getElementById("VENCIMENTOSLA").value = ""
  		console.log("vazio: "+dataVencimentoSLA+" teste " +dataAtual )
  	}
  	if (dataVencimentoSLA > dataAtual && status == "FECHADO"){
  		document.getElementById("VENCIMENTOSLA").value = "SLA Atendido"
  		console.log("SLA Atendido: "+dataVencimentoSLA+" teste " +dataAtual )
  	}
  	if (dataVencimentoSLA < dataAtual){
  		document.getElementById("VENCIMENTOSLA").value = "SLA Violado"
  		console.log("dSLA Violadooc: "+dataVencimentoSLA+" teste " +dataAtual )
  		//19/10/2022 15:32 19/10/2022 17:31
  	}
  	
	}
	
}



