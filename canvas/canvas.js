<canvas id="canvas"></canvas>


body {
	padding: 0;
	margin: 0;
	overflow: hidden;
}


<script>                                                                                                                                                                                                                                                                         Q	
# anim shim
window.requestAnimFrame = (->
	return window.requestAnimationFrame || 
	window.webkitRequestAnimationFrame || 
	window.mozRequestAnimationFrame    || 
	window.oRequestAnimationFrame      || 
	window.msRequestAnimationFrame     || 
	callback ->
		window.setTimeout(callback, 1000 / 60)
	)()

canvas = null
fuzzAmount = 10
layersDrawn = 0

init = ->
	canvas = document.getElementById('canvas')
	onResize()
	frame()

frame = ->
	for [0..40]
		drawLayer(Math.random() * window.innerHeight)
	requestAnimFrame(frame)

drawLayer = (startY) ->
	layersDrawn++
	lastY = startY || window.innerHeight / 2
	lastX = 0
	c = canvas.getContext('2d')
	if Math.floor(layersDrawn / 10000) % 2
		c.strokeStyle = 'rgba(255, 255, 255, 0.05)'
	else
		c.strokeStyle = 'rgba(0, 0, 0, 0.05)'
	c.beginPath()
	c.moveTo(lastX, lastY)
	while lastX < window.innerWidth
		lastX += 10
		lastY += fuzz()
		c.lineTo(lastX, lastY)
	c.lineTo(window.innerWidth, 0)
	c.lineTo(0, 0)
	c.closePath()
	c.stroke()

fuzz = ->
	if Math.random() < 0.5
		return Math.random() * fuzzAmount
	else
		return Math.random() * fuzzAmount * -1

onResize = ->
	# note: this resets the canvas contents
	canvas.setAttribute('width', window.innerWidth + 'px')
	canvas.setAttribute('height', window.innerHeight + 'px')

window.onload = init
window.onresize = onResize
</script>
