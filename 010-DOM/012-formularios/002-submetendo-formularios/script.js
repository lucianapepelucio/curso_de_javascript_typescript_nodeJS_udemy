" use strict";

const form = document.forms.namedItem("registration");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    //console.log(form);
    
    const name = form.name.value;
    const password = form.password.value;

    // if (name && password) {
    //     console.log(name, password);
    //     form.submit();
    // }

    const formData = new FormData(form);
    
    // formData.forEach((res) => {
    //     console.log(res);
    // });

    formData.set("name", name); // para passar apenas alguns dados do formulário
    formData.set("password", password);

    console.log(formData.has("name")); // para verificar se existe
    console.log(formData.has("password"));

    console.log(formData.get("name")); // para pegar os dados
    console.log(formData.get("password"));

    // Delete
    formData.delete("name");
    console.log(formData.has("name"));

});