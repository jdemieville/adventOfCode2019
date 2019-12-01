export default function rocketEquation(masses){
    // for overall fuel sum
    let fuelReqSum = 0;
    // expecting array of masses for each module
    masses.forEach(mass => {
        let fuel = fuelForModule(mass);
        while(fuel > 0){
            // do not want to add 0 or negative numbers to sum
            fuelReqSum += fuel;
            fuel = fuelForModule(fuel);
        }
    });
    return fuelReqSum;
}

function fuelForModule(mass){
    // divide by 3, round down, subtract 2
    return (Math.floor(mass/3))-2;
}