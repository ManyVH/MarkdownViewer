window.onload = () => {
    const converter = new showdown.Converter();
    const pad = document.getElementById('pad');
    const markdownArea = document.getElementById('markdown');

    const convetirAreaAMarkdown = function(){
        let markdownText = pad.value;
        const html = converter.makeHtml(markdownText);
        markdownArea.innerHTML = html;
    };
    const cambioOcurre = () =>{
        if(previousMarkdownValue != pad.value){
            return true;
        }
        return false;
    };

    setInterval(() => {
        if(cambioOcurre()){
            convetirAreaAMarkdown();
        }
    }, 1000);

    pad.addEventListener('input', convetirAreaAMarkdown);

    
    convetirAreaAMarkdown()
};