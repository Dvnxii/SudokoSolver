var arr = [[], [], [], [], [], [], [], [], []];

for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
        arr[i][j] = document.getElementById(i * 9 + j);
    }
}

var board = [[], [], [], [], [], [], [], [], []];

function FillBoard(board) {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (board[i][j] != 0) {
                arr[i][j].innerText = board[i][j];
            } else {
                arr[i][j].innerText = '';
            }
        }
    }
}

let GetPuzzle = document.getElementById('GetPuzzle');
let SolvePuzzle = document.getElementById('SolvePuzzle');

GetPuzzle.onclick = function () {
    var xhrRequest = new XMLHttpRequest();
    xhrRequest.onload = function () {
        var response = JSON.parse(xhrRequest.response);
        console.log(response);
        board = response.board;
        FillBoard(board);
    };
    xhrRequest.open('get', 'https://sudoku-api.vercel.app/api/dosuku');
    xhrRequest.send();
};

SolvePuzzle.onclick = () => {
    SudokuSolver(board, 0, 0, 9);
};

//To solve Sudoku --> Function

function isValid(board, i, j, num, n = 9) {
    let rn = Math.sqrt(n);
    let si = i - (i % rn),
        sj = j - (j % rn);

    // Row check
    for (let x = 0; x < n; x++) {
        if (board[i][x] === num) return false;
    }

    // Column check
    for (let x = 0; x < n; x++) {
        if (board[x][j] === num) return false;
    }

    // Sub-matrix check
    for (let x = si; x < si + rn; x++) {
        for (let y = sj; y < sj + rn; y++) {
            if (board[x][y] === num) return false;
        }
    }

    return true;
}

function SudokuSolver(board, i, j, n = 9) {
    // Base Case
    if (i === n) {
        FillBoard(board); // display solved board in UI
        return true;
    }

    // If we go out of column, move to next row
    if (j === n) return SudokuSolver(board, i + 1, 0, n);

    // If cell is already filled, move ahead
    if (board[i][j] !== 0) return SudokuSolver(board, i, j + 1, n);

    // Try placing numbers 1-9
    for (let num = 1; num <= 9; num++) {
        if (isValid(board, i, j, num, n)) {
            board[i][j] = num;
            if (SudokuSolver(board, i, j + 1, n)) return true;

            // Backtrack
            board[i][j] = 0;
        }
    }

    return false;
}
