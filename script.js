const form = document.querySelector('.main');
const btn = document.querySelector('input.enviar');

const input = document.querySelector('input#email');
console.log(input);
btn.addEventListener("click", () => {
        if (input.value == '') {
            
            alert("Preencha o formulario antes!")
        } else {
            form.classList.toggle("mensagem")
            form.textContent = "Parabéns!! Agora você faz parte da academia de duelos."
            form.textContent += "Te esperamos no inicio do proxímo semestre."
        }
    });

