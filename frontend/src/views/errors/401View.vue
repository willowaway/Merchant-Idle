<script setup lang="ts">
import { useTemplateStore } from "@/stores/template";

const template = useTemplateStore();
</script>
<template>
  <!-- Page Content -->
  <div class="hero">
    <div class="hero-inner text-center">
      <div class="bg-body-extra-light">
        <div class="content content-full overflow-hidden">
          <div class="py-4">
            <!-- Error Header -->
            <h1 class="display-1 fw-bolder text-amethyst">401</h1>
            <h2 class="h4 fw-normal text-muted mb-5">
              We are sorry but you are not authorized to access this page..
            </h2>
            <!-- END Error Header -->

            <!-- Error Body -->
            <p>
              {{ template.errorMessage }}
            </p>
            <!-- END Error Body -->
          </div>
        </div>
      </div>
      <div class="content content-full text-muted fs-sm fw-medium">
        <!-- Error Footer -->
        <p class="mb-1">Would you like to let us know about it?</p>
        <a class="link-fx" href="javascript:void(0)">Report it</a> or
        <RouterLink :to="{ name: 'signin' }" class="link-fx"
          >Go Back</RouterLink
        >
        <!-- END Error Footer -->
      </div>
    </div>
  </div>
  <!-- END Page Content -->
</template>
