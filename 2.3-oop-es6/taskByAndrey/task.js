
const str='abbcccddddeeeeefffffffffffggggggggggghhhhhhhhhhijkabcdfabcdfalexeyisaprogrammer'
const obj = {}
let count = 1
function objectAdd(str){
const leters= str.split('')

for(const leter of leters){
    obj[leter]=leter  
 if(obj[leter]===leter){  
    obj[leter]=count++

}
   
}
 console.log(obj)


}

objectAdd(str)