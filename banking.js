document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const balance = document.getElementById('balance');
    const depositOutput = document.getElementById('deposit-output');
    depositOutput.innerText = parseInt(depositInput.value) + parseInt(depositOutput.innerText);
    balance.innerText =parseInt(balance.innerText) + parseInt(depositOutput.innerText);
    depositInput.value = '';
});


document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const balance = document.getElementById('balance');
    const withdrawOutput = document.getElementById('withdraw-output');
    withdrawOutput.innerText = parseInt(withdrawInput.value) - parseInt(withdrawOutput.innerText);
    balance.innerText =parseInt(balance.innerText) - parseInt(withdrawOutput.innerText);
    withdrawInput.value = '';
});
