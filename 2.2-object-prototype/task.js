String.prototype.isPalindrome
function isPalindrome(value) {
     this.value = value.toLowerCase().replace(/\s+/g, '')
    console.log(this.value)
this.value2 = value.toLowerCase().replace(/\s+/g, '').split('').reverse().join('')

if(this.value2 === this.value){return true}else{return false}

}

//console.log(isPalindrome('А роза упала на лапу Азора'))
//console.log(isPalindrome('А роза упала на лапу Азора'))

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    // return averageMark
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}