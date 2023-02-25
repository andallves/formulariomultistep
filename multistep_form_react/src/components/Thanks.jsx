import { 
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill
} from 'react-icons/bs';

import './Thanks.css'

const Thanks = ({ data }) => {

    const emojiData = {
        unsatisfied: <BsFillEmojiFrownFill />,
        neutral: <BsFillEmojiNeutralFill />,
        satisfied: <BsFillEmojiSmileFill />,
        very_satisfied: <BsFillEmojiHeartEyesFill />
    }
    return(
        <div className='thanks-container'>
            <h2>Estamos quase lá...</h2>
            <p>Sua é opinião nos ajudar a melhorar cada vez mais, como forma de agradecimento estou te enviando um cupom de 10% de desconto</p>
            <p>Para finalizar click no botão enviar.</p>
            <h3>Aqui está um resumo da sua avaliação {data.name}</h3>
            <p className='review-data'>
                <span>Satisfação: </span> {emojiData[data.review]}
            </p>
            <p className='review-data'>
                <span>Comentário: </span> {data.comment}
            </p>
        </div>
    )
}

export default Thanks