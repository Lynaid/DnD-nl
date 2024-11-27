async function loadSpells() {
    try {
        const response = await fetch('spells.json');
        const spells = await response.json();
        return spells;
    } catch (error) {
        console.error("Fout bij het laden van de spreuken:", error);
        return [];
    }
}

async function loadItems() {
    try {
        const response = await fetch('items.json');
        const items = await response.json();
        return items;
    } catch (error) {
        console.error("Fout bij het laden van de items:", error);
        return [];
    }
}

async function generateSpell() {
    const spellBlock = document.querySelector(".random-spell-block");
    const spells = await loadSpells();

    if (spells.length === 0) {
        spellBlock.querySelector("h2").textContent = "Geen spreuken beschikbaar";
        spellBlock.querySelector(".spell-description").textContent = "";
        spellBlock.querySelector(".spell-link").href = "#";
        return;
    }

    const randomSpell = spells[Math.floor(Math.random() * spells.length)];
    spellBlock.querySelector("h2").textContent = randomSpell.name;
    spellBlock.querySelector(".spell-description").textContent = randomSpell.description;
    spellBlock.querySelector(".spell-link").href = randomSpell.link;
}

async function generateItem() {
    const itemBlock = document.querySelector(".random-item-block");
    const items = await loadItems();

    if (items.length === 0) {
        itemBlock.querySelector("h2").textContent = "Geen items beschikbaar";
        itemBlock.querySelector(".item-description").textContent = "";
        itemBlock.querySelector(".item-link").href = "#";
        return;
    }

    const randomItem = items[Math.floor(Math.random() * items.length)];
    itemBlock.querySelector("h2").textContent = randomItem.name;
    itemBlock.querySelector(".item-description").textContent = randomItem.description;
    itemBlock.querySelector(".item-link").href = randomItem.link;
}
