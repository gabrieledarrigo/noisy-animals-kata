export class NoisyAnimal {
  species: string;

  constructor(species: any) {
    this.species = species;
  }

  makeNoise({ loud = true } = {}): any {
    if (this.isBird() && !loud) {
      return this.makeBirdNoise(false);
    }
    if (loud) {
      if (this.mammalNoise()) {
        return this.mammalNoise() + "\n" + this.mammalNoise() + "\n";
      }
      if (this.isBird()) {
        return this.makeBirdNoise(true);
      }
    } else if (["cat", "dog", "leopard"].includes(this.species)) {
      return this.mammalNoise() + "\n";
    }
  }

  mammalNoise() {
    return {
      cat: "meow",
      dog: "woof",
      leopard: "growl",
    }[this.species];
  }

  makeBirdNoise(isLoud = true): string {
    const result = [];

    if (this.species === "hadedah") {
      result.push("squawk");
    } else if (this.species === "eagle") {
      result.push("caw");
    } else {
      result.push("hoot");
    }

    if (isLoud) {
      if (this.species === "owl") {
        console.log("OWL");

        result.push("hoot");
      }
      if (this.species === "eagle") {
        result.push("caw");
      }
      if (this.species === "hadedah") {
        result.push("squawk");
      }
    } else {
      if (this.species === "hadedah") {
        throw new Error("there is no such thing as a quiet hadedah!");
      }
    }

    return result.join("\n") + "\n";
  }

  isBird() {
    return (
      this.species === "owl" ||
      this.species === "eagle" ||
      this.species === "hadedah"
    );
  }
}
