<template>
  <div>
    <div v-if="hasTopSection">
      <div v-if="hasTopFirstSection">
        <div v-if="hasCompanyInfos">
          <img v-if="props.topSection?.companyLogo" :src="props.topSection.companyLogo" />
          <div v-if="props.topSection?.companyName">{{ props.topSection.companyName }}</div>
        </div>
        <div v-if="props.topSection?.text">{{ props.topSection.text }}</div>
      </div>
      <div v-if="hasTopSecondSection">
        <div v-for="category in pagesCategories" :key="`pages_${category}`">
          <div
            v-for="page in props.topSection?.pages?.[category]"
            :key="`pages_${category}_${page}`"
          >
            {{ page }}
          </div>
        </div>
      </div>
    </div>
    <div v-if="hasBottomSection">
      <div v-if="props.bottomSection?.copyrights">{{ props.bottomSection.copyrights }}</div>
      <div v-if="hasSocialLinks">
        <FontAwesomeIcon
          v-for="socialLink in props.bottomSection?.socialLinks"
          :key="`socialLink_${socialLink}`"
          :icon="getSocialLinkIcon(socialLink.type)"
          @click="goToSocialLink(socialLink.url)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SocialLinkType } from '@/utils/types'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    topSection?: {
      pages?: { [category: string]: string[] }
      companyLogo?: string
      companyName?: string
      text?: string
    }
    bottomSection?: {
      socialLinks?: {
        type: SocialLinkType
        url: string
      }[]
      copyrights?: string
    }
  }>(),
  {
    topSection: undefined,
    bottomSection: undefined
  }
)

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

/** METHODS */
const getSocialLinkIcon = (socialLinkType: string) => {
  return 'fa-brands fa-github'
}

const goToSocialLink = (socialLinkUrl: string) => {
  window.location.href = socialLinkUrl
}
</script>
