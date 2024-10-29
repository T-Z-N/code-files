const barHeight=20;

const svg = d3.select(".responsive-svg-container")
    .append("svg")
    .attr("viewBox", "0 0 1200 1600")
    .style("border", "1px solid black");


d3.csv("../data/data.csv", d => {
    return {
        technology: d.technology,
        count: +d.count
    };
}).then(data => {
    data.sort((a, b) => b.count - a.count);
    createViz(data);
    
});

const createViz = (data) =>{
    svg
    .selectAll("rect")
    .data(data)
    .join("rect")
        .attr("class",d=>{
            console.log(d);
            return `bar bar-${d.technology}`;
        })
        .attr("width",d=>d.count)
        .attr("height",barHeight)
        .attr("x",0)
        .attr("y",(d,i)=>(barHeight+5)*i)
        .attr("fill", d => d.technology === "D3.js" ? "yellowgreen" : "skyblue");
};