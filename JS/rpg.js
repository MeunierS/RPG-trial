var ts = new Tileset("tileset.png");


window.onload = function () {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    // Nous allons insérer nos tests ici
    ts.dessinerTile(6, ctx, 0, 0);
    ts.dessinerTile(6, ctx, 32, 0);
    ts.dessinerTile(6, ctx, 64, 0);
    ts.dessinerTile(6, ctx, 96, 0);



}