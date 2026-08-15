const ROLES = [
    { id: 'navigator', name: 'Навигатор', icon: 'icon-compass', from: '#731DD8', to: '#5A12B0' },
    { id: 'operator', name: 'Оператор', icon: 'icon-gear', from: '#9B4DFF', to: '#731DD8' },
    { id: 'critic', name: 'Критик', icon: 'icon-shield', from: '#B8F06A', to: '#8BC94A' },
    { id: 'creator', name: 'Создатель ИИ', icon: 'icon-box', from: '#CDFB7C', to: '#A8D95A' },
];

const QUESTIONS = [
    {
        text: 'Вы хотите освоить новую тему или навык, который может пригодиться в работе или жизни. У вас есть доступ к ChatGPT, нейросетям для генерации изображений и видео. Как вы начнёте?',
        options: [
            { role: 'operator', text: 'Попрошу ИИ составить мне учебный план, подобрать материалы и расписание — так я быстрее войду в тему.' },
            { role: 'navigator', text: 'Сначала сам определю, для чего мне это нужно, какой результат хочу получить, и только потом использую ИИ для структурирования и поиска ресурсов.' },
            { role: 'critic', text: 'Не буду использовать ИИ на старте — лучше почитаю книги, посмотрю проверенные курсы, чтобы не исказить понимание.' },
        ],
    },
    {
        text: 'Вам нужно подготовить важный документ (отчёт, презентацию, статью). Вы загружаете данные в нейросеть, она выдаёт готовый текст. Как вы поступите?',
        options: [
            { role: 'navigator', text: 'Проверяю ключевые факты и цифры, но в целом доверяю структуре — ИИ неплохо справляется с такими задачами.' },
            { role: 'operator', text: 'Использую текст как есть — экономит время, а начальнику/заказчику главное — результат.' },
            { role: 'critic', text: 'Перепроверяю каждую цифру, ищу первоисточники, переформулирую часть выводов самостоятельно — ответственность за содержание несу я.' },
        ],
    },
    {
        text: 'В вашей семье или в рабочей группе возник спор: можно ли использовать нейросети для творческих задач (рисунки, тексты, музыка) без ограничений. Кто-то за полную свободу, кто-то против. Как вы поступите?',
        options: [
            { role: 'navigator', text: 'Предлагаю собрать всех и вместе выработать понятные правила: где использование ИИ уместно и развивает, а где обесценивает творчество, и аргументировать это для всех.' },
            { role: 'navigator', text: 'Считаю, что каждый должен решать сам, это вопрос личных предпочтений, не нужно общих правил.' },
            { role: 'critic', text: 'Ввожу полный запрет на ИИ в творчестве — без контроля люди перестанут думать сами.' },
        ],
    },
    {
        text: 'Вам предлагают готовое ИИ-решение, которое "автоматизирует всё" ваши рутинные задачи (планирование, отчёты, почту). Стоит дорого. Как вы поступите?',
        options: [
            { role: 'navigator', text: 'Изучаю, какие именно задачи это закрывает, сравниваю с другими вариантами (включая бесплатные или комбинацию простых инструментов), и беру только то, что реально нужно.' },
            { role: 'operator', text: 'Если бюджет позволяет — подключаю, разберусь по ходу. Главное — снять рутину.' },
            { role: 'creator', text: 'Прошу техническую документацию, анализирую алгоритмы, оцениваю, можно ли создать подобное решение внутри компании/самостоятельно.' },
        ],
    },
    {
        text: 'Вы используете ИИ для подготовки аналитического отчёта для руководства или публикации. Текст выглядит убедительно, цифры гладкие. Как вы поступите?',
        options: [
            { role: 'navigator', text: 'Перечитываю, проверяю выводы, прошу ИИ визуализировать ключевые тренды, затем сам расставляю смысловые акценты и решаю, в каком формате подать (презентация, дашборд).' },
            { role: 'operator', text: 'Отправляю как есть — структура логичная, время на перепроверку избыточно.' },
            { role: 'creator', text: 'Предлагаю создать систему, которая будет автоматически накапливать данные и генерировать отчёты в связке с предыдущими, чтобы не делать это каждый раз вручную.' },
        ],
    },
];

