<template>
  <transition name="fade">
    <div 
      v-if="show" 
      class="preloader"
    >
      <p>Ale śmiga!</p>
      <div class="circles">
        <div class="circle" />
        <div class="circle" />
        <div class="circle" />
        <div class="circle" />
        <div class="circle" />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Preloader",
	data(){
		return {
			show: true
		}
	},
	mounted(){
		if (this.show) {
            this.showToggle();
        }
	},
	methods: {
		showToggle(){
			setTimeout(() => {
				this.show = false
			}, 700)
		}
	}
}
</script>

<style scoped>
  .preloader {
      display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #fff;
        z-index: 9999;
  }
	
	.preloader p {
        position: absolute;
        top: 30px;
        width: 200px;
        text-align: center;
        left: calc(50%-200px);
        color: #034d9d;
        font-size: 30px;
        font-weight: 600;
    }
	.preloader .circles {
        position: absolute;
        top: 100px;
		display: flex;
    }
		.preloader .circles .circle {
			width: 1.5rem;
			height: 1.5rem;
            margin: .75rem;
			background-color: #007bff;
			border-radius: 50%;
			animation-name: scaleOut;
			animation-duration: .7s;
			transform: scale(0);
        }

			.preloader .circles .circle:nth-child(1) {
				animation-delay: .0s;

            }
			.preloader .circles .circle:nth-child(2) {
				animation-delay: .05s;

            }
			.preloader .circles .circle:nth-child(3) {
				animation-delay: .1s;

            }
			.preloader .circles .circle:nth-child(4) {
				animation-delay: .15s;

            }
			.preloader .circles .circle:nth-child(5) {
				animation-delay: .2s;

            }

            @keyframes scaleOut {
                0% {transform: scale(0)}
                100% {transform: scale(0.5)}
            }
</style>