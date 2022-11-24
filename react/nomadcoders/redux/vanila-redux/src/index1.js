import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");


// string 은 어디에서 에러가 발생하는지 모르니깐 변수로 설정하면 어디서 에러가 났는지 알수있다.
const ADD = "ADD";
const MINUS = "MINUS";


// action 은 dispatch 호출
const countModifier = (count = 0, action) => {
  // if else 구문
  // if (action.type === "ADD") {
  //   return count + 1
  // }
  // if (action.type === "MINUS") {
  //   return count - 1
  // }
  // else {
  //   return count;
  // }

  // switch 구문
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }

};
const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState()
  console.log(countStore.getState())
}

countStore.subscribe(onChange)

add.addEventListener("click", () => countStore.dispatch({type:ADD}));  // dispatch 안은 object
minus.addEventListener("click", () => countStore.dispatch({type:MINUS}));