function render(){
    let textContent = document.getElementById('editer').value;
    document.getElementById('live-view').srcdoc = textContent;
}