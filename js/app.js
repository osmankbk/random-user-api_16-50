const personPic = document.querySelector('#photo');
const personFirstName = document.querySelector('#first');
const personLastName = document.querySelector('#last');
const personLocation = document.querySelector('#street');
const personPhone = document.querySelector('#phone');
const personEmail = document.querySelector('#email');
const button = document.querySelector('button');

//data fetching function.
async function getPerson(url) {
   try{
    const request = await fetch(url);
    const response = await request.json()
    return Promise.all(response.results);
} catch(error) {
    error.status;
    error.message;
    }
}

//Passing fetch user into DOM function.
const fillInfo = (data) => {
    data.forEach(user => {
        personPic.src = user.picture.large;
        personFirstName.textContent = user.name.first;
        personLastName.textContent = user.name.last;
        personLocation.textContent = user.location.street.name
        personPhone.textContent = user.phone;
        personEmail.textContent = user.email;
    });
}

//Show user click event.
button.addEventListener('click', () => {
    getPerson(`https://randomuser.me/api/`).then(fillInfo);
})