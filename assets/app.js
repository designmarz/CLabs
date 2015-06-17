$(document).ready(function() {
	(function($){
    $.fn.jExpand = function(){
        var element = this;

        $(element).find("tr:odd").addClass("odd");
        $(element).find("tr:not(.odd)").hide();
        $(element).find("tr:first-child").show();

        $(element).find("tr.odd").click(function() {
            $(this).next("tr").toggle( "slow" );
        });
        
    }    
})(jQuery); 

$(".round-icon").click(function(){
	console.log("icon clicked: " + this)
    $( this ).toggleClass("active");
    $( this ).toggleClass("disabled");

});


  $('#details_table').jExpand()
});