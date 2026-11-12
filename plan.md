1. The request
I read a lot of books, but I don’t know what genres I like the best when I’m asked. I need a reading log that can tell me what books I highly rate the most often.
2. Questions to ask (with the answers)
	1. What is a high rating? (4 stars or higher.)
  2. Does 4 stars count as a high rating? (Yes, include 4 stars as a high rating.)
  3. What values need added for each book? (Title, genre, rating, and if the book wasn’t finished.)
  4. Should books you didn’t finish ever appear? (No. They weren’t enjoyed.)
  5. Can books have more than one genre? (No.)
  6. In what order do you want the list? (5 star books first, then 4 star books.)
  7. What should the summary tell you? (What 2 genres had the highest amount of 4 and/or 5 star books.)
3. Inputs
Title (string), genre (string), rating (number), DNF (boolean). [Note: DNF is a slang term for when someone does not finish reading a book]
4. Steps
Keep books that were finished AND rated 4 stars or higher
Count the remaining genres
Keep the 2 highest genres, with their total appearances
5. Outputs
Print the top 2 genres and how many books were rated 4+ stars for each.
6. Test cases (input row, expected result, why)
The Great Gatsby, tragedy, DNF, 3 stars – not counted, it wasn’t finished and was under 4 stars
Wuthering Heights, Gothic, finished, 4 stars – counted, it is 4 stars
Frankenstein, Gothic, DNF, 5 stars – not counted, it wasn’t finished
The Turn of the Screw, Gothic, finished, 3.75 stars – not counted, it was under 4 stars
7. Pseudocode
FOR EACH book in the list
  IF the book was not a DNF AND the rating is equal to or higher than 4 stars
    keep the book
COUNT the kept books’ genres
KEEP the 2 highest genre numbers
COUNT their total appearances
FOR EACH kept genre
  PRINT top 2 genres and the number of 4+ star ratings for each genre
PRINT a sentence on the top 2 genres, with the bigger genre first
