<script setup></script>
<template>
  <header
    class="fixed z-50 flex w-full flex-wrap bg-white py-4 text-sm sm:flex-nowrap sm:justify-start sm:py-2"
  >
    <nav
      class="mx-auto w-full max-w-[85rem] px-4 md:px-6 lg:px-8"
      aria-label="Global"
    >
      <div class="relative sm:flex sm:items-center">
        <div class="flex items-center justify-between">
          <NuxtLink to="/" class="flex-none">
            <NuxtImg
              src="/logo-carre-small.png"
              sizes="100vw sm:50vw md:400px"
            />
          </NuxtLink>
          <div class="sm:hidden">
            <button
              type="button"
              class="hs-collapse-toggle inline-flex items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-white p-2 text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50"
              data-hs-collapse="#navbar-basic-usage"
              aria-controls="navbar-basic-usage"
              aria-label="Toggle navigation"
            >
              <svg
                class="size-4 flex-shrink-0 hs-collapse-open:hidden"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                class="hidden size-4 flex-shrink-0 hs-collapse-open:block"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div
          id="navbar-basic-usage"
          class="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 sm:block"
        >
          <div
            class="mt-5 flex flex-col gap-5 sm:mt-0 sm:flex-row sm:items-center sm:justify-end sm:ps-5"
          >
            <NuxtLink
              to="/"
              class="font-medium text-blue-500"
              aria-current="page"
              >Active</NuxtLink
            >

            <div
              class="hs-dropdown [--adaptive:none] [--strategy:static] sm:[--strategy:absolute] sm:[--trigger:hover]"
            >
              <button
                type="button"
                class="flex w-full items-center font-medium text-gray-600 hover:text-gray-400 sm:py-4"
              >
                Diagnostics
                <svg
                  class="ms-2 size-4 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                class="hs-dropdown-menu start-0 top-full z-10 hidden w-full min-w-60 rounded-lg bg-white py-2 opacity-0 transition-[opacity,margin] duration-[0.1ms] before:absolute hs-dropdown-open:opacity-100 sm:border sm:px-2 sm:shadow-md sm:duration-[150ms]"
              >
                <div class="sm:grid sm:grid-cols-3">
                  <div class="flex flex-col">
                    <NuxtLink
                      to="/contact"
                      class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      Contact
                    </NuxtLink>
                    <NuxtLink
                      to="/contact"
                      class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      Services
                    </NuxtLink>
                    <NuxtLink
                      to="/contact"
                      class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      Customer Story
                    </NuxtLink>
                  </div>

                  <div class="flex flex-col">
                    <NuxtLink
                      to="/contact"
                      class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      Careers
                    </NuxtLink>
                    <NuxtLink
                      to="/contact"
                      class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      Careers: Overview
                    </NuxtLink>
                    <NuxtLink
                      to="/contact"
                      class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      Careers: Apply
                    </NuxtLink>
                  </div>

                  <div class="flex flex-col">
                    <NuxtLink
                      to="/contact"
                      class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      Log In
                    </NuxtLink>
                    <NuxtLink
                      to="/contact"
                      class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      Sign Up
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>

            <NuxtLink
              to="/contact"
              class="font-medium text-gray-600 hover:text-gray-400"
              >Project</NuxtLink
            >
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
