//single line comment

/*

 multiLine comment
 
 */

//document.write("<h1>I can't wait for <em>spring!</em></h1>");

//alert("warning! Will Robinson... Warning!");
//confirm("Do you like pokemon?");
//prompt("what type of pokemon do you like?");

var woops = alert("I didnt understand. would you repeat?");
    
var inventory = {
        sword: 0,
        lamp: 0,
        rope: 0,
        loot: 0
<<<<<<< HEAD
    }
    
   
var checkLoot = function () {
        
    alert("This is how much you got" + inventory.loot);
   
}
    
=======
    };

var dead = false;
   
var checkLoot = function () {
        
    window.alert("This is how much you got" + inventory.loot);
};

function gameEnd() {
    //end game
    window.alert("The game is over. Bye!");
}

function Retry() {
    var retry = window.prompt("would you like to try again? \n yes \n no").toLowerCase();
    if (retry === "yes" || retry === "y") {
        dead = false;
        Game();
    } else if (retry === "n" || retry === "no") {
        gameEnd();
    } else {
        window.alert(woops);
    }
        
}
var wizName = ["jimmy", "dolf", "brian", "theo"];
window.alert("legend of " + wizName[Math.floor(Math.random() * 4)] + "!");

window.alert("before we start we need to check your alive");
if (dead === false){
    window.alert("you look good to me, here we go");
    Game();
}
else{
    window.alert("well it shouldn't matter anyways, you'll die anyways");
    Game();
}



