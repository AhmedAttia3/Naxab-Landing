<template>
  <li :class="`nav-item-button ${ isActive ? 'active-view' : ''} ${isMobile ? '!border-none mobile-item' : ''}`">
    <NuxtLink
      :to="{path, ...((sectionHash && sectionHash !== 'index') && {hash: `#${sectionHash}`}), ...(query && {query})}"
      :draggable="false"
      :class="`px-2.5 py-1.5 md:px-2 md:py-1.5 inline-flex items-center gap-2.5 w-full capitalize ${isMobile ? 'text-[14px]' : ''}`"
    >
      <!-- SVG Icons for Mobile -->
      <template v-if="isMobile">
        <!-- الرئيسية -->
        <svg v-if="translationId === 'menu'" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="#92278f" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <!-- كيف تستفيد كمستخدم للتطبيق -->
        <svg v-else-if="translationId === 'journeys_of_points'" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="#92278f" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
        <!-- أهم المزايا للمستخدمين -->
        <svg v-else-if="translationId === 'features'" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="#92278f" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        <!-- نسب وإحصائيات -->
        <svg v-else-if="translationId === 'stats'" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="#92278f" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        <!-- أهم المزايا للعلامات التجارية -->
        <svg v-else-if="translationId === 'seller_features'" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="#92278f" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <!-- تواصل معنا -->
        <svg v-else-if="translationId === 'contact_us'" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="#92278f" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </template>
      {{ title }}
    </NuxtLink>
  </li>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false,
      required: true
    },
    isMobile: {
      type: Boolean,
      default: false
    },
    translationId: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      required: true,
      default: ""
    },
    sectionHash: {
      type: String,
      required: false,
    },
    path: {
      type: String,
      required: true
    },
    query: {
      type: Object,
      required: false
    }
  }
};
</script>

<style>
.nav-item-button.mobile-item.active-view a {
  color: rgb(255 240 0 / 1);
  background: #92278F;
}
.nav-item-button.mobile-item.active-view a svg {
  stroke: rgb(255 240 0 / 1);
}
.nav-item-button.mobile-item a {
  font-size: 0.7rem;
}
</style>