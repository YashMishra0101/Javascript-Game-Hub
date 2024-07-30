const input_field =document.querySelector('[data-input-field]')
const input_slider=document.querySelector('[data-input-slider]')
const generate_button=document.querySelector('[data-generate-button]')
const password_length=document.querySelector('[data-password-length]')
const password_value=document.getElementById('password_value')
const lower_case=document.querySelector('[data-lower-case]')
const upper_case=document.querySelector('[data-upper-case]')
const numbers=document.querySelector('[data-numbers]')
const special_symbols=document.querySelector('[data-special-symbols]')
const copy_icon=document.querySelector('[data-copy-icon]')

password_length.innerText=input_slider.value;

input_slider.addEventListener('input',()=>{
  password_length.innerText=input_slider.value;
  
})

generate_button.addEventListener('click',()=>{
    if(input_field.value!==""){
        input_field.value="";
        generate_button.innerText="Generate Password"
        copy_icon.innerHTML='<i class="pr-1 pl-4  fa-solid fa-copy fa-lg"></i>'
    }
    else if(upper_case.checked || lower_case.checked || special_symbols.checked || numbers.checked){
        password_generate();
        generate_button.innerText="Clear Password"
        copy();
        
    }
    else{
        input_field.value="";
    }

    
})

const copy=()=>{
   copy_icon.addEventListener('click',()=>{
        navigator.clipboard.writeText(input_field.value);
        copy_icon.innerText = "✅";
        copy_icon.title = "Password Copied";    
    })
}



const password_generate=()=>{

    const upper_case_char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower_case_char = "abcdefghijklmnopqrstuvwxyz";
    const special_symbols_get = "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    let all_numbers = "0123456789";
    
    let all_char="";

    all_char +=upper_case.checked ? upper_case_char : "";
    all_char +=lower_case.checked ? lower_case_char : "";
    all_char +=special_symbols.checked ? special_symbols_get : "";
    all_char +=numbers.checked ? all_numbers : "";
     
    let i;
    
    for(i= 1 ; input_slider.value>=i ; i++){
        input_field.value+=all_char.charAt(Math.floor(Math.random() * all_char.length));
       
    }

    

}


