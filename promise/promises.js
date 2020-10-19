/*function add(num1,num2,callback){
    let err= false ;
    if(num1==0){
        err= true ;
    }
    callback(num1+num2,err)
}


function multiply(num1,num2,callback){
    callback(num1*num2)
}

function division(num1,num2,callback){
     callback(num1/num2)
}

add(2,3,(sum,err)=>{
    if(err){
        console.log('ERR: first no is a zero')
    }else
    console.log(sum)

    multiply(sum,sum,(product)=>{
        console.log(product)

        division(product,2,(result)=>{
            console.log(result)
        })
    })
})
*/

const promise=require('promise')

function add(num1,num2){
    return new promise ((resolve,reject)=>{
        if (num1,num2==0){
            reject('ERR:first no is a zero in addition')
        }
        resolve(num1+num2)
    })
}

function multiply(num1,num2){
    return new promise ((resolve,reject)=>{
        if (num1==0){
            reject('ERR:first no is a zero')
        }
        resolve (num1*num2)
    })
}


function division(num1,num2){
    return new promise ((resolve,reject)=>{
        if (num1==0){
            reject('ERR:first no is a zero')
        }
        resolve (num1/num2)
    })
}

add(10,0).then((sum)=>{
    console.log(sum)
    return multiply(sum,sum)
}).then((product)=>{
    console.log(product)
    return division(product,2)
}).then((division)=>{
    console.log(division)
})

.catch((err)=>{
    console.log(err)
})