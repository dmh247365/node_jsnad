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
   - #### *6.5 - Semver*
   - #### *6.6 - Package Scripts*
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

Unless specificied otherwise package are installed as dependencies.

There are two types:
&nbsp;

1 - Dependencies (installed by default)  
2 - DevDepencies (we have to specify)  

Both of which can be installed once we have package.json file.  

To install a package ( ie request) we use **npm install** ie:
```js
$npm install request // this will install the latest version
```
This will install the latest version of the request package in the **node_modules** folder and update the package.json file with the corresponding name and version number.

```
"dependencies": {
    "request": ^2.88.0"
}
```
So by default the npm CLI installs the latest version of a package, unless otherwise specified.



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

### Aside: Package-lock.json
A package-lock.json file locks in the versions of packages we will use in our project, ie without it when we $npm install, the latest allowable packages are installed.  
This leads to version drift. Which is when the version numbers of your application's dependencies is different across different developers, builds or other environments.  
Which can lead to hard-to-debug inconsistencies between environments, because it isn't immediately clear what versions of dependencies are installed.  

&nbsp;
### **6.5 - Semver**
Semantic versioning is crucial for managing despendencies. A Semver is fundamentally three numbers separated by dots, which indicate changes to the package.

Semver **MAJOR.MINOR.PATCH** :

| Change | Description| Impact |
| :--- | :--- | :--- |
| MAJOR | Change breaks behaviour or API, not backwards compatible | **breaking** |
| MINOR | Extended functionality, not a breaking change, backwards compatible | **feature** |
| PATCH | A bug fix | **fix** |

&nbsp;  
A good website to view Semver for a specific package is semver.npmjs.com  

A great package to install globally which show the latest versions for packages you have installed in your project is:  
```js
$npm install -g npm-check-updates
```
 then to use it, just do:  
```js
$ncu
```

Semantic versioning allows us full control over what we install. We are helped in this process by a couple of semver specifiers namely the **tilde \~** and the **carat ^**.  

&nbsp;
### **Caret & Tilde: What's the Difference?**
**Both block changes in the MAJOR version.**

Where they differ is in flexibility around *minor* version changes and behaviour for versions below `1.0.0` ( ie the "magic zero" versions).

&nbsp;
**\~ Tilde -**  ***flexible on Patch***  
For tilde ranges, **major** and **minor** versions must match those specified, but any `patch` version greater than or equal to the one specified is valid.

For example, `~1.2.3` permits versions from `1.2.3` up to, but not including, the next minor, `1.3.0`.

&nbsp;
**^ Caret -**  ***flexible on Minor and Patch***  
For caret ranges, only **major** versions must match. Any `minor` or `patch` version greater than or equal to the minimum is valid.

For example, `~1.2.3` will only permit versions up to not not including `1.3.0` however the caret version, `^1.2.3` permits versions from `1.2.3` all the way up to. but not including, the major version. `2.0.0`.

&nbsp;

**so we can either do:**  
* **1 - default install**
* **2 - specified install**  
&nbsp;

**1 - Default install**

To install a package ( ie request) we use **npm install** ie:
```js
$npm install request // this will install the latest version
```
This will install the latest version of the request package in the **node_modules** folder and update the package.json file with the corresponding name and version number.

```
"dependencies": {
    "request": ^2.88.0"
}
```
So by default the npm CLI installs the latest version of a package, unless otherwise specified.

&nbsp;

**2 - Specified install**



We can tell npm to install an exact version of a package or even a package version with a specified range:

```js
$npm i request@2.1.2 // this exact version only

$npm i request@1.x // >=1.0.0 <2.0.0

$npm i request@1.2.3 - 2.3.4 // >=1.2.3 <=2.3.4

$npm i request@1.2.* // >1.2.0 <1.3.0

$npm i request@~1.2.3 // >1.2.3 <1.3.0

$npm i request@^1.2.3 // >1.2.3 <2.0.0
```

&nbsp;
### **Important note:- 0.x.x Versions**
A word of caution around the use of 0.x.x versions, things get messy due to the nature of the special 0 major version number.  
The major version 0 is supposed to be resevered for `"initial development"`, where "anything may change at any time". so the "patch" and "minor, non-breaking changes" essentially have no meaning.  

