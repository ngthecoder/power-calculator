const calculatePower = () => {
    const baseValue = document.getElementById('base').value;
    const exponentValue = document.getElementById('exponent').value;
    
    console.log(`Calculating power for base: ${baseValue}, exponent: ${exponentValue}`);
    
    var myHeaders = new Headers();
    
    myHeaders = {
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin":"*",
        "Access-Control-Allow-Methods":"POST,PATCH,OPTIONS"
    };
    
    var raw = JSON.stringify(
        {
            "base":baseValue,
            "exponent":exponentValue
        }
    );

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    
    fetch("https://s7ib7i5a66.execute-api.us-east-1.amazonaws.com/dev", requestOptions)
    .then(response => response.text())
    .then(result => alert(JSON.parse(result).body))
    .catch(error => console.log('error', error));
};

document.getElementById("calculateBtn").addEventListener("click", calculatePower);