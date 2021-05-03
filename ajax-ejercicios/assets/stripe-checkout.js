//require("dotenv").config();
import STRIPE_KEYS from "./stripe-keys.js";

const d = document,
  $sales = d.getElementById("sales"),
  $template = d.getElementById("sales-template").content,
  $fragment = d.createDocumentFragment(),
  fetchOptions = {
    headers: {
      //Authorization: `Bearer ${process.env.SECRET}`,
      Authorization: `Bearer ${STRIPE_KEYS.SECRET}`,
    },
  };

let products, prices;

const moneyFormat = (num) => `PLN${num.slice(0, -2)}.${num.slice(-2)}`;

Promise.all([
  fetch("https://api.stripe.com/v1/products", fetchOptions),
  fetch("https://api.stripe.com/v1/prices", fetchOptions),
])
  .then((responses) => Promise.all(responses.map((res) => res.json())))
  .then((json) => {
    //console.log(json);
    products = json[0].data;
    prices = json[1].data;
    //console.log(products, prices);

    prices.forEach((el) => {
      let productData = products.filter((product) => product.id === el.product);
      //console.log(productData);

      $template.querySelector(".sale").setAttribute("data-price", el.id);
      $template.querySelector("img").src = productData[0].images[0];
      $template.querySelector("img").alt = productData[0].name;
      $template.querySelector("figcaption").innerHTML = `${productData[0].name}
      <br>
      ${moneyFormat(el.unit_amount_decimal)} ${el.currency}`;

      let $clone = d.importNode($template, true);
      $fragment.appendChild($clone);
    });

    $sales.appendChild($fragment);
  })
  .catch((err) => {
    console.log(err);
    let message =
      err.statusText || "Ocurrio un error al conectarse con la API de Stripe";
    $sales.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
  });

d.addEventListener("click", (e) => {
  //console.log(e.target);
  if (e.target.matches(".sale *")) {
    //alert("To Buy!!!")
    let price = e.target.parentElement.getAttribute("data-price");
    //console.log(price)
    Stripe(STRIPE_KEYS.PUBLIC)
      //Stripe(process.env.PUBLIC)
      .redirectToCheckout({
        lineItems: [{ price, quantity: 1 }],
        mode: "payment",
        successUrl:
          "http://127.0.0.1:5500/ajax-ejercicios/assets/stripe-success.html",
        cancelUrl:
          "http://127.0.0.1:5500/ajax-ejercicios/assets/stripe-cancel.html",
      })
      .then((res) => {
        console.log(res);
        if (res.error) {
          $sales.insertAdjacentHTML("afterend", res.error.message);
        }
      });
  }
});
