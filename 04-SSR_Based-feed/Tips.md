yarn install

npm i react-router-dom

```
You can also access the react-router props by using
the withRouter Higher-Order Component (HOC), which passes
the match, location, and history props to the wrapped component
each time it renders. That way, you can use methods such
as history.goBack or history.push from anywhere in your
application. In Chapter 3, Build a Dynamic Project Management Board with
React and Suspense, you've seen an example of using a HOC;
the withRouter HOC is implemented in the same manner.
```