function createDataset(fields, constraints, sortFields) {
    var newDataset = DatasetBuilder.newDataset();
    log.info("QUERY: " + myQuery);
    var dataSource = "/jdbc/Banco RM";
    var ic = new javax.naming.InitialContext();
    var ds = ic.lookup(dataSource);
    var created = false;

    var CENTRO_DE_CUSTO = "%"
		
		for (var i = 0; i < constraints.length; i++) {
			log.info("const " + i + "------");
			log.info("Chave " + i + ": " + constraints[i].fieldName);
			log.info("Valor " + i + ": " + constraints[i].initialValue);

			if (constraints[i].fieldName == "CENTRO_DE_CUSTO") {
				CENTRO_DE_CUSTO = constraints[i].initialValue;
			}
		}
    
    var myQuery = getQuery(CENTRO_DE_CUSTO)
    	
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

function getQuery(CENTRO_DE_CUSTO){
	
	return "" +
	" SELECT TOP 10"+
	" (GCCUSTO.CODCCUSTO + '  -  ' + GCCUSTO.NOME) AS CENTRO_DE_CUSTO,"+
	" GCCUSTO.RESPONSAVEL,"+
	" PPESSOA.CODIGO,"+
	" PPESSOA.NOME AS NOME_RESP"+

	" FROM GCCUSTO (NOLOCK)"+
	" LEFT OUTER JOIN PPESSOA (NOLOCK)"+
	" ON GCCUSTO.RESPONSAVEL = PPESSOA.CODIGO"+
//	" AND GCCUSTO.CODCOLIGADA = PPESSOA.CODCOLIGADA"+
	
	" WHERE(GCCUSTO.CODCCUSTO +'  -  '+GCCUSTO.NOME)  LIKE '%" + CENTRO_DE_CUSTO + "%'" +
	" AND GCCUSTO.CODCOLIGADA = 1"
	
	
}