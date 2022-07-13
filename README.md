# Helpful Tips, Tricks, and More
A few handy dandy reminders for tackling the Donut Maker application.
 - Functions are your best friends. Make as many as you need, no matter how big or small they are. In my first iteration, I had functions as small as just handling addition.
 - Don't forget that there is a difference between calling a function and defining/declaring  a function. As well, inputs you create when defining/declaring are entirely separate from variables that already exist, even if they share the same name.
 - Don't forget the steps needed for DOM Manipulation. First, grab your HTML element and store it in a variable. Then, change that HTML element's text/style, or add an event listener that runs a nameless function. Finally, if you added an event listener, *call* functions within the event listeners that perform the appropriate task.
 - You do not *need* a class for this assignment like the guidelines say, but I know some might prefer to do that since it mimics C# a bit better. There is no right or wrong. There is no try or try not, only do, or whatever.
 - Make it function first, then make it pretty.
 - 'Retrieve a donut count' and similar tasks in the assignment guidelines are redundant. Store them in variables (or properties) and that is enough. You don't need functions/methods to retrieve those values.
 - Math is hard. Coding math is harder. The code for finding out how many donuts per click you should be adding is the following: **Math.pow(1.1, multiplierCount);** Similarly, you can find the cost for each next multiplier using a similar formula. Same with the auto-clickers.
 - I can tell when you copy paste. If you copied that above line, it will error because you didn't have a variable called 'multiplierCount'
 - Don't worry about automating the clickers yet. We'll handle that functionality on Thursday.
 - If your functions are more than a few lines, you might be overthinking things. Take a breather, ask a peer for help.