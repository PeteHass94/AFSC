function displayTeams() {
    document.getElementById("teams").style.display = "flex";
    document.getElementById("hideTeams").style.display = "flex";
    document.getElementById("displayTeams").style.display = "none";
}
function hideTeams() {
    document.getElementById("teams").style.display = "none";
    document.getElementById("displayTeams").style.display = "flex";
    document.getElementById("hideTeams").style.display = "none";
}
$(function(){
    $('#TicketPricing').modal({
        keyboard: true,
        backdrop: "static",
        show:false,

    }).on('show', function(){
          var getIdFromRow = $(event.target).closest('tr').data('id');
        //make your ajax call populate items or what even you need
        $(this).find('#ModalDetails').html($('<b> Order Id selected: ' + getIdFromRow  + '</b>'))
    });
});
