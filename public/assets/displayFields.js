function displayFields(form,customHTML){

	// WKNumState FLuig
	var activity = getValue('WKNumState');

	// WKNumProces Fluig
	var wkNumProcess = getValue("WKNumProces");

	// FormMode
	var formMode = form.getFormMode();

	// Append WKNumState e FORM_MODE 
	customHTML.append("<script>");
	customHTML.append("     function getWKNumState(){ return " + activity + "};");
	customHTML.append("\n 	let FORM_MODE	= 	'" + formMode 	+"';");
	customHTML.append("\n </script>");
	
	// Nome e Email do usuário logado
	var emailWKUser = ""
	var usuarioWKUser = getValue("WKUser");
	var constraintColleague1 = DatasetFactory.createConstraint('colleaguePK.colleagueId', usuarioWKUser, usuarioWKUser, ConstraintType.MUST);
	var datasetColleague = DatasetFactory.getDataset('colleague', null, new Array(constraintColleague1), null);

	if (datasetColleague.rowsCount > 0){
		emailWKUser = datasetColleague.getValue(0, 'mail');
		usuarioWKUser = datasetColleague.getValue(0, 'colleagueName');
	}
	
	// Atribui data e hora ao campo informado
	var today = new Date();
	var year = today.getFullYear();
	var month = (today.getMonth() + 1) < 10 ? '0' + (today.getMonth() + 1)	: (today.getMonth() + 1);
	var day = today.getDate() < 10 ? '0' + today.getDate() : today.getDate();	
	var hour = today.getHours() < 10 ? '0' + today.getHours() : today.getHours();
	var minute = today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes();
	var second = today.getSeconds() < 10 ? '0' + today.getSeconds() : today.getSeconds();
	var currentHour = hour + ":" + minute + ":" + second;
	var currentDate = day + '/' + month + '/' + year;
	var currentTime = currentDate + " - " + currentHour;


	/* modo visualização
	if (formMode == "VIEW"){
        form.setVisibleById("alertaTableCotacao", false);
        form.setVisibleById("alertaTableLancamento", false);
	}*/ 
	


    var ZERO = 0;
    var INICIO = 10;
    var CORRIGIR_SOLICITACAO = 59;
    var REALIZAR_COTACAO = 32;
    var ANALISE_GESTOR = 12;
    var ANALISE_FINANCEIRO = 44;
    var PRODUTO_PROTHEUS = 38;
    var CRIAR_PEDIDO_COMPRA = 14;
    var CADASTRAR_FORNECEDOR = 37;

	// início
	if (activity == ZERO || activity == INICIO){
		form.setValue("soli_data", currentDate);
		form.setValue("soli_nome", usuarioWKUser);
		form.setValue("soli_email", emailWKUser);
	}
	if (activity != ZERO || activity != INICIO){
        form.setValue("soli_numero", wkNumProcess);
    }

	// realizar cotação
	if (activity == 32){
		form.setValue("txt_cotacao_resp", usuarioWKUser);
		form.setValue("txt_cotacao_data", currentDate);
	}

	// análise solicitação de compra
	if (activity == ANALISE_GESTOR){
		form.setValue("txt_analise_compa_resp", usuarioWKUser);
		form.setValue("txt_analise_compa_data", currentDate);
	}

	/* aprovação financeira da compra */
	if (activity == ANALISE_FINANCEIRO){
		form.setValue("txt_aprov_finan_resp", usuarioWKUser);
		form.setValue("txt_aprov_finan_data", currentDate);
	}

	// criar pedido de compra
	if (activity == CRIAR_PEDIDO_COMPRA){
		form.setValue("txt_pedido_compra_resp", usuarioWKUser);
		form.setValue("txt_pedido_compra_data", currentDate);
	}

	// cadastrar fornecedor
	if (activity == CADASTRAR_FORNECEDOR){
		form.setValue("txt_cad_fornecedor_resp", usuarioWKUser);
		form.setValue("txt_cad_fornecedor_data", currentDate);
	}

}