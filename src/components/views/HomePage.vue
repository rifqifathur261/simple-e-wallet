<template>
  <div class="home bg-secondary px-28">
    <!-- header -->
    <div class="bg-white rounded-br-5xl rounded-bl-5xl soft-shadow px-16 py-8">
      <div class="grid grid-cols-12">
        <div class="col-span-2 border-r border-gray-light">
          <div class="flex items-center gap-2">
            <img
              class="object-contain h-10 w-10 rounded-5xl"
              src="data:image/jpeg;base64,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"
            /><img />
            <span class="text-black text-lg font-bold uppercase"
              >SampahBank</span
            >
          </div>
        </div>
        <div class="col-span-8">
          <div class="flex items-center gap-10 h-full pl-6">
            <button
              class="
                text-sm
                font-roboto
                uppercase
                font-semibold
                text-gray-light
                hover:text-primary
                focus:text-primary
              "
            >
              dashboard
            </button>
            <button
              class="
                text-sm
                font-roboto
                uppercase
                font-semibold
                text-gray-light
                hover:text-primary
                focus:text-primary
              "
            >
              exchange
            </button>
            <button
              class="
                text-sm
                font-roboto
                uppercase
                font-semibold
                text-gray-light
                hover:text-primary
                focus:text-primary
              "
            >
              ste bank
            </button>
            <button
              class="
                text-sm
                font-roboto
                uppercase
                font-semibold
                text-gray-light
                hover:text-primary
                focus:text-primary
              "
            >
              affilate
            </button>
            <button
              class="
                text-sm
                font-roboto
                uppercase
                font-semibold
                text-gray-light
                hover:text-primary
                focus:text-primary
              "
            >
              about
            </button>
          </div>
        </div>
        <div class="col-span-2 gap-7 flex pl-6">
          <button>
            <Cog class="text-gray-light" />
          </button>
          <button>
            <div class="relative">
              <span
                class="
                  absolute
                  top-0
                  right-0
                  w-2
                  h-2
                  rounded-full
                  bg-accent
                  animate-ping
                "
              ></span>
              <span
                class="
                  ring-2 ring-white
                  absolute
                  top-0
                  right-0
                  w-2
                  h-2
                  rounded-full
                  bg-accent
                "
              ></span>
              <Bell class="text-gray-light" />
            </div>
          </button>
          <img
            class="
              inline-block
              h-12
              w-12
              rounded-xl
              ring-offset-2 ring-2 ring-gray-light
            "
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
      </div>
      <div class="grid grid grid-cols-12 mt-12">
        <div class="col-span-5 border-r border-gray-light h-72">
          <span class="uppercase font-semibold text-gray-dark">Saldo Saya</span>
          <div class="mt-6">
            <span class="uppercase font-black text-black text-4xl"
              >$2,128,022.00</span
            >
          </div>
          <span class="uppercase font-semibold text-gray-light"
            >3.30142057 BTC</span
          >
          <div class="grid grid-cols-2 mt-8 mr-20">
            <div class="flex">
              <div
                class="
                  p-2
                  rounded-xl
                  bg-accent2-light
                  w-12
                  h-12
                  flex
                  items-center
                  justify-center
                "
              >
                <DownArrow class="text-accent2 w-5 h-5" />
              </div>

              <div class="flex flex-col">
                <span class="font-bold ml-4 text-xl">$3,123.00</span>
                <span class="font-semibold ml-4 text-sm text-gray-light"
                  >Pemasukan</span
                >
              </div>
            </div>
            <div class="flex">
              <div
                class="
                  p-2
                  rounded-xl
                  bg-primary-light
                  w-12
                  h-12
                  flex
                  items-center
                  justify-center
                "
              >
                <UpArrow class="text-primary w-5 h-5" />
              </div>

              <div class="flex flex-col">
                <span class="font-bold ml-4 text-xl">$3,123.00</span>
                <span class="font-semibold ml-4 text-sm text-gray-light"
                  >Pengeluaran</span
                >
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 mt-8 mr-20">
            <button
              class="
                mr-12
                h-12
                uppercase
                rounded-lg
                bg-accent2
                text-white
                font-semibold
                shadow-lg shadow-accent2
                hover:shadow-xl hover:shadow-accent2
              "
            >
              receive
            </button>
            <button
              class="
                mr-12
                h-12
                shadow-primary shadow-lg
                hover:shadow-xl hover:shadow-primary
                shadow-primary
                uppercase
                rounded-lg
                bg-primary
                text-white
                font-semibold
              "
            >
              send
            </button>
          </div>
        </div>
        <div class="col-span-4 flex justify-center">
          <!-- <Pie /> -->
          <button
            type="button"
            class="bg-white w-52 h-52 rounded-full shadow-xl"
          >
            <div class="flex justify-center">
              <span class="text-4xl font-black font-roboto-b">47 </span>
              <span
                class="text-gray-light font-roboto-b font-black text-xl ml-2"
                >%</span
              >
            </div>
            <span class="text-gray-light font-semibold">BTC</span>
          </button>
        </div>
        <div class="col-span-3">
          <div class="grid grid-cols-5 gap-2 p-2">
            <div
              class="
                w-12
                h-12
                bg-accent-light
                font-roboto-b font-black
                text-accent text-xl
                rounded-xl
                flex
                items-center
                justify-center
              "
            >
              B
            </div>
            <div class="col-span-3">
              <div class="font-bold">BTC</div>
              <span class="text-sm text-gray-light">Bitcoin</span>
            </div>
            <div class="">
              <div class="flex justify-end font-black font-roboto-b">
                <span>47%</span>
              </div>
              <span class="flex justify-end text-sm text-accent2">+2.5%</span>
            </div>
          </div>
          <div class="grid grid-cols-5 gap-2 p-2">
            <div
              class="
                w-12
                h-12
                bg-accent-light
                font-roboto-b font-black
                text-accent text-xl
                rounded-xl
                flex
                items-center
                justify-center
              "
            >
              B
            </div>
            <div class="col-span-3">
              <div class="font-bold">BTC</div>
              <span class="text-sm text-gray-light">Bitcoin</span>
            </div>
            <div class="">
              <div class="flex justify-end font-black font-roboto-b">
                <span>47%</span>
              </div>
              <span class="flex justify-end text-sm text-accent2">+2.5%</span>
            </div>
          </div>
          <div class="grid grid-cols-5 gap-2 p-2">
            <div
              class="
                w-12
                h-12
                bg-accent-light
                font-roboto-b font-black
                text-accent text-xl
                rounded-xl
                flex
                items-center
                justify-center
              "
            >
              B
            </div>
            <div class="col-span-3">
              <div class="font-bold">BTC</div>
              <span class="text-sm text-gray-light">Bitcoin</span>
            </div>
            <div>
              <div class="flex justify-end font-black font-roboto-b">
                <span>47%</span>
              </div>
              <span class="flex justify-end text-sm text-accent2">+2.5%</span>
            </div>
          </div>
          <div class="grid grid-cols-5 gap-2 p-2">
            <div
              class="
                w-12
                h-12
                bg-accent-light
                font-roboto-b font-black
                text-accent text-xl
                rounded-xl
                flex
                items-center
                justify-center
              "
            >
              B
            </div>
            <div class="col-span-3">
              <div class="font-bold">BTC</div>
              <span class="text-sm text-gray-light">Bitcoin</span>
            </div>
            <div class="">
              <div class="flex justify-end font-black font-roboto-b">
                <span>47%</span>
              </div>
              <span class="flex justify-end text-sm text-accent2">+2.5%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- body -->
    <div class="grid grid-cols-4 gap-4 px-16 mt-20">
      <!-- wallet -->
      <div class="col-span-3">
        <div class="flex justify-between mb-2">
          <span class="uppercase">wallets</span>
          <span class="flex items-center text-sm">More <More /></span>
        </div>
        <div class="h-72 grid grid-cols-4 gap-8">
          <div
            class="
              rounded-4xl
              bg-gradient-to-b
              from-accent
              to-orange
              pt-6
              grid grid-rows-2
              pb-2
              shadow-lg shadow-accent
            "
          >
            <div class="pl-6">
              <div
                class="
                  w-10
                  h-10
                  bg-white
                  shadow-lg
                  rounded-xl
                  text-accent
                  font-black
                  text-2xl
                  flex
                  items-center
                  justify-center
                  mb-2
                "
              >
                B
              </div>
              <span class="text-white text-xl">Bitcoin</span>
            </div>
            <div class="flex justify-center items-end">
              <div>
                <span class="text-white text-xl">$3.432.23</span>
                <div>
                  <span class="text-white text-sm opacity-50"
                    >3.1237353451 BTC</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div
            class="
              rounded-4xl
              bg-gradient-to-b
              from-cyan-light
              to-cyan-dark
              pt-6
              grid grid-rows-2
              pb-2
              shadow-lg shadow-cyan-light
            "
          >
            <div class="pl-6">
              <div
                class="
                  w-10
                  h-10
                  bg-white
                  shadow-lg
                  rounded-xl
                  text-cyan-light
                  font-black
                  text-2xl
                  flex
                  items-center
                  justify-center
                  mb-2
                "
              >
                B
              </div>
              <span class="text-white text-xl">Bitcoin</span>
            </div>
            <div class="flex justify-center items-end">
              <div>
                <span class="text-white text-xl">$3.432.23</span>
                <div>
                  <span class="text-white text-sm opacity-50"
                    >3.1237353451 BTC</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div
            class="
              pb-2
              rounded-4xl
              bg-gradient-to-b
              from-blue-light
              to-blue-dark
              pt-6
              grid grid-rows-2
              shadow-lg shadow-blue-light
            "
          >
            <div class="pl-6">
              <div
                class="
                  w-10
                  h-10
                  bg-white
                  shadow-lg
                  rounded-xl
                  text-blue-light
                  font-black
                  text-2xl
                  flex
                  items-center
                  justify-center
                  mb-2
                "
              >
                B
              </div>
              <span class="text-white text-xl">Bitcoin</span>
            </div>
            <div class="flex justify-center items-end">
              <div>
                <span class="text-white text-xl">$3.432.23</span>
                <div>
                  <span class="text-white text-sm opacity-50"
                    >3.1237353451 BTC</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div
            class="
              pb-2
              rounded-4xl
              bg-gradient-to-b
              from-blue-sky-light
              to-blue-sky-dark
              pt-6
              grid grid-rows-2
              shadow-lg shadow-blue-sky-light
            "
          >
            <div class="pl-6">
              <div
                class="
                  w-10
                  h-10
                  bg-white
                  shadow-lg
                  rounded-xl
                  text-blue-sky-light
                  font-black
                  text-2xl
                  flex
                  items-center
                  justify-center
                  mb-2
                "
              >
                B
              </div>
              <span class="text-white text-xl">Bitcoin</span>
            </div>
            <div class="flex justify-center items-end">
              <div>
                <span class="text-white text-xl">$3.432.23</span>
                <div>
                  <span class="text-white text-sm opacity-50"
                    >3.1237353451 BTC</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- trading fees -->
      <div class="border">
        <div class="flex justify-between">
          <span>wallets</span>
          <span class="flex items-center"
            >More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              /></svg
          ></span>
        </div>
        <div class="h-72"></div>
      </div>
      <!-- transaction -->
      <div class="border col-span-2">
        <div class="flex justify-between">
          <span>wallets</span>
          <span class="flex items-center"
            >More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              /></svg
          ></span>
        </div>
        <div class="h-72"></div>
      </div>
      <!-- security -->
      <div class="border col-span-2">
        <div class="flex justify-between">
          <span>wallets</span>
          <span class="flex items-center"
            >More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              /></svg
          ></span>
        </div>
        <div class="h-72"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Bell from "../icons/Bell.vue";
