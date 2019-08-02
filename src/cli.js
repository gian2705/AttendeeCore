'use strict'

var file = require('fs');
var path = require('path');
let DomainController = require('./controllers/DomainController').DomainController;
let RepositoryController = require('./controllers/RepositoryController').RepositoryController;
let GitController = require('./controllers/GitController').GitController;
let SchemaController = require('./controllers/SchemaController').SchemaController;
let errCode = require('./erroCode');

let CliController = {
    checkProject: function () {
        return new Promise((resolve, reject)=>{
            file.readdir(path.join(__dirname, '/spring/daas'),(err,files)=>{
                if(err){
                    reject({code: errCode.NO_FOLDER_CODE , message: errCode.NO_FOLDER_MESSAGE, error: e});
                }else{
                    resolve({message: "Folder project exist", folder: files});
                }
            });
        });
    },
    git: new GitController(),
    domain: new DomainController(),
    database: new RepositoryController(),
    schema: new SchemaController(),
};

module.exports.cli = CliController;
