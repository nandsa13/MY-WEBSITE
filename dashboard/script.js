const ctx = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(ctx, {
    type: 'line', // Jenis chart: line (garis)
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], // Label bulan
        datasets: [{
            label: 'Penjualan (Rp)', // Label dataset
            data: [120000, 150000, 180000, 200000, 250000, 300000, 270000, 220000, 230000, 210000, 260000, 290000], // Data penjualan per bulan
            borderColor: 'rgba(75, 192, 192, 1)', // Warna garis chart
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Warna area di bawah garis
            borderWidth: 2,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 50000
                }
            }
        }
    }
});