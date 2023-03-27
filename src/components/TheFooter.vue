<template>
  <footer class="py-5">
    <div class="container">
      <div class="row px-3 px-lg-5">
        <section class="about col-12 order-3 d-flex flex-wrap align-items-center mt-4 justify-content-between
                        order-lg-1 col-lg-4">
          <div class="col-4">
            <div class="square">Ростов <br> Мариуполь <br> Краснодар</div>
          </div>
          <span class="col-5 col-lg-12">Ссылка на автора сайта </span><span class="col-2">2023&#169;</span>
        </section>
        <section class="phones col-6 order-1 order-lg-2 col-lg-4">
          <h3 class="text-center text-lg-start">Контакты</h3>
          <div class="row">
            <ul class="col-6">
              <li>
                <a href="tel:89996951120" class="py-2 phone mts d-flex align-items-center">
                  <span class="ms-1">89996951120</span>
                </a>
              </li>
              <li>
                <a href="tel:89996951120" class="py-2 phone phoenix d-flex align-items-center">
                  <span class="ms-1">89996951120</span>
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section class="social col-6 order-2 order-lg-3 col-lg-4">
          <h3 class="text-center">Наши сети</h3>
          <section class="d-flex justify-content-around pt-2 align-items-lg-start">
            <div class="mb-lg-3">
              <a href="telegram" class="p-1 p-lg-3">
                <svg width="40px" height="40px">
                 <use xlink:href="#telegram"></use>
                </svg>
              </a>
            </div>
            <div><a href="insta" class="p-1 p-lg-3">
              <svg width="40px" height="40px">
                <use xlink:href="#instagram"></use>
              </svg>
            </a></div>
            <div><a href="face" class="p-1 p-lg-3">
              <svg width="40px" height="40px">
                <use xlink:href="#facebook"></use>
              </svg>
            </a></div>
            <div><a href="what" class="p-1 p-lg-3">
              <svg width="40px" height="40px">
                <use xlink:href="#whatsapp"></use>
              </svg>
            </a></div>
          </section>
        </section>
      </div>

    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter"
}
</script>

<style scoped lang="scss">
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;

  a {
    text-decoration: none;
    color: rgba(157, 157, 157, 1);

    &:hover {
      color: rgba(193, 193, 193, 1);
    }
  }
}

footer {
  background-color: black;
  color: white;
  font-family: 'inter400', sans-serif;
}

.about {
  color: rgba(157, 157, 157, 1);
  font-family: 'inter400', sans-serif;
}

a:hover {
  svg {
    .socImg {
      fill: rgba(252, 227, 0, 0.8);

    }
  }
}

</style>