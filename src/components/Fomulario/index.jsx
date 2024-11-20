import { useEffect, useState } from "react"

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log("o componente iniciou");

        return () => {
            console.log("o componente foi encerrado.")
        }
    }, []);

    useEffect(() => {
        console.log("o estado mudou");
    }, [nome]);

    useEffect(() => {
        console.log("nota mudou para: " + materiaA);
    }, [materiaA, materiaB]);

    const alteraNome = (evento) => {
        // setNome(evento.target.value);
        setNome(estadoAnterior => {
            return evento.target.value
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB;
        const media = soma / 2;

        // console.log(media);
        // console.log(soma);

        if (media >= 7) {
            return (
                <p>Olá {nome}, você foi aprovado com a média {media}</p>
            ) 
        } else {
            return (
                <p>Olá, {nome}, sua média foi {media} e você não foi aprovado.</p>
            )
        }
    }

    return (
        <form>
            <ul>
                {[1, 2, 3, 4, 5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota da matéria A" onChange={({target}) => setMateriaA(parseInt(target.value))} />
            <input type="number" placeholder="Nota da matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario