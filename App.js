document.getElementById("taskForm").addEventListener("submit", function(event) {
  event.preventDefault();  // جلوگیری از رفرش صفحه هنگام ارسال فرم
  addTask();
});

function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();
  if (text === "") {
    alert("لطفاً یک کار وارد کنید!");
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;

  const actions = document.createElement("div");
  actions.className = "actions";

  const editBtn = document.createElement("button");
  editBtn.textContent = "ویرایش";
  editBtn.className = "edit";
  editBtn.onclick = function () {
    const newText = prompt("متن جدید را وارد کنید:", span.textContent);
    if (newText && newText.trim() !== "") {
      span.textContent = newText.trim();
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "حذف";
  deleteBtn.className = "delete";
  deleteBtn.onclick = function () {
    li.remove();
  };

  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(actions);

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}