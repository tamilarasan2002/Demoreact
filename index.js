const num = [1,2,3,4,5,6,7,8,9,10]
const even = (num) =>{
    console.log(num.filter((element,index)=>{
        return num%2==0;
    }));
}
