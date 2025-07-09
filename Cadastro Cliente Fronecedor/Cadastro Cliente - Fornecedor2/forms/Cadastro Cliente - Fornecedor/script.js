
function showCamera(param) { 
	JSInterface.showCamera(param); 
}
//====================================================================================================================================================================================================
function data(campo){
	var dateTime = FLUIGC.calendar(campo, {
	    pickDate: true,
	    pickTime: false,
	    sideBySide: false,
	    maxDate: new Date()
	});
}
//====================================================================================================================================================================================================
function pixpj(){
	var tipoChave = document.getElementById("TIPODACHAVE_PJ").value
	if (tipoChave == "TELEFONE"){
		document.getElementById("CHAVEPIX_PJ").setAttribute("mask", "(00) 00000-0000");
		MaskEvent.init();
	} 
	if (tipoChave == "CPF"){
		document.getElementById("CHAVEPIX_PJ").setAttribute("mask", "000.000.000-00");
		MaskEvent.init();
	} 
	if (tipoChave == "CNPJ"){
		document.getElementById("CHAVEPIX_PJ").setAttribute("mask", "00.000.000/0000-00");
		MaskEvent.init();
	} 
	if (tipoChave == "E-MAIL"){
		document.getElementById("CHAVEPIX_PJ").setAttribute("mask", "#A@A#");
		MaskEvent.init();
	} 
}
//====================================================================================================================================================================================================
function pixpf(){
	var tipoChave = document.getElementById("TIPODACHAVE_PF").value
	
	if (tipoChave == "CPF"){
		document.getElementById("CHAVEPIX_PF").setAttribute("mask", "000.000.000-00");
		MaskEvent.init();
	} 
	if (tipoChave == "CNPJ"){
		document.getElementById("CHAVEPIX_PF").setAttribute("mask", "00.000.000/0000-00");
		MaskEvent.init();
	} 
}
//====================================================================================================================================================================================================
function validarCNPJFamilia() {
    var cnpjPrincipal = document.getElementById("CNPJ_PJ").value;
    var chavePix = document.getElementById("CHAVEPIX_PJ").value;
    var raizCNPJPrincipal = cnpjPrincipal.substring(0, 8);
    var raizChavePix = chavePix.substring(0, 8);

    if (raizCNPJPrincipal !== raizChavePix) {
        FLUIGC.toast({
            message: 'A chave Pix não pertence ao mesmo tronco do CNPJ principal.',
            type: 'danger',
            title: 'Erro de Validação',
            timeout: 5000 
        });
        return false;
    }
    FLUIGC.toast({
        message: 'A chave Pix pertence ao mesmo tronco do CNPJ principal.',
        type: 'success',
        title: 'Validação Bem-Sucedida',
        timeout: 5000
    });
    return true;
}
//====================================================================================================================================================================================================
function carregamento(campo, pj, pf){
	
	if (campo.value == 'Pessoa-Juridica'){
		pj.style.display = 'block';
		pf.style.display = 'none';
	} 
	else {
		pj.style.display = 'none';
		pf.style.display = 'block';
	}
	FLUIGC.switcher.init('#MySwitchButtonCheckbox');
	FLUIGC.switcher.disable('#MySwitchButtonCheckbox');
	if (document.getElementById("NUMATIVIDADE").value == 12 || 
		document.getElementById("NUMATIVIDADE").value == 14 ||
		document.getElementById("NUMATIVIDADE").value == 24 ||
		document.getElementById("NUMATIVIDADE").value == 27 ||
		document.getElementById("NUMATIVIDADE").value == 36 || 
		document.getElementById("NUMATIVIDADE").value == 39 ){
		editaFormulario(document.getElementById('MySwitchButtonCheckbox'));
		FLUIGC.switcher.enable('#MySwitchButtonCheckbox');
	}
}
//====================================================================================================================================================================================================
function categoriaFornecedor(valor, campo){
		
	if (valor.value == 'Fornecedor'){
		$('#TPCLIFOR').prop('disabled', false);
		campo.disabled = false;
	}
	
	else if (valor.value == 'Colaborador'){
			document.getElementById('TIPO_ENTIDADE').value = 'Pessoa-Fisica';
			document.getElementById('TIPO_ENTIDADE').disabled = true;
			carregamento(document.getElementById('TIPO_ENTIDADE'), document.getElementById('FichaJuridica'), document.getElementById('FichaFisica'))
			setDadosBancarios()
			$('#TPCLIFOR').prop('disabled', true);
			
	} else {
		document.getElementById('TIPO_ENTIDADE').disabled = false;
		$('#TPCLIFOR').prop('disabled', true);
	}
}
//====================================================================================================================================================================================================
function setDadosBancarios(){
	
	var tipoDadosBancariosPF = document.getElementById("TIPODADOSBANCRIOS_PF").value
	var tipoDadosBancariosPJ = document.getElementById("TIPODADOSBANCRIOS_PJ").value
	var tipoEntidade = document.getElementById("TIPO_ENTIDADE").value
	var tipoCadastro = document.getElementById("TIPO_CADASTRO").value

	if (tipoCadastro=="Fornecedor"){
				
						if (tipoEntidade=="Pessoa-Juridica" ){
								
								document.getElementById('IFORMADADOSBANCARIOS_PJ').style.display = "block"
								document.getElementById("DADOSBANCARIOS1_PJ").style.display = "none"
								document.getElementById("DADOSBANCARIOS2_PJ").style.display = "none"		
								document.getElementById("CAMPOPIX_PJ").style.display = "none"
								document.getElementById("CAMPOSANEXOS_PJ").style.display = "none"
								setCamposTipo()
						}
						if (tipoEntidade=="Pessoa-Fisica" ){
								
								document.getElementById('IFORMADADOSBANCARIOS_PF').style.display = "block"
								document.getElementById("DADOSBANCARIOS1_PF").style.display = "none"
								document.getElementById("DADOSBANCARIOS2_PF").style.display = "none"	
								document.getElementById("CAMPOPIX_PF").style.display = "none"
								document.getElementById("CAMPOSANEXOS_PF").style.display = "none"
								setCamposTipo()
						}
								
	}else if (tipoCadastro=="Cliente"){	
		
		if (tipoEntidade=="Pessoa-Juridica" ){

				document.getElementById('IFORMADADOSBANCARIOS_PJ').style.display = "block"
				document.getElementById("DADOSBANCARIOS1_PJ").style.display = "none"
				document.getElementById("DADOSBANCARIOS2_PJ").style.display = "none"		
				document.getElementById("CAMPOPIX_PJ").style.display = "none"
				document.getElementById("CAMPOSANEXOS_PJ").style.display = "none"
				setCamposTipo()
		}
		if (tipoEntidade=="Pessoa-Fisica" ){
			
			document.getElementById('IFORMADADOSBANCARIOS_PF').style.display = "block"
			document.getElementById("DADOSBANCARIOS1_PF").style.display = "none"
			document.getElementById("DADOSBANCARIOS2_PF").style.display = "none"	
			document.getElementById("CAMPOPIX_PF").style.display = "none"
			document.getElementById("CAMPOSANEXOS_PF").style.display = "none"
			setCamposTipo()
	}
				
	}else  if (tipoCadastro=="Colaborador"){

			document.getElementById('IFORMADADOSBANCARIOS_PF').style.display = "block"
			document.getElementById("DADOSBANCARIOS1_PF").style.display = "none"
			document.getElementById("DADOSBANCARIOS2_PF").style.display = "none"	
			document.getElementById("CAMPOPIX_PF").style.display = "none"
			document.getElementById("CAMPOSANEXOS_PF").style.display = "none"
			setCamposTipo()
	}
}
//====================================================================================================================================================================================================
function setCamposDadosBancarios(){
	
	var dadosBancarios_PF= document.getElementById("TIPODADOSBANCRIOS_PF").value
	var dadosBancarios_PJ= document.getElementById("TIPODADOSBANCRIOS_PJ").value
	
	if (dadosBancarios_PJ == "CHAVE_PIX"){
		document.getElementById("CAMPOPIX_PJ").style.display = "block"
		document.getElementById("CAMPOSANEXOS_PJ").style.display = "none"
	}
	if (dadosBancarios_PJ == "DADOS_BANCARIOS"){

		document.getElementById("CAMPOPIX_PJ").style.display = "none"
		document.getElementById("CAMPOSANEXOS_PJ").style.display = "block"

	}
	if (dadosBancarios_PJ == "NULO"){

		document.getElementById("CAMPOPIX_PJ").style.display = "none"
		document.getElementById("CAMPOSANEXOS_PJ").style.display = "none"
	}
	if (dadosBancarios_PF == "CHAVE_PIX"){
		
		document.getElementById("CAMPOPIX_PF").style.display = "block"
		document.getElementById("CAMPOSANEXOS_PF").style.display = "none"
	}
	if (dadosBancarios_PF == "DADOS_BANCARIOS"){

		document.getElementById("CAMPOPIX_PF").style.display = "none"
		document.getElementById("CAMPOSANEXOS_PF").style.display = "block"

	}
	if (dadosBancarios_PF == "NULO"){

		document.getElementById("CAMPOPIX_PF").style.display = "none"
		document.getElementById("CAMPOSANEXOS_PF").style.display = "none"
	}
}
//====================================================================================================================================================================================================
function camposDadosFinanceiros(campo){
	if (campo == 'Aprovado_com_Ressalva'){
		document.getElementById('FINANCEIROLIMITE').readOnly = false;
		document.getElementById('FINANCEIROOBS').readOnly = false;
	} 
	else if (campo == 'Reprovado'){
		document.getElementById('FINANCEIROLIMITE').readOnly = true;
		document.getElementById('FINANCEIROOBS').readOnly = false;
	} 
	else {
		document.getElementById('FINANCEIROLIMITE').readOnly = true;
		document.getElementById('FINANCEIROOBS').readOnly = true;
	}
}
//====================================================================================================================================================================================================
function meu_callback_cep(conteudo) {
	if (!("erro" in conteudo)) {
		if (conteudo.cep == undefined){
			FLUIGC.toast({
				title: 'Aviso: ',
				message: 'O CEP digitado é inválido ou inexistente!',
				type: 'danger'
			});
		} 
		else {
		    //Atualiza os campos com os valores.
			if (document.getElementById('TIPO_ENTIDADE').value == 'Pessoa-Juridica'){
				document.getElementById('CEP_PJ').value = (conteudo.cep);
			    document.getElementById('BAIRRO_PJ').value = (conteudo.bairro);
			    document.getElementById('MUNICIPIO_PJ').value = (conteudo.localidade);
			    document.getElementById('ESTADO_PJ').value = (conteudo.uf);
			    document.getElementById('RUA_PJ').value = (conteudo.logradouro);
			    document.getElementById('COMPLEMENTO_PJ').value = (conteudo.complemento);
			    document.getElementById('OPTANTE').value = (conteudo.optante);
			    document.getElementById('DATA_MEI').value = (conteudo.data_opcao);
			    document.getElementById('ULTIMA_ATUALIZACAO').value = (conteudo.ultima_atualizacao);
			    
			} else {
				document.getElementById('CEP_PF').value = (conteudo.cep);
			    document.getElementById('BAIRRO_PF').value = (conteudo.bairro);
			    document.getElementById('MUNICIPIO_PF').value = (conteudo.localidade);
			    document.getElementById('ESTADO_PF').value = (conteudo.uf);
			    document.getElementById('RUA_PF').value = (conteudo.logradouro);
			    document.getElementById('COMPLEMENTO_PF').value = (conteudo.complemento);
			}
		}
	} //end if.
	else {
	    //CEP não Encontrado.
	    console.log("CEP não encontrado.");
	}
}

