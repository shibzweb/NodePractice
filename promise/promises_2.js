const promise=require('promise') ;


function getname(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('shibili');
        }, 3000)
    })
}

function getmobile(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('80894488888');
        }, 2000)
    })
}

/*promise.all([getname(),getmobile()]).then((result)=>{
    console.log(result)
})*/

async function getUser (){
    let name=await getname()
    console.log(name)

    let mobile=await getmobile()
    console.log(mobile)
}

getUser()