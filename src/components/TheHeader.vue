<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-12 menu p-2">
          <nav class="row align-items-center justify-content-between">
            <div class="col-4 col-lg-6">
              <div class="row justify-content-center">
                <a href="" class="col-6 p-2 col-lg-2 text-center"><svg width="40px" height="40px"><use xlink:href="#telegram"></use></svg></a>
                <a href="" class="col-6 p-2 col-lg-2 text-center"><svg width="40px" height="40px"><use xlink:href="#instagram"></use></svg></a>
                <a href="" class="col-6 p-2 col-lg-2 text-center"><svg width="40px" height="40px"><use xlink:href="#whatsapp"></use></svg></a>
                <a href="" class="col-6 p-2 col-lg-2 text-center"><svg width="40px" height="40px"><use xlink:href="#facebook"></use></svg></a>
              </div>
            </div>
            <div class="col-6">
              <div class="row text-center">
                <a href="tel" class="p-2 link col-lg-6 d-flex align-items-center phone mts"><span>79996951120</span></a>
                <a href="tel" class="p-2 link col-lg-6 d-flex align-items-center phone phoenix">79996951120</a>
              </div>
            </div>
          </nav>
        </div>
        <div class="col-12 title my-5 text-center">
          <div class="row linkToBlock">
            <span class="specialText col-12">Междугороднее такси</span>
            <div class="col-12 col-lg-6 offset-lg-3 d-flex flex-column border-bottom border-2 p-2">
              <span class="gotoView mb-1 d-flex justify-content-center align-items-center" @click="scrollIntoView('0')"> Мариуполь <svg width="40px" height="40px" class="mx-2"><use xlink:href="#arrow"></use></svg> Ростов</span>
              <span class="gotoView" @click="scrollIntoView('1')" >Ростов<svg class="mx-2" width="40px" height="40px"><use xlink:href="#arrow"></use></svg> Мариуполь</span>
            </div>
            <div class="col-12 col-lg-6 offset-lg-3 d-flex flex-column p-2">
              <span class="gotoView mb-1" @click="scrollIntoView('2')"> Мариуполь<svg class="mx-2" width="40px" height="40px"><use xlink:href="#arrow"></use></svg>  Краснодар</span>
              <span class="gotoView" @click="scrollIntoView('3')">Краснодаp<svg class="mx-2" width="40px" height="40px"><use xlink:href="#arrow"></use></svg> Мариуполь</span>
            </div>
          </div>
        </div>
        <div class="col-12 form my-5
                  col-lg-6 offset-lg-3">
          <form class="form p-2" @submit.prevent="submit" id="form">
            <fieldset class="form__fieldset row
                           align-items-lg-baseline">
              <legend>Заказать обратный звонок</legend>
              <label for="phone" class="visually-hidden">Введите номер телефона</label>
              <input type="tel"
                     required
                     @keydown="checkInput"
                     @input="formatPhone"
                     v-model="phone"
                     name="phone"
                     id="phone"
                     class="form__input p-3 text-center col-12
                          p-lg-2 col-lg-8"
                     placeholder="+7 (999) 999-9999"
              >
              <div class="border border-dark mt-3 col-12 d-lg-none"></div>
              <button type="submit"
                      class="btn form__button col-6 ms-auto mt-3 p-2
                     col-lg-3 mx-lg-auto"
              >Заказать
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      phone: '',
    }
  },
  emits: ['scrolling'],
  methods: {
    async submit() {
      await fetch('https://a16187-8257.p.d-f.pw/call-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({phone: this.phone.replace(/\D/g, '')}),
    })
          .then(response => {
            if (!response.ok) {
              throw new Error('Ошибка при отправке сообщения в Telegram');
            }
            this.phone = ''
            alert('Заказ звонка отправлен!')
          })
          .catch(error => console.error(error));
    },
    scrollIntoView(block) {
      this.$emit('scrolling', block);
    },

    checkInput(event) {
      let keyCode = event.keyCode || event.which;
      let inputChar = String.fromCharCode(keyCode);
      let isDigit = /^\d+$/.test(inputChar);
      let isDelete = keyCode === 46 || keyCode === 8;
      if (!isDigit && !isDelete) {
        event.preventDefault();
      }
      if (isDelete) {
        this.phone = this.phone.replace(/\D/g, '');
      }
    },
    formatPhone() {
      if (this.phone.startsWith('8') || this.phone.startsWith('7')) {
        this.phone = '+7' + this.phone.slice(1);
      }
       this.phone = this.phone.replace(/^(\+7)(\d{3})(\d{3})(\d{4})$/, '$1 ($2) $3-$4'); // добавляем скобки и тире
    },
  },
  mounted() {
    window.addEventListener('scroll', function() {
      const header = document.querySelector('.menu');
      header.classList.toggle('sticky', window.scrollY > 100);
    });
  }
}
</script>

<style scoped lang="scss">
.gotoView {
  cursor: pointer;
  background-color: rgba(1,1,1,0.2);
  border-radius: 20px;
  transition: background-color 0.3s linear;
  &:hover, &:active, &:focus {
    background-color: rgba(1,1,1,0.3);
    transform: scale(1.01);
  }
}
header {
  position: relative;
  z-index: 1;
  &::before {
    content: '';
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(1,1,1,0.5);
    z-index: -1;
  }
  background-color: transparent;
  background-image: url("@/assets/images/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 10% center;
  @media screen and (min-width: 1000px) {
    background-size: cover;
  }
}
.linkToBlock {
  //background-color: rgba(1,1,1,0.4);
  border-radius: 20px;
  color: white;
}
.link {
  color: white;
  text-decoration: none;
  font-size: 1.3rem;
}
.specialText {
  text-transform: uppercase;
  color: $specialText;
  font-family: 'inter800', sans-serif;
}

.sticky {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(1,1,1,0.7);
  transition: all .3s ease;
  box-shadow: 0 2px 10px 2px rgba(1,1,1, 0.4)
}

.title {
  color: white;
  font-size: 1.5rem;
  @media  screen and (min-width: 1000px){
    font-size: 2.2rem;
  }
}


.form {
  position: relative;
  z-index: 3;
  background-color: white;
  background-image: url("@/assets/images/triangles_pattern.webp");
  border-radius: 20px;
  font-family: 'inter700', sans-serif;
  font-size: 1.4rem;
  box-shadow: 0 0 50px 0 rgba(255, 255, 255, 0.5);

  &__fieldset {

  }

  &__input {
    border-radius: 20px;
    border: 1px solid black;
  }

  &__button {
    position: relative;
    background-color: black;
    color: white;

    &:hover {
      background-color: white;
    }

    &:active {
      background-color: #FCE300 !important;
    }
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }

}
</style>