module.exports = function(RED) {

    function ServerConfig(config) {
        RED.nodes.createNode(this, config);

        this.name = config.name || "Server Config";
        this.service = config.service || "sms";
        this.runner = config.runner || "";

        let node = this;

        let msg = {};

        node.on("input", function(msg) {

            let testSpec = {
                "runnerURL": node.runner,
                "service": node.service
            }

            msg.testSpec = testSpec;

            node.status({
                fill: "green",
                shape: "dot",
                text: `Test Specification captured`
            });

            node.send(msg);
        });
    }
    RED.nodes.registerType("serverconfig", ServerConfig);
};