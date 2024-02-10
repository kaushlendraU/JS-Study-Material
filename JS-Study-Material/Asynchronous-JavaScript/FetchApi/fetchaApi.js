fetch('todos/kart.json').then((response) => {
    console.log('resolved', response);
    return response.json();
}).then(data => {
    console.log(data);
}).catch((err) => {
    console.log('rejected', err);
})





// Fetch data from multiple endpoints with the Fetch API


// method 1st --> Chaining multiple fetch requests

fetch('todos/kart.json')
.then(response => {
   return response.json();
})
.then(data => {
    console.log(data);
    return fetch('todos/kaush.json');
})
.then(response => {
    return response.json();
})
.then(data2 => {
    console.log(data2);
})
.catch(error => {
    console.log(error);
})



// method 2nd --> Using Promises to handle multiple fetch requests


const kaushApi = fetch('todos/kaush.json').then(response => response.json());
const kartApi = fetch('todos/kart.json').then(response => response.json());

Promise.all([kaushApi, kartApi])
    .then(([dataFirst, dataSecond]) => {
        console.log(dataFirst);
        console.log(dataSecond);
    })
    .catch(err => {
        console.error(err);
    })

