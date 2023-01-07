let form = document.forms.data
console.log(form);
form.onsubmit = (e) => {
  e.preventDefault()

  let data = {
    id: Math.random()
  }

  let dates = new FormData(form)

  dates.forEach((value,key) => {
    data[key] = value
  })

  localStorage.setItem('dates', JSON.stringify(data))
}
let getData = JSON.parse(localStorage.getItem('dates'))
if(getData) {
    window.location.href = './index.html'
}