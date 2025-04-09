// <li >
// <label for="task-1">Wyrzucić śmieci</label>
// <input type="checkbox" id="task-1" name="Wyrzucić śmieci"/>
// </li>

// Wyrzucić śmieci
// Pójść na siłownie
// Nakarmić koty
// Wyrzucić śmieci
const tasksContainerElement: HTMLElement = document.querySelector('.tasks')!
const tasksNameInputElement: HTMLInputElement = document.querySelector('#name')!
const addBtnElement: HTMLButtonElement = document.querySelector('button')!

// const task ={
//     name: "wyrzucić śmieci",
//     isDone: false,
// }

interface Task {
	name: string
	isDone: boolean
	category?: string
}


const categories: string[] = ['general', 'work', 'gym', 'hobby']
const tasks: Task[] = [
	{ name: ' Wyrzucić śmieci', isDone: false, category: 'hobby' },
	{ name: 'Pójść na siłownie', isDone: true, category: 'gym' },
	{ name: 'Nakarmić koty', isDone: false, category: 'work' },
]

const render = () => {
	tasksContainerElement.innerHTML = '' // czyszczenie kontenera z poprzednich elementów
	tasks.forEach((task, index) => {
		const taskElement: HTMLElement = document.createElement('li')
		if (task.category) {
			taskElement.classList.add(task.category)
		}
		const id = `task-${index}`
		const labelElement: HTMLLabelElement = document.createElement('label')
		labelElement.innerText = task.name
		labelElement.setAttribute('for', id)

		const checkboxElement: HTMLInputElement = document.createElement('input')
		checkboxElement.type = 'checkbox'
		checkboxElement.name = task.name
		checkboxElement.id = id
		checkboxElement.checked = task.isDone
		checkboxElement.addEventListener('change', () => {
			task.isDone = !task.isDone // zmiana stanu zadania
		})

		taskElement.appendChild(labelElement)
		taskElement.appendChild(checkboxElement)
		tasksContainerElement.appendChild(taskElement)
	})
}

const addTask = (task: Task) => {
	tasks.push(task)
}

addBtnElement.addEventListener('click', (event: Event) => {
	event.preventDefault() // zapobiega przeładowaniu strony (wysłaniu formularza);
	addTask({ name: tasksNameInputElement.value, isDone: false })
	render()
})

addTask({ name: 'zrobic klate', isDone: false, category:"gym" })
render()
