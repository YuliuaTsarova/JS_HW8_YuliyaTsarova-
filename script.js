`use strict` //включает строгий режим выполнения JavaScript. 

// Домашняя работа No8. 
// Работа с DOM и DOM.

// Используя полученные знания выполните сл. задания:
// Создайте HTML-документ (index.html) и подключите в него файл script.js.
// Создайте стартовую структуру HTML-документа (точно так, как в примере):
// <!DOCTYPE html>
// <html>
// <head>
// <script src="script.js"></script>
// </head>
// <body></body>
// </html>
// Используя ТОЛЬКО ВОЗМОЖНОСТИ JAVASCRIPT (функции и методы
// DOM и BOM) выполните верстку макета «Call_to_Action#3.fig»
// (/Notes/WEB_DESIGN/Figma/Elements):

// Важные условия:
// 1. В исходном файле index.html должна оставаться только стартовая
// структура. Остальные элементы и их атрибуты, в т.ч. код CSS, должны
// появляться динамически из JS.
// 2. Добавьте к <html> недостающий атрибут lang, а в <head></head>
// недостающие и рекомендованные к использованию элементы (<meta>,
// <title>).
// 3. CSS-код добавляйте только в тег <style></style>, используя только
// селекторы классов.

const createMetaData = () => {
    document.documentElement.setAttribute("lang", "ru");
}
createMetaData()

const title = document.createElement("title"); // document.createElement  Создаёт новый элемент с заданным тегом:
title.innerHTML = "JS_8"; //Свойство innerHTML позволяет получить HTML-содержимое элемента в виде строки.   Мы также можем изменять его.

//можно вывести в консоль и увидеть его 
console.log(title);

const metaUTF8 = document.createElement("meta");
// Метод setAttribute позволяет изменить значение заданного атрибута какого-либо тега. 
// элемент.setAttribute(имя атрибута, новое значение)

// Доступ к атрибутам осуществляется при помощи стандартных методов:

// elem.hasAttribute(name) – проверяет наличие атрибута
// elem.getAttribute(name) – получает значение атрибута
// elem.setAttribute(name, value) – устанавливает атрибут
// elem.removeAttribute(name) – удаляет атрибут
// elem.attributes -  получить все атрибуты элемента

metaUTF8.setAttribute("charset", "UTF-8");

//можно вывести в консоль и увидеть его 
console.log(metaUTF8);

//  у меты 2 атрибута, добавляем их
const viewport = document.createElement('meta');
viewport.setAttribute('name', 'viewport');
viewport.setAttribute('content', 'width=device-width, initial-scale=1.0')

//можно вывести в консоль и увидеть его 
console.log(viewport);

//Метод append позволяет вставить в конец какого-либо элемента другой элемент. 
//Метод prepend позволяет вставить в начало какого-либо элемента другой элемент.
//родитель.prepend(элемент или строка) 
//Можно добавить сразу несколько элементов или строк, перечислив их через запятую.
document.head.prepend(metaUTF8, viewport, title);

//Метод insertBefore позволяет вставить элемент перед другим элементом.
//родитель.insertBefore(элемент, перед кем вставить)


const style = document.createElement('style');
style.innerHTML = `
    *{
        margin:0;
        padding:0;
    }

    body { 
        padding-top: 100px; 
    }

    .caption {
        width:450px;
        margin:0 auto;
    }

    .caption__title {
        font-size: 36px;
        font-family: 'Arvo', serif;
        font-weight: 400;
        text-align: center;
        margin-bottom: 10px;
    }

    .caption__text {
        font-family: 'Open Sans', 'Times New Roman', sans-serif;
        color: #9FA3A7;
        font-size: 14px;
        text-align: center;
    }

    .card {
        margin: 55px auto;
        width:800px;
        height: 480px;
        display: flex;        
    }

    .card__block {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 80px 95px;
    }

    .card__block:nth-child(2){
        background-color: #8F75BE;
    }

    .card__block:nth-child(1){
        border: 1px solid #E8E9ED;
    }

    .card__suptitle {
        font-family: 'Montserrat', 'Times New Roman',  sans-serif;
        text-transform: uppercase;
        color: #9FA3A7;
        letter-spacing: 2.4px;
        font-size: 12px;
    }

    .card__suptitle--orange {
        color: #FFC80A;
        
    }

    .card__title {
        margin: 25px 0px 30px 0px;
        color: #212121;
        font-family: 'Arvo',  sans-serif;
        font-size: 36px;
    }

    .card__title--white {
        color: #fff;
    }

    .card__text {
        color: #9FA3A7;
        font-size: 12px;
        font-family: 'Open Sans', 'Times New Roman', sans-serif;
    }

    .card__text--white {
        color: #fff;
    }

    .card__button {
        margin-top:62px;
        text-decoration: none;
        width: 140px;
        height: 45px;
        display: flex; 
        align-items: center;
        justify-content: center;
        border: 2px solid #FFC80A;
        border-radius: 30px;
        color: #212121;
        font-family: 'Montserrat', 'Times New Roman',  sans-serif;
        font-size: 12px;
        letter-spacing: 1.4px;   
    }

    .card__button--whiteText {
        color: #fff;
    }    
`
document.head.append(style);

const caption = document.createElement('div');
//Метод add объекта classList позволяет добавлять CSS классы элементу.
//элемент.classList.add(класс);
caption.classList.add('caption');

// обратные кавычки позволяют добавлять содержимое с тегами и классами, делать переносы в коде
caption.innerHTML = `
    <h1 class = "caption__title">Choose Your Option</h1>
    <p class = "caption__text">But I must explain to you how all this mistaken idea of denouncing</p>
`;
document.body.append(caption);

const card = document.createElement('div');
card.className = 'card';
caption.after(card); //метод вставляет элемент после указанного элемента
// = document.body.append(card); втавили в конец на даном этапе тоже самое


//Метод insertBefore позволяет вставить элемент перед другим элементом.
//  Чаще всего используется после создания элемента с помощью createElement. 
//  Метод применяется к родителю того элемента, перед которым произойдет вставка.

// Синтаксис
// родитель.insertBefore(элемент, перед кем вставить)

const card1 = {
    suptitle: 'freelancer',
    title: 'Initially designed to',
    text: 'But I must explain to you how all this mistaken idea of denouncing ',
    button: 'START HERE',
}

const card2 = {
    suptitle: 'studio',
    title: 'Initially designed to',
    text: 'But I must explain to you how all this mistaken idea of denouncing ',
    button: 'START HERE',
}

const card__block1 = document.createElement('div');
card__block1.className = 'card__block';
card__block1.innerHTML = `
    <h3 class = 'card__suptitle'>${card1.suptitle}</h3>
    <h1 class = 'card__title'>${card1.title}</h1>
    <p class = 'card__text'>${card1.text} </p>
    <a class = 'card__button' href = "#" >${card1.button}</a>
`;

const card__block2 = document.createElement('div');
card__block2.className = 'card__block';
card__block2.innerHTML = `
    <h3 class = 'card__suptitle card__suptitle--orange'>${card2.suptitle}</h3>   
    <h1 class = 'card__title card__title--white'>${card2.title}</h1>
    <p class = 'card__text card__text--white'>${card2.text} </p>
    <a class = 'card__button card__button--whiteText' href = "#" >${card2.button}</a>
`;

card.append(card__block1);
card.append(card__block2);