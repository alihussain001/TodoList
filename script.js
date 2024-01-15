// for login-page

function submitLogin(e) {
  e.preventDefault()

  console.log('here')

  const signupForm = document.getElementById('signupForm')
  let formData = new FormData(signupForm)
  const entries = Object.fromEntries(formData)

  if (
    entries.email === 'mytodolist@gmail.com' &&
    entries.password === 'test123'
  ) {
    alert('Login successful')
    window.location.href = '/main.html'
  } else {
    alert('Invalid Login credentials')
  }
}

var todoList = []

function submitTodo(e) {
  e.preventDefault()
  const todoForm = document.getElementById('todoForm')
  let formData = new FormData(todoForm)
  const entries = Object.fromEntries(formData)

  if (entries.task_name === '' || entries.description === '') {
    alert('Please enter task name and description')
    return
  }

  let objectDate = new Date()
  let day = objectDate.getDate()
  let month = objectDate.getMonth()
  let year = objectDate.getFullYear()
  let format = month + '/' + day + '/' + year

  todoList.push({
    task_name: entries.task_name,
    description: entries.description,
    date: format,
  })

  renderTodoList()
}

function renderTodoList() {
  const element = document.querySelectorAll('#taskList')[0]

  element.innerHTML = ''

  todoList.map(function (item, index) {
    const li = document.createElement('li')

    const html = `
    <li class="flex justify-between gap-x-6 py-5">
      <div class="flex min-w-0 gap-x-4">
          <img class="h-12 w-12 flex-none rounded-full bg-gray-50"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="">
          <div class="min-w-0 flex-auto">
              <p class="text-sm font-semibold leading-6 text-gray-900">${item.task_name}</p>
              <p class="mt-1 truncate text-xs leading-5 text-gray-500">
              ${item.description}
              </p>
          </div>
      </div>
      <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
          <p class="text-sm leading-6 text-gray-900">${item.date}</p>
          <button onclick="deleteTodo('${index}')">Delete</button>
      </div>
    </li>
  `

    li.innerHTML = html

    element.appendChild(li)
  })
}

function deleteTodo(index) {
  todoList.splice(index, 1)
  renderTodoList()
}
