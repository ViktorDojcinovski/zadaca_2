##

## Book Manipulation Exercise

### Goal:

Let's create a set of functions to manipulate data related to a book collection.
The tasks should be done in a step-by-step manner in order every other step to have context.
The whole task can be done in only one file, there is no need for modularisation of the code.
For the purpose of finding the optimal solution for every functionality, it is ok to google and use external resources.

**_ SPOILER ALERT: DO NOT USE CHAT GPT FOR THE CREATION OF THE CODE SNIPPETS! _**
**_ EVERY STUDENT WILL HAVE TO BE ABLE TO EXPLAIN EVERY SNIPPET OF THE CODE IN ORDER FOR IT TO BE ASSUMED AS FINISHED _**

### Instructions:

1. **Book Data:**

   - Declare an array called `books` containing multiple book objects.
   - Each book object should have properties like `title`, `author`, `genre`, `pages` and `price`.
   - Use only one of the authors for simplicity.

2. **Function 1: Filter Books by Genre**

   - Create a function named `filterBooksByGenre` that takes a genre as a parameter.
   - Use the `filter` array method to return an array of books from the specified genre.

3. **Function 2: Find Average Pages**

   - Create a function named `findAveragePages` that calculates and returns the average number of pages across all books.
   - Use the `map` array method to create an array of page numbers and then calculate the average.
   - Extra points for calculaiton will be using the `reduce` method chained to `map` method.

4. **Function 3: Find Shortest Book**

   - Create a function named `findShortestBook` that returns the title of the shortest book.
   - Use the `reduce` array method to find the book with the minimum number of pages.

5. **Function 4: Check if Author Exists**

   - Create a function named `doesAuthorExist` that takes an author's name as a parameter and returns a boolean indicating whether any book by that author exists.

6. **Function 5: Display Book Information**
   - Create a function named `displayBookInfo` that takes a book object as a parameter and logs its information in a readable format (e.g., "Title: {title}, Author: {author}, Pages: {pages}, Price: ${price}").
   - Extra points for using string literals instead of using pure concatenation.

## Bonus Tasks:

1. **Sort Books by Pages:**

   - Create a function named `sortBooksByPages` that sorts the books array based on the number of pages, from the shortest to the longest.
   - Use the `sort` array method.

2. **Find Longest Book per Genre:**

   - Create a function named `findLongestBookPerGenre` that, given a genre, returns the title of the longest book in that genre.
   - Use a combination of `filter` and `reduce` array methods.

3. **Add a New Book:**

   - Create a function named `addNewBook` that takes a book object as a parameter and adds it to the `books` array.
   - Ensure that the new book object has the required properties (title, author, genre, pages, price).

4. **Remove Books by Author:**

   - Create a function named `removeBooksByAuthor` that takes an author's name as a parameter and removes all books by that author from the `books` array.
   - Use the `filter` array method.

5. **Capitalize Titles:**
   - Create a function named `capitalizeTitles` that modifies the `title` property of each book in the array, capitalizing the first letter of each word.
   - Use the `map` array method.
   - For the purpose of this task, possible solution may include the `slice` array method. Please do your own investigation on it and try to include it in the solution.
