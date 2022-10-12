const superMarket = {
  name: "all in one store",
  discount: "20% on all groceries",
  grocery: function (greenVege, fruits, dairy) {
    console.log(`here is your groceries which have ${greenVege} ${fruits} ${dairy}`);
  },
};

const items= [prompt("Lets see what you you want in :- greenVege? "), prompt("fruits"), prompt('dairy')]
console.log(items);

superMarket.grocery(greenVege[0], fruits[1], dairy[2]) //aam jindagi👀
superMarket.grocery(...items);    //mentos jindagi 😁
