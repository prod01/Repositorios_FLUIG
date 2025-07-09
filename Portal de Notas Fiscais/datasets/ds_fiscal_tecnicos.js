function createDataset(fields, constraints, sortFields) {
    var newDataset = DatasetBuilder.newDataset();
    log.info("QUERY: " + myQuery);
    var dataSource = "/jdbc/Banco Fluig Teste";
    var ic = new javax.naming.InitialContext();
    var ds = ic.lookup(dataSource);
    var created = false;
    
    var myQuery = getQuery()
    	
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

function getQuery(){
	
	return "" +
	"SELECT *\
	\
	FROM\
	(SELECT LOGIN, USER_CODE\
	\
	FROM FDN_USERTENANT (NOLOCK)\
	\
	WHERE LOGIN IN (SELECT LOGIN\
						FROM FDN_USERROLE (NOLOCK)\
						WHERE ROLE_CODE = 'TriagemFiscal')) AS GRUPO\
	\
	\
	LEFT OUTER JOIN\
	\
	(SELECT TOP 1\
	TAR_PROCES.CD_MATRICULA\
	\
	FROM HISTOR_PROCES (NOLOCK)\
	\
	LEFT OUTER JOIN TAR_PROCES (NOLOCK)\
	ON (HISTOR_PROCES.NUM_PROCES = TAR_PROCES.NUM_PROCES AND HISTOR_PROCES.NUM_SEQ_MOVTO = TAR_PROCES.NUM_SEQ_MOVTO)\
	\
	WHERE HISTOR_PROCES.NUM_PROCES IN (SELECT\
							PROCES_WORKFLOW.NUM_PROCES\
	\
							FROM PROCES_WORKFLOW (NOLOCK)\
	\
							WHERE COD_DEF_PROCES = 'Portal de Notas Fiscais'\
							  AND STATUS <> 1)\
	  AND HISTOR_PROCES.NUM_SEQ_ESTADO = 35\
	  AND TAR_PROCES.NUM_SEQ_ESCOLHID = 0\
	\
	ORDER BY HISTOR_PROCES.NUM_PROCES DESC) AS USUARIO\
	\
	ON (GRUPO.USER_CODE = USUARIO.CD_MATRICULA)\
	\
	ORDER BY LOGIN ASC";

	
}