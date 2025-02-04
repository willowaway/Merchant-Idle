<script setup lang="ts">
import { reactive, computed } from "vue";

// Component properties
const props = defineProps<{
	/** The HTML tag of the component (div, a) */
  tag: string;
  /** The title of the block */
  title: string;
  /** The subtitle of the block */
  subtitle: string;
  /** Bordered block style */
  bordered: boolean;
  /** Rounded block style */
  rounded: boolean;
  /** Themed block style */
  themed: boolean;
  /** Transparent block style */
  transparent: boolean;
  /** Shadow fx block style */
  fxShadow: boolean;
  /** Pop fx block style */
  fxPop: boolean;
  /** Rotate right fx block style */
  fxRotateRight: boolean;
  /** Rotate left fx block style */
  fxRotateLeft: boolean;
  /** Shadow style for block links */
  linkShadow: boolean;
  /** Pop style for block links */
  linkPop: boolean;
  /** Rotate style for block links */
  linkRotate: boolean;
  /** Add additional classes to default block-header */
  headerClass: string;
  /** Add additional classes to default block-options */
  optionsClass: string;
  /** Add additional classes to default block-content */
  contentClass: string;
  /** Add additional classes to default block footer */
  footerClass: string;
  /** Add the default header background */
  headerBg: boolean;
  /** Reverse the order of elements in header */
  headerRtl: boolean;
  /** Add full padding to the bottom of the default block-content */
  contentFull: boolean;
  /** Enable the ribbon or enable it and also specify its content by setting a string value. */
  ribbon: boolean | string;
  /** Position ribbon to the left */
  ribbonLeft: boolean;
  /** Position ribbon to the bottom */
  ribbonBottom: boolean;
  /** Set the bookmark type to your ribbon */
  ribbonBookmark: boolean;
  /** Set the modern type to your ribbon */
  ribbonModern: boolean;
  /** Set a different ribbon variant (primary, info, warning, danger, success, glass) */
  ribbonVariant: boolean;
  /** Loading block mode */
  modeLoading: boolean;
  /** Fullscreen block mode */
  modeFullscreen: boolean;
  /** Pinned block mode */
  modePinned: boolean;
  /** Hide block’s content */
  modeContentHide: boolean;
  /** Hide block itself */
  modeHide: boolean;
  /** Enable the fullscreen mode button */
  btnOptionFullscreen: boolean;
  /** Enable the pinned mode button */
  btnOptionPinned: boolean;
  /** Enable the content toggle button */
  btnOptionContent: boolean;
  /** Enable the close mode button */
  btnOptionClose: boolean;
}>();

// Reactive state
const state = reactive({
  // If the block is in loading mode
  optionLoading: props.modeLoading,

  // If the block is in fullscreen mode
  optionFullscreen: props.modeFullscreen,

  // If the block is in pinned mode
  optionPinned: props.modePinned,

  // If the default block-content is hidden
  optionContentHide: props.modeContentHide,

  // If block itself is hidden
  optionHide: props.modeHide,
});

// Set CSS classes accordingly
const classContainer = computed(() => {
  return {
    "block-bordered": props.bordered,
    "block-rounded": props.rounded,
    "block-themed": props.themed,
    "block-transparent": props.transparent,
    "block-fx-shadow": props.fxShadow,
    "block-fx-pop": props.fxPop,
    "block-fx-rotate-right": props.fxRotateRight,
    "block-fx-rotate-left": props.fxRotateLeft,
    "block-link-shadow": props.linkShadow,
    "block-link-pop": props.linkPop,
    "block-link-rotate": props.linkRotate,
    "block-mode-loading": state.optionLoading,
    "block-mode-fullscreen": state.optionFullscreen,
    "block-mode-pinned": state.optionPinned,
    "block-mode-hidden": state.optionContentHide,
    "d-none": state.optionHide,
  };
});

// Set CSS classes for block header
const classContainerHeader = computed(() => {
  return {
    "block-header-default": props.headerBg,
    "block-header-rtl": props.headerRtl,
    [props.headerClass]: props.headerClass,
  };
});

// Set CSS classes for block header options
const classContainerOptions = computed(() => {
  return {
    [props.optionsClass]: props.optionsClass,
  };
});

// Set CSS classes for block footer options
const classContainerFooter = computed(() => {
  return {
    [props.footerClass]: props.footerClass,
  };
});

