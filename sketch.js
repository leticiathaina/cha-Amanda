const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('click', function() {
        // Mudar a cor do item quando selecionado
        if (!this.classList.contains('selected')) {
            this.classList.add('selected');

            // Obter o nome do item
            const itemName = this.getAttribute('data-item');

            // Número do WhatsApp (substitua pelo número correto)
            const whatsappNumber = '55xxxxxxxxxx'; 

            // Gerar mensagem para o WhatsApp
            const message = `Escolhi o item: ${itemName} para o chá de cozinha!`;

            // Criar o link do WhatsApp
            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

            // Abrir WhatsApp em uma nova aba
            window.open(whatsappLink, '_blank');
        }
    });
});
