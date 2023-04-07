function submit() {

    let loginValue = document.getElementById("login").value;
    localStorage.setItem("webLogin", loginValue);
    console.log(loginValue);

    let SenhaValue = document.getElementById("senha").value;
    localStorage.setItem("webSenha", SenhaValue);
    console.log(SenhaValue);
}

onload = function () {
    let loginValue = localStorage.getItem("webLogin");
    document.getElementById("txt-login").innerHTML = loginValue;

    let SenhaValue = localStorage.getItem("webSenha");
    document.getElementById("txt-senha").innerHTML = SenhaValue;

}