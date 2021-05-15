class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    //write code to change the background color here
    background("Yellow")
    //write code to show a heading for showing the result of Quiz
     textSize(25);
     text("RESULT OF THE QUIZ",430,40);
    //call getContestantInfo( ) here
     Contestant.getPlayerInfo();
    //write condition to check if contestantInfor is not undefined
     
    //write code to add a note here
    if(allContestants !==undefiend){
      var y = 220;
      fill("blue")
      textSize(20);
      text("*NOTE: Contestant who answered correct are highlighted in green colour!",130,230)
    }
    //write code to highlight contest who answered correctly
    for (var plr in allContestants){
      var correctAns = "2";
      if(correctAns === allContestants[plr].answer)
        fill("Green")
      else
        fill("red");
    }
    y+=20
  text(allContestant[plr].name+':'+allContestantplr.answer,250,y)
}
}