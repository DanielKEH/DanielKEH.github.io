


var mqtt_server = "test.mosquitto.org";
var mqtt_port = "8081";
var mqtt_destname = "DanielLed";


function conectMQTT() {

    client = new Paho.MQTT.Client(mqtt_server, Number(mqtt_port), "");
    client.connect({ onSuccess: onConnect });
}

function onConnect() {
    document.getElementById("pubmsg").innerHTML = "New connection made...";
    document.getElementById("sendButton").style.visibility = "visible";
}

function send_mqtt_msg() {
    var mqtt_msg = document.getElementById("mqtt_msg").value;
    message = new Paho.MQTT.Message(mqtt_msg);
    message.destinationName = mqtt_destname;
    client.send(message);
    document.getElementById("pubmsg").innerHTML = mqtt_msg + " was sent to : " + mqtt_destname;
}

function changeButtonValue() {

    document.getElementById("sendButton").innerHTML ="Publish "+document.getElementById("mqtt_msg").value+" to MQTT";
}