//====================================================================================================================================================================================================

function pesquisacep(valor) {

	//Nova variável "cep" somente com dígitos.
	var cep = valor.replace(/\D/g, '');
	
	//Verifica se campo cep possui valor informado.
	if (cep != "") {
	
	    //Expressão regular para validar o CEP.
	    var validacep = /^[0-9]{8}$/;
	
	    //Valida o formato do CEP.
	    if(validacep.test(cep)) {
	    
	        //Preenche os campos com "..." enquanto consulta webservice.
	    	
	    	if (document.getElementById('TIPO_ENTIDADE').value == 'Pessoa-Juridica'){
		    	document.getElementById('BAIRRO_PJ').value = "...";
		    	document.getElementById('MUNICIPIO_PJ').value = "...";
		    	document.getElementById('ESTADO_PJ').value = "...";
		    	document.getElementById('RUA_PJ').value = "...";
		        document.getElementById('COMPLEMENTO_PJ').value = "...";
	    	} 
			else {
		    	document.getElementById('BAIRRO_PF').value = "...";
		    	document.getElementById('MUNICIPIO_PF').value = "...";
		    	document.getElementById('ESTADO_PF').value = "...";
		    	document.getElementById('RUA_PF').value = "...";
		        document.getElementById('COMPLEMENTO_PF').value = "...";
	    	}
	
	        //Cria um elemento javascript.
	        var script = document.createElement('script');
	
	        //Sincroniza com o callback.
	        script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback_cep';
	
	        //Insere script no documento e carrega o conteúdo.
	        document.body.appendChild(script);
	
	    } //end if.
	    else {
	        //cep é inválido.
	        console.log("Formato de CEP inválido.");
	    }
	} //end if.
	else {
	    //cep sem valor, limpa formulário.
        console.log("Campo CEP em branco.");
	}
}
//====================================================================================================================================================================================================

