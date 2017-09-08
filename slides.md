
class: center, middle

# From Reeb graph to Mapper

Nathaniel Saul
<div class="my-footer"><span>Nathaniel Saul | Washington State University - Vancouver</span></div>

---
layout: true

# Motivation
<div class="my-footer"><span>Nathaniel Saul | Washington State University - Vancouver</span></div>


---


.left-column[
  ## Big data

]
.right-column[
How big?
]


---

.left-column[
  ## Big data
### - hype train
]
.right-column[
Sooo much hype.. but it's really so big
]

---

.left-column[
  ## Big data
### - hype train
### - Moore's Law
]
.right-column[
Processing power for computers will double every two years.
]

---

.left-column[
  ## Big data
### - hype train
### - Moore's Law
### - Now what?
]
.right-column[
LOTS of data and LOTS of processing power... two essential ingredients, no recipe.
]

---

##  TOPOLOGY!

---

.left-column[
  ## Topology
  ### - How?
]
.right-column[


<img src="coffeetodonut.jpg" alt="some_text" style="width:500px;height:250px;">

.footnote[.red.bold[\*]https://www.nga.gov/content/ngaweb/features/the-serial-impulse/bruce-nauman.html]

]

???
A topologist can't even tell the difference between their coffee mug and their donut,
how are they supposed to make sense of a whole bunch of data?!

---

.left-column[
  ## Topology
  ### - How?
]
.right-column[
Topology is useful because

* We can assume data has shape and that the shape is important.
* Use local information to describe global shape.

]

???
The data is  sampled from an underlying shape that we want to figure out!
---

layout: false

pretty pictures

[HERE WE NEED PICTURES THAT SHOW HOW DATASETS CAN BE REPRESENTED USING THE MAPPER ALGORITHM]

<div class="my-footer"><span>Nathaniel Saul | Washington State University - Vancouver</span></div>

---

class: center, middle

# From *Reeb graph* to Mapper

<div class="my-footer"><span>Nathaniel Saul | Washington State University - Vancouver</span></div>

???

Going to start by describing from topological data analysis that has been used to study and compare shapes...

then I'm going to show you it's discrete counterpart that works on point clouds of data.

---

layout: true

# Reeb graph
<div class="my-footer"><span>Nathaniel Saul | Washington State University - Vancouver</span></div>

---

.left-column[
  ## What
]
.right-column[
Studies a topological space through a real valued function on that space.

]

---

.left-column[
  ## A function
]
.right-column[
Studies a topological space through a real valued function on that space.

$$ f: X \to \mathbb{R} $$

]
---

.left-column[
  ## A function
  ## A relation

]
.right-column[
Studies a topological space through a real valued function on that space.

$$ f: X \to \mathbb{R} $$

Let \\(a \sim b \\) for \\(a,b \in X\\) if \\(f(a)\\) is connected to \\(f(b)\\) within the same level set.

]

---

.left-column[
  ## A function
  ## A relation
  ## A Reeb graph
]
.right-column[

The Reeb graph is the quotient space \\(X / \sim\\) endowed with the quotient topology.
]

---

layout: false
class: center, middle
# Duh

<div class="my-footer"><span>Nathaniel Saul | Washington State University - Vancouver</span></div>

---

class: center, middle
# (Not) Duh

<div class="my-footer"><span>Nathaniel Saul | Washington State University - Vancouver</span></div>

--

Let's break this down
---

layout: true

# Reeb graph
<div class="my-footer"><span>Nathaniel Saul | Washington State University - Vancouver</span></div>

---

.left-column[
  ## A function
  ## A relation
  ## A Reeb graph
]
.right-column[
Studies a topological space through a function that maps the space to the real line.

$$ f: X \to \mathbb{R} $$

Let \\(a \sim b \\) for \\(a,b \in X\\) if \\(f(a)\\) is *connected* to \\(f(b)\\) within the same *level set*.

]

---

.left-column[
  ## Level set
]
.right-column[
Say we have a function \\(f:X \to \mathbb{R}\\) from

the *level set* at each \\(a \in \mathbb{R}\\) is defined as
$$\\{ x \in X \mid f(x) = a \\}$$

]

???
* a function from our object to the real line, maybe it's defined as height
* all the pieces that are at the same height
* these level sets are in the domain!


---
.left-column[
  ## Level set
  ## Connected components
]
.right-column[
Let \\(\sim\\) be a relation on \\(X\\) such that for \\(a, b\in X\\), \\(a\sim b\\) if they are in the same connected component of a level set.


]

???

* connected means we can draw a path from one point to the other and never leave the space.
* Represent each leg of the chair at each height by one point

---

.left-column[
  ## Level set
  ## Connected components
  ## Reeb graph
]
.right-column[


]

???
So the Reeb graph is what we get when we collapse all the connected components of each level set into one point and then string them all together.

---

What happens when we move to real data?

<div id='scatter-plot'>
  <!-- /the chart goes here -->
</div>


Try to draw the Reeb graph of this

* Each point is an isolated point, so we have no connected components.

* Each level set is disconnected from the rest, so it's not meaningful to string them together.

<div id='scatter-plot'>
  <!-- /the chart goes here -->
</div>

---

class: center, middle

# From Reeb graph to *Mapper*

<div class="my-footer"><span>Nathaniel Saul | Washington State University - Vancouver</span></div>

???

Let's look at the discrete counterpart of the Reeb graph

---

layout: true
# Mapper
<div class="my-footer"><span>Nathaniel Saul | Washington State University - Vancouver</span></div>

---

.left-column[
  ## Intervals
]
.right-column[

Instead of level sets, look at overlapping intervals.


]
---


.left-column[
  ## Intervals
  ## Clusters
]
.right-column[

Instead of connected components, look at clusters within intervals

]

---


.left-column[
  ## Intervals
  ## Clusters
  ## Simplicial Complex
]
.right-column[

String them all together with a simplicial complex.

]


---


.left-column[
  ## A function
  ## A cover
  ## A partial clustering
  ## A nerve
]
.right-column[
Take a function just like the Reeb graph

Define a cover of the range of this function

Run partial clustering over the cover




]



Is Mapper more?

* woah now we have totally new things to talk about...
  * cover of codomain
  * simplicial complex
  * more than just a one dimensional range

---
name: last-page
template: inverse

## That's all folks (for now)!

Slideshow created using [remark](http://github.com/gnab/remark).
