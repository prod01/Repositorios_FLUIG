function createDataset(fields, constraints, sortFields) {
    var newDataset = DatasetBuilder.newDataset();
    log.info("QUERY: " + myQuery);
    var dataSource = "/jdbc/Banco RM";
    var ic = new javax.naming.InitialContext();
    var ds = ic.lookup(dataSource);
    var created = false;

    var CCUSTO = "%"
		
		for (var i = 0; i < constraints.length; i++) {
			log.info("const " + i + "------");
			log.info("Chave " + i + ": " + constraints[i].fieldName);
			log.info("Valor " + i + ": " + constraints[i].initialValue);

			if (constraints[i].fieldName == "CCUSTO") {
				CCUSTO = constraints[i].initialValue;
			}
		}
    
    var myQuery = getQuery(CCUSTO)
    	
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

function getQuery( CCUSTO ){
	
	return "" +
		"SELECT TOP 10\
		(GCCUSTO.CODCCUSTO +'  -  '+GCCUSTO.NOME) AS CCUSTO,\
		GCCUSTO.CODCCUSTO,\
		GCCUSTO.RESPONSAVEL,\
		PPESSOA.NOME,\
		PPESSOA.EMAIL\
		FROM GCCUSTO (NOLOCK)\
		\
		LEFT OUTER JOIN PPESSOA  (NOLOCK)\
		ON GCCUSTO.RESPONSAVEL = PPESSOA.CODIGO\
		\
		LEFT OUTER JOIN LnkSrv_Fluig.Fluig.dbo.FDN_USERTENANT AS FDN_USERTENANT (NOLOCK)\
		ON (FDN_USERTENANT.USER_CODE COLLATE Latin1_General_CS_AS = PPESSOA.CODUSUARIO COLLATE Latin1_General_CS_AS )\
		\
		WHERE LEN(GCCUSTO.CODCCUSTO) > 11\
		AND GCCUSTO.CODCOLIGADA = 1\
		AND (GCCUSTO.CODCCUSTO + GCCUSTO.NOME )LIKE '%"+ CCUSTO +"%'";
}