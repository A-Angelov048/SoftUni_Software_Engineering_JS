function hospital(input) {

    let days = Number(input[0]);

    let doctors = 7;
    let treatedPatients = 0;
    let untreatedPatients = 0;

    for (let i = 1; i <= days; i++) {

        let numbPatient = Number(input[i]);

        if (i % 3 === 0) {
            if (untreatedPatients > treatedPatients) {
                doctors++;
            }
        }

        if (numbPatient <= doctors) {

            treatedPatients += numbPatient;
        } else if (numbPatient > doctors) {

            treatedPatients += doctors;
            untreatedPatients += numbPatient - doctors;
        }

    }

    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`);

}

hospital(["4", "7", "27", "9", "1"]);
hospital(["6", "25", "25", "25", "25", "25", "2"]);
hospital(["3", "7", "7", "7"]);