So the `~` & `^` operator have no impact on a major version starting with `0`, whatever is specified is installed.

***`A way to think of 0.x semantics is: 0.MAJOR.MINOR`***

&nbsp;
To install all the modules per the package.json file we just do:

```js
$npm install
```

To bring all denpendencies to their latest compatible versions we can can run:
```
$npm update
```



&nbsp;
### **6.6 - Package Scripts**
The **"scripts"** field in the package.json can be used to define aliases for shell commands.

&nbsp;

## 7 -  Node Module System
&nbsp;

### **7.1 - Loading a Module**
This refers to bringing into into a script (ie our file) which we do so at the top of the file.  

the syntax to import a module is:  
`const package = require('module-name)`

In CommonJS. modules are loaded synchronously, and processed in the order the JavaScript runtime finds them.

We load the modules using the `require` function, which is passed a packages namespace.  

`require` is a global function, it takes in one argument which is the path of the target module we want to load. The `require` function returns a object that is exported from the target module. 

`module.exports` - module is an object, which contains a property called exports which is a blank object.

### **Aside:** ### 
**Client side:-**
Client-side JavaScript that runs in the browser uses another standard, called `ES Module (ESM)` format. It uses an `export` keyword to export a module's public API and an `import` keyword to import it.

At sometime in the future this option will be fully supported in Node.js, however it can be implemented now, with a `transpiler`, such as `Babel` that behind the scenes converts its back to CommonJS format.
&nbsp;

**Server side:-**
The `CommonJS` module specification is the standard used in Node.js for working with modules. It uses `require` and `module.exports`.  
Modules allow us to encapsulate all sorts of functionality, and expose this functionality to other JavaScript files.  

All examples use CommonJS.

### **7.2 - Creating a Module**
A JavaSript file is a module when it exports one or more of the following: variables, functions, objects.
&nbsp;

We use the `require` function to bring in what is exported, and as above that could be anything.
  
  1. Module is an object, which has a property called `exports` which initially is an empty object.

  2. The Node.js developers being helpful to us, allow us to use `exports` as and alias to `module.exports`, so essentially `exports = module.exports`. However with this shortcut comes great responsibility!.


  <table >
    <tbody ><tr><td><details ><summary>
      <sub>
      <b>Click: for full description of module.exports & exports</b>
      </sub>

  &nbsp;  
    i - How not to use exports  
    ii - this is life  
    iii - yo dude  

  </summary>
  <h4>i - How not to use exports</h4>
  
  <h5>Multiple assigments - module.exports:-</h5>

  ```js
  // func.js
  
  function add(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }

  module.exports = add;
  module.exports = subtract;
  ```
 Summary:-
    Initially module.exports is an empty object, we overwrite this, by making it now a function.  

  First we assign the add function, then we overwrite it and assign the subtract function. 

<hr>
  Obviously below is going to fail:- 
  
  ```js
  // app.js
  const add = require('./func.js');

  console.log(add(20, 10));
  console.log(subtract(30, 5))

  ```
 
  The correct way would be to maintain the integrity of module.exports as an object and just assign add & subtract as properties ie:-  
  
  ```js
  // func.js

  function add(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }

  module.exports = {
    add,
    subtract
  }
  ```

We can bring in what is exported in the following ways:-

1 - assigning the export object to the variable func, in this example probably not the best approach as we only have a few methods and when calling the methods we would each time have to use ObjectName.method. 

```js
  // app.js
  const func = require('./func.js');

  console.log(func.add(20, 10));
  console.log(func.subtract(30, 5))
  ```

2 - The better approach is to use Object destructuring, we only have a few methods so we can easily track their order.

  ```js
  // app.js
  const { add, subtract } = require('./func.js');

  console.log(add(20, 10));
  console.log(subtract(30, 5))
  ```

  <hr>
  <h5>Multiple assigments - exports:-</h5>

  Lets save effort on our pinkies even more and just directly assign the functions to `module.exports` using the shorthand of `exports`.  
  So we are assigning the function to exports.add, so there is now a property on the module.exports object called add which contains the add function.

  *Actual could even cut down further and using fat arrow syntax* 
  
  ```js
  // func.js

  exports.add = function(a, b) {
    return a + b;
  }

  exports.subract = function(a, b) {
    return a - b;
  }
  ```

  ```js
  // app.js
  const { add, subtract } = require('./func.js');

  console.log(add(20, 10));
  console.log(subtract(30, 5))
  ```




  </details></td></tr></tbody>
  </table>


