function wrong(input){

    let passwordBe = input[0];

    if (passwordBe == "s3cr3t!P@ssw0rd") {
        console.log("Welcome");
    } else { 
        console.log("Wrong password!");
    }

}

wrong(["qwerty"]);