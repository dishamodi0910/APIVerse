

const modeToggle = document.getElementById('modeToggle');
const content = document.querySelector('.content');

modeToggle.addEventListener('change', () => {
    if (!modeToggle.checked) {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
        const table = document.getElementById('cryptotable');
        const rows = table.querySelectorAll('tr');
        table.style.backgroundColor = "#333";
        rows.forEach((row)=>{
            row.style.backgroundColor = '#333';
            row.style.color = "#fff" ;
            row.style.border = "15px Solid #333";
        })
    } else {
        document.body.style.backgroundColor = '#f9f9f9';
        document.body.style.color = '#333';
        
        const table = document.getElementById('cryptotable');
        const rows = table.querySelectorAll('tr');
        table.style.backgroundColor = "#f9f9f9";
        rows.forEach((row)=>{
            row.style.backgroundColor = '#f9f9f9';
            row.style.color = "#333"
            row.style.border = "15px Solid #f9f9f9";
        })
    }
});






