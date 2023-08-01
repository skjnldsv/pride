const svg = `<svg xmlns="http://www.w3.org/2000/svg">
	<defs>
		<linearGradient id="gradient-pride" gradientTransform="rotate(90)">
			<stop stop-color="#E04641" stop-opacity=".8" offset="0%"></stop>
			<stop stop-color="#E04641" stop-opacity=".8" offset="16.67%"></stop>
			<stop stop-color="#DE7E41" stop-opacity=".8" offset="16.67%"></stop>
			<stop stop-color="#DE7E41" stop-opacity=".8" offset="33.34%"></stop>
			<stop stop-color="#E4D56F" stop-opacity=".8" offset="33.34%"></stop>
			<stop stop-color="#E4D56F" stop-opacity=".8" offset="50%"></stop>
			<stop stop-color="#55B85F" stop-opacity=".8" offset="50%"></stop>
			<stop stop-color="#55B85F" stop-opacity=".8" offset="66.67%"></stop>
			<stop stop-color="#2473B5" stop-opacity=".8" offset="66.67%"></stop>
			<stop stop-color="#2473B5" stop-opacity=".8" offset="83.34%"></stop>
			<stop stop-color="#6F5DA5" stop-opacity=".8" offset="83.34%"></stop>
			<stop stop-color="#6F5DA5" stop-opacity=".8" offset="100%"></stop>
		</linearGradient>
	</defs>
</svg>`

const container = document.createElement('div')
container.classList.add('hidden-visually')
container.ariaHidden = true
container.innerHTML = svg

document.body.prepend(container)
