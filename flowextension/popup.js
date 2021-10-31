const title = document.getElementById('title');
const description = document.getElementById('description');
const form = document.getElementById('form');

form.addEventListener("submit" , (e) =>{
    const titleValue = title.value;
    const descriptionValue = description.value;
    e.preventDefault();
})