function cone(coneRadius, coneHeight){

    let volumeOfCone = (1/3) * Math.PI * Math.pow(coneRadius, 2) * coneHeight;

    let slantHeightC = Math.sqrt(Math.pow(coneRadius, 2) + Math.pow(coneHeight, 2));
    let lateralSurfaceArea = Math.PI * coneRadius * slantHeightC;
    let baseSurfaceArea = Math.PI * Math.pow(coneRadius, 2);

    let totalSurfaceArea = lateralSurfaceArea + baseSurfaceArea;

    console.log(`volume = ${volumeOfCone.toFixed(4)}`);
    console.log(`area = ${totalSurfaceArea.toFixed(4)}`);
    
}

cone(3, 5);
console.log('-------');
cone(3.3, 7.8);
console.log('-------');