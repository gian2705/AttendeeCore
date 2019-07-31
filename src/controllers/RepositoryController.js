'use strict'

var os = require('os');
var child_process = require ('child_process');
var file = require('fs');
var process = require( 'process');
var path = require('path');
var errCode = require('../erroCode');

let projectFolder = '/spring/daas/src/main/kotlin/com/fahamutech/daas';

module.exports.RepositoryController = class {

    createRepository(schema){
        return new Promise((resolve, reject)=>{

        });
    }

    updateRepository(schema){
        return new Promise((resolve, reject)=>{

        });
    }

    deleteRepository(schema){
        return new Promise((resolve, reject)=>{

        });
    }

    patchRepository(schema){
        return new Promise((resolve, reject)=>{

        });
    }

    getRepository(name){
        return new Promise((resolve, reject)=>{
            try{
                var dFile = file.readFileSync(path.join(__dirname, `../${projectFolder}/repo/${name}`));
                resolve({repo: dFile.toString()});
            }catch(e){
                reject({code: errCode.REPO_GET_CODE , message: errCode.REPO_GET_MESSAGE, error: e});
            }
        });
    }

    getAllRepository(){
       return new Promise((resolve, reject)=>{
            try{
                var result =  file.readdirSync(path.join(__dirname,`../${projectFolder}/repo`));
                resolve({message: 'Process succeed', repos: result});
            }catch(e){
                reject({code: errCode.REPO_ALL_CODE , message: errCode.REPO_All_MESSAGE, error: e});
            }
        });
    }

}