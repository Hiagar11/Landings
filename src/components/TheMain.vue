<template>
  <section class="features row text-center m-0 p-0">
    <div class="feature col-12 d-flex flex-column justify-content-center align-items-start py-5
                col-lg-6 "
    >
      <h4 class="m-auto pb-3">Мариуполь -> Ростов </h4>
      <h5 class="m-auto p-2">Стоймость поездки 2500руб.*</h5>
      <div class="col-12  col-lg-8 m-lg-auto">
        <div class="row m-auto">
          <div class="col-6 border border-dark p-3">08:00</div>
          <div class="col-6 border border-dark p-3">11:00</div>
          <div class="col-6 border border-dark p-3">14:00</div>
          <div class="col-6 border border-dark p-3">17:00</div>
        </div>
      </div>
      <div class="mt-5 footnote">*Одно багажное место включитительно</div>
    </div>
    <div class="feature col-12 d-flex flex-column justify-content-center align-items-start py-5
                col-lg-6 "
    >
      <h4 class="m-auto pb-3">Ростов -> Мариуполь </h4>
      <h5 class="m-auto p-2">Стоймость поездки 2500руб.*</h5>
      <div class="col-12  col-lg-8 m-lg-auto">
        <div class="row m-auto">
          <div class="col-6 border border-light p-3">08:00</div>
          <div class="col-6 border border-light p-3">11:00</div>
          <div class="col-6 border border-light p-3">14:00</div>
          <div class="col-6 border border-light p-3">17:00</div>
        </div>
      </div>
      <div class="mt-5 footnote">*Одно багажное место включитительно</div>
    </div>
    <div class="feature col-12 d-flex flex-column justify-content-center align-items-start py-5
                col-lg-6 "
    >
      <h4 class="m-auto pb-3">Мариуполь -> Краснодар </h4>
      <h5 class="m-auto p-2">Стоймость поездки 3500руб.*</h5>
      <div class="col-12 col-lg-8 m-lg-auto">
        <div class="row m-auto">
          <div class="col-6 border border-dark p-3">05:30</div>
          <div class="col-6 border border-dark p-3">09:30</div>
          <div class="col-12 border border-dark p-3">12:30</div>
        </div>
      </div>
      <div class="mt-5 footnote">*Одно багажное место включитительно</div>
    </div>
    <div class="feature col-12 d-flex flex-column justify-content-center align-items-start py-5
                col-lg-6 "
    >
      <h4 class="m-auto pb-3">Краснодар -> Мариуполь </h4>
      <h5 class="m-auto p-2">Стоймость поездки 3500руб.*</h5>
      <div class="col-12  col-lg-8 m-lg-auto">
        <div class="row m-auto">
          <div class="col-12 border border-dark p-3">08:00</div>
          <div class="col-12 border border-dark p-3">11:00</div>
        </div>
      </div>

      <div class="mt-5 footnote">*Одно багажное место включитительно</div>
    </div>
  </section>
  <section class="features-lite mb-5">
    <h2 class="features-lite__title text-center p-5">Наше КРЕДО</h2>
    <div class="container px-lg-5">
      <div class="row justify-content-between">
        <div
            class="features-lite__img d-flex justify-content-center align-items-end col-8 rounded-4 offset-2 mb-3 col-lg-3 ms-lg-0">
          <span class="features-lite__text mb-4">Хорошая репутация</span>
        </div>
        <div
            class="features-lite__img d-flex justify-content-center align-items-end col-8 rounded-4 offset-2 mb-3 col-lg-3 ms-lg-0">
          <span class="features-lite__text mb-4">Надежность и комфорт</span></div>
        <div
            class="features-lite__img d-flex justify-content-center align-items-end col-8 rounded-4 offset-2 mb-3 col-lg-3 ms-lg-0">
          <span class="features-lite__text mb-4">Скорость</span></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheMain",
  props: {
    number: {
      type: String,
    }
  },
  watch: {
    number(v) {
      const features = document.querySelectorAll('.feature');
      features[v].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
}
</script>

<style scoped lang="scss">
main {
  flex: 1 1 auto;
}

.features {
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.25);
}

.feature {
  position: relative;

  &::before, &::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    background-size: 30px 30px;
  }

  &::before {
    left: 7px;
    top: 7px;
  }

  &::after {
    right: 7px;
    bottom: 7px;
  }
  .footnote {
    font-size: 12px !important;
  }

  &:first-child {
    background-image: url("@/assets/images/bgFonFeatureFirst.png");
    background-color: azure;
  }

  &:first-child::before, &:first-child::after, {
    background-image: url("@/assets/images/svg/taxi.svg");
  }

  &:nth-child(2n) {
    color: white;
    background-color: black;
    background-image: url("@/assets/images/bgFonFeatureSecond.png");
  }

  &:nth-child(2n)::before, &:nth-child(2n)::after, {
    background-image: url("@/assets/images/svg/taxiYellow.svg");
  }

  &:nth-child(3n) {
    background-color: aliceblue;
    background-image: url("@/assets/images/bgFonFeatureThird.png");
  }

  &:nth-child(3n)::before, &:nth-child(3n)::after, {
    background-image: url("@/assets/images/svg/taxi.svg");
  }

  &:nth-child(4n) {
    color: black;
    background-color: beige;
    background-image: url("@/assets/images/bgFonFeatureFour.png");
  }

  &:nth-child(4n)::before, &:nth-child(4n)::after, {
    background-image: url("@/assets/images/svg/taxi.svg");
  }
}

.features-lite {
  &__title {
    font-family: 'inter700', sans-serif;
    font-size: 1.9rem;
  }

  &__img {
    min-height: 50vh;
    background-attachment: scroll;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0 0 20px 10px rgba(1,1,1,0.5);
    transition: 0.3s ease;
    &:hover {
      box-shadow: 0 0 0 0 rgba(1,1,1,0.5);
    }
  }

  &__text {
    font-family: 'inter700', sans-serif;
    font-size: 2rem;
    text-align: center;
    color: white;
    background-color: rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 10px;
  }

  &__img:first-child {
    background-image: url("@/assets/images/featuresLiteSecond.jpg");
  }

  &__img:nth-child(2n) {
    background-size: cover;
    background-image: url("@/assets/images/featuresLiteThird.jpg");
  }

  &__img:nth-child(3n) {
    background-image: url("@/assets/images/featuresLiteFirst.jpg");
  }
}
</style>