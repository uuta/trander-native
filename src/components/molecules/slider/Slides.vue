<template>
  <ion-slides pager="true" :options="slideOpts" @ionSlideReachEnd="handleEnd">
    <ion-slide>
      <Slide
        image="/assets/onBoading/slides/select.png"
        title="Select"
        link="https://storyset.com/web"
        linkText="Web illustrations by Storyset"
        desc="Choose the city or keyword mode"
        enable="0"
      />
    </ion-slide>
    <ion-slide>
      <Slide
        image="/assets/onBoading/slides/detect.png"
        title="Detect"
        link="https://storyset.com/money"
        linkText="Money illustrations by Storyset"
        desc="Find a new location for you"
        enable="0"
      />
    </ion-slide>
    <ion-slide>
      <Slide
        image="/assets/onBoading/slides/explore.png"
        title="Explore"
        link="https://storyset.com/city"
        linkText="City illustrations by Storyset"
        desc="See more and go there"
        enable="0"
      />
    </ion-slide>
    <ion-slide>
      <Slide
        image="/assets/onBoading/slides/play.png"
        title="Let's play!"
        link="https://storyset.com/people"
        linkText="People illustrations by Storyset"
        desc="Enjoy! Start the journey below"
        enable="1"
      />
    </ion-slide>
    {{ count }}
  </ion-slides>
</template>

<script lang="ts">
import { IonSlides, IonSlide } from "@ionic/vue";
import { defineComponent } from "vue";
import Slide from "@/components/atoms/slider/Slide.vue";

export default defineComponent({
  emits: ['handleEnd'],
  components: { IonSlides, IonSlide, Slide },
  setup(props, context) {
    // Optional parameters to pass to the swiper instance.
    // See http://idangero.us/swiper/api/ for valid options.
    // 参照：https://ionicframework.com/docs/api/slides
    const slideOpts = {
      initialSlide: 0,
      speed: 400
    };

    const handleEnd = () => {
      context.emit('handleEnd', true)
    };

    return { slideOpts, handleEnd };
  },
});
</script>
