const EleventyVuePlugin = require("@11ty/is-land/11ty/VuePlugin.cjs");

module.exports = function(c) {
    c.addPlugin(EleventyVuePlugin);
    c.setServerOptions({
        // Default values are shown:
    
        // Opt-out of the live reload snippet
        enabled: true,
    
        // Opt-out of DOM diffing updates and use page reloads
        domdiff: true,
    
        // The starting port number to attempt to use
        port: 3005,
    
        // number of times to increment the port if in use
        portReassignmentRetryCount: 10,
    
        // Show local network IP addresses for device testing
        showAllHosts: false,
    
        // Use a local key/certificate to opt-in to local HTTP/2 with https
        https: {
          // key: "./localhost.key",
          // cert: "./localhost.cert",
        },
    
        // Change the name of the special folder name used for injected scripts
        folder: ".11ty",
    
        // Show the server version number on the command line
        showVersion: false,
    
        // Change the default file encoding for reading/serving files
        encoding: "utf-8",
      });
};