export class NoisyAnimal {
  species: string;

  constructor(species: any) {
    this.species = species;
  }

  makeNoise({ loud = true } = {}) {
    if (this.isBird() && !loud) {
      this.makeBirdNoise(false);
    }
    if (loud) {
      if (this.mammalNoise()) {
        console.log(this.mammalNoise());
        console.log(this.mammalNoise());
      }
      if (this.isBird()) {
        this.makeBirdNoise(true);
      }
    } else if (["cat", "dog", "leopard"].includes(this.species)) {
      console.log(this.mammalNoise());
    }
  }

  mammalNoise() {
    return {
      cat: "meow",
      dog: "woof",
      leopard: "growl",
    }[this.species];
  }

  makeBirdNoise(isLoud = true) {
    if (this.species === "hadedah") {
      console.log("squawk");
    } else if (this.species === "eagle") {
      console.log("caw");
    } else {
      console.log("hoot");
    }
    if (isLoud) {
      if (this.species === "owl") {
        console.log("hoot");
      }
      if (this.species === "eagle") {
        console.log("caw");
      }
      if (this.species === "hadedah") {
        console.log("squawk");
      }
    } else {
      if (this.species === "hadedah") {
        throw new Error("there is no such thing as a quiet hadedah!");
      }
    }
  }

  isBird() {
    return (
      this.species === "owl" ||
      this.species === "eagle" ||
      this.species === "hadedah"
    );
  }
}
