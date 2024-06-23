export const elements= {
    text:document.querySelector('.input'),
    sBtn:document.querySelector('.submitBtn'),
    searchIcon:document.querySelector(".bi-search"),
    movieBox:document.querySelector(".movieBox"),
    backIcon:document.querySelector(".back"),
    infoBox:document.querySelector(".movieInfoBox"),
    resultInfo:document.querySelector(".resultNumber"),
    spinner:document.querySelector(".spinner-border")
    
}

export const getLoadingIcon=()=>{
    elements.spinner.classList.remove("d-none");
}

export const clearLoadingIcon=()=>{
    elements.spinner.classList.add("d-none");
    
}

