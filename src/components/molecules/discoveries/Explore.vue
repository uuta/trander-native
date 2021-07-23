<template>
  <div class="explore">
    <div class="container wide">
      <a :href="twitterUrl" target="_blank" class="link" rel="noopener">
        <IconText
          text="Share on Twitter"
          :image="twitter"
          className="c-wrap_icon_text"
        ></IconText>
      </a>
    </div>
    <div class="container general">
      <a :href="googleMapUrl" target="_blank" class="link" rel="noopener">
        <IconText
          text="Google Map"
          :image="googleMap"
          className="c-wrap_icon_text"
        ></IconText>
      </a>
    </div>
    <div class="container general">
      <a :href="streetViewUrl" target="_blank" class="link" rel="noopener">
        <IconText
          text="Street View"
          :image="streetView"
          className="c-wrap_icon_text"
        ></IconText>
      </a>
    </div>
  </div>
</template>

<script>
import IconText from "@/components/atoms/container/IconText.vue";

export default {
  data() {
    return {
      twitter: "/assets/icons/kws/twitter_2.svg",
      googleMap: "/assets/icons/kws/google-maps.svg",
      streetView: "/assets/icons/kws/street-view.svg",
    };
  },
  props: {
    twitterUrl: { type: String, required: true },
    googleMapUrl: { type: String, required: true },
    streetViewUrl: { type: String, required: true },
  },
  components: {
    IconText,
  },
};
</script>

<style lang="scss" scoped>
  .explore {
    width: 100%;
    display: flex;
    display: -webkit-box;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -ms-flex-pack: center;
    -webkit-box-pack: center;
    margin: auto;
    position: absolute;
    top: -140px;
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    margin: auto;
    flex-wrap: wrap;

    .container {
      box-sizing: border-box;
      padding: 0;
      width: 50%;
      text-align: center;

      .link {
        color: #22332e;
        text-decoration: none;
      }

      &:nth-child(2){
        padding-right: 5px;
      }

      &:last-child {
        padding-left: 5px;
      }

      ::v-deep .icon {
        width: 20px;
        vertical-align: middle;
      }

      ::v-deep .description {
        line-height: 30px;
        font-size: 1.2rem;
        font-weight: bold;
        vertical-align: middle;
        color: #22332e;
      }

      &.wide {
        width: 100%;
        margin-bottom: 20px;
      }
    }
  }
</style>