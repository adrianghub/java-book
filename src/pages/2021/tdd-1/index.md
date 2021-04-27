---
path: '/tdd-1'
date: '2021-03-20'
title: 'TDD - Part 1'
description: 'Test Driven Development (TDD) - Part 1'
author: 'Adrian Zinko'
featured: "../../../images/howtolearn.jpg"
tags: 'java tdd junit mockito'
---

![how to learn](../../../images/howtolearn.jpg)

## Issue

__What if a program that you use frequently (for example, your email client, web browser, e-banking service, etc.) repeatedly reports errors and crashes? Imagine, for example, that you make a transfer in the bank for a friend, and then suddenly the program reports an error and ends its operation - you will probably abandon this program after a short time and replace it with another, more stable solution.__

This is why software testing is so important: end-user acceptance is of paramount importance to the success of your venture. If the reception is bad, users will abandon your program and choose a competitor's solution, no matter how much money and time your company has spent writing this program. Of course, the absence of errors is not the only reason why consumer decisions are made, but in this module we will focus precisely on that - error free.

Software testing - no need to hide - __is expensive__. The main reason for these costs is the fact that professional and reliable testing takes a really long time (imagine how long it would take you to test all the functions of e.g. Gmail or whatever you usually use - but really reliable, and really all its functions) and how many people are working on it.

In addition to the cost of the tests, __the time needed to conduct them__ is also important. There are many systems where the time needed to manually test each function once - even with a team of several testers and assuming that everything works perfectly and needs no tweaking - will take months. Imagine now that some regulations change and you need to release modified software in just a month. Situation without exit? Fortunately not.

The solution is the so-called __test automation__.

## Test automation

The testers in today's projects are really __people with programmers' competences__. Their role is simply to create testing software, i.e. automated tests. Manual testing is being abandoned more and more.

To clarify it a bit: __manual tests are performed for newly written (or changed) functions, and even after a minor change, the entire software should be tested - something could have gone wrong by accident.__ They are the so-called regression tests. It is now standard that __regression tests are automated tests__.

The set of automated tests __should be developed along with the software__: take into account changes, new paths and new functionalities. The test team works on the tests on a regular basis in the same way as the development team works on the code. __The source code of the tests is treated as part of the system source code__ - it is versioned, placed in the repository and archived together with the entire application it concerns.

## Unit tests

One of the types of automatic tests are the so-called __unit tests__. These tests consist in testing a single method in a given class, or even its single behavior (e.g. when the method has an if statement, a unit test will test the execution of the method when the condition of the if statement is satisfied, and another unit test will test the operation of the method when condition is not met).

In practice, unit tests __are short programs that check the correctness of operation of individual methods and classes__. As a rule, they are performed during the software compilation process - they are permanently embedded in the development cycle. __Responsibility for executing tests during compilation is assumed by tools used to manage the course of building (compiling) software, such as Gradle or Maven.__

__Unit tests are a special case of testing because they are typically created by the developers themselves while working on the software, not by testers.__

So we have test automation. Each time during compilation, a set of previously prepared unit tests will be performed.
Not only that: __if any of the tests fail, the compilation process will be interrupted, preventing you from "releasing" the program with errors.__

## Test Driven Development

1. In the first step, we write __the "skeleton" of our software classes__ - these are real classes, however, without a real implementation of the methods. Methods are and have names, but either __do nothing (when they are void) or they return just any values ​​(when they are to return some value), the so-called dummy data.__
2. In the beginning, __all the tests report bugs__ - there is no software, so no test is done correctly.
3. We can observe on an __ongoing basis__ how the next tests begin to run correctly __as the next fragments of the program are created__ (the actual implementation of new methods).
4. Tests __"impose" on the programmer the way the program works__ - they direct him, indicating what effect of his work is desired. This approach avoids a lot of confusion and solves many communication problems (class structure and "empty" methods appear first, so the overall concept of the solution must be ready before coding starts).
5. Even if the same person (programmer) writes both the tests and the program itself, the tests __ensure that the programmer does not change the concept while writing the program__. The tests will force the program to work properly, in line with the original assumptions.
6. If the original assumptions need to be changed, __the programmer will do it consciously - first he will modify the structure of classes and methods and tests.__ Thanks to this approach, there is no room for accident and ill-considered mistakes.
7. Due to the fact that the tests are unit tests, the responsibilities of individual classes and methods are clearly and precisely defined. __This approach requires a better thought of the entire solution before writing it.__
