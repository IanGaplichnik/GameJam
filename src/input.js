export default class InputHandler {

    constructor() {
		document.addEventListener('keypress', (event) => {
			alert(event.keyCode);
		});
    }
}