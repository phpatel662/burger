$(function(){
    //devour function on click
    $(".change-eaten").on("click", function(event){
        event.preventDefault();
        var id = $(this).data("id");
        console.log(id);
    

    $.ajax("/api/" + id, {
        type: "PUT",
    }).then(
        function(){
            console.log("this happened");
            location.reload();
        }
    )
    });

    //submit new burger function on click
    $("form").on("submit", function(event){
        event.preventDefault();
        var newBurger = {
            name: $("#burg").val().trim()
        };

        $.ajax("/api/", {
            type: "POST",
            data: newBurger
        }).then(
            function(){
                console.log("future me")
                location.reload();
            }
        )
    })
})