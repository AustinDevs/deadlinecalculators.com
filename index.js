import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

await imagemin(['assets/images/*.{jpg,png}'], {
	destination: 'assets/images',
	plugins: [
		imageminWebp({quality: 50})
	]
});

console.log('Images optimized');