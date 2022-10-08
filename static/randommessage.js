const interval = setInterval(function() {
	// method to be executed;
}, 50);

clearInterval(interval); // thanks @Luca D'Amico

window.setInterval(function() {
	var links = Array(
		'Browse without being tracked.',
		'CLB > DONDA ANY DAY',
		"We don't sell your data.",
		'Anything that you search on our services are completely private and anonymous.',
		'There is a 25% chance of getting this message.'
	);
	var randomlink = links[Math.floor(Math.random() * links.length)];
	document.getElementById('wait').innerHTML = randomlink;
}, 3000); // 1000 milliseconds (1 second)

