<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { useTemplateStore } from "@/stores/template";
import { useMainStore } from "@/stores/main";

// SimpleBar, for more info and examples you can check out https://github.com/Grsmto/simplebar/tree/master/packages/simplebar-vue
import SimpleBar from "simplebar";

import { getAuth, signOut } from "firebase/auth";

// Main store
const store = useTemplateStore();
const main = useMainStore();

// Close side overlay on ESCAPE key down
function eventSideOverlay(event: KeyboardEvent) {
  if (event.which === 27) {
    event.preventDefault();
    store.sideOverlay({ mode: "close" });
  }
}

// Init SimpleBar (custom scrolling) and attach ESCAPE key event listener
onMounted(() => {
	const sidebar = document.getElementById("side-overlay");
	if (sidebar) {
		new SimpleBar(sidebar);
	}

  document.addEventListener("keydown", eventSideOverlay);
});

// Remove keydown event listener
onUnmounted(() => {
  document.removeEventListener("keydown", eventSideOverlay);
});


async function logOut() {
	const auth = getAuth();
	signOut(auth);
}

</script>

<template>
  <!-- Side Overlay-->
  <aside id="side-overlay">
    <slot>
      <!-- Side Header -->
      <div class="content-header border-bottom">
        <slot name="header">
          <!-- User Avatar -->
          <a class="img-link me-1" href="javascript:void(0)">
            <img
              class="img-avatar img-avatar32"
              src="/assets/media/avatars/avatar10.jpg"
              alt="Avatar"
            />
          </a>
          <!-- END User Avatar -->

          <!-- User Info -->
          <div class="ms-2">
            <a class="text-dark fw-semibold fs-sm" href="javascript:void(0)"
              >{{ main.username }}</a
            >
          </div>
          <!-- END User Info -->
        </slot>

        <!-- Close Side Overlay -->
        <button
          type="button"
          class="ms-auto btn btn-sm btn-alt-danger"
          @click="store.sideOverlay({ mode: 'close' })"
        >
          <i class="fa fa-fw fa-times"></i>
        </button>
        <!-- END Close Side Overlay -->
      </div>
      <!-- END Side Header -->

      <slot name="content">
        <!-- Side Content -->
        <div class="content-side d-flex justify-content-between flex-column">
        	<p>Side Overlay content..</p>
			<button class="btn btn-lg btn-alt-danger w-100" @click="logOut">Logout</button>
        </div>
        <!-- END Side Content -->
      </slot>
    </slot>
  </aside>
  <!-- END Side Overlay -->
</template>
