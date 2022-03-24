const AWS = require("aws-sdk");
const dynamoDb = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

exports.handler = function(error, context, callback) {
    let scanningParameters = {
        TableName: 'BrandData',
        Limit: 100
    };

    dynamoDb.scan(scanningParameters, function(err, data) {
        if(err){
            callback(err, null);
        }else{
            callback(null, data);
        }
    });

    // var params = {
    //     TableName: 'BrandData',
    //     Key: {
    //         "ParentCompany": "",
    //         "Manufacturer": ""
    //     }
    // }

    // dynamoDb.get(params, function(err, data){
    //     if(err){
    //         callback(err, null);
    //     }else{
    //         callback(null, data);
    //     }
    // })
}
