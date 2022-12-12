//!hesapla butonuna tıklandığında öncelikle preventDefault() komutu şart,
//!onu yazmazsak girilen bilgilerle ekrana çıkarmak istediğim veriler çıkmaz,
//!çünkü index.html deki form, aldığı bilgileri backend e yollamaya programlı,
//!önce benim işimi gör diyoruz preventDefault diyerek.

const calculateButon = document.querySelector(".btn");
const maturity = document.querySelector("#maturity");
const amount = document.querySelector("#amount");
let rate = 0;
let installment;

calculateButon.addEventListener("click", (e) => {
  //*form işlemlerinde formun submit inin default kendi hareketlerini yapmaması,
  //*benim istediklerimi yapması için e.preventDefault() komutunu kullanırız

  e.preventDefault();

  if (document.querySelector(".form-select").value === "Housing loan") {
    rate = 1.29;
  } else if (
    document.querySelector(".form-select").value === "Personal finance credit"
  ) {
    rate = 1.99;
  } else if (document.querySelector(".form-select").value === "Auto loan") {
    rate = 1.79;
  }

  const faiz = rate / 100;

  console.log(faiz);

  //ekrana bastirilacak taksit amounti hesaplama formulu

  installment =
    (amount.value * (faiz * (1 + faiz) ** maturity.value)) /
    ((1 + faiz) ** maturity.value - 1);

  console.log(installment);
  showResult();
});
//ekrana basilacak tablo

const showResult = () => {
  const result = document.querySelector(".result");

  result.innerHTML = ` <h2 class="mt-3 text-warning">Credit information</h2>
  <table class="table table-bordered border-warning  mt-4">
   <tbody>
    <tr>
      <th>Credit amount</th>
      <td>${amount.value} ₺</td>
      <th>Credit Type</th>
      <td>${select.value}</td>
    </tr>
    <tr>
      <th>Maturity</th>
      <td>${maturity.value}</td>
      <th>Interest rate</th>
      <td>${rate}</td>
    </tr>
    <tr>
      <th>Total amount</th>
      <td>${(installment * maturity.value).toFixed(2)} ₺</td>
      <th>Installment amount</th>
      <td>${installment.toFixed(2)} ₺</td>
    </tr>
  </tbody>

</table>`;
};
