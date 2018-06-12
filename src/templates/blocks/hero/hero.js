// Form validation starts

$(".card-info").validate({
  errorClass: "invalid",
  errorPlacement: function(error, element) {},
  rules: {
    number1: {
      required: true,
      minlength: 4,
      maxlength: 4,
      digits: true
    },
    number2: {
      required: true,
      minlength: 4,
      maxlength: 4,
      digits: true
    },
    number3: {
      required: true,
      minlength: 4,
      maxlength: 4,
      digits: true
    },
    number4: {
      required: true,
      minlength: 4,
      maxlength: 4,
      digits: true
    },
    code: {
      required: true,
      minlength: 3,
      maxlength: 3,
      digits: true
    },
    name: {
      required: true,
      minlength: 4,
      lettersVal: true
    },
  },
  submitHandler: function(form) {
    // $(form).ajaxSubmit();
    alert('Успешно отправлено!')
  }
});

$.validator.addMethod('lettersVal',
  function(val,el,args) {
    var reg = /[a-z\s]/i;
    for (let i = 0; i<val.length; i++) {
      if (reg.test(val[i]) == false) {
        return false;
      }
    }
    return true;
  }, "Допустимы только латинские буквы");

// Form validation ends
