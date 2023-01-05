// GALLERY
// VARIABLERNE:
let imgCont = document.querySelectorAll(".gallery_content");
let imgCon = document.querySelector("#imgLarge");

// KIGGER EFTER "CONTAINERE" MED CLASS: ".gallery_content" (VARIABLEN: "imgCont").
imgCont.forEach((cont) => {
  //KIGGER PÅ ALLE BILLEDER I CONTAINERE MED CLASS: "gallery_content":
  let contImg = cont.querySelectorAll("img");

  contImg.forEach((e) => {
    // "LYTTER" EFTER "CLICK-EVENTET"
    e.addEventListener("click", () => {
      // SKIFTER "SOURCE" PÅ #imgLarge TIL DEN STI DER ER PÅ CLICKEVENTET:
      imgCon.src = e.src;
    });
  });
});


//-------------- FORM VALIDATION ---------------------//
function validate (formObj) {
    let errors = [];

    if (formObj.name.value === "") {
        errors.push("Fulde navn er påkrævet");
    }
    if (formObj.email.value === ""){
        errors.push("E-mail er påkrævet");
    }
    if (formObj.phone.value === ""){
        errors.push("Telefonnummer er påkrævet");
    }
 
    if(errors.length > 0){
        let msg ="Følgende fejl er fundet\n\n";
        for(let i = 0; i< errors.length; i++) {
            msg += errors[i] + "\n";
        }
        console.log(errors);
        alert(msg);
        return false;
    }
    return true;
}