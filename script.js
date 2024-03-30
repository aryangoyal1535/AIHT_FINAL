document.getElementById('redirectButton').addEventListener('click', function () {
    window.open('https://smartphone.edgeimpulse.com/classifier.html?apiKey=ei_c35fb975a39a45caf5f78dd62d55b82bfce3a9fd9d1094709cca8d3c1d0f7eed','TinyML Aryan');
});
document.getElementById('redirectButton').addEventListener('mouseover', function () {

    document.getElementById('redirectButton').textContent = 'CLICK TO PROCEED!';
});
document.getElementById('redirectButton').addEventListener('mouseout', function () {

    document.getElementById('redirectButton').textContent = 'TinyML DevOps Project';
});


document.getElementById('Jenkins').addEventListener('click', function(){
    // window.location.href= 'http://localhost:8080/computer/';
    window.open('http://localhost:8080/computer/','Jenkins Aryan')
});
document.getElementById('Jenkins').addEventListener('mouseover', function(){
    document.getElementById('Jenkins').textContent='Generate Report';
});
document.getElementById('Jenkins').addEventListener('mouseout', function(){
    document.getElementById('Jenkins').textContent='Jenkins DevOps Report';
});


document.getElementById('RStudio').addEventListener('click', function(){
    window.open('https://github.com/aryangoyal1535/Road-Accidents-PowerBi-Ecommerce-Spark/blob/main/Movie-dataset-R_Project.R', 'R Studio Aryan')
});
document.getElementById('RStudio').addEventListener('mouseover', function(){
    document.getElementById('RStudio').textContent='Movie Dataset Analysis';
});
document.getElementById('RStudio').addEventListener('mouseout', function(){
    document.getElementById('RStudio').textContent='R Studio Project';
});


document.getElementById('PowerBI').addEventListener('click', function(){
    window.open('https://github.com/aryangoyal1535/Road-Accidents-PowerBi/blob/main/Road%20Accidents%20Dashboard.pdf', 'PowerBi Aryan')
});
document.getElementById('PowerBI').addEventListener('mouseover', function(){
    document.getElementById('PowerBI').textContent='Road Accident Analysis';
});
document.getElementById('PowerBI').addEventListener('mouseout', function(){
    document.getElementById('PowerBI').textContent='PowerBI Report';
});


document.getElementById('Spark').addEventListener('click', function(){
    window.open('https://github.com/aryangoyal1535/Road-Accidents-PowerBi-Ecommerce-Spark/blob/main/E-Commerce_Sales_Analysis.ipynb', 'Spark Aryan')
});
document.getElementById('Spark').addEventListener('mouseover', function(){
    document.getElementById('Spark').textContent='Ecommerce Dataset Analysis';
});
document.getElementById('Spark').addEventListener('mouseout', function(){
    document.getElementById('Spark').textContent='Spark Report';
});