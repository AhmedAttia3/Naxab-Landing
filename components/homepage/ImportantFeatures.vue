<template>
  <section :id="texts.customers.navLinks.link6.sectionHash" class="pb-7 pt-10 lg:pb-9 lg:pt-20 mt-5 md:mt-8 lg:mt-14 xl:mt-16 3xl:mt-20 min-h-[400px]">
    <div class="inner-container">
      <div class="border-primaryLighter border-[3px] md:border-[6px] rounded-[17px] md:rounded-[41px] py-6 px-4 md:py-8 md:lg:px-5 lg:py-12 lg:px-6">
        <SectionTitle class="mt-3 lg:mt-0" :text="$t('head_titles.sellers.fourth.text')" :highlighted="$t('head_titles.sellers.fourth.highlight')"/>
        <ul class="list-none grid grid-cols-1 gap-3.5 md:grid-cols-2 mt-5 md:mt-7 lg:mt-8 md:gap-4">
          <li v-for="(feat, index) in texts.sellers.features" :key="index" class="flex flex-nowrap gap-x-2">
            <img :src="checkMarkIcon" width="31" height="31" class="object-contain w-[20px] h-[20px] md:w-[31px] md:h-[31px]" alt="" />
            <p class="text-[16px] md:text-[18px] lg:text-[19px]">
              {{ $t(feat) }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from "./SectionTitle.vue";
import texts from "@/fixtures/texts.js";
import checkMarkIcon from "@/assets/imgs/check.svg";
export default {
    data() {
       return{
        texts,
        checkMarkIcon
       }
    },
    components: {
        SectionTitle
    }
}
</script>

<style lang="scss" scoped>
</style>
