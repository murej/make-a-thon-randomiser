	$(document).ready(function() {
		// Declare these variables so you don't have
    // to type the full namespace
    var IOBoard = BO.IOBoard;
    var IOBoardEvent = BO.IOBoardEvent;
    var Button = BO.io.Button;
    var ButtonEvent = BO.io.ButtonEvent;

    // Set to true to print debug messages to console
    BO.enableDebugging = true; 


    
    // If you are not serving this file from the same computer
    // that the Arduino Leonardo board is connected to, replace
    // window.location.hostname with the IP address or hostname
    // of the computer that the Arduino board is connected to.
    /* var host = window.location.hostname; */
    var host = window.location.hostname;
    // if the file is opened locally, set the host to "localhost"
    if (window.location.protocol.indexOf("file:") === 0) {
        host = "localhost";
    }
    
    
    var arduino = new IOBoard(host, 8887);
    
    // Variables
    var button;


    // Listen for the IOBoard READY event which indicates the IOBoard
    // is ready to send and receive data
    arduino.addEventListener(IOBoardEvent.READY, onReady);

    function onReady(event) {
        // Remove the event listener because it is no longer needed
        arduino.removeEventListener(IOBoardEvent.READY, onReady);


        // Create a new Button object to interface with the physical
        // button wired to the I/O board
        button = new Button(arduino, arduino.getDigitalPin(4));
        
        // Listen for button press and release events
        button.addEventListener(ButtonEvent.PRESS, onPress);
        button.addEventListener(ButtonEvent.RELEASE, onRelease);
          
    }

    function onPress(evt) {
        // Get a reference to the target which is the button that 
        // triggered the event
        var btn = evt.target;
        // Display the state on the page
        /* $('#state').html("Button " + btn.pinNumber + " state: Pressed"); */
        console.log("Button Pressed!!!!");
    }

    function onRelease(evt) {
        // Get a reference to the target which is the button that 
        // triggered the event      
        var btn = evt.target;
        // Display the state on the page
        $('#state').html("Button " + btn.pinNumber + " state: Released");
        console.log("Button Released!!!!");
    }
	$("ul").jSlots({
	
	    number : 1,          // Number: number of slots
	    winnerNumber : 1,    // Number or Array: list item number(s) upon which to trigger a win, 1-based index, NOT ZERO-BASED
	    spinner : 'button',  // CSS Selector: element to bind the start event to
	    spinEvent : 'click', // String: event to start slots on this event
	    onStart : $.noop,    // Function: runs on spin start,
	    onEnd : $.noop,      // Function: run on spin end. It is passed (finalNumbers:Array). finalNumbers gives the index of the li each slot stopped on in order.
	    onWin : $.noop,      // Function: run on winning number. It is passed (winCount:Number, winners:Array, finalNumbers:Array)
	    easing : 'easeOutQuad',    // String: easing type for final spin. I recommend the easing plugin and easeOutSine, or an easeOut of your choice.
	    time : 10000,         // Number: total time of spin animation
	    loops : 2            // Number: times it will spin during the animation
		
	});

	
	$(window).resize(function() {
		location.reload();
	});

});



function removeCover() {
	
}

function addCover() {
	
}