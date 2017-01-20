// get count for all collections
db.system.js.save(
    {
        _id: "collectionCount",
        value : function() 
        { 
            var colls = db.getCollectionNames()
            for(var i=0; i < colls.length; i++)
            {
                var collName = colls[i];
                if(collName.substr(0, 6) != 'system')
                {
                    print(collName + ' - ' + db[collName].count() )
                }
            }
        }
    }
)

//print all collections with their respective dbs.
db.system.js.save(
{
	_id:"printAllCollections",
	value:function()
	{
		var dbs = db.adminCommand('listDatabases');
		for(i=0; i < dbs.databases.length; i++)
		{
			mydb = dbs['databases'][i]['name'];
			mydbcon = db.getSiblingDB(mydb)
			var colls = mydbcon.getCollectionNames()
			for(var j=0; j < colls.length; j++)
			{
				print(mydb + ' - ' + colls[j])
			}
		}
	}
})