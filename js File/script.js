const rgbColorCodeGenaretor = ()=>{
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return `rgb(${r}, ${g}, ${b})`
};

const updateColorBox = ()=>{
    const color = rgbColorCodeGenaretor();
    const colorBox = document.getElementById("colorBox");
    colorBox.style.backgroundColor = color;
    const colorCodeText = document.getElementById("colorCodeText");
    colorCodeText.innerText = color;
};

const copyColorCode = ()=>{
    const colorCodeText = document.getElementById("colorCodeText");
    const createElement = document.createElement("input");
    document.body.appendChild(createElement);
    createElement.value = colorCodeText.innerText;
    createElement.select();
    document.execCommand("copy");
    alert("Color Code Copyed To Clipbord Successfully");
    document.body.removeChild(createElement);
};

const copyColorBtn = document.getElementById("copyColorBtn");
copyColorBtn.addEventListener("click", ()=>{
    copyColorCode()
})

const updateColorByClick = ()=>{
    updateColorBox()
}

