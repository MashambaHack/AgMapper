// Sets the MongoDB Database options

module.exports = {

    local:
    {
        name: "ag-map-local",
        url: "mongodb://localhost/AgMap",
        port: 27017
    },

    localtest:
    {
        name: "ag-map-local",
        url: "mongodb://localhost/AgMapTest",
        port: 27017
    }

};
