var AWS = require("aws-sdk");
var fs = require('fs');

AWS.config.update({
    region: "us-west-2",
    endpoint: "https://dynamodb.us-west-2.amazonaws.com"
});

var docClient = new AWS.DynamoDB.DocumentClient();

console.log("Importing users into DynamoDB. Please wait.");

var allUsers = JSON.parse(fs.readFileSync('userdata.json', 'utf8'));
allUsers.forEach(function(user) {
    var params = {
        TableName: "Users",
        Item: {
            "number":  user.number,
            "username": user.username,
            "info":  user.info
        }
    };

    docClient.put(params, function(err, data) {
       if (err) {
           console.error("Unable to add Users", user.username, ". Error JSON:", JSON.stringify(err, null, 2));
       } else {
           console.log("PutItem succeeded:", user.username);
       }
    });
});
