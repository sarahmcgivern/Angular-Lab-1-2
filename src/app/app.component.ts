import { Component } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

interface Todo {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Todo-Lab';
  task: string;
  completed: boolean;
  taskInput: string;
  hideTitle: boolean = true;
  private isButtonVisible = true;
  exists = true;

  
  taskList: Todo[] = [
    {task:'Walk the dog', completed: true},
    {task:'Go to the store', completed: false},
    {task:'Get gas', completed: false},
  ];


  addTask = () => {
    const newTodo = {
      task: this.taskInput,
      completed: false
    };
    this.taskList.push(newTodo);
    this.taskInput = null;
  };


  completeTask = (index) => {
    this.taskList[index].completed = true;
  };

 

  removeTask = (index) => {
    this.taskList.splice(index, 1);
  };
  
  // filterResults = (arr) => {
  //   return arr.filter(el => el.toLowerCase().indexOf(this.task.toLowerCase()) > -1);
  //   };
  
  // filterList() {
  //   let users = this.state.users;
  //   let q = this.state.q;

  //   users = users.filter(function(user) {
  //     return user.name.toLowerCase().indexOf(q) != -1; // returns true or false
  //   });
  //   this.setState({ filteredUsers: users });
  // }

//   filterResults = (tasks, index, letter) => {
//     var filteredNames = tasks.filter(function(word) {
//        return word.charAt(index) === letter;
//     });
//     return filteredNames;
// };

// function filterResults(array, string) {
//   return array.filter(o =>
//       Object.keys(o).some(k => o[k].toLowerCase().includes(string.toLowerCase())));
// }

// function search(term){
//   return
//       Array.filter(taskList,function(item){
//          return JSON.stringify(obj).indexOf(term)!=-1;
//       });
//   }

}
