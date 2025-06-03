document.addEventListener('DOMContentLoaded', () => {
    const kilometersInput = document.getElementById('kilometers');
    const litersInput = document.getElementById('liters');
    const calculateBtn = document.getElementById('calculateBtn');
    const consumptionSpan = document.getElementById('consumption');

    calculateBtn.addEventListener('click', () => {
        const kilometers = parseFloat(kilometersInput.value);
        const liters = parseFloat(litersInput.value);

        if (isNaN(kilometers) || isNaN(liters) || kilometers <= 0 || liters < 0) {
            consumptionSpan.textContent = 'Ungültige Eingabe!';
            consumptionSpan.style.color = 'red';
            return;
        }

        // Berechnung des Verbrauchs: (Liter / Kilometer) * 100
        const consumption = (liters / kilometers) * 100;

        consumptionSpan.textContent = consumption.toFixed(2); // Auf 2 Nachkommastellen runden
        consumptionSpan.style.color = '#28a745'; // Grüne Farbe für das Ergebnis
    });
});
