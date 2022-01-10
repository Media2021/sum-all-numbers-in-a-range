function sumAll(array){
    let sum = 0
    if (array[0]< array[1]) {
        
    for (let i = array [0] ; i <= array[1]; i++) {
        sum+= i ;
        
    }
    console.log(sum)
}else if (array[0]> array[1]) {
    for (let i = array[1]; i <= array[0]; i++) {
        sum+= i ;
        
        
    }
console.log(sum)
    }else{
        console.log(array[0])
    }
}
sumAll([1,4])

//sumAll([5, 10])
