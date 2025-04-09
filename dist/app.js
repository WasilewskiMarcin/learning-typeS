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
const addTask = (task) => {
    tasks.push(task);
};
addBtnElement.addEventListener('click', (event) => {
    event.preventDefault(); // zapobiega przeładowaniu strony (wysłaniu formularza);
    addTask({ name: tasksNameInputElement.value, isDone: false });
    render();
});
addTask({ name: 'zrobic klate', isDone: false, category: "gym" });
render();
