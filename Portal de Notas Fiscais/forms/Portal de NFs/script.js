function showCamera(param) { 
	JSInterface.showCamera(param);
}
//==============================================================================================================================================
function data(campo){
	var dateTime = FLUIGC.calendar(campo, {
	    pickDate: true,
	    pickTime: false,
	    sideBySide: false,
	    minDate: new Date()
	});
}
//==============================================================================================================================================
function dataEmissao(campo){
	var dateTime = FLUIGC.calendar(campo, {
	    pickDate: true,
	    pickTime: false,
	    sideBySide: false,
	    maxDate: new Date()
	});
}
//==============================================================================================================================================
 function cteVinculado(){
	console.log("Entrou CTE")
	var cte = document.getElementById("CB_Cte").value
	var numero = document.getElementById("TX_NumeroOcCte")
	var botao = document.getElementById("BT_AnexoCte")
	if (cte == "1"){
		numero.disabled = false;
		numero.value = ""
		botao.disabled = false;
	} else {
		numero.disavled = true;
		botao.disabled = true;
	}
	ocutaCampoOCdoCTE()
}
//=================================================================
function ocutaCampoOCdoCTE(){
	console.log("Entrou número OC")
	if (document.getElementById("CB_Cte").value == 0){
		document.getElementById("CAMPOHIDDEN").style.display = "block"
		document.getElementById("CAMPOZOOM").style.display = "none"
	} else {
		document.getElementById("CAMPOHIDDEN").style.display = "none"
		document.getElementById("CAMPOZOOM").style.display = "block"
	}
}
//=================================================================
$("#TX_NumeroOcCte").ready(function() {
    ocutaCampoOCdoCTE()
})
//==============================================================================================================================================
function temBoleto(boleto, numero, botao){
	if (boleto == "1"){
		numero.disabled = false;
		botao.disabled = false;
	} else {
		numero.disabled = true;
		numero.value = "";
		botao.disabled = true;
	}
}
//==============================================================================================================================================
function ativaCamposJustificativaDaAprovacao(campo, textarea){
	if (campo == "2"){
		textarea.disabled = false;
	} else {
		textarea.disabled = true;
	}
}
//==============================================================================================================================================
function campoJustificaPostagem(campo, textarea){
	if (campo == "2"){
		textarea.disabled = false;
	} else {
		textarea.disabled = true;
		textarea.value = "";
	}
}
//==============================================================================================================================================
function designacaoAutomatica(){
	try{

        //ORDENAÇÃO SERÁ PELA QUANTIDADE
        var sortingFields = new Array("QUANTIDADE");

        //CAMPOS QUE DEVEM SER RETORNADOS
        var returnFields = new Array("QUANTIDADE", "CDMATRICULA")
        
	    var c1 = DatasetFactory.createConstraint("sqlLimit", "100", "100", ConstraintType.MUST);
		var constraints = new Array(c1);
        
		var dataset1 = DatasetFactory.getDataset("ds_atividades_fiscal", returnFields, constraints, sortingFields);

	    console.log("try 2: \n" + dataset1.values.length) 
	    
	    var quantResp = new Array([dataset1.values.length]+1)
	    var resp = new Array([dataset1.values.length]+1)
	    
	    console.log("Teste1")
	    quantResp[dataset1.values.length+1] = 9999999
	    
	    var i = 0
	    
	    do{
	    	quantResp[i] = dataset1.values[i]["QUANTIDADE"]
	    	if (parseInt(quantResp[i]) < parseInt(quantResp[dataset1.values.length+1])){
	    		quantResp[dataset1.values.length+1] = quantResp[i]
	    		resp[dataset1.values.length+1] = dataset1.values[i]["CDMATRICULA"]
	    	}
	    	
    	i++
	    }while (i<dataset1.values.length)
	    var chapafinal = resp[dataset1.values.length+1]
	    
	    console.log( "Responsável: " + chapafinal + "\n\n================================");
	    
	    // Parãmetro "Pool:Role" é uma string que o fluig utiliza para determinar o tipo de papel. 
	    
	    document.getElementById("CHAPATECNICO").value = chapafinal
	    
		return true
		
	}catch (e){
		console.log( e )
	}
}
//==============================================================================================================================================
function campoTipoNota(campo, valor1, valor2, textarea){
	
	var dataH = new Date();
	
	var parts = campo.value.split('/');
	// Please pay attention to the month (parts[1]); JavaScript counts months from 0:
	// January = 0, February = 1, etc.
	var ano = parts[2];
	
	//MÊS -1 pois o JS começa a contar do 0 e o campo traz começando do 1
	var mes = parseInt(parts[1])-1;
	if (mes < 10){
		mes = "0" + mes.toString();
	} else {
		mes = mes.toString();
	}
	
	//DIA +7 pois é o período fiscal de NFex
	var dia = parseInt(parts[0]);
	if (dia < 10){
		dia = "0" + dia.toString();
	} else {
		dia = dia.toString();
	}
	
	var mydate = new Date(ano, mes, dia, "00", "00", "00")
	var data = Math.abs(new Date().getTime() - mydate.getTime())
	var dias = Math.ceil(data / (1000 * 3600 * 24)) - 1


	if (document.getElementById("NUMEROATIVIDADE").value == "0" ||
			document.getElementById("NUMEROATIVIDADE").value == "4"){
		if (dias <= 7){
			valor1.checked = true;
			textarea.disabled = true;
			textarea.value = "";
			document.getElementById("TIPONOTA").value = "NORMAL";
			console.log("Normal");
	
			console.log(dias)
		} else{
			valor2.checked = true;
			textarea.disabled = false;
			document.getElementById("TIPONOTA").value = "NFEX";
			console.log("NFex");
	
			console.log(dias)
		}
	}
	
	var anoCorrente = new Date().getFullYear()

	if (dias > 7 && dias <= 30){
		document.getElementById("APROVANFEX").value = "LIDERANCAFISCAL"
		console.log("Liderança Fiscal")
	} else if (dias > 30 && ano == anoCorrente) {
		document.getElementById("APROVANFEX").value = "GERENCIAFISCAL"
		console.log("Gestor Fiscal")
	} else if (ano < anoCorrente){
		document.getElementById("APROVANFEX").value = "DIRETORIA"
		console.log("Diretoria")
	}
}
//==============================================================================================================================================
function validacaoAprovacaoGestor(){
	
			var prazo = true;
			console.log("Prazo: "+prazo)
			console.log(document.getElementById("TX_DataVencimentoBoleto"))
			var dataVencimento = document.getElementById("TX_DataVencimentoBoleto").value
			console.log("dataVencimento: "+dataVencimento)
			
			var parts = dataVencimento.split('/');
			var ano = parts[2];
			
			var mes = parseInt(parts[1])-1;
			if (mes < 10){
				mes = "0" + mes.toString();
			} else {
				mes = mes.toString();
			}
			
			var dia = parseInt(parts[0]);
			if (dia < 10){
				dia = "0" + dia.toString();
			} else {
				dia = dia.toString();
			}
			
			var mydate = new Date(ano, mes, dia, "00", "00", "00")
			

			var dataPostagem = Math.abs(new Date().getTime() - mydate.getTime())

			var dias = Math.ceil(dataPostagem / (1000 * 3600 * 24)) - 1

			var diaSemana = new Date().getDay()
			if ((diaSemana == 0 && dias < 5) || (diaSemana == 1 && dias < 4) ||
					(diaSemana == 2 && dias < 3) || (diaSemana == 3 && dias < 9) ||
						(diaSemana == 4 && dias < 8) || (diaSemana == 5 && dias < 7) ||
							(diaSemana == 6 && dias < 6) || (diaSemana == 7 && dias < 5)){//(diaSemana == 2 && dias < 3) =-= (diaSemana == 2 && dias < 12)
				prazo = true
				document.getElementById("DENTRO_PRAZO_APROV_GEST").value = "FORADOPRAZO"
			} else {
				prazo = false
				document.getElementById("DENTRO_PRAZO_APROV_GEST").value = "DENTRODOPRAZO"
			}
			console.log("prazo: "+prazo)
			 
			if (prazo){

				console.log("===============================: entrou :==============================================");
				
				FLUIGC.toast({
					title: 'Favor prorrogar o Boleto: ',
					message: 'O vencimento do boleto está fora do prazo de pagamento.',
					type: 'danger'
				});
			} else {
				console.log("===============================: Não entrou :==============================================");
			}
			
}