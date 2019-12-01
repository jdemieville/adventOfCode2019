export default function rocketEquation(masses){
    // for overall fuel sum
    let fuelReqSum = 0;
    // expecting array of masses for each module
    masses.forEach(mass => {
        // divide by 3, round down, subtract 2
        fuelReqSum += (Math.floor(mass/3))-2;
    });

    return fuelReqSum;
}