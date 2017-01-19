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