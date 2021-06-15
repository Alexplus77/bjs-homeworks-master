
const str='abbcccddddeeeeefffffffffffggggggggggghhhhhhhhhhijkabcdfabcdfalexeyisaprogrammer'
const obj = {}
let count = 1


function objectAdd(str){
const leters= str.split('')

for(const leter of leters){
    
   obj[leter]=count
   //console.log(leter)
   if(Object.keys(obj).includes(leter)){
    obj[leter]=count+1
console.log(obj)
   }



}
 


}

objectAdd(str)