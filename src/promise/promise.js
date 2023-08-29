let promise = new Promise((resolve, reject)=> {
    let grade = 69 + 1
    if(grade === 70){
        resolve('You Passed')
    }else{
        reject('You failed, try again')
    }
})

promise.then((message) =>{
    console.log("Success: "+ message)
}).catch((message) =>{
    console.log("Failed: "+ message)
})