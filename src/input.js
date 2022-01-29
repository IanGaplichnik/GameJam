export default class InputHandler {

    constructor(character) {
		document.addEventListener("keydown", (event) => {
			switch (event.keyCode) {
				case 38:
					if (!character.ifJump)
						character.jumpUp();
					break ;
			}
		});
		
		// document.addEventListener("keyup", (event) => {
		// 	switch (event.keyCode) {
		// 		case 38:
		// 			if (!character.jumpDown())	
		// 				character.jumpDown();
		// 			break ;
		// 	}
    	// });
	}
}
