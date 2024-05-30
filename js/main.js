var bookmarkname = document.getElementById("BookmarkName");
var bookmarkurl = document.getElementById("WebsiteURL");
// var searchbookmark = document.getElementById("searchname")
var bookmarklist = [];
if(localStorage.getItem("bookmarklist") != null) {
    bookmarklist = JSON.parse(localStorage.getItem("bookmarklist"));
    displaybookmark(bookmarklist)
}

function addbookmark(){
    var bookmark = {
        name:bookmarkname.value,
        url:bookmarkurl.value,
    }
    bookmarklist.push(bookmark);
    localStorage.setItem("bookmarklist",JSON.stringify(bookmarklist))
    displaybookmark(bookmarklist)
    
    console.log(bookmarklist);
}

function displaybookmark(list){
    var cartona = ``;
    for (var i=0;i<list.length;i++) {
        cartona += `
        <tr>
            <td>${i+1}</td>
            <td>${list[i].name}</td>
            <td><a href="#${list[i].url}" target="_blank"><button onclick="visitbookmark(${i})" class="btn btn-success" >visit</button></a></td>
            <td><button onclick="deletebookmark(${i})" class="btn btn-danger">delete</button></td>
        </tr> 
    `
    }
    document.getElementById("bookmarkdata").innerHTML = cartona
}
function deletebookmark(index){
    bookmarklist.splice(index,1);
    localStorage.setItem("bookmarklist",JSON.stringify(bookmarklist))
    displaybookmark(bookmarklist)
}
function visitbookmark(index){
    window.open(bookmarkurl)
}

function search(searchValue){
    var searchItem = []
for (var i=0; i< bookmarklist.length; i++){
    var item = bookmarklist[i];
    if(item.name.includes(searchValue)){
       
        searchItem.push(item)
    }
}
    displaybookmark(searchItem)
}
search("ahm")