const RECOMMENDATIONS = {
    navigator: {
        level1: 'Возьмите любую задачу, которую вы делаете каждый день, и опишите её в трёх словах: что я делаю → зачем я это делаю → для кого. Затем спросите себя: «А можно ли эту задачу решить по-другому?» Запишите один альтернативный способ.',
        level2: [
            'Учитесь видеть связи между задачами. Не решайте проблемы по отдельности — ищите, как они связаны друг с другом. Например, если вы настраиваете один процесс, подумайте, на что ещё он влияет.',
            'Тренируйтесь задавать вопросы вместо того, чтобы давать ответы. Вместо «сделайте так» спросите «а что, если сделать иначе?». Это поможет вам и другим находить неочевидные решения.',
            'Рефлексируйте не только результаты, но и свой подход. После завершения задачи спросите себя: «А правильно ли я строил свою работу? Что я могу изменить в следующий раз?»',
        ],
        level3: [
            '«Разум и природа» Грегори Бейтсона — о том, как видеть паттерны и связи в любых системах.',
            '«Хорошо устроенная голова» Эдгара Морена — о том, как связывать знания из разных областей.',
        ],
    },
    operator: {
        level1: 'Перед тем как попросить ИИ что-то сделать, напишите на листке бумаги: «Какую проблему я решаю?» Если вы не можете ответить на этот вопрос чётко — отложите запрос, подумайте ещё 5 минут и сформулируйте.',
        level2: [
            'Развивайте привычку перепроверять. ИИ часто выдаёт «гладкий», но не всегда точный ответ. Сверяйте ключевые факты с тем, что вы уже знаете, или с другим источником.',
            'Учитесь формулировать цели. Вместо «сделай отчёт» — «мне нужен отчёт, чтобы показать рост продаж за месяц, основные выводы — в начале, детали — в конце». Чем чётче цель, тем лучше результат.',
            'Понимайте, что ИИ — это инструмент, а не замена мышления. Он хорош для рутины, но слаб в ситуациях, где нужны интуиция, опыт и понимание контекста. Не бойтесь делать часть работы сами.',
        ],
        level3: [
            '«Семь сложных уроков образования будущего» Эдгара Морена — о том, почему упрощение знания делает нас «слепыми» в других областях.',
        ],
    },
    critic: {
        level1: 'Выберите одну небольшую, неважную задачу (например, придумать меню на неделю, написать черновик письма или составить список дел) и полностью доверьте её ИИ. Не проверяйте результат досконально — просто посмотрите, что получилось. Скорее всего, вы удивитесь, насколько это может быть полезно.',
        level2: [
            'Учитесь различать «опасно» и «просто непривычно». Многие вещи, которые кажутся рискованными, на самом деле безопасны, если их пробовать понемногу. Начните с малого — и вы увидите, что страх постепенно уходит.',
            'Развивайте гибкость. Вместо «это нельзя» или «это неправильно» попробуйте говорить «это можно попробовать в таких-то условиях». Так вы останетесь в контроле, но не будете блокировать возможности.',
            'Учитесь доносить свою позицию конструктивно. Вместо «запрещаю» объясняйте «почему это может быть рискованно» и «как можно сделать безопаснее». Так ваши идеи будут слышать и принимать.',
        ],
        level3: [
            '«Воспитание умственное, нравственное и физическое» Герберта Спенсера — о гармоничном развитии и балансе между свободой и контролем.',
            '«Введение в комплексное мышление» Эдгара Морена — о том, как видеть связи, а не только разрывы.',
        ],
    },
    creator: {
        level1: 'Возьмите любое своё ИИ-решение (или идею) и объясните его человеку, который вообще не разбирается в технологиях: вашей маме, супругу или другу. Если он понял — вы отлично справились. Если нет — переформулируйте. Это поможет вам делать продукты, которые действительно нужны людям.',
        level2: [
            'Не замыкайтесь в технике. Самое сильное решение — это то, которое решает человеческую проблему, а не просто работает. Учитесь слушать пользователей и видеть их настоящие потребности.',
            'Учитесь выбирать, что не делать. ИИ даёт бесконечные возможности, но ваше время и ресурсы ограничены. Сосредоточьтесь на том, что принесёт реальную пользу, а не на всём подряд.',
            'Задумывайтесь о последствиях. Ваше решение повлияет на поведение людей. Представляйте, как именно, и задавайте себе вопрос: «Я бы хотел, чтобы мой ребёнок пользовался этим?»',
        ],
        level3: [
            '«Разум и природа» Грегори Бейтсона — о том, что разум — это не только вычислительные процессы.',
            '«Основания науки о нравственности» Герберта Спенсера — о том, как ваше творение влияет на общество.',
        ],
    },
    tie: {
        level1: 'Составьте список из трёх своих сильных сторон (по одной из каждой роли, которая у вас проявилась). Например: «Я хорошо анализирую, быстро делаю и вижу риски». А теперь подумайте: какая задача требует сочетания именно этих трёх качеств? Найдите её и сделайте.',
        level2: [
            'Выберите одну роль в качестве основной. Вы можете быть многогранны, но если вы попытаетесь быть всем одновременно — вы не будете ничем конкретно. Выберите одно направление для развития на ближайший год.',
            'Интегрируйте роли в одном проекте. Найдите задачу, которая требует всех ваших сильных сторон, и выполните её — от идеи до результата. Вы увидите, как разные роли дополняют друг друга.',
            'Рассказывайте о своей многогранности как о силе. Когда вы говорите о себе — делайте акцент на том, что вы умеете сочетать разное, а не на том, что не можете выбрать одно.',
        ],
        level3: [
            '«Хорошо устроенная голова» Эдгара Морена — о том, как удерживать разные знания в связке.',
            '«Воспитание умственное, нравственное и физическое» Герберта Спенсера — о развитии индивидуальности.',
        ],
    },
};