function Game() {

    var playerName = window.prompt("What is your name?");
>>>>>>> master
  
var wizName = ["jimmy, dolf, brian, theo"];
    
  
alert("legend of " + wizName[Math.floor(Math.random(0, 4))] + "!");
                                
 
var playerName = prompt("What is your name?");
    
  
while (!confirm("Are you sure you want ") + playerName + " as your name?") {
        
    playerName = prompt("What would you like?");
    
}
                                
  
alert("Welcome to the land of lollypop" + playerName);
function gameEnd() {
    //end game
    alert("The game is over. Bye!");
}
    


function Game() {

    //beginning of game
    function Prison() {
        var prison = prompt("You wake up... Your body aches and your head is pounding. You try to get up, but it fails. It looks like you're in a prison, but why? \n -look around \n - go back to sleep ").toLowerCase();
        
<<<<<<< HEAD
        if (prison === "look around" || prison === "look") {
            var prisonLook = prompt("The Prison is small, dirty, and damp. A rat curries into a hole in the corner. There is a barred window to the back. a straw bed to the right. The cell bars and locked door to the front. \n move bed \n pick lock").toLocaleLowerCase();
=======
        if (prison === "look around" || prison === "look" || prison === "l") {
            var prisonLook = window.prompt("The Prison is small, dirty, and damp. A rat scurries into a hole in the corner. There is a barred window to the back. a straw bed to the right. The cell bars and locked door to the front. \n move bed \n pick lock \n check pockets").toLocaleLowerCase();
>>>>>>> master
            //move bed
                                
            if (prisonLook === "move" || prisonLook === "move bed" || prisonLook === "m") {
                                   
                alert("after a small a few moments of pushing the bed moves and there apears to be a tunnel");
                tunnels();
            }
<<<<<<< HEAD
                //tunnels
            //warn player of 50% chance of success
            //pick lock
                //fight gaurd
                    //50% chance freedom 
        } else if (prison === "go back to sleep" || prison === "sleep") {
            var sleep = prompt("so are you done? or would you like to actually try? /n yes /n no").toLocaleLowerCase();
            if (sleep === "yes" || sleep === "y") {
                //game end
                gameEnd();
            } else {
                console.log("here we goooooooooo!");
                Prison();
            }
            
        }
    }                        //prison tunnels
                                    function tunnels() {
                                 
        var enterTunnel = prompt("would you like to go in? \n yes \n no").toLocaleLowerCase();
                                
               
        if (enterTunnel === "yes" || enterTunnel === "y") {
                                
            // the tunnel system begins
            while (i < 5 || tunnel === "r" || tunnel === "restart" ) {
=======
            if (prisonLook === "check" || prisonLook === "check pockets" || prisonLook === "c") {
            checkLoot();
            }
            
            if (prisonLook === "lock" || prisonLook === "pick" || prisonLook === "pick lock" || prisonLook === "p") {
                window.alert ("The lock quickly opens with a loud clang. A guard comes running in");
                var fight = window.prompt("do you want to fight? \n no \n yes").toLocaleLowerCase();
            
           
                if (fight === "y" || fight === "yes") {
>>>>>>> master
                
                 var tunnel = prompt(" It apears to be a maze with tunnels in all directions. Which way do you want to go? \n north \n east \n south \n west \n restart");
                
<<<<<<< HEAD
                i++;
            }
                                   
        } else if (enterTunnel === "no" || enterTunnel === "n") {
                                 
                 alert(" you slide the bed back");
                                
                 Prison();                
               
             
        } else {
            woops();
        
        }
    
    }

        
=======
                
                    if (fighting === 1){
                        window.alert("you fought hard but the guard killed you");
                        dead = true;
                        Retry();
                    
                
                    } else {
                        window.alert("you're able to over power the guard and you're free!");
                        Swamp();
                    }
                    
                } else {
                    window.alert(" the guard quickly knocks you out");
                    Prison();
                
                }
            } else{
            window.alert(woops);
            Prison();
            }
        }
        if (prison === "go back to sleep" || prison === "sleep" || prison === "s") {
            var sleep = window.prompt("so are you done? or would you like to actually try? /n yes /n no").toLocaleLowerCase();
               
            if (sleep === "yes" || sleep === "y") {
                //game end
                gameEnd();
            }else{
                window.alert ("lets try this again");
                Prison();
            }
        }
            
        else{
            window.alert(woops);
            Prison();
            
        }
    }
>>>>>>> master

//next part 
    function Swamp () 
    {
        var swampEnv = prompt ("you got out and you are now in a swamp. There is a path to north, a murky pond to the east, and the prison is to the south. \n follow path north \n swim").toLocaleLowerCase();
        
        //follow path
<<<<<<< HEAD
        if(swampEnv === "follow" ||swampEnv === "follow path"|| swampEnv === "north")
        {
            var hut = true;
            var swampPath = prompt ("You follow the path to the north. along the way you notice a hut with a light buring inside. \n enter hut \n burn down hut \n continue along path").toLocaleLowerCase;
=======
        if(swampEnv === "follow" ||swampEnv === "follow path"|| swampEnv === "north"|| swampEnv === "path" || swampEnv === "f")
        {
            var swampPath = window.prompt ("You follow the path to the north. along the way you notice a hut with a light buring inside. \n enter hut \n burn down hut \n continue along path").toLocaleLowerCase;
>>>>>>> master
            
            switch(swampPath) {     //burn hut
                case "burn": 
                case "burn down hut":
                case "b":
                     
                    alert("the hut is quickly engulfed in flames. You hear a deathening shreak  and a smell of buring flesh begins to eminate from inside of the hut. You glory at the flames as they lick the walls of the hut and everything is quickly turned to cinder and smoke.");
                      // no more hut
<<<<<<< HEAD
                    var hut = false;
=======
>>>>>>> master
                    break;
                    
                    //go in hut
                case "enter":
                case "e":
                
                    var hutSpace = prompt ("you go inside the hut and you find an old hag who is quietly mumbling to herself over a book. You notice a sword to the left \n talk with her \n take sword \n leave hut").toLocaleLowerCase();
                    //take the sword
<<<<<<< HEAD
                    if(hutSpace === "take sword" || hutSpace === "take")
                    {
=======
                    if(hutSpace === "take sword" || hutSpace === "take" || hutSpace === "t") {
>>>>>>> master
                    
                        inventory.sword ++;
                  
                        var hagAttack = prompt ("the hag notices you take her sword and runs at you with a ladle \n fight \n run").toLocaleLowerCase();
                                if (hagAttack = "run")
                                {
                                    alert (" the Hag hits you before you can run away. I'm sorry but the hag doesn't take lightly people taking her stuff so you've been turned into a newt and put into a jar");
                                // retry
                                    var hutRetry = prompt ("would you like to try again? \n yes").toLowerCase();
                                
                                    if (hutRetry === "yes"|| hutRetry === "y")
                                    {
                                        Swamp();
                                    }
                                
                                    else
                                    {
                                        EndGame();
                                
                                    }
                                
<<<<<<< HEAD
                              
                                }
=======
                        if (hagAttack === "run" || hagAttack === "r") {
                                    window.alert ("the Hag hits you before you can run away. I'm sorry but the hag doesn't take lightly people taking her stuff so you've been turned into a newt and put into a jar");
                                    Retry();
                        } else if (hagAttack === "fight" || hagAttack === "fight") {
                            window.alert ("the hag raises her ladel to hit you but you parry with your sword.");
                            window.prompt("She falls over being caught off guard. Do you kill her? \n no \n yes");
                            window.alert("She shreeks as you run her through. It had to be done.")        
                        }    
>>>>>>> master
                    }
                   break;
<<<<<<< HEAD
                    
                    //follow path
                case "continue" || "path" || "continue along path":
                    alert("you decided to just leave the hut and continue on the path. Cool");
                    var road = prompt("the path goes on for a bit but now there is a split \n ").toLocaleLowerCase();
=======
                
                case "continue":
                case "path":
                case "p":
                    Path();
                    break;
                default:
                    window.alert(woops);
                    Swamp();
>>>>>>> master
                    break;
                                
                default:
                                //miss type so retry
                            woops();    
                            
                   
                break;
                               
                                
            }
            //inside the hut
   
        
        }
    }
<<<<<<< HEAD
}

Game();
=======
     
function Path(){ //follow path
                    window.alert("you decided to just leave the hut and continue on the path. Cool");
                    var road = window.prompt("the path goes on for a bit but now there is a split \n east \n west").toLocaleLowerCase();
                    if (road === "west" || road === "w"){
                        window.alert("As you head to the west you spot a castle.");
                    
                        var castle = window.prompt("You approach the castle. \n go in \n go east").toLocaleLowerCase();
                        if(castle === "go" || castle === "in" || castle === "go in" || castle === "g"){
                            window.alert ("It's locked, sucks to suck. looks like we're going east");
                        }
                    } else if (road === "east" || road === "e") {
                        window.alert("you travel east for a distance the path ends as you come up to a well.")
                        var well = window.prompt("what do you want to do?\n get water \n look down \n go in \n head west \n make a wish").toLocaleLowerCase();
                        switch(well){
                            case "get water":
                            case "water":
                                window.alert("you lower the bucket and pull it out. You take a long swig of the water of you just collected");
                                // funtion?
                                well;
                            break;
                            case "look down":
                            case"look":
                            case"l":
                                window.alert("you look down the deep well that seems to never end.");
                                
                                break;
                            case "go":
                            case"go in":
                            case"g":
                                window.alert("you grab the rope attached to the well and down you go");
                                window.alert("down, down, down you go. As you decend it starts to get really cold. You begin to freeze, and then the rope breaks");
                                window.alert("you fall and it becomes so cold you pass out. Then you wake up on warm grass. You're now free");
                                
                                break;
                            case "west":
                            case"head west":
                            case"w":
                                road;
                                
                                break;
                            case "make a wish":
                            case "wish":
                                var wish = window.prompt("what do you want to wish");
                                while (!window.confirm("Are you sure you want " + wish + " as your name?")) {
                                    wish = window.prompt("What would you like?");
                                }
                                break;
                            default:
                                window.alert(woops);
                                Path();
                                break;
                        
                        }
                    }else{
                        window.alert(woops);
                        Path();
                    }
}
}
>>>>>>> master
