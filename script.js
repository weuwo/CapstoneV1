function togglePopup() {
    document.getElementById("popup").classList.toggle("active");
}

function toggleObject1() {
    document.getElementById("popup-1").classList.toggle("active");
	
	document.querySelector("img#object-1.object-all").addEventListener("click", () => {
	document.getElementById("object-1").style.display = "none";

	document.getElementById('object-1-text').innerHTML = '<h2>Object 1</h2>';

	document.getElementById('object-1-image').innerHTML = '<img src="object1.png" class="center" onclick="object1popup()">';
});
}

function object1popup() {
	document.getElementById("popup-1").classList.toggle("active");
}

function toggleObject2() {
    document.getElementById("popup-2").classList.toggle("active");
	
	document.querySelector("img#object-2.object-all").addEventListener("click", () => {
	document.getElementById("object-2").style.display = "none";

	document.getElementById('object-2-text').innerHTML = '<h2>Object 2</h2>';

	document.getElementById('object-2-image').innerHTML = '<img src="object2.png" class="center" onclick="object2popup()">';
});
}

function object2popup() {
	document.getElementById("popup-2").classList.toggle("active");
}

function toggleObject3() {
    document.getElementById("popup-3").classList.toggle("active");
	
	document.querySelector("img#object-3.object-all").addEventListener("click", () => {
	document.getElementById("object-3").style.display = "none";

	document.getElementById('object-3-text').innerHTML = '<h2>Object 3</h2>';

	document.getElementById('object-3-image').innerHTML = '<img src="object3.png" class="center" onclick="object3popup()">';
});
}

function object3popup() {
	document.getElementById("popup-3").classList.toggle("active");
}

function toggleObject4() {
    document.getElementById("popup-4").classList.toggle("active");
	
	document.querySelector("img#object-4.object-all").addEventListener("click", () => {
	document.getElementById("object-4").style.display = "none";

	document.getElementById('object-4-text').innerHTML = '<h2>Object 4</h2>';

	document.getElementById('object-4-image').innerHTML = '<img src="object4.png" class="center" onclick="object4popup()">';
});
}

function object4popup() {
	document.getElementById("popup-4").classList.toggle("active");
}

function toggleObject5() {
    document.getElementById("popup-5").classList.toggle("active");
	
	document.querySelector("img#object-5.object-all").addEventListener("click", () => {
	document.getElementById("object-5").style.display = "none";

	document.getElementById('object-5-text').innerHTML = '<h2>Object 5</h2>';

	document.getElementById('object-5-image').innerHTML = '<img src="object5.png" class="center" onclick="object5popup()">';
});
}

function object5popup() {
	document.getElementById("popup-5").classList.toggle("active");
}

function toggleObject6() {
    document.getElementById("popup-6").classList.toggle("active");
	
	document.querySelector("img#object-6.object-all").addEventListener("click", () => {
	document.getElementById("object-6").style.display = "none";

	document.getElementById('object-6-text').innerHTML = '<h2>Object 6</h2>';

	document.getElementById('object-6-image').innerHTML = '<img src="object6.png" class="center" onclick="object6popup()">';
});
}

function object6popup() {
	document.getElementById("popup-6").classList.toggle("active");
}

function toggleObject7() {
    document.getElementById("popup-7").classList.toggle("active");
	
	document.querySelector("img#object-7.object-all").addEventListener("click", () => {
	document.getElementById("object-7").style.display = "none";

	document.getElementById('object-7-text').innerHTML = '<h2>Object 7</h2>';

	document.getElementById('object-7-image').innerHTML = '<img src="object7.png" class="center" onclick="object7popup()">';
});
}

function object7popup() {
	document.getElementById("popup-7").classList.toggle("active");
}

function toggleObject8() {
    document.getElementById("popup-8").classList.toggle("active");
	
	document.querySelector("img#object-8.object-all").addEventListener("click", () => {
	document.getElementById("object-8").style.display = "none";

	document.getElementById('object-8-text').innerHTML = '<h2>Object 8</h2>';

	document.getElementById('object-8-image').innerHTML = '<img src="object8.png" class="center" onclick="object8popup()">';
});
}

function object8popup() {
	document.getElementById("popup-8").classList.toggle("active");
}

function toggleObject9() {
    document.getElementById("popup-9").classList.toggle("active");
	
	document.querySelector("img#object-9.object-all").addEventListener("click", () => {
	document.getElementById("object-9").style.display = "none";

	document.getElementById('object-9-text').innerHTML = '<h2>Object 9</h2>';

	document.getElementById('object-9-image').innerHTML = '<img src="object9.png" class="center" onclick="object9popup()">';
});
}

function object9popup() {
	document.getElementById("popup-9").classList.toggle("active");
}


function toggleSidePanel() {
    document.querySelector(".side-panel-toggle").addEventListener("click", () => {
        document.querySelector(".wrapper").classList.toggle("side-panel-open");
    });
}

var myScroll;

function loaded () {
	myScroll = new IScroll('#wrapper', {scrollX:true, scrollY: true,
		mouseWheel: true,
		indicators: [{
			el: document.getElementById('starfield1'),
			resize: false,
			ignoreBoundaries: true,
			speedRatioY: 0.4,
			speedRatioX: 0.4 /* Paralax Speeds */

		}, {
			el: document.getElementById('starfield2'),
			resize: false,
			ignoreBoundaries: true,
			speedRatioY: 0.2,
			speedRatioX: 0.2 /* Paralax Speeds */

		}]
	});
}

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, isPassive() ? {
	capture: false,
	passive: false
} : false);