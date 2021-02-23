import gsap from "gsap";
import { SplitText } from 'gsap/all';

gsap.registerPlugin(SplitText);


let openContact = () => {
  this.splitMessage = new SplitText(this.$ref.contactTitle, { type: 'chars'})
  return gsap.timeline()
  .set(this.splitMessage, { 
    yPercent: '-100%'
  })
  .to(this.splitMessage, { 
    yPercent: 0,
    duration: 2,
    stagger: .2
  })
  // .fromTo('.curtains', 0.6, { 
  //   scaleX: 0 
  // }, { 
  //   scaleX: 1, 
  //   ease: Power2.easeInOut 
  // })
  // .fromTo('.curtains-logo', 0.3, { 
  //   x: '-100%', 
  //   autoAlpha: 0 
  // }, { 
  //   x: '-50%', 
  //   autoAlpha: 1, 
  //   ease: Power2.easeInOut 
  // }, '-=0.45')
}


let closeContact = () => {
  this.splitMessage = new SplitText(this.$ref.contactTitle, { type: 'chars'})
  return gsap.timeline()
  .set(this.splitMessage, { 
    yPercent: 0
  })
  .to(this.splitMessage, { 
    yPercent: '-100%',
    duration: 2,
    stagger: .2
  })
  // .fromTo('.curtains', 0.6, { 
  //   scaleX: 0 
  // }, { 
  //   scaleX: 1, 
  //   ease: Power2.easeInOut 
  // })
  // .fromTo('.curtains-logo', 0.3, { 
  //   x: '-100%', 
  //   autoAlpha: 0 
  // }, { 
  //   x: '-50%', 
  //   autoAlpha: 1, 
  //   ease: Power2.easeInOut 
  // }, '-=0.45')
}

const createTransitionMixin = () => {
  return {
    transition: {
      css: false,
      mode: 'out-in',
      leave (el, done) {
        if (!this.$store.state.menuIsAnimating) {
          let leaveTimeline = gsap.timeline()

            leaveTimeline.add(closeContact())

          leaveTimeline.eventCallback('onComplete', done)
        } else {
          done()
        }
      },
      enter (el, done) {
        if (!this.$store.state.menuIsAnimating) {
          let enterTimeline = gsap.timeline()

            enterTimeline.add(openContact())

          enterTimeline.eventCallback('onComplete', done)
        } else {
          done()
        }
      }
    }
  }
}

export let CurtainTransitionBasic = createTransitionMixin(
  [ openContact ],
  [ closeContact ]
)