const LETTERS = ['А', 'Б', 'В'];

const screenStart = document.getElementById('screen-start');
const screenQuiz = document.getElementById('screen-quiz');
const screenResult = document.getElementById('screen-result');
const progressEl = document.getElementById('progress');
const counterEl = document.getElementById('counter');
const questionTextEl = document.getElementById('question-text');
const optionsEl = document.getElementById('options');

const resultEmojiEl = document.getElementById('result-emoji');
const resultRoleEl = document.getElementById('result-role');
const scalesEl = document.getElementById('scales');
const recLevel1El = document.getElementById('rec-level1');
const recLevel2El = document.getElementById('rec-level2');
const recLevel3El = document.getElementById('rec-level3');

const announcer = document.getElementById('announcer');

function announce(msg) {
    announcer.textContent = '';
    requestAnimationFrame(() => {
        announcer.textContent = msg;
    });
}

let currentQuestion = 0;
let answers = [];
let answered = false;

function showScreen(screen, direction = 'forward') {
    [screenStart, screenQuiz, screenResult].forEach(s => (s.hidden = s !== screen));
    screen.classList.remove('slide-in-right', 'slide-in-left');
    void screen.offsetWidth;
    screen.classList.add(direction === 'back' ? 'slide-in-left' : 'slide-in-right');
}

function renderQuestion() {
    answered = false;
    const q = QUESTIONS[currentQuestion];

    progressEl.innerHTML = '';
    for (let i = 0; i < QUESTIONS.length; i++) {
        const dot = document.createElement('span');
        dot.className = 'dot';
        if (i < currentQuestion) dot.classList.add('done');
        if (i === currentQuestion) dot.classList.add('active');
        progressEl.appendChild(dot);
    }

    counterEl.textContent = `Вопрос ${currentQuestion + 1} из ${QUESTIONS.length}`;
    questionTextEl.textContent = q.text;

    optionsEl.innerHTML = q.options
        .map((opt, i) => `
            <button class="option" data-index="${i}">
                <span class="letter">${LETTERS[i]}</span>
                <span>${opt.text}</span>
            </button>
        `)
        .join('');

    if (currentQuestion > 0) {
        questionTextEl.classList.remove('anim');
        optionsEl.classList.remove('anim');
        void questionTextEl.offsetWidth;
        questionTextEl.classList.add('anim');
        optionsEl.classList.add('anim');
    }

    questionTextEl.focus({ preventScroll: true });
    announce(`Вопрос ${currentQuestion + 1} из ${QUESTIONS.length}`);
}

