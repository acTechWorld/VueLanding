<template>
  <div class="footerSection">
    <div
      v-if="hasTopSection"
      class="footerSection_first flex flex-col md:flex-row gap-[50px] md:gap-10 py-10 px-5 border-b text-left"
      :style="topSectionStyle"
    >
      <div
        v-if="hasTopFirstSection"
        class="footerSection_top_first flex flex-col gap-5 w-full"
        :class="{ 'md:w-1/3': hasTopSecondSection }"
      >
        <div v-if="hasCompanyInfos" class="footerSection_companyInfos">
          <img
            v-if="props.topSection?.companyLogo"
            class="footerSection_companyLogos"
            :src="props.topSection.companyLogo"
          />
          <div
            v-if="props.topSection?.companyName"
            class="footerSection_companyName font-semibold text-2xl"
          >
            {{ props.topSection.companyName }}
          </div>
        </div>
        <div v-if="props.topSection?.text" class="footerSection_text">
          {{ props.topSection.text }}
        </div>
      </div>
      <div
        v-if="hasTopSecondSection"
        class="footerSection_top_second grid gap-8 grid-cols-[repeat(2,1fr)] sm:grid-cols-[repeat(3,1fr)] w-full"
        :class="[
          hasTopFirstSection
            ? 'lg:grid-cols-[repeat(4,1fr)] md:w-2/3'
            : 'md:grid-cols-[repeat(4,1fr)] lg:grid-cols-[repeat(6,1fr)]'
        ]"
      >
        <div
          v-for="category in pagesCategories"
          :key="`pages_${category}`"
          class="footerSection_pagesCategory flex flex-col gap-3 text-sm"
        >
          <div class="footerSection_category flex mb-1">{{ category }}</div>
          <div
            v-for="page in props.topSection?.pages?.[category]"
            :key="`pages_${category}_${page}`"
            class="footerSection_page font-semibold cursor-pointer hover:font-bold hover:translate-x-1 transition-all duration-300"
            @click="handleClickPage(category, page)"
          >
            {{ page }}
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="hasBottomSection"
      class="footerSection_second py-10 px-5 flex flex-col-reverse sm:flex-row justify-between gap-5"
      :style="bottomSectionStyle"
    >
      <div v-if="props.bottomSection?.copyrights" class="footerSection_copyrights text-sm">
        {{ props.bottomSection.copyrights }}
      </div>
      <div v-if="hasSocialLinks" class="footerSection_socialLinks gap-3 flex flex-wrap">
        <a
          v-for="socialLink in props.bottomSection?.socialLinks"
          :key="`socialLink_${socialLink}`"
          :href="socialLink.url"
          class="footerSection_socialLink"
        >
          <FontAwesomeIcon :icon="getSocialLinkIcon(socialLink.type)" size="xl" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SocialLinkType, ThemeColor } from '@/utils/types'
import { getBgColor, getTxtColor } from '@/utils/utils'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    topSection?: {
      pages?: { [category: string]: string[] }
      companyLogo?: string
      companyName?: string
      text?: string
      bgColor?: `#${string}`
      color?: `#${string}`
      themeColor?: ThemeColor
    }
    bottomSection?: {
      socialLinks?: {
        type: SocialLinkType
        url: string
      }[]
      copyrights?: string
      bgColor?: `#${string}`
      color?: `#${string}`
      themeColor?: ThemeColor
    }
  }>(),
  {
    topSection: undefined,
    bottomSection: undefined
  }
)

const emits = defineEmits(['clickPage'])

/** COMPUTED */
const hasTopSection = computed(() => hasTopFirstSection.value || hasTopSecondSection)

const hasTopFirstSection = computed(
  () => props.topSection && (hasCompanyInfos.value || props.topSection.text)
)

const hasTopSecondSection = computed(() => pagesCategories.value.length > 0)

const hasCompanyInfos = computed(
  () => props.topSection && (props.topSection.companyLogo || props.topSection?.companyName)
)

const hasBottomSection = computed(
  () => props.bottomSection && (hasSocialLinks.value || props.bottomSection.copyrights)
)

const hasSocialLinks = computed(
  () =>
    props.bottomSection &&
    props.bottomSection.socialLinks &&
    props.bottomSection.socialLinks.length > 0
)

const pagesCategories = computed(() =>
  props.topSection?.pages ? Object.keys(props.topSection.pages) : []
)

const topSectionStyle = computed(() => ({
  color: getTxtColor(props.topSection?.color, props.topSection?.themeColor),
  backgroundColor: getBgColor(props.topSection?.bgColor, props.topSection?.themeColor)
}))

const bottomSectionStyle = computed(() => ({
  color: getTxtColor(props.bottomSection?.color, props.bottomSection?.themeColor),
  backgroundColor: getBgColor(props.bottomSection?.bgColor, props.bottomSection?.themeColor)
}))

/** METHODS */
const getSocialLinkIcon = (socialLinkType: SocialLinkType) => {
  return `fa-brands fa-${socialLinkType}`
}

const handleClickPage = (category: string, page: string) => {
  emits('clickPage', { category: category, page: page })
}
</script>
