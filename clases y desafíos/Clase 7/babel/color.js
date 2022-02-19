const getNumRGB = () => Math.floor(Math.random() * 255)



class Color {
    get(opacity = 1.0){
        return `rgba(${getNumRGB()}, ${getNumRGB()}, ${getNumRGB()}, ${opacity})`
    }
}

const color1 = new Color();
console.log(color1.get(0.7));