function selectOption(index) {
    if (answered) return;
    answered = true;

    const q = QUESTIONS[currentQuestion];
    answers.push(q.options[index].role);

    const buttons = optionsEl.querySelectorAll('.option');
    buttons.forEach((btn, i) => {
        if (i === index) btn.classList.add('selected');
        else btn.disabled = true;
    });

    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < QUESTIONS.length) {
            renderQuestion();
        } else {
            showResult();
        }
    }, 400);
}

function computeResults() {
    const counts = { navigator: 0, operator: 0, critic: 0, creator: 0 };
    answers.forEach(role => counts[role]++);

    const max = Math.max(...Object.values(counts));
    const tiedRoles = ROLES.filter(r => counts[r.id] === max);

    const percentages = {};
    ROLES.forEach(r => {
        percentages[r.id] = Math.round((counts[r.id] / QUESTIONS.length) * 100);
    });

    const roleId = tiedRoles.length > 1 ? 'tie' : tiedRoles[0].id;
    return { roleId, tiedRoles, percentages };
}

function roleIconHtml(role) {
    return `<svg class="icon result-icon" aria-hidden="true"><use href="#${role.icon}"/></svg>`;
}

function showResult() {
    const { roleId, tiedRoles, percentages } = computeResults();
    const rec = RECOMMENDATIONS[roleId];

    if (roleId === 'tie') {
        resultEmojiEl.innerHTML = tiedRoles.map(roleIconHtml).join('');
        resultRoleEl.textContent = 'Вы — ' + tiedRoles.map(r => r.name).join(' + ');
    } else {
        const role = ROLES.find(r => r.id === roleId);
        resultEmojiEl.innerHTML = roleIconHtml(role);
        resultRoleEl.textContent = 'Вы — ' + role.name;
    }

    scalesEl.innerHTML = ROLES.map(r => `
        <div class="scale-row">
            <div class="scale-label"><strong>${r.name}</strong><span>${percentages[r.id]}%</span></div>
            <div class="scale-track">
                <div class="scale-fill" data-id="${r.id}" style="background: #CDFB7C;"></div>
            </div>
        </div>
    `).join('');

    recLevel1El.textContent = rec.level1;
    recLevel2El.innerHTML = rec.level2.map(b => `<li>${b}</li>`).join('');
    recLevel3El.innerHTML = rec.level3.map(b => `<li>${b}</li>`).join('');

    showScreen(screenResult);

    resultRoleEl.focus({ preventScroll: true });
    announce('Результат готов: ' + resultRoleEl.textContent);

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            scalesEl.querySelectorAll('.scale-fill').forEach(el => {
                el.style.width = percentages[el.dataset.id] + '%';
            });
        });
    });
}

function restart() {
    currentQuestion = 0;
    answers = [];
    showScreen(screenStart, 'back');
    document.querySelector('#screen-start h1').focus({ preventScroll: true });
}

document.getElementById('btn-start').addEventListener('click', () => {
    showScreen(screenQuiz);
    renderQuestion();
});

optionsEl.addEventListener('click', e => {
    const btn = e.target.closest('.option');
    if (!btn || answered) return;
    selectOption(Number(btn.dataset.index));
});

function buildStandaloneIconSvg(symbolId, color, size, strokeWidth) {
    const symbol = document.getElementById(symbolId);
    if (!symbol) return null;

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('width', String(size));
    svg.setAttribute('height', String(size));
    svg.setAttribute('viewBox', symbol.getAttribute('viewBox') || '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', color);
    svg.setAttribute('stroke-width', String(strokeWidth));
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');

    Array.from(symbol.childNodes).forEach(child => {
        if (child.nodeType !== 1) return;
        const el = child.cloneNode(true);
        el.setAttribute('fill', 'none');
        el.setAttribute('stroke', color);
        el.setAttribute('stroke-width', String(strokeWidth));
        el.setAttribute('stroke-linecap', 'round');
        el.setAttribute('stroke-linejoin', 'round');
        svg.appendChild(el);
    });

    return svg;
}

