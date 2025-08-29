1. Id :
Searches by the id attribute only. Because Id is unique and id returns a single Element,else if  there's no element found it returns null

Class :
Searches all the elements thar have given class name. Returns an HTML collections( like an array but not actually an array ). & needed to loop through to access multiple Elements

QuarySelector :
Use css selector (like: .class , #id , div p, etc.)
Return the first Element that matched
no element matched to return null

QuarySelectorAll :
this also uses css Selector
Returns a Nodelist.(similar to array but more modern to a HTML collections)
Used forEach directly
Select matching all Elements



2. How do you create and insert a new element into the DOM?
   1. Create a new Element
   2. Add content or attributes
   3. Insert the element into the DOM
   4. There is many more rules to insert an element into the DOM


3.Event Bubbling is a DOM Event mechanism where the event starts from the child element and moves stepwise towards the parent Element.
 when click on a button, the button event handler runs first, then it's parent div and then it's parent body and finally the document.So this can be thought of as bubbling up from child to parent.


 4. Event delegation is a JavaScript Event handling patern that helps increase the efficiency of the DOM.Event delegation is a technique where instead of providing separate event handlers for child Elements, a single handler  is placed on their  parent element.
   1.It works on event bubbling
   2.The parent element catches any child element that has en event.
   3.It is convenient to use event delegation.
      a. performance
      b. dynamic elements
      c. cleaner and maintable code
      d. bubble events


5. PreventDefault()
Stops the default browser action for an Event.
does not stops the event from bubbling

    StopPropagation()
Stops the event from bubbling or capturing the parent elements.
It does not stop the default browser action.
Useful when you want a child element to handle an event without triggering parent handlers.