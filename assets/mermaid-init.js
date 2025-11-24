mermaid.initialize({
  startOnLoad: true,
  securityLevel: 'loose',
  theme: 'default',
  fontFamily: 'Arial, sans-serif',
  flowchart: {
    useMaxWidth: true,
    htmlLabels: true,
    curve: 'basis'
  },
  sequence: {
    actorMargin: 20,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    mirrorActors: true,
    bottomMarginAdj: 1,
    useMaxWidth: true,
    rightAngles: false,
    showSequenceNumbers: false
  },
  er: {
    useMaxWidth: true
  },
  class: {
    useMaxWidth: true
  }
});