const time = document.getElementById('time')

const dataInicio = new Date('2024-10-30T00:00:00').getTime()

const instervalo = setInterval(()=>{
    const agora = new Date().getTime()
    const tempoRestante = dataInicio - agora

    const dias = Math.floor(tempoRestante/(1000 * 60 * 60 * 24))
    const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24))/(1000 * 60 * 60))
    const minutos = Math.floor((tempoRestante % (1000 * 60 * 60))/(1000 * 60))
    const segundos = Math.floor((tempoRestante % (1000 * 60))/ 1000)

    const formatarNumero = (numero) => numero.toString().padStart(2,'0')

    time.innerHTML = `${formatarNumero(dias)}d ${formatarNumero(horas)}h ${formatarNumero(minutos)}m ${formatarNumero(segundos)}s`

    if(tempoRestante < 0){
        clearInterval(instervalo)
        time.innerHTML = '- Ops! As aulas já começaram.'
    }
}, 1000)