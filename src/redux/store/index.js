// Based on Environment we will ignore few middleware to enhance application performance
if (process.env.NODE_ENV === "production") {
    module.exports = require("./StoreProd");
} else {
    module.exports = require("./StoreDev");
}