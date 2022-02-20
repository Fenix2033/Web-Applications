// ============================
// Samostatný ukol
// ============================
// Simulace tržní poptávky.
// 1. Připravte pole s údaji pro 4 firmy (přímo v kódu). Pro každou firmu název, nabízené množství počítačů a cenu za kus.
// 2. Ošetřete vstupy, aby byly v povoleném rozsahu. Pokud něco nesedí, vypište chybu.
// 3. Použijte `map`, abyste pro každou firmu vypočítali poptávku po jejích produktech.
//    Poptávané množství je klesající křivka poptávky daná vzorcem d=1000-0.01*p.
//    To znamená, že při ceně 100000 firma neprodá nic, při ceně 0 prodá maximum 1000ks.
// 5. Pomocí cyklu vypište výsledky, vždy název firmy a prodáno ks.
// 4. Prodeje firmy odpovídají poptávce, ale maximálně do výše nabízeného množství.
// 6. Vypisujte pouze firmy s nenulovými prodeji.

const companies = [
    {
        name: "Alza",
        supply: 10000,
        price: 10000,
    },
    {
        name: "CZC",
        supply: 300,
        price: 15000,
    },
    {
        name: "TS Bohemia",
        supply: 100,
        price: 99999999999,
    },
    {
        name: "Mironet",
        supply: -100,
        price: 30000,
    },
];

for (const company of companies) {
    if (company.supply < 0) {
        console.error('Company', company.name, 'has a negative supply!');
    }
    if (company.price < 0) {
        console.error('Company', company.name, 'has a negative price!');
    }
}

companies
    .map(company => ({
        name: company.name,
        supply: company.supply,
        demand: 1000-0.01 * company.price,
    }))
    .map(company => ({
        name: company.name,
        sales: company.demand <= company.supply ? company.demand : company.supply
    }))
    .filter(company => company.sales > 0)
    .forEach(company => console.log(company.name, 'sold', company.sales, 'computers.'));

// option B
// companies
//     .map(company => {
//         const demand = 1000-0.01 * company.price;
//         return {
//             name: company.name,
//             supply: company.supply,
//             sales: demand <= company.supply ? demand : company.supply
//         };
//     })
//     .filter(company => company.sales > 0)
//     .forEach(company => console.log(company.name, 'sold', company.sales, 'computers.'));