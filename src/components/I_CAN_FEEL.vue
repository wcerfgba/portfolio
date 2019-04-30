<template>
  <div class="i_can_feel" ref="outer">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
const phaseData = {
  omega: [ 1009, 997, 991, 983, 977, 971, 967, 953, 947, 941, 937, 929, 919, 911, 907, 887, 883, 881, 877, 863, 859, 857, 853, 839, 829, 827, 823, 821, 811, 809, 797, 787, 773, 769, 761, 757, 751, 743, 739, 733, 727, 719, 709, 701, 691, 683, 677, 673, 661, 659, 653, 647, 643, 641, 631, 619, 617, 613, 607, 601, 599, 593, 587, 577, 571, 569, 563, 557, 547, 541, 523, 521, 509, 503, 499, 491, 487, 479, 467, 463, 461, 457, 449, 443, 439, 433, 431, 421, 419, 409, 401, 397, 389, 383, 379, 373, 367, 359, 353, 349, 347, 337, 331, 317, 313, 311, 307, 293, 283, 281, 277, 271, 269, 263, 257, 251, 241, 239, 233, 229, 227, 223, 211, 199, 197, 193, 191, 181, 179, 173, 167, 163, 157, 151, 149, 139, 137, 131, 127, 113, 109, 107, 103, 101, 97, 89, 83, 79, 73, 71, 67, 61, 59, 53, 47, 43, 41, 37, 31, 29, 23, 19, 17, 13, 11, 7, 5, 3, 2 ],
  theta: [ 940, 388, 364, 823, 796, 284, 268, 688, 188, 164, 616, 580, 535, 499, 28, 835, 373, 805, 785, 283, 695, 256, 665, 175, 545, 121, 103, 505, 455, 40, 385, 335, 651, 629, 585, 185, 530, 115, 464, 431, 35, 714, 299, 606, 546, 156, 462, 101, 366, 24, 318, 605, 579, 246, 186, 423, 410, 78, 345, 6, 293, 551, 215, 439, 111, 383, 341, 299, 229, 187, 61, 47, 472, 424, 392, 328, 296, 232, 136, 335, 318, 56, 216, 165, 351, 80, 63, 189, 380, 81, 9, 370, 95, 230, 190, 316, 70, 349, 106, 239, 217, 275, 41, 204, 156, 287, 237, 209, 220, 193, 1, 58, 31, 82, 126, 165, 15, 224, 11, 64, 32, 79, 198, 181, 44, 67, 29, 110, 159, 33, 74, 67, 11, 24, 50, 83, 99, 2, 19, 16, 51, 91, 5, 36, 86, 49, 52, 34, 50, 21, 18, 60, 58, 4, 19, 12, 8, 26, 27, 25, 11, 10, 4, 1, 8, 5, 0, 0, 0 ],
}

export default {
  name: 'I_CAN_FEEL',
  data: function () {
    return {
      ...phaseData,
      n: 13,
      ctx: null,
    }
  },
  mounted: function () {
    this.rescale()
    window.addEventListener('resize', this.rescale)
    this.ctx = this.$refs.canvas.getContext('2d')
    this.animate()
  },
  methods: {
    x: function (i) { return this.$refs.canvas.width * (i % this.n) / this.n },
    y: function (i) { return this.$refs.canvas.height * Math.floor(i / this.n) / this.n },
    animate: function () {
      const w = this.$refs.canvas.width / this.n
      for (let i = 0; i < this.omega.length; i++) {
        this.theta[i] = (this.theta[i] + 1) % this.omega[i]
        const c = 255 * Math.round(this.theta[i] / this.omega[i])
        this.ctx.fillStyle = `rgb(${c}, ${c}, ${c})`
        this.ctx.fillRect(this.x(i), this.y(i), w, w)
      }
      window.requestAnimationFrame(this.animate)
    },
    rescale: function () {
      const minParentDim = Math.min(
        this.$refs.outer.parentElement.clientWidth,
        this.$refs.outer.parentElement.clientHeight
      )
      this.$refs.canvas.width = minParentDim
      this.$refs.canvas.height = minParentDim
      this.$refs.outer.style.width = minParentDim + 'px'
      this.$refs.outer.style.height = minParentDim + 'px'
    },
    resetArt: function () {
      this.theta = [...phaseData.theta]
    }
  }
}
</script>

<style scoped>
.i_can_feel {
  width: 100%;
  height: 100%;
}

canvas {
  display: block;
}
</style>
