# Favorite Genre Finder
Shows me a report of my top 2 genres based on 4-5 star ratings from an array, and a list of all 5 star reads for both genres.

## The Problem
I read a lot of books, but I don’t know what genres I like the best when I’m asked. I need a reading log that can tell me what books I highly rate the most often.

## How to Run It
You need nothing installed.

1. Open the [live page](https://janettaj.github.io/fave-genre-finder/).
2. The report is automatically generated from a premade array of books. There is nothing for you to do or click.

Or click "Code", then "Download ZIP", unzip the folder, and open `index.html` in your browser. If not unzipped, the file will not load properly.

## What It Looks Like When It Works
If there were 5 star reads for a given genre, the page displays:

```
Your favorite genre during this period was: (genre), with (number) books rated 4 stars or higher.
5 star reads:
- (title)
```
    
If there were no 5 star reads for a given genre, the page displays:

```
Your favorite genre during this period was: (genre), with (number) books rated 4 stars or higher.
No 5 star reads to display.
```

The premade array contains a top genre with two 5 star reads and a second genre with none to showcase the difference.

## How I built it

- Written in JavaScript, HTML and CSS, first as a pen on CodePen, then kept here and published with GitHub Pages.
- The data is invented.
- I decided to use a premade array because I did not have enough time in two sittings to create a version with a form.
- AI use: None.

## What I would change next

If I had more time to work on it, I would implement a submission form that would let a visitor add books to the array.

## Files

- `index.html`: The web page, which loads `style.css` and `script.js`
- `style.css`: Styles the page with a background color, font, text color, and hover effects.
- `script.js`: Holds the books array and the logic for deducing the top genres, as well as displaying the text in parentheses under "What It Looks Like When It Works" so that the text can be dynamic.
- `plan.md`: My Capstone Plan from the course.
