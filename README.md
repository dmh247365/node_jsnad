# Node JSNAD notes
* ### 3 -  **The Node Binary**
   - #### *3.1 - Printing Command Options*
   - #### *3.2 - Checking Syntax*
   - #### *3.3 - Dynamic Evaluation*
   - #### *3.4 - Preloading Modules*
   - #### *3.5 - Stack Trace Limit*
* ### 4 -  **Debugging _and_ Diagnostics**
* ### 5 -  **Key JavaScript Concepts**
* ### 6 -  **Packages & Dependencies**
   - #### *6.1 - The npm Command*
   - #### *6.2 - Initializing a Package*
   - #### *6.3 - Installing Dependencies*
   - #### *6.4 - Development Dependencies*
   - #### *6.5 - Semver
   - #### *6.6 - Package Scripts
* ### 7 -  **Node Module System**
    - #### *7.1 - Loading a Module*
    - #### *7.2 - Creating a Module*
    - #### *7.3 - Detecting a Main Module*
    - #### *7.4 - Resolving a Module Path*
* ### 8 -  **Asynchronous Control Flow**
* ### 9 -  **Node Event System**
* ### 10 - **Handling Errors**
* ### 11 - **Using Buffers**
* ### 12 - **Working with Streams**
* ### 13 - **Interacting with the File System**
* ### 14 - **Process & Operating Systems**
* ### 15 - **Creating Child Processes**
* ### 16 - **Writing Unit Tests**
____
&nbsp;

## 3 - The Node Binary
&nbsp;
The Node.js platform is almost entirely represented by the node binary executable.

***binary file*** is pretty much everything that is not plain text.<br>
***binary executable file***  is a a file in a machine language for a specific processor.

&nbsp;
### **3.1 - Printing Command Options**
To see all the Node Command line flags:

```js
$ node --help
```

To view the Node JS runtime engine v8 flags:

```js
$ node --v8-options
```
&nbsp;
### **3.2 - Checking Syntax**
Checking that a file parses without running it:

```js
$ node --check app.js

$ node -c app.js
```

&nbsp;
### **3.3 - Dynamic Evaluation**
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
### **3.4 - Preloading Modules**
With Node we can preload a module, so that it starts before any other modules are loaded:  
1. **-r** or **--require** flag  

```js
$node -r ./preload.js app.js
```

The above command would load preload.js followed by app.js

&nbsp;
### **3.5 - Stack Trace limit**
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

### **6.1 - The npm Command**
When we install Node.js,  we get the **node** binary and the **npm** executable. The **npm** is a commmand line tool that acts as a package manager for Node.js, by default it points to the npmjs.com registry.

Most of the time we just use the install command:

```js
$npm install
```

But there is a whole plethora of commands which we can find be typing:

```js
$npm help
```

If we further details on a specific command, ie install then we would type:

```js
npm install -h
```
&nbsp;
### **6.2 - Initializing a Package**
A package is a folder ( or Node application ) with a **package.json** file in it (and then some code).
&nbsp;

We initialize a package, ie give it a package.json file (use y flag to use defaut values)
```js
$npm init -y
```
&nbsp;
### **6.3 - Installing Dependencies**
Most applications we build will need the functionality of other packages, which are called dependencies, ie our application is dependant upon it.

There are two types:
&nbsp;

1 - Dependencies (installed by default)  
2 - DevDepencies (we have to specify)  

Both of which can be installed once we have package.json file.  
To install a package ( ie pino) we use **npm install** ie:
```js
$npm install pino
```
This will install the latest version of pino in the **node_modules** folder.

To install all the modules per the package.json file we just do:

```js
$npm install
```
&nbsp;
### **6.4 - Development Dependencies**
To install a package as a dev dependancy we have declare it as so, installing the pino package as dev dependancy:
```js
$npm install --save-dev pino
```

in production we don't want dev dependancies as there is no requirement for them, but the package.json file may include them. Thus to only install dependencies we can use the **--production** flag:

```js
$npm install --production
```
&nbsp;
### **6.5 - Semver**
Semantic versioning is crucial for managing despendencies. A Semver is fundamentally three numbers separated by dots, which indicate changes to the package.

Semver MAJOR.MINOR.PATCH :

| Change | Description|
| :--- | :--- |
| MAJOR | Change breaks behaviour or API |
| MINOR | Package extended, not a breaking change, backwards compatible |
| PATCH | A bug fix |

&nbsp;
### **6.6 - Package Scripts**
The **"scripts"** field in the package.json can be used to define aliases for shell commands.

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




