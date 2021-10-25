$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    const listInput = $("#groceryInput").val();
    const listArray = listInput.split(", ");

    let outputList = new Array();

    outputList = listArray.sort();
    console.log(outputList);

    $("ul").empty();

    outputList.forEach(function(element) {
      element = element.toUpperCase();
      $("ul").append("<li>" + element + "</li>");
      
    });
    
  });
});