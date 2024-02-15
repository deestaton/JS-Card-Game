function drawPlayers() {
    const canvas = document.getElementById('cardTable');
    const ctx = canvas.getContext('2d');

    // Draw the placeholders for the players
    // The dimensions on each side for the player's info
    const playerSideWidth = 150;
    const playerSideHeight = 100;    

    ctx.fillStyle = 'darkgray';
    ctx.fillRect(0, (canvas.height - playerSideHeight) / 2, playerSideWidth, playerSideHeight);
    // Draw Player 1's icon
    ctx.beginPath();
    ctx.arc(
        playerSideWidth / 5, 
        (canvas.height - playerSideHeight) / 1.8,
        20,
        0,
        2 * Math.PI
    );
    ctx.fillStyle = 'white';
    ctx.fill();
    // Draw Player 1's score
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(
        'Score: 0', 
        playerSideWidth / 3, 
        (canvas.height - playerSideHeight) / 2 + playerSideHeight / 2 + 30
    );

    // Player 2 (top side)
    ctx.fillStyle = 'darkgray';
    ctx.fillRect((canvas.width - playerSideWidth) / 2, 0, playerSideWidth, playerSideHeight);
    // Draw icon
    ctx.beginPath();
    ctx.arc(
        (canvas.width - playerSideWidth) / 2 + playerSideWidth / 5, 
        playerSideHeight / 4, 
        20, 
        0, 
        2 * Math.PI
    );
    ctx.fillStyle = 'white';
    ctx.fill();
    // Draw score
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(
        'Score: 0', 
        (canvas.width - playerSideWidth) / 2 + playerSideWidth / 3, 
        playerSideHeight / 2 + 30
    );

    // Player 3 (right side)
    ctx.fillStyle = 'darkgray';
    ctx.fillRect(canvas.width - playerSideWidth, (canvas.height - playerSideHeight) / 2, playerSideWidth, playerSideHeight);
    // Draw icon
    ctx.beginPath();
    ctx.arc(
        canvas.width - playerSideWidth / 1.25, 
        (canvas.height - playerSideHeight) / 2 + playerSideHeight / 4, 
        20, 
        0, 
        2 * Math.PI
    );
    ctx.fillStyle = 'white';
    ctx.fill();
    // Draw score
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(
        'Score: 0', 
        canvas.width - playerSideWidth / 1.5, 
        (canvas.height - playerSideHeight) / 2 + playerSideHeight / 2 + 30
    );

    // Player 4 (bottom side)
    ctx.fillStyle = 'darkgray';
    ctx.fillRect((canvas.width - playerSideWidth) / 2, canvas.height - playerSideHeight, playerSideWidth, playerSideHeight);
    // Draw icon
    ctx.beginPath();
    ctx.arc(
        (canvas.width - playerSideWidth) / 2 + playerSideWidth / 5, 
        canvas.height - playerSideHeight / 1.35, 
        20, 
        0, 
        2 * Math.PI
    );
    ctx.fillStyle = 'white';
    ctx.fill();
    // Draw score
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(
        'Score: 0', 
        (canvas.width - playerSideWidth) / 2 + playerSideWidth / 3, 
        canvas.height - playerSideHeight / 2 + 30);
}

drawPlayers();