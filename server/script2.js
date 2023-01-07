let getData = JSON.parse(localStorage.getItem('dates'))
console.log(getData);
if(getData === null) {
    window.location.href = './account.html'
}

