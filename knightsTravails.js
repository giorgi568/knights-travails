class gameBoard {
	constructor() {
		this.board = [];
		for(let i = 0; i < 8; i++){
			this.board[i] = [];
			for(let j = 0; j < 8; j++){
				this.board[i][j] = `${i}, ${j}`
			}
		}
	}
}

let k = new gameBoard();
console.log(k.board);