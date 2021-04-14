;(function () {
    let canvas, ctx, mouse
  
    class Mouse {
      constructor (ctx, x = 0, y = 0) {
        this.x = x
        this.y = y
        this.ctx = ctx
      }
  
      set pos (evt) {
        const canvasDimensions = canvas.getBoundingClientRect()
  
        this.x = Math.floor(evt.clientX - canvasDimensions.left)
        this.y = Math.floor(evt.clientY - canvasDimensions.top)
  
        const { x, y, ctx } = this
        const txt = `X: ${x}, Y: ${y}`
  
        ctx.font = '16px Monospace'

        const offsetX = x < canvas.width / 2 ? 20 : -ctx.measureText(txt).width - 20
        const offsetY = y < canvas.height / 2 ? 25 : -18
  
        ctx.fillText(txt, this.x + offsetX, this.y + offsetY)
      }
    }
  
    class Line {
      constructor (color, lineWidth, startX, startY, endX, endY) {
        this.color = color
        this.lineWidth = lineWidth
        this.startX = startX
        this.startY = startY
        this.endX = endX
        this.endY = endY
      }
  
      draw (ctx) {
        const { color, lineWidth, startX, startY, endX, endY } = this
  
        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.lineWidth = lineWidth
        ctx.moveTo(startX, startY)
        ctx.lineTo(endX, endY)
        ctx.stroke()
      }
    }
  
    class Grid {
      constructor (
        color = 'black', lineWidth = 0.25, step = 25,
        boldNth = 5, boldColor = 'black', boldWidth = 0.5
      ) {
        this.color = color
        this.lineWidth = lineWidth
        this.step = step
        this.boldNth = boldNth
        this.boldColor = boldColor
        this.boldWidth = boldWidth
  
        this.lines = null
      }
  
      createLines () {
        const {
          color, lineWidth, step,
          boldNth, boldColor, boldWidth
        } = this
  
        const lines = []
  
        const div = boldNth * step
  
        for (let x = 0; x < canvas.width; x += step) {
          const isNth = x % div === 0
  
          lines.push(
            isNth
              ? new Line(boldColor, boldWidth, x, 0, x, canvas.height)
              : new Line(color, lineWidth, x, 0, x, canvas.height)
          )
        }
  
        for (let y = 0; y < canvas.height; y += step) {
          const isNth = y % div === 0
  
          lines.push(
            isNth
              ? new Line(boldColor, boldWidth, 0, y, canvas.width, y)
              : new Line(color, lineWidth, 0, y, canvas.width, y)
          )
        }
  
        this.lines = lines
      }
  
      drawText (ctx) {
        const { step, boldNth, boldColor } = this
  
        ctx.font = '16px Monospace'
        ctx.fillStyle = boldColor
  
        ctx.fillText('0', 1, 15)
  
        for (let x = step * boldNth; x < canvas.width; x += step * boldNth) {
          ctx.fillText(x, x, 15)
        }
  
        for (let y = step * boldNth; y < canvas.height; y += step * boldNth) {
          ctx.fillText(y, 0, y + 15)
        }
      }
  
      draw (ctx) {
        if (!this.lines) this.createLines()
  
        this.lines.forEach(line => line.draw(ctx))
        this.drawText(ctx)
      }
    }
  
    function init () {
      canvas = document.getElementById('Canvas')
      ctx = canvas.getContext('2d')
      mouse = new Mouse(ctx)
  
      const grid = new Grid('black', 0.25, 50, 2)
  
      grid.draw(ctx)
  
      canvas.addEventListener('mousemove', (evt) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
  
        grid.draw(ctx)

        mouse.pos = evt
      })
    }
  
    document.addEventListener('DOMContentLoaded', init)
  })()