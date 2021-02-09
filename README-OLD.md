

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


## Example Collapsible Content
### Style 1

<table ><tbody ><tr></tr><tr><td><details ><summary><sub><b>Click to see more:</b></sub><h6> Given the following python code </h6>

```python
from pychartjs import BaseChart

class myChart(BaseChart):
    pass
chartJSON = myChart().get()

```
</summary><hr>
<h6>Write the following HTML</h6>

 ```html
<div class="container">
    <canvas id="myChart"></canvas>
</div>
```
<h6>... and JS</h6>

```js
var data = {{ chartJSON | safe }}
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, data);
```
</details></td></tr></tbody>
</table>

### Style 2
<table ><tbody ><tr><td><details ><summary><sub><b>Click to see more:</b></sub><h6> Given the following python code </h6>

```python
from pychartjs import BaseChart

class myChart(BaseChart):
    pass
chartJSON = myChart().get()

```
</summary><hr>
<h6>Write the following HTML</h6>

 ```html
<div class="container">
    <canvas id="myChart"></canvas>
</div>
```
<h6>... and JS</h6>

```js
var data = {{ chartJSON | safe }}
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, data);
```
</details></td></tr></tbody>
</table>


#### Notes
- All code block starter lines, e.g. ` ```python ` must be preceded by a blank space. 
- The closing block ` ``` ` tag must be followed by a newline. 
- The difference between `Style 1` and `Style 2` is a blank `<tr></tr> tag at the start of the table body