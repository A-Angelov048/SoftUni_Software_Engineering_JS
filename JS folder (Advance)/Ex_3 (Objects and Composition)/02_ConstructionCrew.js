function constructionCrew(data) {

    if (data.dizziness === true) {
        data.levelOfHydrated += data.weight * data.experience * 0.1;
        data.dizziness = false
    }

    return data;
}

console.log(constructionCrew({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
  
));

