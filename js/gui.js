$("#SetFen").on("click", function(){
    let fenStr = $("#fenIn").val();
    ParseFen(fenStr)
    PrintBoard();
});

// When enter is pressed in the fen input box
// parse the fen string
$("#fenIn").on('keypress', function(e){
    if(e.which == 13){
        let fenStr = $("#fenIn").val();
        ParseFen(fenStr)
        PrintBoard();
    }
});