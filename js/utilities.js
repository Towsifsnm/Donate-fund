

function showSectionById(id){
    document.getElementById('add-donate-form').classList.add('hidden');
    document.getElementById('add-blog-form').classList.add('hidden');
    document.getElementById('add-history-form').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');


}