<template>
  <div class="breadcrumb">
    <ul>
      <li
        v-for="(breadcrumb, index) in breadcrumbList"
        :key="index"
        @click="routeTo(index)"
        :class="{'linked': !!breadcrumb.link}"
      >
        {{ breadcrumb.name }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Breadcrumb',
    data() {
      return {
        breadcrumbList: []
      }
    },
    mounted() {
      console.log(this);
      this.updateList();
    },
    watch: {
      '$route'() {
        this.updateList();
      }
    },
    methods: {
      routeTo(pRouteTo) {
        if (this.breadcrumbList[pRouteTo].link) this.$router.push(this.breadcrumbList[pRouteTo].link);
      },
      updateList() {
        this.breadcrumbList = this.$route.meta.breadcrumb;
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '@/assets/scss/vars';

  .breadcrumb {
    ul {
      display: flex;
      justify-content: flex-start;
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    ul>li {
      display: flex;
      float: left;
      height: 10px;
      width: auto;
      color: $green;
      font-weight: bold;
      font-size: .8em;
      cursor: default;
      align-items: center;
    }

    ul>li:not(:last-child)::after {
      content: '/';
      float: right;
      font-size: .8em;
      margin: 0 .5em;
      color: $green;
      cursor: default;
    }

    .linked {
      cursor: pointer;
      font-size: 1em;
      font-weight: normal;
    }
  }
</style>
