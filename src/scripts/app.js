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
        document.getElementById('totalConsumption').value = res;
    }

    function calculateProfit() {
        const p = +document.getElementById('finalResourcePrice').value || 0;
        const a = +document.getElementById('amountFirstMaterial').value || 0;
        const p1 = +document.getElementById('firstMaterialPrice').value || 0;
        const p2 = +document.getElementById('secondMaterialPrice').value || 0;
        const r = +document.getElementById('returnRateProfit').value || 0;
        const cost = (a * p1 + p2) * (1 - r / 100);
        const profit = p - cost;
        document.getElementById('profitPercentage').value = cost ? Math.round((profit / cost) * 10000) / 100 : 0;
    }

    function calculateCraft() {
        const p1 = +document.getElementById('itemPrice').value || 0;
        const p2 = +document.getElementById('firstResourcePrice').value || 0;
        const p3 = +document.getElementById('secondResourcePrice').value || 0;
        const p4 = +document.getElementById('artifactPrice').value || 0;
        const a1 = +document.getElementById('firstResourceAmount').value || 0;
        const a2 = +document.getElementById('secondResourceAmount').value || 0;
        const r = +document.getElementById('craftReturnRate').value || 0;
        const cost = ((p2 * a1 + p3 * a2) * (1 - r/100)) + p4;
        const profit = p1 - cost;
        document.getElementById('craftProfit').value = cost ? Math.round((profit / cost) * 10000) / 100 : 0;
    }

    function calculateArtifacts() {
        const total = +document.getElementById('resourceTotal').value || 0;
        const perItem = +document.getElementById('resourcePerItem').value || 0;
        const rate = +document.getElementById('artifactReturn').value || 0;
        const result = total / (1 - rate / 100);
        document.getElementById('artifactResult').value = perItem ? Math.floor(result / perItem) : 0;
    }

    window.showTab = showTab;
    window.calculateResource = calculateResource;
    window.calculateProfit = calculateProfit;
    window.calculateCraft = calculateCraft;
    window.calculateArtifacts = calculateArtifacts;

    showTab('resource');
});
