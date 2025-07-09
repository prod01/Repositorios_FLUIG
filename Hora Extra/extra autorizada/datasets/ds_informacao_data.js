function createDataset(fields, constraints, sortFields) {
    var newDataset = DatasetBuilder.newDataset();
    log.info("QUERY: " + myQuery);
    var dataSource = "/jdbc/Banco RM";
    var ic = new javax.naming.InitialContext();
    var ds = ic.lookup(dataSource);
    var created = false;

    var DATA_EXTRA= "%"
    var CHAPA = "%"
    		
    		for (var i = 0; i < constraints.length; i++) {
    			log.info("const " + i + "------");
    			log.info("Chave " + i + ": " + constraints[i].fieldName);
    			log.info("Valor " + i + ": " + constraints[i].initialValue);

    			if (constraints[i].fieldName == "DATA_EXTRA") {
    				DATA_EXTRA = constraints[i].initialValue;
    			}
    			
    			if (constraints[i].fieldName == "CHAPA") {
    				CHAPA = constraints[i].initialValue;
    			}
    		}

        
        var myQuery = getQuery(DATA_EXTRA, CHAPA)
    	
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

function getQuery(DATA_EXTRA, CHAPA){
	
	return "" +
	" SELECT TOP 10" +
	" CHAPA,"+
	" CAST (DATA AS date) AS DATA"+

	" FROM AEAUTFUN (NOLOCK)"+

	" WHERE DATA = '" + DATA_EXTRA + "'"+
	" AND CHAPA =  '" + CHAPA + "'"
}