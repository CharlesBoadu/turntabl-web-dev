$(document).ready(function() {
    sayHello = $("#hello-id");
    sayHello.html("Hello Boadu! Welcome to learning JQuery!");

    sayResidence = $("#sayResidence");
    sayResidence.html("hello John! You come from Jirapa!")
    
    sayResidence.css("color", "blue");

    mainImage = $("#main-image");
    mainImage.attr("src", "franca.jpg");

    $.get("https://jsonplaceholder.typicode.com/todos?_limit=50",
    function(data) {
        let toDoList = $("#toDoList-id");

        data.forEach(d => {
            toDoList.append("<li>"+d.title+"</li>");
        })
    })
})