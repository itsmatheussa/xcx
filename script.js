// Lógica do Modal de Pagamento
const modal = document.getElementById("paymentModal");
const selectedPlanText = document.querySelector("#selectedPlan span");

function openPayment(planName) {
    selectedPlanText.innerText = planName;
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

// Fechar modal ao clicar fora dele
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// Lógica do Formulário de Gifts
document.getElementById('giftForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const itemName = document.getElementById('itemName').value;
    const contactInfo = document.getElementById('contactInfo').value;
    const message = document.getElementById('message').value;

    // Simulação de envio de e-mail (em um ambiente real, isso chamaria uma API backend)
    console.log("Pedido de Gift Recebido:");
    console.log("Item:", itemName);
    console.log("Contato:", contactInfo);
    console.log("Mensagem:", message);

    alert("Seu pedido de '" + itemName + "' foi enviado com sucesso! Entraremos em contato via " + contactInfo + " em breve.");
    
    // Resetar formulário
    this.reset();
});

// Suavizar scroll para links da navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
