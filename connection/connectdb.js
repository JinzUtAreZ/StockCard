module.exports = {
  config: {
    server: "AXAPTATESTENVT",
    database: "Inventory",
    user: "sa",
    password: "1234"
  },
  port: function() {
    var portdata = process.env.PORT || 5000;
    return portdata;
  }
};
