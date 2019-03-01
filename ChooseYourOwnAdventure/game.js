//single line comment

/*

 multiLine comment
 
 */

//document.write("<h1>I can't wait for <em>spring!</em></h1>");

//alert("warning! Will Robinson... Warning!");
//confirm("Do you like pokemon?");
//prompt("what type of pokemon do you like?");

var woops = window.alert("I didnt understand. would you repeat?");
var inventory = {
        sword: 0,
        lamp: 0,
        rope: 0,
        loot: 0
    };
    
   
var checkLoot = function () {
        
    alert("This is how much you got" + inventory.loot);
   
};
    
  
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
    
        
    function tunnels() {
       
        var enterTunnel = prompt("would you like to go in? \n yes \n no").toLocaleLowerCase();
     // the tunnel system begins
        
        if (enterTunnel === "yes" || enterTunnel === "y") {
            var i = 0;        
            while (i < 5) {
                var tunnel = prompt("It apears to be a maze with tunnels in all directions. Which way do you want to go? \n north \n east \n south \n west ");
                i++;
            }
                                   
        } else if (enterTunnel === "no" || enterTunnel === "n") {
            alert(" you slide the bed back");
            
            Prison();
            
        } else {
            woops();
        
        }
    
    }

    //beginning of game
    
    function Prison() {
        var prison = prompt("You wake up... Your body aches and your head is pounding. You try to get up, but it fails. It looks like you're in a prison, but why? \n -look around \n - go back to sleep ").toLowerCase();
        
        if (prison === "look around" || prison === "look") {
            var prisonLook = prompt("The Prison is small, dirty, and damp. A rat curries into a hole in the corner. There is a barred window to the back. a straw bed to the right. The cell bars and locked door to the front. \n move bed \n pick lock \n check pockets").toLocaleLowerCase();
            //move bed
                                
            if (prisonLook === "move" || prisonLook === "move bed") {
                                   
                alert("after a small a few moments of pushing the bed moves and there apears to be a tunnel");
                tunnels();
            }
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
                alert("here we goooooooooo!");
                Prison();
            }
            
        }
        else if (prisonLook === "check" || prisonLook === "check pockets"){
            checkLoot();
        }
    }

//next part 
    function Swamp () 
    {
        var swampEnv = prompt ("you got out and you are now in a swamp. There is a path to north, a murky pond to the east, and the prison is to the south. \n follow path north \n swim").toLocaleLowerCase();
        
        //follow path
        if(swampEnv === "follow" ||swampEnv === "follow path"|| swampEnv === "north")
        {
            var hut = true;
            var swampPath = prompt ("You follow the path to the north. along the way you notice a hut with a light buring inside. \n enter hut \n burn down hut \n continue along path").toLocaleLowerCase;
            
            switch(swampPath) {     //burn hut
                case "burn" || "burn down hut":
                     
                    alert("the hut is quickly engulfed in flames. You hear a deathening shreak  and a smell of buring flesh begins to eminate from inside of the hut. You glory at the flames as they lick the walls of the hut and everything is quickly turned to cinder and smoke.");
                      // no more hut
                    var hut = false;
                    break;
                    
                    //go in hut
                case "enter" && hut === true:
                
                    var hutSpace = prompt ("you go inside the hut and you find an old hag who is quietly mumbling to herself over a book. You notice a sword to the left \n talk with her \n take sword \n leave hut").toLocaleLowerCase();
                    //take the sword
                    if(hutSpace === "take sword" || hutSpace === "take")
                    {
                    
                        inventory.sword ++;
                  
                        var hagAttack = prompt ("the hag notices you take her sword and runs at you with a ladle \n fight \n run").toLocaleLowerCase();
                                if (hagAttack === "run")
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
                                        gameEnd();
                                
                                    }
                                
                              
                                }
                    }
                   break;
                    
                    //follow path
                case "continue" || "path" || "continue along path":
                    alert("you decided to just leave the hut and continue on the path. Cool");
                    var road = prompt("the path goes on for a bit but now there is a split \n east \n west").toLocaleLowerCase();
                    if (road === "west"){
                        alert("As you head to the west you spot a castle.")
                    var castle = prompt("You approach the castle. \n go in \n go east").toLocaleLowerCase();
                    } else if (road === "east") {
                        alert("you travel east for a distance the path ends as you come up to a well.")
                        var well = prompt("what do you want to do?\n get water \n look down \n go in \n head west \n make a wish").toLocaleLowerCase();
                        switch(well){
                            case "get water" || "water":
                                alert("you lower the bucket and pull it out. You take a long swig of the water of you just collected");
                                // funtion?
                                well;
                            break;
                            case "look down" || "look":
                                alert("you look down the deep well that seems to never end.");
                            
                                break;
                            case "go" || "go in":
                                alert("you grab the rope attached to the")
                                break;
                            case "west" || "head west":
                            
                                break;
                            case "make a wish" || "wish":
                                break;
                            default:
                                woops();
                            
                                break;
                        }
                    }
                    break;
                                
                default:
                    woops();
                break;
                               
                                
            }
            //inside the hut
   
        
        }
    }
}

Game();