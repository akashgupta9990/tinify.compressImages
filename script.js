var callFn = function() {
	$.ajax({
        type: 'POST',
        url: '/compress'
    });
}

$(document).ready(function() {
    callFn();
});

$('#compress').on('click',function() {
    callFn();
});
