const btn = document.querySelector(".btn");
const inp = document.querySelector(".inp");
const outRes = document.querySelector(".result");

const result = () => {
    try{
    value = eval(inp.value);
    if(value) outRes.value = value;
    else outRes.value = 'Ответ';
    }
    catch{
        alert("Ошибочка, проверьте правильность выражения");
    }
}

btn.addEventListener('click', result);
