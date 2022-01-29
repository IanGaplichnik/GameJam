class InputHandler {

    constructor(character, obstacles) {
		this.state = 0;
		document.addEventListener("keydown", (event) => {
			switch (event.keyCode) {
				case 38:
					if (!character.ifJump)
						character.jumpUp();
					break ;
			}
		});
		
		document.addEventListener("keydown", (event) => {
			switch (event.keyCode) {
				case 40:
					if (!this.state)
						this.state++;
					else
						this.state = 0;
					// obstacles.forEach(object => object.reverse(state));
					break ;
			}
		});
		//document.addEventListener("keyup", (event) => {
		// 	switch (event.keyCode) {
		// 		case 38:
		// 			if (!character.jumpDown())	
		// 				character.jumpDown();
		// 			break ;
		// 	}
    	// });
	}
}
