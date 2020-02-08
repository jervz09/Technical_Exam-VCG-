$(document).ready(function(){
    let arr = [] //for random
    $(".body-form").animate({
        opacity: '1',
        width: '30%',
        fontSize: '120%'
    },'slow');


    $("#btn-add").click(function(){
        let add1 = $("#addNames").val();
        if (add1==$("#"+add1).text()){
            $(".msg-alert").remove();
            $("#msg").append("<p class='msg-alert'>Duplicate Name!</p>")
        }else{
            $(".msg-alert").remove();
            arr.push(add1);
            $("#names").append("<p id='"+add1+"'>"+ add1 +"</p>");
        }
    });

    $("#btn-raffle").click(function(){
        arr.sort(function(a, b){return 0.5 - Math.random()})
        alert(arr[0])
        $("#"+arr[0]).remove(); 
    })

});