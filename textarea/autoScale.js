/*
Solution one.
Inspired by http://jsfiddle.net/TDAcr/
autor: huang
Date: 15 Oct 2015
Usage:
    element.addEventListener(event, autoScale(maxHeight), true/false);
    
    events:
    change	-onchange 	event
    cut		-oncut 		event
    past	-onpaste 	event
    drop	-ondrop 	event
    keydown	-onkeydown 	event
    keyup	-onkeyup 	event
*/

function autoScale(maxHeight) {
	var oldHeight = 0, newHeight = 0;
	return function (event) {
		var element = event.target;
        window.setTimeout(function() {
          element.style.height = '';
          newHeight = element.scrollHeight;
          if (newHeight > oldHeight && newHeight > maxHeight) {
          //scroll bar will apear
            element.style.height = oldHeight + 'px';
            element.style.overflowY = 'scroll';
          } else {
          //auto scale, set overflow-y to 'hidden' avoid flashing
            element.style.height = newHeight + 'px';
            oldHeight = newHeight;
            element.style.overflowY = 'hidden';
          }
        }, 0);
	}
}


/*
Solution 2.
Inspired by https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement#Examples
autor: huang
Date: 15 Oct 2015
Usage:
    element.addEventListener(event, autoScale(maxHeight), true/false);
    
    events:
    change	-onchange 	event
    cut		-oncut 		event
    past	-onpaste 	event
    drop	-ondrop 	event
    keydown	-onkeydown 	event
    keyup	-onkeyup 	event
*/

function autoScale(maxHeight) {
	   return function(event) {
           var element = event.target,
               scrollHeight = 0,
               clientHeight = 0;
          element.style.height = '';
          scrollHeight = element.scrollHeight;
          clientHeight = element.clientHeight;
        	window.setTimeout(function() {
                if (scrollHeight > clientHeight && scrollHeight < maxHeight)
                    element.style.height = scrollHeight + 'px';
                else if (scrollHeight >= maxHeight)
                    element.style.height = maxHeight + 'px';
          }, 0);
       }
}