// Set CSS classes for block content
const classContainerContent = computed(() => {
  return {
    "block-content-full": props.contentFull,
    ribbon: props.ribbon,
    "ribbon-left": props.ribbon && props.ribbonLeft,
    "ribbon-bottom": props.ribbon && props.ribbonBottom,
    "ribbon-bookmark": props.ribbon && props.ribbonBookmark,
    "ribbon-modern": props.ribbon && props.ribbonModern,
    [`ribbon-${props.ribbonVariant}`]: props.ribbon && props.ribbonVariant,
    [props.contentClass]: props.contentClass,
  };
});

// Block functions to call on demand
function fullscreenToggle() {
  state.optionPinned = false;
  state.optionFullscreen = !state.optionFullscreen;
}

function fullscreenOn() {
  state.optionPinned = false;
  state.optionFullscreen = true;
}

function fullscreenOff() {
  state.optionPinned = false;
  state.optionFullscreen = false;
}

function pinnedToggle() {
  state.optionFullscreen = false;
  state.optionPinned = !state.optionPinned;
}

function pinnedOn() {
  state.optionFullscreen = false;
  state.optionPinned = true;
}

function pinnedOff() {
  state.optionFullscreen = false;
  state.optionPinned = false;
}

function contentToggle() {
  state.optionContentHide = !state.optionContentHide;
}

function contentShow() {
  state.optionContentHide = false;
}

function contentHide() {
  state.optionContentHide = true;
}

function statusToggle() {
  state.optionLoading = !state.optionLoading;
}

function statusLoading(mode: string, timeout: number) {
  state.optionLoading = true;

  if (mode === "demo") {
    setTimeout(() => {
      state.optionLoading = false;
    }, timeout);
  }
}

function statusNormal() {
  state.optionLoading = false;
}

function open() {
  state.optionHide = false;
}

function close() {
  state.optionHide = true;
}

defineExpose({
  fullscreenToggle,
  fullscreenOn,
  fullscreenOff,
  pinnedToggle,
  pinnedOn,
  pinnedOff,
  contentToggle,
  contentShow,
  contentHide,
  statusToggle,
  statusLoading,
  statusNormal,
  open,
  close,
});
</script>

<template>
  <component
    :is="tag"
    :href="tag === 'a' ? '#' : null"
    :class="classContainer"
    class="block"
  >
    <!-- Block Header -->
    <div
      class="block-header"
      v-if="$slots.header || $slots.title || title"
      :class="classContainerHeader"
    >
      <slot name="header">
        <!-- Block Title -->
        <h3 class="block-title">
          <slot name="title"></slot>
          {{ title }}
          <small v-if="subtitle">{{ subtitle }}</small>
          <slot name="subtitle"></slot>
        </h3>
        <!-- END Block Title -->

        <!-- Block Options -->
        <div
          class="block-options space-x-1"
          v-if="
            $slots.options ||
            btnOptionFullscreen ||
            btnOptionPinned ||
            btnOptionContent ||
            btnOptionClose
          "
          :class="classContainerOptions"
        >
          <slot name="options"></slot>
          <button
            type="button"
            class="btn-block-option"
            @click="fullscreenToggle"
            v-if="btnOptionFullscreen"
          >
            <i
              :class="{
                'si si-size-fullscreen': !state.optionFullscreen,
                'si si-size-actual': state.optionFullscreen,
              }"
            ></i>
          </button>
          <button
            type="button"
            class="btn-block-option"
            @click="pinnedToggle"
            v-if="btnOptionPinned"
          >
            <i class="si si-pin"></i>
          </button>
          <button
            type="button"
            class="btn-block-option"
            @click="contentToggle"
            v-if="btnOptionContent"
          >
            <i
              :class="{
                'si si-arrow-up': !state.optionContentHide,
                'si si-arrow-down': state.optionContentHide,
              }"
            ></i>
          </button>
          <button
            type="button"
            class="btn-block-option"
            @click="close"
            v-if="btnOptionClose"
          >
            <i class="si si-close"></i>
          </button>
        </div>
        <!-- END Block Options -->
      </slot>
    </div>
    <!-- END Block Header -->

    <!-- Default Block Content -->
    <div
      v-if="!$slots.content"
      class="block-content"
      :class="classContainerContent"
    >
      <div v-if="props.ribbon" class="ribbon-box">
        <slot name="ribbon">{{ ribbon }}</slot>
      </div>
      <slot></slot>
    </div>
    <!-- END Default Block Content -->

    <!-- Default Block Footer -->
    <div
      v-if="!$slots.content && $slots.footer"
      class="block-content block-content-full block-content-sm bg-body-light fs-sm"
      :class="classContainerFooter"
    >
      <slot name="footer"></slot>
    </div>
    <!-- END Default Block Footer -->

    <!-- Main content for full block content control -->
    <slot name="content"></slot>
  </component>
</template>
