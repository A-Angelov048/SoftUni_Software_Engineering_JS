function extractFile(data) {

    let dataArr = data.split('\\').pop();


    let index = dataArr.lastIndexOf('.');
    let extenion = dataArr.substring(index + 1);
    let fileName = dataArr.substring(0, index);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extenion}`);
}

extractFile('C:\\Internal\\training-internal\\Template.neshosi.pptx');
console.log('===========');
extractFile('C:\\Internal\\training-internal\\Template.pptx');
console.log('===========');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');