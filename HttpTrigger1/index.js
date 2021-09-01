module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const testArr = {
        "data": [{
          "type": "articles",
          "id": "1",
          "attributes": {
            "title": "JSON:API paints my bikeshed!",
            "body": "The shortest article. Ever."
          },
          "relationships": {
            "author": {
              "data": {"id": "42", "type": "people"}
            }
          }
        }],
        "included": [
          {
            "type": "people",
            "id": "42",
            "attributes": {
              "name": "John"
            }
          }
        ]
      }

    const responseMessage = testArr
        // ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        // : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}