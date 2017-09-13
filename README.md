# About

This is a (work in progress) presentation on the Mapper algorithm by Nathaniel Saul.  

It first describes why topological approach is useful, describes the Reeb graph, and then builds the Mapper.  We attempt to describe the Mapper in the context of point cloud data and provide motivation for using it as a tool in exploratory data analysis.


This presentation was made with [remark.js](https://remarkjs.com/), [d3.js](https://d3js.org/), and [MathJax](https://www.mathjax.org/).


# Setup

To run locally, type
```
python -m http.server
```

and go to `localhost:8000` in your favorite browser.

To see presenter mode, press **P** and to clone the presentation into a second (in-sync) window, press **C**.

# Post-talk notes

These are notes from feedback and thoughts from the presentation of this talk given on 9/13/17 at WSU Vancouver to the graduate student seminar.


## Physical presentation

* Talk louder
* Talk slower
* Use less vocal fillers (how do you practice this?)

Need more practice

## Content

* Show the picture *and then* give the definition
  - definition is not as important as the intuition, definition sticks better after intuition is built.
* Spend more time describing each of the pieces so it is clearer (speaker slower and repeat phrases, circle back to remind when working through the next steps)
* Mention how difficult it is to construct these and how much time it takes, these are the final found result
* Mention how it is used beside other algorithms
* Mention the higher dimensional constructions while building it up.
* Talk about how the circle is very obvious, but in very high dimensional data, it's difficult to visualize and find these features.
* Show more details about how the Reeb graph can be used in object recognition.
* Talk more concretely about exploratory data analysis, mention other algorithms that are used and why it is important.
  - Hypothesis generation! use the visualizations to help point you in the direction, once you know the question to ask, then asking it is easy (reference to hitchhikers guide?)
* emphasize how much these objects represent a skeleton, a compressed version, or the object that contains the same topological information.

## Expand for DS talk

I would like to expand this talk and pivot it more towards the data scientists, practitioners, and frequenters of the data science

* Spend more time explaining how the examples have been built.  Show how the Reeb graph is used for object recognition (is useful in its own right, not just as a continuous case of Mapper)
* Describe some of the tools that can be used (ayasdi, python mapper, keplerMapper)
* show the example of a mapper applied to pca (how it provides a compressed representation)
* talk more about dimensionality reduction and show examples of ways they fail that TDA is useful.
