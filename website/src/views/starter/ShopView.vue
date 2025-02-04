<script setup lang="ts"></script>

<template>
  <BasePageHeading title="Dashboard" subtitle="Welcome Admin!">
    <template #extra>
      <button type="button" class="btn btn-alt-primary">
        <i class="fa fa-plus opacity-50 me-1"></i>
        Shop
      </button>
    </template>
  </BasePageHeading>

  <div class="content">
    <div class="row items-push">
      <div class="col-sm-6 col-xl-4">
        <BaseBlock title="Block" class="h-100 mb-0">
          <p>
            This is a store view
          </p>
        </BaseBlock>
      </div>
      <div class="col-sm-6 col-xl-4">
        <BaseBlock title="Block" class="h-100 mb-0">
          <p>...</p>
        </BaseBlock>
      </div>
      <div class="col-xl-4">
        <BaseBlock title="Block" class="h-100 mb-0">
          <p>...</p>
        </BaseBlock>
      </div>
    </div>
  </div>
</template>
