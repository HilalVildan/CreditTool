//!hesapla butonuna tıklandığında öncelikle preventDefault() komutu şart, 
//!onu yazmazsak girilen bilgilerle ekrana çıkarmak istediğim veriler çıkmaz, 
//!çünkü index.html deki form, aldığı bilgileri backend e yollamaya programlı, 
//!önce benim işimi gör diyoruz preventDefault diyerek.

const hesaplaButon = document.querySelector(".btn");
const vade = document.querySelector("#vade")
const tutar = document.querySelector("#tutar")
let oran = 0;
let taksit;


hesaplaButon.addEventListener("click", (e) => {
  //*form işlemlerinde formun submit inin default kendi hareketlerini yapmaması, 
  //*benim istediklerimi yapması için e.preventDefault() komutunu kullanırız

  e.preventDefault();

  if (document.querySelector(".form-select").value === "Housing loan") {
    oran = 1.29;
  } else if (
    document.querySelector(".form-select").value === "Personal finance credit"
  ) {
    oran = 1.99;
  } else if (document.querySelector(".form-select").value === "Auto loan") {
    oran = 1.79;
  }



const faiz = oran /100;

console.log(faiz);

//ekrana bastirilacak taksit tutari hesaplama formulu


taksit = (tutar.value * (faiz * (1+ faiz) ** vade.value)) / ((1 + faiz) ** vade.value -1)

console.log(taksit);
sonuclariGöster()

})
//ekrana basilacak tablo


const sonuclariGöster = () => {

    const sonuclar = document.querySelector(".sonuclar");

    sonuclar.innerHTML = 
    ` <h2 class="mt-3 text-warning">Credit information</h2>
  <table class="table table-bordered border-warning  mt-4">
   <tbody>
    <tr>
      <th>Credit amount</th>
      <td>${tutar.value} ₺</td>
      <th>Credit Type</th>
      <td>${select.value}</td>
    </tr>
    <tr>
      <th>Maturity</th>
      <td>${vade.value}</td>
      <th>Interest rate</th>
      <td>${oran}</td>
    </tr>
    <tr>
      <th>Total amount</th>
      <td>${(taksit * vade.value).toFixed(2)} ₺</td>
      <th>Installment amount</th>
      <td>${taksit.toFixed(2)} ₺</td>
    </tr>
  </tbody>

</table>`
}




