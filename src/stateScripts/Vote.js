//state 7
export default class Vote{
	constructor(){
		//bind class functions
		this.update = this.update.bind(this);
		this.render = this.render.bind(this);
	}
	update(x,y, width, height, socket, roomID,){
		if(x>(width/16)
		   &&x<(width-width/16)
		   &&y>(8*height/18)
		   &&y<(11*height/18)){
			socket.emit('vote', [roomID, 'A']);
			return 8;
		}//end if xy in A
		
		if(x>width/16
		   &&x<(width-width/16)
		   &&y>(12*height/18)
		   &&y<(15*height/18)){
			socket.emit('vote', [roomID, 'B']);
			return 8;
		}//end if xy in B
		return 7;
	}
	render(ctx, ownerFlag, width, height){
		//background
		ctx.fillStyle = 'rgb(52,152,219)';
		ctx.fillRect(0, 0, width, height);
		
		//title
		ctx.fillStyle = 'rgb(174,214,241)';
		var font_size = height/9;
		ctx.font = 'Bold '+font_size+'px Courier';
		ctx.textAlign = "center";
		ctx.fillText("CHOOSE",width/2, 2*height/18);
		ctx.fillText("A",width/2, 4*height/18);
		ctx.fillText("CHAMP",width/2, 6*height/18);
		
		//buttons
		ctx.fillStyle = 'rgb(27,79,114)';
		ctx.fillRect(width/16, 8*height/18, 7*width/8, 3*height/18);
		ctx.fillRect(width/16, 12*height/18, 7*width/8, 3*height/18);
		
		//labels
		ctx.fillStyle = 'rgb(52,152,219)';
		ctx.font = font_size+'px Courier';
		ctx.fillText("A",width/2, 10*height/18);
		ctx.fillText("B",width/2, 14*height/18);
	}
}