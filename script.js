function addTask() {
  var li = document.createElement('li')
  var taskInput = document.getElementById('task').value
  var taskText = document.createTextNode(taskInput)

  li.appendChild(taskText)
  document.getElementById('list').appendChild(li)
}
