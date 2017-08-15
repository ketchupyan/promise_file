const fs = require('fs')
const path = require('path')
//文件读取任务是异步的，交给Promise封装
//将读取文件的函数 耗时 封装成为一个Promise
const readFilePromise = function (fileName){
    return new Promise((resolve, reject) => {
        fs.redaFile(fileName, (err, data) => {
            if(err){
                reject(err)
            }else{
                resolve(data.toString())
            }
        })
    })
}

//path 路径
const fullFileName = path.resolve(__dirname, "./data/data.json")
const result = readFilePromise(fullFileName)
const fullFileName2 = path.resolve(__dirname, "./data/data1.json")
const result2 = readFilePromise(fullFileName1)
//拥有.then后可以把事情分步做
//then可以链式操作 一步步去做 同步执行
//thenable 一直链下去
//参数 第一个 成功执行时候的回调函数
//失败执行时的回调函数
//result.then(data => {
    //console.log(JSON.parse（data）.a)
    //return new Promise()
//    return JSON.parse(data).a
//},err =>{
//    console.log(err)
//}).then(a => {
//    下一个then的第一个参数是上一个then的return返回值
//    console.log(a)
//}).catch(err => {
    //stack? reject 传过来的参数
//    console.log(err.stack);
//})
//Promise.all([result, result2])
//    .then(datas => {
//        console.log(data[0], data[1])
//    })
Promise.race([result, result2])
    .then(data => {
        console.log(data)
    })
// readFilePromise()
//Promise在ES6中的具体应用
//异步无阻塞 no blocking
// fs.redaFile(fileName, (err, data) =>{
//     if (err){
//         console.log('读取失败');
//     }else{
//         console.log(data.toString());
//     }
// })