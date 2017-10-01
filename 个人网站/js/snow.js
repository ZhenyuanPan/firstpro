//make snow
snowDrop(150, randomInt(1000, 1280));
snow(150, 100);
function snow(num, speed) {
		if (num > 0) {
			setTimeout(function () {
				$('#drop_' + randomInt(1, 250)).addClass('animate');
				num--;
				snow(num, speed);
			}, speed);
		}
	}

	function snowDrop(num, position) {
		if (num > 0) {
			var drop = '<div class="drop snow" id="drop_' + num + '"></div>';

			$('body').append(drop);
			$('#drop_' + num).css('left', position);
			num--;
			snowDrop(num, randomInt(60, 1280));
		}
	}

function randomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}