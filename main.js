var exec = require('child_process').exec;


KUBERNETES_MASTER_IP = "192.168.2.112"
KUBERNETES_NODE_IPS = ["192.168.2.109"]
PASSWORD = "hypriot"
USERNAME = "pirate"


exec("sshpass -p "+ PASSWORD +" ssh "+ USERNAME +"@"+ KUBERNETES_MASTER_IP + " 'bash -s' < setup-master.sh", (err, stdout, stderr) => {
	console.log(stdout)
  	if (err !== null) {
		console.log('exec error: ' + err);
	}
});

KUBERNETES_NODE_IPS.forEach(function(entry) {
    console.log("Setting up NODE: " + entry)
    exec("sshpass -p "+ PASSWORD +" ssh "+ USERNAME +"@"+ entry + " 'bash -s' < setup-node.sh", (err, stdout, stderr) => {
	console.log(stdout)
	if (err !== null) {
		console.log('exec error: ' + err);
	}
    });
});


