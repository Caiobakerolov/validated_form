$(document).ready(function() {

  $('#phone').mask('(00) 00000-0000');

  $('#cpf').mask('00000000000');

  $('#postcode').mask('0000000');
  
  $('form').validate({
    rules: {
      name: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      phone: {
        required: true,
      },
      cpf: {
        required: true,        
      },
      passport: {
        required: true,
      },
      address: {
        required: true,        
      },
      postcode: {
        required: true,
      },
      message: {
        required: true,
      },
    },
    messages: {
      name: '<p style="color: black">Please, enter your full name</p>',
      email: '<p style="color: black">Please, enter your full email</p>',
      cpf: '<p style="color: black">Enter your CPF containing 11 digits</p>',
      passport: '<p style="color: black">Enter your passport number</p>',
      phone: '<p style="color: black">Enter your phone number with your country prefix</p>',
      address: '<p style="color: black">Enter your address with location number</p>',
      postcode: '<p style="color: black">Enter your postal code correctly to better locate the address</p>',
      message: '<p style="color: black">Enter your message so we know what you need</p>'
    }
  })

});

