const ctx = document.getElementById('myChart');



function renderDonutChar(userData){
    const data = {
        labels: [
            'Luz',
            'Agua',
            'Gas',
            'Entretenimiento',
            'Salidas',
            'Mascota',
            'Auto',
            'Comida'
        ],
        datasets: [{
            data: userData,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(25, 205, 86)',
                'rgb(5, 25, 86)',
                'rgb(25, 205, 255)',
                'rgb(100, 0, 255)',
                'rgb(255, 0, 255)'
            ],
            color: 'rgb(25, 205, 86)',
            hoverOffset: 40
        }]
    }
    
    new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {
            maintainAspectRatio: false,
            cutout: 70,
            color: '#000'
        },
    });
}



