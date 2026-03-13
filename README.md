# DSA Playground (Python + React)

## Overview

This project is a Proof of Concept (POC) demonstrating:

* Python fundamentals
* Data Structures and Algorithms
* Backend API development
* React UI integration

The application allows users to execute algorithms through a web interface.

---

# Architecture

React UI → Flask API → Python DSA algorithms

---

# Python Concepts Used

* Variables
* Functions
* Classes
* Lists
* Loops
* Conditionals
* Object Oriented Programming

---

# Data Structures Implemented

## Stack

Stack follows **LIFO (Last In First Out)**.

Operations:

* push()
* pop()

---

## Queue

Queue follows **FIFO (First In First Out)**.

Operations:

* enqueue()
* dequeue()

---

# Algorithms Implemented

## Bubble Sort

Bubble Sort repeatedly swaps adjacent elements if they are in the wrong order.

Time Complexity:

O(n²)

---

## Quick Sort

Quick Sort uses a **divide and conquer** strategy.

Steps:

1. Select a pivot element
2. Partition elements smaller and larger than pivot
3. Recursively apply the same process

Time Complexity:

Average: **O(n log n)**
Worst Case: **O(n²)**

---

## Binary Search

Binary Search works on **sorted arrays**.

Steps:

1. Find the middle element
2. Compare with target
3. Reduce search space

Time Complexity:

O(log n)

---

## Linear Search

Linear Search checks elements **one by one** until the target is found.

Steps:

1. Start from first element
2. Compare with target
3. Move sequentially through list

Time Complexity:

O(n)

---

# Running the Project

## Backend

1. Create virtual environment

```
python -m venv venv
```

2. Activate virtual environment

Windows:

```
venv\Scripts\activate
```

3. Install dependencies

```
pip install -r requirements.txt
npm install react-syntax-highlighter **for code display**
```

4. Run Flask server

```
python app.py
```

---

## Frontend

1. Install dependencies

```
npm install
```

2. Run React application

```
npm start
```

---

# Technologies Used

Frontend:

* React
* JavaScript
* HTML
* CSS

Backend:

* Python
* Flask

---

# Purpose

This project demonstrates how **data structures and algorithms can be integrated with modern web applications**.

It serves as a learning project for:

* Python programming
* Algorithm implementation
* API development
* React integration

---
