/* ------------------------------ TASK 6 ---------------------------------------------------------------
Sukurkite klasę "Potion", kuri sukuria objektus su 2 savybėm ir 1 metodu:

Savybės:
  color(masyvas tryjų spalvų 0-255), volume
Metodas: 
  mix(potion) - Pateikiamas kitas eliksyras ir jiedu sumaišomi į vieną naują eliksyrą, kuris yra grąžinamas kaip naujas Klasės objektas.

Pvz.: 
  felix_felicis     =  Potion([255, 255, 255],  7)
  polyjuice         =  Potion([ 51, 102,  51], 12)
  new_potion        =  felix_felicis.mix(polyjuice)

  new_potion.color  =  [127, 159, 127]
  new_potion.volume =  19
------------------------------------------------------------------------------------------------------ */
type Color = [red: number, green: number, blue: number];

class Potion {
  color: Color;
  volume: number;

  constructor(color: Color, volume: number) {
    this.color = color;
    this.volume = volume;
  }

  mix(potion: Potion): Potion {
    const totalVolume = this.volume + potion.volume;

    const newColor: Color = this.color.map(
      (colorValue, index) => Math.ceil(
        (colorValue * this.volume + potion.color[index] * potion.volume) / totalVolume
      )
    ) as Color;

    return new Potion(newColor, totalVolume);
  }
}

const felix_felicis = new Potion([255, 255, 255], 7);
const polyjuice = new Potion([51, 102, 51], 12);
const new_potion = felix_felicis.mix(polyjuice);

// console.log(new_potion.color);  // [127, 159, 127]
// console.log(new_potion.volume); // 19


