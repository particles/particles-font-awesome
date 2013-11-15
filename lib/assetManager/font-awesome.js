
module.exports = {
  __module: {
    provides: ["register_assets_dir"]
  },

  exports: {
    stylesheet: "lib/font-awesome/css/font-awesome.css"
  },

  register_assets_dir: function() {
    return __dirname + "/../../assets";
  }
};