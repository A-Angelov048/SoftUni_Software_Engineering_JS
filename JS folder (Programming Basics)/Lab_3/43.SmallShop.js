// function shop(input) {

//     let product = input[0];
//     let town = input [1];
//     let quantity = Number(input[2]);

//     switch (town) {
//         case "Sofia":
        
//             switch (product) {
//                 case "coffee": console.log(quantity * 0.50); break;
//                 case "water": console.log(quantity * 0.80); break;
//                 case "beer": console.log(quantity * 1.20); break;
//                 case "sweets": console.log(quantity * 1.45); break;
//                 case "peanuts": console.log(quantity * 1.60); break;
//                 default:break;
//             }
            
//             break;
//     }

//     switch (town) {
//         case "Plovdiv":
        
//             switch (product) {
//                 case "coffee": console.log(quantity * 0.40); break;
//                 case "water": console.log(quantity * 0.70); break;
//                 case "beer": console.log(quantity * 1.15); break;
//                 case "sweets": console.log(quantity * 1.30); break;
//                 case "peanuts": console.log(quantity * 1.50); break;
//                 default:break;
//             }
            
//             break;
//     }

//     switch (town) {
//         case "Varna":
        
//             switch (product) {
//                 case "coffee": console.log(quantity * 0.45); break;
//                 case "water": console.log(quantity * 0.70); break;
//                 case "beer": console.log(quantity * 1.10); break;
//                 case "sweets": console.log(quantity * 1.35); break;
//                 case "peanuts": console.log(quantity * 1.55); break;
//                 default:break;
//             }
            
//             break;
//     }

    
// }

// shop(["beer","Sofia", "2"]);



function shop(input) {

    let product = input[0];
    let town = input [1];
    let quantity = Number(input[2]);
    let sum = 0;

    switch (town) {
        case "Sofia":
        
            switch (product) {
                case "coffee": sum = quantity * 0.50; break;
                case "water": sum = quantity * 0.80; break;
                case "beer": sum = quantity * 1.20; break;
                case "sweets": sum = quantity * 1.45; break;
                case "peanuts": sum = quantity * 1.60; break;
            }
            
            break;
    }

    switch (town) {
        case "Plovdiv":
        
        switch (product) {
            case "coffee": sum = quantity * 0.40; break;
            case "water": sum = quantity * 0.70; break;
            case "beer": sum = quantity * 1.15; break;
            case "sweets": sum = quantity * 1.30; break;
            case "peanuts": sum = quantity * 1.50; break;
        }
            
            break;
    }

    switch (town) {
        case "Varna":
        
        switch (product) {
            case "coffee": sum = quantity * 0.45; break;
            case "water": sum = quantity * 0.70; break;
            case "beer": sum = quantity * 1.10; break;
            case "sweets": sum = quantity * 1.35; break;
            case "peanuts": sum = quantity * 1.55; break;
        }
            
            break;
    }

 console.log(sum);
    
}

shop(["beer","Sofia", "2"]);