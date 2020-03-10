<template>
  <div>
    <button :class="[colorname,sizename,disabled]" class="btn">
      <i :class="[iconname]"></i>
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    color: String,
    size: String,
    disabled: String,
    icon: String,
  },
  mounted() {
    if (/^(primary|default|info|warning|danger)$/.test(this.color)) {
      this.colorname = "btn-" + this.color;
    } else {
      this.colorname = "btn-default";
    }

    if (/^(lg|default|sm|xs)$/.test(this.size)) {
      this.sizename = "btn-" + this.size;
    } else {
      this.sizename = "";
    }

    if (this.disabled == "disabled") {
      this.disabledname = this.disabled;
    } else {
      this.disabledname = "";
    }

    this.iconname = this.icon;
  },
  watch: {
    color() {
      if (/^(primary|default|info|warning|danger)$/.test(this.color)) {
        this.colorname = "btn-" + this.color;
      } else {
        this.colorname = "btn-default";
      }
    },
    size() {
      if (/^(lg|default|sm|xs)$/.test(this.size)) {
        this.sizename = "btn-" + this.size;
      } else {
        this.sizename = "";
      }
    },
    disabled() {
      if (this.disabled == "disabled") {
        this.disabledname = this.disabled;
      } else {
        this.disabledname = "";
      }
    },
    icon() {
        this.iconname = this.icon;
    }
  },
  data() {
    return {
      colorname: "",
      sizename: "",
      disabledname: "",
      iconname:""
    };
  },
};
</script>

<style scoped>
</style>