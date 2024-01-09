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

function submitTodo(e) {
  e.preventDefault()
  const todoForm = document.getElementById('todoForm')
  let formData = new FormData(todoForm)
  const entries = Object.fromEntries(formData)

  if (entries.task_name === '' || entries.description === '') {
    alert('Please enter task name and description')

    return
  }

  console.log(entries)
}

// function validateForm() {
//   var email = document.getElementById('email').value.trim()
//   var password = document.getElementById('password').value.trim()

//   if (email === '' || password === '') {
//     alert('Please enter both email and password.')
//     return false
//   }

//   return true
// }

// function validateEmail(email) {
//   // Regular expressiom for simple email validation
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//   return emailRegex.test(email)
// }

// const email = 'mytodolist@email.com'
// if (validateEmail(email)) {
//   console.log('Email is valid')
// } else {
//   console.log('Email is invalid')
// }

// // for todolist
// const inputBox = document.getElementById('input-box')
// const listContainer = document.getElementById('list-container')

// function addTask() {
//   if (inputBox.value === '') {
//     alert('You must write something')
//   } else {
//     let li = document.createElement('li')
//     li.innerHTML = inputBox.value
//     listContainer.appendChild(li)

//     let span = document.createElement('span')
//     span.innerHTML = '\u00d7'
//     li.appendChild(span)
//   }
//   inputBox.value = ''
//   saveData()
// }

// listContainer.addEventListener(
//   'click',
//   function (e) {
//     if (e.target.tagName === 'LI') {
//       e.target.classList.toggle('checked')
//       saveData()
//     } else if (e.target.tagName === 'SPAN') {
//       e.target.parentElement.remove()
//       saveData()
//     }
//   },
//   false,
// )

// function saveData() {
//   localStorage.setItem('data', listContainer.innerHTML)
// }

// function showTask() {
//   listContainer.innerHTML = localStorage.getItem('data')
// }
// showTask()
