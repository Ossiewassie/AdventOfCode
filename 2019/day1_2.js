const module_mass = [66452,116352,149063,89740,127871,67079,110072,69113,81350,78546,60987,135761,124758,88974,62785,95781,142073,112941,50611,60254,119624,113248,79006,64084,112574,93665,70195,123125,131451,129048,134267,60878,131790,129317,80881,63994,116531,61733,68840,94325,55880,95804,85840,81390,105875,52840,129801,93510,60717,129838,84428,78677,108652,68968,74477,131263,113174,79762,125274,71145,104933,113211,81420,74843,121886,83881,101605,119888,60893,137917,100729,54363,120755,148169,63014,82424,100093,60746,76765,127239,121852,124982,114509,147435,55606,67360,93258,108443,98212,52320,135855,51583,109452,143535,123262,130966,121649,99241,82066,60047];
var total_fuel = 0;

function calculateFuel(mass) {
    mass.forEach(element => {
        fuel = (Math.floor(element / 3) - 2);
        while(fuel > 0) {
            total_fuel += fuel;
            fuel = (Math.floor(fuel / 3) - 2);
        }
    });
    return total_fuel;
}

console.log(calculateFuel(module_mass));