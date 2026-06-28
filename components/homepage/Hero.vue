<template>
  <section
    id="index"
    class="pb-6 hero flex mt-[var(--min-height-header)] flex-col pt-7 md:pt-8 lg:pt-9"
  >
    <div
      class="hero__inner flex flex-col items-center text-center justify-center mx-auto w-full h-full"
    >
      <div
        class="px-1 mx-auto sm:px-10 lg:px-11  min-h-[480px]"
      >
        <div class="text-white">
          <h1
            class="font-bold mt-10 md:mt-12 mb-2.5 text-[28px] sm:text-[34px] md:text-[44px] lg:text-[54px] xl:text-[64px] 3xl:text-[76px] tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] lg:tracking-[0.35em] text-gradient animate-fade-in-up"
          >
            {{ $t("hero.title") }}
          </h1>

          <div>
            <p
              class="text-[19px] sm:text-[21px] md:text-[24px] lg:text-[26px] xl:text-[28px] 3xl:text-[32px] font-bold mt-3"
            >
              {{ $t("hero.tagline") }}
            </p>
            <p
              class="text-[17px] sm:text-[19px] md:text-[21px] lg:text-[22px] xl:text-[24px] 3xl:text-[28px] font-normal mt-1"
            >
              {{ $t("hero.tagline_location") }}
            </p>
            <p
              class="text-[17px] sm:text-[19px] md:text-[21px] lg:text-[22px] xl:text-[24px] 3xl:text-[28px] font-normal mt-6"
            >
              {{ $t("hero.subtitle1") }}
            </p>
            <p
              class="text-[17px] sm:text-[19px] md:text-[21px] lg:text-[22px] xl:text-[24px] 3xl:text-[28px] font-normal mt-1"
            >
              {{ $t("hero.subtitle2") }}
            </p>
            <div
              class="flex items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-7 w-full flex-wrap mt-8"
            >
              <div
                v-for="item in features"
                :key="item.textKey"
                class="flex flex-col items-center gap-1.5 sm:gap-2 min-w-[70px] sm:min-w-[80px] md:min-w-[90px]"
              >
                <img
                  :src="item.icon"
                  class="w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px] object-contain"
                  :alt="$t(item.textKey)"
                />
                <span
                  class="text-secondary text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] font-bold leading-tight"
                >
                  {{ $t(item.textKey) }}
                </span>
              </div>
            </div>
          </div>

          <div
            class="flex items-center justify-center mt-14 flex-wrap gap-2 md:gap-4"
          >
            <a
              href="#"
              class="bg-secondary text-primary font-bold py-3 px-8 rounded-lg text-[16px] sm:text-[18px] md:text-[20px] transition-all hover:brightness-110 hover:shadow-lg inline-block zoom-on-hover"
            >
              {{ $t("hero.add_brand_button") }}
            </a>
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-full self-end flex-1 md:flex-auto flex justify-center mt-7 sm:mt-12"
    >
      <img
        :draggable="false"
        :src="HeroCoinsImg"
        class="object-contain px-2 min-w-[180px] w-[270px] sm:w-[280px] md:w-[390px] lg:w-[449px] xl:w-[510px] h-auto"
        :alt="$t('hero.title')"
        width="510"
        height="321"
      />
    </div>
  </section>
</template>

<script>
import HeroCoinsImg from "@/assets/imgs/hero-coins.png";
import promotionImg from "@/assets/imgs/promotion.png";
import discountImg from "@/assets/imgs/discount.png";
import giftBoxImg from "@/assets/imgs/giftbox.png";
import cashbackImg from "@/assets/imgs/cashback.png";
import customerLoyaltyImg from "@/assets/imgs/customer-loyalty.png";
export default {
  data() {
    return {
      HeroCoinsImg,
      features: [
        { icon: promotionImg, textKey: "hero.feature_1" },
        { icon: discountImg, textKey: "hero.feature_2" },
        { icon: giftBoxImg, textKey: "hero.feature_3" },
        { icon: cashbackImg, textKey: "hero.feature_4" },
        { icon: customerLoyaltyImg, textKey: "hero.feature_5" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.hero {
  min-height: 78vh;
  min-height: 78svh;
  background-image: url(../../assets/imgs/hero-bg-desktop.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media only screen and (max-width: 680px) {
    min-height: 70vh;
    min-height: 70svh;
    background-image: url(../../assets/imgs/hero-bg-mobile.svg);
  }
}

.text-gradient {
  background: linear-gradient(90deg, #FFF000 0%, #ff5900 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}
</style>


