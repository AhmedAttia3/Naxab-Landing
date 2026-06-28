<template>
  <header
    class="header fixed top-0 left-0 right-0 w-full z-10 shadow-sm"
  >
    <!-- desktop header -->
    <div class="md:items-center hidden h-[var(--min-height-header)] md:flex p-2 bg-white w-full">
      <div class="site-container h-full w-full">
        <div class="header__inner h-full gap-2 flex justify-between">
          <div class="header__logo flex flex-row items-center gap-5">
            <NuxtLink :href="routesNames.homepage.path">
              <img
                :src="LogoImg"
                class="object-contain w-[70px] md:w-[74px] lg:w-[76px] 3xl:w-[82px] h-auto"
                :draggable="false"
                width="76"
                height="54"
                alt="نكسب"
              />
            </NuxtLink>
          </div>
          
            <!-- nav xx -->
          <div class="flex flex-row gap-2">
            <Nav :activeLink="global.activeLinkName" :routesNames="routesNames"/>
          </div>
          <!-- switch to English -->
          <div v-if="global.isRTL" @click="() => changeLang('en')" class="flex cursor-pointer  flex-row items-center ">
              <span class="flex flex-row rounded-md hover:bg-gray-200 p-2">
                <!-- <img :src="usFlagImg" class="w-[1.9rem] h-[1.9rem] object-contain ml-1"/> -->
                <span class="text-[14px] mb-0 flex flex-row items-center"> English</span>
              </span>

          </div>
          <!-- switch to Arabic -->
          <div v-else class="flex flex-row items-center cursor-pointer" @click="() => changeLang('ar')">
                <span class="flex flex-row rounded-md hover:bg-gray-200 p-2">
                  <!-- <img :src="saudiFlagImg" class="w-[1.9rem] h-[1.9rem] object-contain mr-2"/> -->
                  <span class="text-[15px] mb-2 flex flex-row items-center">عربى</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- mobile nav menu -->
    <div class="w-full flex md:hidden">
      <!-- header -->
      <div class="site-container h-[var(--min-height-header)] flex items-center justify-between w-full bg-white">
            <!-- burger menu button -->
            <button @click="() => changeMenuState()" aria-label="toggle menu" class="flex items-center">
              <svg :class="`mobile-menu-button flex ${isMobileMenuOpen ? 'active' : ''}`" width="36" height="36" viewBox="0 0 40 26" xmlns="http://www.w3.org/2000/svg">
                    <rect class="mobile-menu-button-top" width="20" height="4" rx="3" ry="3" />
                    <rect class="mobile-menu-button-middle" width="16" height="4" y="13" rx="3" ry="3" />
                    <rect class="mobile-menu-button-bottom" width="36" height="4" y="25" rx="3" ry="3" />
              </svg>
            </button>

            <!-- site's logo -->
            <NuxtLink :href="routesNames.homepage.path" class="flex justify-center">
                  <img
                    :src="LogoImg"
                    class="object-contain w-[64px] sm:w-[70px] h-auto"
                    :draggable="false"
                    width="68"
                    height="50"
                    alt="نكسب"
                  />
            </NuxtLink>

            <!-- language switcher -->
            <div class="flex items-center">
              <div v-if="global.isRTL" @click="() => changeLang('en')" class="cursor-pointer">
                  <span class="rounded-md hover:bg-gray-200 p-1 font-bold text-[#92278f] text-[14px]">EN</span>
              </div>
              <div v-else @click="() => changeLang('ar')" class="cursor-pointer">
                  <span class="rounded-md hover:bg-gray-200 p-1 font-bold text-[#92278f] text-[15px]">AR</span>
              </div>
            </div>
      </div>
      <!-- menu -->
      <div v-if="isMobileMenuOpen" @click="() => changeMenuState(false)" class="overlay bg-[#000]/40 fade-effect top-[var(--min-height-header)] left-0 fixed md:hidden mobile-view w-[100vw] z-[5]"/>
      <transition name="mobile-slider">
        <div v-if="isMobileMenuOpen" :class="`fixed w-[90%] mobile-menu  ${global?.isRTL ? 'right-0' : 'left-0'} top-[var(--min-height-header)] pb-4 pt-5 bg-[#fff] backdrop-blur-md z-[10]`">
          <div class="flex flex-col h-full">
              <Nav :activeLink="global.activeLinkName" class=" flex-1" :isMobile="true" :closeMobileBar="() => changeMenuState(false)" :routesNames="routesNames"/> 
              
              <!-- Creative Download CTA for Mobile -->
              <div class="mt-auto pt-5 border-t border-white/10 text-center mb-4">
                <div class="text-black/90 text-[13.5px] mb-3 font-medium">{{ $t('download_app') }} <span class="download-brand text-[1.2rem]">نكسب</span></div>
                <div class="flex gap-3 justify-center">
                  <a :href="texts.customers.app_links.google_store" target="_blank" class="text-[13px] font-medium transition-all duration-300 hover:brightness-110 flex items-center justify-center gap-1.5 download-link">

                    {{ $t('for_user') }}
                  </a>
                  <p class="text-white/90 text-[13.5px]"> و </p>
                  <a :href="texts.sellers.app_links.google_store" target="_blank" class="text-[13px] font-medium transition-all duration-300 hover:brightness-110 flex items-center justify-center gap-1.5 download-link">
                    {{ $t('for_merchant') }}
                  </a>
                </div>
              </div>

     
          </div>


        </div>
      </transition>
    </div>
  </header>
</template>

<script >
import { routesNames, useLocalStorage, lowerString } from "@/helpers";
import LogoImg from "@/assets/imgs/logo.png";
// import saudiFlagImg from "@/assets/imgs/saudi_flag.png";
// import usFlagImg from "@/assets/imgs/us_flag.png";
import { useGlobalStore } from "~/store/Modules/global";
import Nav from "./Nav.vue";
import texts from "@/fixtures/texts.js";

export default {
    data: () => {
        return {
            routesNames,
            LogoImg,
            isMobileMenuOpen: false,
            texts
        };
    },
    setup() {
        const global = useGlobalStore();
        return {
            global,
        };
    },
    components: { Nav },
    watch: {
      isMobileMenuOpen(val){
        if(typeof val !== 'boolean'){
          return;
        }
        if(val){
          document.body.classList.add("navbar__open");
        }else{
          document.body.classList.remove("navbar__open");
        }
      }
    },
    methods: {
      changeMenuState(newState){
        this.isMobileMenuOpen = typeof newState === "boolean" ? newState : !this.isMobileMenuOpen;
      },
      changeLang(newVal) {
        useLocalStorage({type: 'set', key: 'lang', value: lowerString(newVal)});
      }
    }
};
</script>

<style scoped>
.mobile-view{
  height: 100vh;
  height: 100svh;
}
.mobile-menu{
  height: calc(100% - var(--min-height-header));
}
.download-brand {
  background: linear-gradient(90deg, #FFF000 0%, #ff5900 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.download-link {
  color: rgb(255 240 0 / 1);
}
</style>