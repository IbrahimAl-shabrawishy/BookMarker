var nameInput = document.getElementById("nameInput");
var urlInput = document.getElementById("urlInput");
var submit=document.getElementById("submit");
var tbody=document.getElementById("tbody");

// Create bookmarker
var addBookMarker;
if (localStorage.products != null) {
    addBookMarker = JSON.parse(localStorage.products);
} else {
    addBookMarker = [];
}

function createBookMarker() {
    var newBookMarker = {
        nameInput: nameInput.value,

        urlInput: urlInput.value,
    };

    if(nameInput.value =="" || urlInput.value=="")
    {
        alert("please fill in all fileds");
    }
    else
    {
        addBookMarker.push(newBookMarker);
    }

        
  
   




    localStorage.setItem("products", JSON.stringify(addBookMarker));
    clearData();
    displayBookMarker();
    
}

// Clear input fields
function clearData() {
    nameInput.value = "";
    urlInput.value = "";
}

// Display bookmarks
function displayBookMarker() {
    var content = '';
    for (var i = 0; i < addBookMarker.length; i++) {
        content += `
            <tr>
                <td class="fw-bold">${i+1}</td>
                <td class="fw-bold text-capitalize">${addBookMarker[i].nameInput}</td>
               <td class="py-2">
    <a onclick="visitBtn('${addBookMarker[i].urlInput}')" href="javascript:void(0);"  class="btn btn-warning text-white text-capitalize" 
       role="button" target="_blank">
        <i class="fa-solid fa-eye text-white"></i> visit
    </a>
</td>
                <td>
                    <button onclick="deleteBtn(i)" class="btn btn-danger text-white text-capitalize">
                        <i class="fa-solid fa-trash-can text-white"></i> delete
                    </button>
                </td>
            </tr>
        `;
    }
   tbody.innerHTML = content;
}
displayBookMarker();



//visit button
function visitBtn(url) {
    // Regular Expression to validate a URL structure and ensure it ends with a domain (e.g., .com, .net, etc.)
    var urlPattern = /^(https?:\/\/)?([^\s]+\.)+[^\s]{2,}$/;

    // Check if the URL matches the pattern
    if (!urlPattern.test(url)) {
        alert("Please enter a valid URL (e.g., http://example.com).");
        return;
    }

    // If the URL does not start with 'http://' or 'https://', add 'http://'
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'http://' + url;
    }



    // Open the validated URL in a new tab
    window.open(url, '_blank');
}


// Delete element
var i;
function deleteBtn(i) {
    // Remove the bookmark at the given index
    addBookMarker.splice(i, 1);
    
    // Update the localStorage after deletion
    localStorage.setItem("products", JSON.stringify(addBookMarker));
    
    // Refresh the display to reflect the changes
    displayBookMarker();
}





