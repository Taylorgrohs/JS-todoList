$(document).ready(function(){
  tasks.forEach(function(i){
    $('#task').append("<li>" + i.constructor.name + "</ul><ul><li>" + i.description + "<ul><li> Priority: " + i.priority +"</li></ul></li>");
  });
  var allTasks = tasks;
  console.log(allTasks);
});
