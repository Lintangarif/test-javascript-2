console.log("script loaded"); 

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("regForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const first = document.getElementById("firstName").value;
    const last  = document.getElementById("lastName").value;
    console.log(`Nama Lengkap : ${first} ${last}`);
  });
});
