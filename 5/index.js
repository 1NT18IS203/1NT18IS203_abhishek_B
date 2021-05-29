


var val=1;
let arr= [2,3,4,'abc',true,val]


console.log(`${arr}`);

for(let i=0;i<arr.length;i++)
    console.log(arr[i] +" -> " +typeof(arr[i]));


let obj = [{'usn': 1231 , 'name': 'abs' }, {'usn': 3242 , 'name': 'abdas' }]


for(i in obj)
    console.log(obj[i])
