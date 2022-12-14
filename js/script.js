let inputs = document.querySelectorAll("input[type=number]");
let box = document.querySelector("#border-previewer");
let style = window.getComputedStyle(box);
let result = document.querySelector("#result");
let btnCopy = document.querySelector("#btn-copy");
let span = document.querySelector("span")

const changingBorders = (event) => {

	if (event.target.id == "top-left") {
		box.style.borderTopLeftRadius = `${event.target.value}px`;
	}

	if (event.target.id == "top-right") {
		box.style.borderTopRightRadius = `${event.target.value}px`;
	}

	if (event.target.id == "bottom-left") {
		box.style.borderBottomLeftRadius = `${event.target.value}px`;
	}

	if (event.target.id == "bottom-right") {
		box.style.borderBottomRightRadius = `${event.target.value}px`;
	}

	bordersResult(style.borderTopLeftRadius, style.borderTopRightRadius, style.borderBottomLeftRadius, style.borderBottomRightRadius);
};

const bordersResult = (topLeft, topRight, bottomLeft, bottomRight) => {
	result.value = `${topLeft} ${topRight} / ${bottomLeft} ${bottomRight}`;
};

const copyToClipboard = () => {
	navigator.clipboard.writeText(`border-radius: ${result.value};`);
	
	span.style.opacity = "1";
	span.style.width = "16rem";
	span.style.height = "4rem";

	setTimeout(() => {
		span.innerText = "Copied successfully ✔️";
	}, 500);

	setTimeout(() => {		
		span.style.opacity = "0.5";
		span.style.width = "0rem";
		span.style.height = "0rem";
		span.innerText = "";
	}, 1500);
	
};

const keyMoved = (event) => event.key;


inputs.forEach((input) => {
	input.addEventListener("focus", () => input.select())
	input.addEventListener("input", changingBorders);
	btnCopy.addEventListener("click", copyToClipboard);
	input.addEventListener("keydown", keyMoved);			
});