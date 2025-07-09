function createDataset(fields, constraints, sortFields) {
    var newDataset = DatasetBuilder.newDataset();
    log.info("QUERY: " + myQuery);
    var dataSource = "/jdbc/Banco RM";
    var ic = new javax.naming.InitialContext();
    var ds = ic.lookup(dataSource);
    var created = false;

    var OBJETODEMANUTENCAO = "%"
		if (constraints != null){
			for (var i = 0; i < constraints.length; i++) {
				log.info("const " + i + "------");
				log.info("Chave " + i + ": " + constraints[i].fieldName);
				log.info("Valor " + i + ": " + constraints[i].initialValue);
	
				if (constraints[i].fieldName == "IDOBJOF") {
					OBJETODEMANUTENCAO = constraints[i].initialValue;
				}
			}
		}
    
    var myQuery = getQuery(OBJETODEMANUTENCAO);
    	
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
                    Arr[i - 1] = "NÃO PREENCHIDO NO TOTVS";
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

function getQuery(OBJETODEMANUTENCAO){
	
	return "" +
	"SELECT\
	\
	OFOBJOFICINA.CODCOLIGADA,\
	OFOBJOFICINA.IDOBJOF,\
	OFOBJOFICINA.USAINDICADORUSO5,\
	OFOBJOFICINA.CHAPARESP,\
	OFOBJOFICINA.IDOBJOF2 AS SERIE,\
	OFOBJOFICINA.STATUS AS CODSTATUS,\
	OFSTATUSEQP.DESCRICAO AS STATUS,\
	OFOBJOFICINA.CODMODELO AS CODMODELO,\
	OFMODELO.MODELO,\
	OFOBJOFICINA.CODSUBMODELO,\
	OFSUBMODELO.DESCRICAO AS SUBMODELO,\
	OFOBJOFICINA.IDTIPOOBJ AS CODTIPOOBJ,\
	OFTIPOOBJ.DESCRICAO AS TIPOOBJ,\
	OFMODELO.CODFAB AS CODFABRICANTE,\
	TFAB.NOME AS FABRICANTE,\
	OFOBJOFICINA.CODFILIAL AS CODFILIAL,\
	GFILIAL.NOME AS FILIAL,\
	OFOBJOFICINA.CODCFO,\
	\
	OFOBJOFICINA.CODCCUSTO AS CODCENTRODECUSTO,\
	GCCUSTO.NOME AS CENTRODECUSTO,\
	\
	OFOBJOFICINA.CODLOCAL AS CODLOCALIZACAO,\
	ILOCAL.NOME AS LOCALIZACAO,\
	\
	GDEPTO.CODDEPARTAMENTO AS CODDEPARTAMENTO,\
	GDEPTO.NOME AS DEPARTAMENTO,\
	\
	OFHISTINDICADOR.IDHISTINDICADOR AS IDHORIMETRO,\
	OFHISTINDICADOR.DATACOLETA AS DATACOLETA,\
	OFHISTINDICADOR.VALORMEDIDOR1 AS HOTRIMETRO,\
	OFHISTINDICADOR.VALORMEDIDOR1 + (DATEDIFF(HOUR, OFHISTINDICADOR.DATACOLETA, GETDATE())) AS HORASMAXIMAS,\
	\
	ISNULL((SELECT CASE\
                 WHEN ( IDOBJOF LIKE '%TCR%'\
                         OR IDOBJOF LIKE '%TPE%'\
                         OR IDOBJOF LIKE '%AGR%'\
                         OR IDOBJOF LIKE '%TPG%'\
                         OR IDOBJOF LIKE '%TLA%'\
                         OR IDOBJOF LIKE '%TGG%' ) THEN LEFT(CONVERT(VARCHAR, DATACRIACAO, 120), 10)\
                 ELSE CAMPOLIVRE3\
               END\
        FROM   TMOV (NOLOCK)\
        WHERE  IDMOV = (SELECT MAX(IDMOV)\
                        FROM   TMOV (NOLOCK)\
                        WHERE  OFOBJOFICINA.CODCOLIGADA = TMOV.CODCOLIGADA\
                               AND OFOBJOFICINA.IDOBJOF = TMOV.IDOBJOF\
                               AND TMOV.CODTMV = '1.1.22'\
                               AND TMOV.STATUS <> 'C')),0)    AS ULTIMO_VENCIMENTO\
	\
	\
	FROM (SELECT USAINDICADORUSO5,CHAPARESP,IDOBJOF2,STATUS,CODSUBMODELO,IDTIPOOBJ,CODFILIAL,CODCFO,CODCCUSTO,CODLOCAL,CODCOLIGADA,IDOBJOF,CODMODELO FROM OFOBJOFICINA (NOLOCK)) OFOBJOFICINA\
	\
	LEFT OUTER JOIN (SELECT CODCOLIGADA,CODFILIAL,NOME FROM GFILIAL (NOLOCK)) AS GFILIAL\
	ON (OFOBJOFICINA.CODCOLIGADA = GFILIAL.CODCOLIGADA AND OFOBJOFICINA.CODFILIAL = GFILIAL.CODFILIAL)\
	\
	LEFT OUTER JOIN IPATRIMONIO (NOLOCK)\
	ON (OFOBJOFICINA.CODCOLIGADA = IPATRIMONIO.CODCOLIGADA AND OFOBJOFICINA.IDOBJOF = IPATRIMONIO.PATRIMONIO)\
	\
	LEFT OUTER JOIN (SELECT CODCOLIGADA,CODFILIAL,NOME,CODDEPARTAMENTO FROM GDEPTO (NOLOCK)) AS  GDEPTO \
	ON (IPATRIMONIO.CODCOLIGADADEPARTAMENTO = GDEPTO.CODCOLIGADA AND IPATRIMONIO.CODFILIAL = GDEPTO.CODFILIAL AND IPATRIMONIO.CODDEPARTAMENTO = GDEPTO.CODDEPARTAMENTO)\
	\
	LEFT OUTER JOIN (SELECT CODCOLIGADA,CODCCUSTO,NOME FROM GCCUSTO (NOLOCK)) GCCUSTO\
	ON (IPATRIMONIO.CODCOLIGADA = GCCUSTO.CODCOLIGADA AND IPATRIMONIO.CODCENTROCUSTO = GCCUSTO.CODCCUSTO)\
	\
	LEFT OUTER JOIN (SELECT CODCOLIGADA,CODLOCAL,NOME FROM ILOCAL (NOLOCK)) ILOCAL\
	ON (IPATRIMONIO.CODCOLIGADA = ILOCAL.CODCOLIGADA AND IPATRIMONIO.CODLOCAL = ILOCAL.CODLOCAL)\
	\
	LEFT OUTER JOIN (SELECT CODCOLIGADA,CODSTATUS,DESCRICAO FROM OFSTATUSEQP (NOLOCK)) OFSTATUSEQP\
	ON (OFOBJOFICINA.CODCOLIGADA = OFSTATUSEQP.CODCOLIGADA AND OFOBJOFICINA.STATUS = OFSTATUSEQP.CODSTATUS)\
	\
	LEFT OUTER JOIN (SELECT IDTIPOOBJ,DESCRICAO FROM OFTIPOOBJ (NOLOCK)) OFTIPOOBJ\
	ON (OFOBJOFICINA.IDTIPOOBJ = OFTIPOOBJ.IDTIPOOBJ)\
	\
	LEFT OUTER JOIN (SELECT IDTIPOOBJ,CODMODELO,CODFAB,CODCOLFAB,MODELO FROM OFMODELO (NOLOCK)) OFMODELO\
	ON (OFOBJOFICINA.IDTIPOOBJ = OFMODELO.IDTIPOOBJ AND OFOBJOFICINA.CODMODELO = OFMODELO.CODMODELO)\
	\
	LEFT OUTER JOIN (SELECT IDTIPOOBJ,CODMODELO,CODSUBMODELO,DESCRICAO FROM OFSUBMODELO (NOLOCK)) OFSUBMODELO\
	ON (OFOBJOFICINA.IDTIPOOBJ = OFSUBMODELO.IDTIPOOBJ AND OFOBJOFICINA.CODMODELO = OFSUBMODELO.CODMODELO AND OFOBJOFICINA.CODSUBMODELO = OFSUBMODELO.CODSUBMODELO)\
	\
	LEFT OUTER JOIN (SELECT CODCOLIGADA,CODFAB,NOME FROM TFAB (NOLOCK)) TFAB\
	ON (OFMODELO.CODCOLFAB = TFAB.CODCOLIGADA AND OFMODELO.CODFAB = TFAB.CODFAB)\
	\
	LEFT OUTER JOIN (SELECT MAX(IDHISTINDICADOR) AS ID,IDOBJOF FROM OFHISTINDICADOR (NOLOCK) WHERE OFHISTINDICADOR.CODCOLIGADA = 1 GROUP BY IDOBJOF) AS HORIMETRO\
	 \
	 ON (OFOBJOFICINA.IDOBJOF = HORIMETRO.IDOBJOF AND OFOBJOFICINA.CODCOLIGADA = 1)\
	 \
	 LEFT OUTER JOIN (SELECT IDOBJOF, DATACOLETA, VALORMEDIDOR1,IDHISTINDICADOR FROM OFHISTINDICADOR (NOLOCK) ) AS OFHISTINDICADOR\
	 \
	 ON (OFOBJOFICINA.IDOBJOF = HORIMETRO.IDOBJOF  AND  OFHISTINDICADOR.IDHISTINDICADOR = HORIMETRO.ID)\
	 \
	 LEFT OUTER JOIN PFUNC (NOLOCK)\
	 ON OFOBJOFICINA.CHAPARESP = PFUNC.CHAPA\
	 \
	 WHERE OFOBJOFICINA.STATUS NOT IN ('6', '9')\
	 AND PFUNC.CODSITUACAO <> 'D'\
	 AND OFOBJOFICINA.IDOBJOF LIKE '"+OBJETODEMANUTENCAO+"'";
}

function defineStructure() {
	addColumn("CODCOLIGADA", DatasetFieldType.STRING);
	addColumn("IDOBJOF", DatasetFieldType.STRING);
	addColumn("USAINDICADORUSO5", DatasetFieldType.STRING);
	addColumn("CHAPARESP", DatasetFieldType.STRING);
	addColumn("SERIE", DatasetFieldType.STRING);
	addColumn("CODSTATUS", DatasetFieldType.STRING);
	addColumn("STATUS", DatasetFieldType.STRING);
	addColumn("CODMODELO", DatasetFieldType.STRING);
	addColumn("MODELO", DatasetFieldType.STRING);
	addColumn("CODSUBMODELO", DatasetFieldType.STRING);
	addColumn("SUBMODELO", DatasetFieldType.STRING);
	addColumn("CODTIPOOBJ", DatasetFieldType.STRING);
	addColumn("TIPOOBJ", DatasetFieldType.STRING);
	addColumn("CODFABRICANTE", DatasetFieldType.STRING);
	addColumn("FABRICANTE", DatasetFieldType.STRING);
	addColumn("CODFILIAL", DatasetFieldType.STRING);
	addColumn("FILIAL", DatasetFieldType.STRING);
	addColumn("CODCFO", DatasetFieldType.STRING);
	addColumn("CODCENTRODECUSTO", DatasetFieldType.STRING);
	addColumn("CENTRODECUSTO", DatasetFieldType.STRING);
	addColumn("CODLOCALIZACAO", DatasetFieldType.STRING);
	addColumn("LOCALIZACAO", DatasetFieldType.STRING);
	addColumn("CODDEPARTAMENTO", DatasetFieldType.STRING);
	addColumn("DEPARTAMENTO", DatasetFieldType.STRING);
	addColumn("IDHORIMETRO", DatasetFieldType.STRING);
	addColumn("DATACOLETA", DatasetFieldType.STRING);
	addColumn("HOTRIMETRO", DatasetFieldType.STRING);
	addColumn("HORASMAXIMAS", DatasetFieldType.STRING);
	addColumn("ULTIMO_VENCIMENTO", DatasetFieldType.STRING);
}