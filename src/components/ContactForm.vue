<template>
  <form class="vue-form" @submit.prevent="submit">
          <!-- <div class="error-message">
            <p v-show="!email.valid">Oh, please enter a valid email address.</p>
          </div> -->
    <div class="checkboxes">
      <div class="single-checkbox">
        <input type="radio" id="Portrait" value="Portrait" v-model="services" >
        <label for="Portrait" class="custom-checkbox">Portrait</label>
      </div>
      <div class="single-checkbox">
        <input type="radio" id="Lifestyle" value="Lifestyle" v-model="services">  
        <label for="Lifestyle"  class="custom-checkbox">Lifestyle</label>
      </div>
      <div class="single-checkbox">
        <input type="radio" id="E-COMMERCE" value="E-COMMERCE" v-model="services">                
        <label for="E-COMMERCE"  class="custom-checkbox">E-COMMERCE</label>
      </div>
      <div class="single-checkbox">
        <input type="radio" id="Other" value="Other" v-model="services">
        <label for="Other"  class="custom-checkbox">Other</label>
      </div>
    </div>
    <div class="custom-fields">
      <div>
        <input type="text" name="name" id="name" placeholder="Your Name">
      </div>
      <div>
        <input type="email" name="email" id="email" required="" placeholder="Your Email">
      </div>
      <ResizeByClass/>
    </div>
    <div>
      <input type="submit" value="Send Request" class="send_btn">
    </div>
  </form>
</template>

<script>
import ResizeByClass from "./ResizeByClass.vue";

  export default {
    name: 'ContactForm',
    components: {
      ResizeByClass
    },
    data () {
      return {
        services: [],
        
      }
    },
    mounted () {

    },
  }
</script>

<style lang="scss">
/*
** Contact Form
*/
.vue-form {
  display: grid;
  grid-template-rows: repeat(2, auto);

}
/* 
** Checkboxes
*/
.checkboxes {
  height: 50px;
  display: grid;
  grid-template-columns: repeat(4, auto);
  column-gap: 50px;
  font-size: 16px;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 40px;
  @media screen and (max-width: 1080px) {
    column-gap: 15px;
    font-size: 1vw;
  }
  @media screen and (max-width: 414px) {
    grid-template-columns: repeat(2, auto);
    row-gap: 6vh;
    font-size: 3vw;
  }
  & input {
    display: none;
    &:checked ~ .custom-checkbox {
      border: 2px solid white;
    }
  }
}
.single-checkbox {
  position: relative;

}
.custom-checkbox {
  user-select: none;
  border: 1px solid grey;
  padding: 10px 60px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1080px) {
    padding: 10px 30px;
  }
  @media screen and (max-width: 768px) {
    padding: 10px;
  }
}
input::placeholder {
  color: #A0A0A0;
}
/* 
** Custom fields
*/
.custom-fields {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(2, auto);
  column-gap: 55px;
  row-gap: 30px;
  @media screen and (max-width: 414px) {
    padding-top: 5vh;
  }
  & input {
    background: none;
    border: none;
    border-bottom: 2px solid white;
    width: 100%;
    height: 100%;
    color: #fff;
    font-size: 23px;
    height: 60px;
    &:focus {
      outline: none;
    }
    &::placeholder {
      font-size: 23px;
      padding: 12px;
    }
  }
}
.send_btn {
  border: none;
  background: none;
  color: #fff;
  font-size: 1.5vw;
  font-weight: 300;
  margin-top: 3vh;
  margin-left: .8vw;
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 414px) {
    font-size: 4.5vw;
  }
}
/*
* === Socials icons ===
*/
.contact-socials {
  display: flex;
  justify-content: space-between;
}
.social-icon {
  fill: white;
  margin-top: 40px;
}
</style>