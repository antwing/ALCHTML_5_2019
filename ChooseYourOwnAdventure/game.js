//single line comment

/*

 multiLine comment
 
 */

//document.write("<h1>I can't wait for <em>spring!</em></h1>");

 //alert("warning! Will Robinson... Warning!");
//confirm("Do you like pokemon?");
//prompt("what type of pokemon do you like?");
Game();


function Game(){
    var woops = ("I didnt understand. would you repeat?");
    var inventory = {
        sword: 0,
        lamp: 0,
        rope: 0,
        loot: 0,
    }
    var fight{
        if (sword === 1){
            
        }
        else{
            
        }
    }
    
    var wizName = ["jimmy, dolf, brian, theo"];
    
    alert("legend of " +wizName[Math.floor(Math.random(0,4)] + "!");
        
    document.write("the unforuntae tale of ");
                                
    var playerName = prompt ("What is your name?");
                                
    alert("Welcome to the land of lollypop" + playerName);
    
    //beginning of game
    function Prison(){
        var prison = prompt("You wake up... Your body aches and your head is pounding. You try to get up, but it fails. It looks like you're in a prison, but why? \n -look around \n - go back to sleep ").toLowerCase();
        
        if( prison === "look around" || prison === "look"){
            var prisonLook = prompt("The Prison is small, dirty, and damp. A rat curries into a hole in the corner. There is a barred window to the back. a straw bed to the right. The cell bars and locked door to the front. \n move bed \n pick lock").toLocaleLowerCase();
            //move bed
                                if prisonLook === "move" || prisonLook === "move bed"{
                                    alert ("after a small a few moments of pushing the bed moves and there apears to be a tunnel");
                                    
                                }
                //tunnels
            //warn player of 50% chance of success
            //pick lock
                //fight gaurd
                    //50% chance freedom
        }
        
        //end the game
        else if ( prison === "go back to sleep" || prison === "sleep"){
            var sleep = prompt("so are you done? or would you like to actually try? /n yes /n no").toLocaleLowerCase();
            if (sleep == "yes" || sleep == "y" ){
                //exit
            }
            //restart
            else{
                console.log("here we goooooooooo!");
                Prison();
            }
            
        }
    }                        //prison tunnels
                                
                                function tunnels() {
                                   var enterTunnel = prompt("would you like to go in? \n yes \n no").toLocaleLowerCase();
                                if enterTunnel === "yes" || enterTunnel === "y" {
                                // the tunnel system begins
                                    var tunnel = prompt ("");
                                }
                                else enterTunnel === "no" || enterTunnel === "n" {
                                 alert (" you slide the bed back");
                                Prison();
                                }
                                }

//next part 
    function Swamp() {
        var swampEnv = prompt ("you got out and you are now in a swamp. There is a path to north, a murky pond to the east, and the prison is to the south. \n follow path north \n swim").toLocaleLowerCase();
        
        //follow path
        if(swampEnv == "follow" ||swampEnv == "follow path"|| swampEnv == "north"){
            var hut = true;
            var swampPath = prompt ("You follow the path to the north. along the way you notice a hut with a light buring inside. \n enter hut \n burn down hut \n continue along path").toLocaleLowerCase;
            
            switch(swampPath){

                    //burn hut
                case "burn"||"burn down hut":
                     
                    alert("the hut is quickly engulfed in flames. You hear a deathening shreak  and a smell of buring flesh begins to eminate from inside of the hut. You glory at the flames as they lick the walls of the hut and everything is quickly turned to cinder and smoke.").toLowerCase();
                      // no more hut
                    var hut = false;
                    break;
                    
                    //go in hut
                case "enter" && hut = true:
                
                    var hutSpace = prompt ("you go inside the hut and you find an old hag who is quietly mumbling to herself over a book. You notice a sword to the left \n talk with her \n take sword \n leave hut").toLocaleLowerCase();
                    //take the sword
                    if(hutSpace === "take sword" || hutSpace === "take"){
                    
                        inventory.sword ++;
                  
                        var hagAttack = prompt ("the hag notices you take her sword and runs at you with a ladle \n fight \n run").toLocaleLowerCase();
                                if (hagAttack = "run")
                                {
                                    alert (" the Hag hits you before you can really run away. I'm sorry but the hag doesn't take lightly people taking her stuff so you've been turned into a newt and put into a jar");
                                // retry
                                    var hutRetry = prompt ("would you like to try again? \n yes").toLowerCase();
                                
                                    if (hutRetry == "yes"|| hutRetry == "y"){
                                        Swamp();
                                    }
                                
                                    else{
                                        EndGame();
                                
                                    }
                                
                              
                                }
                    }
                   break;
                    //follow path
                case "continue" || "path" || "continue along path":
                    alert("you decided to just leave the hut and continue on the path. Cool");
                    var road
                    break;
                                
                default:
                                //miss type so retry
                            alert ( woops ) ;    
                            
                   
                break;
                               
                                
            }
            //inside the hut
    }
}