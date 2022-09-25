import { tsConstructorType } from '@babel/types'
import { Link } from 'react-router-dom'
import Controller from '../../components/Controller'

// Image Controller

export function Tiles() {

    Constructor(canvas, image) {
        this.canvas = canvas;
        this.image = image
        this.originalImg = image图片的高度置成画布高度
        this.ctx = this.canvas.getContext('2d')

        this.getFitSize = function () {
            let x = 0
            let y = 0
            let w = this.imageW // the width of the image
            let h = this.imageH // the height of the picture
            let cw = this.cavW // the width of the canvas
            let ch = this.cavH // the height of the canvas
            if (w < cw && h < ch) {
              x = 0.5 * cw - 0.5 * w
              y = 0.5 * ch - 0.5 * h
            } else if (h / w > ch / cw) {
              w = w * ch / h // ()
              h = ch// The height of the image is set to the height of the canvas
              x = 0.5 * cw - 0.5 * w
            } else {
              h = h * cw / w
              w = cw// The width of the image is set to the width of the canvas
              y = 0.5 * ch - 0.5 * h
            }
            return {
              x, y, w, h
            }
          }
          this.isNum = function (o) {
            return /^(-?\d+)(\.\d+)?$/.test(o)
          }
          // initialization
          this.init()
        }
      
        init() {
          this.initData()
          this.initListener()初始化放大倍数
        }
      
        initData() {
          let { width: imageW, height: imageH } = this.image
          let { width: cavW, height: cavH } = this.canvas
          // gain
          this.imgScale = 1
          // Rotation angle
          this.angle = 0
          // Vertical pixel inversion
          this.isVRevert = 1
          // Horizontal pixel inversion
          this.isHRevert = 1
          // whether to move
          this.isMove = false
          // the width of the image
          this.imageW = imageW
          // the height of the picture
          this.imageH = imageH
          // the width of the canvas
          this.cavW = cavW
          // the height of the canvas
          this.cavH = cavH
          let size = this.getFitSize()
          this.imgX = size.x
          this.imgY = size.y
          this.image = this.originalImg
        }
      
        // Initialize listener
        initListener() {
          this.canvas.addEventListener('mousedown', this, false)
          this.canvas.addEventListener('mouseup', this, false)
          this.canvas.addEventListener('mouseout', this, false)
          this.canvas.addEventListener('mousewheel', this, false)
        }
      
        handleEvent(e) {
          switch (e.type) {
            case 'mousemove':
              this.mousemove(e)
              break
            case 'mousewheel':
              this.mousewheel(e)
              break
            case 'mouseup':
              this.mouseup(e)
              break
            case 'mousedown':
              this.mousedown(e)
              break
            case 'mouseout':
              this.mouseout(e)
              break
          }
        }
        mouseout() {
          this.isMove = false
          this.canvas.style.cursor = 'default '
          this.canvas.removeEventListener('mousemove', this, false)
        }
      
        // mouse down
        mousedown(event) {
          this.mouseDownPos = this.windowToCanvas(event.clientX, event.clientY)
          this.isMove = true
          this.canvas.style.cursor = 'move'
          this.canvas.addEventListener('mousemove', this, false)
        }
      
        // mouse up
        mouseup() {
          this.isMove = false
          this.canvas.style.cursor = 'default '
          this.canvas.removeEventListener('mousemove', this, false)
        }
      
        // mouse movement
        mousemove(event) {
          if (!this.isMove) {
            return
          }
          let pos = this.mouseDownPos
          this.canvas.style.cursor = 'move'
          let pos1 = this.windowToCanvas(event.clientX, event.clientY)
          let x = pos1.x - pos.x
          let y = pos1.y - pos.y
          this.mouseDownPos = pos1
          this.imgX += x
          this.imgY += y
          // drawImage()
          this.draw()
        }
      
        // Listen to canvas zoom in and out events
        mousewheel(event) {
          let pos = this.windowToCanvas(event.clientX, event.clientY)
          let _wheelDelta = event.wheelDelta ? event.wheelDelta : (event.deltaY * (-40))
          if (_wheelDelta > 0) { // 放大
            this.imgScale *= 2
            this.imgX = this.imgX * 2 - pos.x
            this.imgY = this.imgY * 2 - pos.y
          } else {
            this.imgScale /= 2
            this.imgX = this.imgX * 0.5 + pos.x * 0.5
            this.imgY = this.imgY * 0.5 + pos.y * 0.5
          }
          this.draw()
        }
        scale(num) {
          if (this.isNum(num)) {
            this.imgScale *= num
            this.draw()
          }
        }
        // set to original size
        setOriginalSize() {
          let size = this.getFitSize()
          this.imgScale = this.originalImg.width / size.w
          let pos = {
            x: this.cavW / 2 - this.originalImg.width / 2,
            y: this.cavH / 2 - this.originalImg.height / 2
          }
          if (this.imgScale > 1) { // 放大
            this.imgX = pos.x * this.imgScale
            this.imgY = pos.y * this.imgScale
          } else {
            this.imgX = pos.x / this.imgScale
            this.imgY = pos.y / this.imgScale
          }
          this.draw()
        }
        // destroy
        dstroy() {
          this.canvas.removeEventListener('mousedown', this, false)
          this.canvas.removeEventListener('mouseout', this, false)
          this.canvas.removeEventListener('mousewheel', this, false)
          this.canvas.removeEventListener('mouseup', this, false)
          this.canvas.removeEventListener('mousemove', this, false)
          this.canvas = null
          this.image = null
        }
      
        // Get the area of ​​the canvas in the window
        windowToCanvas(x, y) {
          let bbox = this.canvas.getBoundingClientRect()
          return {
            x: x - bbox.left - (bbox.width - this.cavW) / 2,
            y: y - bbox.top - (bbox.height - this.cavH) / 2
          }
        }
      
        // empty
        clearCanvas() {
          this.ctx.clearRect(0, 0, this.cavW, this.cavH)
        }
      
        /**
         * 画
         * x the location of the picture
         * y the location of the picture
         * w width of the picture
         * h width of the picture
         *
         * */
        renderImage(x, y, w, h) {
          this.clearCanvas()
          this.ctx.save()
          this.ctx.fillStyle = 'white'
          this.ctx.fill()
          this.ctx.translate(x + w / 2, y + h / 2)
          this.ctx.rotate(this.angle)
          this.ctx.scale(this.isHRevert, this.isVRevert)
          this.ctx.drawImage(this.image, 0, 0, this.imageW, this.imageH, -w / 2, -h / 2, w, h)
          this.ctx.restore()
        }
      
        // Rotation angle
        rotate(rad) {
          this.angle += rad
          this.draw()
        }
      
        // vertical mirror
        vRevert() {
          this.isVRevert *= -1
          this.draw()
        }
      
        // Horizontal mirror
        hRevert() {
          this.isHRevert *= -1
          this.draw()
        }
        draw() {
          let size = this.getFitSize()
          this.renderImage(this.imgX, this.imgY, size.w * this.imgScale, size.h * this.imgScale)
        }
      }
    }


    return (
        <>
        <Controller />
        <canvas id="canvas">

        </canvas>
        </>
            

        
    )


}

export default Tiles
