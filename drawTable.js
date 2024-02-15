// Function to draw the game board in the HTML <canvas> element
function drawCardTable() {
    const canvas = document.getElementById('cardTable');
    const ctx = canvas.getContext('2d');
    
    //canvas.width = window.innerWidth;
    //canvas.height = window.innerHeight;
    const borderWidth = 4;


    // The dimensions for the center where cards will be played
    const tableCenterWidth = 300;
    const tableCenterHeight = 250;
    const tableCenterX = (canvas.width - tableCenterWidth) / 2;
    const tableCenterY = (canvas.height - tableCenterHeight) / 2;

    // Draw the card table 
    // Background color
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Center color
    ctx.fillStyle = 'brown';
    ctx.fillRect(
        tableCenterX, 
        tableCenterY, 
        tableCenterWidth, 
        tableCenterHeight
    );

    // Border color
    ctx.strokeStyle = 'black';
    ctx.lineWidth = borderWidth;
    // Calculate border dimensions to fit around the center
    ctx.strokeRect(
        tableCenterX + borderWidth / 2, 
        tableCenterY + borderWidth / 2,
        tableCenterWidth - borderWidth,
        tableCenterHeight - borderWidth
    );

    // Game Title
    // ctx.fillStyle = 'white';
    // ctx.font = '30px Arial';
    // ctx.textAlign = 'center';
    // ctx.fillText('Spades', canvas.width / 2, 50);
}

drawCardTable();