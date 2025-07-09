function createDataset(fields, constraints, sortFields) {
    var newDataset = DatasetBuilder.newDataset();
    log.info("QUERY: " + myQuery);
    var dataSource = "/jdbc/Banco RM Teste";
    var ic = new javax.naming.InitialContext();
    var ds = ic.lookup(dataSource);
    var created = false;

    var IDOBJOF = "%"
		
		for (var i = 0; i < constraints.length; i++) {
			log.info("const " + i + "------");
			log.info("Chave " + i + ": " + constraints[i].fieldName);
			log.info("Valor " + i + ": " + constraints[i].initialValue);

			if (constraints[i].fieldName == "IDOBJOF") {
				IDOBJOF = constraints[i].initialValue;
			}
		}
    
    var myQuery = getQuery(IDOBJOF)
    	
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

function getQuery( IDOBJOF ){
	
	return "" +
		"SELECT TOP 10\
		OFOBJOFICINA.IDOBJOF AS IDOBJOF,\
		OFOBJOFICINA.IDTIPOOBJ,\
		TFAB.NOME AS CODFAB,\
		OFOBJOFICINA.ESTADOCONSERVACAO,\
		OFHISTINDICADOR.IDHISTINDICADOR,\
		OFOBJOFICINA.QTDEREFORMA,\
		OFOBJOFICINA.CODSUBMODELO\
		\
		FROM OFOBJOFICINA (NOLOCK)\
		\
		LEFT OUTER JOIN OFMODELO (NOLOCK)\
		ON OFOBJOFICINA.IDTIPOOBJ =  OFMODELO.IDTIPOOBJ\
		AND OFOBJOFICINA.CODMODELO =   OFMODELO.CODMODELO\
		\
		LEFT OUTER JOIN TFAB (NOLOCK)\
		ON TFAB.CODCOLIGADA =  OFMODELO.CODCOLFAB\
		AND TFAB.CODFAB = OFMODELO.CODFAB\
		\
		LEFT OUTER JOIN (SELECT CODCOLIGADA, IDOBJOF, MAX(IDHISTINDICADOR) AS IDHISTINDICADOR FROM OFHISTINDICADOR (NOLOCK) GROUP BY CODCOLIGADA, IDOBJOF) AS OFHISTINDICADOR\
		ON OFOBJOFICINA.CODCOLIGADA = OFHISTINDICADOR.CODCOLIGADA\
		AND OFOBJOFICINA.IDOBJOF = OFHISTINDICADOR.IDOBJOF\
		\
		WHERE OFOBJOFICINA.IDTIPOOBJ IN ('23','24','25','26','36','50','58')\
		AND OFOBJOFICINA.ESTADOCONSERVACAO <> 'S'\
		AND  OFOBJOFICINA.IDOBJOF LIKE '%"+ IDOBJOF +"%'\
		ORDER BY OFHISTINDICADOR.IDHISTINDICADOR DESC";
}