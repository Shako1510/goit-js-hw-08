import throttle from "lodash.throttle";

const formEll = document.querySelector('.feedback-form');
const formInput = document.querySelector('input');
const textAreaEll = document.querySelector('textarea');


const rules = 'feedback - form - state';


formInput.addEventListener('input', throttle(onInputChange, 500));
textAreaEll.addEventListener('input', throttle(onInputChange, 500));
updateInput();


formEll.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(formEll);

    formData.forEach((name, value) => {
        console.log(name, value);
    })

    formEll.reset();
    updateInput();
    localStorage.removeItem(rules);
});

function onInputChange(e) {
    const email = formInput.value;
    const message = textAreaEll.value;

    const formData = {
        email,
        message,
    };

    localStorage.setItem(rules, JSON.stringify(formData))
};

function updateInput() {
    let inputListsave = localStorage.getItem(rules);
    inputListsave = JSON.parse(inputListsave);

    if (inputListsave) {
        formInput.value = inputListsave.email;
        textAreaEll.value = inputListsave.message;
    };
};

