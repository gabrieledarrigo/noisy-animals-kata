import { describe, it, expect } from "bun:test";
import { NoisyAnimal } from "./noisy_animal";

describe("NoisyAnimal", function () {
  describe("when the animal is a cat", function () {
    it("makes a meow noise twice", function () {
      const animal = new NoisyAnimal("cat");

      expect(animal.makeNoise()).toEqual("meow\nmeow\n");
    });
  });

  describe("when the animal is a dog", function () {
    it("makes a woof noise twice", function () {
      const animal = new NoisyAnimal("dog");

      expect(animal.makeNoise()).toEqual("woof\nwoof\n");
    });
  });

  describe("when the animal is a leopard", function () {
    it("makes a growl noise twice", function () {
      const animal = new NoisyAnimal("leopard");

      expect(animal.makeNoise()).toEqual("growl\ngrowl\n");
    });
  });

  describe("when the animal is unusually quiet", function () {
    it("cat goes meow", function () {
      const animal = new NoisyAnimal("cat");

      expect(animal.makeNoise({ loud: false })).toEqual("meow\n");
    });

    it("dog goes woof", function () {
      const animal = new NoisyAnimal("dog");

      expect(animal.makeNoise({ loud: false })).toEqual("woof\n");
    });

    it("leopard goes growl", function () {
      const animal = new NoisyAnimal("leopard");

      expect(animal.makeNoise({ loud: false })).toEqual("growl\n");
    });
  });

  describe("when the animal is really a bird", function () {
    it("loud owls hoot twice", function () {
      const animal = new NoisyAnimal("owl");

      expect(animal.makeNoise()).toEqual("hoot\nhoot\n");
    });

    it("loud eagles caw twice", function () {
      const animal = new NoisyAnimal("eagle");

      expect(animal.makeNoise()).toEqual("caw\ncaw\n");
    });

    it("loud hadedahs squawk twice", function () {
      const animal = new NoisyAnimal("hadedah");

      expect(animal.makeNoise()).toEqual("squawk\nsquawk\n");
    });

    it("quiet owls hoot", function () {
      const animal = new NoisyAnimal("owl");

      expect(animal.makeNoise({ loud: false })).toEqual("hoot\n");
    });

    it("quiet eagles caw", function () {
      const animal = new NoisyAnimal("eagle");

      expect(animal.makeNoise({ loud: false })).toEqual("caw\n");
    });

    it("quiet hadedahs do not exist", function () {
      const animal = new NoisyAnimal("hadedah");

      expect(() => animal.makeNoise({ loud: false })).toThrow(/no such thing/);
    });
  });
});
