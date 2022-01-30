class InputHandler {

    constructor(character) {
		this.state = 0;
		this.reset = 0;
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
					break ;
			}
		});
	
		document.addEventListener("keydown", (event) => {
			switch (event.keyCode) {
				case 32:
					if (gamestate.value === 1)
					{
						this.reset = 1;
						gameLoop();
					}
					else
						this.reset = 0;
					break ;
			}
		});
	}
}
