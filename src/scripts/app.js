document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabContents.forEach((c, i) => { if (i !== 0) c.style.display = 'none'; });

    function showTab(id) {
        tabContents.forEach(c => c.style.display = 'none');
        tabButtons.forEach(b => b.classList.remove('active'));
        const el = document.getElementById(id);
        if (el) el.style.display = 'block';
        const btn = document.querySelector(`.tab-button[onclick="showTab('${id}')"]`);
        if (btn) btn.classList.add('active');
    }

    function calculateResource() {
        const q = +document.getElementById('quantity').value || 0;
        const per = +document.getElementById('amountPerResource').value || 0;
        const r = +document.getElementById('returnRateResource').value || 0;
        const res = Math.round((q * per * (1 - r / 100)) * 100) / 100;
        const out = document.getElementById('totalConsumption');
        if (out) out.value = res;
    }

    function calculateProfit() {
        const p = +document.getElementById('finalResourcePrice').value || 0;
        const a = +document.getElementById('amountFirstMaterial').value || 0;
        const p1 = +document.getElementById('firstMaterialPrice').value || 0;
        const p2 = +document.getElementById('secondMaterialPrice').value || 0;
        const r = +document.getElementById('returnRateProfit').value || 0;
        const cost = (a * p1 + p2) * (1 - r / 100);
        const profitAbs = p - cost;
        const profitPerc = cost ? Math.round((profitAbs / cost) * 10000) / 100 : 0;
        const out = document.getElementById('profitPercentage');
        if (out) out.value = profitPerc;
    }

    window.showTab = showTab;
    window.calculateResource = calculateResource;
    window.calculateProfit = calculateProfit;

    showTab('resource');
});