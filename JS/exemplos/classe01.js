function Point(x, y) {
    this.x = x
    this.y = y
} // function que inicia uma classe -> function construct

var p = new Point(1, 1) // Instância da classe Point

Point.prototype.r = function() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
}

console.log(p.r())