class InitRem {
  docEl = document.documentElement
  splitSize = 10

  public setRem(): void {
    if (this.docEl.clientWidth >= 540) {
      this.docEl.style.fontSize = '54px'
    } else {
      this.docEl.style.fontSize = `${this.docEl.clientWidth / this.splitSize}px`
    }
  }

  public winResize(): void {
    window.onresize = () => this.setRem()
  }

  public init(): void {
    this.setRem()
    this.winResize()
  }
}

export default InitRem