function rasterizeSvgToPng(svgEl, size) {
    return new Promise((resolve, reject) => {
        const xml = new XMLSerializer().serializeToString(svgEl);
        const url = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(xml);
        const img = new Image();
        img.onload = () => {
            try {
                const scale = 3;
                const canvas = document.createElement('canvas');
                canvas.width = size * scale;
                canvas.height = size * scale;
                const ctx = canvas.getContext('2d');
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                resolve(canvas.toDataURL('image/png'));
            } catch (err) {
                reject(err);
            }
        };
        img.onerror = () => reject(new Error('Не удалось растеризовать иконку'));
        img.src = url;
    });
}

async function replaceIconsWithPngForPdf(root, color = '#731DD8') {
    if (!root) return [];
    const replacements = [];
    const svgs = [...root.querySelectorAll('svg')].filter(svg => !svg.closest('.result-actions'));

    for (const svg of svgs) {
        const use = svg.querySelector('use');
        const href = use
            ? (use.getAttribute('href') || use.getAttribute('xlink:href') || '')
            : '';
        const symbolId = href.replace(/^#/, '');
        if (!symbolId) continue;

        const isResult = svg.classList.contains('result-icon');
        const size = isResult ? 60 : 22;
        const strokeWidth = isResult ? 1.4 : 1.8;
        const standalone = buildStandaloneIconSvg(symbolId, color, size, strokeWidth);
        if (!standalone) continue;

        const dataUrl = await rasterizeSvgToPng(standalone, size);
        const img = document.createElement('img');
        img.src = dataUrl;
        img.alt = '';
        img.width = size;
        img.height = size;
        img.setAttribute('data-pdf-icon', '1');
        img.style.cssText = [
            `width:${size}px`,
            `height:${size}px`,
            'display:inline-block',
            'flex-shrink:0',
            'vertical-align:middle',
        ].join(';');

        svg.replaceWith(img);
        replacements.push({ placeholder: img, original: svg });
    }

    return replacements;
}

function restorePdfIcons(replacements) {
    replacements.forEach(({ placeholder, original }) => {
        if (placeholder.parentNode) placeholder.replaceWith(original);
    });
}

async function downloadPdf() {
    const btn = document.getElementById('btn-save');
    if (btn.disabled) return;
    if (typeof html2pdf !== 'function') {
        alert('Библиотека PDF ещё загружается. Подождите секунду и попробуйте снова.');
        return;
    }

    const labelHtml = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = 'Сохранение…';

    let host = null;

    try {
        // Рендерим PDF со скрытого клона, чтобы экран не мигал белым
        host = document.createElement('div');
        host.className = 'pdf-export-host';
        host.setAttribute('aria-hidden', 'true');

        const clone = screenResult.cloneNode(true);
        clone.removeAttribute('id');
        clone.hidden = false;
        clone.classList.remove('slide-in-right', 'slide-in-left');
        clone.classList.add('pdf-capture');
        clone.querySelector('.result-actions')?.remove();

        host.appendChild(clone);
        document.body.appendChild(host);

        await replaceIconsWithPngForPdf(clone, '#731DD8');

        await Promise.all(
            [...clone.querySelectorAll('img')].map(img => {
                if (img.complete) return Promise.resolve();
                return new Promise(resolve => {
                    img.onload = resolve;
                    img.onerror = resolve;
                });
            })
        );
        await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));

        const roleSlug = (resultRoleEl.textContent || 'rezultat')
            .replace(/^Вы —\s*/i, '')
            .replace(/[^\p{L}\p{N}+]+/gu, '-')
            .replace(/-+/g, '-')
            .replace(/^-|-$/g, '')
            .toLowerCase() || 'rezultat';

        await html2pdf()
            .set({
                margin: [12, 12, 12, 12],
                filename: `diagnostika-${roleSlug}.pdf`,
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: {
                    scale: 2,
                    useCORS: true,
                    backgroundColor: '#ffffff',
                    logging: false,
                    scrollX: 0,
                    scrollY: 0,
                },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
                pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
            })
            .from(clone)
            .save();

        announce('PDF сохранён');
    } catch (err) {
        console.error(err);
        announce('Не удалось сохранить PDF');
        alert('Не удалось сохранить PDF. Попробуйте ещё раз.');
    } finally {
        host?.remove();
        btn.disabled = false;
        btn.innerHTML = labelHtml;
    }
}

document.getElementById('btn-save').addEventListener('click', downloadPdf);
document.getElementById('btn-restart').addEventListener('click', restart);
