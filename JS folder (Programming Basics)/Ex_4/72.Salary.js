function salary(input){

    let numbOpenTabs = Number(input[0]);
    let SalaryPerMonth = Number(input[1]);

    for (i = 2; i <= numbOpenTabs + 1; i++){
        let testTabs = input[i];

        if (testTabs === "Facebook"){
            SalaryPerMonth -= 150;
        } else if (testTabs === "Instagram"){
            SalaryPerMonth -= 100;
        } else if (testTabs === "Reddit"){
            SalaryPerMonth -= 50;
        }
            
    }

    if (SalaryPerMonth <= 0){
        console.log("You have lost your salary.");
    } else {
        console.log(SalaryPerMonth);
    }

}

salary (["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"]);