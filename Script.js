function calculatePrice() {
    const deckSize = parseFloat(document.getElementById("deckSize").value) || 0;
    const materialCost = parseFloat(document.getElementById("materialCost").value) || 0;
    const laborRate = parseFloat(document.getElementById("laborRate").value) || 0;
    const hoursPer100 = parseFloat(document.getElementById("hoursPer100").value) || 0;
    const overheadCost = parseFloat(document.getElementById("overheadCost").value) || 0;
    const profitMargin = parseFloat(document.getElementById("profitMargin").value) || 0;

    const totalMaterialCost = deckSize * materialCost;
    const totalLaborCost = (deckSize / 100) * hoursPer100 * laborRate;
    const subtotal = totalMaterialCost + totalLaborCost + overheadCost;
    const profit = subtotal * (profitMargin / 100);
    const totalPrice = subtotal + profit;

    document.getElementById("totalPrice").textContent = totalPrice.toFixed(2);
}
