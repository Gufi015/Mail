
var Cloud = require('ti.cloud');

$.btnSend.addEventListener('click',function(e) {
	Cloud.Emails.send({
		template : 'welcome',
		recipients : 'ruf_rm@hotmail.com'
	}, function(e) {
		if (e.success) {
			alert('Success');
		} else {
			alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
		}
	});
});

$.index.open();
