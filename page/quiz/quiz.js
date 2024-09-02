const root = document.querySelector('#root');
const api = 'https://jsonplaceholder.typicode.com/todos';
let todos = [];

async function getTodo() {
    const res = await fetch(api);
    const data = await res.json();
    todos = data;
    console.log(todos);
    showTodos(todos);
}

function showTodos(todos) {
    root.innerHTML = ''; // Очищаем старые элементы
    todos.forEach((todo, index) => {
        root.innerHTML += `
            <div class="card mt-5" style="width: 18rem;">
                <div class="card-body">
                    <p class="card-text">Task ${index + 1}</p>
                    <p class="card-text">User ID: ${todo.userId}</p>
                    <p class="card-text">ID: ${todo.id}</p>
                    <p class="card-text">Title: ${todo.title}</p>
                    <p class="card-text" style="color: ${todo.completed ? 'green' : 'red'};">
                        Completed: ${todo.completed ? 'Yes' : 'No'}
                    </p>
                </div>
            </div>
        `;
    });
}

function filterTodos(status) {
    const filteredTodos = todos.filter(todo => todo.completed === status);
    showTodos(filteredTodos);
}

function searchTodos(query) {
    const filteredTodos = todos.filter(todo => todo.title.toLowerCase().includes(query.toLowerCase()));
    showTodos(filteredTodos);
}

getTodo();