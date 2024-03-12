# Newton's Binomial Theorem
## DESCRIPTION
This is a website made using pure **html**, **css** and using the **mathjs** package from **node.js**. It it a calculator that solves expressions like ``(a+b)^n``.

## THE FORMULA
<div style="background-color:white; width:fit-content; padding: 20px;"><img src="src/image.png"></div>


## USES
The website can be used to verify results of expressions regarding **Newton's Binomial Theorem**.

## MATHJS
To simplify the 'string-like' expression resulting from the formula I used the function ``math.simplify()`` from the node package **mathjs**  giving the result more *readability*.

To use the package in a web app you will need to include
```
<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/9.4.4/math.min.js"></script>
```
in the **head** of the document. You can find the full documentation for **mathjs** [here](https://mathjs.org/).