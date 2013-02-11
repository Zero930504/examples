
seajs.config({
  // Set the base url for SeaJS
  base: './assets/',

  // Set aliases for common libraries
  alias: {
    'jquery': 'common/jquery-1.9.1.min.js'
  }
});

// Transport common libraries to CMD modules automatically
seajs.on('compile', function(mod) {
  if (mod.uri.indexOf('jquery') > 0) {
    mod.exports = jQuery.noConflict(true)
  }
});

