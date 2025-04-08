// <li >
// <label for="task-1">Wyrzucić śmieci</label>
// <input type="checkbox" id="task-1" name="Wyrzucić śmieci"/>
// </li>
// Wyrzucić śmieci
// Pójść na siłownie 
// Nakarmić koty
// Wyrzucić śmieci
const tasksContainerElement = document.querySelector(".tasks");
const tasksNameInputElement = document.querySelector("#name");
const addBtnElement = document.querySelector("button");
// const task ={
//     name: "wyrzucić śmieci",
//     isDone: false,
// }
const tasks = [{ name: " Wyrzucić śmieci", isDone: false }, { name: "Pójść na siłownie", isDone: true }, { name: "Nakarmić koty", isDone: false }];
const render = () => {
    tasksContainerElement.innerHTML = ""; // czyszczenie kontenera z poprzednich elementów
    tasks.forEach((task, index) => {
        const taskElement = document.createElement("li");
        const id = `task-${index}`;
        const labelElement = document.createElement("label");
        labelElement.innerText = task.name;
        labelElement.setAttribute("for", id);
        const checkboxElement = document.createElement("input");
        checkboxElement.type = "checkbox";
        checkboxElement.name = task.name;
        checkboxElement.id = id;
        checkboxElement.checked = task.isDone;
        checkboxElement.addEventListener("change", () => {
            task.isDone = !task.isDone; // zmiana stanu zadania
        });
        taskElement.appendChild(labelElement);
        taskElement.appendChild(checkboxElement);
        tasksContainerElement.appendChild(taskElement);
    });
};
const addTask = (taskName) => {
    tasks.push({ name: taskName, isDone: false });
};
addBtnElement.addEventListener("click", (event) => {
    event.preventDefault(); // zapobiega przeładowaniu strony (wysłaniu formularza);
    addTask(tasksNameInputElement.value);
    render();
});
render();
