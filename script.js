const inputButton = $('#inputButton').on('click', function(event) {
    event.preventDefault();
    const firstName = $('#firstName').val();
    localStorage.setItem('#firstName', firstName);

    const lastName = $('#lastName').val();
    localStorage.setItem('#lastName', lastName);

    const email = $('#email').val();
    localStorage.setItem('#email', email);
})
