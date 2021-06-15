
const str='abbcccddddeeeeefffffffffffggggggggggghhhhhhhhhhijkabcdfabcdfalexeyisaprogrammer'

const letters= str.split('')
const obj = {}

function objectAdd(){

for(const elem of letters){
   const count = 1
    if(elem){
       obj[elem]=count+1   
               
    }    
}
 
console.log(obj)

}

objectAdd()