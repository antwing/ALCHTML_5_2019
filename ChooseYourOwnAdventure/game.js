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
    
    Function Prison(){
        var prison = prompt("You wake up... Your body aches and your head is pounding. You try to get up, but it fails. It looks like you're in a prison, but why? /n -look around /n - go back to sleep ").toLowerCase();
        
        if(prison == "look around" || prison == "look"){
            var prisonLook = prompt("The Prison is small, dirty, and damp. A rat curries into a hole in the corner. There is a barred window to the back. a straw bed to the right. The cell bars and locked door to the front. /n move bed /pick lock").toLocaleLowerCase();
        };
        
        else if (prison == "go back to sleep"||prison == "sleep"){
            var sleep = prompt("so are you done? or would you like to actually try? /n yes /n no").toLocaleLowerCase();
            if (sleep == "yes" || sleep == "y" ){
                //exit
            };
            else{
                console.log("here we goooooooooo!")
                Game();
            };
            
        };
    };
};