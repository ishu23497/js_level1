const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
  const task = taskInput.value.trim();
  if (task === "") return;

  const li = document.createElement("li");
  li.textContent = task;

  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.className = "delBtn";
  delBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
  });

  li.appendChild(delBtn);
  taskList.appendChild(li);

  taskInput.value = "";
});
