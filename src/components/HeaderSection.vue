<template>
  <div class="flex flex-col h-14 max-h-14" :class="[props.sticky ? 'sticky top-0' : 'relative']">
    <div
      class="flex gap-10 font-semibold h-14 px-4 z-10"
      :style="sectionStyle"
      :class="{ '!bg-[transparent]': props.transparent }"
    >
      <div
        v-if="props.companyLogo || props.companyName"
        class="flex gap-2 items-center cursor-pointer"
      >
        <img v-if="props.companyLogo" :src="props.companyLogo" class="h-full" />
        <div v-if="props.companyName">
          {{ props.companyName }}
        </div>
      </div>
      <div v-if="props.menuItems && props.menuItems.length > 0" class="flex">
        <div
          v-for="(menuItem, idx) in props.menuItems"
          :key="`menuItem_${idx}`"
          class="px-2 items-center hidden md:flex"
        >
          <div v-if="menuItem.category" class="items-center flex h-full">
            <DropdownComponent
              v-if="menuItem.subMenuItems && menuItem.subMenuItems.length > 0"
              class="group"
            >
              <template #header>
                {{ menuItem.category }}
                <FontAwesomeIcon
                  icon="chevron-down"
                  class="ml-1 duration-300 group-hover:rotate-180"
                  size="sm"
                />
              </template>
              <template #content>
                <div
                  v-for="(subMenuItem, idxSubMenu) in menuItem.subMenuItems"
                  :key="`menuItem_${idx}_${idxSubMenu}`"
                  class="py-2 pl-4 pr-10 flex items-center group/sub hover:bg-[linear-gradient(rgb(0_0_0/5%)_0_0)] gap-2"
                  :class="[
                    subMenuItem.icon ? 'pr-6' : 'pr-4',
                    menuItem.large ? 'w-[250px]' : 'w-[200px]'
                  ]"
                  :style="subMenuItemStyle(subMenuItem)"
                  @click="handleClickPage({ category: menuItem.category, page: subMenuItem.name })"
                >
                  <img
                    v-if="subMenuItem.img && menuItem.large"
                    :src="subMenuItem.img"
                    class="h-8"
                  />
                  <div class="flex flex-col gap-1">
                    <div class="font-medium group-hover/sub:font-semibold">
                      {{ subMenuItem.label }}
                    </div>
                    <div v-if="subMenuItem.subtitle" class="text-sm line-clamp-2">
                      {{ subMenuItem.subtitle }}
                    </div>
                  </div>
                  <FontAwesomeIcon
                    v-if="subMenuItem.icon"
                    class="opacity-0 group-hover/sub:opacity-100 ml-auto group-hover/sub:translate-x-2 transition-all duration-300"
                    :icon="subMenuItem.icon"
                  />
                </div>
              </template>
            </DropdownComponent>
          </div>
          <div v-else class="cursor-pointer" @click="handleClickPage({ page: menuItem.name })">
            {{ menuItem.label }}
          </div>
        </div>
      </div>
      <div class="md:hidden ml-auto self-center cursor-pointer grid">
        <FontAwesomeIcon
          size="lg"
          icon="bars"
          class="transition-all duration-300 col-start-1 row-start-1"
          :class="
            displayMobileDropdown ? 'opacity-0 scale-50 invisible' : 'opacity-100 scale-100 visible'
          "
          @click="displayMobileDropdown = true"
        />
        <FontAwesomeIcon
          size="xl"
          icon="xmark"
          class="transition-all duration-300 col-start-1 row-start-1"
          :class="
            displayMobileDropdown ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-50 invisible'
          "
          @click="displayMobileDropdown = false"
        />
      </div>
    </div>
    <div
      class="md:hidden bg-bg-secondary transition-all duration-300 absolute pt-14 h-[100vh] overflow-scroll w-full"
      :class="[displayMobileDropdown ? 'opacity-100 h-[100vh]' : 'opacity-0 h-0']"
      :style="sectionStyle"
    >
      <div
        v-for="(menuItem, idx) in props.menuItems"
        :key="`menuItem_${idx}_mobile`"
        class="font-semibold border-b"
      >
        <AccordionComponent v-if="menuItem.category" class="[&_svg]:mr-5">
          <template #header>
            <div class="px-5">{{ menuItem.category }}</div>
          </template>
          <template #content>
            <div class="flex flex-col pb-4">
              <div
                v-for="(subMenuItem, idxSubMenu) in menuItem.subMenuItems"
                :key="`menuItem_${idx}_${idxSubMenu}_mobile`"
                class="font-medium cursor-pointer py-2 flex gap-2 px-7 items-center"
                :style="subMenuItemStyle(subMenuItem)"
                @click="handleClickPage({ category: menuItem.category, page: subMenuItem.name })"
              >
                <img v-if="subMenuItem.img" :src="subMenuItem.img" class="h-8" />
                <div class="flex flex-col gap-1">
                  <div class="font-medium group-hover/sub:font-semibold">
                    {{ subMenuItem.label }}
                  </div>
                  <div v-if="subMenuItem.subtitle" class="text-sm line-clamp-2">
                    {{ subMenuItem.subtitle }}
                  </div>
                </div>
              </div>
            </div>
          </template>
        </AccordionComponent>
        <div
          v-else
          class="py-4 px-5 cursor-pointer"
          @click="handleClickPage({ page: menuItem.name })"
        >
          {{ menuItem.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { HeaderSectionType, HeaderSubMenuItemType } from '@/types/types'
import DropdownComponent from '@/commons/DropdownComponent.vue'
import AccordionComponent from '@/commons/AccordionComponent.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { getBgColor, getTxtColor } from '@/utils/utils'
import { computed, ref, watch } from 'vue'
import { useWindowSize } from '@vueuse/core'

const props = withDefaults(defineProps<HeaderSectionType>(), {
  companyLogo: undefined,
  companyName: undefined,
  menuItems: () => [],
  color: undefined,
  themeColor: undefined,
  bgColor: undefined,
  sticky: false,
  transparent: false
})

const displayMobileDropdown = ref(false)
const emits = defineEmits(['clickPage'])
const { width } = useWindowSize()

/** COMPUTED **/
const sectionStyle = computed(() => ({
  color: getTxtColor(props.color, props.themeColor),
  backgroundColor: getBgColor(props.bgColor, props.themeColor)
}))

const isMobileScreenSize = computed(() => width.value < 768)

/** METHODS **/
const subMenuItemStyle = (subMenuItem: HeaderSubMenuItemType) => ({
  color: getTxtColor(
    subMenuItem.color || (subMenuItem.themeColor ? undefined : props.color),
    subMenuItem.themeColor || props.themeColor
  ),
  backgroundColor: getBgColor(
    subMenuItem.bgColor || (subMenuItem.themeColor ? undefined : props.bgColor),
    subMenuItem.themeColor || props.themeColor
  )
})

const handleClickPage = ({ category, page }: { category?: string; page: string }) => {
  emits('clickPage', category ? { category: category, page: page } : { page: page })
}

/** WATCH */
watch(isMobileScreenSize, (newValue) => {
  if (!newValue) displayMobileDropdown.value = false
})
</script>
