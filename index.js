function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(name, email)
        })
        .then(response => response.json())
        .then(object => {
        console.log(object)
        })
        .catch(error => {
            alert('Error!')
    })
}

// let dogData ={
//     dogName: 'Byron',
//     dogBreed: 'Poodle'
// }

// let configObj = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//     },
//     body: JSON.stringify(dogData)
// }

// fetch('http://localhost:3000/dogs', configObj)
//     .then(response => response.json())
//     .then(object => {
//         console.log(object)
//     })
//     .catch(error => {
//         alert('Error!')
//         console.log(error.message)
//     })
