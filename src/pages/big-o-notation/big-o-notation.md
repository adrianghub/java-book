---
path: '/big-o'
date: '2021-02-10'
title: 'Introduction to Big-O'
author: 'Adrian Zinko'
description: 'Introduction to Big-O'
featured: "../../images/howtolearn.jpg"
tags: "big-o"
---

![how to learn](../../images/howtolearn.jpg)

## What is Big-O Notation?

When working with collections (and more), you will often be faced with a choice: which algorithm to use? It is good to know how to compare algorithms with each other. One of the interesting criteria for comparing algorithms is their complexity, which directly translates into the efficiency of the algorithm.

The complexity of algorithms can be considered in the context of the number of computations needed to perform (time or computational complexity), or in the context of the resources needed to operate the algorithm (memory complexity). This time we will deal with computational complexity.

In order to describe the computational complexity of algorithms in some standardized way, a special notation was invented - the so-called Big-O notation (in Polish you can also meet the term O-notation).

The complexity of the algorithm expressed in O-notation tells us what is the relationship between the size of the input data set (e.g. array elements or records in the database) and the number of calculations necessary to perform.

## What is it made for?

Now that you know what O-notation is all about, it will be easier for you to compare and choose between different algorithms to solve the same problem - so you can easily choose the best approach.

## How is it calculated?

To understand how algorithm complexity is computed, let's use an example. If we have a set of **n** elements in the array and for each of them we have to perform one computation, the total number of computations in the algorithm will be linearly dependent on the number of elements in the array. We then say that the algorithm has a computational complexity of:

<center>O(n)</center>

where **n** is the amount of input data.

In a situation where the algorithm performs more complex calculations, for example, when we have two one-dimensional arrays - one with **i** elements and the other with **k** elements - the algorithm works by looping over and elements of the first array and performing an additional loop within each loop. after **k** elements of the second array (nested loop).

The complexity of the presented algorithm is:

<center>O(i * k)</center>

To simplify this notation a bit, it is assumed that the values of **i** and **k** are equally large and are marked with one variable **n**. Remember the asymptotes from mathematics? These were the lines in the graphs that the function tended to but never reached. O-notation is what is called the asymptotic notation i determines the upper (worst possible) limit of algorithm complexity, therefore we briefly assume that both **i** and **k** are equal to the greater of **i** and **k** and represents this value by **n**.

In practice, it may happen that the variables **i** and **k** will have some values that are more favorable for performance, e.g. 1 and 500 (the inner loop will then have 1 x 500 = 500 waveforms). However, they may as well be 500 and 500 (the inner loop will then have 500 x 500 = 250,000 runs).

We always define complexity for the pessimistic case, the worst - this is the asymptotic nature of O-notation. We are considering the value of the asymptote, which is unlikely to happen, but in the worst-case scenario, this is what will happen. In this situation, after replacing **i** and **k** with unknown **n**, we see that the computational complexity of the algorithm will be:

<center>O(n * n), i.e. O(n ^ 2)</center>

The computational complexities of the algorithms encountered in practice, arranged in order from the best (fastest algorithm) to the weakest (slowest algorithm), are presented below:

- **O (c)** - constant complexity, independent of the amount of input data,
- **O (log n)** - logarithmic complexity, found, for example, when searching for ordered binary trees,
- **O (n)** - linear complexity,
- **O (n ^ 2)** - square complexity,
- **O (c ^ n)** - exponential complexity.