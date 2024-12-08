// Загружаем данные из JSON файла
fetch('spells.json')
    .then(response => response.json())
    .then(data => {
        // Функция для создания HTML из шаблона
        const renderSpells = () => {
            const listElement = document.getElementById('list'); // Используем id="list"
            
            // Проходим по всем алфавитным категориям
            for (let key in data) {
                if (data.hasOwnProperty(key)) {
                    // Сортируем заклинания по уровню
                    const sectionSpells = data[key].sort((a, b) => a.level - b.level);

                    // Создаем блок для текущей буквы
                    const sectionWrapper = document.createElement('li');
                    sectionWrapper.classList.add('cards_list__block-wrapper');
                    
                    // Заголовок с буквой
                    sectionWrapper.innerHTML = `
                        <div class="cards_list__block-label">${key}</div>
                        <ul class="cards_list__block"></ul>
                    `;
                    // Список заклинаний для этой буквы
                    const sectionList = sectionWrapper.querySelector('.cards_list__block');
                    
                    // Добавляем заклинания в текущий блок
                    sectionSpells.forEach(spell => {
                        const spellElement = document.createElement('li');
                        spellElement.classList.add('cards_list__item');

                        // Формируем HTML для заклинания
                        spellElement.innerHTML = `
                            <a class="cards_list__item-wrapper" href="/speuken/${spell.name.toLowerCase().replace(/\s+/g, '-')}.html">
                                <span class="cards_list__item-prefix" title="${spell.level} niveau">[<span>${spell.level}</span>]</span>
                                <span class="cards_list__item-icon" title="${spell.school}">
                                    <span class="svg svg-16 svg--spell_school_${spell.school}">
                                        <svg><use xlink:href="images/sprte.svg#spell_school_${spell.school}"></use></svg>
                                    </span>
                                </span>
                                <span class="cards_list__item-name">${spell.name}</span>
                                ${spell.concentration ? `<span class="cards_list__item-tag concentration" title="Concentratie">C</span>` : ''}
                                ${spell.ritual ? `<span class="cards_list__item-tag ritual" title="Ritueel">R</span>` : ''}
                                <span class="cards_list__item-suffix">${spell.components}</span>
                            </a>
                        `;
                        sectionList.appendChild(spellElement); // Добавляем заклинание в список
                    });
                    // Добавляем блок для буквы и заклинаний в основной список
                    listElement.appendChild(sectionWrapper);
                }
            }
        };
        // Вызываем функцию для рендеринга
        renderSpells();
    })
    .catch(error => console.error('Ошибка загрузки данных:', error));

