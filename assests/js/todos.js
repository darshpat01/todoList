//Strike through effect
$("ul").on("click","li", function()
{
    $(this).toggleClass("completed");   
}); 

$("ul").on("click","span", function(event)
{   event.stopPropagation(); 

    $(this).parent().fadeOut(500, function()
    {
        $(this).remove(); 
    })

});
$("input[type='text'").keypress(function(event)
{
    if(event.which == 13)
    {
        //grabbing text from input
        var todoText = $(this).val(); 

        //create a new li
        $("ul").append("<li><span class='list_items'><i class='far fa-trash-alt'></i> </span>"+todoText+"</li>"); 

        //clear input
        $(this).val(""); 
    }
})

$(".fa-plus").on("click", function()
{
    $("input[type='text'").fadeToggle();
})
