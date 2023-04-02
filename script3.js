'use strict'
// forEach
{

    let titleDocument = document.createElement('title');
    titleDocument.innerHTML = 'New Document';
    document.head.prepend(titleDocument);

    let metaUTF8 = document.createElement('meta');
    metaUTF8.setAttribute('charset', 'UTF-8');
    document.head.prepend(metaUTF8);

    document.documentElement.setAttribute('lang', 'ru');

    const body = document.body;

    let style = document.createElement('style');
    document.head.append(style);
    style.innerHTML = `

        html {
            background-color: #E5E5E5; 
        }
        .container {
            display: flex;
            flex-direction: column;
            max-width: 1280px;
            height: 880px;
            margin: 0 auto;
            // border: 1px solid red;
            background-color: #fff;
            
        }
        .titleContainer {
            max-width: 800px;
            width: 100%;
            border: 0px solid blue;
            margin: 0 auto;
            margin-top: 122px;
            text-align: center;            
        }
        .titleBold {
            font-size: 36px;
            margin: 0;
            margin-bottom: 10px;
            text-align: center;
        }
        .titleNorm {
            font-size: 14px;
            margin: 0;
            margin-bottom: 55px;
        }
        .content {
            display: flex;
            max-width: 800px;
            height: 480px;
            border: 0px solid red;
            margin: 0 auto;
            width: 100%;
            border: 1px solid #E8E9ED;
            border-radius: 5px;
        }
        .card {
            max-width: 400px;
            height: 480px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0 95px ;
        }
        .backgroundCard2 {
            background-color: #8F75BE;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
        }
        .textCard {
            font-size: 12px;
            text-align: center;
            margin-top: 25px;
        }
        .button {
            width: 147px;
            height: 46px;
            border-radius: 23px;
            border: 3px solid #FFC80A;
            margin-top: 65px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .textTitleCard2 {
            color: #FFC80A;
        }
        .titleCard2Bold {
            color: #fff;
        }
        .textCard2 {
            color: #fff;
        }
        .buttonCard2 {
            color: #fff;
        }
       

    `
    let container = document.createElement('div')
    container.classList.add('container')
    body.prepend(container)

    let titleContainer = document.createElement('div')
    titleContainer.classList.add('titleContainer');
    container.append(titleContainer);

    let titleBold = document.createElement('p');
    titleBold.classList.add('titleBold');
    titleContainer.append(titleBold);
    titleBold.innerHTML = 'Choose Your Option'

    let titleNorm = document.createElement('p');
    titleNorm.classList.add('titleNorm');
    titleNorm.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing ';
    titleContainer.append(titleNorm);

    let content = document.createElement('div');
    content.classList.add('content');
    container.append(content);


    let cards = [
        {
            titleCard: 'FREELANCER',
            titleCardBold: 'Initially designed to',
            text: 'But I must explain to you how all this mistaken idea of denouncing',
            button: 'START HERE'
        }, {
            titleCard: 'STUDIO',
            titleCardBold: 'Initially designed to ',
            text: 'But I must explain to you how all this mistaken idea of denouncing ',
            button: 'START HERE'
        }
        
    ]

    cards.forEach(element => {
        let card = document.createElement('div');
        card.className = 'card';
        content.append(card);

        let titleCard = document.createElement('p');
        titleCard.className = 'titleCard'
        titleCard.innerHTML = element.titleCard;

        let titleCardBold = document.createElement('p');
        titleCardBold.innerHTML = element.titleCardBold;
        titleCardBold.className = 'titleBold';

        let text = document.createElement('p');
        text.innerHTML = element.text;
        text.className = 'textCard';


        let button = document.createElement('div');
        button.className = 'button'
        button.innerHTML = element.button;

        card.append(titleCard, titleCardBold, text, button)
    })

    let backgroundCard2 = document.getElementsByClassName('card'); //Метод getElementsByClassName позволяет получить элементы страницы по их классу, заданному в атрибуте class. С полученными элементами можно будет производить различные манипуляции: менять их текст, атрибуты, CSS стили и так далее.
    backgroundCard2[1].classList.add('backgroundCard2') // добавили класс 1ому элементу [1] т.е. 2ой карточке так как считаем с нуля // Метод add объекта classList позволяет добавлять CSS классы элементу. Синтаксис   элемент.classList.add(класс);

  
    let textColor = document.getElementsByClassName('titleCard');
    textColor[1].setAttribute('class', 'textTitleCard2'); // поменяли класс 

    let titleCard2Bold = document.getElementsByClassName('titleBold');
    titleCard2Bold[2].classList.add('titleCard2Bold') // добавили класс 2ому элементу [2] т.е. 2ой карточке так как считаем с нуля и классом поменяли цвет
    
    let textCard2 = document.getElementsByClassName('textCard');
    textCard2[1].classList.add('textCard2') // добавили класс 1ому элементу [1] т.е. 2ой карточке так как считаем с нуля и классом поменяли цвет
   
    let buttonCard2 = document.getElementsByClassName('button');
    buttonCard2[1].classList.add('buttonCard2') // добавили класс 1ому элементу [1] т.е. 2ой карточке так как считаем с нуля и классом поменяли цвет


}