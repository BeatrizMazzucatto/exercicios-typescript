import { unique, groupBy, sumBy } from "./arrayUtils";

// unique
console.log("Teste unique:");
console.log(unique([1, 2, 2, 3]));
console.log(unique(["a", "a", "b", "c"]));

// groupBy
console.log("\nTeste groupBy:");
const produtos = [
  { nome: "Camiseta", tipo: "roupa" },
  { nome: "Calça", tipo: "roupa" },
  { nome: "Notebook", tipo: "eletronico" }
];

console.log(groupBy(produtos, p => p.tipo));

// sumBy
console.log("\nTeste sumBy:");
console.log(sumBy([{ v: 10 }, { v: 25 }], i => i.v));