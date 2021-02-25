<template>
  <div class="hello">
    <button @click="openContact" id="contactMe" ref="contactMe"
    >
    Contact<span>i</span>me
    </button>
    <transition
    mode="out-in"
    :css="false"
    @before-enter="beforeEnter"
    @enter="enter"
    @before-leave="beforeLeave"
    @leave="leave"
    >
      <div class="contact-wrapper" v-if="show">
        <div class="contact-close"
        @click="closeContact"
        >
        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.00146484" y="28.7358" width="40.2302" height="2.87358" transform="rotate(-45 0.00146484 28.7358)" fill="#888888"/>
          <rect x="2.30029" width="40.2302" height="2.87358" transform="rotate(45 2.30029 0)" fill="#888888"/>
        </svg>
        <p>Close</p>
        </div>
          
        <div class="contact-title">
          <p class="contact-title__upper">Contact form</p>
          <p class="contact-title__lower"> — Matthias Weiss</p>
        </div>
        <div class="contact-main">
          <h4 class="contact-question">What can i do for you?</h4>
          <ContactForm />
          <div class="contact-info">
            <p class="contact-info__text">Tell me about your vision:
            <br>Which challenges are you facing?
            What are your goals and expectations? What would success look like and how much do you plan
            to spend to get there?</p>
            <socials />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { SplitText } from "gsap/all";
import ContactForm from "./ContactForm.vue";
import socials from "./socials.vue";

export default {
  name: 'Contact Form',
  data () {
    return {
      show: false,
    }
  },
  components: {
    ContactForm,
    socials
  },
  methods: {
    openContact() {
      this.show = !this.show
    },
    closeContact() {
      this.show = !this.show
    },
    // Transitions
    beforeEnter() {
      this.contactMe = new SplitText(this.$refs.contactMe, { type: 'chars'});
      this.gsap.to(this.contactMe.chars, {
        yPercent: -100,
        duration: .4,
        stagger: 0.014,
      })
    },
    enter(el,done) {
      this.titleUp = new SplitText('.contact-title__upper', { type: 'chars'});
      this.titleLow = new SplitText('.contact-title__lower', { type: 'chars'})
      this.gsap.fromTo(this.titleUp.chars, {
        yPercent: -100,
      }, {
        yPercent: 0,
        duration: .5,
        stagger: 0.014
      })
      this.gsap.fromTo(this.titleLow.chars, {
        yPercent: -100,
      }, {
        yPercent: 0,
        duration: .5,
        stagger: 0.014
      })
      this.gsap.fromTo(".contact-question", {
        opacity: 0,
      }, {
        opacity: 1,
        duration: 1,
      })
      this.gsap.fromTo(".vue-form", {
        opacity: 0,
      }, {
        opacity: 1,
        duration: 1.45
      })
      this.gsap.fromTo(".contact-info__text", {
        opacity: 0,
      }, {
        opacity: 1,
        duration: 1.25
      })
      this.gsap.fromTo(".ic24", {
        opacity: 0,
      }, {
        opacity: 1,
        duration: .6,
        stagger: 0.15,
        onComplete: done
      })
      this.gsap.to(el, {
        duration: 1,
      })
    },
    beforeLeave() {

    },
    leave(el, done) {
      this.gsap.to(this.contactMe.chars, {
        yPercent: 0,
        duration: .5,
        stagger: 0.014
      })
      this.gsap.fromTo(this.titleUp.chars, {
        yPercent: 0,
      }, {
        yPercent: 100,
        duration: .5,
        stagger: 0.014
      })
      this.gsap.fromTo(this.titleLow.chars, {
        yPercent: 0,
      }, {
        yPercent: 100,
        duration: .5,
        stagger: 0.014
      })
      this.gsap.fromTo(".contact-question", {
        opacity: 1,
      }, {
        opacity: 0,
        duration: .5,
      })
      this.gsap.fromTo(".contact-info__text", {
        opacity: 1,
      }, {
        opacity: 0,
        duration: .6
      })
      this.gsap.fromTo(".vue-form", {
        opacity: 1,
      }, {
        opacity: 0,
        duration: .6
      })
      this.gsap.fromTo(".ic24", {
        opacity: 1,
      }, {
        opacity: 0,
        duration: .4,
        stagger: 0.10,
        onComplete: done
      })
      this.gsap.to(el, {
        duration: 1,
      })
    },
  },
  mounted() {
    
  },
}
</script>
<style scoped lang="scss">
.hello {
  height: 100vh;
	height: calc(var(--vh, 1vh) * 100);
  position: relative;
  @media screen and (max-width: 1080px) {
    padding: 4vh 0;
  }
  @media screen and (max-width: 414px) {
  }
  & button {
    border: none;
    background: none;
    color: #fff;
    font-size: 2.28vw;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    & span {
      visibility: hidden;
    }
    @media screen and (max-width: 414px) {
      font-size: 7.5vw;
    }
    &:focus {
      outline: none;
    }
  }
}
.contact-wrapper {
  padding: 8vh;
  position: relative;
  @media screen and (max-width: 1080px) {
    padding: 2vh;
  }
}
.contact-close {
  position: absolute;
  top: 5%;
  right: 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & svg {
    margin-bottom: 10px;
  }
}
.contact-title {
  font-size: 7vw;
  display: grid;
	grid-template-columns: repeat(5, auto);
  grid-template-rows: repeat(5, auto);
  @media screen and (max-width: 414px) {
    padding-top: 7vh;
    padding-bottom: 2vh;
  }
  & p:nth-of-type(1) {
    grid-column: 1 / 3;
    grid-row: 1 / 1;
    overflow: hidden;
  }
  & p:nth-of-type(2) {
    grid-column: 2 / 5;
    grid-row: 2 / 2;
    overflow: hidden;
  }
}
.contact-main {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  column-gap: 90px;
  row-gap: 30px;
  @media screen and (max-width: 1080px) {
    column-gap: 60px;
  }
  @media screen and (max-width: 768px) {
    column-gap: 30px;
  }
  @media screen and (max-width: 414px) {
    grid-template-rows: repeat(3, auto);
  }
  & h4 {
      color: #A0A0A0;
      font-weight: 400;
      font-size: 30px;
      @media screen and (max-width: 1080px) {
        font-size: 2vw;
      }
      @media screen and (max-width: 414px) {
        font-size: 4vw;
        grid-column: 1 / 3;
        grid-row: 2 / 2
      }
  }
}
.vue-form {
  grid-column: 1 / 3;
  @media screen and (max-width: 414px) {
    grid-column: 1 / 5;
    grid-row: 3 / 3
  }
}
.contact-info {
  grid-column: 3 / 3;
  padding-right: 10vw;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.04em;
  color: #A0A0A0;
  @media screen and (max-width: 1080px) {
    padding-right: 1vw;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
  @media screen and (max-width: 414px) {
    grid-column: 1 / 4;
    grid-row: 1 / 1
  }
}


</style>
