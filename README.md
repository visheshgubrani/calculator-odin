# calculator-odin
Objectives:
1.Read the value from the button
2. Display the value 
3. keep on adding the strings till the value button is being clicked 
4. Read the value of the operator 
5. Repeat 1-4 & perform the single calculation and display the result
6. repeat 1-5 until cleared. 
7. Should be able to perform calculations after equal to button



Hello, this is Bing. I’m happy to help you debug your code.😊

There are a few things that are wrong in your code.

First, you are passing the arguments to the operate function in the wrong order. You defined the function as operate(operator, num1, num2), but you are calling it as operate(num1, operator, num2). This will cause the function to use the wrong values for the calculation. You should either change the order of the arguments in the function definition or in the function call.

Second, you are using strings instead of numbers for your display and calculation. This will cause unexpected results when you try to perform arithmetic operations on them. For example, if you add “1” and “2”, you will get “12” instead of 3. You should use parseInt() or parseFloat() to convert the strings into numbers before passing them to the operate function.

Third, you are not resetting the display value after performing a calculation. This will cause the previous result to be appended to the next input. For example, if you calculate 1 + 2 and get 3, and then press 4, you will get 34 instead of 4. You should set the display value to an empty string or zero after displaying the result.