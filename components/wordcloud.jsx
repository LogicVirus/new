import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import * as d3 from 'd3';
import cloud from 'd3-cloud';

function WordCloud() {
  const svgRef = useRef(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=4de4a8c952184ea7b39a2486f8e04390');
        const newsData = response.data.articles.map((article) => article.title);
        createWordCloud(newsData);
      } catch (error) {
        console.error('Failed to fetch news:', error);
      }
    };

    const createWordCloud = (newsData) => {
      // Concatenate all news titles
      const text = newsData.join(' ');

      // Compute word frequency
      const words = text.split(' ');
      const wordCount = words.reduce((acc, word) => {
        acc[word] = (acc[word] || 0) + 1;
        return acc;
      }, {});

      // Create data suitable for d3-cloud
      const wordEntries = Object.entries(wordCount).map(([word, count]) => ({
        text: word,
        size: count,
      }));

      const layout = cloud()
        .size([800, 600])
        .words(wordEntries)
        .padding(5)
        .rotate(() => ~~(Math.random() * 2) * 90)
        .font('Impact')
        .fontSize((d) => Math.sqrt(d.size) * 10)
        .on('end', draw);

      layout.start();
    };

    const draw = (words) => {
      const svg = d3.select(svgRef.current);
      svg
        .attr('width', layout.size()[0])
        .attr('height', layout.size()[1])
        .append('g')
        .attr('transform', `translate(${layout.size()[0] / 2},${layout.size()[1] / 2})`)
        .selectAll('text')
        .data(words)
        .enter().append('text')
        .style('font-size', (d) => `${d.size}px`)
        .style('font-family', 'Impact')
        .style('fill', (d, i) => d3.schemeCategory10[i % 10])
        .attr('text-anchor', 'middle')
        .attr('transform', (d) => `translate(${[d.x, d.y]})rotate(${d.rotate})`)
        .text((d) => d.text);
    };

    fetchNews();
  }, []);

  return (
    <svg ref={svgRef}></svg>
  );
}

export default WordCloud;
