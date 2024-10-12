---
title: ✅ Communicate your results effectively with the best data visualizations
summary: >-
  Easily manage your projects - create ideation mind maps, Gantt charts, todo
  lists, and more!
date: 2023-10-23T00:00:00.000Z
authors:
  - admin
tags:
  - Hugo Blox
  - Markdown
image:
  filename: featured.jpg
  caption: |
    Image credit: **[Unsplash](https://unsplash.com)**
---

Hugo Blox is designed to give technical content creators a seamless experience. You can focus on the content and Hugo Blox handles the rest.
Use popular tools such as Plotly, Mermaid, and data frames.
\## Charts
Hugo Blox supports the popular \[Plotly]\(https\://plot.ly/) format for interactive data visualizations. With Plotly, you can design almost any kind of visualization you can imagine!
Save your Plotly JSON in your page folder, for example \`line-chart.json\`, and then add the \`{{\</\* chart data="line-chart" \*/>}}\` shortcode where you would like the chart to appear.
Demo:
{{\< chart data="line-chart" >}}
You might also find the \[Plotly JSON Editor]\(http\://plotly-json-editor.getforge.io/) useful.
\## Diagrams
Hugo Blox supports the \_Mermaid\_ Markdown extension for diagrams.
An example \*\*flowchart\*\*:
    \`\`\`mermaid    graph TD    A\[Hard] -->|Text| B(Round)    B --> C{Decision}    C -->|One| D\[Result 1]    C -->|Two| E\[Result 2]    \`\`\`
renders as
\`\`\`mermaidgraph TDA\[Hard] -->|Text| B(Round)B --> C{Decision}C -->|One| D\[Result 1]C -->|Two| E\[Result 2]\`\`\`
An example \*\*sequence diagram\*\*:
    \`\`\`mermaid    sequenceDiagram    Alice->>John: Hello John, how are you?    loop Healthcheck        John->>John: Fight against hypochondria    end    Note right of John: Rational thoughts!    John-->>Alice: Great!    John->>Bob: How about you?    Bob-->>John: Jolly good!    \`\`\`
renders as
\`\`\`mermaidsequenceDiagramAlice->>John: Hello John, how are you?loop Healthcheck    John->>John: Fight against hypochondriaendNote right of John: Rational thoughts!John-->>Alice: Great!John->>Bob: How about you?Bob-->>John: Jolly good!\`\`\`
An example \*\*class diagram\*\*:
    \`\`\`mermaid    classDiagram    Class01 \<|-- AveryLongClass : Cool    Class03 \*-- Class04    Class05 o-- Class06    Class07 .. Class08    Class09 --> C2 : Where am i?    Class09 --\* C3    Class09 --|> Class07    Class07 : equals()    Class07 : Object\[] elementData    Class01 : size()    Class01 : int chimp    Class01 : int gorilla    Class08 \<--> C2: Cool label    \`\`\`
renders as
\`\`\`mermaidclassDiagramClass01 \<|-- AveryLongClass : CoolClass03 \*-- Class04Class05 o-- Class06Class07 .. Class08Class09 --> C2 : Where am i?Class09 --\* C3Class09 --|> Class07Class07 : equals()Class07 : Object\[] elementDataClass01 : size()Class01 : int chimpClass01 : int gorillaClass08 \<--> C2: Cool label\`\`\`
An example \*\*state diagram\*\*:
    \`\`\`mermaid    stateDiagram    \[\*] --> Still    Still --> \[\*]    Still --> Moving    Moving --> Still    Moving --> Crash    Crash --> \[\*]    \`\`\`
renders as
\`\`\`mermaidstateDiagram\[\*] --> StillStill --> \[\*]Still --> MovingMoving --> StillMoving --> CrashCrash --> \[\*]\`\`\`
\## Data Frames
Save your spreadsheet as a CSV file in your page's folder and then render it by adding the \_Table\_ shortcode to your page:
\`\`\`go{{\</\* table path="results.csv" header="true" caption="Table 1: My results" \*/>}}\`\`\`
renders as
{{\< table path="results.csv" header="true" caption="Table 1: My results" >}}
\## Did you find this page helpful? Consider sharing it 🙌
