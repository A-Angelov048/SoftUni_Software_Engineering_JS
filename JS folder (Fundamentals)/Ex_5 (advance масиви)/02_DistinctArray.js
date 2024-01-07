function distinctArray(arr){

    let newArr = [];

    for (const i of arr) {

        if(!newArr.includes(i)){
            newArr.push(i)
        } 
    }
    console.log(newArr.join(' '));
}

distinctArray([5, 2, 5, 4]);

function distinctArray(arr){

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {

        if(!newArr.includes(arr[i])){
            newArr.push(arr[i])
        } 
    }
    console.log(newArr.join(' '));
}