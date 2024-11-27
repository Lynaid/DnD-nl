const spells = [
    {
        name: "Vlammen Werpen",
        description: "Richt een krachtige vlamstraal die vijanden verbrandt.",
        link: "#"
    },
    {
        name: "Helende Lichtstraal",
        description: "Herstelt gezondheid van een bondgenoot in nood.",
        link: "#"
    },
    // Добавьте больше заклинаний с описаниями...
];

function generateSpell() {
    const spellBlock = document.querySelector(".random-spell-block");
    const randomSpell = spells[Math.floor(Math.random() * spells.length)];

    spellBlock.querySelector("h2").textContent = randomSpell.name;
    spellBlock.querySelector(".spell-description").textContent = randomSpell.description;
    spellBlock.querySelector(".spell-link").href = randomSpell.link;
}
