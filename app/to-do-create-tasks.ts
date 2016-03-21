/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" />
/// <reference path="to-do-listing-functions.ts" />

var people = ToDoList.people;

var tasks = [];
tasks.push(new ToDoList.HomeTask("Do the dishes.", "High"));
tasks.push(new ToDoList.HomeTask("Buy chocolate.", "Low", people.diane));
tasks.push(new ToDoList.HomeTask("Wash the laundry.", "High"));
tasks[0].markDone();

tasks.push(new ToDoList.HobbyTask("Practice origami."));
tasks.push(new ToDoList.HobbyTask("Bake a pie."));

var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);

tasks.push(new ToDoList.WorkTask(today, "Update blog.", "High", people.diane));
tasks.push(new ToDoList.WorkTask(tomorrow, "Go to meeting.", "Medium", people.thor));
tasks.push(new ToDoList.WorkTask(tomorrow, "Save the world.", "High", people.thor));
tasks.push(new ToDoList.WorkTask(tomorrow, "Buy a new shirt.", "Low", people.thor));
tasks.push(new ToDoList.WorkTask(nextDay, "Clean ceiling.", "Low", people.loki));

console.log(tasks);
var thorTasks = ToDoList.describeTasksForPerson(people.thor, tasks);
console.log("Here are Thor's tasks: ");
for(var task of thorTasks){
  console.log(task);
}
$(document).ready(function(){
  $('#tayisright').submit(function(event){
    event.preventDefault();
    var selected = $('select#task-party').val();
    $('#task').empty();
    tasks.forEach(function(i){
      if (i.constructor.name === selected){
        $('#task').append("<li>Task: " + i.description + " Priority:" + i.priority + "</li>");
      } else {
      if (i.priority === selected){
        $('#task').append("<li>Task: " + i.description + " Priority:" + i.priority + "</li>");
      }
    });
  });

  // tasks.forEach(function(i){
  //   $('#task').append("<li>" + i.constructor.name + "</ul><ul><li>" + i.description + "<ul><li> Priority: " + i.priority +"</li></ul></li>");
  // });
});
