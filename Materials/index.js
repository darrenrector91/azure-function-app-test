module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = {
        "materials":[
            {
              MaterialID: "101",
              Mfr: "Armstrong",
              MatType: "Adhesive",
              SubType: "Accessories",
              StyleNum: "S-515",
              StyleName: "Clear Thin Spread VCT Adhesive",
              ColorNum: "",
              ColorName: "",
              Size: "",
              Len: "", 
              Wdth: "",
              Ct: "1",
              UOM: "Gallon",
              Cover: "300 SQ FT",
              Options: ""
            },
            {
              MaterialID: "102",
              Mfr: "Armstrong",
              MatType: "Adhesive",
              SubType: "Accessories",
              StyleNum: "S-515",
              StyleName: "Clear Thin Spread VCT Adhesive",
              ColorNum: "",
              ColorName: "",
              Size: "",
              Len: "",
              Wdth: "",
              Ct: "4",
              UOM: "Gallon",
              Cover: "1200 SQ FT",
              Options: ""
            },
            {
              MaterialID: "31",
              Mfr: "Shaw",
              MatType: "Carpet",
              SubType: "Broadloom",
              StyleNum: "60737",
              StyleName: "Cadence",
              ColorNum: "37400",
              ColorName: "Timeless",
              Size: "12' 0''",
              Len: "",
              Wdth: "",
              Ct: "",
              UOM: "",
              Cover: "",
              Options: ""
            },
            {
              MaterialID: "36",
              Mfr: "Mannington",
              MatType: "Carpet",
              SubType: "Broadloom",
              StyleNum: "",
              StyleName: "Mesh",
              ColorNum: "35216",
              ColorName: "Ward",
              Size: "12' 6''",
              Len: "",
              Wdth: "",
              Ct: "",
              UOM: "",
              Cover: "",
              Options: ""
            },
            {
              MaterialID: "68",
              Mfr: "Milliken",
              MatType: "Carpet",
              SubType: "Broadloom",
              StyleNum: "",
              StyleName: "Chivalry",
              ColorNum: "3308",
              ColorName: "",
              Size: "13' 6''",
              Len: "",
              Wdth: "",
              Ct: "",
              UOM: "",
              Cover: "",
              Options: ""
            },
            {
              MaterialID: "100",
              Mfr: "Altro USA",
              MatType: "Carpet",
              SubType: "Broadloom",
              StyleNum: "n56hj53",
              StyleName: "Starry Night",
              ColorNum: "h564h6",
              ColorName: "Midnight Black",
              Size: "12' 0''",
              Len: "",
              Wdth: "",
              Ct: "",
              UOM: "",
              Cover: "",
              Options: ""
            },
            {
              MaterialID: "78",
              Mfr: "Patcraft",
              MatType: "Carpet",
              SubType: "Tile",
              StyleNum: "10579",
              StyleName: "Vaporous",
              ColorNum: "450",
              ColorName: "Laguna",
              Size: "",
              Len: "24.00",
              Wdth: "24.00",
              Ct: "",
              UOM: "",
              Cover: "",
              Options: ""
            },
            {
              MaterialID: "83",
              Mfr: "Shaw",
              MatType: "Carpet",
              SubType: "Tile",
              StyleNum: "5T388",
              StyleName: "Elevate",
              ColorNum: "88485",
              ColorName: "Deep Sky",
              Size: "",
              Len: "24.00",
              Wdth: "24.00",
              Ct: "",
              UOM: "",
              Cover: "",
              Options: ""
            },
            {
              MaterialID: "90",
              Mfr: "Milliken",
              MatType: "Carpet",
              SubType: "Tile",
              StyleNum: "",
              StyleName: "Backbeat",
              ColorNum: "BKB107",
              ColorName: "Overdub",
              Size: "",
              Len: "39.40",
              Wdth: "39.40",
              Ct: "",
              UOM: "",
              Cover: "",
              Options: ""
            },
            {
              MaterialID: "97",
              Mfr: "Mannington",
              MatType: "Carpet",
              SubType: "Tile",
              StyleNum: "",
              StyleName: "Flow",
              ColorNum: "15844",
              ColorName: "Stream",
              Size: "",
              Len: "18.00",
              Wdth: "36.00",
              Ct: "",
              UOM: "",
              Cover: "",
              Options: ""
            },
            {
              MaterialID: "94",
              Mfr: "Armstrong",
              MatType: "Resilient",
              SubType: "VCT",
              StyleNum: "",
              StyleName: "Imperial Texture",
              ColorNum: "51911",
              ColorName: "Classic White",
              Size: "",
              Len: "12.00",
              Wdth: "12.00",
              Ct: "",
              UOM: "",
              Cover: "",
              Options: ""
            },
            {
              MaterialID: "95",
              Mfr: "Armstrong",
              MatType: "Resilient",
              SubType: "VCT",
              StyleNum: "",
              StyleName: "Feature Strip",
              ColorNum: "50812",
              ColorName: "Blue",
              Size: "",
              Len: "2.00",
              Wdth: "24.00",
              Ct: "",
              UOM: "",
              Cover: "",
              Options: ""
            },
            {
              MaterialID: "96",
              Mfr: "Armstrong",
              MatType: "Resilient",
              SubType: "VCT",
              StyleNum: "",
              StyleName: "Raffia Stream",
              ColorNum: "55933",
              ColorName: "Grey Cloud",
              Size: "",
              Len: "12.00",
              Wdth: "24.00",
              Ct: "",
              UOM: "",
              Cover: "",
              Options: ""
            },
            {
              MaterialID: "98",
              Mfr: "Armstrong",
              MatType: "Resilient",
              SubType: "VCT",
              StyleNum: "",
              StyleName: "ChromaSpin",
              ColorNum: "54805",
              ColorName: "Aquatint",
              Size: "",
              Len: "12.00",
              Wdth: "12.00",
              Ct: "",
              UOM: "",
              Cover: "",
              Options: ""
            }
          ]
    }

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}