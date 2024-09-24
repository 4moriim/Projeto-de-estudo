document.addEventListener("DOMContentLoaded", () => {
    let intervalo;
    let timer;

    document.getElementById('button-text').addEventListener("click", function(event) { 
        event.preventDefault(); 

        const timerInput = document.getElementById('input-text').value;

        const partes = timerInput.split(":");
        if (partes.length !== 3) {
            alert("Formato inválido! Utilize hh:mm:ss");
            return;
        }

        const horas = parseInt(partes[0]) || 0;
        const minutos = parseInt(partes[1]) || 0;
        const segundos = parseInt(partes[2]) || 0;
        
        let duracao = (horas * 3600) + (minutos * 60) + segundos;

        document.getElementById("formato-timer").style.display = "none";
        document.getElementById("controle").style.display = "block";

        const display = document.getElementById('timer');    
        comecarTimer(duracao, display);
    });

    const comecarTimer = (duracao, display) => {
        timer = duracao; 

        intervalo = setInterval(() => {
            let horas = Math.floor(timer / 3600);
            let minutos = Math.floor((timer % 3600) / 60);
            let segundos = timer % 60;

            horas = horas < 10 ? '0' + horas : horas;
            minutos = minutos < 10 ? '0' + minutos : minutos;
            segundos = segundos < 10 ? '0' + segundos : segundos;

            display.innerHTML = `${horas} : ${minutos} : ${segundos}`;

            if (timer <= 0) {
                clearInterval(intervalo);
                display.innerHTML = 'FIM DO TEMPO!!!';
            } else {
                timer -= 1;   
            }
        }, 1000);
    };

    document.getElementById("botao-pausar").addEventListener("click", () => {
        clearInterval(intervalo);
        document.getElementById("botao-continuar").style.display = "inline";
    });

    document.getElementById("botao-continuar").addEventListener("click", () => {
        const display = document.getElementById("timer");
        comecarTimer(timer, display);
        document.getElementById("botao-continuar").style.display = "none";
    })

    document.getElementById("botao-zerar").addEventListener("click", () => {
        clearInterval(intervalo);
        document.getElementById("timer").innerHTML = '00 : 00 : 00';
        document.getElementById("formato-timer").style.display = "block";
        document.getElementById("controle").style.display = "none";
        document.getElementById("botao-continuar").style.display = "none";
    });
});