function meu_callback_cnpj(conteudo) {
	console.log("Retorno da API:", conteudo);
	   
	if (document.getElementById('NUMATIVIDADE').value == '0' || document.getElementById('NUMATIVIDADE').value == '4' ){ 
		   console.log("meu_callback_cnpj" + document.getElementById('NUMATIVIDADE').value);
					if (!("erro" in conteudo)) {
						if (conteudo.cnpj == undefined){
							FLUIGC.toast({
								title: 'Aviso: ',
								message: 'O CNPJ digitado é inválido ou inexistente!',
								type: 'danger'
							});
						} else {
						    //Atualiza os campos com os valores.
							if (conteudo.cnpj != ''){
								
								document.getElementById('CNPJ_PJ').value = (conteudo.cnpj);
						    	$('#CNPJ_PJ').prop('readOnly', true);
								
							}
							else {
								
								document.getElementById('CNPJ_PJ').value = (conteudo.cnpj);
								
							}
					    	if (conteudo.telefone != ''){  
					    		
							    	var telefones = conteudo.telefone.split(" / ");
						            if (telefones.length >= 1) {
						                document.getElementById('FIXO_PJ').value = (telefones[0].replace(/\D/g, ''));
						                $('#FIXO_PJ').prop('readOnly', true);
						            }
						          
						            if (telefones.length >= 2) {
						                document.getElementById('CEL_PJ').value = (telefones[1].replace(/\D/g, ''));
						                $('#CEL_PJ').prop('readOnly', true);
						            }
				            
					    	}
					    	else {
					    		document.getElementById('FIXO_PJ').value = conteudo.telefone
					    		document.getElementById('CEL_PJ').value = conteudo.telefone
					    		
					    	}	           
				            if (conteudo.nome != '') {
				                document.getElementById('RAZAO_PJ').value = conteudo.nome;
				                $('#RAZAO_PJ').prop('readOnly', true);
				            }
				            else {
								
				            	document.getElementById('RAZAO_PJ').value = conteudo.nome;
								
							}
				            if (conteudo.fantasia != '') {
				                document.getElementById('NOMEF_PJ').value = conteudo.fantasia;
				                $('#NOMEF_PJ').prop('readOnly', true);
				            }
				            else {
								
				            	 document.getElementById('NOMEF_PJ').value = '*'
				            	 $('#NOMEF_PJ').prop('readOnly', true);
								
							}
				            if (conteudo.email != '') {
				                document.getElementById('EMAIL_PJ').value = conteudo.email;
				               
				            }
				            else {
								
				            	document.getElementById('EMAIL_PJ').value = conteudo.email;
								
							}
				            if (conteudo.cep != '') {
				                document.getElementById('CEP_PJ').value = conteudo.cep;
				                $('#CEP_PJ').prop('readOnly', true);
				            }
				            else {
								
				            	  document.getElementById('CEP_PJ').value = conteudo.cep;
								
							}	
				            if (conteudo.bairro != '') {
				                document.getElementById('BAIRRO_PJ').value = conteudo.bairro;
				                $('#BAIRRO_PJ').prop('readOnly', true);
				            }
				            else {
								
				            	document.getElementById('BAIRRO_PJ').value = conteudo.bairro;
								
							}	
				            if (conteudo.municipio != '') {
				                document.getElementById('MUNICIPIO_PJ').value = conteudo.municipio;
				                $('#MUNICIPIO_PJ').prop('readOnly', true);
				            }
				            else {
								
				            	   document.getElementById('MUNICIPIO_PJ').value = conteudo.municipio;
				            	   
							}
				            if (conteudo.uf != '') {
				                document.getElementById('ESTADO_PJ').value = conteudo.uf;
				                $('#ESTADO_PJ').prop('readOnly', true);
				            }
				            else {
								
				            	 document.getElementById('ESTADO_PJ').value = conteudo.uf;
								
							}
				            if (conteudo.logradouro != '') {
				                document.getElementById('RUA_PJ').value = conteudo.logradouro;
				                $('#RUA_PJ').prop('readOnly', true);
				            }
				            else {
								
				            	document.getElementById('RUA_PJ').value = conteudo.logradouro;
								
							}
				            if (conteudo.numero != '') {
				                document.getElementById('NUMERO_PJ').value = conteudo.numero;
				                $('#NUMERO_PJ').prop('readOnly', true);
				            }
				            else {
								
				            	  document.getElementById('NUMERO_PJ').value = conteudo.numero;
								
							}
				            if (conteudo.complemento != '') {
				                document.getElementById('COMPLEMENTO_PJ').value = conteudo.complemento;
				                $('#COMPLEMENTO_PJ').prop('readOnly', true);
				            }
				            else {
								
				            	  document.getElementById('COMPLEMENTO_PJ').value = conteudo.complemento;
								
							}
				            
						}
					} //end if.
					else {
					    //CEP não Encontrado.
					    console.log("CNPJ não encontrado.");
					}
					
					var cnpj = conteudo.cnpj;
					var c1 = DatasetFactory.createConstraint("CGCCFO", cnpj, cnpj, ConstraintType.MUST);
					var constraints = new Array(c1);
					try{
						var dataset = DatasetFactory.getDataset("ds_cadastro_clifor_cnpj_existe", null, constraints, null);
						var row = dataset.values[0];
						var isso = row[dataset.columns[0]];
						if (isso != undefined && isso != null && isso != ""){
							FLUIGC.toast({
								title: 'Aviso: ',
								message: 'Este CNPJ já tem cadastro no sistema!',
								type: 'danger'
							});
							console.log("if");
						}
						console.log("try");
					} catch (e) {
						console.log(e);
					}
				}
}
//====================================================================================================================================================================================================
function pesquisaCNPJ(valor) {
	  console.log("pesquisaCNPJ" + document.getElementById('NUMATIVIDADE').value);
	//Nova variável "cep" somente com dígitos.
	  
	  if (document.getElementById('NUMATIVIDADE').value == '0' || document.getElementById('NUMATIVIDADE').value == '4' ){ 
	var cnpj = valor.replace(/\D/g, '');
	
	//Verifica se campo cep possui valor informado.
	if (cnpj != "") {
		console.log("pesquisaCNPJ" + document.getElementById('NUMATIVIDADE').value);
	    //Expressão regular para validar o CEP.
	    var validacnpj = /^[0-9]{14}$/;
	
	    //Valida o formato do CEP.
	    if(validacnpj.test(cnpj)) {
	    
	        //Preenche os campos com "..." enquanto consulta webservice.
	    	document.getElementById('RAZAO_PJ').value = "...";
	    	document.getElementById('NOMEF_PJ').value = "...";
	    	document.getElementById('FIXO_PJ').value = "...";
	    	document.getElementById('CEL_PJ').value = "";
	    	document.getElementById('EMAIL_PJ').value = "...";
	
	        //Cria um elemento javascript.
	        var script = document.createElement('script');
	
	        //Sincroniza com o callback.
	        script.src = 'https://www.receitaws.com.br/v1/cnpj/'+ cnpj + '/?callback=meu_callback_cnpj';
	        console.log("pesquisaCNPJ" + document.getElementById('NUMATIVIDADE').value);
	        //Insere script no documento e carrega o conteúdo.
	        document.body.appendChild(script);
	
	    } //end if.
	    else {
	        //cep é inválido.
	        console.log("Formato de CNPJ inválido.");
	    }
	} //end if.
	else {
	    //cep sem valor, limpa formulário.
        console.log("Campo de CNPJ vazio.");
	}
}
}
//==============================================================================================================================================
function pesquisaCPF(valor){
	
	var cnpj = valor;
	var c1 = DatasetFactory.createConstraint("CGCCFO", cnpj, cnpj, ConstraintType.MUST);
	var constraints = new Array(c1);
	try{
		var dataset = DatasetFactory.getDataset("ds_cadastro_clifor_cnpj_existe", null, constraints, null);
		var row = dataset.values[0];
		var isso = row[dataset.columns[0]];
		console.log(cnpj);
		console.log(isso);
		if (row != undefined && isso == cnpj){
			FLUIGC.toast({
				title: 'Aviso: ',
				message: 'Este CPF já tem cadastro no sistema!',
				type: 'danger'
			});
		}
	} catch (e) {
		console.log(e);
	}
	
}
//=====================================================================================================================================================================================================
function editaFormulario(botao){
	
	if (FLUIGC.switcher.getState(botao)){
		console.log("true");
		document.getElementById('NOME_SOLICITANTE').removeAttribute('readonly');
		document.getElementById('FONE_SOLICITANTE').removeAttribute('readonly');
		document.getElementById('EMAIL_SOLICITANTE').removeAttribute('readonly');
		document.getElementById('NOMECONTATO').removeAttribute('readonly');
		document.getElementById('EMAILCONTATO').removeAttribute('readonly');
		document.getElementById('TIPO_CADASTRO').removeAttribute('readonly');
		document.getElementById('TIPO_ENTIDADE').removeAttribute('readonly');
		document.getElementById('CATEGORIAFORNECEDOR').removeAttribute('readonly');
		document.getElementById('TPCLIFOR').removeAttribute('readonly');
		document.getElementById('ANEXOCLIFOR').removeAttribute('readonly');
		document.getElementById('OBSCLIFOR').removeAttribute('readonly');
		
//====================================================================================================================================================================================================
		document.getElementById('CNPJ_PJ').removeAttribute('readonly');
		document.getElementById('RAZAO_PJ').removeAttribute('readonly');
		document.getElementById('NOMEF_PJ').removeAttribute('readonly');
		document.getElementById('IE_PJ').removeAttribute('readonly');
		document.getElementById('IM_PJ').removeAttribute('readonly');
		document.getElementById('EMAILXML_PJ').removeAttribute('readonly');
		document.getElementById('FIXO_PJ').removeAttribute('readonly');
		document.getElementById('CEL_PJ').removeAttribute('readonly');
		document.getElementById('EMAIL_PJ').removeAttribute('readonly');
		document.getElementById('NOMECONTATO_PJ').removeAttribute('readonly');
		document.getElementById('CEP_PJ').removeAttribute('readonly');
		document.getElementById('BAIRRO_PJ').removeAttribute('readonly');
		document.getElementById('MUNICIPIO_PJ').removeAttribute('readonly');
		document.getElementById('ESTADO_PJ').removeAttribute('readonly');
		document.getElementById('RUA_PJ').removeAttribute('readonly');
		document.getElementById('NUMERO_PJ').removeAttribute('readonly');
		document.getElementById('COMPLEMENTO_PJ').removeAttribute('readonly');
		document.getElementById('NOMEREFERENCIA_PJ').removeAttribute('readonly');
		document.getElementById('TELEFONEREFERENCIA_PJ').removeAttribute('readonly');
		document.getElementById('CONTATOREFERENCIA_PJ').removeAttribute('readonly');
		document.getElementById('CREDITODESEJADO_PJ').removeAttribute('readonly');
		document.getElementById('PAGAMENTODESEJADO_PJ').removeAttribute('readonly');
		document.getElementById('PAGAMENTOOBS_PJ').removeAttribute('readonly');
		document.getElementById('FORMAPAGAMENTO_PJ').removeAttribute('readonly');
		document.getElementById('BANCO_PJ').removeAttribute('readonly');
		document.getElementById('AGENCIA_PJ').removeAttribute('readonly');
		document.getElementById('CONTA_PJ').removeAttribute('readonly');
		document.getElementById('TIPOCONTA_PJ').removeAttribute('readonly');
		document.getElementById('GERENTE_PJ').removeAttribute('readonly');
		document.getElementById('TELEFONEBANCO_PJ').removeAttribute('readonly');
		document.getElementById('TIPODADOSBANCRIOS_PJ').removeAttribute('readonly');
		document.getElementById('TIPODACHAVE_PJ').removeAttribute('readonly');
		document.getElementById('CHAVEPIX_PJ').removeAttribute('readonly');

//==========================================================================================================================================================================================

		document.getElementById('CPF_PF').removeAttribute('readonly');
		document.getElementById('NOME_PF').removeAttribute('readonly');
		document.getElementById('RG_PF').removeAttribute('readonly');
		document.getElementById('ORGAOEMISSOR_PF').removeAttribute('readonly');
		document.getElementById('NASCIMENTO_PF').removeAttribute('readonly');
		document.getElementById('ESTADOCIVIL_PF').removeAttribute('readonly');
		document.getElementById('DEPENDENTES_PF').removeAttribute('readonly');
		document.getElementById('PIS_PF').removeAttribute('readonly');
		document.getElementById('TELEFONE_PF').removeAttribute('readonly');
		document.getElementById('CATAUTONOMO_PF').removeAttribute('readonly');
		document.getElementById('CBOAUTONOMO_PF').removeAttribute('readonly');
		document.getElementById('IE_PF').removeAttribute('readonly');
		document.getElementById('CELULAR_PF').removeAttribute('readonly');
		document.getElementById('EMAILXML_PF').removeAttribute('readonly');
		document.getElementById('EMAIL_PF').removeAttribute('readonly');
		document.getElementById('CEP_PF').removeAttribute('readonly');
		document.getElementById('BAIRRO_PF').removeAttribute('readonly');
		document.getElementById('MUNICIPIO_PF').removeAttribute('readonly');
		document.getElementById('ESTADO_PF').removeAttribute('readonly');
		document.getElementById('RUA_PF').removeAttribute('readonly');
		document.getElementById('NUMERO_PF').removeAttribute('readonly');
		document.getElementById('COMPLEMENTO_PF').removeAttribute('readonly');
		document.getElementById('NOMEREFERENCIA_PF').removeAttribute('readonly');
		document.getElementById('TELEFONEREFERENCIA_PF').removeAttribute('readonly');
		document.getElementById('CONTATOREFERENCIA_PF').removeAttribute('readonly');
		document.getElementById('CREDITODESEJADO_PF').removeAttribute('readonly');
		document.getElementById('PAGAMENTODESEJADO_PF').removeAttribute('readonly');
		document.getElementById('PAGAMENTOOBS_PF').removeAttribute('readonly');
		document.getElementById('FORMAPAGAMENTO_PF').removeAttribute('readonly');
		document.getElementById('BANCO_PF').removeAttribute('readonly');
		document.getElementById('AGENCIA_PF').removeAttribute('readonly');
		document.getElementById('CONTA_PF').removeAttribute('readonly');
		document.getElementById('TIPOCONTA_PF').removeAttribute('readonly');
		document.getElementById('GERENTE_PF').removeAttribute('readonly');
		document.getElementById('TELEFONEBANCO_PF').removeAttribute('readonly');
		document.getElementById('TIPODADOSBANCRIOS_PF').removeAttribute('readonly');
		document.getElementById('TIPODACHAVE_PF').removeAttribute('readonly');
		document.getElementById('CHAVEPIX_PF').removeAttribute('readonly');
	} 
	else {
		console.log("false");
		document.getElementById('NOME_SOLICITANTE').setAttribute('readonly',true);
		document.getElementById('FONE_SOLICITANTE').setAttribute('readonly',true);
		document.getElementById('EMAIL_SOLICITANTE').setAttribute('readonly',true);
		document.getElementById('NOMECONTATO').setAttribute('readonly',true);
		document.getElementById('EMAILCONTATO').setAttribute('readonly',true);
		document.getElementById('TIPO_CADASTRO').setAttribute('readonly',true);
		document.getElementById('TIPO_ENTIDADE').setAttribute('readonly',true);
		document.getElementById('CATEGORIAFORNECEDOR').setAttribute('readonly',true);
		document.getElementById('TPCLIFOR').setAttribute('readonly',true);
		document.getElementById('ANEXOCLIFOR').setAttribute('readonly',true);
		document.getElementById('OBSCLIFOR').setAttribute('readonly',true);
		
		
//===========================================================================================================================================================================================

		document.getElementById('CNPJ_PJ').setAttribute('readonly',true);
		document.getElementById('RAZAO_PJ').setAttribute('readonly',true);
		document.getElementById('NOMEF_PJ').setAttribute('readonly',true);
		document.getElementById('IE_PJ').setAttribute('readonly',true);
		document.getElementById('IM_PJ').setAttribute('readonly',true);
		document.getElementById('EMAILXML_PJ').setAttribute('readonly',true);
		document.getElementById('FIXO_PJ').setAttribute('readonly',true);
		document.getElementById('CEL_PJ').setAttribute('readonly',true);
		document.getElementById('EMAIL_PJ').setAttribute('readonly',true);
		document.getElementById('NOMECONTATO_PJ').setAttribute('readonly',true);
		document.getElementById('CEP_PJ').setAttribute('readonly',true);
		document.getElementById('BAIRRO_PJ').setAttribute('readonly',true);
		document.getElementById('MUNICIPIO_PJ').setAttribute('readonly',true);
		document.getElementById('ESTADO_PJ').setAttribute('readonly',true);
		document.getElementById('RUA_PJ').setAttribute('readonly',true);
		document.getElementById('NUMERO_PJ').setAttribute('readonly',true);
		document.getElementById('COMPLEMENTO_PJ').setAttribute('readonly',true);
		document.getElementById('NOMEREFERENCIA_PJ').setAttribute('readonly',true);
		document.getElementById('TELEFONEREFERENCIA_PJ').setAttribute('readonly',true);
		document.getElementById('CONTATOREFERENCIA_PJ').setAttribute('readonly',true);
		document.getElementById('CREDITODESEJADO_PJ').setAttribute('readonly',true);
		document.getElementById('PAGAMENTODESEJADO_PJ').setAttribute('readonly',true);
		document.getElementById('PAGAMENTOOBS_PJ').setAttribute('readonly',true);
		document.getElementById('FORMAPAGAMENTO_PJ').setAttribute('readonly',true);
		document.getElementById('BANCO_PJ').setAttribute('readonly',true);
		document.getElementById('AGENCIA_PJ').setAttribute('readonly',true);
		document.getElementById('CONTA_PJ').setAttribute('readonly',true);
		document.getElementById('TIPOCONTA_PJ').setAttribute('readonly',true);
		document.getElementById('GERENTE_PJ').setAttribute('readonly',true);
		document.getElementById('TELEFONEBANCO_PJ').setAttribute('readonly',true);
		document.getElementById('TIPODADOSBANCRIOS_PJ').setAttribute('readonly',true);
		document.getElementById('TIPODACHAVE_PJ').setAttribute('readonly',true);
		document.getElementById('CHAVEPIX_PJ').setAttribute('readonly',true);
		
//=====================================================================================================================================================================================

		document.getElementById('CPF_PF').setAttribute('readonly',true);
		document.getElementById('NOME_PF').setAttribute('readonly',true);
		document.getElementById('RG_PF').setAttribute('readonly',true);
		document.getElementById('ORGAOEMISSOR_PF').setAttribute('readonly',true);
		document.getElementById('NASCIMENTO_PF').setAttribute('readonly',true);
		document.getElementById('ESTADOCIVIL_PF').setAttribute('readonly',true);
		document.getElementById('DEPENDENTES_PF').setAttribute('readonly',true);
		document.getElementById('PIS_PF').setAttribute('readonly',true);
		document.getElementById('TELEFONE_PF').setAttribute('readonly',true);
		document.getElementById('CATAUTONOMO_PF').setAttribute('readonly',true);
		document.getElementById('CBOAUTONOMO_PF').setAttribute('readonly',true);
		document.getElementById('IE_PF').setAttribute('readonly',true);
		document.getElementById('CELULAR_PF').setAttribute('readonly',true);
		document.getElementById('EMAILXML_PF').setAttribute('readonly',true);
		document.getElementById('EMAIL_PF').setAttribute('readonly',true);
		document.getElementById('CEP_PF').setAttribute('readonly',true);
		document.getElementById('BAIRRO_PF').setAttribute('readonly',true);
		document.getElementById('MUNICIPIO_PF').setAttribute('readonly',true);
		document.getElementById('ESTADO_PF').setAttribute('readonly',true);
		document.getElementById('RUA_PF').setAttribute('readonly',true);
		document.getElementById('NUMERO_PF').setAttribute('readonly',true);
		document.getElementById('COMPLEMENTO_PF').setAttribute('readonly',true);
		document.getElementById('NOMEREFERENCIA_PF').setAttribute('readonly',true);
		document.getElementById('TELEFONEREFERENCIA_PF').setAttribute('readonly',true);
		document.getElementById('CONTATOREFERENCIA_PF').setAttribute('readonly',true);
		document.getElementById('CREDITODESEJADO_PF').setAttribute('readonly',true);
		document.getElementById('PAGAMENTODESEJADO_PF').setAttribute('readonly',true);
		document.getElementById('PAGAMENTOOBS_PF').setAttribute('readonly',true);
		document.getElementById('FORMAPAGAMENTO_PF').setAttribute('readonly',true);
		document.getElementById('BANCO_PF').setAttribute('readonly',true);
		document.getElementById('AGENCIA_PF').setAttribute('readonly',true);
		document.getElementById('CONTA_PF').setAttribute('readonly',true);
		document.getElementById('TIPOCONTA_PF').setAttribute('readonly',true);
		document.getElementById('GERENTE_PF').setAttribute('readonly',true);
		document.getElementById('TELEFONEBANCO_PF').setAttribute('readonly',true);
		document.getElementById('TIPODADOSBANCRIOS_PF').setAttribute('readonly',true);
		document.getElementById('TIPODACHAVE_PF').setAttribute('readonly',true);
		document.getElementById('CHAVEPIX_PF').setAttribute('readonly',true);
	}
}
//================================================================================================================================================================================================
function setCamposTipo(){
	
	
	var tipoEntidade = document.getElementById("TIPO_ENTIDADE").value
	console.log("tipoEntidade" + tipoEntidade)
	var tipoCadastro = document.getElementById("TIPO_CADASTRO").value
	console.log("tipoCadastro" + tipoCadastro)

	if (tipoCadastro=="Cliente"){
				console.log("entrou Cliente")
				console.log("==========================================================")
						if (tipoEntidade=="Pessoa-Juridica" ){
							
								console.log("entrou Pessoa-Juridica")
								console.log("==========================================================")
								document.getElementById('EMAIL_PJ').readOnly = true
								document.getElementById('TIPOCONTA_PJ').disabled  = true 
								document.getElementById('GERENTE_PJ').readOnly = true	 
								document.getElementById('TELEFONEBANCO_PJ').readOnly = true 						
								//desbloqueia 
								document.getElementById('PAGAMENTODESEJADO_PJ').disabled  = false
								document.getElementById('CREDITODESEJADO_PJ').readOnly = false
								document.getElementById('PAGAMENTOOBS_PJ').readOnly = false
								document.getElementById('NOMEREFERENCIA_PJ').readOnly = false
								document.getElementById('TELEFONEREFERENCIA_PJ').readOnly = false
								document.getElementById('CONTATOREFERENCIA_PJ').readOnly = false
						}
				
						else if (tipoEntidade=="Pessoa-Fisica" ){
								console.log("entrou Pessoa-Fisica")
								console.log("==========================================================")
								document.getElementById('EMAIL_PF').readOnly = true 
								document.getElementById('TIPOCONTA_PF').disabled  = true 
								document.getElementById('GERENTE_PF').readOnly = true	
								document.getElementById('TELEFONEBANCO_PF').readOnly = true 
								document.getElementById('CREDITODESEJADO_PF').readOnly = false
								document.getElementById('PAGAMENTOOBS_PF').readOnly = false
								document.getElementById('PAGAMENTODESEJADO_PF').disabled  = false
								document.getElementById('CATEGORIAFORNECEDOR').readOnly = false
								document.getElementById('PIS_PF').readOnly = false
								document.getElementById('CATAUTONOMO_PF').readOnly = false
								document.getElementById('CBOAUTONOMO_PF').readOnly = false
								document.getElementById('IE_PF').readOnly = false
								document.getElementById('EMAILXML_PF').readOnly = false
								document.getElementById('NOMEREFERENCIA_PF').readOnly = false
								document.getElementById('TELEFONEREFERENCIA_PF').readOnly = false
								document.getElementById('CONTATOREFERENCIA_PF').readOnly = false
								document.getElementById('FORMAPAGAMENTO_PF').readOnly = false
								document.getElementById('ANEXOS_PF').readOnly = false
								document.getElementById('ANEXOS_PF').disabled = false				
						}
				
	}
	else if (tipoCadastro=="Fornecedor"){
		console.log("entrou Fornecedor")
		console.log("==========================================================")
				if (tipoEntidade=="Pessoa-Juridica" ){
							console.log("entrou Pessoa-Juridica")
							console.log("==========================================================")
							document.getElementById('NOMEREFERENCIA_PJ').readOnly = true
							document.getElementById('TELEFONEREFERENCIA_PJ').readOnly = true
							document.getElementById('CONTATOREFERENCIA_PJ').readOnly = true
							document.getElementById('CREDITODESEJADO_PJ').readOnly = true
							document.getElementById('PAGAMENTODESEJADO_PJ').disabled  = true
							document.getElementById('PAGAMENTOOBS_PJ').readOnly = true
							document.getElementById('EMAIL_PJ').readOnly = false 
							document.getElementById('CATEGORIAFORNECEDOR').readOnly = false
							document.getElementById('CATAUTONOMO_PJ').readOnly = false
							document.getElementById('CBOAUTONOMO_PJ').readOnly = false
							document.getElementById('IE_PJ').readOnly = false
							document.getElementById('EMAILXML_PJ').readOnly = false
							document.getElementById('FORMAPAGAMENTO_PJ').readOnly = false
							document.getElementById('ANEXOS_PJ').readOnly = false
							document.getElementById('ANEXOS_PF').disabled = false
							document.getElementById('PIS_PJ').readOnly = false
	
				}

				else if (tipoEntidade=="Pessoa-Fisica" ){
							console.log("entrou Pessoa-Fisica")
							console.log("==========================================================")
							document.getElementById('NOMEREFERENCIA_PF').readOnly = true
							document.getElementById('TELEFONEREFERENCIA_PF').readOnly = true
							document.getElementById('CONTATOREFERENCIA_PF').readOnly = true
							document.getElementById('CREDITODESEJADO_PF').readOnly = true
							document.getElementById('PAGAMENTODESEJADO_PF').disabled  = true
							document.getElementById('PAGAMENTOOBS_PF').readOnly = true
							document.getElementById('EMAIL_PF').readOnly = false 
							document.getElementById('CATEGORIAFORNECEDOR').readOnly = false
							document.getElementById('PIS_PF').readOnly = false
							document.getElementById('CATAUTONOMO_PF').readOnly = false
							document.getElementById('CBOAUTONOMO_PF').readOnly = false
							document.getElementById('IE_PF').readOnly = false
							document.getElementById('EMAILXML_PF').readOnly = false
							document.getElementById('FORMAPAGAMENTO_PF').readOnly = false
							document.getElementById('ANEXOS_PF').readOnly = false
							document.getElementById('ANEXOS_PF').disabled = false
							
				}
	}
	else  if (tipoCadastro=="Colaborador"){
							console.log("entrou else")
							console.log("==========================================================")
							document.getElementById('CATEGORIAFORNECEDOR').readOnly = true
							document.getElementById('CATAUTONOMO_PF').readOnly = true
							document.getElementById('CBOAUTONOMO_PF').readOnly = true
							document.getElementById('IE_PF').readOnly = true
							document.getElementById('EMAILXML_PF').readOnly = true
							document.getElementById('NOMEREFERENCIA_PF').readOnly = true
							document.getElementById('TELEFONEREFERENCIA_PF').readOnly = true
							document.getElementById('CONTATOREFERENCIA_PF').readOnly = true
							document.getElementById('CREDITODESEJADO_PF').readOnly = true
							document.getElementById('PAGAMENTODESEJADO_PF').disabled  = true
							document.getElementById('PAGAMENTOOBS_PF').readOnly = true
							document.getElementById('FORMAPAGAMENTO_PF').readOnly = true
							document.getElementById('ANEXOS_PF').readOnly = true
							document.getElementById('ANEXOS_PF').disabled = true
							document.getElementById('TIPOCONTA_PF').readOnly = false
							document.getElementById('GERENTE_PF').readOnly = false	
							document.getElementById('TELEFONEBANCO_PF').readOnly = false						
	}
}
//=============================================================================================================================================================================================
