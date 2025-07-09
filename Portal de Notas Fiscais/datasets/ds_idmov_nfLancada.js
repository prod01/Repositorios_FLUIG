function createDataset(fields, constraints, sortFields) {
    var newDataset = DatasetBuilder.newDataset();
    log.info("QUERY: " + myQuery);
    var dataSource = "/jdbc/Banco RM";
    var ic = new javax.naming.InitialContext();
    var ds = ic.lookup(dataSource);
    var created = false;

    var IDMOV = "%"
		
		for (var i = 0; i < constraints.length; i++) {
			log.info("const " + i + "------");
			log.info("Chave " + i + ": " + constraints[i].fieldName);
			log.info("Valor " + i + ": " + constraints[i].initialValue);

			if (constraints[i].fieldName == "IDMOV") {
				IDMOV = constraints[i].initialValue;
			}
		}
    
    var myQuery = getQuery(IDMOV)
    	
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

function getQuery(IDMOV){
	
	return "" +
	" SELECT TOP 10 IDMOV, CODFILIAL, CODCOLIGADA"+
	" FROM TMOV (NOLOCK)"+
	" WHERE CODCOLIGADA IN (1, 3)"+
	" 	AND CODTMV IN ('1.2.01','1.2.02','1.2.04','1.2.05','1.2.06','1.2.07','1.2.09','1.2.10','1.2.11','1.2.13','1.2.14','1.2.15','1.2.31','1.2.32',"+
	"	'1.2.33','1.2.34','1.2.35','1.2.36','1.2.37','1.2.38','1.2.39','1.2.40','1.2.41','1.2.42','1.2.43','1.2.44','1.2.46','1.2.47','1.2.48','3.1.03')"+
	"	AND IDMOV LIKE '%"+IDMOV+"%'"+
	" ORDER BY IDMOV";
	
}