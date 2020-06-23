const fs = require('fs');
const path = require('path');
const axios = require('axios');
const myconf = require('./config');
exports.autoImport = function autoImport(nextPath: string, callback: (args: string) => any){
    let isDir = fs.statSync(nextPath).isDirectory();
    if(isDir){
        fs
            .readdirSync(nextPath)
            .filter((file) => {
                return file !== "index.js" && file !== "migrate.js" && file.indexOf(".") !== 0;
            }).forEach((fileName) => {
                let tmpPath = path.join(nextPath,fileName);
                if(fs.statSync(tmpPath).isDirectory()){
                    autoImport(tmpPath,callback);
                }else{
                    callback(tmpPath);
                }
        });
    }
};

exports.createProxy = function (url: string) {
    const instance = axios.create({
        baseURL: myconf.proxy.API.publicApi,
        timeout: myconf.proxy.requestTimeOut
    })
}

