//single line comment

/*

 multiLine comment
 
 */

//document.write("<h1>I can't wait for <em>spring!</em></h1>");

 //alert("warning! Will Robinson... Warning!");
//confirm("Do you like pokemon?");
//prompt("what type of pokemon do you like?");
Game();


funtion Game(){
    document.write("the unforuntae tale of ");
    var playerName = prompt ("What is your name?");
    alert("Welcome to the land of lollypop" + playerName);
    
    //beginning of game
    Function Prison(){
        var prison = prompt("You wake up... Your body aches and your head is pounding. You try to get up, but it fails. It looks like you're in a prison, but why? \n -look around \n - go back to sleep ").toLowerCase();
        
        if(prison == "look around" || prison == "look"){
            var prisonLook = prompt("The Prison is small, dirty, and damp. A rat curries into a hole in the corner. There is a barred window to the back. a straw bed to the right. The cell bars and locked door to the front. \n move bed \n pick lock").toLocaleLowerCase();
            //move bed
                //tunnels
            //warn player of 50% chance of success
            //pick lock
                //fight gaurd
                    //50% chance freedom
        };
        
        //end game
        else if (prison == "go back to sleep"||prison == "sleep"){
            var sleep = prompt("so are you done? or would you like to actually try? /n yes /n no").toLocaleLowerCase();
            if (sleep == "yes" || sleep == "y" ){
                //exit
            };
            //restart
            else{
                console.log("here we goooooooooo!")
                prison();
            };
            
        };
    };
    Funtion Swamp() {
        var swampEnv = prompt ("you get out and you are now in a swamp. There is a path to north, a murky pond to the south, and the prison is to the south. \n follow path \n swim");
        
        if(swampEnv == "follow" ||swampEnv == "follow path"){
            var hut = true;
            var swampPath = prompt ("You follow the path to the north. along the way you notice a hut with a light buring inside. \n enter hut \n burn down hut \n continue along path");
            
            //hut burned
            if(swampPath = "burn down hut"){
                alert("the hut is quickly engulfed in flames and everything inside is turned to cinder and smoke. nothing is left");
                // no more hut
               var hut = false;
                
            }
            //inside the hut
            elseif (swampPath =="enter"){
                alert ("you go inside the hut and you find an old hag who is quietly mumbling to herself over a book \n talk with her \n leave hut");
            }
        }
    }
};