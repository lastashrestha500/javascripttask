// create promise that resolve
const orderpizza=new Promise((resolve,reject)=>{
    const ingredientsavailable=false
    if(ingredientsavailable){
        resolve("pizza is ready")
// promise that reject
    }else{
        reject("sorry,no ingredients")
    }
})
// use then
.then(message=>{
    console.log(message)
})
//  use.catch
.catch(error=>{
    console.log(error)
})
.finally(()=>{
    console.log("order process finishned")

})
// converting to async and await


