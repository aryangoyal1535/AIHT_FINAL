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
document.getElementById('Built-in').addEventListener('click', function(){
    // window.location.href= 'http://localhost:8080/computer/(built-in)/';
    window.open('http://localhost:8080/computer/(built-in)/', 'Node Report Aryan')
});
document.getElementById('Built-in').addEventListener('mouseover', function(){
    document.getElementById('Built-in').textContent='Monitor Data';
});
document.getElementById('Built-in').addEventListener('mouseout', function(){
    document.getElementById('Built-in').textContent='Built-in Node Report';
});