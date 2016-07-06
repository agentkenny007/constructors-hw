import {it, expect} from "./test_lib";

// Constructors
// Only add code to *THIS* section!

function Human (name) {
    var human = this;
    human.name = name;
    human.alertness = 0;
    human.hasCoffee = false;
    human.needsCoffee = true;
    human.sips = 0;
    human.buy = function(coffee){
        human.coffee = coffee;
        human.hasCoffee = true;
    };
    human.drink = function(){
        human.sips++;
        human.alertness += 0.35;
        human.coffee.full = false;
        if (human.sips > 2) human.coffee.empty = true; 
    };
};

function Coffee (name) {
    var coffee = this;
    coffee.name = name;
    coffee.full = true;
    coffee.empty = false;
}

// Do not ADD or MODIFY code below this line :D

it("should be sleepy at first", function () {
  let terry = new Human("Terry");
  expect(terry.alertness < 0.1).toBe(true);
});

it("needs coffee to wake up", function () {
  let niclas = new Human("Niclas");
  expect(niclas.hasCoffee).toBe(false);
  expect(niclas.needsCoffee).toBe(true);
});

it("can drink coffee to become more alive", function () {
  let ben = new Human("Ben");
  let omf = new Coffee("Orange Mocha Frappucino");
  expect(omf.full).toBe(true);

  ben.buy(omf);
  ben.drink();
  expect(ben.alertness > 0.3 && ben.alertness < 0.4).toBe(true);
  expect(omf.full).toBe(false);
  expect(omf.empty).toBe(false);
});

it("has coffee after buying it", function () {
  let jenna = new Human("Jenna");
  let cuban_blend = new Coffee("Fancy Cuban Blend");
  expect(jenna.hasCoffee).toBe(false);
  jenna.buy(cuban_blend);
  expect(jenna.hasCoffee).toBe(true);
});

it("can drink all the coffee", function () {
  let rodney = new Human("Rodney");
  let tsmf = new Coffee("Triple Shot Mocha Frappucino");
  rodney.buy(tsmf);
  for(let i = 0; i < 3; i++) {
    rodney.drink();
  }
  expect(tsmf.empty).toBe(true);
  expect(rodney.alertness > 0.9).toBe(true);
});
