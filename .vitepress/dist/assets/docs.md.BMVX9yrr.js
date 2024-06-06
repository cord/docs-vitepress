import{_ as e}from"./chunks/overview.y0Nj9pUB.js";import{_ as a,c as t,o,a1 as r}from"./chunks/framework.DTR-fORK.js";const s="/assets/more.DNeTY2BO.png",g=JSON.parse('{"title":"LaraLamma","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"docs.md","filePath":"docs.md"}'),i={name:"docs.md"},l=r('<h1 id="laralamma" tabindex="-1">LaraLamma <a class="header-anchor" href="#laralamma" aria-label="Permalink to &quot;LaraLamma&quot;">​</a></h1><p>LaraLamma is based on Laravel and is a great foundation for any LLM centric application especially a RAG system.</p><p>The code is here <a href="https://github.com/LlmLaraHub/laralamma" target="_blank" rel="noreferrer">https://github.com/LlmLaraHub/laralamma</a></p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>A RAG system (Retrieval augmented generation system (RAG - an architectural approach that can improve the efficacy of large language model (LLM) applications</p></div><p>It really can be more than a search mechanism for your business.</p><p><img src="'+s+'" alt=""></p><ul><li>Want to surface the most common customer feedback requests just send them to your Collection.</li><li>Want to centralize emails and route them to the correct support team just have a Source check that email box.</li><li>Want to Chat with your data on another site, just point the included chat widget to the Output on that collection.</li><li>Have a shared marketing inbox, have all those messages summarized and sent to the right people</li></ul><div class="info custom-block"><p class="custom-block-title">INFO</p><p>LLMs are large language models</p></div><h2 id="three-key-concepts" tabindex="-1">Three Key Concepts <a class="header-anchor" href="#three-key-concepts" aria-label="Permalink to &quot;Three Key Concepts&quot;">​</a></h2><p><img src="'+e+'" alt=""></p><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p>This is how you get data into the system. There are many ways to do this.</p><ul><li>Upload files (PDF, PPT, Text etc)</li><li>Send in data as emails (the system can query an email box or you can forward to it)</li><li>Send in data via a webhooks (Create for GitHub data)</li></ul><h3 id="trasnformers" tabindex="-1">Trasnformers <a class="header-anchor" href="#trasnformers" aria-label="Permalink to &quot;Trasnformers&quot;">​</a></h3><p>The system will already vectorize (make sure data easier for the Language Models to search) and tag but you can add more Prompt based trasnformers to alter your data. A great example can be seen here <a href="https://youtu.be/KM7AyRHx0jQ?si=vnYG0PE8I8OCVEQa" target="_blank" rel="noreferrer">https://youtu.be/KM7AyRHx0jQ?si=vnYG0PE8I8OCVEQa</a> as the user can write a &quot;Prompt&quot; to take complex JSON data from GitHub and turn it into a simple summary.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Prompting enpowers the user to write plain language instructions for the computer to do.</p></div><h3 id="output" tabindex="-1">Output <a class="header-anchor" href="#output" aria-label="Permalink to &quot;Output&quot;">​</a></h3><p>After you have all your data in the system there are so many ways you can get to it and use it.</p><ul><li>Log into the system and Chat with your collection</li><li>Have it send you daily, weekly summary emails</li><li>Post to a website the updates</li><li>React to a customer support ticket by replying to a message based on all of it&#39;s data on the related domain</li></ul><h2 id="about-your-data" tabindex="-1">About Your Data <a class="header-anchor" href="#about-your-data" aria-label="Permalink to &quot;About Your Data&quot;">​</a></h2><p>Below is what the system does with the data you add to it to make it more LLM friendly.</p><h3 id="collections" tabindex="-1">Collections <a class="header-anchor" href="#collections" aria-label="Permalink to &quot;Collections&quot;">​</a></h3><p>Collections make up the “Chattable” grouping of Documents. You make a collection and add documents to it.</p><p>Since this system uses Laravel JetStream <a href="https://jetstream.laravel.com/introduction.html" target="_blank" rel="noreferrer">https://jetstream.laravel.com/introduction.html</a> we can share those collections with others on the team.</p><h3 id="documents" tabindex="-1">Documents <a class="header-anchor" href="#documents" aria-label="Permalink to &quot;Documents&quot;">​</a></h3><p>This is the foundation to the searchable content. It can come from PDFs, Websites, Power Points, Text and more.</p><p>When a document is added the system will do the following.</p><ul><li>Break it into Chunks (small fragments) that overlap with the sibling before and after it.</li><li>Do vector embedding on it so we can query it later</li></ul><h3 id="document-chunks" tabindex="-1">Document Chunks <a class="header-anchor" href="#document-chunks" aria-label="Permalink to &quot;Document Chunks&quot;">​</a></h3><p>These are related to documents. They have the chunk of text from the document. A page number and a sort number. This always has the vector field we do all the searching on.</p>',30),n=[l];function c(h,u,m,d,p,b){return o(),t("div",null,n)}const k=a(i,[["render",c]]);export{g as __pageData,k as default};