```js
// file1.js

exports.a = 'A';
exports.b = 'B';

console.log(module);
```

```js
$ node file.js
Module {
  id: '.',
  exports: { a: 'A', 'b': 'B' },
  ...
}
```

As can be seen assigning properties to the `exports` object has added them to `module.exports`.

Which we can confirm with:

```js
// file2.js

exports.a = 'A';

console.log(exports === module.exports);
console.log(module.exports);
```

```js
$ node file2.js
true
{ a: 'A' }
...
```

However all is not what it seems, if we assign anything to `module.exports` then `exports` is no longer a reference to it, think of it as it loses its powers, ie:

```js
// file3.js

module.exports = {a: 'A'};
exports.b = 'B';

console.log(exports === module.exports);
console.log(module)
```

```js
$ node file3.js
false
Module {
  id: '.',
  exports: { a: 'A' },
  ...
}
```

We can export from a module in the following ways:

1 - Using exports
```js
// uppercase.js  

exports.uppercase = (str) => str.toUpperCase()
```

Any JavaScript file can import and use this module:

```js
// uppercase.js  

const uppercaseModule = require('uppercase.js')
upppercaseModule.uppercase('test')
```
&nbsp;

2 - Exporting more than one value:

```js
// uppercase.js  

exports.a = 1
exports.b = 2
exports.c = 3
```
We import them into the desired file using the destructuring assignment:

```js
const { a, b, c } = require('./uppercase.js')
```

3 - Exporting a single value:

```js
// file.js
module.exports = value
```

&nbsp;
### **7.3 - Detecting a Main Module**
A module is a script that is used by other scripts, basically think of it as a file which uses the export functionality and then this functionality is consumed by other files.
But also we may have a file that acts as a program in its own right, ie its doesn't just exist to export functionality to other files.

The "start" script in the package.json files executes the **node index.js**. when a file is called with **node** that file is the entry point of the program.

In some situations we may want a module to be able to operate as a program and as a module that can be loaded into other modules.

when a file is the entry point of a program, it's the main module. We can detect whether a particular file is the main module in two ways.  

We can check if `module.parent` is `null` or we can check if the `require.main` is the `module` object.

&nbsp;
### **7.4 - Resolving a Module Path (CommonJS)**
We consume a module by using the `require` function.

Require will search for a module in the following locations:

- is it a core modules?.
- is there a node_modules package with its name?.
- is there a file (or directory) with its name?.
- if none of the above are true then throw an error.


To help us, the **require** function has a method called `require.resolve`, which can be used to determine the absolute path for any required module.

We would generally bring in modules from the following locations
* package resolution 
* directory resolution
* file resolution
* node core APIs resolution

Example:- using `require.resolve` to for a file resolution and node core API resolution

```js
'use strict'

console.log();
console.group('file resolution')
console.log(`require('./func)`, '\t', '=>', require.resolve('./func'))
console.log(`require('./func.js)`, '\t', '=>', require.resolve('./func.js')) // demo only .js not req
console.groupEnd()
console.log()

console.group('core APIs resolution')
console.log(`require('fs')`, '\t', '=>', require.resolve('fs'))
console.log(`require('util')`, '\t', '=>', require.resolve('util'))
console.groupEnd()
console.log()
```

Which in the terminal will display:-

```
$ node app.js

file resolution
 require('./func) => /blahblah/Projects/node_jsnad/func.js
 require('./func.js) => /blahblah/Projects/node_jsnad/func.js

core APIs resolution
 require('fs') => fs
 require('util') => util
```

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



*** test 

# A collapsible section containing markdown
<details>
  <summary>Click to expand!</summary>
  
  ## Heading
  1. A numbered
  2. list
     * With some
     * Sub bullets
</details>

# A collapsible section containing code
<details>
  <summary>Click to expand!</summary>
  
  ```javascript
    function whatIsLove() {
      console.log('Baby Don't hurt me. Don't hurt me');
      return 'No more';
    }
  ```
</details>


