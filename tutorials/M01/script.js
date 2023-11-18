//we have to grab data based on an event. if you need the data from the get-go, you can use the window.onload event to do a fetch request as soon as the window loads.

window.onload = () =>{
    userGet()
}

const userGet = () =>{
    //fetch some data from randomuser.me
    fetch('https://randomuser.me/api/')
    //we can then process the data using .then
    //each time we use .then we can take the previous data/results and do something to it. We make up a name representing those results
    .then(response => response.json())
    .then(data => showUser(data.results))
}

//function showUser(data)
showUser = (data) =>{
    document.getElementById('name').innerText = '${data[0].namefirst'
    document.getElementById('email').innerText = '${data[0].email'
    document.getElementById('age').innerText = '${data[0].dob'
    document.getElementById('phone').innerText = '${data[0].phone'
}