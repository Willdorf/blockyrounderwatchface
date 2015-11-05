(function() {
	loadOptions();
	submitHandler();
})();

function submitHandler() {
	var $submitButton = $('#submitButton');
	$submitButton.on('click', function() {
		console.log('Submit');

		var return_to = getQueryParam('return_to', 'pebblejs://close#');
		document.location = return_to + encodeURIComponent(JSON.stringify(getAndStoreConfigData()));
	});
}

var $submitButton = $('#submitButton');

$submitButton.on('click', function() {
	console.log('Submit');

	var return_to = getQueryParam('return_to', 'pebblejs://close#');
	document.location = return_to + encodeURIComponent(JSON.stringify(getAndStoreConfigData()));
});

function getAndStoreConfigData() {
	var $backgroundColorPicker = $('#backgroundColorPicker');
	var $blockOneColorPicker = $('#blockOneColorPicker');
	var $blockTwoColorPicker = $('#blockTwoColorPicker');
	var $blockThreeColorPicker = $('#blockThreeColorPicker');
	var $blockFourColorPicker = $('#blockFourColorPicker');
	var $blockFiveColorPicker = $('#blockFiveColorPicker');
	var $blockSixColorPicker = $('#blockSixColorPicker');
	var $blockSevenColorPicker = $('#blockSevenColorPicker');
	var $blockEightColorPicker = $('#blockEightColorPicker');
	var $blockNineColorPicker = $('#blockNineColorPicker');
	var $blockTenColorPicker = $('#blockTenColorPicker');
	var $blockElevenColorPicker = $('#blockElevenColorPicker');
	var $blockTwelveColorPicker = $('#blockTwelveColorPicker');

	var options = {
		backgroundColor : $backgroundColorPicker.val(),
		blockOneColor : $blockOneColorPicker.val(),
		blockTwoColor : $blockTwoColorPicker.val(),
		blockThreeColor : $blockThreeColorPicker.val(),
		blockFourColor : $blockFourColorPicker.val(),
		blockFiveColor : $blockFiveColorPicker.val(),
		blockSixColor : $blockSixColorPicker.val(),
		blockSevenColor : $blockSevenColorPicker.val(),
		blockEightColor : $blockEightColorPicker.val(),
		blockNineColor : $blockNineColorPicker.val(),
		blockTenColor : $blockTenColorPicker.val(),
		blockElevenColor : $blockElevenColorPicker.val(),
		blockTwelveColor : $blockTwelveColorPicker.val()
	};

	localStorage.willdorfblockyrounderbackgroundColor = options.backgroundColor;
	localStorage.willdorfblockyrounderblockOneColor = options.blockOneColor;
	localStorage.willdorfblockyrounderblockTwoColor = options.blockTwoColor;
	localStorage.willdorfblockyrounderblockThreeColor = options.blockThreeColor;
	localStorage.willdorfblockyrounderblockFourColor = options.blockFourColor;
	localStorage.willdorfblockyrounderblockFiveColor = options.blockFiveColor;
	localStorage.willdorfblockyrounderblockSixColor = options.blockSixColor;
	localStorage.willdorfblockyrounderblockSevenColor = options.blockSevenColor;
	localStorage.willdorfblockyrounderblockEightColor = options.blockEightColor;
	localStorage.willdorfblockyrounderblockNineColor = options.blockNineColor;
	localStorage.willdorfblockyrounderblockTenColor = options.blockTenColor;
	localStorage.willdorfblockyrounderblockElevenColor = options.blockElevenColor;
	localStorage.willdorfblockyrounderblockTwelveColor = options.blockTwelveColor;

	console.log('Got Options: ' + JSON.stringify(options));
	return options;
}

function loadOptions() {
	var $backgroundColorPicker = $('#backgroundColorPicker');
	var $blockOneColorPicker = $('#blockOneColorPicker');
	var $blockTwoColorPicker = $('#blockTwoColorPicker');
	var $blockThreeColorPicker = $('#blockThreeColorPicker');
	var $blockFourColorPicker = $('#blockFourColorPicker');
	var $blockFiveColorPicker = $('#blockFiveColorPicker');
	var $blockSixColorPicker = $('#blockSixColorPicker');
	var $blockSevenColorPicker = $('#blockSevenColorPicker');
	var $blockEightColorPicker = $('#blockEightColorPicker');
	var $blockNineColorPicker = $('#blockNineColorPicker');
	var $blockTenColorPicker = $('#blockTenColorPicker');
	var $blockElevenColorPicker = $('#blockElevenColorPicker');
	var $blockTwelveColorPicker = $('#blockTwelveColorPicker');

	if (localStorage.backgroundColor) {
		$backgroundColorPicker[0].value = localStorage.willdorfblockyrounderbackgroundColor;
		$blockOneColorPicker[0].value = localStorage.willdorfblockyrounderblockOneColor;
		$blockTwoColorPicker[0].value = localStorage.willdorfblockyrounderblockTwoColor;
		$blockThreeColorPicker[0].value = localStorage.willdorfblockyrounderblockThreeColor;
		$blockFourColorPicker[0].value = localStorage.willdorfblockyrounderblockFourColor;
		$blockFiveColorPicker[0].value = localStorage.willdorfblockyrounderblockFiveColor;
		$blockSixColorPicker[0].value = localStorage.willdorfblockyrounderblockSixColor;
		$blockSevenColorPicker[0].value = localStorage.willdorfblockyrounderblockSevenColor;
		$blockEightColorPicker[0].value = localStorage.willdorfblockyrounderblockEightColor;
		$blockNineColorPicker[0].value = localStorage.willdorfblockyrounderblockNineColor;
		$blockTenColorPicker[0].value = localStorage.willdorfblockyrounderblockTenColor;
		$blockElevenColorPicker[0].value = localStorage.willdorfblockyrounderblockElevenColor;
		$blockTwelveColorPicker[0].value = localStorage.willdorfblockyrounderblockTwelveColor;
	}
}

function getQueryParam(variable, defaultValue) {
	var query = location.search.substring(1);
	var vars = query.split('&');
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');
		if (pair[0] === variable) {
			return decodeURIComponent(pair[1]);
		}
	}
	return defaultValue || false;
}
