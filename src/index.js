document.addEventListener("DOMContentLoaded", () => {
 
  const form = document.querySelector('#create-task-form')

  form.addEventListener('submit',(event) =>{
    event.preventDefault()
    const taskTxt = event.target["new-task-desctiption"].value 

    const list = document.querySelector('#tasks')
    const newLi = document.createElement('li')
    newLi.textcontent= taskTxt

    list.appendChild(newLi)
  })
});
