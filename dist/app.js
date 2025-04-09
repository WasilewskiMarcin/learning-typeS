// <li >
// <label for="task-1">Wyrzucić śmieci</label>
// <input type="checkbox" id="task-1" name="Wyrzucić śmieci"/>
// </li>
// Wyrzucić śmieci
// Pójść na siłownie
// Nakarmić koty
// Wyrzucić śmieci
const tasksContainerElement = document.querySelector('.tasks');
const tasksNameInputElement = document.querySelector('#name');
const addBtnElement = document.querySelector('button');
const categoriesContainerElement = document.querySelector('.categories');
// const task ={
//     name: "wyrzucić śmieci",
//     isDone: false,
// }
let selectedCategory;
const categories = ['general', 'work', 'gym', 'hobby'];
const tasks = [
    { name: ' Wyrzucić śmieci', isDone: false, category: 'hobby' },
    { name: 'Pójść na siłownie', isDone: true, category: 'gym' },
    { name: 'Nakarmić koty', isDone: false, category: 'work' },
];
const render = () => {
    tasksContainerElement.innerHTML = ''; // czyszczenie kontenera z poprzednich elementów
    tasks.forEach((task, index) => {
        const taskElement = document.createElement('li');
        if (task.category) {
            taskElement.classList.add(task.category);
        }
        const id = `task-${index}`;
        const labelElement = document.createElement('label');
        labelElement.innerText = task.name;
        labelElement.setAttribute('for', id);
        const checkboxElement = document.createElement('input');
        checkboxElement.type = 'checkbox';
        checkboxElement.name = task.name;
        checkboxElement.id = id;
        checkboxElement.checked = task.isDone;
        checkboxElement.addEventListener('change', () => {
            task.isDone = !task.isDone; // zmiana stanu zadania
        });
        taskElement.appendChild(labelElement);
        taskElement.appendChild(checkboxElement);
        tasksContainerElement.appendChild(taskElement);
    });
};
const renderCategories = () => {
    categories.forEach(category => {
        const categoryElement = document.createElement('li');
        const radioInputElement = document.createElement('input');
        radioInputElement.type = 'radio';
        radioInputElement.name = 'category';
        radioInputElement.value = category;
        radioInputElement.id = `category-${category}`;
        radioInputElement.addEventListener('change', () => {
            selectedCategory = category;
        });
        const labelElement = document.createElement('label');
        labelElement.setAttribute('for', `category-${category}`);
        labelElement.innerText = category;
        categoryElement.appendChild(radioInputElement);
        categoryElement.appendChild(labelElement);
        categoriesContainerElement.appendChild(categoryElement);
    });
};
const addTask = (task) => {
    tasks.push(task);
};
addBtnElement.addEventListener('click', (event) => {
    // const selectedRadioElement: HTMLInputElement = document.querySelector("input[type='radio]:checked")
    // const selectedCategory: Category = selectedRadioElement.value as Category
    event.preventDefault(); // zapobiega przeładowaniu strony (wysłaniu formularza);
    addTask({ name: tasksNameInputElement.value, isDone: false, category: selectedCategory });
    render();
});
addTask({ name: 'zrobic klate', isDone: false, category: 'gym' });
renderCategories();
render();
