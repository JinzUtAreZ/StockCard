const express = require("express");
const sql = require("mssql");
const router = express.Router();
const dbconfig = require("../../connection/connectdb");
let fs = require("fs");

item = {}; // for offline json-server

router.get("/", (req, res) => {
  try {
    var conn = new sql.ConnectionPool(dbconfig.config);
    conn
      .connect()
      .then(function(pool) {
        var request = new sql.Request(pool);
        request.execute("spLoad_AssetData").then(function(recordset) {
          console.log(recordset.recordset);
          res.json(recordset.recordset);
          conn.close();
        });
      })
      .catch(function(err) {
        console.error(err);
        conn.close();
      });
  } catch (err) {
    console.error(err.message);
    res.status("500").send("Server Error");
  }
});

router.get("/:assetlist", (req, res) => {
  let assetlist = req.params.assetlist;
  try {
    var conn = new sql.ConnectionPool(dbconfig.config);
    conn
      .connect()
      .then(function(pool) {
        var request = new sql.Request(pool);
        request.input("inAssetList", sql.VarChar(2000), assetlist);
        request.execute("spLoad_PrintAssetList").then(function(recordset) {
          console.log(recordset.recordset);
          item[assetlist] = recordset.recordset;
          var dataset = JSON.stringify(item, null, 2);

          fs.writeFileSync("./routes/StockSelect.json", dataset, callback);

          function callback() {
            console.log("Finished writing temporary storage");
          }

          res.json(recordset.recordset);
          conn.close();
        });
      })
      .catch(function(err) {
        console.error(err.message);
        conn.close();
      });
  } catch (err) {
    console.error(err.message);
    res.status("500").send("Server Error");
  }
});

module.exports = router;