import Cog from "../icons/Cog.vue";
import UpArrow from "../icons/UpArrow.vue";
import DownArrow from "../icons/DownArrow.vue";
import More from "../icons/More.vue";
// import { Pie } from "vue-chartjs";

export default {
  components: {
    Bell,
    Cog,
    UpArrow,
    DownArrow,
    More,
  },

  mounted() {
    // this.gradient = this.$refs.canvas
    //   .getContext("2d")
    //   .createLinearGradient(0, 0, 0, 450);
    // this.gradient2 = this.$refs.canvas
    //   .getContext("2d")
    //   .createLinearGradient(0, 0, 0, 450);
    // this.gradient.addColorStop(0, "rgba(255, 0,0, 0.5)");
    // this.gradient.addColorStop(0.5, "rgba(255, 0, 0, 0.25)");
    // this.gradient.addColorStop(1, "rgba(255, 0, 0, 0)");
    // this.gradient2.addColorStop(0, "rgba(0, 231, 255, 0.9)");
    // this.gradient2.addColorStop(0.5, "rgba(0, 231, 255, 0.25)");
    // this.gradient2.addColorStop(1, "rgba(0, 231, 255, 0)");
    // this.renderChart(
    //   {
    //     labels: ["Books", "Magazines", "Newspapers"],
    //     datasets: [
    //       {
    //         backgroundColor: [this.gradient, this.gradient2, "#00D8FF"],
    //         data: [40, 20, 10],
    //       },
    //     ],
    //   },
    //   { responsive: true, maintainAspectRatio: false }
    // );
  },
};
</script>
<style>
</style>