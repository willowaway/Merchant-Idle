<script setup lang="ts"></script>

<template>
  <!-- Hero -->
  <BasePageHeading title="Authentication" subtitle="All pages in one spot!">
    <template #extra>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb breadcrumb-alt">
          <li class="breadcrumb-item">
            <a class="link-fx" href="javascript:void(0)">Authentication</a>
          </li>
          <li class="breadcrumb-item" aria-current="page">All</li>
        </ol>
      </nav>
    </template>
  </BasePageHeading>
  <!-- END Hero -->

  <!-- Page Content -->
  <div class="content">
    <!-- Original -->
    <h2 class="content-heading">Original</h2>
    <div class="row">
      <div class="col-md-6 col-xxl-4">
        <!-- Sign In -->
        <RouterLink :to="{ name: 'signin' }" custom v-slot="{ href, navigate }">
          <BaseBlock tag="a" link-shadow :href="href" @click="navigate">
            <div class="py-5 text-center">
              <div class="mb-3">
                <i class="fa fa-sign-in-alt fa-2x text-default"></i>
              </div>
              <p class="fw-medium text-muted">Sign In</p>
            </div>
          </BaseBlock>
        </RouterLink>
        <!-- END Sign In -->
      </div>
      <div class="col-md-6 col-xxl-4">
        <!-- Sign Up -->
        <RouterLink :to="{ name: 'signup' }" custom v-slot="{ href, navigate }">
          <BaseBlock tag="a" link-shadow :href="href" @click="navigate">
            <div class="py-5 text-center">
              <div class="mb-3">
                <i class="fa fa-user-plus fa-2x text-success"></i>
              </div>
              <p class="fw-medium text-muted">Sign Up</p>
            </div>
          </BaseBlock>
        </RouterLink>
        <!-- END Sign Up -->
      </div>
      <div class="col-md-6 col-xxl-4">
        <!-- Lock Screen -->
        <RouterLink
          :to="{ name: 'auth-lock' }"
          custom
          v-slot="{ href, navigate }"
        >
          <BaseBlock tag="a" link-shadow :href="href" @click="navigate">
            <div class="py-5 text-center">
              <div class="mb-3">
                <i class="fa fa-lock fa-2x text-city"></i>
              </div>
              <p class="fw-medium text-muted">Lock Screen</p>
            </div>
          </BaseBlock>
        </RouterLink>
        <!-- END Lock Screen -->
      </div>
      <div class="col-md-6 col-xxl-4">
        <!-- Password Reminder -->
        <RouterLink
          :to="{ name: 'reminder' }"
          custom
          v-slot="{ href, navigate }"
        >
          <BaseBlock tag="a" link-shadow :href="href" @click="navigate">
            <div class="py-5 text-center">
              <div class="mb-3">
                <i class="fa fa-life-ring fa-2x text-modern"></i>
              </div>
              <p class="fw-medium text-muted">Password Reminder</p>
            </div>
          </BaseBlock>
        </RouterLink>
        <!-- END Password Reminder -->
      </div>
    </div>
    <!-- END Original -->
  </div>
  <!-- END Page Content -->
</template>
