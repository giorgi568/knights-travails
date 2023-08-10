class gameBoard {
	constructor(knight) {
		this.board = [];
		for(let i = 0; i < 8; i++){
			this.board[i] = [];
			for(let j = 0; j < 8; j++){
				this.board[i][j] = `${i}, ${j}`
			}
		}
		this.knight = null;
	}

	knightMoves(start, end){
		this.knight = start;

		while(this.knight !== end){

		}
	}
	makeMove(x,y,n) {
		let endPointX;
		let endPointY;

		if(n=1){
			endPointX = this.knight[0] + 2;
			endPointY = this.knight[1] + 1;			
		}else if (n=2) {
			endPointX = this.knight[0] + 2;
			endPointY = this.knight[1] - 1;
		}else if(n=3) {
			endPointX = this.knight[0] - 2;
			endPointY = this.knight[1] - 1;
		}else if(n=4) {
			endPointX = this.knight[0] - 2;
			endPointY = this.knight[1] + 1;
		}else if(n=5) {
			endPointX = this.knight[0] + 1;
			endPointY = this.knight[1] - 2;
		}else if(n=6) {
			endPointX = this.knight[0] + 1;
			endPointY = this.knight[1] + 2;
		}else if(n=7) {
			endPointX = this.knight[0] - 1;
			endPointY = this.knight[1] - 2;
		}else if(n=8) {
			endPointX = this.knight[0] - 1;
			endPointY = this.knight[1] + 2;
		}

		if(endPointX < 9 || endPointX > 0 ||
			endPointY < 9 || endPointY >0) {
			return [endPointX, endPointY];
		}else{
			return false;
		}
	}
}

let k = new gameBoard();
console.log(k.board);

