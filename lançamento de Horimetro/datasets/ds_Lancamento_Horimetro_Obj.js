function createDataset(fields, constraints, sortFields) {
    var newDataset = DatasetBuilder.newDataset();
    log.info("QUERY: " + myQuery);
    var dataSource = "/jdbc/Banco RM";
    var ic = new javax.naming.InitialContext();
    var ds = ic.lookup(dataSource);
    var created = false;

    var OBJETO = "%"
	if (constraints != null){
		for (var i = 0; i < constraints.length; i++) {
			log.info("const " + i + "------");
			log.info("Chave " + i + ": " + constraints[i].fieldName);
			log.info("Valor " + i + ": " + constraints[i].initialValue);

			if (constraints[i].fieldName == "OBJ") {
				OBJETO = constraints[i].initialValue;
			}
		}
	}
    
    var myQuery = getQuery(OBJETO)
    	
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

function getQuery(OBJETO){
	
	return "" +
	"SELECT TOP 1\
	ID,\
	OBJ,\
	DATACOLETA,\
	VALORMEDIDOR1,\
	VALORMEDIDOR1 + (DATEDIFF(HOUR, DATACOLETA, GETDATE())) AS HORASMAXIMAS,\
	USAINDICADORUSO5\
	\
	FROM\
		(SELECT\
			MAX(OFHISTINDICADOR.IDHISTINDICADOR) AS ID,\
			OFHISTINDICADOR.IDOBJOF AS OBJ,\
			MAX(DATACOLETA) AS DATACOLETA,\
			MAX(VALORMEDIDOR1) AS VALORMEDIDOR1,\
			OFOBJOFICINA.USAINDICADORUSO5\
	\
			FROM OFHISTINDICADOR (NOLOCK)\
	\
			LEFT JOIN OFOBJOFICINA (NOLOCK)\
			ON (OFHISTINDICADOR.CODCOLIGADA = OFOBJOFICINA.CODCOLIGADA AND OFHISTINDICADOR.IDOBJOF = OFOBJOFICINA.IDOBJOF)\
	\
			WHERE OFHISTINDICADOR.CODCOLIGADA = 1\
				AND OFHISTINDICADOR.IDOBJOF LIKE '%"+OBJETO+"%'\
	\
			GROUP BY OFHISTINDICADOR.IDOBJOF, OFHISTINDICADOR.IDHISTINDICADOR, DATACOLETA, VALORMEDIDOR1, OFOBJOFICINA.USAINDICADORUSO5\
	) AS HORIMETRO\
	\
	ORDER BY DATACOLETA DESC";
	
}