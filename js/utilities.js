function showSectionById(id){
    document.getElementById('main-page').classList.add(hidden);
    document.getElementById('history-section').classList.add(hidden);
    document.getElementById(id).classList.remove(hidden);
}