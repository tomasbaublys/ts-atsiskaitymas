"use strict";
class Potion {
    constructor(color, volume) {
        this.color = color;
        this.volume = volume;
    }
    mix(potion) {
        const totalVolume = this.volume + potion.volume;
        const newColor = this.color.map((colorValue, index) => Math.ceil((colorValue * this.volume + potion.color[index] * potion.volume) / totalVolume));
        return new Potion(newColor, totalVolume);
    }
}
const felix_felicis = new Potion([255, 255, 255], 7);
const polyjuice = new Potion([51, 102, 51], 12);
const new_potion = felix_felicis.mix(polyjuice);
