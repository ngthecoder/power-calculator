const calculatePower = () => {
    const baseValue = document.getElementById('base').value;
    const exponentValue = document.getElementById('exponent').value;
    console.log(`Calculating power for base: ${baseValue}, exponent: ${exponentValue}`);
};

document.getElementById("calculateBtn").addEventListener("click", calculatePower);