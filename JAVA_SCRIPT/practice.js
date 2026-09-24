function square (num){
    return num*num
}

let squares = (num)=> (num*num)



(function greet(name) {
    return (`Welcome,${name}!`)
})()


function sumAll(...num) {
    
let total=0
for (const elements of num) {
    total = total+elements
}
return total;
}
//console.log(sumAll(8,5,5));


function isEven(nums) {
    return nums%2==0
}




const getUserInfo = (name,age) => ({name,age})
//console.log(getUserInfo("vibhor",19))


let calculateDiscount = (price,discountPercent=10) => {
    return (price*(100-discountPercent)/100)
}
//console.log(calculateDiscount(100));


const repeatAction = (action,times)=> {
        for (let i = 0; i < times; i++) {
            action()
        }
}
//console.log(repeatAction(2,2))




