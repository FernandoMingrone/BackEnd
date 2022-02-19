const getNumRGBts = ():number => Math.floor(Math.random() * 255);



class ColorTs {
    get(opacity = 1.0):string{
        return `rgba(${getNumRGBts()}, ${getNumRGBts()}, ${getNumRGBts()}, ${opacity})`
    }
}

const color1ts:ColorTs = new Color();
console.log(color1ts.get(0.7));