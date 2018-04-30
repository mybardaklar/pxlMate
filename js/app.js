$(document).ready(function() {

	$('.pxl-modal input[name="pxl-modal"]').change(function() {
		var thisPrnt = $(this).parent(),
				thisAttr = thisPrnt.data('pxl-modal'),
				thisBody = $('#body');
		if(thisAttr != null)
			if(!thisBody.hasClass('pxl-modal-bg_' + thisAttr))
				$('#body').addClass('pxl-modal-bg_' + thisAttr);
			else
				$('#body').removeClass('pxl-modal-bg_' + thisAttr);
	});

	

});