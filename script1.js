`use strict`
// Код без комментариев 
const createMetaData = () => {
    document.documentElement.setAttribute("lang", "ru");
}
createMetaData()

const title = document.createElement("title");
title.innerHTML = "JS_8";

const metaUTF8 = document.createElement("meta");
metaUTF8.setAttribute("charset", "UTF-8");

const viewport = document.createElement('meta');
viewport.setAttribute('name', 'viewport');
viewport.setAttribute('content', 'width=device-width, initial-scale=1.0')

document.head.prepend(metaUTF8, viewport, title);

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
caption.classList.add('caption');
caption.innerHTML = `
    <h1 class = "caption__title">Choose Your Option</h1>
    <p class = "caption__text">But I must explain to you how all this mistaken idea of denouncing</p>
`;

document.body.append(caption);

const card = document.createElement('div');
card.className = 'card';

document.body.append(card);

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

