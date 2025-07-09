function resolve(process,colleague){
	
	var isTransfer = getValue("WKIsTransfer");
	
	var userList = new java.util.ArrayList();
	var indice = 0;

	var roles = DatasetFactory.getDataset("ds_fiscal_tecnicos", null, null, null);
	
	if (isTransfer !== null) {
        if (!JSON.parse(isTransfer)) {
            for(var i = 0; i < roles.values.length; i++) {
            	if (roles.getValue(i, "CD_MATRICULA") != "null"){
            		indice = i+1 >= roles.values.length ? 0 : i+1;
            		userList.add(roles.getValue(indice, "USER_CODE"));
            		return userList;
            	}
            }
            userList.add(roles.getValue(0, "USER_CODE"))
            
    		return userList;
        } else {
        	for(var i = 0; i < roles.values.length; i++) {
        		userList.add(roles.getValue(i, "USER_CODE"));
            }
        	return userList;
        }
    }
	
}