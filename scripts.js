let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

// Initialize the game by setting the value inside next-lbl to nextPlayer
document.getElementById('next-lbl').innerText = nextPlayer;

// This call will create the buttons needed for the gameboard.
createGameBoard();

function createGameBoard()
{
    // Add a button to each cell in the gameboard
    for (let i = 1; i <= 9; i++)
    {
        let cell = document.getElementById('c' + i);
        let btn = document.createElement('button');
        btn.innerText = '[ ]';
        cell.appendChild(btn);
    }

    // Add takeCell as a click event listener to all buttons
    let btns = document.querySelectorAll('button');

    for (let i = 0; i < btns.length; i++)
    {
        btns[i].addEventListener('click', takeCell);
    }
}

// This function responds when a button is clicked.
function takeCell(event)
{
    let btn = event.target;

    // Fill the selected cell with the current player's symbol
    btn.innerText = '[' + nextPlayer + ']';
    btn.disabled = true;

    // Switch to the other player
    if (nextPlayer === 'X')
    {
        nextPlayer = 'O';
    }
    else
    {
        nextPlayer = 'X';
    }

    document.getElementById('next-lbl').innerText = nextPlayer;

    // Check if the game is over
    if (isGameOver())
    {
        document.getElementById('game-over-lbl').innerHTML = '<h1>Game Over</h1>';
    }
}

function isGameOver()
{
    // Return false if any button is still available
    let btns = document.querySelectorAll('button');

    for (let i = 0; i < btns.length; i++)
    {
        if (!btns[i].disabled)
        {
            return false;
        }
    }

    return true;
}
