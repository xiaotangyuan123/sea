<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->
<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
      <a-menu theme="dark" v-model:selectedKeys="selectedKeys" mode="inline">
        <!-- 这是第一个菜单 -->
        <a-sub-menu key="sub1"><!-- <RouterLink to="/"></RouterLink> -->
          <template #title>
            <span>
              <slack-outlined />
              <span>地图显示</span>
            </span>
          </template>
          <a-menu-item key="3"><RouterLink to="/about">航线图</RouterLink></a-menu-item>
          <a-menu-item key="4"><RouterLink to="/WeixingView">卫星图</RouterLink></a-menu-item>
          <a-menu-item key="5"><RouterLink to="/hangxian">行政图</RouterLink></a-menu-item>
          
        </a-sub-menu>

        <!-- <a-menu-item key="2">
          <span>
          <desktop-outlined />
          <span>动态数据</span>
          </span>
          <a-menu-item key="6"><RouterLink to="/daping">大屏</RouterLink></a-menu-item>
          <a-menu-item key="7"><RouterLink to="/WeixingView">动态</RouterLink></a-menu-item>

        </a-menu-item> -->


        <a-sub-menu key="sub2">
          <template #title>
            <span>
              <desktop-outlined />
              <span>动态数据</span>
            </span>
          </template>
          <a-menu-item key="6">大屏</a-menu-item>
          <a-menu-item key="7">动态</a-menu-item>
        </a-sub-menu>



      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>地图</a-breadcrumb-item>
          <a-breadcrumb-item>数据</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: 'lightblue', minHeight: '300px' }">
        <!-- Bill is a cat. -->
          <RouterView />
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        航海航线图
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import {
  SlackOutlined,
  CompassOutlined,
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    SlackOutlined,
    CompassOutlined,
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
  },

  data() {
    return {
      collapsed: ref(false),
      selectedKeys: ref(['1']),
    };
  },
});
</script>
<style>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>