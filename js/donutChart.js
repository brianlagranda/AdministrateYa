function renderDonutChar(data){
    const div = d3.select('#gastosUsuario');
    const width = window.innerWidth;
    const height = window.innerHeight - 300;
    const radius = Math.min(width, height) / 2;
    const colorScale = d3.scaleOrdinal(['#7326AB', '#2A59A9', '#E5A1D4', '#00A0B0', '#3326AB', '#1259A9', '#A5A1D4', '#BFA0B0']);

    const svg = div.append('svg')
        .attr('width', width)
        .attr('height', height)
        .attr('class', "donutChar")
        .append('g')
            .attr('transform', `translate(${width / 2}, ${height / 2})`)

    const pie = d3.pie().value(d => d).sort(null)
    const arc = d3.arc().outerRadius(radius * 0.75).innerRadius(radius-10)

    const g = svg.selectAll('.arc')
        .data(pie(data))
        .enter().append('g')
        .attr('class', 'arc')

    const defs = svg.append("defs");

    const filter = defs.append("filter")
        .attr("id", "dropshadow")
    
    filter.append("feGaussianBlur")
        .attr("in", "SourceAlpha")
        .attr("stdDeviation", 4)
        .attr("result", "blur");
    filter.append("feOffset")
        .attr("in", "blur")
        .attr("dx", 2)
        .attr("dy", 2)
        .attr("result", "offsetBlur");
    
    const feMerge = filter.append("feMerge");
    
        feMerge.append("feMergeNode")
            .attr("in", "offsetBlur")
        feMerge.append("feMergeNode")
            .attr("in", "SourceGraphic");

    g.append('path')
        .attr('d', arc)
        .attr('class', 'arc')
        .attr("filter", "url(#dropshadow)")
        .style('fill', (d, i) => colorScale(i))
        .style('stroke', '#11141C')
        .style('stroke-width', 2)
        .style('shadow')
}

