const names = ['Hole-in-on', 'Eagle', 'Birdie', 'Par', 'Bogey', 'Double-Bogey', 'Go-home!']

function golfScore(par, strokes) {
    if (strokes === 1) return names[0]
    if (strokes <= par - 2) return names[1]
    if (strokes === par - 1) return names[2]
    if (strokes === par) return names[3]
    if (strokes === par + 1) return names[4]
    if (strokes === par + 2) return names[5]
    if (strokes >= par + 3) return names[6]

}

let resultado = golfScore(4, 2)

console.log(resultado);