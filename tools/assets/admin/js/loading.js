$(function(){
	$(window).on('load',function(){
		$.ajax({
	        url: './count/count_data',
	        dataType: 'json',
	        success : function(data) {
	        	if(data != 0){
	        		$("#loading").css({
	        			'display' : 'inline',
	        			'position': 'absolute',
        	        	'left': '50%',
        	        	'top': '50%',
        	        	'margin-top': '-25px',
        	        	'margin-left': '-300px'
	        	    });
	        		$("#loader-bg").css({
	        			'display' : 'inline',
	        			'position': 'fixed',
	        			'width': '100%',
	        			'height': '100%',
        	        	'top': '0px',
        	        	'background': '#fff',
        	        	'z-index': '1'
	        	    });
	        		$("#contents").css({
	        			'display' : 'inline',
	        			'position':'absolute',
	        			'line-height':'30px',
	        			'width':'600px',
	        			'text-align':'center',
	        			'top':'120%',
	        			'left':'50%',
	        			'margin-top':'-15px',
	        			'margin-left':'-300px'
	        	    });
	        	}
	        }
	      });
	});
});