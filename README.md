# Демо сайт креативного агентство

Адаптивный и стильный лендинг креативного агентства с современными анимациями и интерактивными компонентами. Проект разработан для создания яркого впечатления.
## Дизайн
- **[Ссылка на фигму](https://www.figma.com/design/65gFXT6dvNfDjkX5osjZbu/Untitled?node-id=5-2&t=zgqFDE8HGEajkIoE-1)**
## Функционал
- **Адаптивный дизайн**: оптимизирован для работы на различных устройствах и экранах.
- **Анимированный сайдбар меню**: плавные анимации для открытия и закрытия меню.
- **Smoke-курсор**: эффектный дымчатый курсор для дополнительного wow-эффекта.
- **Форма для отправки запроса**: готовая форма с интерактивными полями для отправки заявок.
- **Анимированные компоненты**: динамичные переходы и эффекты для компонентов, чтобы оживить интерфейс.
- **Юниты vw**: сайт полностью сделан использую юниты vw (view width). [Подробнее](https://www.sitepoint.com/css-viewport-units-quick-start/)

## Используемые библиотеки

- **[TailwindCSS](https://tailwindcss.com/)** — утилитарный CSS-фреймворк для создания адаптивных интерфейсов.
- **[GSAP](https://greensock.com/gsap/)** — библиотека для создания анимаций высокой производительности.
- **[Framer Motion](https://www.framer.com/motion/)** — декларативные анимации и жесты для React-компонентов.
- **[Lenis](https://github.com/darkroomengineering/lenis)** — кастомный скролл для плавного пользовательского опыта.
- **[Edil Ozi](https://github.com/Edil-ozi/edil-ozi)** — готовые анимированные компоненты для приложений React.
- **[shadcn/ui](https://ui.shadcn.dev/)** — коллекция интерфейсных компонентов с полной поддержкой кастомизации.

## Установка и запуск

 *Клонируйте репозиторий и запустите* :

   ```bash
   git clone https://github.com/Shatlyk1011/agency-website.git
   ```

   ```
   cd agency-website
   ```

   ```
   npm i
   ```

   ```
   npm run dev
   ```

## **Примечания**
**Курсор с эффектом дыма реализован с использованием WebGL. На устройствах с низкой производительностью или устаревших браузерах этот эффект может снижать скорость работы сайта или отображаться некорректно.** <br/> <br/>

**Для отключение курсора локально, перейдите к корневой странице `app/page.tsx` и отключите компонент ` <ShadowCursor />`**
