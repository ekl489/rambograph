function draw(){
    functionPlot({
        target: '#canvas',
        data: [
            { fn: formatExpression(document.getElementById("expression-1").value), color: '#428bca' },
            { fn: formatExpression(document.getElementById("expression-2").value), color: '#5cb85c' },
            { fn: formatExpression(document.getElementById("expression-3").value), color: '#d9534f' },
            { fn: formatExpression(document.getElementById("expression-4").value), color: '#f0ad4e' },
            { fn: formatExpression(document.getElementById("expression-5").value), color: '#5bc0de' }
        ],
        plugins: [
    functionPlot.plugins.zoomBox()
  ]
    });
}

function formatExpression(a){
    return a;
}
