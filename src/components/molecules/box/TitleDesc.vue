<template>
  <div class="c-box_title_desc" :class="className">
    <span class="title">{{ title }}</span
    ><span class="desc">{{ desc }}</span>
  </div>
</template>

<script>
export default {
  name: "TitleDesc",
  props: {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    className: { type: String, required: false },
  },
};
</script>
