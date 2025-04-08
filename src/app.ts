// <li >
// <label for="task-1">Wyrzucić śmieci</label>
// <input type="checkbox" id="task-1" name="Wyrzucić śmieci"/>
// </li>

// Wyrzucić śmieci
// Pójść na siłownie 
// Nakarmić koty
// Wyrzucić śmieci
const tasksContainerElement :HTMLElement = document.querySelector(".tasks")!;
const tasksNameInputElement :HTMLInputElement = document.querySelector("#name")!;
const addBtnElement :HTMLButtonElement = document.querySelector("button")!;

// const task ={
//     name: "wyrzucić śmieci",
//     isDone: false,
// }
const tasks: {name: string; isDone: boolean}[] = [{name:" Wyrzucić śmieci", isDone: false}, {name:"Pójść na siłownie", isDone:true}, {name: "Nakarmić koty", isDone: false}];

const render= () => {
    tasksContainerElement.innerHTML = ""; // czyszczenie kontenera z poprzednich elementów
    tasks.forEach((task, index)=>{


        const taskElement: HTMLElement = document.createElement("li");
        const id = `task-${index}`;
        const labelElement: HTMLLabelElement = document.createElement("label");
        labelElement.innerText = task.name;
        labelElement.setAttribute("for", id);

        const checkboxElement: HTMLInputElement = document.createElement("input");
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
    tasks.push({name: taskName, isDone: false});
};

addBtnElement.addEventListener("click", (event : Event) => {
    event.preventDefault(); // zapobiega przeładowaniu strony (wysłaniu formularza);
    addTask(tasksNameInputElement.value);
    render();

});

render();