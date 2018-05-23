import deepFreeze from 'deep-freeze'
import expect from 'expect'
const todos=(state,action)=>{
  
};

function testAddTodo= ()=>{
  const stateBefore = []
  const action = {
    type:'ADD_TODO',
    id:0,
    text:'Learn Redux'
  };
  const stateAfter =[ {
    id: 0,
    text: 'Learn Redux'
    completed:false
  }];
  deepFreeze(stateBefore);
  deepFreeze(action);
  expect (todos(stateBefore,action)).toEqual(stateAfter)
};
testAddTodo();
console.log("test success");