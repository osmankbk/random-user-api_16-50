const personPic = document.querySelector('#photo');
const personFirstName = document.querySelector('#first');
const personLastName = document.querySelector('#last');
const personLocation = document.querySelector('#street');
const personPhone = document.querySelector('#phone');
const personEmail = document.querySelector('#email');
const button = document.querySelector('button');

//Data fetching function.
async function getPerson(url) {
   try{
    const request = await fetch(url);
    const response = await request.json()
    return response.results[0];
} catch(error) {
    error.status
    }
}

//Passing fetch data into DOM function.
const fillInfo = (data) => {
    const {
        phone,
        email,
} = data;

    personPic.src = data.picture.large;
    personFirstName.textContent = data.name.first;
    personLastName.textContent = data.name.last;
    personLocation.textContent = data.location.street.name
    personPhone.textContent = phone;
    personEmail.textContent = email;
}

//Show data click event.
button.addEventListener('click', () => {
    getPerson(`https://randomuser.me/api/`).then(fillInfo);
})