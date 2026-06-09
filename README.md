Sudoku Solver
An interactive browser-based Sudoku Solver that lets users input any Sudoku puzzle and instantly solve it using backtracking algorithm — built with pure HTML, CSS, and JavaScript. No frameworks, no dependencies.

Features
Auto Solver — Solves any valid Sudoku puzzle instantly using backtracking
Interactive Grid — Click-to-fill 9×9 board with clean input validation
Instant Feedback — Highlights errors or unsolvable inputs
Lightweight — Zero dependencies, runs entirely in the browser
Responsive Design — Works on both desktop and mobile

Tech Stack
TechnologyPurposeHTMLGrid structure and layoutCSSStyling, grid visuals, animationsJavaScriptBacktracking solver logic, DOM interaction

Project Structure
SudokoSolver/
├── index.html    
├── script.js    
└── style.css    

How It Works
The solver uses a backtracking algorithm:

Scans the grid for the first empty cell
Tries digits 1–9 one by one
Checks if placing a digit violates Sudoku constraints (row, column, 3×3 box)
If valid, moves to the next empty cell recursively
If no digit works, backtracks to the previous cell and tries the next option
Repeats until the board is fully solved or deemed unsolvable

Time Complexity: O(9^m) where m = number of empty cells
Space Complexity: O(m) for the recursion stack

Future Improvements
 Puzzle generator (Easy / Medium / Hard modes)
 Step-by-step solve animation to visualize backtracking
 Timer for manual solving mode
 Hint system for partial assistance
 Dark / Light theme toggle
