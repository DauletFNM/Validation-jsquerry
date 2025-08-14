function displayText() {
    $("#message").text("Помощь прибудет через час, справляйтесь сами");
}

    $(document).ready(function() {
        $('#submitBtn').on('click', function(){
            $("#validationList").validate({
            rules: {
            login: {
            required: true,
            minlength: 4
},
            email: {
            required: true,
            email: true
},
            number: {
            required: true,
            digits: true,
            minlength: 5
}
            },
            messages: {
                login: {
                required: "Введите логин",
                minlength: "Логин должен быть не короче 4 символов"
                },
                email: {
                required: "Введите email",
                email: "Введите корректный email"
                    },
                number: {
                required: "Введите номер телефона",
                digits: "Только цифры",
                minlength: "Минимум 5 цифр"
}
                },
                errorPlacement: function(error, element) {
                    error.insertAfter(element);
                },
                submitHandler: function(form) {
                    alert("Форма отправлена!");
                    form.submit();
                }
            });
        })
        });