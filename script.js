//your code here
const list=document.getElementById("todoList");
const input=document.getElementById("newTodoInput");
const btn=document.getElementById("addTodoBtn");


btn.addEventListener('click',()=>{
	console.log(input.value);
	if(input.value!==""){
		const li=document.createElement('li');
		li.innerText=input.value;
		list.appendChild(li);
		input.value="";
	}
});
