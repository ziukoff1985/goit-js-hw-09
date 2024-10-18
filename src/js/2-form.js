'use strict';

// Ініціалізуємо об'єкт для збережження введених даних в localStorage
const formData = {
  email: '',
  message: '',
};

// Ініціалізуємо змінну для збереження ключа в localStorage
const STORAGE_KEY = 'feedback-form-state';

// Доступ до форми
const form = document.querySelector('.feedback-form');

// Обробник для зберігання даних у локальному сховищі
form.addEventListener('input', handleInput);

// Обробник для відправки форми
form.addEventListener('submit', handleSubmit);

// Функція для зберігання даних у localStorage
function handleInput() {
  formData.email = form.elements.email.value.trim();
  formData.message = form.elements.message.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// Виклик функції для заповнення форми при перезавантаженні сторінки
populateForm();

// Функція для заповнення форми даними з локального сховища при перезавантаженні сторінки
function populateForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    // Якщо parsedData.email undefined, використовуємо порожній рядок
    form.elements.email.value = parsedData.email || '';
    // Якщо parsedData.messege undefined, використовуємо порожній рядок
    form.elements.message.value = parsedData.message || '';
  }
  // console.log(savedData);
}

// Функція для обробки відправки форми
function handleSubmit(event) {
  event.preventDefault();
  if (
    form.elements.email.value.trim() === '' ||
    form.elements.message.value.trim() === ''
  ) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
  form.reset();
}
