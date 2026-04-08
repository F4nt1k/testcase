(function () {
  const TEXT_MAP = new Map([
    ["About", "О нас"],
    ["Blog", "Блог"],
    ["Features", "Возможности"],
    ["Pricing", "Цены"],
    ["Pages", "Страницы"],
    ["Tutorials", "Гайды"],
    ["Book a call", "Созвон"],
    ["Coming Soon", "Скоро"],
    ["Legal", "Документы"],
    ["Hurry, only 3 spots left.", "Поторопитесь, осталось лишь 3 места."],
    ["Are you", "Готовы"],
    ["ready?", "к старту?"],
    ["This could be the start of something big.", "Это может стать началом чего-то большого."],
    ["See plans", "Смотреть тарифы"],
    ["The truly", "По-настоящему"],
    ["mit", "без"],
    ["less", "лимита"],
    ["design subscription.", "дизайн-подписка."],
    ["Say goodbye to expensive freelancers, and hello to limitless, lightning fast design.", "Забудьте о дорогих фрилансерах и получите быстрый, гибкий и стабильный дизайн без лишней боли."],
    ["Designs trusted by companies like:", "Дизайн, которому доверяют компании вроде:"],
    ["Created by", "Автор"],
    ["Process", "Процесс"],
    ["Your designs,", "Дизайн,"],
    ["effortlessly.", "без перегруза."],
    ["Begin your design journey in three effortless steps.", "Начать работу можно всего в три простых шага."],
    ["Subscribe", "Подписка"],
    ["Subscribe to a plan & request as many designs as you’d like.", "Выберите тариф и отправляйте столько задач, сколько нужно."],
    ["Receive", "Получение"],
    ["Receive your design as fast as two business days on average.", "В среднем вы получаете готовый дизайн уже через два рабочих дня."],
    ["Revise", "Правки"],
    ["We'll revise the designs until you're 100% satisfied.", "Дорабатываем макеты до тех пор, пока результат не устроит вас полностью."],
    ["Book a 15-min call", "Созвон на 15 минут"],
    ["Benefits", "Преимущества"],
    ["Fast, quality", "Быстро и"],
    ["limitless.", "без лимита."],
    ["Limitless replaces unreliable freelancers and expensive agencies for one flat monthly fee, with highly-converting designs delivered so fast that it will blow your mind.", "Limitless заменяет дорогие агентства и нестабильных фрилансеров одной понятной ежемесячной ставкой и очень быстрым дизайном, который работает на конверсию."],
    ["Reasons you will", "Причины,"],
    ["love", "почему вы"],
    ["us.", "нас полюбите."],
    ["Once you try Limitless, you’ll never go anywhere else for design. Seriously.", "После Limitless искать дизайн где-то еще уже просто не захочется."],
    ["Design Board", "Доска задач"],
    ["Request as many designs as you like on your own design board.", "Добавляйте столько дизайн-задач, сколько нужно, в собственной рабочей доске."],
    ["Lightning Fast Delivery", "Молниеносная скорость"],
    ["Receive your designs one at a time in just a few days.", "Получайте готовые дизайны один за другим всего за несколько дней."],
    ["Fixed Monthly Rate", "Фиксированная цена"],
    ["No surprises. Pay the same fixed price every month.", "Без сюрпризов: одна и та же ставка каждый месяц."],
    ["Award-Winning Designs", "Дизайн, который впечатляет"],
    ["Leave your customers in awe with award-winning designs.", "Помогите бренду выделиться благодаря яркому и сильному визуалу."],
    ["Unlimited Revisions", "Безлимитные правки"],
    ["Revise your designs until you're 100% satisfied. No limits.", "Дорабатываем, пока вы полностью не скажете «да»."],
    ["Unique & All Yours", "Уникально и только ваше"],
    ["All your designs are crafted especially for you.", "Каждый дизайн создается специально под ваш бренд."],
    ["Solution", "Решение"],
    ["All your", "Все ваши"],
    ["design", "дизайн-"],
    ["needs.", "задачи."],
    ["Running a successful business means more than just a website. That's why we cover all your design needs, so you don't have to go anywhere else.", "Бизнесу нужен не только сайт. Поэтому мы закрываем весь спектр дизайн-задач в одном месте."],
    ["Logos", "Логотипы"],
    ["Landing Pages", "Лендинги"],
    ["Websites", "Сайты"],
    ["Digital Products", "Цифровые продукты"],
    ["Pitch Decks", "Питч-деки"],
    ["Mobile Apps", "Мобильные приложения"],
    ["Email Design", "Email-дизайн"],
    ["Product Design", "Продуктовый дизайн"],
    ["Social Media", "Соцсети"],
    ["Pricing that's so", "Цены,"],
    ["simple.", "с которыми всё просто."],
    ["We like to keep things simple with one, limitless plan.", "Нам нравится простота: один понятный безлимитный тариф."],
    ["3 spots left", "Осталось 3 места"],
    ["/month", "/месяц"],
    ["One request at a time. Pause or cancel anytime.", "По одной активной задаче за раз. Можно поставить на паузу или отменить в любой момент."],
    ["Framer Development", "Разработка сайта"],
    ["Unlimited design requests", "Безлимитные дизайн-запросы"],
    ["One request at a time", "По одной задаче за раз"],
    ["Average 48 hours delivery", "В среднем 48 часов на доставку"],
    ["Unlimited revisions", "Безлимитные правки"],
    ["Unlimited brands", "Безлимит по брендам"],
    ["Invite unlimited users", "Можно приглашать сколько угодно участников"],
    ["Pause or cancel anytime", "Пауза или отмена в любой момент"],
    ["Limitless comes with a complimentary 8-part video tutorial series to help you get set up and customise your template.", "В комплекте идет серия из 8 видео, чтобы вы быстро запустились и настроили шаблон под себя."],
    ["Buy template", "Купить шаблон"],
    ["See tutorials", "Смотреть гайды"],
    ["Why wouldn't I just hire a full-time designer?", "Почему бы просто не нанять дизайнера в штат?"],
    ["Is there a limit to how many requests I can have?", "Есть ли лимит на количество задач?"],
    ["How fast will I receive my designs?", "Как быстро я получу дизайн?"],
    ["Who are the designers?", "Кто будет делать дизайн?"],
    ["What if I don't like the design?", "Что если дизайн мне не понравится?"],
    ["Are there any refunds if I don't like the service?", "Есть ли возврат, если сервис не подойдет?"],
    ["Submit Unlimited Requests", "Безлимитные заявки"],
    ["Submit as many design requests as you like and we’ll get to work on them, one by one.", "Отправляйте столько задач, сколько нужно, и мы будем выполнять их по очереди."],
    ["Manage with Trello", "Управляйте через Trello"],
    ["Manage your design board using Trello. View active, queued and completed tasks with ease.", "Ведите дизайн-доску в Trello и легко отслеживайте активные, запланированные и завершенные задачи."],
    ["Pause Anytime", "Пауза в любой момент"],
    ["No more requests for the now? Just hit pause and resume your subscription at a future date.", "Если задач пока нет, просто поставьте подписку на паузу и вернитесь позже."],
    ["Helping you make a", "Помогаем создавать"],
    ["lasting", "заметное"],
    ["impact online.", "онлайн-влияние."],
    ["We’re here to craft more than just a website—our mission is to help you build a digital experience that connects, engages, and drives real results for your business.", "Мы создаем не просто сайты, а цифровой опыт, который вовлекает, запоминается и помогает бизнесу расти."],
    ["Our designs are featured on:", "Наши работы замечали:"],
    ["On a", "Если"],
    ["professional", "по делу"],
    ["note", "серьезно"],
    ["We're passionate about digital excellence", "Мы действительно фанатеем от сильного digital"],
    ["Our team is driven by a shared mission to create visually stunning, high-performing websites. We stay ahead of trends and use cutting-edge techniques to help your brand stand out.", "Нас объединяет одно: делать выразительные и эффективные сайты. Мы следим за трендами и используем современные приемы, чтобы ваш бренд выделялся."],
    ["Quality at the forefront", "Качество на первом месте"],
    ["Every project is crafted with attention to detail and a commitment to deliver exceptional results that not only look great but also drive performance.", "В каждом проекте внимание к деталям сочетается с желанием дать результат, который не только красиво выглядит, но и работает."],
    ["Focus on measurable impact", "Фокус на измеримом результате"],
    ["We design strategies that prioritize growth. Our focus is on delivering tangible, measurable results that help your business thrive.", "Мы проектируем решения с прицелом на рост и делаем ставку на понятный, ощутимый эффект для бизнеса."],
    ["personal", "Личное"],
    ["We work hard and have fun", "Работаем много, но с удовольствием"],
    ["Our workspace thrives on energy and laughter, whether we’re brainstorming new ideas or just sharing stories. We find that staying lighthearted keeps our creativity flowing.", "Мы любим энергию, юмор и живые обсуждения. Именно такая атмосфера помогает идеям рождаться быстрее."],
    ["We're a close-knit team", "Мы правда команда"],
    ["We’re more than colleagues—we’re a family. Whether we’re tackling a big project or just supporting each other through the day, we always have each other’s backs.", "Мы не просто коллеги. Мы поддерживаем друг друга и в больших проектах, и в обычных рабочих днях."],
    ["Celebrating individuality", "Ценим индивидуальность"],
    ["Everyone here brings something unique. Whether it’s a quirky skill or an offbeat hobby, we embrace what makes each of us different—it’s what keeps things fresh and exciting.", "Каждый приносит в работу что-то свое. И именно эта разность делает студию живой, свежей и интересной."],
    ["Welcome to the", "Добро пожаловать в"],
    ["blog.", "блог."],
    ["Get expert insights, practical tips, and strategies to grow your digital marketing agency tailored for ambitious agency owners like you.", "Практические советы, идеи и стратегии роста для амбициозных digital-агентств."],
    ["5 Proven Strategies to Increase Your Agency’s Lead Generation", "5 рабочих стратегий для роста лидогенерации агентства"],
    ["Digital Marketing", "Диджитал-маркетинг"],
    ["How to Craft High-Converting Service Pages for Your Agency", "Как создавать конверсионные страницы услуг для агентства"],
    ["Top Marketing Trends Every Agency Should Watch in 2024", "Главные маркетинговые тренды, за которыми агентствам стоит следить в 2024"],
    ["Trends", "Тренды"],
    ["Why Your Digital Marketing Agency Needs a Blog", "Почему digital-агентству нужен блог"],
    ["Page Not Found", "Страница не найдена"],
    ["Sometimes you need to", "Иногда нужно"],
    ["get lost", "заблудиться"],
    ["to find your way.", "чтобы найти свой путь."],
    ["Looks like you ventured too far, let's go home.", "Похоже, вы ушли чуть дальше нужного. Вернемся на главную."],
    ["Go Home", "На главную"],
    ["Create a free website with Framer, the website builder loved by startups, designers and agencies.", ""]
  ]);

  const TITLE_MAP = new Map([
    ["Limitless - Агенство Вебсайтов", "Limitless - агентство веб-сайтов"],
    ["Blog - Limitless", "Блог - Limitless"],
    ["Page Not Found - Limitless", "Страница не найдена - Limitless"]
  ]);

  const META_MAP = new Map([
    ["Blog - Limitless", "Блог - Limitless"],
    ["Page Not Found - Limitless", "Страница не найдена - Limitless"]
  ]);

  let isApplying = false;
  let queued = false;

  function normalize(text) {
    return text.replace(/\s+/g, " ").trim();
  }

  function stripFramerBranding() {
    try {
      localStorage.removeItem("__framer_force_showing_editorbar_since");
    } catch (error) {
      void error;
    }

    document.querySelectorAll("#__framer-badge-container, script[src*='events.framer.com']").forEach((node) => {
      node.remove();
    });

    document.querySelectorAll("a[href*='framer.com']").forEach((link) => {
      link.removeAttribute("href");
      link.removeAttribute("target");
      link.removeAttribute("rel");
      link.style.pointerEvents = "none";
      link.style.cursor = "default";
    });
  }

  function applyFontSwap() {
    document.body.classList.add("is-ru-localized");

    document.querySelectorAll("[style*='--framer-font-family']").forEach((element) => {
      const current = element.style.getPropertyValue("--framer-font-family");
      if (!current) return;

      if (current.includes("Satoshi")) {
        element.style.setProperty("--framer-font-family", '"Manrope", "Inter", system-ui, sans-serif');
      }

      if (current.includes("Instrument Serif")) {
        element.style.setProperty("--framer-font-family", '"Cormorant Garamond", Georgia, serif');
      }
    });
  }

  function applyTextMap() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    const nodes = [];
    while (walker.nextNode()) {
      nodes.push(walker.currentNode);
    }

    nodes.forEach((node) => {
      if (!node.parentElement) return;
      const tag = node.parentElement.tagName;
      if (tag === "SCRIPT" || tag === "STYLE" || tag === "NOSCRIPT") return;

      const normalized = normalize(node.textContent || "");
      if (!TEXT_MAP.has(normalized)) return;

      node.textContent = TEXT_MAP.get(normalized);
    });
  }

  function applyMetaMap() {
    if (TITLE_MAP.has(document.title)) {
      document.title = TITLE_MAP.get(document.title);
    }

    document.querySelectorAll("meta[property='og:title'], meta[name='twitter:title']").forEach((meta) => {
      const value = meta.getAttribute("content") || "";
      if (META_MAP.has(value)) {
        meta.setAttribute("content", META_MAP.get(value));
      }
    });
  }

  function applyAll() {
    if (isApplying) return;
    isApplying = true;

    stripFramerBranding();
    applyFontSwap();
    applyTextMap();
    applyMetaMap();

    isApplying = false;
  }

  function scheduleApply() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => {
      queued = false;
      applyAll();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyAll, { once: true });
  } else {
    applyAll();
  }

  window.addEventListener("load", applyAll, { once: true });

  const observer = new MutationObserver(scheduleApply);
  observer.observe(document.documentElement, {
    childList: true,
    characterData: true,
    subtree: true
  });
})();
