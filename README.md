# Node JSNAD notes
* ### 3 -  The Node Binary
   - #### Printing Command Options
   - #### Checking Syntax
   - #### Dynamic Evaluation
   - #### Preloading Modules
   - #### Stack Trace Limit
* ### 4 -  Debugging _and_ Diagnostics
* ### 5 -  Key JavaScript Concepts
* ### 6 -  Packages & Dependencies
* ### 7 -  Node Module System
* ### 8 -  Asynchronous Control Flow
* ### 9 -  Node Event System
* ### 10 - Handling Errors
* ### 11 - Using Buffers
* ### 12 - Working with Streams
* ### 13 - Interacting with the File System
* ### 14 - Process & Operating Systems
* ### 15 - Creating Child Processes
* ### 16 - Writing Unit Tests
____
&nbsp;

## 3 - The Node Binary
&nbsp;

The Node.js platform is almost entirely represented by the node binary executable.

***binary file*** is pretty much everything that is not plain text.<br>
***binary executable file***  is a a file in a machine language for a specific processor.

&nbsp;
### **Printing Command Options**

To see all the Node Command line flags:

```js
$ node --help
```

To view the Node JS runtime engine v8 flags:

```js
$ node --v8-options
```
&nbsp;
### **Checking Syntax**

Checking that a file parses without running it:

```js
$ node --check app.js

$ node -c app.js
```

&nbsp;
### **Dynamic Evaluation**

Node can directly evaluate code in the terminal (shell), by using either:  
1. **-p** or **--print** flag (evaluates & prints)  
2. **-e** or **--eval** flag (only evaluates)  

The following will print 2

```js
$ node --print "1+1"
```

The following will not print anything because we are evaluating the expression and not printing it.

```js
$ node --eval "1+1"
```

evaluate --> we are finding out what the result is. however in this example we are not printing the result to the screen.

&nbsp;
#### Using modules

We can also use modules without having to import them, ie in the command line we can do:

```js
$ node -p "fs.readdirSync('.').filter((f) => /.js$/.test(f))"
```

The above would print all the files with the .js extension in the current working directory.

&nbsp;
### **Preloading Modules**

With Node we can preload a module, so that it starts before any other modules are loaded:  
1. **-r** or **--require** flag  

```js
$node -r ./preload.js app.js
```

The above command would load preload.js followed by app.js

&nbsp;
### **Stack Trace limit**

Stack traces are generated for any **Errors** that occur. By default, they will contain the last ten stack frames (function call sites)

**Aside:** a ***stack trace*** is a representation of the call stack at a certain point in time, with each element representing a method (function) invocation.  

The stack trace limit can be modified with the **--stack-trace-limit** flag, which is part of the JavaScript V8 runtime engine and can be found in the output of the **-v8-options** flag.


```js
$ node --stack-trace-limit=101 apps.js
```

So in the above we know that app,js will generate an error at 100, so with the above command all the stack traces will be printed to the terminal.

&nbsp;

## 4 -  Debugging _and_ Diagnostics
&nbsp;

## 5 -  Key JavaScript Concepts
&nbsp;

## 6 -  Packages & Dependencies
&nbsp;

## 7 -  Node Module System
&nbsp;

## 8 -  Asynchronous Control Flow
&nbsp;

## 9 -  Node Event System
&nbsp;

## 10 - Handling Errors
&nbsp;

## 11 - Using Buffers
&nbsp;

## 12 - Working with Streams
&nbsp;

## 13 - Interacting with the File System
&nbsp;

## 14 - Process & Operating Systems
&nbsp;

## 15 - Creating Child Processes
&nbsp;

## 16 - Writing Unit Tests
&nbsp;




