---
path: '/java-collections-framework'
date: '2021-02-23'
title: 'Java Collections Framework'
description: 'Java Collections Framework'
author: 'Adrian Zinko'
featured: "../../../images/howtolearn.jpg"
tags: 'java collection jcf java-collections-framework'
---

![how to learn](../../images/jcf.png)

## What is Java Collections Framework?

Collections are like containers that group multiple items in a single unit. For example, jar of chocolates, list of names, etc.

Collections are used in every in every programming language and when Java arrived, it also came with few Collection classes - Vector, Stack, Hashtable, Array.

Java 1.2 provided Collections Framework that is the architecture to represent and manipulate Collections in Java in a standard way. Java Collections consists of the following parts:

> *__Interfaces__ : Java Collections Framework interfaces provides the abstract data type to represent collection `java.util.Collection` is the root interface of Collections Framework. It is on the top of Collections framework hierarchy. It contains some important methods such as `size()`, `iterator()`, `add()`, `remove()`, `clear()` that every Collection class must implement. Some other important interfaces are `java.util.List`, `java.util.Set`, `java.util.Queue` and `java.util.Map`. The `Map` is the only interface that doesn't inherit from Collection interface but it's part of the Collections framework. All the collection classes are present in `java.util` and `java.util.concurrent`.*

> *__Implementation Classes__ : Java Collections framework provides core implementation classes for collections. We can use them to create different types of collections in Java. Some important classes are: `ArrayList`, `LinkedList`, `HashMap`, `TreeMap`, `HashSet`, `TreeSet`. These classes solve most of our programming needs but if we need some special collection class, we can extend them to create our cusom collection class.*

> *__Algorithms__ : Algorithms are useful methods to provide some common functionalities, for example searching, sorting and shuffling*.

## Benefits of JCF

Java Collections Framework has following benefits:

> __Reduced Development Effort__ - It comes with almost all common types of collections and useful methods to iterate and manipulate the data. So we can concentrate more on business logic rather than designing our collection APIs.

> __Increased Quality__ - Using core collection classes that are well tested increases our program quality rather than using any home developed data structure.

> __Reusability and Iteroperability__

> __Reduce effert__ - to learn any new API if we use core collection API classes.