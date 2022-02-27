
var mqtt_server = "test.mosquitto.org";
var mqtt_port = "8081";
var mqtt_destname = "DanielMqtt";

function conectMQTT() {
    client = new Paho.MQTT.Client(mqtt_server, Number(mqtt_port), "");
    var options = {
        useSSL: true,
        onSuccess: onConnect,
    };
    client.connect(options);
}

function onConnect() {
    document.getElementById("pubmsg").innerHTML = "New connection made...";
    document.getElementById("startButton").style.visibility = "visible";
    document.getElementById("stopButton").style.visibility = "visible";
    document.getElementById("sliderRng").style.visibility = "visible";
}

function setSpeed() {
    var mqtt_msg = document.getElementById("sliderRng").value;
    message = new Paho.MQTT.Message(mqtt_msg);
    message.destinationName = mqtt_destname;
    client.send(message);
    document.getElementById("pubmsg").innerHTML = mqtt_msg + " was sent to : " + mqtt_destname;
}

function startMot() {
    var mqtt_msg = "1000";
    message = new Paho.MQTT.Message(mqtt_msg);
    message.destinationName = mqtt_destname;
    client.send(message);
    document.getElementById("pubmsg").innerHTML = mqtt_msg + " was sent to : " + mqtt_destname;

}
function stopMot() {
    var mqtt_msg = "1001";
    message = new Paho.MQTT.Message(mqtt_msg);
    message.destinationName = mqtt_destname;
    client.send(message);
    document.getElementById("pubmsg").innerHTML = mqtt_msg + " was sent to : " + mqtt_destname;
}
