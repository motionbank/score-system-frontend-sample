jQuery(function(){

	window.messaging = window.massaging || {};

	var parentWindow = null, parentOrigin = null;
	var postmessenger = window.postmessenger = new PostMessenger(window);
	var listener_id = null;

	var applyMessaging = function(req, res){
		var messageHandler = window.messaging;
		if ( req.name in messageHandler && 
			 typeof messageHandler[req.name] === 'function' ) {
			messageHandler[req.name].apply(null,arguments);
		}
	};

	postmessenger.on('connect?',function(req,res){
		parentWindow = req.source;
		parentOrigin = req.origin;
		listener_id = req.data.listener_id;
		res.send('connect!');
		applyMessaging(req,res);
	});

	postmessenger.on(/.+/,applyMessaging);

	window.messaging.send = function ( msg, data ) {
		//console.log( msg, data, parentWindow, parentOrigin );
		postmessenger.send(msg, data, parentWindow, parentOrigin);
	}
});