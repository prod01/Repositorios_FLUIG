function createDataset(fields, constraints, sortFields) {
    var newDataset = DatasetBuilder.newDataset();
    log.info("QUERY: " + myQuery);
    var dataSource = "/jdbc/Banco RM";
    var ic = new javax.naming.InitialContext();
    var ds = ic.lookup(dataSource);
    var created = false;

    var NOMESOLICITANTE = "%"
		
		for (var i = 0; i < constraints.length; i++) {
			log.info("const " + i + "------");
			log.info("Chave " + i + ": " + constraints[i].fieldName);
			log.info("Valor " + i + ": " + constraints[i].initialValue);

			if (constraints[i].fieldName == "NOMESOLICITANTE") {
				NOMESOLICITANTE = constraints[i].initialValue;
			}
		}
    
    var myQuery = getQuery(NOMESOLICITANTE)
    	
    try {
        var conn = ds.getConnection();
        var stmt = conn.createStatement();
        var rs = stmt.executeQuery(myQuery);
        var columnCount = rs.getMetaData().getColumnCount();
        while (rs.next()) {
            if (!created) {
            	var i = 1
            	do{

                    newDataset.addColumn(rs.getMetaData().getColumnName(i));

                i++
            	} while (i <= columnCount)
                created = true;
            }
            var Arr = new Array();
            var i = 1
            do{

                var obj = rs.getObject(rs.getMetaData().getColumnName(i));
                if (null != obj) {
                    Arr[i - 1] = rs.getObject(rs.getMetaData().getColumnName(i)).toString();
                } else {
                    Arr[i - 1] = "null";
                }
                
            i++
            } while (i <= columnCount)
            newDataset.addRow(Arr);
        }
    } catch (e) {
        log.error("ERRO==============> " + e.message);
    } finally {
        if (rs != null) {
            rs.close();
        }
        if (stmt != null) {
            stmt.close();
        }
        if (conn != null) {
            conn.close();
        }
    }
    return newDataset;
}

function getQuery(NOMESOLICITANTE){
	
	return "" +
	" SELECT TOP 10"+
	" PPESSOA.NOME AS NOMESOLICITANTE,"+
	" PFUNC.CHAPA,"+
	" PFUNC.CODSECAO,"+
	" GCCUSTO.NOME AS NOME_CODCCUSTO,"+
	" RESPONSAVEL.NOME AS NOME_RESP,"+
	" FUNCRESPONSAVEL.CHAPA AS CHAPA_RESP"+
	

	" FROM  PFUNC (NOLOCK)"+
	" LEFT OUTER JOIN PPESSOA (NOLOCK)"+
	" ON PFUNC.CODPESSOA = PPESSOA.CODIGO"+

	" LEFT OUTER JOIN PSECAO (NOLOCK)"+
	" ON PFUNC.CODSECAO = PSECAO.CODIGO"+
	" AND PFUNC.CODCOLIGADA = PSECAO.CODCOLIGADA"+
	
	" LEFT OUTER JOIN GCCUSTO (NOLOCK)" +
	" ON (PSECAO.CODCOLIGADA = GCCUSTO.CODCOLIGADA"+
	" AND PSECAO.NROCENCUSTOCONT = GCCUSTO.CODCCUSTO)"+

	" LEFT OUTER JOIN PPESSOA AS RESPONSAVEL (NOLOCK)" +
	" ON GCCUSTO.RESPONSAVEL = RESPONSAVEL.CODIGO"+
	
	
	" LEFT OUTER JOIN PFUNC AS FUNCRESPONSAVEL (NOLOCK)" +
	" ON FUNCRESPONSAVEL.CODPESSOA = RESPONSAVEL.CODIGO AND FUNCRESPONSAVEL.CODSITUACAO <> 'D' "+

	" WHERE PFUNC.CODSITUACAO <> 'D' "+
	" AND PPESSOA.NOME LIKE  '%" + NOMESOLICITANTE + "%' "
	
}