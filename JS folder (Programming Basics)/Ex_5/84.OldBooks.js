function books(input){

let i = 0;
let countbooks = 0;

let favoriteBook = input[i];
i++;

let searchFavBook = input[i];
i++ 

let flag = false;

while (searchFavBook !== favoriteBook){
    
    if (searchFavBook === "No More Books"){
        flag = true;
        break;
    }
    countbooks += 1;
    searchFavBook = input[i];
    i++;
}

if (flag){
    console.log("The book you search is not here!");
    console.log(`You checked ${countbooks} books.`);
} else {
    console.log(`You checked ${countbooks} books and found it.`);
}

}

books (["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])



// function books(input){

//     let i = 0;
//     let countbooks = 0;
    
//     let favoriteBook = input[i];
//     i++;
    
//     let searchFavBook = input[i];
//     i++ 
    
//     let flag = false;
    
//     while (searchFavBook !== "No More Books"){
//         if (searchFavBook === favoriteBook){
//             console.log(`You checked ${countbooks} books and found it.`);
//             break;
//         }
//         countbooks += 1;
//         searchFavBook = input[i];
//         i++;
//     }

//     if(searchFavBook === "No More Books"){
//         console.log("The book you search is not here!");
//         console.log(`You checked ${countbooks} books.`);
//     }

// } 

