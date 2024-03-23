
$('.owl-carousel2').owlCarousel({
    margin:5,
    autoWidth:true,
    items:1,
    nav:true
})

$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        483:{
            items:2,
            nav:true
        },
        768:{
            items:3,
            nav:false
        },
        992:{
            items:4,
            nav:false
        },
    }
})
function charcountupdate(str) {
	var lng = str.length;
	document.getElementById("charcount").innerHTML = lng + ' out of 400 characters';
}

const form = document.querySelector("form");
const fullName = document.querySelector(".name");
const number = document.querySelector(".number");
const email = document.querySelector(".email");
const message = document.querySelector(".message");

function sendEmail() {

    const bodyMessage = `Full Name: ${fullName.value}<br> Number: ${number.value}<br> Email: ${email.value}<br> Body ${message.value}`;

    const mail = `${email.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "ridwandev23@gmail.com",
        Password : "9F5129F86B330FAF9B4E5FC411337286757D",
        To : 'ridwandev23@gmail.com',
        From : "ridwandev23@gmail.com",
        Subject : "new contact",
        Body : bodyMessage
    }).then(
      message => alert(message)
    );
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    sendEmail();
});
