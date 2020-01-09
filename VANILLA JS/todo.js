const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = []; // 할 일들에 대한 정보를 보관하기 위한 Array

// toDos에서 해당 버튼의 부모인 li를 삭제
function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){ // filter는 filterFn이 체크가 된 아이템들의 Array를 cleanToDos에 준다.
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos; // 여기서의 cleanToDos는 li.id와 동일한 id를 가진 toDo를 제외한 나머지 toDo를 가지고 있다.
    saveToDos();
}

// toDos의 정보를 로컬 스토리지에 저장
function saveToDos(){
    // 자바스크립트는 로컬 스토리지에 있는 모든 데이터를 String으로 저장하려고 한다.
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); // 위와 같은 이유로 Object를 String으로 변환해준다.
}

// HTML에 추가
function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteToDo); // 버튼 클릭 이벤트
    span.innerText = text;
    li.appendChild(span); // li에 span 추가
    li.appendChild(delBtn); // li에 delBtn 추가
    li.id = newId;
    toDoList.appendChild(li); // toDoList에 li 추가
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj); // toDos 배열에 toDoObj를 추가
    saveToDos();
}

function handelSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos); // 로컬 스토리지에 String으로 저장되어 있으므로 Object로 변환한다.
        parsedToDos.forEach(function(toDo){ // forEach는 Array에 담겨있는 것들을 각각에 한번씩 함수를 실행시켜준다.
            paintToDo(toDo.text);
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handelSubmit);
}

init();