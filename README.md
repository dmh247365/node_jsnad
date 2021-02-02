# Node JSNAD notes
* ## 3 - The Node Binary
  * ### get a movie
* ## 4 - Debugging _and_ Diagnostics
* ## 5 - Key JavaScript Concepts
* ## 6 - Packages & Dependencies
* ## 7 - Node Module System
* ## 8 - Asynchronous Control Flow
* ## 9 - Node Event System
* ## 10 - Handling Errors
* ## 11 - Using Buffers
* ## 12 - Working with Streams
* ## 13 - Interacting with the File System
* ## 14 - Process & Operating Systems
* ## 15 - Creating Child Processes
* ## 16 - Writing Unit Tests
&nbsp;
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

### **Checking Syntax**

Checking that a file parses without running it:

```js
$ node --check app.js

$ node -c app.js
```


### **Dynamic Evaluation**

Node can directly evaluate code in the terminal (shell), by using either:  
1. **-p** or **--print** flag (evaluates & prints)  
2. **-e** or **--eval** flag (only evaluates)  

```js
$ node --check app.js

$ node -c app.js
```


```js
console.log(the end);
```

Variables needed to listen for messages:

| Variable | Description|
| :--- | :--- |
| MONGO_URI | Mongo DB URL, used to store chat messages |
| GOOGLE_API_KEY | Google API Key, used to retrieve messages |
| YOUTUBE_CHANNEL_ID | The channel to listen for messages |

**Tasks API:**

Key       | Type    | Default     | Description
:--       | :--     | :--         | :--
`uglify`  | Boolean | `false`     | If `false` the atomized classes, and all references to them, are long (`.rp__padding__--COLOR12px`). If `true` they are short (`.rp__b5p`).
`styles`  | Object  | `undefined` | CSS settings. API below
`markup`  | Array   | `undefined` | HTML settings. An array of objects with their API defined below
`scripts` | Object  | `undefined` | JS settings. API below
