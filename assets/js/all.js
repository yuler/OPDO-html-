$(function(){

	// $('select.select2').select2();

	$('.bs3-datepicker').datepicker({
		language: 'zh-CN',
		autoclose : true,
		format: 'yyyy-mm-dd',
		// endDate : '2013-02-02'
	})

	$('.raty').raty({ 
		starType: 'i',
		hints: ['bad', 'poor', 'regular', 'good', 'gorgeous'],
		starOff: 'fa fa-star-o',
		starOn: 'fa fa-star',
	});
	
});