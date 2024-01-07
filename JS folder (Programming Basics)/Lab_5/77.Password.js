function pass(input){

    let username = input[0];
    let password = input[1];

    let index = 2;
    let passSearch = input[index];
    index++;

    while (passSearch !== password){
        passSearch = input[index];
        index++;
    }
    console.log(`Welcome ${username}!`);
}

pass(["Nakov",
"1234",
"Pass",
"1324",
"1234"])
