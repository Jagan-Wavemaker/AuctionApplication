const form = document.getElementById('signup-form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const formData = new FormData(form);
     //Create an object from the form data entries
  let formDataObject = Object.fromEntries(formData.entries());
    // Format the plain form data as JSON
    let formDataJsonString = JSON.stringify(formDataObject);

    fetch('http://localhost:8080/badmintonAuction/player/create', {
        method:'POST', 
         //Set the headers that specify you're sending a JSON body request and accepting JSON response
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
        body: formDataJsonString
    }).then(res => res.json)
      .then(data => console.log(data))
      .catch((err) =>{ 
        alert(err);
        console.log(err)
    });
});


    //   display message
      const forms = document.getElementById('signup-form');
      const thankYouMessage = document.querySelector('#thank-you-message');
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        thankYouMessage.classList.add('show');
      });
    
    