// Валидация формы заказа продукта или услуги
function validateForm() {
    let form = document.getElementById('product_order_form');
    let inputs = form.querySelectorAll('input');
    let valid = true;

    inputs.forEach(input => {
        if (!input.value) {
            input.style.borderColor = 'red';
            valid = false;
        } else {
            input.style.borderColor = 'green';
        }
    });

    if (valid) {
        alert('Форма успешно отправлена!');
        form.reset();
    } else {
        alert('Пожалуйста, заполните все поля!');
    }
}

// Изменение CSS стилей
document.querySelector('.main_title').addEventListener('mouseover', function() {
    this.style.color = 'red';
});

document.querySelector('.btn').addEventListener('click', function() {
    this.style.transform = 'scale(1.1)';
});
